import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AccountsRoutingModule } from './accounting-routing.module';
import {
  AccountsComponent,
  AccountingGroupsComponent,
  ClassOfAccountingComponent
} from './index';
import { AccountingComponent } from './accounting.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    AccountsRoutingModule,
  ],
  declarations: [
    AccountingComponent,
    AccountingGroupsComponent,
    AccountsComponent,
    ClassOfAccountingComponent,
  ],
})
export class AccountingModule { }
