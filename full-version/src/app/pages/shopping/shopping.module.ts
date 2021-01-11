import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import{ jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';


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

import { NgxSpinnerModule } from 'ngx-spinner';

/*
* Translation
*/
import { TranslateModule } from '@ngx-translate/core';

import { ShoppingRoutingModule } from './shopping-routing.module';

import { ShoppingComponent } from './../shopping/shopping.component';
import {
  ProvidersComponent,
  ProviderFormComponent,
  ShoppingCreateComponent,
  InvoicesComponent,
  DetailEditComponent,
} from './index';
import { InvoicesFormComponent } from './invoices/invoices-form.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    ProvidersComponent,
    ProviderFormComponent,
    InvoicesComponent,
    ShoppingCreateComponent,
    InvoicesFormComponent,
    DetailEditComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    jqxDataTableModule,
    NgbModule,
    CoreModule,
    NgbPaginationModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    jqxMenuModule,
    NgSelectModule,
    jqxGridModule,
    jqxTabsModule,
    ReactiveFormsModule,
    TranslateModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
