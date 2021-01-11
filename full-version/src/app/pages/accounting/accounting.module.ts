import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

import { CoreModule } from './../../core/core.module';

import { NgSelectModule } from '@ng-select/ng-select';

/*
  * Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AccountsRoutingModule } from './accounting-routing.module';

import {
  AccountsComponent,
  AccountingGroupsComponent,
  ClassOfAccountingComponent,
  ClassOfAccountingFormComponent
} from './index';
import { AccountingComponent } from './accounting.component';
import { AccountingGroupsFormComponent } from './accounting-groups/accounting-groups-form.component';
import { AccountFormComponent } from './accounts/account-form.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    jqxMenuModule,
    AccountsRoutingModule,
    jqxGridModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
  ],
  declarations: [
    AccountingComponent,
    AccountingGroupsComponent,
    AccountsComponent,
    ClassOfAccountingComponent,
    ClassOfAccountingFormComponent,
    AccountingGroupsFormComponent,
    AccountFormComponent,
  ]
})
export class AccountingModule { }
