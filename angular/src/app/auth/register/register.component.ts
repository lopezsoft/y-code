import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { MessagesService, ApiServerService } from 'src/app/utils/index';

import {TranslateService} from '@ngx-translate/core';

// Base component
import { FormComponent } from 'src/app/core/components/forms/form.component';

// Interfaces
import { JsonResponse, ErrorResponse } from './../../interfaces/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends FormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(public fb: FormBuilder,
              public api: ApiServerService,
              public msg: MessagesService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(fb, msg, api, router, translate, aRouter);
    this.registerForm = this.fb.group({
      name                  : ['', [Validators.required, Validators.minLength(12)]],
      password              : ['', [Validators.required, Validators.minLength(5)]],
      password_confirmation : ['', [Validators.required, Validators.minLength(5)]],
      email                 : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
  }
  ngOnInit(): void {
    this.removeLoading();
    this.goHome();
  }

  get invalidUserName(): boolean{
    return this.registerForm.get('name').invalid && this.registerForm.get('name').touched;
  }
  get invalidPassword(): boolean{
    return this.registerForm.get('password').invalid && this.registerForm.get('password').touched;
  }
  get invalidConfirmPassword(): boolean{
    return this.registerForm.get('password_confirmation').invalid && this.registerForm.get('password_confirmation').touched;
  }
  get invalidEmail(): boolean{
    return this.registerForm.get('email').invalid && this.registerForm.get('email').touched;
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
  get placeholderNameAndSurname(): string {
    return this.translate.instant('register.placeholder.nameAndSurname');
  }

  onValidPassword(): boolean{
    const passw1 = this.registerForm.get('password').value;
    const passw2 = this.registerForm.get('password_confirmation').value;
    return (passw2 === passw1) ? true : false;
  }

  onSave(): void {
    const me    = this.registerForm;
    const ts    = this;
    const lang  = this.translate;
    ts.activeLoading();
    if (me.invalid){
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    }else{
      if(ts.onValidPassword()){
        ts.api.post('/auth/signup', me.value)
        .subscribe((resp: JsonResponse) => {
          ts.onResetForm(me);
          ts.msg.toastMessage(lang.instant('register.messages.successfulRegistration'), resp.message, 0);
          window.location.reload();
        }, (err: ErrorResponse) => {
          ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
          ts.onValidateForm(me);
          setTimeout(() => {
            window.location.reload();
            // ts.disabledLoading();
          }, 5000);
        });
      }else{
        ts.disabledLoading();
        ts.msg.toastMessage(lang.instant('general.error'), lang.instant('register.messages.differentPasswords'), 4);
      }
    }
  }
}
