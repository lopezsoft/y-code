import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TypeOrganizationService  } from 'src/app/services/companies/type-organization.service';
import { IdentityDocuments, IdentityDocumentsService,
  Country, CountriesService,
  CurrencySysService  } from 'src/app/services/global/index';

import { ApiServerService, MessagesService } from 'src/app/utils';
import { JsonResponse, ErrorResponse } from 'src/app/interfaces';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { Company, TypeOrganization } from 'src/app/models/companies-model';
import { CurrencySys } from 'src/app/models/general-model';
import { CompanyService } from 'src/app/services/companies';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent extends FormComponent implements OnInit, AfterViewInit {

  @ViewChild('companyName') companyName: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  typeOrg: TypeOrganization[] = [];
  identityDocs: IdentityDocuments[] = [];
  countries: Country[] = [];
  currency: CurrencySys[] = [];
  constructor(
    public fb: FormBuilder,
    public api: ApiServerService,
    public msg: MessagesService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    private tor: TypeOrganizationService,
    private docs: IdentityDocumentsService,
    private cnt: CountriesService,
    private curr: CurrencySysService,
    private company: CompanyService,
  ) {
    super(fb, msg, api, router, translate, aRouter);
    this.customForm = this.fb.group({
      currency_id                   : [0, [Validators.required]],
      country_id                    : [0, [Validators.required]],
      identity_document_id          : [0, [Validators.required]],
      type_organization_id          : [0, [Validators.required]],
      number_employees              : [0],
      company_name                  : ['', [Validators.required, Validators.minLength(6)]],
      dni                           : [''],
      address                       : [''],
      location                      : [''],
      postal_code                   : [''],
      mobile                        : [''],
      phone                         : [''],
      web                           : [''],
      email                         : ['']
    });
  }

  ngOnInit(): void{
    const ts  = this;
    this.changeLanguage(this.activeLang);
    this.title  = 'Datos de la compañia';
    ts.PutURL   = '/company/update/';
    ts.PostURL  = '/company/create';
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.companyName.nativeElement.focus();
    const ts  = this;
    ts.docs.getData({}).subscribe((resp) => {
      ts.identityDocs  = resp;
    });

    ts.cnt.getData().subscribe((resp) => {
      ts.countries  = resp;
    });

    ts.curr.getData().subscribe((resp) => {
      ts.currency  = resp;
    });

    this.tor.getData({}).subscribe((resp) => {
      this.typeOrg  = resp;
    });
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    this.company.getData({}).subscribe((resp) => {
      if(resp.length > 0){
        ts.editing  = true;
        ts.uid      = resp[0].id;
        frm.setValue({
          address               : resp[0].address               ,
          company_name          : resp[0].company_name          ,
          country_id            : resp[0].country_id            ,
          currency_id           : resp[0].currency_id           ,
          dni                   : resp[0].dni                   ,
          email                 : resp[0].email                 ,
          identity_document_id  : resp[0].identity_document_id  ,
          location              : resp[0].location              ,
          mobile                : resp[0].mobile                ,
          phone                 : resp[0].phone                 ,
          postal_code           : resp[0].postal_code           ,
          number_employees      : resp[0].number_employees      ,
          type_organization_id  : resp[0].type_organization_id  ,
          web                   : resp[0].web
        });
        ts.imgData              = resp[0].image ? resp[0].image : '';
      }
    });

  }


  // VALIDATION

  get invalidCompanyName(): boolean{
    return this.customForm.get('company_name').invalid && this.customForm.get('company_name').touched;
  }

  get invalidEmail(): boolean{
    return this.customForm.get('email').invalid && this.customForm.get('email').touched;
  }

  get invalidOrganization(): boolean{
    return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
  }

  get invalidIdentity(): boolean{
    return (this.customForm.get('identity_document_id').value <= 0) ? true : false;
  }

  get invalidCountry(): boolean{
    return (this.customForm.get('country_id').value <= 0) ? true : false;
  }

  get invalidCurrency(): boolean{
    return (this.customForm.get('currency_id').value <= 0) ? true : false;
  }


  // GET PLACEHOLDERS
  get placeholderCompanyName(): string {
    return this.translate.instant('companies.company_name');
  }
  get placeholderDni(): string {
    return this.translate.instant('companies.dni');
  }
  get placeholderDv(): string {
    return this.translate.instant('companies.dv');
  }
  get placeholderAddress(): string {
    return this.translate.instant('companies.address');
  }
  get placeholderLocation(): string {
    return this.translate.instant('companies.location');
  }
  get placeholderPostalCode(): string {
    return this.translate.instant('companies.postal_code');
  }
  get placeholderMobile(): string {
    return this.translate.instant('companies.mobile');
  }
  get placeholderPhone(): string {
    return this.translate.instant('companies.phone');
  }
  get placeholderEmail(): string {
    return this.translate.instant('companies.email');
  }
  get placeholderWeb(): string {
    return this.translate.instant('companies.web');
  }

  close(): void {
    this.goRoute('/');
  }

}
