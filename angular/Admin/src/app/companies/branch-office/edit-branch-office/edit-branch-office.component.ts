import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiServerService, MessagesService } from './../../../utils';
import { TranslateService } from '@ngx-translate/core';
import { BranchOfficeService } from './../../../services/companies/branch-office.service';
import { Country, CountriesService, CurrencySysService} from './../../../services/global';

import { FormComponent } from './../../../core/components/forms/form.component';
import { CurrencySys } from './../../../models/general-model';

@Component({
  selector: 'app-edit-branch-office',
  templateUrl: './edit-branch-office.component.html'
})
export class EditBranchOfficeComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  countries: Country[]=[];
  currency: CurrencySys[]= [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              private branch: BranchOfficeService,
              private coun: CountriesService,
              private curr: CurrencySysService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      country_id      : [0, [Validators.required]],
      currency_id     : [0, [Validators.required]],
      branch_name     : ['', [Validators.required, Validators.minLength(5)]],
      postal_code     : [''],
      address         : [''],
      address2        : [''],
      location        : [''],
      email           : [''],
      mobile          : [''],
      phone           : [''],
      web             : [''],
      is_point_of_sale: [false]
    });
  }

  get invalidCountry(): boolean{
    return (this.customForm.get('country_id').value === 0) ? true : false;
  }

  get invalidCurrency(): boolean{
    return (this.customForm.get('currency_id').value === 0) ? true : false;
  }
  get invalidBranchName(): boolean{
    return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.PutURL   = '/companies/branchoffice/update/';
    ts.PostURL  = '/companies/branchoffice/create';

    ts.coun.getData().subscribe((resp) => {
      ts.countries  = resp;
    });

    ts.curr.getData().subscribe((resp) => {
      ts.currency  = resp;
    });

  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.branch.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        currency_id     : resp[0].currency_id     ,
        country_id      : resp[0].country_id      ,
        branch_name     : resp[0].branch_name     ,
        postal_code     : resp[0].postal_code     ,
        address         : resp[0].address         ,
        address2        : resp[0].address2        ,
        location        : resp[0].location        ,
        email           : resp[0].email           ,
        mobile          : resp[0].mobile          ,
        phone           : resp[0].phone           ,
        web             : resp[0].web             ,
        is_point_of_sale: resp[0].is_point_of_sale,
      });
    });
  }
}
