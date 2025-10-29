
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
import {GlobalSettingsService} from '../../services/global-settings.service';

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
                public spinner: NgxSpinnerService,
                public settings: GlobalSettingsService,
                ) {
        super(fb, msg, api, router, translate, aRouter, spinner);
        this.customForm = this.fb.group({
          email: ['', Validators.required]
        });
      }

    // On submit click, reset form fields
    onSubmit(): void {
      const ts  = this;
      ts.settings.showBlockUI();
      ts.loading  = true;
      ts.api.post('/auth/forgot-password', {email: ts.customForm.get('email').value}).
        subscribe({
      next: (resp: JsonResponse) => {
        ts.disabledLoading();
        ts.settings.hideBlockUI();
        if (!resp.success){
          ts.msg.errorMessage('', resp.message);
          return;
        }
        ts.msg.onMessage('', resp.message);
      },
      error: (err: string) => {
        ts.settings.hideBlockUI();
        ts.disabledLoading();
        ts.msg.errorMessage('Error', err);
      }
      });
    }

    get invalidEmail(): boolean {
      return this.isInvalid('email');
    }

    get placeholderEmail(): string {
      return this.translate.instant('placeholder.email');
    }
}
