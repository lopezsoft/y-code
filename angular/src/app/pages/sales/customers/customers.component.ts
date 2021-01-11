import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customers',
  templateUrl : './../../global/global-grid.component.html'
})
export class CustomersComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Clientes';

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
      create  : '/persons/create',
      read    : '/persons/customers',
      update  : '/persons/update/',
      delete  : '/persons/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'company_name', type: 'string' },
      { name: 'dni', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'full_name', type: 'string' },
    ];

    ts.sourceColumns =
    [
      { text: 'Mostrar nombre como', datafield: 'full_name', align: 'center'},
      { text: 'DNI', datafield: 'dni', align: 'center', minWidth: 100, cellsalign: 'right'},
      { text: 'Empresa', datafield: 'company_name', align: 'center'},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('pages/sales/customers/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/sales/customers/edit/${data.id}`);
  }

}
