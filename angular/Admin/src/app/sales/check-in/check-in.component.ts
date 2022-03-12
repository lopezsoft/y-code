import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { AccountingDocuments } from './../../models/accounting-model';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ReportsService } from './../../services/global/reports.service';
import { DocumentsService } from './../../services/global/documents.service';
import { ApiServerService, MessagesService } from './../../utils';
import { ResolutionsService, PersonsService, CurrencySysService } from './../../services/general/index';
import { ItemsService } from './../../services/products/index';
import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment, TaxRates } from './../../models/general-model';
import { Sales } from './../../models/reports-model';
import { Items } from './../../models/products-model';
import { BranchOfficeService } from './../../services/companies';
import { BranchOffice } from './../../models/companies-model';
import { SalesService } from 'src/app/services/sales/sales.service';
import { InvoiceBillComponent } from 'src/app/core/components/base/invoice-bill.component';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent extends InvoiceBillComponent implements OnInit, AfterViewInit {
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
    { text: 'Pref', dataField: 'prefix', minwidth: 80 },
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
    public resSer: ResolutionsService,
    public perSer: PersonsService,
    public currSer: CurrencySysService,
    public reporstSer: ReportsService,
    public itemsSer: ItemsService,
    public spinner: NgxSpinnerService,
    public documents: DocumentsService,
    public branch: BranchOfficeService,
    public _salesService: SalesService,
    public modalService: NgbModal,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner, modalService, itemsSer, reporstSer);
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
    let   frm   = ts.customForm;
    ts.showSpinner();
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
    const ts  	= this;
		const frm   = ts.customForm;
		ts.resSer.getData({category_id: 1, pos: 1}).subscribe((resp) => {
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
					},
				error: (err: string) => {
					ts.msg.errorMessage('', err);
				}
			});
		});
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
      source:  ts.dataAdapter,
      columnsresize: true,
      editable: true,
      enabletooltips: true,
      altrows: true,
      autoshowloadelement: true,
      theme: ts.theme,
      columns:  ts.columns
    };
		ts.myDataTable.createComponent(settings);

		ts.onRefresh();
	}

  onChanegCustomer(e: number) {
    console.log(e);
  }

	/**
	 * Limpia la lista de los productos
	 */
  onClearFilter(){
    const ts = this;
    ts.searchbar.nativeElement.value 	= '';
    ts.searchbar2.nativeElement.value = '';
    ts.searchbar3.nativeElement.value = '';
    ts.itemsResult = ts.items;
    ts.searchbar.nativeElement.focus();
		ts.onRefresh();
  }

	/**
	 * Refresca la lista de productos
	 */
	onRefresh() {
		const ts        = this;
		if(ts.searchbar.nativeElement.value.length > 0) {
			ts.onSearchExecute(ts.searchbar.nativeElement.value, 1);
		}else if( ts.searchbar2.nativeElement.value.length > 0) {
			ts.onSearchExecute(ts.searchbar2.nativeElement.value, 2);
		}else if(ts.searchbar3.nativeElement.value.length > 0) {
			ts.onSearchExecute(ts.searchbar3.nativeElement.value, 3);
		}else {
			ts.onSearchExecute();
		}

	}

	/**
	 * Refresca el listado de los productos
	 */
	onSearchProducts(query: string, type: number) {
    const ts  = this;
    if( query.length >= 3){
			ts.onSearchExecute(query, type);
    }
  }

  onCancel(){
    this.myDataTable.clear();
    this.onSum();
  }

}
