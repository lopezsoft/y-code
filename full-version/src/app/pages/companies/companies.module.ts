import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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

import { CompaniesRoutingModule } from './companies-routing.module';
import { BranchOfficeComponent,
        CompanyComponent,
        CompanyTypeComponent,
        DepartmentsComponent,
        WineriesComponent} from './index';
import { CompaniesComponent } from './companies.component';
import { EditBranchOfficeComponent } from './branch-office/edit-branch-office/edit-branch-office.component';
import { CompanyTypeFormComponent } from './company-type/company-type-form.component';
import { EditWineriesComponent } from './wineries/edit-wineries/edit-wineries.component';
import { EditDepartmensComponent } from './departments/edit-departmens/edit-departmens.component';
import { PointsOfSaleComponent } from './points-of-sale/points-of-sale.component';
import { PointsOfSaleFormComponent } from './points-of-sale/points-of-sale-form.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CompaniesRoutingModule,
    jqxMenuModule,
    jqxGridModule,
    NgSelectModule,
    ReactiveFormsModule,
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
    CompaniesComponent,
    BranchOfficeComponent,
    CompanyComponent,
    CompanyTypeComponent,
    DepartmentsComponent,
    WineriesComponent,
    CompanyComponent,
    EditBranchOfficeComponent,
    CompanyTypeFormComponent,
    EditWineriesComponent,
    EditDepartmensComponent,
    PointsOfSaleComponent,
    PointsOfSaleFormComponent
  ],
})
export class CompaniesModule { }
