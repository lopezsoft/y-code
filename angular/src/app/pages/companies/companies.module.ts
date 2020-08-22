import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CompaniesRoutingModule } from './companies-routing.module';
import { BranchOfficeComponent, CompanyComponent, CompanieTypeComponent, DepartamentsComponent, WineriesComponent} from './index';
import { CompaniesComponent } from './companies.component';
import { AngularSlickgridModule } from 'angular-slickgrid';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    CompaniesRoutingModule,
    AngularSlickgridModule,
  ],
  declarations: [
    CompaniesComponent,
    BranchOfficeComponent,
    CompanyComponent,
    CompanieTypeComponent,
    DepartamentsComponent,
    WineriesComponent,
    CompanyComponent
  ],
})
export class CompaniesModule { }
