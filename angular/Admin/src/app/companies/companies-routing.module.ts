import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { BranchOfficeComponent, CompanyComponent,
        CompanyTypeComponent, CompanyTypeFormComponent,
        DepartmentsComponent, WineriesComponent,
        EditBranchOfficeComponent,
        PointsOfSaleComponent,
        PointsOfSaleFormComponent
       } from './index';
import { EditWineriesComponent } from './wineries/edit-wineries/edit-wineries.component';
import { EditDepartmensComponent } from './departments/edit-departmens/edit-departmens.component';


const routes: Routes = [{
  path      : '',
  component : CompaniesComponent,
  children: [
    {
      path: 'company',
      component: CompanyComponent,
    },
    {
      path: 'branchoffice',
      component: BranchOfficeComponent
    },
    {
      path: 'branchoffice/edit/:id',
      component: EditBranchOfficeComponent
    },
    {
      path: 'branchoffice/create',
      component: EditBranchOfficeComponent
    },
    {
      path: 'pointofsale',
      component: PointsOfSaleComponent
    },
    {
      path: 'pointofsale/edit/:id',
      component: PointsOfSaleFormComponent
    },
    {
      path: 'pointofsale/create',
      component: PointsOfSaleFormComponent
    },
    {
      path: 'departments',
      component: DepartmentsComponent
    },
    {
      path: 'departments/edit/:id',
      component: EditDepartmensComponent
    },
    {
      path: 'departments/create',
      component: EditDepartmensComponent
    },
    {
      path: 'wineries',
      component: WineriesComponent
    },
    {
      path: 'wineries/edit/:id',
      component: EditWineriesComponent
    },
    {
      path: 'wineries/create',
      component: EditWineriesComponent
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
