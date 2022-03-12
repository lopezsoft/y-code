import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import Swal from 'sweetalert2';


import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JsonResponse } from './../../interfaces/json-response.interface';
// Services
import { TaxRatesService } from '././../../services/general/index';
import { ShoppingService } from '././../../services/global/shopping.service';
import { ReportsService } from './../../services/global/reports.service';
import { DocumentsService } from './../../services/global/documents.service';
import { ApiServerService, MessagesService } from './../../utils';
import { PersonsService, CurrencySysService } from './../../services/general';
import { ItemsService } from './../../services/products/index';

import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment, TaxRates } from './../../models/general-model';
import { AccountingDocuments } from './../../models/accounting-model';
import { Items } from './../../models/products-model';
import { BranchOffice, wineries } from '././../../models/companies-model';

import { BranchOfficeService } from './../../services/companies';
import { WineriesService } from '././../../services/companies/wineries.service';
import { InvoiceBillComponent } from 'src/app/core/components/base/invoice-bill.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-create.component.html',
  styleUrls: ['./shopping-create.component.scss']
})
export class ShoppingCreateComponent extends InvoiceBillComponent implements OnInit, AfterViewInit {
	@ViewChild('myDataTable', { static: false } ) myDataTable: jqxGridComponent;
	@ViewChild('searchbar') searchbar: ElementRef;
	@ViewChild('invoiceEle') invoiceEle: ElementRef; 
  title = 'Productos/Servicios';
  aDocuments: AccountingDocuments[]= [];
  ware_house: wineries[] = [];
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
  pointsOfSale: BranchOffice[] = [];
  taxSaleSelect: TaxRates;
  taxBillSelect: TaxRates;
	tax_rates			: TaxRates[] = [];
  selectedRow = false;
  isCounted   = true;
  perishable  = false;
  rowIndex    = -1;
  invoice_id  = 0;
  pathfile    = "";
  itemName    = "";
  modal       : NgbModalRef;
	source				: any = {};
	
  taxRatesSource: any = {};

  dataAdapter				: any;
  taxRatesAdapter		: any;

  columns: any[];
  columngroups: any[];

  theme = 'bootstrap';

	constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    private branchSer: BranchOfficeService,
    private perSer: PersonsService,
    public currSer: CurrencySysService,
    public reporstSer: ReportsService,
    public itemsSer: ItemsService,
    public spinner: NgxSpinnerService,
    public documents: DocumentsService,
    private shopSer: ShoppingService,
    private taxSer: TaxRatesService,
    private docsSer: DocumentsService ,
    private wareHouseServ: WineriesService,
		public modalService: NgbModal,
		

  ) {
    super(fb, msg, api, router, translate, aRouter, spinner, modalService, itemsSer, reporstSer);
		this.customForm = this.fb.group({
			admission_date    : [new Date().toISOString().split('T')[0], [Validators.required]],
			// rfte              : [0],
			invoice_nro       : ['', [Validators.required, Validators.minLength(2)]],
			notes             : [''],
			pay_day           : [new Date().toISOString().split('T')[0], [Validators.required]],
			payment_id        : ['', [Validators.required]],
			warehouse_id      : ['0', [Validators.required]],
			point_of_sale_id  : ['0', [Validators.required]],
			provider_id       : ['0', [Validators.required]],
			// freight           : [0],
			discount          : [0],
			vat               : [0],
			sub_total         : [0, [Validators.required]],
			total             : [0, [Validators.required]],
			// subtotal          : [0, [Validators.required]],
			tax_sale_id       : [0],
			tax_bill_id       : [0],
			product_id        : [0],
			invoice_id        : [0],
		});
  }

  get invalidName(): boolean{
    return this.isInvalid('invoice_nro');
  }
  get invalidBranch(): boolean{
    return this.isInvalid('branch_id');
  }

  ngOnInit(): void {
    const ts    = this;
    ts.showSpinner();

    ts.wareHouseServ.getData({}).subscribe((resp) => {
      ts.ware_house  = resp;
    });

    ts.docsSer.getPaymentMethods({}).subscribe((resp) => {
      ts.payments  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('payment_id').setValue(resp[0].id);
      }
    });

    ts.branchSer.getPointsOfSale({}).subscribe((resp) => {
      ts.pointsOfSale  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
      }
    });

    ts.perSer.getProviders({}).subscribe((resp) =>{
      ts.providers  = resp;
    });

    super.ngOnInit();
  }

  ngAfterViewInit(): void {
		super.ngAfterViewInit();
    const ts  = this;
		const frm	= ts.customForm;
		ts.invoiceEle.nativeElement.focus();
		ts.taxSer.getData({isVat: true}).subscribe((resp) =>{
      ts.taxBill    = resp;
      ts.taxSales   = resp;
      if( resp.length > 0 ){
        frm.get('tax_bill_id').setValue(resp[0].id);
        frm.get('tax_sale_id').setValue(resp[0].id);
        ts.taxBillSelect  = resp[0];
        ts.taxSaleSelect  = resp[0];
				ts.tax_rates			= resp;
				ts.onCreateGrid();
      }
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
					{ name: 'invoice_id', type : 'number'},
					{ name: 'detail_id', type : 'number'},
					{ name: 'total', type : 'number'},
					{ name: 'discount', type : 'number'},
					{ name: 'sale_price', type : 'number'},
					{ name: 'purchase_cost', type : 'number'},
					// { name: 'tax_sales', type : 'number'},
					{ name: 'tax_amount', type : 'number'},
					{ name: 'tax_bill_id', type : 'number'},
					{ name: 'tax_bill', value: 'tax_bill_id', values: { source: ts.taxRatesAdapter.records, value: 'id', name: 'rate_value' }},
					{ name: 'tax_bill_rate', type : 'number'},
					{ name: 'tax_sale_rate', type : 'number'},
					{ name: 'stock_min', type : 'number'},
					{ name: 'stock_max', type : 'number'},
					{ name: 'tax_sales_id', type : 'number'},
					{ name: 'tax_sales', value: 'tax_sales_id', values: { source: ts.taxRatesAdapter.records, value: 'id', name: 'rate_value' } },
					{ name: 'brand_id', type :' number'},
					{ name: 'stock', type :' number'},
					{ name: 'category_id', type :' number'},
					{ name: 'product_unit_id', type :' number'},
					{ name: 'factor', type :' number'},
					{ name: 'sub_category_id', type :' number'},
					{ name: 'gain', type : 'number'},
					{ name: 'percentage_gain', type : 'string'},
					{ name: 'item_type_id', type : 'number'},
					{ name: 'unit_id', type : 'number'},
					{ name: 'base_factor', type : 'number'},
					{ name: 'class_id', type : 'number'},
					{ name: 'average_cost', type : 'number'},
					{ name: 'recipe', type : 'boolean'},
					{ name: 'vat_included', type : 'bool'},
					{ name: 'selling_out_of_inventory', type : 'boolean'},
					{ name: 'perishable', type : 'bool'},
					{ name: 'batch', type : 'string'},
					{ name: 'fabrication_date', type : 'date'},
					{ name: 'expiration_date', type : 'date'},
					{ name: 'id', type : 'number'},
				]
		};
	
		ts.dataAdapter	= new jqx.dataAdapter(ts.source);
	
		ts.columns =
		[
			{
				text: '#', sortable: false, filterable: false, editable: false, align: 'center',
				groupable: false, draggable: false, resizable: false,
				datafield: '', columntype: 'number', width: 40,
				cellsrenderer: (row: number, column: any, value: number): string => {
						return '<div style="margin: 4px; text-align: right">' + (value + 1) + '</div>';
				}
			},
			{ text: 'Detalle', columngroup: 'Shopping', dataField: 'product_name', minWidth: 300, align: 'center', cellsAlign: 'left', editable: false },
			{ text: 'Cant', columngroup: 'Shopping', dataField: 'quantity', width: 55, align: 'center', cellsAlign: 'right' },
			// { text: 'U.M', dataField: 'abbre_unit', minWidth: 40, width: 40, align: 'center', cellsAlign: 'center', editable: false },
			{ text: 'Precio de compra', columngroup: 'Shopping', dataField: 'purchase_cost', width: 120, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
			{
				text: 'IVA', columngroup: 'Shopping', width: 50, align: 'center', datafield: 'tax_sales_id', displayfield: 'tax_sales', columntype: 'combobox',
				createeditor: (row: number, value: any, editor: any): void => {
					editor.jqxComboBox(
						{ 
							source				: ts.taxRatesAdapter, 
							displayMember	: 'rate_value', 
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
			{ text: 'Vr. IVA', columngroup: 'Shopping', editable: false, dataField: 'tax_amount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
			{ text: 'Iva incluido', columngroup: 'Shopping', datafield: 'vat_included', columntype: 'checkbox', width: 90,
				cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
					setTimeout(() => {
						this.onLineTotal(this.myDataTable.getrowdata(row), row);
					}, 50);
				}
			},
			{ text: 'Descuento', columngroup: 'Shopping', dataField: 'discount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
			{ text: 'Total', columngroup: 'Shopping', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2', editable: false },
			{ text: 'Perecedero', columngroup: 'Shopping', datafield: 'perishable', columntype: 'checkbox', width: 80 },
			{ text: 'Lote #', columngroup: 'Shopping', dataField: 'batch', minWidth: 50, align: 'center', cellsAlign: 'left', editable: false },
			{
				text: 'Fecha fabricación', columngroup: 'Shopping', datafield: 'fabrication_date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd',
				validation: (cell: any, value: any): any => {
						let year = value.getFullYear();
						if (year < 2021) {
								return { result: false, message: 'Ship Date should be before 1/1/2021' };
						}
						return true;
				}
			},
			{
				text: 'Fecha expiración', columngroup: 'Shopping', datafield: 'expiration_date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd',
				validation: (cell: any, value: any): any => {
						let year = value.getFullYear();
						if (year < 2021) {
								return { result: false, message: 'Ship Date should be before 1/1/2021' };
						}
						return true;
				}
			},
			{ text: 'Precio de venta', columngroup: 'Sales', dataField: 'sale_price', width: 120, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
			{
				text: 'IVA', columngroup: 'Sales', width: 50, align: 'center', datafield: 'tax_bill_id', displayfield: 'tax_bill', columntype: 'combobox',
				createeditor: (row: number, value: any, editor: any): void => {
					editor.jqxComboBox(
						{ 
							source				: ts.taxRatesAdapter, 
							displayMember	: 'rate_value', 
							valueMember		: 'id' 
						}
					);
				},
				// update the editor's value before saving it.
				cellvaluechanging: (row: number, column: any, columntype: any, oldvalue: any, newvalue: any): any => {
					// return the old value, if the new value is empty.
					if (newvalue == '') return oldvalue;
				}
			},
			{ text: 'Ganancia', columngroup: 'Sales', dataField: 'gain', width: 120, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
			{ text: '% Ganancia', columngroup: 'Sales', dataField: 'percentage_gain', width: 110, align: 'center', cellsAlign: 'right'},
		];

		ts.columngroups = [
        { text: 'Compra', align: 'center', name: 'Shopping' },
        { text: 'Venta', align: 'center', name: 'Sales' }
    ];

		const settings = {
      source							:  ts.dataAdapter,
      columnsresize				: true,
      editable						: true,
      enabletooltips			: true,
      altrows							: true,
      autoshowloadelement	: true,
      theme								: ts.theme,
			// selectionmode	: 'singlecell',
      columns							:  ts.columns,
			columngroups				: ts.columngroups
    };
		ts.myDataTable.createComponent(settings);

		ts.onRefresh();
	}

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.shopSer.getData({uid: id})
		.subscribe({
			next: (resp) => {
				ts.invoice_id	= id;
				frm.get('invoice_nro').setValue(resp[0].invoice_nro);
				frm.get('total').setValue(resp[0].total);
				frm.get('provider_id').setValue(resp[0].provider_id);
				frm.get('admission_date')  .setValue(resp[0].admission_date);
				frm.get('discount')        .setValue(resp[0].discount);
				// frm.get('freight')         .setValue(resp[0].freight);
				// frm.get('rfte')            .setValue(resp[0].rfte);
				frm.get('vat')             .setValue(resp[0].vat);
				frm.get('notes')           .setValue(resp[0].notes);
				frm.get('pay_day')         .setValue(resp[0].pay_day);
				frm.get('payment_id')      .setValue(resp[0].payment_method_id);
				frm.get('warehouse_id')    .setValue(resp[0].warehouse_id ?? '0');
				frm.get('point_of_sale_id').setValue(resp[0].point_of_sale_id ?? '0');
				frm.get('sub_total')       .setValue(resp[0].sub_total);
				ts.getDeatailId(id);
				// ts.onRefresh();
			}
		});
  }

	getDeatailId(id: number) {
		const ts        = this;
		const grid			= ts.myDataTable;
		ts.showSpinner('Cargando detalle de la factura.');
		ts.shopSer.getDetail(id)
			.subscribe({
				next: (resp) => {
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

  /**
   * Actualiza listado de productos
   */
  onRefresh(query: string = ''){
    const ts  = this;
    ts.onSearchExecute(query);
  }
	onSearchExecute(query: string = '', type: number = 1) {
		const ts		= this;
		ts.showSpinner('Procesando petición...');
		ts.itemsSer.getData({query, type, start: 0, limit: 60})
			.subscribe({
				next: (resp) => {
					ts.items				= resp;
					ts.itemsResult	= resp;
					ts.hideSpinner(); 
					ts.msg.toastMessage('', `Se hallaron ${resp.length} resultados.`);
				},
				error: (err: string ) => {
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			});				
	}

	/**
	 * Realiza la suma de una fila del grid
	 * @param ele Item
	 * @param i Número de la fila del gridLines
	 */
	 onLineTotal(ele: Items, i: number) {
    const ts        = this;
    let grid        = ts.myDataTable;
		const taxe			= ts.tax_rates.find(tax => tax.id == ele.tax_sales_id);
    const tax       = parseFloat(taxe.decimal_rate.toString());
    const discount  = parseFloat(ele.discount.toString());
    const unitCost  = parseFloat(ele.purchase_cost.toString());
    const quantity  = parseFloat(ele.quantity.toString());
    let total     = ( unitCost * quantity ) - discount;
    let tax_value = total - (total / tax);
		 /**
     * Cuendo el IVA no está includio en el precio de venta.
     */

		if(!ele.vat_included) {
			if(tax > 1) {
				tax_value   = ( total * tax ) - total;
			}else if (tax < 1){
				tax_value   = total * tax ;
			}
			total       += tax_value;
		}

		tax_value = parseFloat(tax_value.toFixed(2));
		total     = parseFloat(total.toFixed(2));

    grid.setcellvalue(i, 'total', total);
    grid.setcellvalue(i, 'tax_amount', tax_value);
		ts.onSalesData(ele, i);
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
    const rows: Items[] = grid.getrows();
    if(rows.length > 0){
      rows.map((ele, i) => {
        const subt= (ele.quantity * ele.purchase_cost);
        discount  += parseFloat(ele.discount.toString());
        subtotal  += subt;
        total     += ele.total;
        taxTotal  += ele.tax_amount;
      });
    }
	
    frm.get('discount').setValue(discount);
    frm.get('sub_total').setValue(subtotal - taxTotal);
    frm.get('vat').setValue(taxTotal);
    frm.get('total').setValue(total);
  }
  
  /**
   * Calcula los valores de venta
   */
  onSalesData(ele: Items, i: number) {
    const ts        = this;
		const grid      = ts.myDataTable;
    const unit_price= parseFloat(ele.purchase_cost.toString());
    const sale_price= parseFloat(ele.sale_price.toString());
		const taxBill		= ts.tax_rates.find(tax => tax.id == ele.tax_bill_id);
		const taxSale		= ts.tax_rates.find(tax => tax.id == ele.tax_sales_id);
    const vat       = parseFloat(taxBill.decimal_rate.toString());
    const vatSale   = parseFloat(taxSale.decimal_rate.toString());
    const included  = ele.vat_included;
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

    grid.setcellvalue(i, 'gain', gain);
    grid.setcellvalue(i, 'percentage_gain', `${percGain.toFixed(2)} %`);
  }
 
  /**
   * Guarda la factura y el detalle
   */
  onSave(){
    const ts      = this;
    let frm       = ts.customForm;
    let values    = frm.getRawValue();
		const lines		= ts.myDataTable.getrows();

		if(frm.invalid){
			ts.msg.toastMessage('','Hay campos sin llenar.',4);
			return false;
		}

		values.lines			= JSON.stringify(lines);
		ts.showSpinner('Guardando factura');
		if(ts.invoice_id > 0) {
			values.invoice_id	= ts.invoice_id;
			ts.api.put(`/shopping/update/${ts.invoice_id}`, { records : JSON.stringify(values)}).
			subscribe({
				next: (resp: JsonResponse) => {
					ts.hideSpinner();
					if( resp.success) {
						ts.onClose();
					}else{
						ts.msg.errorMessage('', resp.message);
					}
				},
				error: (err: string)  => {
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			});
		}else{
			if(lines.length <= 0){
				ts.hideSpinner();
				ts.msg.toastMessage('','No hay productos en el detalle de la factura.',4);
				return false;
			}


			ts.api.post('/shopping/create', values).
			subscribe({
				next: (resp: JsonResponse) => {
					ts.hideSpinner();
					if( resp.success) {
						ts.onClose();
					}else{
						ts.msg.errorMessage('', resp.message);
					}
				},
				error: (err: string)  => {
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			});
		}
  }

  onClose() {
    this.goRoute(`shopping/invoices`);
  }

	onDelete(){
		const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getrowdata(ts.rowIndex);
		const lang			= ts.translate;
		if(ts.invoice_id	> 0) {
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
						ts.api.delete(`/shopping/detail/delete/${detail_id}`)
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
