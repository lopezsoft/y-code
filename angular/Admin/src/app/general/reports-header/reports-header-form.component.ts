import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormComponent } from './../../core/components/forms/index';

import { ReportsHeaderService } from './../../services/general/index';
import { BranchOfficeService } from './../../services/companies';

import { BranchOffice } from './../../models/companies-model';

@Component({
  selector: 'app-reports-header-form',
  templateUrl: './reports-header.component.html',
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('uploadFile') uploadFile: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  @ViewChild('focusElement') focusElement: ElementRef;
  public branchs : BranchOffice[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public reportSer: ReportsHeaderService,
              public spinner: NgxSpinnerService,
              private branch: BranchOfficeService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      branch_office_id  : [0],
      line1             : [''],
      line2             : [''],
      foot              : [''],
    });
  }


  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const frm   = ts.customForm;
    ts.PutURL   = '/general/reports/update/';
    ts.PostURL  = '/general/reports/create';

    ts.branch.getData({}).subscribe((resp) => {
      ts.branchs  = resp;
      if( resp.length > 0 ) {
        frm.get('branch_office_id').setValue(resp[0].id);
      }
    });
    ts.loadData();
  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.reportSer.getData({uid : id})
		.subscribe({
			next: (resp) => {
				ts.hideSpinner();
				if(resp.length > 0){
					ts.editing  = true;
					ts.uid      = resp[0].id;
					frm.setValue({
						branch_office_id  : resp[0].branch_office_id ,
						line1             : resp[0].line1 ,
						line2             : resp[0].line2 ,
						foot              : resp[0].foot  ,
					});
					ts.imgData              = resp[0].image ? `${ts.api.getAppUrl()}${resp[0].image}` : '';
				}
			},
			error: ()=> ts.hideSpinner()
		});
  }


}
