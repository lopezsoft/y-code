import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';


import { CoreModule } from './../core/core.module';

/*
  * Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ReportsRoutingModule } from './reports-routing.module';

import { ReportsComponent } from './reports.component';
import {
  InventoryComponent,
  SalesReportComponent,
 } from './index';

@NgModule({
  declarations: [
    ReportsComponent,
    InventoryComponent,
    SalesReportComponent,
  ],
  imports: [
    NgxDocViewerModule,
    ReactiveFormsModule,
    CoreModule,
    NgxSpinnerModule,
    NgSelectModule,
    CommonModule,
    ReportsRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
  ]
})
export class ReportsModule { }
