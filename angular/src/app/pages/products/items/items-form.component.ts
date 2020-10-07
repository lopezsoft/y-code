import { ErrorResponse, JsonResponse } from 'src/app/interfaces';
import { TaxRates } from 'src/app/models/general-model';
import { TaxRatesService } from './../../../services/general/tax-rates.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormSpinnerComponent } from 'src/app/core/components/forms/index';

import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MeasurementUnitsService } from './../../../services/products/measurement-units.service';

import {
  Attributes,
  ProductsMeasurementUnits,
  ClassOfProducts,
  Brands,
  Categories,
  MeasurementUnits
} from './../../../models/products-model';
import {
  AttributesService,
  TermsService,
  ItemsService,
  ClassOfProductsService,
  BrandsService,
  CategoriesService
} from './../../../services/products/index';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class ItemsFormComponent extends FormSpinnerComponent implements OnInit, AfterViewInit {
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
  mUnits      : MeasurementUnits[] = [];
  selectUnit  : MeasurementUnits;
  selectEdit  : ProductsMeasurementUnits;
  active      = 1;
  disabled    = true;
  closeResult = '';
  editModal   = false;
  measurementUnits: ProductsMeasurementUnits [] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public termsSer: TermsService,
              public itemsSer: ItemsService,
              public classSer: ClassOfProductsService,
              public brandSer: BrandsService,
              public cateSer: CategoriesService,
              public taxSer: TaxRatesService,
              public attrSer: AttributesService,
              public measSer: MeasurementUnitsService,
              private modalService: NgbModal
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      sku                   : [''],
      qr_code               : [''],
      product_name          : ['', [Validators.required, Validators.minLength(2)]],
      notes                 : [''],
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
      perishable            : [false]
    });

    this.modalForm  = this.fb.group({
      unit_id         : [''],
      unit_price      : new FormControl({value: '0', disabled: true}),
      factor          : new FormControl({value: '0', disabled: true}),
      purchase_cost   : new FormControl({value: '0', disabled: true}),
      sale_price      : [0],
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
    ts.showSpinner();
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
    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.taxBill = resp;
    });

    ts.taxSer.getData({isVat: 1}).subscribe((resp) => {
      ts.taxSale = resp;
    });

    ts.measSer.getAll({}).subscribe((resp) => {
      ts.mUnits = resp;
      ts.hideSpinner();
    });

  }

  saveData(): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    let values: any = {};
    if (!frm.invalid) {
      ts.showSpinner();
      values  = frm.value;
      if(ts.changeImage) {
        values.imgdata = ts.imgData;
        values.imgname = ts.imgname;
      }

      const data = {
        records : JSON.stringify(values),
        units   : JSON.stringify(ts.measurementUnits),
      };
      if (ts.editing) {
        ts.api.put(`${ts.PutURL}${ts.uid}`, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
            ts.editing = false;
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.hideSpinner();
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
            ts.hideSpinner();
          });
      } else {
        ts.api.post(ts.PostURL, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.disabledLoading();
            ts.hideSpinner();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
            ts.hideSpinner();
          });
      }
    }
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
          notes                 : resp[0].notes,
          shopping_description  : resp[0].shopping_description,
          description_sales     : resp[0].description_sales,
          barcode               : resp[0].barcode,
          sale_price            : resp[0].sale_price,
          purchase_cost         : resp[0].purchase_cost,
          // tax_sales             : resp[0].tax_sales,
          // tax_bill              : resp[0].tax_bill,
          // stock_min             : resp[0].stock_min,
          // stock_max             : resp[0].stock_max,
          tax_sales_id          : resp[0].tax_sales_id,
          // percentage_gain       : resp[0].percentage_gain,
          tax_bill_id           : resp[0].tax_bill_id,
          class_id              : resp[0].class_id,
          brand_id              : resp[0].brand_id ? resp[0].brand_id : '',
          sub_category_id       : resp[0].sub_category_id ? resp[0].sub_category_id : '',
          category_id           : resp[0].category_id ? resp[0].category_id : '',
          // average_cost          : resp[0].average_cost,
          // recipe                : resp[0].recipe,
          perishable            : resp[0].perishable,
        });
        ts.imgData          = resp[0].image ? resp[0].image : '';
        const id  = resp[0].category_id ? resp[0].category_id : 0;
        ts.categoryChange(id);
        ts.classChange(resp[0].class_id);
        ts.measSer.getProduct({pid: resp[0].id}).subscribe((resp) => {
          ts.measurementUnits = resp;
        });
      }, () => {
        ts.fullLoad();
      });
  }

  delMeasurementUnit(i: number) {
    const ts  = this;
    const item  = ts.measurementUnits[i];
    if(ts.measurementUnits.indexOf(item) !== -1){
      if(item.id > 0){
        const url = `/products/units/delete/product/${item.id}`;
        ts.showSpinner();
        ts.api.delete(url).subscribe((resp) => {
          ts.measurementUnits.splice(i, 1);
          ts.hideSpinner();
        }, (err) => {
          ts.hideSpinner();
          ts.msg.toastMessage('Error', 'Error al tratar de eliminar la unidad de medida.', 4);
        });
      }else{
        ts.measurementUnits.splice(i, 1);
      }
    }
  }

  EditMeasurementUnit(i: number, content) {
    const ts      = this;
    const item    = ts.measurementUnits[i];
    const values  = ts.customForm.value;
    if(ts.measurementUnits.indexOf(item) !== -1){
      ts.modalForm.setValue({
        unit_id       : item.unit_id,
        factor        : item.factor,
        unit_price    : values.sale_price,
        purchase_cost : item.purchase_cost,
        sale_price    : item.sale_price,
      });
      ts.selectEdit = item;
      ts.open(content, true);
    }
  }


  classChange(e: number): void {
    this.disabled = (e === 2) ? true : false;
  }

  categoryChange(e: number): void {
    const ts  = this;
    ts.subCateg = [];
    ts.showSpinner();
    ts.customForm.get('sub_category_id').setValue('');
    ts.cateSer.getChids({uid: e}).subscribe((resp) => {
      ts.hideSpinner();
      ts.subCateg = resp;
    },() => ts.hideSpinner());
  }

  open(content, edit: boolean) {
    const ts      = this;
    const values  = ts.customForm.value;
    ts.editModal  = edit;
    ts.selectUnit = null;
    if(!ts.editModal){
      ts.modalForm.setValue({
        unit_id       : '',
        factor        : 0,
        unit_price    : values.sale_price,
        purchase_cost : 0,
        sale_price    : 0,
      });
    }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      const ts      = this;
      const values  = ts.modalForm.getRawValue() as ProductsMeasurementUnits;
      if(result === 'Save'){
        if(values.purchase_cost > values.sale_price){
          ts.msg.toastMessage('Valor incorrecto.','El precio de venta es inferior al precio de compra.', 3);
          return ;
        }
        if(ts.editModal){ // Edition mode
          let item = ts.measurementUnits.find( unit => (unit.unit_id === ts.selectEdit.unit_id));
          if(ts.selectEdit.id >  0){
            item = ts.measurementUnits.find( unit => (unit.id === ts.selectEdit.id));
          }
          if(item){
            if(ts.selectUnit){
              if(ts.selectEdit.unit_id !== ts.selectUnit.id){
                const exist = ts.measurementUnits.find( unit => (unit.unit_id === ts.selectUnit.id));
                  if(exist){return};
              }
              item.unit_name        = ts.selectUnit.unit_name;
              item.abbre_unit       = ts.selectUnit.abbre_unit;
              item.unit_id          = ts.selectUnit.id;
              item.unit_description = ts.selectUnit.unit_description;
            }
            item.factor           = values.factor;
            item.purchase_cost    = values.purchase_cost;
            item.sale_price       = values.sale_price;
          }
        }else{ // insert mode
          const exist = ts.measurementUnits.find( unit => (unit.unit_id === ts.selectUnit.id));
          if(!exist){
            ts.measurementUnits.push({
              id              : 0,
              base_unit_id    : 0,
              unit_id         : ts.selectUnit.id,
              unit_description: ts.selectUnit.unit_description,
              factor          : values.factor,
              unit_name       : ts.selectUnit.unit_name,
              abbre_unit      : ts.selectUnit.abbre_unit,
              purchase_cost   : values.purchase_cost,
              sale_price      : values.sale_price,
            });
          }
        }
      }
    }, (reason) => {
      console.log(reason);
    });
  }

  onChangeUnits(e: number): void {
    const ts  = this;
    const frm = ts.modalForm;
    ts.showSpinner();
    ts.measSer.getAll({uid: e}).subscribe((resp) => {

      const factor    = resp[0].factor;
      const unitPrice = parseFloat(frm.get('unit_price').value);
      let   cost      = unitPrice / factor;

      ts.selectUnit   = resp[0];

      frm.get('factor').setValue(factor);
      frm.get('purchase_cost').setValue(cost);
      frm.get('sale_price').setValue(cost);

      ts.hideSpinner();
    }, (err: any) => {
      console.log(err);
      ts.hideSpinner();
    });
  }

}
