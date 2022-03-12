import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiServerService, MessagesService } from './../../utils';
import { TranslateService } from '@ngx-translate/core';
import { BranchOfficeService } from './../../services/companies/branch-office.service';

import { FormComponent } from './../../core/components/forms/form.component';
import { BranchOffice } from './../../models/companies-model';

@Component({
  selector: 'app-points-of-sale-form',
  templateUrl: './points-of-sale-form.component.html'
})
export class PointsOfSaleFormComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  branchs: BranchOffice[]= [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner:  NgxSpinnerService,
              private branch: BranchOfficeService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      branch_id       : ['', [Validators.required]],
      branch_name     : ['',[Validators.required, Validators.minLength(5)]],
      address         : [''],
      mobile          : [''],
      phone           : [''],
    });
  }

  get invalidBranchId(): boolean{
    return (this.customForm.get('branch_id').value === 0) ? true : false;
  }

  get invalidBranchName(): boolean{
    return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('pointsofsale.title')}`;
    ts.PutURL   = '/companies/branchoffice/pointofsale/update/';
    ts.PostURL  = '/companies/branchoffice/pointofsale/create';

    ts.branch.getData({}).subscribe((resp) => {
      ts.branchs  = resp;
			if(resp.length == 0) {
				ts.goRoute('companies/branchoffice');
			}
    });

  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.branch.getPointsOfSale({uid: id}).subscribe((resp) => {
      frm.setValue({
        branch_id       : resp[0].branch_id       ,
        branch_name     : resp[0].branch_name     ,
        address         : resp[0].address         ,
        mobile          : resp[0].mobile          ,
        phone           : resp[0].phone           ,
      });
    });
  }

}
