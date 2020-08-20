import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountingComponent } from './accounting.component';
import { AccountsComponent,
  AccountingGroupsComponent,
  ClassOfAccountingComponent } from './index';

const routes: Routes = [{
  path      : '',
  component : AccountingComponent,
  children: [
    {
      path: 'class',
      component: ClassOfAccountingComponent,
    },
    {
      path: 'groups',
      component: AccountingGroupsComponent
    },
    {
      path: 'accounts',
      component: AccountsComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {
}
