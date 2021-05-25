import { ShoppingDetail } from './../../models/shopping-model';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import{ jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import Swal from 'sweetalert2';

import { JsonResponse } from './../../interfaces/json-response.interface';
// Services
import { TaxRatesService } from './../../services/general/index';
import { ShoppingService } from './../../services/global/shopping.service';
import { ReportsService } from './../../services/global/reports.service';
import { DocumentsService } from './../../services/global/documents.service';
import { ApiServerService, MessagesService } from './../../utils';
import { CurrencySysService } from './../../services/general';
import { ItemsService } from './../../services/products/index';
import { TaxRates } from './../../models/general-model';
import { Items } from './../../models/products-model';
import { FormComponent } from './../../core/components/forms';

@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./shopping-create.component.scss']
})
export class DetailEditComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('myDataTable', { static: false } ) myDataTable: jqxDataTableComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('amountElement') amountElement: ElementRef;
  @ViewChild('cashele') cashele: ElementRef;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;

  title = 'Productos/Servicios';
  items: Items[] = [];
  itemsResult: Items[] = [];
  itemSelect: Items;
  lines: Items[] = [];
  taxBill: TaxRates[] = [];
  taxSales: TaxRates[] = [];
  taxSaleSelect: TaxRates;
  taxBillSelect: TaxRates;
  perishable  = false;
  itemName    = "";
  oldItem     : ShoppingDetail[]=[];

  constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    public currSer: CurrencySysService,
    public reporstSer: ReportsService,
    public itemsSer: ItemsService,
    public spinner: NgxSpinnerService,
    public documents: DocumentsService,
    private shopSer: ShoppingService,
    private taxSer: TaxRatesService,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({
      amount          : [''],
      batch           : [''],
      expiration_date : [''],
      fabrication_date: [''],
      product_name    : [''],
      sale_price      : [''],
      tax_bill_id     : [''],
      tax_sale_id     : [''],
      total_cost      : [''],
      unit_cost       : [''],
      unit_price      : [''],
      gain            : [''],
      percentage_gain : [''],
      vat_included    : [''],
    });
  }

  ngOnInit(): void {
    const ts    = this;
    let   frm   = ts.customForm;
    ts.showSpinner();
    ts.taxSer.getData({isVat: true}).subscribe((resp) =>{
      ts.taxBill    = resp;
      ts.taxSales   = resp;
      super.ngOnInit();
    });

  }

  ngAfterViewInit(): void {
    const ts  = this;
  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.shopSer.getDetailID(id).subscribe((resp) => {
      ts.oldItem  = resp;
      ts.onClearForm();
      ts.onRefresh();
    });
  }
  /**
   * Cuando se cambia el precio de compra
   */
  onChangeUnitPrice(){
    this.onPurchaseData();
  }
  /**
   * Cuando se cambia el precio de venta
   */
  onChangeSalePrice(){
    this.onSalesData();
  }
  /**
   * Cuando se selecciona un item de la lista de productos
   */
  onClickItem(i: Items){
    const ts    = this;
    const frm   = ts.customForm;
    let line    = i;
    const lang  = ts.translate;

    if( line.class_id !== 2 ) {
      // Implements
      Swal.fire({
        title : 'Cambiar item',
        text  : 'Está a punto de cambiar el ITEM, ¿Desea continuar.?',
        icon  : 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: lang.instant('buttons.yes'),
        cancelButtonText: lang.instant('buttons.not')
      }).then((result) => {
        if (result.value) {
          ts.perishable   = line.perishable;
          const purchase_cost = parseFloat(line.purchase_cost.toString()) / parseFloat(line.tax_bill_rate.toString());
          frm.get('amount').setValue(1);
          frm.get('unit_price').setValue(purchase_cost);
          frm.get('tax_bill_id').setValue(line.tax_bill_id);
          frm.get('tax_sale_id').setValue(line.tax_sales_id);
          let sale_price  = parseFloat(((purchase_cost * line.percentage_gain) / 100).toString()) + purchase_cost;
          if( line.sale_price > sale_price) {
            sale_price  = line.sale_price;
          }
          frm.get('sale_price').setValue(sale_price);
          ts.amountElement.nativeElement.focus;
          ts.itemSelect = line;
          ts.itemName   = line.product_name;
          ts.onChageTaxBill(line.tax_bill_id);
          ts.onChangeTaxSale(line.tax_sales_id);
        }
      });
    }else{
      ts.msg.toastMessage('','El item seleccionado no maneja inventarios.', 4);
      ts.onClearForm();
    }

  }
  /**
   * Quita filtro activo
   */
  onClearFilter(){
    const ts = this;
    ts.onClearForm();
    ts.searchField.nativeElement.value = '';
    ts.itemsResult = ts.items;
    ts.searchField.nativeElement.focus;
  }
  /**
   * Actualiza listado de productos
   */
  onRefresh(){
    const ts  = this;
    ts.showSpinner('Cargando listado de productos.');
    ts.itemsSer.getDataSales({}).subscribe((resp) => {
      ts.items  = resp;
      ts.hideSpinner();
      ts.itemsResult = ts.items;
      ts.searchField.nativeElement.focus;
    }, () =>  ts.hideSpinner());
  }
  /**
   * Búsqueda de productos
   */
  onSearchProducts(query: string) {
    const ts  = this;
    ts.showSpinner();
    ts.onClearForm();
    if(ts.items.length === 0 && query.length > 0){
      ts.itemsSer.getDataSales({}).subscribe((resp) => {
        ts.items  = resp;
        ts.hideSpinner();
        ts.itemsResult = ts.items.filter((ele) =>  ele.product_name.toLowerCase().indexOf( query.toLowerCase()) >= 0);
      });
    }else{
      if(query.length > 0){
        ts.itemsResult = ts.items.filter((ele) =>  ele.product_name.toLowerCase().indexOf( query.toLowerCase()) >= 0);
        ts.hideSpinner();
      }else{
        ts.itemsResult = ts.items;
        ts.hideSpinner();
      }
    }
  }
  /**
   * Limpia el formulario
   */
  onClearForm() {
    const ts          = this;
    const frm         = ts.customForm;
    const resp        = ts.oldItem;
    ts.itemSelect     = null;
    ts.itemName       = '';
    ts.taxBillSelect  = ts.taxBill.find(tax => tax.id === resp[0].tax_bill_id);
    let unitCost      = resp[0].unit_cost;
    /**
     * Si no tiene iva Incluido, se resta para dejar el precio unitario correcto
     */
    if(!resp[0].vat_included){
      unitCost  = parseFloat( resp[0].unit_cost.toString() )  / parseFloat( ts.taxBillSelect.decimal_rate.toString() );
    }
    frm.setValue({
      amount          : resp[0].amount,
      batch           : resp[0].batch,
      expiration_date : resp[0].expiration_date,
      fabrication_date: resp[0].fabrication_date,
      product_name    : resp[0].product_name,
      sale_price      : resp[0].sale_price,
      tax_bill_id     : resp[0].tax_bill_id,
      tax_sale_id     : resp[0].tax_sale_id,
      total_cost      : resp[0].total_cost,
      unit_cost       : resp[0].unit_cost,
      unit_price      : unitCost,
      gain            : 0,
      percentage_gain : 0,
      vat_included    : resp[0].vat_included,
    });
    ts.perishable     = resp[0].perishable;
    ts.searchField.nativeElement.focus;
    ts.onChageTaxBill(resp[0].tax_bill_id);
    ts.onChangeTaxSale(resp[0].tax_sale_id);
    ts.onPurchaseData();
  }
  /**
   * Cuando se selecciona un nuevo impuesto de compra
   */
  onChageTaxBill(val: number) {
    const ts  = this;
    ts.taxBillSelect  = ts.taxBill.find(tax => tax.id === val);
    ts.onPurchaseData();
  }
  /**
   * Cuando se cambia la cantidad
   */
  onChageAmount(e: any) {
    this.onPurchaseData();
  }
  /**
   * Cuando se cambia el impuesto incluido
   */
  onChageIncluded(e: any) {
    this.onPurchaseData();
  }
  /**
   * Cuando se selecciona un nuevo impuesto de venta
   */
  onChangeTaxSale(val: number) {
    const ts  = this;
    ts.taxSaleSelect  = ts.taxSales.find(tax => tax.id === val);
    ts.onSalesData();
  }
  /**
   * Calcula los valores de venta
   */
  onSalesData() {
    const ts        = this;
    if(ts.taxSaleSelect){
      const frm       = ts.customForm;
      const unit_price= parseFloat(frm.get('unit_price').value);
      const sale_price= parseFloat(frm.get('sale_price').value);
      const vat       = parseFloat(ts.taxBillSelect.decimal_rate.toString());
      const vatSale   = parseFloat(ts.taxSaleSelect.decimal_rate.toString());
      const included  = frm.get('vat_included').value;
      let realPrice   = 0;
      let realCost    = 0;
      let gain        = 0;
      let percGain    = 0;
      if( included == true ){ // Impuesto incluido en el precio de compra
        realCost  = (unit_price / vat);
      }else{
        realCost  = unit_price;
      }
      realPrice = (sale_price / vatSale);
      gain      = realPrice - realCost;
      percGain  = (gain / realPrice) * 100;
      frm.get('gain').setValue(gain);
      frm.get('percentage_gain').setValue(`${percGain.toFixed(2)} %`);
    }
  }
  /**
   *
   * Calcula los valores de compra
   */
  onPurchaseData() {
    const ts        = this;
    if(ts.taxBillSelect) {
      const frm       = ts.customForm;
      const amount    = parseFloat(frm.get('amount').value);
      const unit_price= parseFloat(frm.get('unit_price').value);
      const vat       = parseFloat(ts.taxBillSelect.decimal_rate.toString());
      const included  = frm.get('vat_included').value;
      const unit_cost = (vat > 0) ? (unit_price * vat) : unit_price;
      const total     = unit_cost * amount;
      if( included == true ){ // Impuesto incluido en el precio de compra
        frm.get('unit_cost').setValue( unit_price );
        frm.get('total_cost').setValue( unit_price * amount );
      }else{
        frm.get('unit_cost').setValue( unit_cost );
        frm.get('total_cost').setValue( total );
      }
      if(amount > 0) {
        ts.onSalesData();
      }
    }
  }
  /**
   * Guarda la factura y el detalle
   */
  onSave(content: any = {}){
    const ts      = this;
    let frm       = ts.customForm;
    const uid     = ts.uid;
    let values    = frm.getRawValue();

    if(parseFloat(values.amount) <= 0 || parseFloat(values.sale_price) <= 0  || parseFloat(values.unit_cost) <= 0){
      ts.msg.toastMessage('','Hay un error en las cantidades.',4);
      return false;
    }

    if(frm.invalid){
      ts.msg.toastMessage('','Hay campos sin llenar.',4);
      return false;
    }

    if(uid) {
      ts.onSaveDetail(values);
    }else{
      ts.msg.toastMessage('Error','Error en la aplicación');
    }
  }

  onSaveDetail(values: any) {
    const ts      = this;
    ts.showSpinner('Guardando cambios');
    if(ts.itemSelect){
      if( !ts.itemSelect.perishable ) {
        values.batch            = null;
        values.fabrication_date = null;
        values.expiration_date  = null;
      }
      values.product_id = ts.itemSelect.id;
    }else if( !ts.oldItem[0].perishable ) {
        values.batch            = null;
        values.fabrication_date = null;
        values.expiration_date  = null;
    }

    let data  = {
      records: JSON.stringify(values)
    };
    ts.api.put(`/shopping/update/detail/${ts.uid}`, data).subscribe((resp: JsonResponse) => {
      if( resp.success) {
        ts.msg.toastMessage('', 'Los cambios se han guardado correctamente.');
        ts.onClose();
      }else{
        ts.msg.toastMessage('', resp.message, 4);
      }
      ts.searchField.nativeElement.focus;
      ts.hideSpinner();
    },(resp)  => {
      ts.hideSpinner();
    });
  }

  onClose() {
    this.goRoute(`shopping/invoices`);
  }
}
