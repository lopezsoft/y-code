import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ApiServerService, MessagesService } from './../../utils/index';

import {TranslateService} from '@ngx-translate/core';

import { NgxSpinnerService } from "ngx-spinner";

// Base component
import { FormComponent } from './../../core/components/forms/form.component';

// Interfaces
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent extends FormComponent implements OnInit {
  @HostBinding('class')
  classes = 'example-items-rows';
  @ViewChild('focusElement') focusElement: ElementRef;
  constructor(public fb: FormBuilder,
              public api: ApiServerService,
              public msg: MessagesService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
  ) {
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.customForm = this.fb.group({
      password    : ['', [Validators.required, Validators.minLength(5)]],
      email       : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      remember_me : [false]
    });
  }

  get lf() {
    return this.customForm.controls;
  }

  ngOnInit(): void {
    this.removeLoading();
    this.goHome();
  }

  get invalidPassword(): boolean {
    return this.isInvalid('password');
  }

  get invalidEmail(): boolean {
    return this.isInvalid('email');
  }

  get placeholderEmail(): string {
    return this.translate.instant('placeholder.email');
  }
  get placeholderPassw(): string {
    return this.translate.instant('placeholder.password');
  }

  onSave(): void {
    const me = this.customForm;
    const ts = this;
    ts.activeLoading();
    const lang  = this.translate;
    if (me.invalid) {
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    } else {
      ts.showSpinner();
      ts.api.post('/auth/login', me.value)
        .subscribe({
					next: (resp) => {
						ts.disabledLoading();
						ts.hideSpinner();
						ts.msg.toastMessage(lang.instant('login.button.loggingIn'), resp.message, 0);
						localStorage.setItem(ts.api.getApiJwt(), JSON.stringify(resp));
						ts.api.addUser(resp);
						ts.onResetForm(me);
						window.location.reload();
					}, 
					error: (err: string) => {
						ts.hideSpinner();
						ts.msg.toastMessage(lang.instant('general.error'), err, 4);
						ts.disabledLoading();
						ts.onValidateForm(me);
					}
				});
    }
  }

}
