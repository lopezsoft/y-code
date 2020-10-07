import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import {
  ProvidersComponent,
  ProviderFormComponent,
 } from './index';

const routes: Routes = [{
  path      : '',
  component : ShoppingComponent,
  children: [
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
