import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { ApiServerService, MessagesService } from './../../../utils/index';

// Base component

import { BaseComponent } from './../../../core/components/base/base.component';

export class FormComponent extends BaseComponent {

  constructor(public fb: FormBuilder, public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(api, router);
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
    this.loading  = false;
  }


}
