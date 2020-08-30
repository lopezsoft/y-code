import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ApiServerService, MessagesService } from 'src/app/utils/index';

import {TranslateService} from '@ngx-translate/core';

// Base component
import { FormComponent } from 'src/app/core/components/forms/form.component';

// Interfaces
import { JsonResponse, ErrorResponse } from './../../interfaces/index';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends FormComponent implements OnInit {
  @HostBinding('class')
  classes = 'example-items-rows';
  @ViewChild('focusElement') focusElement: ElementRef;

  loginForm: FormGroup;
  constructor(public fb: FormBuilder,
              public api: ApiServerService,
              public msg: MessagesService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(fb, msg, api, router, translate, aRouter);
    this.loginForm = this.fb.group({
      password    : ['', [Validators.required, Validators.minLength(5)]],
      email       : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      remember_me : [false]
    });
  }

  ngOnInit(): void {
    this.removeLoading();
    this.goHome();
  }

  get invalidPassword(): boolean {
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }

  get invalidEmail(): boolean {
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }

  get placeholderEmail(): string {
    return this.translate.instant('placeholder.email');
  }
  get placeholderPassw(): string {
    return this.translate.instant('placeholder.password');
  }

  onSave(): void {
    const me = this.loginForm;
    const ts = this;
    ts.activeLoading();
    const lang  = this.translate;
    if (me.invalid) {
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    } else {
      ts.api.post('/auth/login', me.value)
        .subscribe((resp: JsonResponse) => {
          ts.disabledLoading();
          ts.msg.toastMessage(lang.instant('login.button.loggingIn'), resp.message, 0);
          localStorage.setItem(ts.api.getApiJwt(), JSON.stringify(resp));
          ts.onResetForm(me);
          window.location.href = ts.api.getAppUrl();
        }, (err: ErrorResponse) => {
          ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          ts.onValidateForm(me);
        });
    }
  }

}
