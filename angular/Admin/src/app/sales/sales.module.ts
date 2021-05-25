import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import{ jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxCurrencyModule } from "ngx-currency";

import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { CoreModule } from './../core/core.module';

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

import { SalesRoutingModule } from './sales-routing.module';

import { SalesComponent } from './sales.component';
import {
  CustomersComponent,
  CustomerFormComponent,
  CheckInComponent,
	InvoiceComponent,
} from './index';

@NgModule({
  declarations: [
    SalesComponent,
    CustomersComponent,
    CustomerFormComponent,
    CheckInComponent,
    InvoiceComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    NgbModule,
    CoreModule,
    NgxSpinnerModule,
    NgbPaginationModule,
    NgxDocViewerModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    jqxMenuModule,
    jqxTabsModule,
    jqxDataTableModule,
    NgSelectModule,
    jqxGridModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class SalesModule { }
