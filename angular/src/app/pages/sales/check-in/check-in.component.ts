import { ErrorResponse } from 'src/app/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import{ jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { AccountingDocuments } from './../../../models/accounting-model';

import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JsonResponse } from './../../../interfaces/json-response.interface';
// Services
import { ReportsService } from './../../../services/global/reports.service';
import { DocumentsService } from './../../../services/global/documents.service';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { ResolutionsService, PersonsService, CurrencySysService } from 'src/app/services/general/index';
import { ItemsService } from './../../../services/products/index';
import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment } from './../../../models/general-model';
import { Sales } from './../../../models/reports-model';
import { Items } from 'src/app/models/products-model';
import { FormSpinnerComponent } from 'src/app/core/components/forms';
import { BranchOfficeService } from 'src/app/services/companies';
import { BranchOffice } from 'src/app/models/companies-model';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent extends FormSpinnerComponent implements OnInit, AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('myDataTable', { static: false } ) myDataTable: jqxDataTableComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('cashele') cashele: ElementRef;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;

  title = 'Productos/Servicios';
  aDocuments: AccountingDocuments[]= [];
  customers: Persons[]= [];
  currency: CurrencySys[] = [];
  items: Items[] = [];
  itemsResult: Items[] = [];
  lines: Items[] = [];
  timeLimits: TimeLimits[] = [];
  paymentMethods: PaymentMethods[] = [];
  meansPayment: MeansPayment[] = [];
  points_of_sale: BranchOffice[] = [];
  selectedRow = false;
  isCounted   = true;
  rowIndex    = -1;
  pathfile    = "";
  modal       : NgbModalRef;
  source: any =
  {
      localdata: this.lines,
      datatype: "array",
      datafields:
      [
        { name: 'product_class_name', type : 'string'},
        { name: 'sku', type :' string'},
        { name: 'image', type :' string'},
        { name: 'unit_name', type :' string'},
        { name: 'unit_description', type :' string'},
        { name: 'abbre_unit', type :' string'},
        { name: 'qr_code', type : 'string'},
        { name: 'product_name', type : 'string'},
        { name: 'notes', type : 'string'},
        { name: 'description_sales', type : 'string'},
        { name: 'shopping_description', type : 'string'},
        { name: 'barcode', type : 'string'},
        { name: 'rate_name', type : 'string'},
        { name: 'internal_code', type : 'string'},
        { name: 'state', type : 'number'},
        { name: 'quantity', type : 'number'},
        { name: 'total', type : 'number'},
        { name: 'discount', type : 'number'},
        { name: 'sale_price', type : 'number'},
        { name: 'purchase_cost', type : 'number'},
        { name: 'tax_sales', type : 'number'},
        { name: 'tax_amount', type : 'number'},
        { name: 'tax_bill', type : 'number'},
        { name: 'tax_bill_rate', type : 'number'},
        { name: 'tax_sale_rate', type : 'number'},
        { name: 'stock_min', type : 'number'},
        { name: 'stock_max', type : 'number'},
        { name: 'tax_sales_id', type : 'number'},
        { name: 'brand_id', type :' number'},
        { name: 'stock', type :' number'},
        { name: 'category_id', type :' number'},
        { name: 'product_unit_id', type :' number'},
        { name: 'factor', type :' number'},
        { name: 'sub_category_id', type :' number'},
        { name: 'percentage_gain', type : 'number'},
        { name: 'tax_bill_id', type : 'number'},
        { name: 'item_type_id', type : 'number'},
        { name: 'unit_id', type : 'number'},
        { name: 'base_factor', type : 'number'},
        { name: 'class_id', type : 'number'},
        { name: 'average_cost', type : 'number'},
        { name: 'recipe', type : 'boolean'},
        { name: 'vat_included', type : 'boolean'},
        { name: 'selling_out_of_inventory', type : 'boolean'},
        { name: 'perishable', type : 'boolean'},
        { name: 'id', type : 'number'},
      ]
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
  [
    { text: 'Detalle', dataField: 'product_name', minWidth: 200, align: 'center', cellsAlign: 'center', editable: false },
    { text: 'Cant', dataField: 'quantity', width: 60, align: 'center', cellsAlign: 'right' },
    { text: 'U.M', dataField: 'abbre_unit', minWidth: 40, width: 40, align: 'center', cellsAlign: 'center', editable: false },
    { text: 'Precio', dataField: 'sale_price', width: 100, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
    { text: 'IVA', editable: false, dataField: 'tax_sales', width: 50, align: 'center', cellsAlign: 'right' },
    { text: 'Vr. IVA', editable: false, dataField: 'tax_amount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
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
        { name: 'tax_amount', type: 'number'},
        { name: 'tax_sale_rate', type: 'number'},
        { name: 'taxlevel', type: 'string'},
        { name: 'taxregime', type: 'string'},
        { name: 'term_value', type: 'number'},
        { name: 'time_limit', type: 'string'},
        { name: 'total', type: 'number'},
        { name: 'stock', type: 'number'},
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
    // {
    //   columngroup: 'Actions',
    //   text: '', sortable: false, filterable: false, editable: false, align: 'center',
    //   groupable: false, draggable: false, resizable: false,
    //   datafield: '#send_#', columntype: 'text', width: 32,
    //   cellsrenderer: (row: number, column: any, value: number): string => {
    //     const rec = this.customGrid.getrowdata(row) as Sales;
    //     if (rec.status == 1) {
    //       return '<i class="fas fa-thumbs-up fas-fa-ok-thumbs fa-cursor"></i>';
    //     }else if( rec.status == 2) {
    //         return '<i class="fas fa-bug fas-fa-error fa-cursor"></i>';
    //     }else if( !rec.electronic) {
    //         return '<i class="fas fa-check fas-fa-ok fa-cursor"></i>';
    //     } else {
    //         return '<i class="fas fa-exclamation-circle fas-fa-warning fa-cursor">';
    //     }
    //   },
    // },
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
    private branch: BranchOfficeService,
    private modalService: NgbModal,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({
      invoice_date      : [new Date().toISOString().split('T')[0], [Validators.required]],
      expiration_date   : [new Date().toISOString().split('T')[0], [Validators.required]],
      invoice_type_id   : ['', [Validators.required]],
      currency_id       : ['', [Validators.required]],
      customer_id       : ['0', [Validators.required]],
      point_of_sale_id  : ['0', [Validators.required]],
      discount          : [0, [Validators.required]],
      cash              : [0, [Validators.required]],
      payment_change    : [0, [Validators.required]],
      vat               : [0, [Validators.required]],
      subtotal          : [0, [Validators.required]],
      total             : [0, [Validators.required]],
      means_payment_id  : [1, [Validators.required]],
      payment_method_id : [1, [Validators.required]],
      time_limit_id     : [1, [Validators.required]],
    });

    this.modalForm  = this.fb.group({
      date_from       : [new Date().toISOString().split('T')[0]],
      date_up         : [new Date().toISOString().split('T')[0]],
      invoice_type_id : [''],
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    let   frm   = ts.customForm;
    ts.showSpinner();
    const param = {
        where : JSON.stringify({"category_id": "1", "active":"1"})
    };
    ts.resSer.getAccountingDocuments(param).subscribe((resp) => {
      ts.aDocuments  = resp;
      frm.get('invoice_type_id').setValue(7);
      this.modalForm.get('invoice_type_id').setValue(7);
    });

    ts.currSer.getData({}).subscribe((resp) => {
      ts.currency = resp;
      if(resp.length > 0 ) {
        const nal = resp.find( ele => ele.national_currency == 1 );
        if(nal) {
          frm.get('currency_id').setValue(nal.id);
        }else{
          frm.get('currency_id').setValue(resp[0].id);
        }
      }
    });

    ts.documents.getPaymentMethods({}).subscribe((resp) =>{
      ts.paymentMethods  = resp;
    });

    ts.documents.getMeansPayment({}).subscribe((resp) =>{
      ts.meansPayment  = resp;
      frm.get('means_payment_id').setValue(resp[0].id);
    });

    ts.documents.getTimeLimits({}).subscribe((resp) =>{
      ts.timeLimits  = resp;
    });

    ts.perSer.getCustomersAll().subscribe((resp) =>{
      ts.customers  = resp;
      ts.hideSpinner();
    });

    ts.branch.getPointsOfSale({}).subscribe((resp) => {
      ts.points_of_sale  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
        ts.onRefresh();
      }
    });
  }

  ngAfterViewInit(): void {
    const ts  = this;
  }

  onChanegCustomer(e: number) {
    console.log(e);
  }

  onClickItem(i: Items){
    const ts  = this;
    let line  = i;
    let grid  = ts.myDataTable;

    const rows: Items[] = grid.getRows();
    // console.log(i);
    if(rows.length > 0) {
      let index     = -1;
      const filter  =  rows.find((item, i) => {
        index = i;
        return (item.id === line.id && item.product_unit_id === line.product_unit_id);
      });
      if( filter) {
        let quantity = filter.quantity + 1;
        grid.setCellValue(index, 'quantity', quantity);
        grid.clearSelection();
        grid.selectRow(index);
        // ts.msg.toastMessage('Aumentar cantidad', 'Se ha aumentado la cantidad.');
        ts.onLineTotal(filter, index);
      }else{
        line.discount = 0;
        line.total    = 0;
        line.quantity = 1;
        grid.addRow(null, line, 'last');
        grid.clearSelection();
        grid.selectRow(rows.length -1 );
        ts.onLineTotal(line, rows.length -1);
      }
    }else{
      line.discount = 0;
      line.total    = 0;
      line.quantity = 1;
      grid.addRow(null, line, 'last');
      grid.clearSelection();
      grid.selectRow(rows.length - 1);
      ts.onLineTotal(line, 0);
    }
  }

  onRowSelect(event: any): void {
    this.selectedRow = true;
    this.rowIndex = event.args.index;
  };
  onRowUnselect(event: any): void {
    this.selectedRow = false;
    this.rowIndex = -1;
  };

  onCellEndEdit(e: any){
    if(e.args.dataField != "reason"){
      if(e.args.displayValue == ""){
        this.myDataTable.setCellValue(e.args.index, e.args.dataField, 0);
      }
      const row: Items = e.args.row;
      this.onLineTotal(row, e.args.index);
    }
  }

  onClearFilter(){
    const ts = this;
    ts.searchbar.nativeElement.value = '';
    ts.itemsResult = ts.items;
    ts.searchbar.nativeElement.focus;
  }

  onRefresh(){
    const ts  = this;
    ts.showSpinner('Cargando listado de productos.');
    const point_of_sale_id = ts.customForm.get('point_of_sale_id').value;
    ts.itemsSer.getDataSales({point_of_sale_id}).subscribe((resp) => {
      ts.items  = resp;
      ts.hideSpinner();
      ts.itemsResult = ts.items;
    });
  }

  onSearchProducts(query: string) {
    const ts  = this;
    ts.showSpinner();
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

  onAdd() {
    const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getSelection()[0];
    if( ts.rowIndex >= 0 && row){
      const quantity  = parseFloat(row.quantity.toString()) + 1;
      grid.setCellValue(ts.rowIndex, 'quantity', quantity);
      // ts.msg.toastMessage('Aumentar cantidad', 'Se ha aumentado la cantidad.');
      ts.onLineTotal(row, ts.rowIndex);
    }else{
      ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
    }
  }

  onDelete() {
    const ts      = this;
    let grid      = ts.myDataTable;
    if( ts.rowIndex >= 0){
      grid.deleteRow(ts.rowIndex);
      ts.msg.toastMessage('Quitar cantidad', 'Se ha quitado una linea de venta.');
      ts.onSum();
    }
  }

  onMinus() {
    const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getSelection()[0];
    if( ts.rowIndex < 0 && !row){
      ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
      return
    }
    const quantity  = parseFloat(row.quantity.toString()) - 1;
    if(quantity <= 0){
      ts.msg.toastMessage('Quitar cantidad', 'No se puede dejar la cantidad en cero.', 3);
      return
    }
    grid.setCellValue(ts.rowIndex, 'quantity', quantity);
    // ts.msg.toastMessage('Disminuir cantidad', 'Se ha disminuido la cantidad.');
    ts.onLineTotal(row, ts.rowIndex);
  }

  onCancel(){
    this.myDataTable.clear();
    this.onSum();
  }

  onCash(content){
    const ts      = this;
    const frm     = ts.customForm;
    // const values  = frm.getRawValue();
    // if( parseFloat(values.customer_id) <= 0 && parseFloat(values.invoice_type_id) != 13 ){
    //   ts.msg.toastMessage('','Debe seleccionar un cliente',3);
    //   return;
    // }
    this.modal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modal.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    })
  }

  onLineTotal(ele: Items, i: number) {
    const ts        = this;
    let grid        = ts.myDataTable;
    const tax       = parseFloat(ele.tax_sale_rate.toString());
    const discount  = parseFloat(ele.discount.toString());
    const unitCost  = parseFloat(ele.sale_price.toString());
    const quantity  = parseFloat(ele.quantity.toString());
    const total     = ( unitCost * quantity ) - discount;
    const tax_value = total - (total / tax);
    grid.setCellValue(i, 'total', total);
    grid.setCellValue(i, 'tax_amount', tax_value);
    ts.onSum();
  }

  onSum(){
    const ts      = this;
    let grid      = ts.myDataTable;
    let subtotal  = 0;
    let total     = 0;
    let taxTotal  = 0;
    let discount  = 0;
    let frm       = ts.customForm;
    const rows: Items[] = grid.getRows();
    if(rows.length > 0){
      rows.map((ele, i) => {
        const subt= (ele.quantity * ele.sale_price);
        discount  += ele.discount;
        subtotal  += subt;
        total     += ele.total;
        taxTotal  += ele.tax_amount;
      });
    }
    frm.get('discount').setValue(discount);
    frm.get('subtotal').setValue(subtotal - taxTotal);
    frm.get('vat').setValue(taxTotal);
    frm.get('total').setValue(total);
    frm.get('cash').setValue(total);
    frm.get('payment_change').setValue(0);
  }

  onSave(content){
    const ts  = this;
    let frm   = ts.customForm;
    let grid  = ts.myDataTable;
    const rows: Items[]  = grid.getRows();
    if(rows.length == 0){
      ts.msg.toastMessage('','No hay items para generar el documento.',4)
      return;
    }

    let contin  = true;
    rows.map((ele) => {
      if( ele.quantity == 0 ){
        ts.msg.toastMessage('','Hay un error en una de las lineas del documento.',4);
        contin  = false;
        return false;
      }
    });

    if(!contin){return};

    // console.log(frm.getRawValue());
    if(frm.invalid){
      ts.msg.toastMessage('','El formulario contiene campos sin llenar.',4);
      return;
    }

    const lines_detail   = rows;
    let values  = frm.getRawValue();

    values.lines  = lines_detail;
    // console.log(values);
    let data  = {
      records: JSON.stringify(values)
    };
    ts.showSpinner();
    ts.api.post('/sales/create', data).subscribe((resp: JsonResponse) => {
      const ts  = this;
      ts.hideSpinner();
      if( resp.success) {
        ts.msg.toastMessage('', resp.message);
        ts.myDataTable.clear();
        ts.onSum();
        let path    = `${ts.api.getAppUrl()}${resp.report.pathFile}`;
        ts.pathfile =  path;
        ts.modal.close();
        ts.onViewDocs(content);
      }else{
        ts.msg.toastMessage('', resp.message, 4);
      }
      // console.log(resp.report);
    },(resp: ErrorResponse)  => {
      ts.msg.toastMessage('', resp.error.message, 4);
      ts.hideSpinner();
    });
  }

  onDate(e: any){
    this.AddDays();
  }

  onChaneCash(e:any){
    const ts  = this;
    let frm   = ts.customForm;
    let cashValue = parseFloat(frm.get('cash').value);
    let totlValue = parseFloat(frm.get('total').value);
    frm.get('payment_change').setValue(cashValue - totlValue);
  }

  onExpirationDate(e: any){
    console.log(e);
  }

  onPaymenMethods(e: number){
    const ts  = this;
    ts.isCounted = (e === 1);
    if(ts.isCounted) {
      ts.customForm.get('time_limit_id').setValue( ts.timeLimits[0].id );
      ts.AddDays();
    }
  }

  onTimeLimits(e: number) {
    const ts = this;
    ts.AddDays();
  }

  AddDays(){
    const ts  = this;
    let frm   = ts.customForm;
    let sDate = frm.get('invoice_date').value;
    let adate   = new Date(sDate);
    let select  = ts.timeLimits.find(ele => ele.id === frm.get('time_limit_id').value);
    if(select){
      let days  = select.months * select.term_value;
      adate.setDate(adate.getDate() + days);
      let dateStr = adate.toISOString().split('T')[0];
      frm.get('expiration_date').setValue(dateStr);
    }
  }

  onSearch() {
    const ts    = this;
    const frm   = ts.modalForm;
    const values= frm.getRawValue();
    ts.showSpinner();
    ts.customGrid.clear();
    ts.reporstSer.getSales({
      initDate  : values.date_from,
      finalDate : values.date_up,
      typeId    : values.invoice_type_id,
    }).subscribe((resp) => {
      ts.hideSpinner();
      this.source2.localdata = resp;
      this.customGrid.updatebounddata('cells');
    },(err) => {
      ts.hideSpinner();
      console.log(err);
    });
  }

  getWidth() : any {
		return '100%';
  }

  cellClick(event: any, content): void
  {
    const ts    = this;
    const data  = event.args;
    const row: Sales  = this.customGrid.getrowdata(data.rowindex);
    if (data.datafield === '#pdf_#'){
      if( ( row.path_report  && row.status == 1 ) || ( row.path_report && !row.electronic ) ) {
        let path    = `${ts.api.getAppUrl()}${row.path_report}`;
        ts.pathfile = path;
        ts.onViewDocs(content);
      }else{
        ts.showSpinner('Generando archivo...');
        ts.reporstSer.onInvoice(row)
          .subscribe( ( resp ) => {
            // console.log(resp);
            let path    = `${ts.api.getAppUrl()}${resp.pathFile}`;
            ts.pathfile = path;
            ts.hideSpinner();
            ts.onSearch();
            ts.onViewDocs(content);
          }, () => ts.hideSpinner());
      }
    }else if (data.datafield === '#send_#'){
      ts.sendDocument(row);
    }else if (data.datafield === '#mail_#'){
      ts.showSpinner('Enviando correo al cliente...');
      ts.reporstSer.onSendMail(row)
        .subscribe(()=> ts.hideSpinner(),()=> ts.hideSpinner());
    }
  }

  onViewDocs(content){
    this.cashele.nativeElement.focus();
    this.modal = this.modalService.open(content, {windowClass: 'fullscreen-modal', backdrop: false});
  }

  sendDocument(ele: Sales){
    const ts = this;
    if(!ele.electronic){
      ts.msg.toastMessage('','El documento documento no requiere validación por la DIAN.');
      return null;
    }

    if(ele.status === 1){
      ts.msg.toastMessage('','El documento ya fue enviado y validado por la DIAN.');
      return null ;
    }


      ts.showSpinner('Enviando documento a la DIAN...');
      ts.api.post(`/sendInvoice/${ ele.id }`)
        .subscribe( (resp: JsonResponse) => {
          // console.log(resp);
          if(resp.success){
            ts.msg.toastMessage('', resp.message);
          }else{
            ts.msg.toastMessage('', resp.message, 4);
          }
          ts.onSearch();
          ts.hideSpinner();
        }, () => ts.hideSpinner());

  }
}
