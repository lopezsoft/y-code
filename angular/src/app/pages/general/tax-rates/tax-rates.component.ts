import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tax-rates',
  templateUrl: './../../global/global-grid.component.html',
  styleUrls: ['./tax-rates.component.scss']
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
  }

  ngAfterViewInit(): void {
    const ts = this;
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
      { name: 'rate_abbre', type: 'number' },
      { name: 'rate_value', type: 'number' },
      { name: 'decimal_rate', type: 'number' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text: 'Impuesto', align: 'center', datafield: 'name_taxe' },
        { text: 'Tarifa', align: 'center', datafield: 'rate_name', width: '40%'},
        { text: 'Abreviatura de tasa', align: 'center', datafield: 'rate_abbre' },
        { text: 'Valor tarifa', align: 'center', datafield: 'rate_value' },
        { text: 'Tasa decimal', align: 'center', datafield: 'decimal_rate' },

      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('pages/general/tax-rates/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/tax-rates/edit/${data.id}`);
  }
}
