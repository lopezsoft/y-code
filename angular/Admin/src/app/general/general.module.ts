import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { CoreModule } from './../core/core.module';

import { NgFallimgModule } from 'ng-fallimg';
import { QuillModule } from 'ngx-quill'

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


/*
  * Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { GeneralRoutingModule } from './general-routing.module';

import { TaxesComponent, CurrencyComponent} from './index';
import { GeneralComponent } from './general.component';
import { EditTaxesComponent } from './taxes/edit-taxes/edit-taxes.component';
import { EditCurrencyComponent } from './currency/edit-currency/edit-currency.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';
import { IdentityDocumentsComponent } from './identity-documents/identity-documents.component';
import { EditIdentitydocsComponent } from './identity-documents/edit-identitydocs/edit-identitydocs.component';
import { EditTaxratesComponent } from './tax-rates/edit-taxrates/edit-taxrates.component';
import { ResolutionsComponent,
  ResolutionFormComponent,
  ReportsHeaderComponent,
  ReportsHeaderFormComponent,
 } from './index';
@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NgbModule,
    NgbPaginationModule,
    CoreModule,
    jqxMenuModule,
    jqxGridModule,
    jqxComboBoxModule,
    NgSelectModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgFallimgModule,
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
    GeneralComponent,
    ResolutionsComponent,
    ReportsHeaderFormComponent,
    ResolutionFormComponent,
    ReportsHeaderComponent,
    CurrencyComponent,
    TaxesComponent,
    EditTaxesComponent,
    EditCurrencyComponent,
    TaxRatesComponent,
    IdentityDocumentsComponent,
    EditIdentitydocsComponent,
    EditTaxratesComponent
  ],
})
export class GeneralModule { }
