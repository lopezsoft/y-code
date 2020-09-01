import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-taxes',
  templateUrl: './../../global/global-grid.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{
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
      create: '/general/taxes/create',
      read: '/general/taxes/read',
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
    ];

    ts.sourceColumns =
      [
        { text: 'Impuesto', align: 'center', datafield: 'name_taxe' },
        { text: 'Descripcion', align: 'center', datafield: 'description' },
      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('pages/general/taxes/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/taxes/edit/${data.id}`);
  }
}
