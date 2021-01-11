import { NgxSpinnerService } from 'ngx-spinner';
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { JqxCustomGridComponent } from './../../../core/data/custom-grid/jqx-custom-grid.component';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

// Services

import { ApiServerService, MessagesService } from './../../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accounting-groups',
  templateUrl: './../../global/global-grid.component.html',
})
export class AccountingGroupsComponent extends JqxCustomGridComponent implements AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Grupos contables';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
  ) {
    super(msg, api, router, translate, aRouter);
  }

  ngAfterViewInit(): void {
    const ts  = this;

    ts.crudApi        = {
      create  : '/accounting/accountinggroups/create',
      read    : '/accounting/accountinggroups/read',
      update  : '/accounting/accountinggroups/update',
      delete  : '/accounting/accountinggroups/delete'
    };

    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'classofaccount', type: 'string' },
      { name: 'accounting_group_name', type: 'string' },
      { name: 'number', type: 'number' },
      { name: 'state', type: 'number' },
      { name: 'id', type: 'number' }
    ];

    ts.sourceColumns =
    [
      { text: 'Clase', align: 'center', datafield: 'classofaccount', minWidth: 100, width: 250 },
      { text: 'Nombre del grupo', align: 'center', datafield: 'accounting_group_name',  minWidth: 100 },
      { text: 'Número', datafield: 'number', align: 'center', cellsalign: 'right', width: 65 },
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    const lang  = this.translate;
    super.createData();
    ts.goRoute('pages/accounting/groups/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/accounting/groups/edit/${data.id}`);
  }

}
