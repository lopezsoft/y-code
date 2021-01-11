import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import{ jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { AccountingDocuments } from '../../../models/accounting-model';

import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JsonResponse } from '../../../interfaces/json-response.interface';
// Services
import { TaxRatesService } from 'src/app/services/general/index';
import { ShoppingService } from './../../../services/global/shopping.service';
import { ReportsService } from '../../../services/global/reports.service';
import { DocumentsService } from '../../../services/global/documents.service';
import { ApiServerService, MessagesService } from '../../../utils';
import { ResolutionsService, PersonsService, CurrencySysService } from '../../../services/general';
import { ItemsService } from '../../../services/products/index';
import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment, TaxRates } from '../../../models/general-model';
import { Shopping } from '../../../models/shopping-model';
import { Sales } from './../../../models/reports-model';
import { Items } from '../../../models/products-model';
import { FormSpinnerComponent } from './../../../core/components/forms';
import { BranchOffice } from 'src/app/models/companies-model';
import { BranchOfficeService } from 'src/app/services/companies';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-create.component.html',
  styleUrls: ['./shopping-create.component.scss']
})
export class ShoppingCreateComponent extends FormSpinnerComponent implements OnInit, AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('myDataTable', { static: false } ) myDataTable: jqxDataTableComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('amountElement') amountElement: ElementRef;
  @ViewChild('cashele') cashele: ElementRef;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;

  title = 'Productos/Servicios';
  aDocuments: AccountingDocuments[]= [];
  points_of_sale: BranchOffice[] = [];
  providers: Persons[]= [];
  currency: CurrencySys[] = [];
  items: Items[] = [];
  itemsResult: Items[] = [];
  itemSelect: Items;
  lines: Items[] = [];
  timeLimits: TimeLimits[] = [];
  paymentMethods: PaymentMethods[] = [];
  payments: PaymentMethods[] = [];
  meansPayment: MeansPayment[] = [];
  taxBill: TaxRates[] = [];
  taxSales: TaxRates[] = [];
  taxSaleSelect: TaxRates;
  taxBillSelect: TaxRates;
  selectedRow = false;
  isCounted   = true;
  perishable  = false;
  rowIndex    = -1;
  pathfile    = "";
  itemName    = "";
  modal       : NgbModalRef;
  source: any =
  {
      localdata: this.lines,
      datatype: "array",
      datafields:
      [
          { name: 'quantity', type: 'number' },
          { name: 'price', type: 'number' },
          { name: 'discount', type: 'number' },
          { name: 'vat', type: 'number' },
          { name: 'total', type: 'number' },
          { name: 'product_class_name', type: 'string'},
          { name: 'reason', type: 'string'},
          { name: 'sku', type: 'string'},
          { name: 'image', type: 'string'},
          { name: 'qr_code', type: 'string'},
          { name: 'product_name', type: 'string'},
          { name: 'notes', type: 'string'},
          { name: 'description_sales', type: 'string'},
          { name: 'shopping_description', type: 'string'},
          { name: 'barcode', type: 'string'},
          { name: 'rate_name', type: 'string'},
          { name: 'internal_code', type: 'string'},
          { name: 'state', type: 'number'},
          { name: 'sale_price', type: 'number'},
          { name: 'purchase_cost', type: 'number'},
          { name: 'tax_sales', type: 'number'},
          { name: 'tax_bill', type: 'number'},
          { name: 'stock_min', type: 'number'},
          { name: 'stock_max', type: 'number'},
          { name: 'tax_sales_id', type: 'number'},
          { name: 'brand_id', type: 'number'},
          { name: 'category_id', type: 'number'},
          { name: 'sub_category_id', type: 'number'},
          { name: 'percentage_gain', type: 'number'},
          { name: 'tax_bill_id', type: 'number'},
          { name: 'item_type_id', type: 'number'},
          { name: 'class_id', type: 'number'},
          { name: 'average_cost', type: 'number'},
          { name: 'recipe', type: 'boolean'},
          { name: 'perishable', type: 'boolean'},
          { name: 'id', type: 'number'},
      ]
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
  [
    { text: 'Cant', dataField: 'quantity', width: 60, align: 'center', cellsAlign: 'right' },
    { text: 'Detalle', dataField: 'product_name', minWidth: 200, align: 'center', cellsAlign: 'center', editable: false },
    { text: 'Precio', dataField: 'sale_price', width: 100, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
    { text: 'IVA', editable: false, dataField: 'tax_sales', width: 50, align: 'center', cellsAlign: 'right' },
    { text: 'Descuento', dataField: 'discount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
    { text: 'Motivo Dtco', dataField: 'reason', width: 150, align: 'right', cellsAlign: 'right' },
    { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2', editable: false },
  ];

  editSettings: any =
  {
    saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true,
    saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
  };

  theme = 'bootstrap';

  source2: any =
  {
      localdata: [],
      datafields:
      [
        { name: 'CurrencyISO', type: 'string'},
        { name: 'Money', type: 'string'},
        { name: 'active', type: 'number'},
        { name: 'address', type: 'string'},
        { name: 'apply_notes', type: 'boolean'},
        { name: 'cash', type: 'number'},
        { name: 'code_ad', type: 'string'},
        { name: 'company_id', type: 'number'},
        { name: 'company_name', type: 'string'},
        { name: 'cufe', type: 'string'},
        { name: 'currency_id', type: 'number'},
        { name: 'customer_id', type: 'number'},
        { name: 'denomination', type: 'string'},
        { name: 'discount', type: 'number'},
        { name: 'dni', type: 'string'},
        { name: 'document_name', type: 'string'},
        { name: 'dv', type: 'string'},
        { name: 'electronic', type: 'boolean'},
        { name: 'email', type: 'string'},
        { name: 'expiration_date', type: 'string'},
        { name: 'id', type: 'number'},
        { name: 'image', type: 'string'},
        { name: 'invoice_date', type: 'string'},
        { name: 'invoice_name', type: 'string'},
        { name: 'invoice_nro', type: 'string'},
        { name: 'invoice_time', type: 'string'},
        { name: 'invoice_type_id', type: 'number'},
        { name: 'location', type: 'string'},
        { name: 'means_name', type: 'string'},
        { name: 'means_payment_id', type: 'number'},
        { name: 'merchant_registration', type: 'string'},
        { name: 'mobile', type: 'string'},
        { name: 'months', type: 'number'},
        { name: 'name_city', type: 'string'},
        { name: 'name_department', type: 'string'},
        { name: 'notes', type: 'string'},
        { name: 'path_report', type: 'string'},
        { name: 'payment_change', type: 'string'},
        { name: 'payment_method', type: 'string'},
        { name: 'payment_method_id', type: 'number'},
        { name: 'phone', type: 'string'},
        { name: 'plural_name', type: 'string'},
        { name: 'postal_code', type: 'string'},
        { name: 'prefix', type: 'string'},
        { name: 'prefix_doc', type: 'string'},
        { name: 'qrcode', type: 'string'},
        { name: 'singular_name', type:'string'},
        { name: 'status', type: 'number'},
        { name: 'subtotal', type: 'number'},
        { name: 'tax_value', type: 'number'},
        { name: 'taxlevel', type: 'string'},
        { name: 'taxregime', type: 'string'},
        { name: 'term_value', type: 'number'},
        { name: 'time_limit', type: 'string'},
        { name: 'total', type: 'number'},
        { name: 'total_allowance', type: 'number'},
        { name: 'total_charges', type: 'number'},
        { name: 'typeorganization', type: 'string'},
        { name: 'username', type: 'string'},
        { name: 'voucher_name', type: 'string'},
        { name: 'zipkey', type: 'string'}
      ],
      datatype: 'array'
  }

  dataAdapter2: any = new jqx.dataAdapter(this.source2);

  cellClass = (row: number, columnfield: any, value: number): string => {
      const rec = this.customGrid.getrowdata(row);
      console.log(rec);
      if (rec.status == 1) {
          return 'fas-fa-ok-thumbs fa-cursor';
      }else if( rec.status == 2) {
          return 'fas-fa-error fa-cursor';
      }else if( rec.electronic == 0) {
          return 'fas-fa-ok fa-cursor';
      } else {
          return 'fas-fa-warning fa-cursor';
      }
  }
  columns2: any[] =
  [
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#mail_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
          return '<span><i class="fas fa-envelope-open-text fa-cursor fas-fa-mail"></span>';
      },
    },
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#pdf_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
          return '<span><i class="fas fa-file-pdf fa-cursor fas-fa-pdf"></i></span>';
      },
    },
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#send_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
        const rec = this.customGrid.getrowdata(row) as Sales;
        if (rec.status == 1) {
          return '<i class="fas fa-thumbs-up fas-fa-ok-thumbs fa-cursor"></i>';
        }else if( rec.status == 2) {
            return '<i class="fas fa-bug fas-fa-error fa-cursor"></i>';
        }else if( !rec.electronic) {
            return '<i class="fas fa-check fas-fa-ok fa-cursor"></i>';
        } else {
            return '<i class="fas fa-exclamation-circle fas-fa-warning fa-cursor">';
        }
      },
    },
    { text: 'Factura Nº.', dataField: 'invoice_nro', width: 80, cellsalign: 'right' },
    { text: 'Pref', dataField: 'prefix', width: 50 },
    { text: 'Adquiriente', dataField: 'company_name', minwidth: 350 },
    { text: 'Documento', dataField: 'dni', width: 90, cellsalign: 'right' },
    { text: 'Total', dataField: 'total', cellsalign: 'right', width: 120, cellsformat: 'c2' },
    { text: 'Moneda', dataField: 'Money', width: 90 },
    { text: 'Fecha', dataField: 'invoice_date', width: 90 },
    { text: 'Estado', dataField: 'active', width: 90,
      cellsrenderer: (riw: number, column: any, value: number): string => {
        switch (value) {
          case 1:
              return '<p class="active-green">Activa</p>'
              break;
          case 2:
              return '<p class="active-red">Anulada</p>'
              break;
          default:
              return '<p class="active-orange">Inactiva</p>'
              break;
        }
      }
    },
  ];
  constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    private resSer: ResolutionsService,
    private perSer: PersonsService,
    public currSer: CurrencySysService,
    public reporstSer: ReportsService,
    public itemsSer: ItemsService,
    public spinner: NgxSpinnerService,
    public documents: DocumentsService,
    private shopSer: ShoppingService,
    private taxSer: TaxRatesService,
    private docsSer: DocumentsService ,
    private branch: BranchOfficeService,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
  }

  get invalidName(): boolean{
    return this.customForm.get('invoice_nro').invalid && this.customForm.get('invoice_nro').touched;
  }
  get invalidBranch(): boolean{
    return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
  }

  ngOnInit(): void {
    const ts    = this;
    ts.uid      = ts.aRouter.snapshot.paramMap.get('id');
    ts.showSpinner();
    if( ts.uid ) {
      ts.customForm = this.fb.group({
        provider_id       : new FormControl({ value: '0', disabled: true}),
        point_of_sale_id  : new FormControl({ value: '0', disabled: true}),
        payment_id        : new FormControl({ value: '0', disabled: true}),
        invoice_nro       : ['0'],
        discount          : [0],
        vat               : [0],
        total             : [0],
        admission_date    : [''],
        freight           : [0],
        notes             : [''],
        pay_day           : [''],
        tax_sale_id       : [0],
        tax_bill_id       : [0],
        product_id        : [0],
        invoice_id        : [0],
        gain              : [0],
        batch             : [''],
        fabrication_date  : [''],
        expiration_date   : [''],
        percentage_gain   : ['0'],
        vat_included      : [false],
        amount            : [0],
        unit_cost         : [0],
        unit_price        : [0],
        total_cost        : [0],
        sale_price        : [0],
        quantity          : [0],
        sub_total         : [0],
      });
    }else{
      ts.customForm = this.fb.group({
        admission_date    : [new Date().toISOString().split('T')[0], [Validators.required]],
        discount          : [0],
        freight           : [0],
        invoice_nro       : ['', [Validators.required, Validators.minLength(2)]],
        vat               : [0],
        notes             : [''],
        pay_day           : [new Date().toISOString().split('T')[0], [Validators.required]],
        payment_id        : ['', [Validators.required]],
        point_of_sale_id  : ['0', [Validators.required]],
        provider_id       : ['0', [Validators.required]],
        sub_total         : [0, [Validators.required]],
        total             : [0, [Validators.required]],
        tax_sale_id       : [0],
        tax_bill_id       : [0],
        product_id        : [0],
        invoice_id        : [0],
        gain              : [0],
        batch             : [''],
        fabrication_date  : [''],
        expiration_date   : [''],
        percentage_gain   : ['0'],
        vat_included      : [false],
        amount            : [0],
        unit_cost         : [0],
        unit_price        : [0],
        total_cost        : [0],
        sale_price        : [0],
        quantity          : [0],
      });
      ts.onRefresh();
    }
    let   frm   = ts.customForm;

    ts.branch.getPointsOfSale({}).subscribe((resp) => {
      ts.points_of_sale  = resp;
    });

    ts.docsSer.getPaymentMethods({}).subscribe((resp) => {
      ts.payments  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('payment_id').setValue(resp[0].id);
      }
    });

    ts.perSer.getProviders({}).subscribe((resp) =>{
      ts.providers  = resp;
    });

    ts.taxSer.getData({isVat: true}).subscribe((resp) =>{
      ts.taxBill    = resp;
      ts.taxSales   = resp;
      if( resp.length > 0 ){
        frm.get('tax_bill_id').setValue(resp[0].id);
        frm.get('tax_sale_id').setValue(resp[0].id);
        ts.taxBillSelect  = resp[0];
        ts.taxSaleSelect  = resp[0];
      }
    });

    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    const ts  = this;
  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.shopSer.getData({uid: id}).subscribe((resp) => {
      frm.get('invoice_nro').setValue(resp[0].invoice_nro);
      frm.get('total').setValue(resp[0].total);
      frm.get('provider_id').setValue(resp[0].provider_id);
      frm.get('admission_date')  .setValue(resp[0].admission_date);
      frm.get('discount')        .setValue(resp[0].discount);
      frm.get('freight')         .setValue(resp[0].freight);
      frm.get('vat')             .setValue(resp[0].vat);
      frm.get('notes')           .setValue(resp[0].notes);
      frm.get('pay_day')         .setValue(resp[0].pay_day);
      frm.get('payment_id')      .setValue(resp[0].payment_id);
      frm.get('point_of_sale_id').setValue(resp[0].point_of_sale_id);
      frm.get('sub_total')       .setValue(resp[0].sub_total);
      ts.searchField.nativeElement.focus;
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
    const ts  = this;
    const frm = ts.customForm;
    let line  = i;

    if( line.class_id !== 2 ) {
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
    ts.focusElement.nativeElement.value = '';
    ts.itemsResult = ts.items;
    ts.focusElement.nativeElement.focus;
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
      ts.focusElement.nativeElement.focus;
    }, () =>  ts.hideSpinner());
    ts.onClearForm();
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
    const ts        = this;
    const frm       = ts.customForm;
    ts.itemSelect   = null;
    ts.itemName     = '';
    frm.get('amount').setValue(0);
    frm.get('unit_cost').setValue(0);
    frm.get('unit_price').setValue(0);
    frm.get('total_cost').setValue(0);
    frm.get('sale_price').setValue(0);
    frm.get('gain').setValue(0);
    frm.get('expiration_date').setValue('');
    frm.get('fabrication_date').setValue('');

    if( ts.taxBill.length > 0 ){
      frm.get('tax_bill_id').setValue(ts.taxBill[0].id);
      frm.get('tax_sale_id').setValue(ts.taxSales[0].id);
      ts.onChageTaxBill(ts.taxBill[0].id);
      ts.onChangeTaxSale(ts.taxSales[0].id);
    }

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
  /**
   *
   * Calcula los valores de compra
   */
  onPurchaseData() {
    const ts        = this;
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
  /**
   * Guarda la factura y el detalle
   */
  onSave(content: any = {}){
    const ts      = this;
    let frm       = ts.customForm;
    const uid     = ts.uid;
    const product = ts.itemSelect;
    let values    = frm.getRawValue();

    if(!product){
      ts.msg.toastMessage('','No ha seleccionado un producto.',4);
      return false;
    }

    if(parseFloat(values.amount) <= 0 || parseFloat(values.sale_price) <= 0  || parseFloat(values.unit_cost) <= 0){
      ts.msg.toastMessage('','Hay un error en las cantidades.',4);
      return false;
    }

    if(frm.invalid){
      ts.msg.toastMessage('','Hay campos sin llenar.',4);
      return false;
    }

    if(uid) {
      values.invoice_id = uid;
      values.product_id = product.id;
      ts.onSaveDetail(values);
    }else{
      values.product_id = product.id;
      ts.showSpinner('Guardando factura');
      ts.api.post('/shopping/create', values).subscribe((resp: JsonResponse) => {
        ts.hideSpinner();
        if( resp.success) {
          ts.msg.toastMessage('', resp.message);
          const shoppin = resp.records as any;
          ts.uid            = shoppin.id;
          ts.editing        = true;
          values.invoice_id = shoppin.id;
          ts.onSaveDetail(values);
        }else{
          ts.msg.toastMessage('', resp.message, 4);
        }
      },(resp)  => {
        ts.hideSpinner();
      });
    }
  }

  onSaveDetail(values: any) {
    const ts      = this;
    ts.showSpinner('Guardando detalle');
    if( !ts.itemSelect.perishable ) {
      values.batch            = null;
      values.fabrication_date = null;
      values.expiration_date  = null;
    }
    let data  = {
      records: JSON.stringify(values)
    };
    ts.api.post('/shopping/create/detail', data).subscribe((resp: JsonResponse) => {
      if( resp.success) {
        ts.msg.toastMessage('', 'Se ha guardado correctamente el producto en el inventario.');
        ts.onClearForm();
      }else{
        ts.msg.toastMessage('', resp.message, 4);
      }
      ts.searchField.nativeElement.focus;
      ts.hideSpinner();
    },(resp)  => {
      ts.hideSpinner();
    });
  }

  getWidth() : any {
		return '100%';
  }
  onClose() {
    this.goRoute(`pages/shopping/invoices`);
  }
}
