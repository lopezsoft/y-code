import { ShoppingDetail } from './../../models/shopping-model';
import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import Swal from 'sweetalert2';

// Services
import { ApiServerService, MessagesService } from './../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ShoppingService } from './../../services/global';
import { ErrorResponse, JsonResponse } from './../../interfaces';

import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html'
})
export class InvoicesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('detailGrid', {static: false}) detailGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('myTabs', { static: false }) myTabs: jqxTabsComponent;

  title       = 'Registro de compras';
  invoiceName = '';

  source2: any =
  {
      localdata: [],
      datafields:
      [
        { name : 'active', type : 'boolean'},
        { name : 'admission_date', type : 'string'},
        { name : 'amount', type : 'number'},
        { name : 'barcode', type : 'string'},
        { name : 'batch', type : 'string'},
        { name : 'expiration_date', type : 'string'},
        { name : 'fabrication_date', type : 'string'},
        { name : 'freight', type : 'number'},
        { name : 'id', type : 'number'},
        { name : 'internal_code', type : 'string'},
        { name : 'invoice_id', type : 'number'},
        { name : 'perishable', type : 'boolean'},
        { name : 'product_id', type : 'number'},
        { name : 'product_name', type : 'string'},
        { name : 'sale_price', type : 'number'},
        { name : 'state', type : 'number'},
        { name : 'tax_bill', type : 'number'},
        { name : 'tax_bill_id', type : 'number'},
        { name : 'tax_sale', type : 'number'},
        { name : 'tax_sale_id', type : 'number'},
        { name : 'total_cost', type : 'number'},
        { name : 'unit_cost', type : 'number'},
        { name : 'vat_included', type : 'boolean'},
      ],
      datatype: 'array'
  }

  dataAdapter2: any = new jqx.dataAdapter(this.source2);

  columnsDet =
  [
    // {
    //   columngroup: 'Actions',
    //   text: '', sortable: false, filterable: false, editable: false, align: 'center',
    //   groupable: false, draggable: false, resizable: false,
    //   datafield: '#edit_#', columntype: 'text', width: 32,
    //   cellsrenderer: (row: number, column: any, value: number): string => {
    //       return '<span><i class="fas fa-pen fas-fa-edit fa-cursor"></i></span>';
    //   },
    // },
    {
      columngroup: 'Actions',
      text: '', sortable: false, filterable: false, editable: false, align: 'center',
      groupable: false, draggable: false, resizable: false,
      datafield: '#delete_#', columntype: 'text', width: 32,
      cellsrenderer: (row: number, column: any, value: number): string => {
          return '<span><i class="fas fa-trash-alt fas-fa-delete fa-cursor"></i></span>';
      },
    },
    { text: 'Cantidad', datafield: 'amount', align: 'center', width: 80, cellsalign: 'right'},
    { text: 'Producto', datafield: 'product_name', align: 'center', minWidth: 250},
    { text: 'Precio unitario', datafield: 'unit_cost', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120},
    { text: 'Precio de venta', datafield: 'sale_price', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120},
    { text: 'Total', datafield: 'total_cost', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120},
  ];

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private shopSer: ShoppingService,
            ) {
    super(msg, api, router, translate, aRouter);
  }

  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    ts.crudApi        = {
      create  : '/shopping/create',
      read    : '/shopping/read',
      update  : '/shopping/update/',
      delete  : '/shopping/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'invoice_nro', type: 'string' },
      { name: 'total', type: 'number' },
      { name: 'branch_name', type: 'string' },
      { name: 'full_name', type: 'string' },
      { name: 'winery_name', type: 'string' },
    ];

    ts.sourceColumns =
    [
      {
        columngroup: 'Actions',
        text: '', sortable: false, filterable: false, editable: false, align: 'center',
        groupable: false, draggable: false, resizable: false,
        datafield: '#edit_shopping_#', columntype: 'text', width: 32,
        cellsrenderer: (row: number, column: any, value: number): string => {
            return '<span><i class="fas fa-shopping-cart fas-fa-edit fa-cursor"></i></span>';
        },
      },
      { text: 'Nº. Factura', datafield: 'invoice_nro', align: 'center', minwidth: 80, width: 100},
      { text: 'Proveedor', datafield: 'full_name', align: 'center', minwidth: 100},
      { text: 'Bodega', datafield: 'branch_name', align: 'center', minwidth: 100},
      { text: 'Total', datafield: 'total', align: 'center', cellsalign: 'right', cellsformat: 'c2', minwidth: 100},
    ];
    this.prepareGrid();
  }
  /**
   * Click en una celda del detalle de la factura
   */
  cellDetailClick(event: any) {
    const data  = event.args;
    const row   = this.detailGrid.getrowdata(data.rowindex);
    const ts    = this;
    if (data.datafield === '#edit_#'){
      this.goRoute(`shopping/invoices/detail/edit/${row.id}`);
    }else if (data.datafield === '#delete_#'){
      ts.deleteDetail(row);
    }
  }
  /**
   * Click en una celda de la factura
   */
  cellClick(event: any): void {
    const data = event.args;
    const row  = this.customGrid.getrowdata(data.rowindex);
    const ts    = this;
    ts.invoiceName  = row.invoice_nro;
    if (data.datafield === '#edit_shopping_#'){
      ts.goRoute(`shopping/invoices/create/detail/${row.id}`);
    }else{
      if (data.datafield === '#edit_#'){
        ts.editData(row);
      }else if (data.datafield === '#delete_#'){
        ts.deleteData(row);
      }else{
        ts.refreshDetail(row.id);
      }
    }
  }
  /**
   * Quita un item del detalle de la factura
   */
  deleteDetail(data: ShoppingDetail) {
    const ts    = this;
    const lang  = ts.translate;
    // Implements
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
        ts.api.delete(`/shopping/delete/detail/${data.id}`)
        .subscribe((resp: JsonResponse) => {
          ts.refreshDetail(data.invoice_id);
        }, (err: ErrorResponse) => {
          ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
        });
        }
    });
  }

  /**
   * Refresca los datos del detale de la factura
   */
  refreshDetail(id: number) {
    const ts  = this;
    ts.source2.localdata= [];
    ts.detailGrid.updatebounddata('cells');
    ts.detailGrid.showloadelement();
    ts.shopSer.getDetail(id)
      .subscribe((resp) => {
        ts.source2.localdata = resp;
        ts.detailGrid.updatebounddata('cells');
        ts.detailGrid.hideloadelement();
      }, ()=> ts.detailGrid.hideloadelement());
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('shopping/invoices/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`shopping/invoices/edit/${data.id}`);
  }
}
