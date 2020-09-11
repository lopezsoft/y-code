import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';

import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CurrencySys, Currency }  from 'src/app/models/general-model';
import { CurrencySysService } from 'src/app/services/general/currency-sys.service';
import {CurrencyService} from 'src/app/services/general/currency.service'

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
              private curr: CurrencyService,
              private currSys: CurrencySysService
  ){
    super(fb, msg, api, router, translate, aRouter);
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
    return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
  }
  get invalidExchangeRateValue(): boolean{
    return this.customForm.get('exchange_rate_value').invalid && this.customForm.get('exchange_rate_value').touched;
  }
  get invalidNationalCurrency(): boolean{
    return this.customForm.get('national_currency').invalid && this.customForm.get('national_currency').touched;
  }
  get invalidPluralName(): boolean{
    return this.customForm.get('plural_name').invalid && this.customForm.get('plural_name').touched;
  }
  get invalidSingularName(): boolean{
    return this.customForm.get('singular_name').invalid && this.customForm.get('singular_name').touched;
  }
  get invalidDenomination(): boolean{
    return this.customForm.get('denomination').invalid && this.customForm.get('denomination').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('currency.title')}`; 
    ts.PutURL   = '/general/currency/update/';
    ts.PostURL  = '/general/currency/create';
    ts.curr.getData({}).subscribe((resp) => {
      ts.currency  = resp;
    });

  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;

    ts.currSys.getData({uid: id}).subscribe((resp) => {
      ts.customForm.setValue({
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
    const ts  = this;
    if(id){
      const curr = ts.currency.find( currency => currency.id === id);
      const local = ts.customForm.get('national_currency').value;
      if (!local){
        ts.activeLoading();
        ts.currSys.getChangeLocal({ source: curr.CurrencyISO}).
                  subscribe((resp) => {
                    ts.disabledLoading();
                    ts.exchangeRateValue.nativeElement.value = resp[0].value;
                  });
      }
    }
  }
}
