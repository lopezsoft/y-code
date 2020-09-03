import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   // component: ECommerceComponent,
    // },
    // {
    //   path: 'iot-dashboard',
    //   // component: '',
    // },
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
    },
    {
      path      : '',
      redirectTo: 'dashboard',
      pathMatch : 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
