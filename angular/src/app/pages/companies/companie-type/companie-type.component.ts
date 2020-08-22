import { Component, OnInit } from '@angular/core';
import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';
import { FieldType } from 'angular-slickgrid';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companie-type',
  templateUrl: './companie-type.component.html',
  styleUrls: ['./companie-type.component.scss']
})
export class CompanieTypeComponent extends CustomGridComponent implements OnInit {
  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
  }

  ngOnInit(): void {
    this.defaultPageSize  = 15;
    this.queryUrl         = '/accounting/accountinggroups/read';
    this.gridColumns  =  [
      {
        id: 'code',
        name: 'Código',
        field: 'code',
        sortable: true,
        type: FieldType.number,
        maxWidth: 150
      },
      {
        id: 'description',
        name: 'Descripción',
        field: 'description',
        sortable: true,
        type: FieldType.string,

      }
    ];

  this.prepareGrid();
  }
}
