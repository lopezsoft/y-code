import { Component, OnInit } from '@angular/core';
import {
  FieldType,
} from 'angular-slickgrid';

import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';

// Services

import { ApiServerService, MessagesService } from 'src/app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting-groups',
  templateUrl: './accounting-groups.component.html',
  styleUrls: ['./accounting-groups.component.scss']
})
export class AccountingGroupsComponent extends CustomGridComponent implements OnInit {

  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
  }

  ngOnInit(): void {
    this.defaultPageSize  = 15;
    this.queryUrl         = '/accounting/accountinggroups/read';
    this.gridColumns  =  [{
      id: 'accounting_group_name', name: 'Nombre', field: 'accounting_group_name', sortable: true, type: FieldType.string,
    },
    {
      id: 'number', name: 'Número', field: 'number', sortable: true, type: FieldType.number, maxWidth: 120
    }];
    this.prepareGrid();
  }

}
