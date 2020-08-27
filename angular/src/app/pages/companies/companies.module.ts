import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule, NbCardModule, NbInputModule, NbFormFieldModule,
  NbIconModule, NbActionsModule, NbCheckboxModule, NbDatepickerModule,
  NbRadioModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

/*
  * Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ThemeModule } from '../../@theme/theme.module';
import { CompaniesRoutingModule } from './companies-routing.module';
import { BranchOfficeComponent,
        CompanyComponent,
        CompanyTypeComponent,
        DepartmentsComponent,
        WineriesComponent} from './index';
import { CompaniesComponent } from './companies.component';
import { EditBranchOfficeComponent } from './branch-office/edit-branch-office/edit-branch-office.component';
import { CompanyTypeFormComponent } from './company-type/company-type-form.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    CompaniesRoutingModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbInputModule,
    NbIconModule,
    jqxMenuModule,
    NbFormFieldModule,
    jqxGridModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
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
    CompanyTypeFormComponent
  ],
})
export class CompaniesModule { }
