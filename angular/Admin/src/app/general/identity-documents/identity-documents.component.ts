import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from './../../core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from './../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-identitydocuments',
  templateUrl: './../../global/global-grid.component.html'
})
export class IdentityDocumentsComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

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
    const ts  = this;
    const lang= ts.translate;
    ts.title  = lang.instant('identityDocuments.title');
    ts.crudApi = {
      create: '/general/identitydocs/create',
      read  : '/general/identitydocs/read',
      update: '/general/identitydocs/update/',
      delete: '/general/identitydocs/delete/'
    };
    ts.showActions = true;
    ts.showRowNumber = true;
    ts.pagesize = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'code', type: 'number' },
      { name: 'document_name', type: 'string' },
      { name: 'abbrev', type: 'string' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
      [
        { text:  lang.instant('identityDocuments.code') , align: 'center', datafield: 'code', width: 65 },
        { text:  lang.instant('identityDocuments.name') , align: 'center', datafield: 'document_name', minWidth: 120},
        { text:  lang.instant('identityDocuments.abbrev') , align: 'center', datafield: 'abbrev', width: 80 },

      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('general/identitydocuments/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`general/identitydocuments/edit/${data.id}`);
  }
}
