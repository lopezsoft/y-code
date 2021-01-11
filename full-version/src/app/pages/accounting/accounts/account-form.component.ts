import { NgxSpinnerService } from 'ngx-spinner';
import { TaxRatesService } from './../../../services/general/tax-rates.service';
import { CurrencySysService } from './../../../services/global';
import { CurrencySys, TaxRates } from './../../../models/general-model';
import { AccountingGroupsService } from './../../../services/accounting/accounting-groups.service';
import { AccountsService } from './../../../services/accounting';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../../utils';

import { FormComponent } from './../../../core/components/forms/form.component';

import { ClassOfAccounting, AccountingGroups, Accounts } from './../../../models/accounting-model';
import { ClassOfAccountingService } from './../../../services/accounting/index';


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class AccountFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: ClassOfAccounting;
  accountGroup: AccountingGroups[] = [];
  currency: CurrencySys[] = [];
  tax: TaxRates[] = [];
  master: Accounts[] = [];
  is_subaccount = false;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public servis: ClassOfAccountingService,
              public accountSer: AccountsService,
              public masterSer: AccountsService,
              public groupSer: AccountingGroupsService,
              public currSer: CurrencySysService,
              public taxSer: TaxRatesService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      account_id          : [''],
      accounting_group_id : ['',[Validators.required]],
      currency_id         : ['',[Validators.required]],
      tax_rate_id         : ['',[Validators.required]],
      account_name        : ['', [Validators.required, Validators.minLength(5)]],
      description         : ['', [Validators.required, Validators.minLength(5)]],
      account_number      : [''],
      // initial_date        : [''],
      is_subaccount       : [false],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('account_name').invalid && this.customForm.get('account_name').touched;
  }

  get invalidDescription(): boolean{
    return this.customForm.get('description').invalid && this.customForm.get('description').touched;
  }

  get invalidCurrency(): boolean{
    return (this.customForm.get('currency_id').value === 0) ? true : false;
  }

  get invalidGroupId(): boolean{
    return (this.customForm.get('accounting_group_id').value === 0) ? true : false;
  }
  get invalidTaxId(): boolean{
    return (this.customForm.get('tax_rate_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar cuenta';
    ts.PutURL   = '/accounting/accounts/update/';
    ts.PostURL  = '/accounting/accounts/create';
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    const ts  = this;

    ts.groupSer.getData({}).subscribe((resp) => {
      ts.accountGroup = resp;
    });

    ts.currSer.getData().subscribe((resp) => {
      ts.currency = resp;
    });

    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.tax = resp;
    });

    ts.masterSer.getMasterAccounts({}).subscribe((resp) => {
      ts.master = resp;
    });
  }

  onChageSub(e: any): void{
    this.is_subaccount  = e.currentTarget.checked;
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.accountSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          account_id          : resp[0].account_id,
          accounting_group_id : resp[0].accounting_group_id,
          currency_id         : resp[0].currency_id        ,
          tax_rate_id         : resp[0].tax_rate_id        ,
          account_name        : resp[0].account_name       ,
          description         : resp[0].description        ,
          account_number      : resp[0].account_number     ,
          // initial_date        : resp[0].initial_date       ,
          is_subaccount       : resp[0].is_subaccount      ,
        });
        ts.is_subaccount  = resp[0].is_subaccount;
      });
  }


}
