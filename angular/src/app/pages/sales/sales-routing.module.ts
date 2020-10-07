import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import {
  CustomersComponent,
  CustomerFormComponent
} from './index';

const routes: Routes = [{
  path      : '',
  component : SalesComponent,
  children: [
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
