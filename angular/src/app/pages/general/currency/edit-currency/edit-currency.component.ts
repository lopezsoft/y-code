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
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss']
})
export class EditCurrencyComponent extends FormComponent implements OnInit{

  @ViewChild('focusElement') focusElement: ElementRef;
  model: CurrencySys;
  currency: Currency[]= [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private types: CurrencyService,
              private curr: CurrencySysService
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      currency_id                 : ['', [Validators.required, Validators.minLength(1)] ],
      exchange_rate_value         : ['', [Validators.required, Validators.minLength(3)] ],
      national_currency           : ['', [Validators.required, Validators.minLength(1)] ],
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
    ts.title  = 'Crear/Editar moneda';
    ts.model = {
      id: 0,
      currency_id:0,
      currency_name: '',
      denomination: '',
      exchange_rate_value: 0,
      national_currency: 0,
      plural_name: '',
      singular_name: '',
      CurrencyISO: '',
      state: 1
    };
    ts.PutURL   = '/general/currency/update/';
    ts.PostURL  = '/general/currency/create';

    ts.curr.getData().subscribe((resp) => {
      ts.currency  = resp;
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
