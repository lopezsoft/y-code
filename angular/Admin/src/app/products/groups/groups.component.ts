import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from './../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-groups',
  templateUrl: './../../global/global-grid.component.html',
})
export class GroupsComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit {

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Grupos contables';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(msg, api, router, translate, aRouter);
  }

  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    ts.crudApi        = {
      create  : '/products/groups/create',
      read    : '/products/groups/read',
      update  : '/products/groups/update/',
      delete  : '/products/groups/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'product_class_id', type: 'number' },
      { name: 'name_type', type: 'string' },
      { name: 'product_class_name', type: 'string' },
    ];

    ts.sourceColumns =
    [
      { text: 'Nombre', align: 'center', datafield: 'name_type', minWidth: 150 },
      { text: 'Clase de producto', align: 'center', datafield: 'product_class_name', minWidth: 80},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('products/groups/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`products/groups/edit/${data.id}`);
  }
}
