import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from './../../../core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from './../../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resolutions',
  templateUrl: './../../global/global-grid.component.html'
})
export class ResolutionsComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', { static: false }) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Numeraciones de facturación.';

  constructor(public msg: MessagesService,
    public api: ApiServerService,
    public router: Router,
    public translate: TranslateService,
    public aRouter: ActivatedRoute
  ) {
    super(msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    const lang= ts.translate;
    ts.crudApi = {
      create: '/general/resolutions/create',
      read:   '/general/resolutions/read',
      update: '/general/resolutions/update/',
      delete: '/general/resolutions/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'resolution_number', type: 'string' },
      { name: 'prefix', type: 'string' },
      { name: 'plural_name', type: 'string' },
      { name: 'range_from', type: 'string' },
      { name: 'range_up', type: 'string' },
      { name: 'branch_name', type: 'string' },
      { name: 'voucher_name', type: 'string' },
      { name: 'initial_number', type: 'number' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text:  'Punto de venta', align: 'center', datafield: 'branch_name' },
        { text:  'Documento', align: 'center', datafield: 'voucher_name' },
        { text:  'Nº. Resolución', align: 'center', datafield: 'resolution_number', width: 120, cellsalign: 'right' },
        { text:  'Prefijo', align: 'center', datafield: 'prefix',width: 110 },
        { text:  'Iniciar desde', align: 'center', datafield: 'initial_number', width: 110, cellsalign: 'right' },
        { text:  'Rango desde', align: 'center', datafield: 'range_from', width: 110, cellsalign: 'right' },
        { text:  'Rango hasta', align: 'center', datafield: 'range_up', width: 110, cellsalign: 'right'},
      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('pages/general/resolutions/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/resolutions/edit/${data.id}`);
  }
}
