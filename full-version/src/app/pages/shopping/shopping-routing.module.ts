import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import {
  ProvidersComponent,
  ProviderFormComponent,
  InvoicesComponent,
  InvoicesFormComponent,
  ShoppingCreateComponent,
  DetailEditComponent,
 } from './index';

const routes: Routes = [{
  path      : '',
  component : ShoppingComponent,
  children: [
    {
      path: 'invoices',
      component: InvoicesComponent,
    },
    {
      path: 'invoices/create',
      component: ShoppingCreateComponent,
    },
    {
      path: 'invoices/edit/:id',
      component: InvoicesFormComponent,
    },
    {
      path: 'invoices/create/detail/:id',
      component: ShoppingCreateComponent,
    },
    {
      path: 'invoices/detail/edit/:id',
      component: DetailEditComponent,
    },
    {
      path: 'providers',
      component: ProvidersComponent,
    },
    {
      path: 'providers/create',
      component: ProviderFormComponent
    },
    {
      path: 'providers/edit/:id',
      component: ProviderFormComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
