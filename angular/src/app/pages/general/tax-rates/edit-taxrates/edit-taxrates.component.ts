import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { TaxRates, Taxes } from 'src/app/models/general-model';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TaxRatesService } from 'src/app/services/general/tax-rates.service';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { TaxesService } from 'src/app/services/general/taxes.service';


@Component({
  selector: 'app-edit-taxrates',
  templateUrl: './edit-taxrates.component.html',
  styleUrls: ['./edit-taxrates.component.scss']
})
export class EditTaxratesComponent extends FormComponent implements OnInit
{
  @ViewChild('focusElement') focusElement: ElementRef;
  model: TaxRates;
  taxgroup: Taxes[] = [];

  constructor(public fb: FormBuilder,
      public msg: MessagesService,
      public api: ApiServerService,
      public router: Router,
      public translate: TranslateService,
      public aRouter: ActivatedRoute,
      private types: TaxRatesService,
      private tax: TaxesService
  ){
  super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      tax_gruop_id     : ['', [Validators.required, Validators.minLength(1)] ],
      rate_name        : ['', [Validators.required, Validators.minLength(3)] ],
      rate_abbre       : ['', [Validators.required, Validators.minLength(1)] ],
      rate_value       : ['', [Validators.required, Validators.minLength(1)] ],
      decimal_rate     : ['', [Validators.required, Validators.minLength(1)] ],
    });
  }

  get invalidTaxGroupId(): boolean{
    return this.customForm.get('tax_gruop_id').invalid && this.customForm.get('tax_gruop_id').touched;
  }
  get invalidRateName(): boolean{
    return this.customForm.get('rate_name').invalid && this.customForm.get('rate_name').touched;
  }
  get invalidRateAbbre(): boolean{
    return this.customForm.get('rate_abbre').invalid && this.customForm.get('rate_abbre').touched;
  }
  get invalidRateValue(): boolean{
    return this.customForm.get('rate_value').invalid && this.customForm.get('rate_value').touched;
  }
  get invalidDecimalRate(): boolean{
    return this.customForm.get('decimal_rate').invalid && this.customForm.get('decimal_rate').touched;
  }
  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar rango de impuesto';
    ts.model = {
      id: 0,
      decimal_rate: 0,
      rate_abbre: '',
      rate_name: '',
      rate_value: 0,
      tax_gruop_id: 0,
      state: 1
    };
    ts.PutURL   = '/general/taxerates/update/';
    ts.PostURL  = '/general/taxerates/create';

    ts.tax.getData({}).subscribe((resp) => {
      this.taxgroup = resp;
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
