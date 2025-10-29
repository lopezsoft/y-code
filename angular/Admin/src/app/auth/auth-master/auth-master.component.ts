import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

import {ApiServerService} from '../../utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-master',
  templateUrl: './auth-master.component.html',
})
export class AuthMasterComponent implements OnInit {
  public customForm  !: FormGroup;
  public coreConfig: any;
  loading = false;
  constructor(
    public translate: TranslateService,
    public api: ApiServerService,
    public router: Router,
  ) {
    // Configure the layout
    translate.setDefaultLang('es');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.customForm.controls;
  }
  ngOnInit(): void {
    // Subscribe to config changes
    if (this.api.isAuthenticated()) {
      this.router.navigate([`/dashboard`]);
    }
  }
  activeLoading(): void {
    this.loading  = true;
  }
  disabledLoading(): void {
    this.loading  = false;
  }
  isInvalid(controlName: string): boolean {
    const ts  = this;
    const frm = ts.customForm;
    return frm.get(controlName)?.invalid && frm.get(controlName)?.touched || false;
  }
  onValidateForm(form: FormGroup): void {
    Object.values(form.controls).forEach(ele => {
      ele.markAllAsTouched();
    });
  }
}
