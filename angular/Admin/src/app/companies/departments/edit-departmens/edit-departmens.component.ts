import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FormComponent } from './../../../core/components/forms/form.component';
import { Departments, BranchOffice } from './../../../models/companies-model';

import { MessagesService, ApiServerService } from './../../../utils';
import { DepartmentsService, BranchOfficeService } from './../../../services/companies/index';

@Component({
  selector: 'app-edit-departmens',
  templateUrl: './edit-departmens.component.html'
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
              public spinner: NgxSpinnerService,
              private types: DepartmentsService,
              private branch: BranchOfficeService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
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
    return (this.customForm.get('branch_office_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar departamentos';
    ts.PutURL   = '/companies/departments/update/';
    ts.PostURL  = '/companies/departments/create';

    ts.branch.getData({}).subscribe((resp) => {
      ts.branch_office  = resp;
    });

  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.types.getData({uid: id}).subscribe((resp) => {
      frm.setValue( {
        branch_office_id  : resp[0].branch_office_id  ,
        department_name   : resp[0].department_name   ,
      });
    });
  }
}
