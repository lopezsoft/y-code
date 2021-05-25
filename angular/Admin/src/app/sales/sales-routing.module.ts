import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import {
  CustomersComponent,
  CustomerFormComponent,
  CheckInComponent,
	InvoiceComponent,
} from './index';

const routes: Routes = [{
  path      : '',
  component : SalesComponent,
  children: [
    {
      path: 'pos',
      component: CheckInComponent,
    },
    {
      path: 'check-in',
      component: InvoiceComponent,
    },
    {
      path: 'customers',
      component: CustomersComponent,
    },
    {
      path: 'customers/create',
      component: CustomerFormComponent
    },
    {
      path: 'customers/edit/:id',
      component: CustomerFormComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
