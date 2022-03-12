import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import {
  UsersListComponent,
  UsersEditComponent,
  ProfileComponent,
} from './index';
const routes: Routes = [{
  path      : '',
  component : UsersComponent,
  children: [
    {
      path: 'list',
      component: UsersListComponent,
    },
    {
      path: 'create',
      component: UsersEditComponent
    },
    {
      path: 'edit/:id',
      component: UsersEditComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
