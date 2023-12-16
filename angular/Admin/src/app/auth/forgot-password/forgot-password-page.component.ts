
import { NgForm, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit, ElementRef } from '@angular/core';

// Services
import { ApiServerService, MessagesService } from '../../utils';

import {TranslateService} from '@ngx-translate/core';

// Base component
import { FormComponent } from '../../core/components/forms';

// Interfaces
import { JsonResponse } from '../../interfaces';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html'
})

export class ForgotPasswordPageComponent extends FormComponent implements OnInit  {
    @ViewChild('focusElement') focusElement: ElementRef;
    @ViewChild('f') forogtPasswordForm: NgForm;

    constructor(public fb: FormBuilder,
                public api: ApiServerService,
                public msg: MessagesService,
                public router: Router,
                public translate: TranslateService,
                public aRouter: ActivatedRoute,
                public spinner: NgxSpinnerService) {
        super(fb, msg, api, router, translate, aRouter, spinner);
        this.customForm = this.fb.group({
          email: ['', Validators.required]
        });
      }

    // On submit click, reset form fields
    onSubmit(): void {
      const ts  = this;
      ts.showSpinner('Realizando petición, espere por favor...');
      ts.loading  = true;
      ts.api.post('/auth/recover', {email: ts.customForm.get('email').value}).
        subscribe((resp: JsonResponse) => {
          ts.disabledLoading();
          ts.hideSpinner();
          if (!resp.success){
            ts.msg.errorMessage('', resp.message);
            return;
          }
          ts.msg.onMessage('', resp.message);
        }, (err: string) => {
          ts.hideSpinner();
          ts.disabledLoading();
          ts.msg.errorMessage('Error', err);
        });
    }

    get invalidEmail(): boolean {
      return this.isInvalid('email');
    }

    get placeholderEmail(): string {
      return this.translate.instant('placeholder.email');
    }
}
