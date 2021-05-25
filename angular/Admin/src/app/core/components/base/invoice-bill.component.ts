import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { ViewChild, AfterViewInit, ElementRef, OnInit, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import Swal from 'sweetalert2';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

// Services

import { ApiServerService, MessagesService } from './../../../utils';
import { ItemsService } from './../../../services/products/index';
import { CurrencySys, Persons, TimeLimits, PaymentMethods, MeansPayment, TaxRates, Resolutions } from './../../../models/general-model';
import { Items } from './../../../models/products-model';
import { FormComponent } from './../../../core/components/forms';
import { BranchOffice } from './../../../models/companies-model';
import { Sales } from 'src/app/models/reports-model';
import { ReportsService } from 'src/app/services/global';

@Injectable()
export class InvoiceBillComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('myDataTable', { static: false } ) myDataTable: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('cashele') cashele: ElementRef;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('searchbar2') searchbar2: ElementRef;
  @ViewChild('searchbar3') searchbar3: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;

  title = 'Productos/Servicios';
  // aDocuments			: Resolutions[]= [];
  customers				: Persons[]= [];
  currency				: CurrencySys[] = [];
  items						: Items[] = [];
  itemsResult			: Items[] = [];
  lines						: Items[] = [];
	resolution			: Resolutions[]= [];
  timeLimits			: TimeLimits[] = [];
  paymentMethods	: PaymentMethods[] = [];
  meansPayment		: MeansPayment[] = [];
  points_of_sale	: BranchOffice[] = [];
	tax_rates				: TaxRates[] = [];
  selectedRow 		= false;
  isCounted   		= true;
  rowIndex    		= -1;
  pathfile    		= "";
  modal       		: NgbModalRef;
  source					: any = {};
	
  taxRatesSource	: any = {};

  dataAdapter			: any;
  taxRatesAdapter	: any;

  columns					: any[];

  theme 					= 'bootstrap';

  source2					: any = {};

  dataAdapter2		: any;
  columns2				: any[];

  constructor(
    public fb: FormBuilder,
    public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute,
    public spinner: NgxSpinnerService,
    public modalService: NgbModal,
    public itemsSer: ItemsService,
		public reporstSer: ReportsService,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
	
  ngAfterViewInit(): void {
		super.ngAfterViewInit();
		const ts  	= this;
		ts.showSpinner();
  }
	

	onCreateGrid() {
		// implements
	}

  onChanegCustomer(e: number) {
    console.log(e);
  }
	/**
	 * Agrega el ITEM seleccionado por el usuario a la venta
	 * @param i Item Seleccionado
	 */
  onClickItem(i: Items){
    const ts  = this;
    let line  = i;
    let grid  = ts.myDataTable;

    const rows: Items[] = grid.getrows();
    if(rows.length > 0) {
      let index     = -1;
      const filter  =  rows.find((item, i) => {
        index = i;
        return (item.id === line.id && item.product_unit_id === line.product_unit_id);
      });
      if( filter) {
        let quantity = filter.quantity + 1;
        grid.setcellvalue(index, 'quantity', quantity);
        grid.clearselection();
        grid.selectrow(index);
        ts.onLineTotal(filter, index);
      }else{
        line.discount = 0;
        line.total    = 0;
        line.quantity = 1;
        grid.addrow(null, line, 'last');
        grid.clearselection();
        grid.selectrow(rows.length -1 );
        ts.onLineTotal(line, rows.length -1);
      }
    }else{
      line.discount = 0;
      line.total    = 0;
      line.quantity = 1;
      grid.addrow(null, line, 'last');
      grid.clearselection();
      grid.selectrow(rows.length - 1);
      ts.onLineTotal(line, 0);
    }
  }

  onRowSelect(event: any): void {
    this.selectedRow = true;
    this.rowIndex = event.args.rowindex;
  };
  onRowUnselect(event: any): void {
    this.selectedRow = false;
    this.rowIndex = -1;
  };

  onCellEndEdit(e: any){
    if(e.args.dataField != "reason"){
      if(e.args.displayValue == ""){
        this.myDataTable.setcellvalue(e.args.index, e.args.dataField, 0);
      }
      const row: Items = e.args.row;
      this.onLineTotal(row, e.args.index);
    }
  }

	onCelSelect(event: any): void {
		console.log(event.args);
	}

	/**
	 * Limpia la lista de los productos
	 */
  onClearFilter(){
    const ts = this;
		if(ts.searchbar) {
			ts.searchbar.nativeElement.value 	= '';
			ts.searchbar.nativeElement.focus();
		}
		if(ts.searchbar2){ ts.searchbar2.nativeElement.value = ''};
		if(ts.searchbar3){ 
			ts.searchbar3.nativeElement.value = '';
		}
    ts.itemsResult = ts.items;
		ts.onRefresh();
  }
	
	/**
	 * Refresca la lista de productos
	 */
	onRefresh(query: string = "") {
		// implements
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
	
	onSearchExecute(query: string = '', type: number = 1) {
		const ts		= this;
		const doc		= ts.resolution.find(d => d.id === ts.customForm.get('invoice_type_id').value);
		const point_of_sale_id = doc.point_of_sale_id;
		ts.showSpinner('Procesando petición...');
		ts.itemsSer.getSalesProducts({point_of_sale_id, query_search: query, type, start: 0, limit: 60})
			.subscribe({
				next: (resp) => {
					ts.items				= resp;
					ts.itemsResult	= resp;
					ts.hideSpinner(); 
				},
				error: (err: string ) => {
					console.log(err);
					ts.hideSpinner();
					ts.msg.errorMessage('', err);
				}
			});				
	}

  onAdd() {
    const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getrowdata(ts.rowIndex);
    if( ts.rowIndex >= 0 && row){
      const quantity  = parseFloat(row.quantity.toString()) + 1;
      grid.setcellvalue(ts.rowIndex, 'quantity', quantity);
      ts.onLineTotal(row, ts.rowIndex);
    }else{
      ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
    }
  }

  onDelete() {
    const ts      = this;
    let grid      = ts.myDataTable;
    if( ts.rowIndex >= 0){
      grid.deleterow(ts.rowIndex);
      ts.msg.toastMessage('Quitar cantidad', 'Se ha quitado una linea.');
      ts.onSum();
    }
  }

  onMinus() {
    const ts        = this;
    let grid        = ts.myDataTable;
    let row: Items  = grid.getrowdata(ts.rowIndex);
    if( ts.rowIndex < 0 && !row){
      ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
      return
    }
    const quantity  = parseFloat(row.quantity.toString()) - 1;
    if(quantity <= 0){
      ts.msg.toastMessage('Quitar cantidad', 'No se puede dejar la cantidad en cero.', 3);
      return
    }
    grid.setcellvalue(ts.rowIndex, 'quantity', quantity);
    ts.onLineTotal(row, ts.rowIndex);
  }

  onCancel(){
    this.myDataTable.clear();
    this.onSum();
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
    const unitCost  = parseFloat(ele.sale_price.toString());
    const quantity  = parseFloat(ele.quantity.toString());
    let total     	= ( unitCost * quantity ) - discount;
    let tax_value 	= total - (total / tax);
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
        const subt= (ele.quantity * ele.sale_price);
        discount  += parseFloat(ele.discount.toString());
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
    const ts  	= this;
    let frm   	= ts.customForm;
    let sDate 	= frm.get('invoice_date').value;
    let adate   = new Date(sDate);
    let select  = ts.timeLimits.find(ele => ele.id === frm.get('time_limit_id').value);
    if(select){
      let days  = select.months * select.term_value;
      adate.setDate(adate.getDate() + days);
      let dateStr = adate.toISOString().split('T')[0];
      frm.get('expiration_date').setValue(dateStr);
    }
  }

  getWidth() : any {
		return '100%';
  }

  onViewDocs(content: any){
    if(this.cashele) {
      this.cashele.nativeElement.focus();
    }
    this.modal = this.modalService.open(content, {windowClass: 'fullscreen-modal', backdrop: false});
  }

  onCreateProduct() {
    localStorage.setItem('oldRoute', this.router.url);
    this.goRoute('products/items/create');
  }
	
	/**
   * Genera informe de ventas
   */
	 onReport(content: any) {
    const ts    = this;
    const frm   = ts.modalForm;
    const values= frm.getRawValue();
    ts.showSpinner('Generando informe de ventas');
    ts.reporstSer.getSalesReport({
      initDate  : values.date_from,
      finalDate : values.date_up,
      typeId    : values.invoice_type_id,
      typeReport: 1, // Tamaño Carta
    }).subscribe({
			next: (resp) => {
				ts.hideSpinner();
				let path    = `${ts.api.getAppUrl()}${resp.pathFile}`;
				ts.pathfile = path;
				ts.onViewDocs(content);
			},
			error: (err) => {
				ts.hideSpinner();
				console.log(err);
			}
		});
  }

  /** Anula o activa una factura */
  onCancelInvoice(ele: Sales){
    const ts = this;
    const lang  = ts.translate;
    if(ele.invoice_type_id == 4 || ele.invoice_type_id == 5) {
      ts.msg.toastMessage('', 'No se puede anular una nota contable.',2);
      return false;
    }

    if(ele.active == 1){
      Swal.fire({
        title : 'Anular factura',
        text  : '¿Seguro que desea anular el documento?',
        icon  : 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: lang.instant('buttons.yes'),
        cancelButtonText: lang.instant('buttons.not')
      }).then((result) => {
        if (result.value) {
          ts.showSpinner('Procesando petición.');
          ts.api.post(`/sales/cancel/${ele.id}`)
          .subscribe({
						next: () => {
							ts.hideSpinner();
							ts.onSearch();
							ts.msg.toastMessage('', 'El documento se ha anulado.');
						}, 
						error: (err: string) => {
							ts.msg.errorMessage('', err);
						}
					});
          }
      });
    }else{
      Swal.fire({
        title : 'Activar factura anulada.',
        text  : '¿Seguro que desea activar el documento anulado?',
        icon  : 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: lang.instant('buttons.yes'),
        cancelButtonText: lang.instant('buttons.not')
      }).then((result) => {
        if (result.value) {
          ts.showSpinner('Procesando petición.');
          ts.api.post(`/sales/activate/${ele.id}`)
          .subscribe({
						next: () => {
							ts.hideSpinner();
							ts.onSearch();
							ts.msg.toastMessage('', 'El documento se ha activado.');
						}, 
						error: (err: string) => {
							ts.msg.errorMessage('', err);
						}
					});
        }
      });
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
    }).subscribe({
			next: (resp) => {
				ts.hideSpinner();
				this.source2.localdata = resp;
				this.customGrid.updatebounddata('cells');
			},
			error: (err: string) => {
				ts.hideSpinner();
				ts.msg.errorMessage('', err);
			}
		});
  }

	cellClick(event: any, content: any): void
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
          .subscribe({
						next: ( resp ) => {
							let path    = `${ts.api.getAppUrl()}${resp.pathFile}`;
							ts.pathfile = path;
							ts.hideSpinner();
							ts.onSearch();
							ts.onViewDocs(content);
						},
						error:  (err: string) =>{ 
							ts.hideSpinner();
							ts.msg.errorMessage('', err);
						}
					});
      }
    }else if (data.datafield === '#send_#'){
      // ts.sendDocument(row);
    }else if (data.datafield === '#mail_#'){
      ts.showSpinner('Enviando correo al cliente...');
      ts.reporstSer.onSendMail(row)
        .subscribe({next: ()=> ts.hideSpinner(), error: ()=> ts.hideSpinner()});
    }else if(data.datafield === '#cancel_#') {
      ts.onCancelInvoice(row);
    }
  }

	
	/**
	 * Guarda el documento
	 * @param content 
	 * @returns void
	 */
	 onSave(content: any){
    const ts  = this;
    let frm   = ts.customForm;
    let grid  = ts.myDataTable;
    const rows: Items[]  = grid.getrows();
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

    if(frm.invalid){
      ts.msg.toastMessage('','El formulario contiene campos sin llenar.',4);
      return;
    }

    const lines_detail   = rows;
		const doc		= ts.resolution.find(d => d.id === frm.get('invoice_type_id').value);
		const point_of_sale_id = doc.point_of_sale_id;
    let values  = frm.getRawValue();

    values.lines  					= lines_detail;
		values.point_of_sale_id	= point_of_sale_id;

    let data  = {
      records: JSON.stringify(values)
    };
    ts.showSpinner('Guardando el documento.');
    ts.modal.close();
    ts.api.post('/sales/create', data)
			.subscribe({
				next: (resp) => {
					const ts  = this;
					ts.hideSpinner();
					if( resp.success) {
						ts.msg.toastMessage('', resp.message);
						ts.myDataTable.clear();
						ts.onSum();
						let path    = `${ts.api.getAppUrl()}${resp.report.pathFile}`;
						ts.pathfile =  path;
						ts.onViewDocs(content);
					}else{
						ts.msg.toastMessage('', resp.message, 4);
					}
				},
				error: (err: string)  => {
					ts.msg.errorMessage('', err);
					ts.hideSpinner();
				}
			});
  }
}
