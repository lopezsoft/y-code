import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from './../../utils';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-departaments',
  templateUrl: './../../global/global-grid.component.html',
})
export class DepartmentsComponent extends JqxCustomGridComponent implements AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Departamentos';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute
  ) {
    super(msg, api, router, translate, aRouter);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/companies/departments/create',
      read: '/companies/departments/read',
      update: '/companies/departments/update/',
      delete: '/companies/departments/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'branch_office_id', type: 'number' },
      { name: 'branch_name', type: 'string' },
      { name: 'department_name', type: 'string' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text:  lang.instant('departments.name')   || 'Nombre del departamento', align: 'center', datafield: 'department_name' },
        { text:  lang.instant('departments.branch') || 'Sucursal', align: 'center', datafield: 'branch_name' },
      ];

    this.prepareGrid();
    ts.title  = lang.instant('departments.title');
  }

  createData(): void {
    const ts = this;
    super.createData();
    ts.goRoute('companies/departments/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`companies/departments/edit/${data.id}`);
  }
}
