import { Component, OnInit } from '@angular/core';
import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';
import { FieldType } from 'angular-slickgrid';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wineries',
  templateUrl: './wineries.component.html',
  styleUrls: ['./wineries.component.scss']
})
export class WineriesComponent extends CustomGridComponent implements OnInit{

  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
  }

  ngOnInit(): void {
    this.defaultPageSize  = 15;
    this.queryUrl         = '/companies/wineries/read';
    this.gridColumns  =  [
      {
        id: 'department_name',
        name: 'Departamento',
        field: 'department_name',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'winery_name',
        name: 'Bodega',
        field: 'winery_name',
        sortable: true,
        type: FieldType.string,
      },
      {
        id: 'status',
        name: 'Estado',
        field: 'status',
        sortable: true,
        type: FieldType.number,
      }
    ];
    this.prepareGrid();
  }
}
