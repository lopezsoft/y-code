import { Component, OnInit } from '@angular/core';
import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { Router } from '@angular/router';
import { FieldType } from 'angular-slickgrid';

@Component({
  selector: 'app-departaments',
  templateUrl: './departaments.component.html',
  styleUrls: ['./departaments.component.scss']
})
export class DepartamentsComponent extends CustomGridComponent implements OnInit {
    constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
      super(msg, api, router);
    }

    ngOnInit(): void {
      this.defaultPageSize  = 15;
      this.queryUrl         = '/companies/departaments/read';
      this.gridColumns  =  [
        {
          id: 'branch_name',
          name: 'Sucursal',
          field: 'branch_name',
          sortable: true,
          type: FieldType.number,
        },
        {
          id: 'department_name',
          name: 'Departamento',
          field: 'department_name',
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
