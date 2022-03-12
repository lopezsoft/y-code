import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { AccountingDocuments } from './../../models/accounting-model';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ReportsService } from './../../services/global/reports.service';
import { DocumentsService } from './../../services/global/documents.service';
import { ApiServerService, MessagesService } from './../../utils';
import { ResolutionsService, CurrencySysService } from './../../services/general/index';
import { ItemsService } from './../../services/products/index';
import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment, TaxRates, Resolutions } from './../../models/general-model';
import { Sales } from './../../models/reports-model';
import { Items } from './../../models/products-model';
import { BranchOffice } from './../../models/companies-model';
import { SalesService } from 'src/app/services/sales/sales.service';
import { InvoiceBillComponent } from 'src/app/core/components/base/invoice-bill.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent extends InvoiceBillComponent implements OnInit, AfterViewInit {
	@ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('myDataTable', { static: false } ) myDataTable: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('cashele') cashele: ElementRef;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('searchbar2') searchbar2: ElementRef;
  @ViewChild('searchbar3') searchbar3: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;
  title = 'Productos/Servicios';
  aDocuments		: AccountingDocuments[]= [];
  resolution		: Resolutions[]= [];
  customers			: Persons[]= [];
  currency			: CurrencySys[] = [];
  items					: Items[] = [];
  itemsResult		: Items[] = [];
  lines					: Items[] = [];
  timeLimits		: TimeLimits[] = [];
  paymentMethods: PaymentMethods[] = [];
  meansPayment	: MeansPayment[] = [];
  points_of_sale: BranchOffice[] = [];
	tax_rates			: TaxRates[] = [];
  selectedRow = false;
  isCounted   = true;
  rowIndex    = -1;
  sale_id     : number = 0;
  pathfile    = "";
  modal       : NgbModalRef;
  source				: any = {};

  taxRatesSource: any = {};

  dataAdapter				: any;
  taxRatesAdapter		: any;

  columns: any[];

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
    // {
    //   columngroup: 'Actions',
    //   text: '', sortable: false, filterable: false, editable: false, align: 'center',
    //   groupable: false, draggable: false, resizable: false,
    //   datafield: '#mail_#', columntype: 'text', width: 32,
    //   cellsrenderer: (row: number, column: any, value: number): string => {
    //       return '<span><i class="fas fa-envelope-open-text fa-cursor fas-fa-mail"></span>';
    //   },
    // },
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#edit_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
        return '<span><i class="fas fa-pen fas-fa-edit fa-cursor"></i></span>';
      },
    },
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#pdf_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
          return '<span><i class="fas fa-file-invoice fa-cursor fas-fa-pdf"></i></span>';
      },
    },
		{
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#pdf2_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
          return '<span><i class="fas fa-receipt fa-cursor fas-fa-pdf"></i></span>';

      },
    },
    {
      columngroup: 'Actions',
      text: '', filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#cancel_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
        const rec = this.customGrid.getrowdata(row) as Sales;
        if (rec.active == 1) {
          return '<i class="fas fa-check-double fas-fa-ok fa-cursor">';
        } else {
          return '<i class="fas fa-ban fas-fa-delete fa-cursor"></i>';
        }
      },
    },
    { text: 'Factura Nº.', dataField: 'invoice_nro', width: 80, cellsalign: 'right' },
    { text: 'Pref', dataField: 'prefix', width: 100 },
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
        default:
            return '<p class="active-red">Anulada</p>'
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
    public currSer: CurrencySysService,
    public reporstSer: ReportsService,
    public itemsSer: ItemsService,
    public spinner: NgxSpinnerService,
    public documents: DocumentsService,
    private _salesService: SalesService,
    public modalService: NgbModal,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner, modalService, itemsSer, reporstSer);
    this.customForm = this.fb.group({
      invoice_date      : [new Date().toISOString().split('T')[0], [Validators.required]],
      expiration_date   : [new Date().toISOString().split('T')[0], [Validators.required]],
      invoice_type_id   : ['', [Validators.required]],
      currency_id       : ['', [Validators.required]],
      customer_id       : ['0', [Validators.required]],
      product_id        : ['0'],
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

    let fecha       = new Date();
    fecha.setDate(fecha.getDate() - 60);

    this.modalForm  = this.fb.group({
      date_from       : [fecha.toISOString().split('T')[0]],
      date_up         : [new Date().toISOString().split('T')[0]],
      invoice_type_id : [''],
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
		const ts    = this;
		const frm   = ts.modalForm;
		const param = {
				where : JSON.stringify({"category_id": "1", "active":"1"})
		};
		ts.resSer.getAccountingDocuments(param).subscribe((resp) => {
			ts.aDocuments  = resp;
			frm.get('invoice_type_id').setValue(resp[0].id);
			this.modalForm.get('invoice_type_id').setValue(resp[0].id);
		});
  }

  ngAfterViewInit(): void {
		super.ngAfterViewInit();
		const ts  	= this;
		const frm   = ts.customForm;
		ts.resSer.getData({category_id: 1}).subscribe((resp) => {
			ts.resolution  = resp;
			if(resp.length == 0){
				ts.goRoute('/general/resolutions');
				return false;
			}
			frm.get('invoice_type_id').setValue(resp[0].id);
			this.modalForm.get('invoice_type_id').setValue(resp[0].id);
			ts._salesService.getCheckIn()
				.subscribe({
					next: (resp) => {
						ts.currency = resp.currencySys;
						if(resp.currencySys.length > 0 ) {
							const nal = ts.currency.find( ele => ele.national_currency == 1 );
							if(nal) {
								frm.get('currency_id').setValue(nal.id);
							}else{
								frm.get('currency_id').setValue(resp[0].id);
							}
						}

						ts.points_of_sale  = resp.pointOfSales;

						ts.customers  	= resp.customers;
						ts.timeLimits  	= resp.timeLimits;

						ts.meansPayment  = resp.meansPayment;
						frm.get('means_payment_id').setValue(resp.meansPayment[0].id);

						ts.paymentMethods  	= resp.paymentMethods;

						ts.tax_rates				= resp.taxRates;

						ts.hideSpinner();
						ts.onCreateGrid();
            if(ts.sale_id > 0) {
              ts.getDeatailId(ts.sale_id);
            }
					},
				error: (err: string) => {
					ts.msg.errorMessage('', err);
				}
			});
		});
  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts._salesService.getSaleId(id)
		.subscribe({
			next: (resp) => {
				ts.sale_id	= id;
				frm.get("invoice_date").setValue(resp[0].invoice_date)     ;
        frm.get("expiration_date").setValue(resp[0].expiration_date)  ;
        frm.get("invoice_type_id").setValue(resp[0].invoice_type_id)  ;
        frm.get("currency_id").setValue(resp[0].currency_id)      ;
        frm.get("customer_id").setValue(resp[0].customer_id ?? '0')      ;
        frm.get("product_id").setValue('0')       ;
        frm.get("discount").setValue(resp[0].discount)         ;
        frm.get("cash").setValue(resp[0].cash)             ;
        frm.get("payment_change").setValue(resp[0].payment_change)   ;
        frm.get("vat").setValue(resp[0].tax_value)              ;
        frm.get("subtotal").setValue(resp[0].subtotal)         ;
        frm.get("total").setValue(resp[0].total)            ;
        frm.get("means_payment_id").setValue(resp[0].means_payment_id) ;
        frm.get("payment_method_id").setValue(resp[0].payment_method_id);
        frm.get("time_limit_id").setValue(resp[0].time_limit_id)    ;
				// ts.getDeatailId(id);
				// ts.onRefresh();
			}
		});
  }

	getDeatailId(id: number) {
		const ts        = this;
		const grid			= ts.myDataTable;
		ts.showSpinner('Cargando detalle de la factura.');
		ts._salesService.getSaleDetail(id)
			.subscribe({
				next: (resp) => {
          console.log(resp);
					resp.map((ele, i) => {
						let item : any = {};
						item								= ele;
						item.detail_id			= ele.id;
						item.id							= ele.product_id;
						grid.addrow(null, item, i);
						setTimeout(() => {
							ts.onLineTotal(item, i);
						},5);
					});
				},
				error: (err: string )  => {
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			})
	}

	onCreateGrid() {
		const ts	= this;

		ts.taxRatesSource = {
			datatype: 'array',
			datafields: [
					{ name: 'id', type: 'number' },
					{ name: 'account_id', type: 'number' },
					{ name: 'tax_gruop_id', type: 'number' },
					{ name: 'name_taxe', type: 'string' },
					{ name: 'rate_abbre', type: 'string' },
					{ name: 'rate_name', type: 'string' },
					{ name: 'account_name', type: 'string' },
					{ name: 'is_exempt', type: 'number' },
					{ name: 'decimal_rate', type: 'number' },
					{ name: 'rate_value', type: 'number' },
			],
			localdata: ts.tax_rates,
		};

		ts.taxRatesAdapter = new jqx.dataAdapter(ts.taxRatesSource, { autoBind: true });


		ts.source = {
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
					// { name: 'tax_sales', type : 'number'},
					{ name: 'tax_amount', type : 'number'},
					{ name: 'tax_bill', type : 'number'},
					{ name: 'tax_bill_rate', type : 'number'},
					{ name: 'tax_sale_rate', type : 'number'},
					{ name: 'stock_min', type : 'number'},
					{ name: 'stock_max', type : 'number'},
					{ name: 'sale_id', type : 'number'},
					{ name: 'tax_sales_id', type : 'number'},
					{ name: 'tax_sales', value: 'tax_sales_id', values: { source: ts.taxRatesAdapter.records, value: 'id', name: 'rate_abbre' } },
					{ name: 'brand_id', type :' number'},
					{ name: 'stock', type :' number'},
					{ name: 'category_id', type :' number'},
					{ name: 'product_unit_id', type :' number'},
					{ name: 'factor', type :' number'},
					{ name: 'sub_category_id', type :' number'},
					{ name: 'percentage_gain', type : 'number'},
					{ name: 'tax_bill_id', type : 'number'},
					{ name: 'decimal_rate', type : 'number'},
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

		ts.dataAdapter	= new jqx.dataAdapter(ts.source);

		ts.columns =
		[
			{ text: 'Detalle', dataField: 'product_name', minWidth: 200, align: 'center', cellsAlign: 'center', editable: false },
			{ text: 'Cant', dataField: 'quantity', width: 60, align: 'center', cellsAlign: 'right' },
			{ text: 'U.M', dataField: 'abbre_unit', minWidth: 40, width: 40, align: 'center', cellsAlign: 'center', editable: false },
			{ text: 'Precio', dataField: 'sale_price', width: 100, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
			// { text: 'IVA', editable: false, dataField: 'tax_sales', width: 50, align: 'center', cellsAlign: 'right' },
			{
				text: 'IVA', width: 50, align: 'center', datafield: 'tax_sales_id', displayfield: 'tax_sales', columntype: 'combobox',
				createeditor: (row: number, value: any, editor: any): void => {
						editor.jqxComboBox(
							{
								source				: ts.taxRatesAdapter,
								displayMember	: 'rate_abbre',
								valueMember		: 'id'
							}
						);
				},
				// update the editor's value before saving it.
				cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
					// return the old value, if the new value is empty.
					if (newvalue == '') return oldvalue;
					setTimeout(() => {
						this.onLineTotal(this.myDataTable.getrowdata(row), row);
					}, 50);
				}
			},
			{ text: 'Vr. IVA', editable: false, dataField: 'tax_amount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
			{ text: 'Descuento', dataField: 'discount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
			// { text: 'Motivo Dtco', dataField: 'reason', width: 150, align: 'right', cellsAlign: 'right' },
			{ text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2', editable: false },
		];

		const settings = {
      // width: 850,
      source:  ts.dataAdapter,
      columnsresize: true,
      // autoheight: true,
      // sortable: true,
      // filterable: true,
      // showfilterrow: false,
      editable: true,
      enabletooltips: true,
      altrows: true,
      // virtualmode: true,
      autoshowloadelement: true,
      // pageable: true,
      // pagesizeoptions: ['5', '10', '15', '20', '30', '50', '100'],
      // selectionmode: 'multiplecellsadvanced',
      theme: ts.theme,
      columns:  ts.columns
    };
		ts.myDataTable.createComponent(settings);

		ts.onRefresh();
	}


	/**
	 * Refresca la lista de productos
	 */
	onRefresh() {
		const ts        = this;
    ts.onSearchExecute();
	}

  onCancel(){
    this.myDataTable.clear();
    this.onSum();
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

  onSearchExecute(query: string = '', type: number = 1) {
		const ts		= this;
		const doc		= ts.resolution.find(d => d.id === ts.customForm.get('invoice_type_id').value);
		const point_of_sale_id = doc.point_of_sale_id;
		ts.showSpinner('Procesando petición...');
		ts.itemsSer.getSalesProducts({point_of_sale_id, query_search: query, type, start: 0, limit: 0})
			.subscribe({
				next: (resp) => {
					ts.items				= resp;
					ts.itemsResult	= resp;
					ts.hideSpinner();
				},
				error: (err: string ) => {
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			});
	}

  onEditInvoice(ele: Sales) {
    this.goRoute(`sales/check-in/edit/${ele.id}`);
  }

  onClearForm() {
    const ts    = this;
    const frm   = ts.customForm;
    frm.get("invoice_date").setValue(new Date().toISOString().split('T')[0]);
    frm.get("expiration_date").setValue(new Date().toISOString().split('T')[0]);
    frm.get("customer_id").setValue('0');
    frm.get("product_id").setValue('0');
    frm.get("discount").setValue(0);
    frm.get("cash").setValue(0);
    frm.get("payment_change").setValue(0);
    frm.get("vat").setValue(0);
    frm.get("subtotal").setValue(0);
    frm.get("total").setValue(0);
    frm.get("payment_method_id").setValue(1);
    frm.get("time_limit_id").setValue(1);

    frm.get('means_payment_id').setValue(ts.meansPayment[0].id);
    const nal = ts.currency.find( ele => ele.national_currency == 1 );
    if(nal) {
      frm.get('currency_id').setValue(nal.id);
    }else{
      frm.get('currency_id').setValue(ts.currency[0].id);
    }
  }

  onDelete(){
		const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getrowdata(ts.rowIndex);
		const lang			= ts.translate;
		if(ts.sale_id	> 0) {
			const detail_id	= row.detail_id;
			if(detail_id > 0) {
				Swal.fire({
					title : lang.instant('titleMessages.delete'),
					text  : lang.instant('bodyMessages.delete'),
					icon  : 'question',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: lang.instant('buttons.yes'),
					cancelButtonText: lang.instant('buttons.not')
				}).then((result) => {
					if (result.value) {
						ts.showSpinner();
						ts.api.delete(`/delete/detail/delete/${detail_id}`)
						.subscribe({
							next: () => {
								ts.hideSpinner();
								super.onDelete();
							},
							error: (err: string) => {
								ts.hideSpinner();
								ts.msg.errorMessage(lang.instant('general.error'), err);
							}
						});
					}
				});
			}else {
				super.onDelete();
			}
		}else {
			super.onDelete();
		}
	}
}
