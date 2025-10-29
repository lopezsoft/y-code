import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { JqxCustomGridComponent } from '../../core/data/custom-grid/jqx-custom-grid.component';
import { MessagesService, ApiServerService } from '../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {ExodoGridComponent} from 'exodolibs';

@Component({
  selector: 'app-taxes',
  templateUrl: './../../global/global-grid.component.html'
})
export class TaxesComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit {
  @ViewChild('exodoGrid') exodoGrid: ExodoGridComponent;
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
    const ts  = this;
    ts.crudApi = {
      create: '/crud',
      read  : '/crud',
      update: '/crud/',
      delete: '/crud/',
      params: {
        tbPrefix: 'T001',
      }
    };
    ts.columns = [
      {
        text:  'Nombre',
        dataIndex: 'name_taxe',
        width: '120px',
      },
      {
        text:  'Descripción',
        dataIndex: 'description',
        width: '100%',
      },
      {
        text:  '¿Es IVA?',
        dataIndex: 'is_vat',
        width: '80px',
        align: 'center',
        type: 'boolean',
      },
    ];
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  createData(): void {
    super.createData();
    this.goRoute('general/taxes/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`general/taxes/edit/${data.id}`);
  }
}
