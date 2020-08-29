import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { Departments, BranchOffice } from 'src/app/models/companies-model';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DepartamentsService } from 'src/app/services/companies/departaments.service';
import { BranchOfficeService } from 'src/app/services/companies/branch-office.service';
import { JsonResponse, ErrorResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-edit-departmens',
  templateUrl: './edit-departmens.component.html',
  styleUrls: ['./edit-departmens.component.scss']
})
export class EditDepartmensComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: Departments;
  branch_office: BranchOffice[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private types: DepartamentsService,
              private branch: BranchOfficeService,
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      department_name     : ['', [Validators.required, Validators.minLength(5)]],
      branch_office_id    : ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('department_name').invalid && this.customForm.get('department_name').touched;
  }
  get invalidBranch(): boolean{
    return this.customForm.get('branch_office_id').invalid && this.customForm.get('branch_office_id').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar departamentos';
    ts.model  = {
      id: 0,
      branch_office_id: 0,
      department_name: '',
      state: 1
    };
    ts.PutURL   = '/companies/departments/update/';
    ts.PostURL  = '/companies/departments/create';
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;
    ts.types.getData().subscribe((resp) => {
      this.model = resp[0];
      console.log(resp)
    });
    await ts.branch.getData().subscribe((resp) => {
      ts.branch_office  = resp;
      console.log("branch_office", ts.branch_office)
    });

    await ts.api.get(`/companies/branchoffice/read`).
      subscribe((resp: any) => {
        if (resp.records.length > 0) {
          ts.branch_office    = resp.records[0];
          ts.editing  = true;
          ts.uid      = ts.model.id;
        }
      }, (err: ErrorResponse) => {
        ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
      });
  }
}
