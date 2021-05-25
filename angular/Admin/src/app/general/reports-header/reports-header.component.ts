import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from './../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reports-header',
  templateUrl: './../../global/global-grid.component.html'
})
export class ReportsHeaderComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title 	= 'Encabezado de reportes';
	appUrl	= '';
  constructor(public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute
  ) {
    super(msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
		this.appUrl	= this.api.getAppUrl();
  }

  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/general/reports/create',
      read:   '/general/reports/read',
      update: '/general/reports/update/',
      delete: '/general/reports/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'branch_name', type: 'string' },
      { name: 'line1', type: 'string' },
      { name: 'line2', type: 'string' },
      { name: 'foot', type: 'string' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: 'Sede/Sucursal', align: 'center', datafield: 'branch_name' },
      ];

    this.prepareGrid();
  }

  createData(): void {
    super.createData();
    this.goRoute('pages/general/reports/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`general/reports/edit/${data.id}`);
  }
}
