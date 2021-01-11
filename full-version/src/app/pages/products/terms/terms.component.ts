import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from './../../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from './../../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector    : 'app-terms',
  templateUrl : './../../global/global-grid.component.html'
})
export class TermsComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Terminos de atributos';

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
      create  : '/products/terms/create',
      read    : '/products/terms/read',
      update  : '/products/terms/update/',
      delete  : '/products/terms/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'attribute_id', type: 'number' },
      { name: 'term_name', type: 'string' },
      { name: 'term_description', type: 'string' },
      { name: 'attribute_name', type: 'string' },
      { name: 'term_color', type: 'string' },
      { name: 'term_img', type: 'string' },
    ];

    ts.sourceColumns =
    [
      { text: 'Atributo', datafield: 'attribute_name', align: 'center'},
      { text: 'Nombre del termino', datafield: 'term_name', align: 'center'},
      { text: 'Descripción', datafield: 'term_description', align: 'center'},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('pages/products/terms/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/products/terms/edit/${data.id}`);
  }

}
