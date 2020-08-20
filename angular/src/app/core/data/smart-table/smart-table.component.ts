import { Component } from '@angular/core';
import { Router } from '@angular/router';


// Services
import { ApiServerService, MessagesService } from './../../../utils/index';

// Base component
import { BaseComponent } from './../../../core/components/base/base.component';

export class BaseTableComponent extends BaseComponent {

  public settings: {};
  public  aColumns: any;
  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(api, router);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
