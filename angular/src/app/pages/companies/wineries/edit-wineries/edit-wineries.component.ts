import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { wineries, BranchOffice } from 'src/app/models/companies-model';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { WineriesService  } from 'src/app/services/companies/wineries.service';
import { BranchOfficeService } from 'src/app/services/companies/branch-office.service';
import { ErrorResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-edit-wineries',
  templateUrl: './edit-wineries.component.html',
  styleUrls: ['./edit-wineries.component.scss']
})
export class EditWineriesComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: wineries;
  branch_office: BranchOffice[] = [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private types: WineriesService,
              private branch: BranchOfficeService,
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      winery_name  : ['', [Validators.required, Validators.minLength(5)]],
      branch_id    : ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('winery_name').invalid && this.customForm.get('winery_name').touched;
  }
  get invalidBranch(): boolean{
    return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar bodegas';
    ts.model  = {
      id:0,
      branch_id: 0,
      winery_name: '',
      state: 1
    };
    ts.PutURL   = '/companies/wineries/update/';
    ts.PostURL  = '/companies/wineries/create';

    ts.branch.getData({}).subscribe((resp) => {
      ts.branch_office  = resp;
    });
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;
    ts.types.getData({uid: id}).subscribe((resp) => {
      this.model = resp[0];
    });
  }


}
