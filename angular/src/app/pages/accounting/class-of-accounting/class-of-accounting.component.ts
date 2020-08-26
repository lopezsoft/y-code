import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-class-of-accounting',
  templateUrl: './../../global/global-grid.component.html',
})
export class ClassOfAccountingComponent extends JqxCustomGridComponent implements AfterViewInit {
  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Clase de cuentas';

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
      create  : '/accounting/clasofaccounts/create',
      read    : '/accounting/clasofaccounts/read',
      update  : '/accounting/clasofaccounts/update/',
      delete  : '/accounting/clasofaccounts/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'name', type: 'string' },
      { name: 'number', type: 'number' },
      { name: 'state', type: 'number' },
      { name: 'id', type: 'number' }
    ];

    ts.sourceColumns =
    [
      { text: 'Nombre', align: 'center', datafield: 'name', minWidth: 100},
      { text: 'Número', datafield: 'number', align: 'center', cellsalign: 'right', width: 65 },
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    const lang  = this.translate;
    super.createData();
    ts.goRoute('pages/accounting/class/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/accounting/class/edit/${data.id}`);
  }

}
