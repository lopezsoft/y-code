import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule, NbCardModule, NbInputModule, NbFormFieldModule,
  NbIconModule, NbActionsModule, NbCheckboxModule, NbDatepickerModule,
  NbRadioModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
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
import { CoreModule } from './../../core/core.module';

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
    ThemeModule,
    NbCardModule,
    NgbModule,
    CoreModule,
    NgbPaginationModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NbButtonModule,
    NbEvaIconsModule,
    NbInputModule,
    NbIconModule,
    jqxMenuModule,
    NgSelectModule,
    ProductsRoutingModule,
    NbFormFieldModule,
    jqxGridModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
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
