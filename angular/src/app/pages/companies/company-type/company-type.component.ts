import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from '../../../core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from '../../../utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-company-type',
  templateUrl: './../../global/global-grid.component.html',
})
export class CompanyTypeComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit {

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Tipos de compañia';

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
    ts.crudApi        = {
      create  : '/companies/companytype/create',
      read    : '/companies/companytype/read',
      update  : '/companies/companytype/update/',
      delete  : '/companies/companytype/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'description', type: 'string' },
      { name: 'code', type: 'number' },
      { name: 'id', type: 'number' }
    ];

    ts.sourceColumns =
    [
      { text: lang.instant('typeOrganization.name') , align: 'center', datafield: 'description'}
    ];

    ts.prepareGrid();
    ts.title  = lang.instant('typeOrganization.title');
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('pages/companies/companytype/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/companies/companytype/edit/${data.id}`);
  }
}
