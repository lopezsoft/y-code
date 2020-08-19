import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AccountingGroupsComponent } from './accounting/accounting-groups/accounting-groups.component';
import { AccountingTypesComponent } from './accounting/accounting-types/accounting-types.component';
import { AccountsComponent } from './accounting/accounts/accounts.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    AccountingGroupsComponent,
    AccountingTypesComponent,
    AccountsComponent,
  ],
})
export class PagesModule {
}
