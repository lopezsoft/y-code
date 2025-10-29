import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// Base component
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthMasterComponent} from '../auth-master/auth-master.component';
import {ApiServerService, MessagesService} from '../../utils';

import {GlobalSettingsService} from '../../services/global-settings.service';

@Component({
  selector: 'app-email-resend',
  templateUrl: './email-resend.component.html',
  styleUrls : ['./email-resend.scss']
})

export class EmailResendComponent extends AuthMasterComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  customForm: FormGroup;
  sendEmail = false;
  constructor(
    public fb: FormBuilder,
    public translate: TranslateService,
    public router: Router,
    public api: ApiServerService,
    public msg: MessagesService,
    public aRouter: ActivatedRoute,
    public globalSettings: GlobalSettingsService,
  ) {
    super(translate, api, router);
    this.customForm = this.fb.group({
      email			        : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-ñ]+@[a-z0-9._%+-ñ]+\.[a-z]{2,4}$')]]
    });
  }
  ngOnInit(): void {
    super.ngOnInit();
  }

  get invalidEmail(): boolean {
    return this.isInvalid('email');
  }

  // placeholder

  get placeholderEmail(): string {
    return this.translate.instant('placeholder.email');
  }
  onSave(): void {
    const me    = this.customForm;
    const lang  = this.translate;
    this.globalSettings.showBlockUI(lang.instant('resend.button.resending'));
    if (me.invalid) {
      this.onValidateForm(me);
      this.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      this.disableMsg();
      return;
    }
    this.loading = true;
    this.api.post(`/email/verification-notification`, {
      email: me.value
      })
      .subscribe({
        next: (resp) => {
            me.reset();
            this.disableMsg();
            this.sendEmail = true;
            this.msg.onMessage(lang.instant('register.messages.successfulRegistration'), resp.message);
        },
        error: (err: string) => {
            this.disableMsg();
            this.msg.errorMessage(lang.instant('general.error'), err);
        }
    });

  }
  disableMsg(): void {
    this.globalSettings.hideBlockUI();
    this.loading = false;
  }

}
