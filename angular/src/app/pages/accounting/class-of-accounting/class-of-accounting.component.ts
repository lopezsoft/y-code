import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { BaseTableComponent } from 'src/app/core/data/smart-table/smart-table.component';
import { ApiServerService, MessagesService } from 'src/app/utils';

@Component({
  selector: 'app-class-of-accounting',
  templateUrl: './class-of-accounting.component.html'
})
export class ClassOfAccountingComponent extends BaseTableComponent implements OnInit {


  constructor( public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(msg, api, router);
   }

  ngOnInit(): void {
  }

}
