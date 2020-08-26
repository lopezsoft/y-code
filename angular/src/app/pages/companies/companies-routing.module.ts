import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { BranchOfficeComponent, CompanyComponent, CompanieTypeComponent, DepartamentsComponent,WineriesComponent,EditBranchOfficeComponent } from './index';


const routes: Routes = [{
  path      : '',
  component : CompaniesComponent,
  children: [
    {
      path: 'company',
      component: CompanyComponent,
    },

    {
      path: 'branch-office',
      component: BranchOfficeComponent
    },
    {
      path:'branch-office/edit/:id',
      component: EditBranchOfficeComponent
    },
    {
      path: 'departaments',
      component: DepartamentsComponent
    },
    {
      path: 'wineries',
      component: WineriesComponent
    },
    {
      path: 'companie-type',
      component: CompanieTypeComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {
}
