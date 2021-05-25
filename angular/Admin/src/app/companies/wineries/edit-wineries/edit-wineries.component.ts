import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FormComponent } from './../../../core/components/forms/form.component';
import { Departments, BranchOffice } from './../../../models/companies-model';

import { WineriesService  } from './../../../services/companies/wineries.service';
import { BranchOfficeService, DepartmentsService } from './../../../services/companies/index';
import { MessagesService, ApiServerService } from './../../../utils';

@Component({
  selector: 'app-edit-wineries',
  templateUrl: './edit-wineries.component.html'
})
export class EditWineriesComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  branch_office: BranchOffice[] = [];
  departments: Departments[] = [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              private winerSer: WineriesService,
              private branch: BranchOfficeService,
              private depart: DepartmentsService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      winery_name  : ['', [Validators.required, Validators.minLength(5)]],
      branch_id    : ['', [Validators.required]],
      department_id: ['']
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
    ts.PutURL   = '/companies/wineries/update/';
    ts.PostURL  = '/companies/wineries/create';

    ts.branch.getData({}).subscribe((resp) => {
      ts.branch_office  = resp;
    });

    ts.depart.getData({}).subscribe((resp) => {
      ts.departments  = resp;
    });
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.winerSer.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        branch_id     : resp[0].branch_id  ,
        department_id : resp[0].department_id,
        winery_name   : resp[0].winery_name,
      })
    });
  }


}
