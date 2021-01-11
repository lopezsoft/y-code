import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from '../../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from '../../../utils';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-wineries',
  templateUrl: './../../global/global-grid.component.html',
})
export class WineriesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Bodegas';

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
      create: '/companies/wineries/create',
      read: '/companies/wineries/read',
      update: '/companies/wineries/update/',
      delete: '/companies/wineries/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.title  = lang.instant('wineries.title');
    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'branch_id', type: 'number' },
      { name: 'branch_name', type: 'string' },
      { name: 'winery_name', type: 'string' },
      { name: 'department_name', type: 'string' },
      { name: 'date_time', type: 'date' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: lang.instant('wineries.name') || 'Nombre de la bodega', align: 'center', datafield: 'winery_name' },
        { text: lang.instant('wineries.branch') || 'Sucursal', align: 'center', datafield: 'branch_name' },
        { text: lang.instant('wineries.department') || 'Departamento', align: 'center', datafield: 'department_name' },
      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    super.createData();
    ts.goRoute('pages/companies/wineries/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/companies/wineries/edit/${data.id}`);
  }

}
