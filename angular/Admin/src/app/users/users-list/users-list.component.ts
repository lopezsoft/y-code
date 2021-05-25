import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from './../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: "app-users-list",
  templateUrl: './../../global/global-grid.component.html',
})
export class UsersListComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit {

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Lista de usuarios';

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
      create  : '/users/create',
      read    : '/users/read',
      update  : '/users/update/',
      delete  : '/users/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;
    ts.datafields = [
      { name: 'active', type: 'bool' },
      { name: 'logo', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'first_name', type: 'string' },
      { name: 'last_name', type: 'string' },
      { name: 'user_type', type: 'string' },
      { name: 'type_id', type: 'number' },
      { name: 'id', type: 'number' },
    ];

    ts.sourceColumns =
    [
      { text: 'Nombre', datafield: 'first_name', align: 'center', cellsalign: 'left', minWidth: 200},
      { text: 'Apeillido', datafield: 'last_name', align: 'center', cellsalign: 'left', minWidth: 200},
      { text: 'Usuario', align: 'center', datafield: 'email', minWidth: 150, width: 200 },
      { text: 'Tipo', align: 'center', datafield: 'user_type', minWidth: 100, width: 150 },
      { text: 'Activo', align: 'center', datafield: 'active', minWidth: 50, width: 90, columntype: 'checkbox', threestatecheckbox: true},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('users/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`users/edit/${data.id}`);
  }
}
