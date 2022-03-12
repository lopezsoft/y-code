import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  InventoryComponent,
  SalesReportComponent,
} from './index';

import { ReportsComponent } from './reports.component';

const routes: Routes = [{
  path      : '',
  component : ReportsComponent,
  children: [
    {
      path: 'inventory',
      component: InventoryComponent,
    },
    {
      path: 'sales',
      component: SalesReportComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
