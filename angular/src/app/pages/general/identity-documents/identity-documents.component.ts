import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-identity-documents',
  templateUrl: './../../global/global-grid.component.html',
  styleUrls: ['./identity-documents.component.scss']
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
    const ts = this;
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
        { text: 'Código', align: 'center', datafield: 'code' },
        { text: 'Nombre de documento', align: 'center', datafield: 'document_name', width: '40%'},
        { text: 'Abreviatura', align: 'center', datafield: 'abbrev' },

      ];

    this.prepareGrid();
  }

  createData(): void {
    const ts = this;
    const lang = this.translate;
    super.createData();
    ts.goRoute('pages/general/identity-documents/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/general/identity-documents/edit/${data.id}`);
  }
}
