import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountingComponent } from './accounting.component';
import { AccountsComponent,
  AccountingGroupsComponent,
  ClassOfAccountingComponent,
  ClassOfAccountingFormComponent,
  AccountingGroupsFormComponent,
} from './index';

const routes: Routes = [{
  path      : '',
  component : AccountingComponent,
  children: [
    {
      path: 'class',
      component: ClassOfAccountingComponent,
    },
    {
      path: 'class/create',
      component: ClassOfAccountingFormComponent,
    },
    {
      path: 'class/edit/:id',
      component: ClassOfAccountingFormComponent,
    },
    {
      path: 'groups',
      component: AccountingGroupsComponent
    },
    {
      path: 'groups/create',
      component: AccountingGroupsFormComponent,
    },
    {
      path: 'groups/edit/:id',
      component: AccountingGroupsFormComponent,
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
