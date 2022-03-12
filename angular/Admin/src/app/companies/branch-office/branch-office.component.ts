import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from '../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from '../../utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-branch-office',
  templateUrl: './../../global/global-grid.component.html',
})
export class BranchOfficeComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit {

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Sucursales';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute
  ) {
    super(msg, api, router, translate, aRouter);
  }


  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/companies/branchoffice/create',
      read: '/companies/branchoffice/read',
      update: '/companies/branchoffice/update/',
      delete: '/companies/branchoffice/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'currency_id', type: 'number' },
      { name: 'country_id', type: 'number' },
      { name: 'postal_code', type: 'string' },
      { name: 'branch_name', type: 'string' },
      { name: 'address', type: 'string' },
      { name: 'address2', type: 'string' },
      { name: 'currencyname', type: 'string' },
      { name: 'country_name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'mobile', type: 'string' },
      { name: 'phone', type: 'string' },
      { name: 'web', type: 'string' },
      { name: 'is_point_of_sale', type: 'bool' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: lang.instant('branchs.name'), align: 'center', datafield: 'branch_name', minWidth: 150 },
        { text: lang.instant('general.currency'), align: 'center', datafield: 'currencyname', minWidth: 100, width: 150 },
        { text: lang.instant('general.country'), align: 'center', datafield: 'country_name', minWidth: 100 },
        { text: lang.instant('branchs.address'), align: 'center', datafield: 'address', minWidth: 100 },
        { text: lang.instant('branchs.isPointOfSale'), align: 'center', datafield: 'is_point_of_sale', columntype: 'checkbox',
        threestatecheckbox: true, width: 110 }
      ];

    this.prepareGrid();
    ts.title  = lang.instant('branchs.title');
  }

  createData(): void {
    const ts = this;
    super.createData();
    ts.goRoute('companies/branchoffice/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`companies/branchoffice/edit/${data.id}`);
  }

}
