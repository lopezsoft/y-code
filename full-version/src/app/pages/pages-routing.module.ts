import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'shopping',
      loadChildren: () => import('./shopping/shopping.module')
        .then(m => m.ShoppingModule),
    },
    {
      path: 'sales',
      loadChildren: () => import('./sales/sales.module')
        .then(m => m.SalesModule),
    },
    {
      path: 'products',
      loadChildren: () => import('./products/products.module')
        .then(m => m.ProductsModule),
    },
    {
      path: 'accounting',
      loadChildren: () => import('./accounting/accounting.module')
        .then(m => m.AccountingModule),
    },
    {
      path: 'companies',
      loadChildren: () => import('./companies/companies.module')
        .then(m => m.CompaniesModule),
    },
    {
      path: 'general',
      loadChildren: () => import('./general/general.module')
        .then(m => m.GeneralModule),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
