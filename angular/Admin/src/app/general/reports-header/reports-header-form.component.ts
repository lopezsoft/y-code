import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormComponent } from './../../core/components/forms/index';

import { ReportsHeaderService } from './../../services/general/index';
import { BranchOfficeService } from './../../services/companies';

import { BranchOffice } from './../../models/companies-model';
import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';

@Component({
  selector: 'app-reports-header-form',
  templateUrl: './reports-header.component.html',
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderFormComponent extends FormComponent implements OnInit, AfterViewInit {
    @ViewChild('editorHeader') editorHeader: jqxEditorComponent;
    @ViewChild('editorHeader2') editorHeader2: jqxEditorComponent;
    @ViewChild('footline') footline: jqxEditorComponent;
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
					frm.get('branch_office_id').setValue(resp[0].branch_office_id);
                    if(ts.editorHeader) {
                        ts.editorHeader.val(resp[0].line1);
                    }
                    if(ts.editorHeader2) {
                        ts.editorHeader2.val(resp[0].line2);
                    }
                    if(ts.footline) {
                        ts.footline.val(resp[0].foot);
                    }
					ts.imgData              = resp[0].image ? `${ts.api.getAppUrl()}${resp[0].image}` : '';
				}
			},
			error: ()=> ts.hideSpinner()
		});
  }


  onBeforeSave(frm: FormGroup) {
    const ts  = this;
    if(ts.editorHeader) {
        frm.get('line1').setValue(ts.editorHeader.val());
    }
    if(ts.editorHeader2) {
        frm.get('line2').setValue(ts.editorHeader2.val());
    }
    if(ts.footline) {
        frm.get('foot').setValue(ts.footline.val());
    }
  }


}
