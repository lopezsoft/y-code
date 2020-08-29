import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { JsonResponse, ErrorResponse } from 'src/app/interfaces';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { BranchOffice } from 'src/app/models/companies-model';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BranchOfficeService } from 'src/app/services/companies/branch-office.service';
import { Country, CountriesService, CitiesService, Cities, CurrencySys, CurrencySysService} from 'src/app/services/global';



@Component({
  selector: 'app-edit-branch-office',
  templateUrl: './edit-branch-office.component.html',
  styleUrls: ['./edit-branch-office.component.scss']
})
export class EditBranchOfficeComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: BranchOffice;
  countries: Country[]=[];
  cities: Cities[] = [];
  currency: CurrencySys[]= [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private branch: BranchOfficeService,
              private coun: CountriesService,
              private cit: CitiesService,
              private curr: CurrencySysService,
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      country_id     : ['', [Validators.required, Validators.minLength(5)]],
      city_id        : ['', [Validators.required, Validators.minLength(1)]],
      currency_id    : ['', [Validators.required, Validators.minLength(1)]],
      branch_name    : ['', [Validators.required, Validators.minLength(5)]],
      postal_code    : ['', [Validators.minLength(5)]],
      address        : ['', [Validators.required, Validators.minLength(5)]],
      location       : ['', [Validators.minLength(5)]],
      email          : ['', [Validators.minLength(5)]],
      mobile         : ['', [Validators.minLength(5)]],
      phone          : ['', [Validators.minLength(5)]],
      web            : ['', [Validators.minLength(5)]],
    });
  }

  get invalidCountry(): boolean{
    return this.customForm.get('country_id').invalid && this.customForm.get('country_id').touched;
  }
  get invalidCity(): boolean{
    return this.customForm.get('city_id').invalid && this.customForm.get('city_id').touched;
  }
  get invalidCurrency(): boolean{
    return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
  }
  get invalidBranchName(): boolean{
    return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
  }
  get invalidAddress(): boolean{
    return this.customForm.get('address').invalid && this.customForm.get('address').touched;
  }



  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar sucursales';
    ts.model  = {
      id: 0,
      city_id: 0,
      currency_id: 0,
      country_id: 0,
      branch_name: '',
      postal_code: '',
      address: '',
      location: '',
      email: '',
      mobile: '',
      phone: '',
      web: '',
      state: 1
    };
    ts.PutURL   = '/companies/branchoffice/update/';
    ts.PostURL  = '/companies/branchoffice/create';
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;
    ts.branch.getData().subscribe((resp) => {
      this.model = resp[0];
    });

    await ts.coun.getData().subscribe((resp) => {
      ts.countries  = resp;
    });

    await ts.api.get(`/countries`).
      subscribe((resp: any) => {
        if (resp.records.length > 0) {
          ts.countries    = resp.records[0];
          ts.editing  = true;
          ts.uid      = ts.model.id;
        }
      }, (err: ErrorResponse) => {
        ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
      });





    await ts.cit.getData().subscribe((resp) => {
      ts.cities  = resp;
    });

    await ts.api.get(`/cities`).
      subscribe((resp: any) => {
        if (resp.records.length > 0) {
          ts.cities    = resp.records[0];
          ts.editing  = true;
          ts.uid      = ts.model.id;
        }
      }, (err: ErrorResponse) => {
        ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
      });





      await ts.curr.getData().subscribe((resp) => {
        ts.currency  = resp;
      });

      await ts.api.get(`/currencysys`).
        subscribe((resp: any) => {
          if (resp.records.length > 0) {
            ts.currency    = resp.records[0];
            ts.editing  = true;
            ts.uid      = ts.model.id;
          }
        }, (err: ErrorResponse) => {
          ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
        });

    }
  }
