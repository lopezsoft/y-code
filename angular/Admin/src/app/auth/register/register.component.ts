import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { MessagesService, ApiServerService } from './../../utils/index';

import {TranslateService} from '@ngx-translate/core';

import { NgxSpinnerService } from "ngx-spinner";

// Base component
import { FormComponent } from './../../core/components/forms/form.component';

// Interfaces
import { JsonResponse, ErrorResponse } from './../../interfaces/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends FormComponent implements OnInit {

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
      first_name            : ['', [Validators.required, Validators.minLength(3)]],
      last_name             : ['', [Validators.required, Validators.minLength(3)]],
      password              : ['', [Validators.required, Validators.minLength(5)]],
      password_confirmation : ['', [Validators.required, Validators.minLength(5)]],
      email                 : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
  }
  ngOnInit(): void {
    this.removeLoading();
    this.goHome();
  }

  get invalidFirstName(): boolean{
    return this.isInvalid('first_name');
  }
  get invalidLastName(): boolean{
    return this.isInvalid('last_name');
  }

  get invalidPassword(): boolean{
    return this.isInvalid('password');
  }
  get invalidConfirmPassword(): boolean{
    return this.isInvalid('password_confirmation');
  }
  get invalidEmail(): boolean{
    return this.isInvalid('email');
  }

  // placeholder

  get placeholderEmail(): string {
    return this.translate.instant('placeholder.email');
  }
  get placeholderPassw(): string {
    return this.translate.instant('placeholder.password');
  }

  get placeholderConfirmPassw(): string {
    return this.translate.instant('placeholder.confirmPassword');
  }

  get placeholderFirstName(): string {
    return this.translate.instant('register.placeholder.firstName');
  }

  get placeholderLastName(): string {
    return this.translate.instant('register.placeholder.lastName');
  }

  onValidPassword(): boolean{
    const passw1 = this.customForm.get('password').value;
    const passw2 = this.customForm.get('password_confirmation').value;
    return (passw2 === passw1) ? true : false;
  }

  onSave(): void {
    const me    = this.customForm;
    const ts    = this;
    const lang  = this.translate;
    ts.activeLoading();
    if (me.invalid){
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    }else{
      if(ts.onValidPassword()){
        ts.showSpinner(lang.instant('register.button.creatingAccount'));
        ts.api.post('/auth/signup', me.value)
        .subscribe((resp) => {
          ts.hideSpinner();
          ts.onResetForm(me);
          ts.msg.toastMessage(lang.instant('register.messages.successfulRegistration'), resp.message, 0);
					setTimeout(() => {
						window.location.reload();
					}, 5000);
        }, (err: string) => {
          ts.hideSpinner();
					ts.disabledLoading();
          ts.msg.errorMessage(lang.instant('general.error'), err);
          ts.onValidateForm(me);
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        });
      }else{
        ts.disabledLoading();
        ts.msg.toastMessage(lang.instant('general.error'), lang.instant('register.messages.differentPasswords'), 4);
      }
    }
  }
}
