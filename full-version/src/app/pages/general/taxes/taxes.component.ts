import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from './../../../core/data/custom-grid/jqx-custom-grid.component';
import { MessagesService, ApiServerService } from './../../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-taxes',
  templateUrl: './../../global/global-grid.component.html'
})
export class TaxesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{
  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

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
    this.title = this.translate.instant('taxes.title');
  }

  ngAfterViewInit(): void {
    this.changeLanguage(this.activeLang);
    this.title = this.translate.instant('taxes.title');
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/general/taxes/create',
      read  : '/general/taxes/read',
      update: '/general/taxes/update/',
      delete: '/general/taxes/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'name_taxe', type: 'number' },
      { name: 'description', type: 'string' },
      { name: 'state', type: 'number' },
      { name: 'is_vat', type: 'bool' },
    ];

    ts.sourceColumns =
      [
        { text: lang.instant('taxes.name'), align: 'center', datafield: 'name_taxe', minWidth: 120 },
        { text: lang.instant('taxes.description'), align: 'center', datafield: 'description', minWidth: 150 },
        { text: lang.instant('taxes.is_vat'), align: 'center', datafield: 'is_vat', columntype: 'checkbox', threestatecheckbox: true, width: 80 },
      ];

    ts.prepareGrid();
  }

  createData(): void {
    super.createData();
    this.goRoute('pages/general/taxes/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/taxes/edit/${data.id}`);
  }
}
