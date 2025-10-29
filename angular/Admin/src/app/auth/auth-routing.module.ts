import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  RegisterComponent,
  AuthComponent,
  ForgotPasswordPageComponent,
  ErrorPageComponent,
  NotAuthorizedComponent,
  ResetPasswordComponent,
  EmailResendComponent,
} from './index';

const routes: Routes = [
  {
    path      : '',
    component : AuthComponent,
    children  : [
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'not-authorized',
        component: NotAuthorizedComponent,
        data: {
          title: 'Not authorized page'
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
        path: 'password-reset/:token',
        component: ResetPasswordComponent,
        data: {
          title: 'Reset Password Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'email-resend',
        component: EmailResendComponent,
        data: {
          title: 'Email Resend Page'
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
