import { Component, OnInit } from '@angular/core';
import { CustomGridComponent } from 'src/app/core/data/custom-grid/custom-grid.component';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router } from '@angular/router';
import { FieldType } from 'angular-slickgrid';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.scss']
})
export class BranchOfficeComponent extends CustomGridComponent implements OnInit{

  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
  }

  ngOnInit(): void {
    this.defaultPageSize  = 15;
    this.queryUrl         = '/companies/branchoffice/read';
    this.gridColumns  =  [
      {
        id: 'country_name',
        name: 'Pais',
        field: 'country_name',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'name_city',
        name: 'Ciudad',
        field: 'name_city',
        sortable: true,
        type: FieldType.string,
      },
      {
        id: 'CurrencyISO',
        name: 'Moneda',
        field: 'CurrencyISO',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'postal_code',
        name: 'Código postal',
        field: 'postal_code',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'branch_name',
        name: 'Sucursal',
        field: 'branch_name',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'address',
        name: 'Dirección',
        field: 'address',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'location',
        name: 'Ubicación',
        field: 'location',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'email',
        name: 'Email',
        field: 'email',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'mobile',
        name: 'Télefono',
        field: 'mobile',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'phone',
        name: 'Celular',
        field: 'phone',
        sortable: true,
        type: FieldType.number,
      },
      {
        id: 'web',
        name: 'Sitio web',
        field: 'web',
        sortable: true,
        type: FieldType.number,
      },

    ];
    this.prepareGrid();
  }

}
