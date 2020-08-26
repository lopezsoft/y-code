import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-items',
  templateUrl: './../../global/global-grid.component.html',
})
export class ItemsComponent extends JqxCustomGridComponent implements AfterViewInit {

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;
  @ViewChild('myMenu', { static: false }) myMenu: jqxMenuComponent;

  title = 'Productos/Servicios';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(msg, api, router, translate, aRouter);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    ts.crudApi        = {
      create  : '/products/items/create',
      read    : '/products/items/read',
      update  : '/products/items/update/',
      delete  : '/products/items/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'product_class_name', type: 'string' },
      { name: 'sku', type: 'string' },
      { name: 'qr_code', type: 'string' },
      { name: 'product_name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'notes', type: 'string' },
      { name: 'product_description', type: 'string' },
      { name: 'barcode', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'accounting_group_name', type: 'string' },
      { name: 'rate_name', type: 'string' },
      { name: 'internal_code', type: 'string' },
      { name: 'state', type: 'number' },
      { name: 'initial_date', type: 'date' },
      { name: 'accounting_group_id', type: 'number' },
      { name: 'sale_price', type: 'number' },
      { name: 'purchase_cost', type: 'number' },
      { name: 'tax_sales', type: 'number' },
      { name: 'tax_bill', type: 'number' },
      { name: 'stock_min', type: 'number' },
      { name: 'stock_max', type: 'number' },
      { name: 'tax_sales_id', type: 'number' },
      { name: 'percentage_gain', type: 'number' },
      { name: 'tax_bill_id', type: 'number' },
      { name: 'tax_rate_id', type: 'number' },
      { name: 'item_type_id', type: 'number' },
      { name: 'class_id', type: 'number' },
      { name: 'average_cost', type: 'number' },
      { name: 'recipe', type: 'bool' },
      { name: 'perishable', type: 'bool' },
      { name: 'id', type: 'number' }
    ];

    ts.sourceColumns =
    [
      { text: 'Código', datafield: 'internal_code', align: 'center', cellsalign: 'left', width: 120},
      { text: 'Clase', align: 'center', datafield: 'product_class_name', minWidth: 50, width: 120 },
      { text: 'Nombre del item', align: 'center', datafield: 'product_name', minWidth: 250},
      { text: 'Precio', align: 'center', datafield: 'sale_price',  minWidth: 60, width: 150, cellsalign: 'right', cellsformat: 'c2' },
      { text: 'Impuesto', align: 'center', datafield: 'tax_sales',  minWidth: 60, width: 100, cellsalign: 'right' },
      { text: 'Descripción', align: 'center', datafield: 'product_description',  minWidth: 100, width: 250 },
    ];

    this.prepareGrid();
    this.prepareMenu();
  }
}
