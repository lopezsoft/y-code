import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule, NbCardModule, NbInputModule, NbFormFieldModule,
  NbIconModule, NbActionsModule, NbCheckboxModule, NbDatepickerModule,
  NbRadioModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';


import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxCurrencyModule } from "ngx-currency";

import { CoreModule } from './../../core/core.module';

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

import { SalesRoutingModule } from './sales-routing.module';

import { SalesComponent } from './sales.component';
import {
  CustomersComponent,
  CustomerFormComponent,
} from './index';

@NgModule({
  declarations: [
    SalesComponent,
    CustomersComponent,
    CustomerFormComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
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
    NbFormFieldModule,
    jqxGridModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class SalesModule { }
