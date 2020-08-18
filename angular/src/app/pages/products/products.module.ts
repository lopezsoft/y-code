import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule } from './products-routing.module';
import {
  CategoriesComponent,
  BrandsComponent,
  AttributesComponent,
  ItemsComponent} from './index';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductsComponent,
    ItemsComponent,
    CategoriesComponent,
    BrandsComponent,
    AttributesComponent,
  ],
})
export class ProductsModule { }
