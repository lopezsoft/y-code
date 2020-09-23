import { TaxRates } from 'src/app/models/general-model';
import { TaxRatesService } from './../../../services/general/tax-rates.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { Attributes, Terms, ClassOfProducts, Brands, Categories } from './../../../models/products-model';
import { AttributesService, TermsService, ItemsService, ClassOfProductsService, BrandsService, CategoriesService } from './../../../services/products/index';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class ItemsFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('subCatElement') subCatElement: ElementRef;
  @ViewChild('uploadFile') uploadFile: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  attributes  : Attributes[] = [];
  classof     : ClassOfProducts[] = [];
  brands      : Brands[] = [];
  categories  : Categories[] = [];
  subCateg    : Categories[] = [];
  taxSale     : TaxRates[] = [];
  taxBill     : TaxRates[] = [];
  active      = 1;
  disabled    = true;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public termsSer: TermsService,
              public itemsSer: ItemsService,
              public classSer: ClassOfProductsService,
              public brandSer: BrandsService,
              public cateSer: CategoriesService,
              public taxSer: TaxRatesService,
              public attrSer: AttributesService
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      sku                   : [''],
      qr_code               : [''],
      product_name          : ['', [Validators.required, Validators.minLength(2)]],
      // notes                 : [''],
      shopping_description  : [''],
      description_sales     : [''],
      barcode               : [''],
      // rate_name             : [''],
      // internal_code         : [''],
      // state                 : [''],
      sale_price            : [''],
      purchase_cost         : [''],
      // tax_sales             : [''],
      // tax_bill              : [''],
      // stock_min             : [''],
      // stock_max             : [''],
      tax_sales_id          : [''],
      // percentage_gain       : [''],
      tax_bill_id           : [''],
      // item_type_id          : [''],
      class_id              : [''],
      brand_id              : [''],
      category_id           : [''],
      sub_category_id       : [''],
      // average_cost          : [''],
      // recipe                : [''],
      // perishable            : [''],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('term_name').invalid && this.customForm.get('term_name').touched;
  }

  get invalidAttributeId(): boolean{
    return (this.customForm.get('attribute_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/products/items/update/';
    ts.PostURL  = '/products/items/create';
    ts.attrSer.getAll({}).subscribe((resp) => {
      ts.attributes = resp;
    });
    ts.classSer.getData().subscribe((resp) => {
      ts.classof = resp;
    });
    ts.brandSer.getAll().subscribe((resp) => {
      ts.brands = resp;
    });
    ts.cateSer.getParents({}).subscribe((resp) => {
      ts.categories = resp;
    });
    // ts.cateSer.getChids({}).subscribe((resp) => {
    //   ts.subCateg = resp;
    // });
    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.taxBill = resp;
    });
    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.taxSale = resp;
    });
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.itemsSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          sku                   : resp[0].sku,
          qr_code               : resp[0].qr_code,
          product_name          : resp[0].product_name,
          // notes                 : resp[0].notes,
          shopping_description  : resp[0].shopping_description,
          description_sales     : resp[0].description_sales,
          barcode               : resp[0].barcode,
          // rate_name             : resp[0].rate_name,
          // internal_code         : resp[0].internal_code,
          // state                 : resp[0].state,
          sale_price            : resp[0].sale_price,
          purchase_cost         : resp[0].purchase_cost,
          // tax_sales             : resp[0].tax_sales,
          // tax_bill              : resp[0].tax_bill,
          // stock_min             : resp[0].stock_min,
          // stock_max             : resp[0].stock_max,
          tax_sales_id          : resp[0].tax_sales_id,
          // percentage_gain       : resp[0].percentage_gain,
          tax_bill_id           : resp[0].tax_bill_id,
          // item_type_id          : resp[0].item_type_id,
          class_id              : resp[0].class_id,
          brand_id              : resp[0].brand_id ? resp[0].brand_id : '',
          sub_category_id       : resp[0].sub_category_id ? resp[0].sub_category_id : '',
          category_id           : resp[0].category_id ? resp[0].category_id : '',
          // average_cost          : resp[0].average_cost,
          // recipe                : resp[0].recipe,
          // perishable            : resp[0].perishable,
        });
        const id  = resp[0].category_id ? resp[0].category_id : 0;
        ts.categoryChange(id);
      });
  }

  classChange(e: number): void {
    this.disabled = (e === 2) ? true : false;
  }

  categoryChange(e: number): void {
    const ts  = this;
    ts.subCateg = [];
    ts.customForm.get('sub_category_id').setValue('');
    ts.cateSer.getChids({uid: e}).subscribe((resp) => {
      ts.subCateg = resp;
    });
  }

}
