import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { FormComponent } from './../../../../core/components/forms/form.component';

import { TaxRatesService, TaxesService,
         ShippingFrequencyService
        } from './../../../../services/general/index';

import { ShippingFrequency, TaxAccountingAccount, Taxes } from './../../../../models/general-model';
import { Accounts } from './../../../../models/accounting-model';

import { MessagesService, ApiServerService } from './../../../../utils';
import { AccountsService } from './../../../../services/accounting';

declare var $:any;

@Component({
  selector: 'app-edit-taxrates',
  templateUrl: './edit-taxrates.component.html'
})
export class EditTaxratesComponent extends FormComponent implements OnInit, AfterViewInit
{
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('cbAccountingAccount', { static: false }) cbAccountingAccount: jqxComboBoxComponent;
  taxGroup: Taxes[] = [];
  taxAccount: TaxAccountingAccount[] = [];
  taxFrecuency: ShippingFrequency[] = [];
  accounts: Accounts[] = [];

  constructor(public fb: FormBuilder,
      public msg: MessagesService,
      public api: ApiServerService,
      public router: Router,
      public translate: TranslateService,
      public aRouter: ActivatedRoute,
      public spinner: NgxSpinnerService,
      private types: TaxRatesService,
      private tax: TaxesService,
      private taxFrec: ShippingFrequencyService,
      private accountsSer: AccountsService
  ){
  super(fb, msg, api, router, translate, aRouter, spinner);
    const ts  = this;
    ts.translate.setDefaultLang(this.activeLang);
    ts.customForm = this.fb.group({
      tax_gruop_id          : [1, [Validators.required]],
      account_id            : ['0'],
      shipping_frequency_id : [1, [Validators.required]],
      rate_name             : ['', [Validators.required, Validators.minLength(3)] ],
      rate_abbre            : ['', [Validators.required, Validators.minLength(1)] ],
      rate_value            : [0, [Validators.required] ],
      decimal_rate          : [0.0, [Validators.required] ],
      is_exempt             : [false, [Validators.required]],
    });

  }

  get invalidTaxGroupId(): boolean{
    return (this.customForm.get('tax_gruop_id').value === 0) ? true : false;
  }

  get invalidShippingFrequencyId(): boolean{
    return (this.customForm.get('shipping_frequency_id').value === 0) ? true : false;
  }

  get invalidRateName(): boolean{
    return this.customForm.get('rate_name').invalid && this.customForm.get('rate_name').touched;
  }
  get invalidRateAbbre(): boolean{
    return this.customForm.get('rate_abbre').invalid && this.customForm.get('rate_abbre').touched;
  }


  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.title    = 'Crear/Editar rango de impuesto';
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('taxes.rate.title')}`;
    ts.PutURL   = '/general/taxerates/update/';
    ts.PostURL  = '/general/taxerates/create';
  }

  ngAfterViewInit(): void{
    super.ngAfterViewInit();
    const ts    = this;
    ts.tax.getData({}).subscribe((resp) => {
      this.taxGroup = resp;
    });

    ts.taxFrec.getData({}).subscribe((resp) => {
      this.taxFrecuency = resp;
    });

    ts.accountsSer.getDataAll({}).subscribe((resp) => {
      this.accounts = resp;
    });
  }


  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.types.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        account_id            :  (resp[0].account_id == 0) ? '0' : resp[0].account_id,
        shipping_frequency_id :  resp[0].shipping_frequency_id,
        decimal_rate          :  resp[0].decimal_rate,
        rate_abbre            :  resp[0].rate_abbre,
        rate_name             :  resp[0].rate_name,
        rate_value            :  resp[0].rate_value,
        tax_gruop_id          :  resp[0].tax_gruop_id,
        is_exempt             :  resp[0].is_exempt
      });
    });
  }
}
