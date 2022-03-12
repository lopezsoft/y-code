import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  RegisterComponent,
  AuthComponent,
  ForgotPasswordPageComponent,
  ErrorPageComponent,
 } from "./index";

const routes: Routes = [
  {
    path      : '',
    component : AuthComponent,
    children  : [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordPageComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
