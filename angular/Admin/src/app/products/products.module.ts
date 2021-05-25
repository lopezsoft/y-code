import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';


import { NgSelectModule } from '@ng-select/ng-select';
import { NgFallimgModule } from 'ng-fallimg';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxCurrencyModule } from "ngx-currency";


export const customCurrencyMaskConfig = {
  align         : "right",
  allowNegative : true,
  allowZero     : true,
  decimal       : ".",
  precision     : 2,
  prefix        : "$ ",
  suffix        : "",
  thousands     : ",",
  nullable      : true
};

/*
  * Translation
*/
import { TranslateModule } from '@ngx-translate/core';

import { ProductsRoutingModule } from './products-routing.module';
import { CoreModule } from './../core/core.module';

import {
  CategoriesComponent,
  BrandsComponent,
  AttributesComponent,
  ItemsComponent
} from './index';

import { ProductsComponent } from './products.component';
import {
  BrandsFormComponent,
  CategoriesFormComponent,
  AttributesFormComponent,
  TermsComponent,
  TermsFormComponent,
  ItemsFormComponent,
  MeasurementUnitsComponent,
  MeasurementUnitsFormComponent
 } from './index';
import { GroupsComponent } from './groups/groups.component';
import { GroupsFormComponent } from './groups/groups-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CoreModule,
    NgbPaginationModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    jqxMenuModule,
    NgSelectModule,
    ProductsRoutingModule,
    jqxGridModule,
    ReactiveFormsModule,
    TranslateModule,
    NgFallimgModule
  ],
  declarations: [
    ProductsComponent,
    ItemsComponent,
    CategoriesComponent,
    BrandsComponent,
    AttributesComponent,
    BrandsFormComponent,
    CategoriesFormComponent,
    AttributesFormComponent,
    TermsComponent,
    TermsFormComponent,
    ItemsFormComponent,
    MeasurementUnitsComponent,
    MeasurementUnitsFormComponent,
    GroupsComponent,
    GroupsFormComponent,
  ],
})
export class ProductsModule { }
