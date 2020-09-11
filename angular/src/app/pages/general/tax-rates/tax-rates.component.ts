import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { MessagesService, ApiServerService } from 'src/app/utils';

@Component({
  selector: 'app-taxrates',
  templateUrl: './../../global/global-grid.component.html'
})
export class TaxRatesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Impuestos';

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
    this.title  = this.translate.instant('taxes.rate.title');
  }

  ngAfterViewInit(): void {
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/general/taxerates/create',
      read  : '/general/taxerates/read',
      update: '/general/taxerates/update/',
      delete: '/general/taxerates/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'name_taxe', type: 'number' },
      { name: 'rate_name', type: 'string' },
      { name: 'fecuency_name', type: 'string' },
      { name: 'account_name', type: 'string' },
      { name: 'rate_abbre', type: 'number' },
      { name: 'rate_value', type: 'number' },
      { name: 'decimal_rate', type: 'number' },
      { name: 'is_exempt', type: 'bool' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: lang.instant('taxes.rate.group'), align: 'center', datafield: 'name_taxe', minWidth: 60 },
        { text: lang.instant('taxes.rate.name'), align: 'center', datafield: 'rate_name', width: '40%'},
        { text: lang.instant('taxes.rate.abbre'), align: 'center', datafield: 'rate_abbre', minWidth: 45 },
        { text: lang.instant('taxes.rate.value'), align: 'center', datafield: 'rate_value', minWidth: 45 },
        { text: lang.instant('taxes.rate.decimal'), align: 'center', datafield: 'decimal_rate', minWidth: 45 },
        { text: lang.instant('taxes.rate.is_exempt'), align: 'center', datafield: 'is_exempt', columntype: 'checkbox', threestatecheckbox: true, width: 80 },
        { text: lang.instant('taxes.rate.frecuency'), align: 'center', datafield: 'fecuency_name', minWidth: 80 },
        { text: lang.instant('taxes.rate.accountName'), align: 'center', datafield: 'account_name', minWidth: 120 },
      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    super.createData();
    ts.goRoute('pages/general/taxrates/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/taxrates/edit/${data.id}`);
  }
}
