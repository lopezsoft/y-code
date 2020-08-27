import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { BranchOfficeComponent, CompanyComponent,
        CompanyTypeComponent, CompanyTypeFormComponent,
        DepartmentsComponent, WineriesComponent,
        EditBranchOfficeComponent } from './index';


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
      path: 'branch-office/edit/:id',
      component: EditBranchOfficeComponent
    },
    {
      path: 'departaments',
      component: DepartmentsComponent
    },
    {
      path: 'wineries',
      component: WineriesComponent
    },
    {
      path: 'companytype',
      component: CompanyTypeComponent
    },
    {
      path: 'companytype/create',
      component: CompanyTypeFormComponent
    },
    {
      path: 'companytype/edit/:id',
      component: CompanyTypeFormComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {
}
