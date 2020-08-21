import { Component, OnInit } from '@angular/core';
import {
  FieldType,
} from 'angular-slickgrid';

import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';

// Services

import { ApiServerService, MessagesService } from 'src/app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-of-accounting',
  templateUrl: './class-of-accounting.component.html',
  styleUrls: ['./class-of-accounting.component.scss']
})
export class ClassOfAccountingComponent extends CustomGridComponent implements OnInit {

  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
  }

  ngOnInit(): void {
    this.defaultPageSize  = 10;
    this.queryUrl         = '/accounting/clasofaccounts/read';
    this.gridColumns  =  [{
      id: 'name', name: 'Nombre', field: 'name', sortable: true, type: FieldType.string,
    },
    {
      id: 'number', name: 'Número', field: 'number', sortable: true, type: FieldType.number, maxWidth: 120
    }];
    this.prepareGrid();
  }

}
