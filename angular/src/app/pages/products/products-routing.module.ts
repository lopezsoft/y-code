import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import {
  ItemsComponent,
  ItemsFormComponent,
  AttributesComponent,
  AttributesFormComponent,
  CategoriesComponent,
  CategoriesFormComponent,
  BrandsComponent,
  BrandsFormComponent,
  TermsComponent,
  TermsFormComponent,
 } from './index';

const routes: Routes = [{
  path      : '',
  component : ProductsComponent,
  children: [
    {
      path: 'items',
      component: ItemsComponent,
    },
    {
      path: 'items/create',
      component: ItemsFormComponent
    },
    {
      path: 'items/edit/:id',
      component: ItemsFormComponent
    },
    {
      path: 'categories',
      component: CategoriesComponent
    },
    {
      path: 'categories/create',
      component: CategoriesFormComponent
    },
    {
      path: 'categories/edit/:id',
      component: CategoriesFormComponent
    },
    {
      path: 'brands',
      component: BrandsComponent
    },
    {
      path: 'brands/create',
      component: BrandsFormComponent
    },
    {
      path: 'brands/edit/:id',
      component: BrandsFormComponent
    },
    {
      path: 'attributes',
      component: AttributesComponent
    },
    {
      path: 'attributes/create',
      component: AttributesFormComponent
    },
    {
      path: 'attributes/edit/:id',
      component: AttributesFormComponent
    },
    {
      path: 'terms',
      component: TermsComponent
    },
    {
      path: 'terms/create',
      component: TermsFormComponent
    },
    {
      path: 'terms/edit/:id',
      component: TermsFormComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
