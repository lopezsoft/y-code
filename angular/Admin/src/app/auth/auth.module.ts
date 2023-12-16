import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgSelectModule } from '@ng-select/ng-select';

import { AuthRoutingModule } from "./auth-routing.module";

import {
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordPageComponent,
  ErrorPageComponent,
} from './index';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {BlockUIModule} from 'ng-block-ui';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule,
    NgSelectModule,
    BlockUIModule,
    NgOptimizedImage,
  ],
  declarations: [
    AuthComponent,
    ForgotPasswordPageComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
