import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from './../../../core/components/forms/form.component';

import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from './../../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Currency }  from './../../../models/general-model';
import { CurrencySysService } from './../../../services/general/currency-sys.service';
import {CurrencyService} from './../../../services/general/currency.service'

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html'
})
export class EditCurrencyComponent extends FormComponent implements OnInit{

  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('exchangeRateValue') exchangeRateValue: ElementRef;
  currency: Currency[]= [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              private curr: CurrencyService,
              private currSys: CurrencySysService
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      currency_id                 : [0, [Validators.required] ],
      exchange_rate_value         : [0, [Validators.required] ],
      national_currency           : [false],
      plural_name                 : ['', [Validators.required, Validators.minLength(3)] ],
      singular_name               : ['', [Validators.required, Validators.minLength(3)] ],
      denomination                : ['', [Validators.required, Validators.minLength(3)] ],
    });
  }

  get invalidCurrencyId(): boolean{
    return this.isInvalid('currency_id');
  }
  get invalidExchangeRateValue(): boolean{
    return this.isInvalid('exchange_rate_value');
  }
  get invalidNationalCurrency(): boolean{
    return this.isInvalid('national_currency');
  }
  get invalidPluralName(): boolean{
    return this.isInvalid('plural_name');
  }
  get invalidSingularName(): boolean{
    return this.isInvalid('singular_name');
  }
  get invalidDenomination(): boolean{
    return this.isInvalid('denomination');
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    const frm   = ts.customForm;
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('currency.title')}`;
    ts.PutURL   = '/general/currency/update/';
    ts.PostURL  = '/general/currency/create';
    ts.curr.getData({}).subscribe((resp) => {
      ts.currency   = resp;
      if(resp.length > 0) {
        frm.get('currency_id').setValue(resp[0].id);
      }
    });

  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;

    ts.currSys.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        currency_id                 : resp[0].currency_id        ,
        exchange_rate_value         : resp[0].exchange_rate_value,
        national_currency           : resp[0].national_currency  ,
        plural_name                 : resp[0].plural_name        ,
        singular_name               : resp[0].singular_name      ,
        denomination                : resp[0].denomination       ,
      })
    });
  }

  onCurrencyChange(id: any): void{
    const ts = this;
    if(id){
      const curr = ts.currency.find( currency => currency.id === id);
      const local = ts.customForm.get('national_currency').value;
      if (!local) {
        const frm = ts.customForm;
        ts.showSpinner();
        ts.currSys.getChangeLocal({ source: curr.CurrencyISO})
                  .subscribe((resp) => {
                    ts.hideSpinner();
                    frm.get('exchange_rate_value').setValue(resp[0].value);
                    frm.get('plural_name').setValue(curr.CurrencyName);
                    frm.get('singular_name').setValue(curr.Money);
                    frm.get('denomination').setValue(curr.CurrencyISO);
                  });
      }
    }
  }
}
