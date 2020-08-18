import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ItemsComponent, AttributesComponent, CategoriesComponent, BrandsComponent } from './index';

const routes: Routes = [{
  path      : '',
  component : ProductsComponent,
  children: [
    {
      path: 'items',
      component: ItemsComponent,
    },
    {
      path: 'categories',
      component: CategoriesComponent
    },
    {
      path: 'brands',
      component: BrandsComponent
    },
    {
      path: 'attributes',
      component: AttributesComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
