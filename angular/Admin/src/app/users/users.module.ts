import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

import { NgFallimgModule } from 'ng-fallimg';


import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
  align         : "right",
  allowNegative : true,
  allowZero     : true,
  decimal       : ".",
  precision     : 2,
  prefix        : "$ ",
  suffix        : "",
  thousands     : ",",
  nullable      : true
};

import { NgxSpinnerModule } from 'ngx-spinner';

import { CoreModule } from './../core/core.module';


/*
* Translation
*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { UiSwitchModule } from 'ngx-ui-switch';

import { UsersComponent } from './users.component';
import { UsersListComponent, UsersEditComponent} from './index';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersEditComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxDatatableModule,
    UiSwitchModule,
    NgbModule,
    NgbPaginationModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgxSpinnerModule,
    jqxMenuModule,
    UsersRoutingModule,
    jqxGridModule,
    ReactiveFormsModule,
    NgFallimgModule,
    NgSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
  ]
})
export class UsersModule { }
