import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Company, TypeOrganization } from 'src/app/models/companies-model';
import { TypeOrganizationService  } from 'src/app/services/companies/type-organization.service';
import { IdentityDocuments, IdentityDocumentsService,
         Country, CountriesService,
        CurrencySys, CurrencySysService  } from 'src/app/services/global/index';

import { ApiServerService, MessagesService } from 'src/app/utils';
import { JsonResponse, ErrorResponse } from 'src/app/interfaces';
import { FormComponent } from 'src/app/core/components/forms/form.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent extends FormComponent implements OnInit, AfterViewInit {

  @ViewChild('companyName') companyName: ElementRef;

  model: Company;
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
      // dv                            : ['', [Validators.required, Validators.maxLength(2)]],
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
    this.changeLanguage(this.activeLang);
    this.title  = 'Datos de la compañia';
    this.model = {
      address: 'Sin asignar',
      company_name: 'EMPRESA DEMO',
      country_id: 45,
      currency_id: 4,
      dni: '',
      dv: '',
      email: '',
      id: 1,
      identity_document_id: 1,
      image: '',
      location: '',
      mime: '',
      mobile: '',
      phone: '',
      postal_code: '',
      number_employees: 0,
      type_organization_id: 1,
      web: ''
    };

    this.loadData();
  }

  ngAfterViewInit(): void {
    this.companyName.nativeElement.focus();
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    this.tor.getData().subscribe((resp) => {
      this.typeOrg  = resp;
    });

    await ts.docs.getData().subscribe((resp) => {
      ts.identityDocs  = resp;
    });

    await ts.cnt.getData().subscribe((resp) => {
      ts.countries  = resp;
    });

    await ts.curr.getData().subscribe((resp) => {
      ts.currency  = resp;
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

  saveAndClose(): void {
    super.saveAndClose();
    this.toClose  = true;
    this.saveData();
  }

  saveData(): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    if (!frm.invalid) {
      if(ts.editing){

        const data  = {
          records : JSON.stringify(frm.value)
        };

        ts.api.put(`/company/update/${ts.uid}`, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
            ts.editing  = false;
            ts.close();
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
          });
      }else{
        ts.api.post('/company/create', frm.value)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
            ts.close();
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
          });
      }
    }
  }

  close(): void {
    this.goRoute('/');
  }

}
