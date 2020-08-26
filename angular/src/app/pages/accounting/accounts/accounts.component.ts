import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

// Services

import { ApiServerService, MessagesService } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './../../global/global-grid.component.html',
})
export class AccountsComponent extends JqxCustomGridComponent implements AfterViewInit {

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Catalógo de cuentas';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(msg, api, router, translate, aRouter);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    ts.crudApi        = {
      create  : '/accounting/accounts/create',
      read    : '/accounting/accounts/read',
      update  : '/accounting/accounts/update/',
      delete  : '/accounting/accounts/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'classofaccount', type: 'string' },
      { name: 'account_name', type: 'string' },
      { name: 'currencyname', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'accounting_group_name', type: 'string' },
      { name: 'rate_name', type: 'string' },
      { name: 'account_number', type: 'string' },
      { name: 'state', type: 'number' },
      { name: 'initial_date', type: 'date' },
      { name: 'accounting_group_id', type: 'number' },
      { name: 'currency_id', type: 'number' },
      { name: 'is_subaccount', type: 'bool' },
      { name: 'tax_rate_id', type: 'number' },
      { name: 'id', type: 'number' }
    ];

    ts.sourceColumns =
    [
      { text: 'Categoria', align: 'center', datafield: 'classofaccount', minWidth: 50, width: 120 },
      { text: 'Nombre del grupo', align: 'center', datafield: 'accounting_group_name',  minWidth: 100, width: 120 },
      { text: 'Código', datafield: 'account_number', align: 'center', cellsalign: 'left', width: 75,
        cellsrenderer: (row: number, column: any, value: string): string => {
          const data  = ts.customGrid.getrowdata(row);
          if (data.is_subaccount){
            return value;
          }else{
            return `<p><strong>${value}</strong></p>`;
          }
        },
      },
      { text: 'Nombre de la cuenta', align: 'center', datafield: 'account_name', minWidth: 150 },
      { text: 'Subcuenta', align: 'center', datafield: 'is_subaccount', minWidth: 50, width: 80, columntype: 'checkbox', threestatecheckbox: true,},
      { text: 'Descipción', align: 'center', datafield: 'description', minWidth: 50, width: 150 },
      { text: 'Impuesto', align: 'center', datafield: 'rate_name',  minWidth: 50, width: 120 },
      { text: 'Moneda', align: 'center', datafield: 'currencyname',  minWidth: 50, width: 180 },
    ];

    this.prepareGrid();
  }

  createData(): void {
    super.createData();
    console.log('kkdkdkdk');
  }

  editData(data: any): void {
    console.log(data);
  }
}
