import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-currency',
  templateUrl: './../../global/global-grid.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Monedas';

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
    const ts = this;
    ts.crudApi = {
      create: '/general/currency/create',
      read:   '/general/currency/read',
      update: '/general/currency/update/',
      delete: '/general/currency/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'CurrencyName', type: 'string' },
      { name: 'CurrencyISO', type: 'string' },
      { name: 'plural_name', type: 'string' },
      { name: 'singular_name', type: 'string' },
      { name: 'denomination', type: 'string' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: 'Moneda', align: 'center', datafield: 'CurrencyName' },
        { text: 'Estandar', align: 'center', datafield: 'CurrencyISO' },
        { text: 'Nombre plural', align: 'center', datafield: 'plural_name' },
        { text: 'Nombre singular', align: 'center', datafield: 'singular_name' },
        { text: 'Denominación', align: 'center', datafield: 'denomination' },
      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('pages/general/currency/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/currency/edit/${data.id}`);
  }
}
