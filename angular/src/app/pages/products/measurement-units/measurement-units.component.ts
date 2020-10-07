import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';


import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { JqxCustomGridComponent } from 'src/app/core/data/custom-grid/jqx-custom-grid.component';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-measurement-units',
  templateUrl : './../../global/global-grid.component.html'
})
export class MeasurementUnitsComponent extends JqxCustomGridComponent implements OnInit, AfterViewInit{

  @ViewChild('customGrid', {static: false}) customGrid: jqxGridComponent;
  @ViewChild('searchField') searchField: ElementRef;

  title = 'Unidades de medida';

  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(msg, api, router, translate, aRouter);
  }

  ngOnInit(): void {
    this.changeLanguage(this.activeLang);
  }

  ngAfterViewInit(): void {
    const ts  = this;
    ts.crudApi        = {
      create  : '/products/units/create',
      read    : '/products/units/read',
      update  : '/products/units/update/',
      delete  : '/products/units/delete/'
    };
    ts.showActions    = true;
    ts.showRowNumber  = true;
    ts.pagesize       = 10;

    ts.datafields = [
      { name: 'id', type: 'number' },
      { name: 'base_unit_id', type: 'number' },
      { name: 'unit_description', type: 'string' },
      { name: 'unit_name', type: 'string' },
      { name: 'abbre_unit', type: 'string' },
      { name: 'factor', type: 'float' },
      { name: 'state', type: 'number' },
    ];

    ts.sourceColumns =
    [
      { text: 'Unidad base', datafield: 'abbre_unit', align: 'center'},
      { text: 'Nombre de la unidad de medida', datafield: 'unit_description', align: 'center'},
      { text: 'Factor', datafield: 'factor', align: 'center'},
    ];

    this.prepareGrid();
  }

  createData(): void {
    const ts    = this;
    super.createData();
    ts.goRoute('pages/products/units/create');
  }

  editData(data: any): void {
    super.editData(data);
    this.goRoute(`pages/products/units/edit/${data.id}`);
  }

}
