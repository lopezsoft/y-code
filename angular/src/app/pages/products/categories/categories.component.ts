import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-categories',
  templateUrl: './../../global/global-grid.component.html',
})
export class CategoriesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Categorias';

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
      create  : '/products/categories/create',
      read    : '/products/categories/read',
      update  : '/products/categories/update/',
      delete  : '/products/categories/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'category_name', type: 'string' },
      { name: 'parent_name', type: 'string' },
      { name: 'image', type: 'string' },
    ];

    ts.sourceColumns =
    [
      { text: 'Nombre de la categoria', datafield: 'category_name', align: 'center'},
      { text: 'Categoria padre', datafield: 'parent_name', align: 'center'},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('pages/products/categories/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/products/categories/edit/${data.id}`);
  }

}
