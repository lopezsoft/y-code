import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ApiServerService, MessagesService } from './../../../utils/index';

// Base component

import { BaseComponent } from './../../../core/components/base/base.component';
import { TranslateService } from '@ngx-translate/core';

export class FormComponent extends BaseComponent {
  title = 'Titulo del formulario';
  customForm: FormGroup;
  public saveAClose   = false;
  public saveACreate  = false;
  public toClose      = false;
  public editing      = false;
  public uid: any = 0;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute) {
    super(api, router, translate);
  }


  /**
   * Valida los controles de un formulario
   */
  onValidateForm(form: FormGroup): void {
    Object.values(form.controls).forEach(ele => {
      ele.markAllAsTouched();
    });
  }

  /**
   * Limpia los objetos de un formulario
   */
  onResetForm(form: FormGroup): void {
    form.reset();
  }

  activeLoading(): void {
    this.loading  = true;
  }

  disabledLoading(): void {
    this.loading      = false;
    this.saveAClose   = false;
    this.saveACreate  = false;
  }

  cancel(): void {
    this.close();
  }

  close(): void {
    this.onResetForm(this.customForm);
    const oldRoute    = localStorage.getItem('oldRoute');
    if (oldRoute){
      localStorage.removeItem('oldRoute');
      this.goRoute(oldRoute);
    }
  }

  private validateForm(): void {
    const me    = this.customForm;
    const ts    = this;
    const lang  = this.translate;
    ts.activeLoading();
    if (me.invalid){
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    }
  }

  saveAndCreate(): void {
    // Implements
    this.saveACreate = true;
    this.validateForm();
  }

  saveAndClose(): void {
    // Implements
    this.saveAClose = true;
    this.validateForm();
  }


}
