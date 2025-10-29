import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {ApiServerService, MessagesService} from '../../utils';
import {AuthMasterComponent} from '../auth-master/auth-master.component';

import {TranslateService} from '@ngx-translate/core';
import {GlobalSettingsService} from '../../services/global-settings.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordComponent extends AuthMasterComponent implements OnInit {
  // Public
  public passwordTextType: boolean;
  public confPasswordTextType: boolean;
  public submitted = false;
  public token: string;
  public email: string;
  constructor(
      public api: ApiServerService,
      private route: ActivatedRoute,
      public fb: FormBuilder,
      public msg: MessagesService,
      public router: Router,
      public translate: TranslateService,
      public globalSettings: GlobalSettingsService,
  ) {
    super(translate, api, router);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.customForm = this.fb.group({
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    });
    this.email = this.route.snapshot.queryParams.email;
    this.token = this.route.snapshot.params.token;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType(): void {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * Toggle confirm password
   */
  toggleConfPasswordTextType(): void {
    this.confPasswordTextType = !this.confPasswordTextType;
  }

  /**
   * On Submit
   */
  onSubmit(): void {
    const ts  = this;
    const lang = ts.translate;
    if (ts.customForm.invalid) {
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      return;
    }
    const values = ts.customForm.getRawValue();
    values.token = ts.token;
    values.email = ts.email;
    ts.globalSettings.showBlockUI();
    ts.api.post('/auth/reset-password', values).
    subscribe({
      next: (resp) => {
        ts.globalSettings.hideBlockUI();
        if (!resp.success) {
          ts.msg.errorMessage('', resp.message);
          return;
        }
        ts.msg.onMessage('', resp.message);
        setTimeout(() => {
          ts.router.navigate(['/auth/login']);
        }, 2000);
      },
      error: (err: any) => {
        ts.globalSettings.hideBlockUI();
        ts.msg.errorMessage('Error', err || err.message || err.error.message);
      }
    });
  }

}
