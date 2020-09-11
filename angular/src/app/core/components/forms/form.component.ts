import { AfterViewInit, ElementRef, Injectable, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ApiServerService, MessagesService } from './../../../utils/index';

// Base component

import { BaseComponent } from './../../../core/components/base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { ErrorResponse, JsonResponse } from 'src/app/interfaces';
declare var $:any;
@Injectable()
export class FormComponent extends BaseComponent implements OnInit, AfterViewInit {
  title = 'Titulo del formulario';
  customForm: FormGroup;
  focusElement: ElementRef;
  public saveAClose = false;
  public saveACreate = false;
  public toClose = false;
  public editing = false;
  public uid: any = 0;
  public PostURL  = '';
  public PutURL   = '';
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute
  ) {
    super(api, router, translate);
  }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.uid    = ts.aRouter.snapshot.paramMap.get('id');
    if (ts.uid){
      ts.loadData(ts.uid);
    }
  }

  // tslint:disable-next-line: contextual-lifecycle
  ngAfterViewInit(): void {
    if (this.focusElement){
      this.focusElement.nativeElement.focus();
    }
    $('.select2-combo').select2({
      theme: "classic",
    });
  }


  loadData(id: any = 0): void {
    // Implements
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
    this.loading = true;
  }

  disabledLoading(): void {
    this.loading = false;
    this.saveAClose = false;
    this.saveACreate = false;
  }

  cancel(): void {
    this.close();
  }

  close(): void {
    this.onResetForm(this.customForm);
    const oldRoute = localStorage.getItem('oldRoute');
    if (oldRoute) {
      localStorage.removeItem('oldRoute');
      this.goRoute(oldRoute);
    }
  }

  private validateForm(): void {
    const me = this.customForm;
    const ts = this;
    const lang = this.translate;
    ts.activeLoading();
    if (me.invalid) {
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    }
  }

  saveAndCreate(): void {
    // Implements
    this.saveACreate = true;
    this.validateForm();
    this.toClose  = false;
    this.saveData();
  }

  saveAndClose(): void {
    // Implements
    this.saveAClose = true;
    this.validateForm();
    this.toClose  = true;
    this.saveData();
  }

  saveData(): void {
    const ts = this;
    const frm = ts.customForm;
    const lang = ts.translate;
    if (!frm.invalid) {
      if (ts.editing) {

        const data = {
          records: JSON.stringify(frm.value)
        };

        ts.api.put(`${ts.PutURL}${ts.uid}`, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
            ts.editing = false;
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
          });
      } else {
        ts.api.post(ts.PostURL, frm.value)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
            if (ts.toClose) {
              ts.close();
            } else {
              ts.onResetForm(frm);
              ts.focusElement.nativeElement.focus();
            }
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
          });
      }
    }
  }

}
