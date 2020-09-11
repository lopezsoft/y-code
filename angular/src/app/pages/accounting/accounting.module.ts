import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule, NbCardModule, NbInputModule, NbFormFieldModule,
  NbIconModule, NbActionsModule, NbCheckboxModule, NbDatepickerModule,
  NbRadioModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';


import { NgSelectModule } from '@ng-select/ng-select';

/*
  * Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ThemeModule } from '../../@theme/theme.module';
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
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbInputModule,
    NbIconModule,
    jqxMenuModule,
    AccountsRoutingModule,
    NbFormFieldModule,
    jqxGridModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
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
