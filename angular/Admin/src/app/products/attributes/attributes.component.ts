import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from './../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './../../global/global-grid.component.html'
})
export class AttributesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Atributos';

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
      create  : '/products/attributes/create',
      read    : '/products/attributes/read',
      update  : '/products/attributes/update/',
      delete  : '/products/attributes/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'attribute_name', type: 'string' },
    ];

    ts.sourceColumns =
    [
      { text: 'Nombre', datafield: 'attribute_name', align: 'center'},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('products/attributes/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`products/attributes/edit/${data.id}`);
  }
}
