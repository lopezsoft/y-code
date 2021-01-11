import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { AttributesService, TermsService } from './../../../services/products/index';
import {
  IdentityDocuments,
  IdentityDocumentsService,
  Country, CountriesService,
  CurrencySysService,
} from 'src/app/services/global/index';
import { PersonsService, TaxRatesService } from 'src/app/services/general/index';
import { MeansPayment, TimeLimit, CurrencySys, TypePersons, TaxRates, Persons} from './../../../models/general-model';
import { Accounts } from './../../../models/accounting-model';
import { TypeOrganization } from 'src/app/models/companies-model';
import { TypeOrganizationService } from 'src/app/services/companies';
import { AccountsService } from 'src/app/services/accounting';

@Component({
  selector: 'app-customer-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class ProviderFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('uploadFile') uploadFile: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  // @ViewChild('imgData') imgData: ElementRef;
  typepersons  : TypePersons[] = [];
  identityDocs: IdentityDocuments[] = [];
  typeOrg: TypeOrganization[] = [];
  countries: Country[] = [];
  currency: CurrencySys[] = [];
  tax: TaxRates[] = [];
  persons: Persons[] = [];
  accounts    : Accounts[] = [];
  payments    : MeansPayment[] = [];
  timelimits  : TimeLimit[] = [];
  active      = 1;
  title       = 'Proveedor';
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public termsSer: TermsService,
              public attrSer: AttributesService,
              private docs: IdentityDocumentsService,
              private cnt: CountriesService,
              private curr: CurrencySysService,
              private tor: TypeOrganizationService,
              public taxSer: TaxRatesService,
              public accountSer: AccountsService,
              private custSer: PersonsService,
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      address               : [''],
      city_name             : [''],
      company_name          : [''],
      description           : [''],
      dni                   : [''],
      email                 : [''],
      last_name             : [''],
      location              : [''],
      mobile                : [''],
      names                 : [''],
      phone                 : [''],
      postal_code           : [''],
      state_name            : [''],
      title                 : [''],
      web                   : [''],
      currency_id           : ['', [Validators.required]],
      country_id            : [113, [Validators.required]],
      type_organization_id  : [1, [Validators.required]],
      person_type_id        : [1, [Validators.required]],
      tax_rate_id           : ['0'],
      means_payment_id      : ['0'],
      sales_term            : ['0'],
      accounting_account_id : ['0'],
      initial_balance       : [''],
      initial_date          : [new Date().toISOString().split('T')[0]],
      full_name             : ['', [Validators.required, Validators.minLength(6)]],
    });
  }

   // VALIDATION

   get invalidFullName(): boolean{
    return this.customForm.get('full_name').invalid && this.customForm.get('full_name').touched;
  }

  get invalidPersonType(): boolean{
    return (this.customForm.get('person_type_id').value <= 0) ? true : false;
  }

  get invalidCountry(): boolean{
    return (this.customForm.get('country_id').value <= 0) ? true : false;
  }

  get invalidCurrency(): boolean{
    return (this.customForm.get('currency_id').value <= 0) ? true : false;
  }

  get invalidOrganization(): boolean{
    return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
  }


  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/persons/update/';
    ts.PostURL  = '/persons/create/provider';

    ts.docs.getData({}).subscribe((resp) => {
      ts.identityDocs  = resp;
    });

    ts.cnt.getData().subscribe((resp) => {
      ts.countries  = resp;
    });

    ts.curr.getData().subscribe((resp) => {
      ts.currency  = resp;
      if(resp.length > 0){
        if(resp.length > 1){
          resp.map((val) => {
            if(val.national_currency) {
              ts.customForm.get('currency_id').setValue(val.id);
              return false;
            }
          });
        }else{
          ts.customForm.get('currency_id').setValue(resp[0].id);
        }
      }
    });

    this.tor.getData({}).subscribe((resp) => {
      this.typeOrg  = resp;
    });

    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.tax = resp;
    });

    ts.accountSer.getsubAccounts({}).subscribe((resp) => {
      ts.accounts = resp;
    });

    ts.custSer.getMeansPayment({}).subscribe((resp) => {
      ts.payments = resp;
    });

    ts.custSer.getTimeLimit({}).subscribe((resp) => {
      ts.timelimits = resp;
    });

  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.custSer.getCustomers({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          address               : resp[0].address,
          city_name             : resp[0].city_name,
          company_name          : resp[0].company_name,
          country_id            : resp[0].country_id,
          currency_id           : resp[0].currency_id,
          description           : resp[0].description,
          dni                   : resp[0].dni,
          email                 : resp[0].email,
          full_name             : resp[0].full_name,
          last_name             : resp[0].last_name,
          location              : resp[0].location,
          mobile                : resp[0].mobile,
          names                 : resp[0].names,
          person_type_id        : resp[0].person_type_id,
          type_organization_id  : resp[0].type_organization_id,
          tax_rate_id           : resp[0].tax_rate_id ?? '0',
          means_payment_id      : resp[0].means_payment_id ?? '0',
          sales_term            : resp[0].sales_term ?? '0',
          accounting_account_id : resp[0].accounting_account_id ?? '0',
          initial_balance       : resp[0].initial_balance ?? 0,
          initial_date          : resp[0].initial_date ?? new Date().toISOString().split('T')[0],
          phone                 : resp[0].phone,
          postal_code           : resp[0].postal_code,
          state_name            : resp[0].state_name,
          title                 : resp[0].title,
          web                   : resp[0].web,
        });
      });
  }
}
