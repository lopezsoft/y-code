import { AfterViewInit, ElementRef, Injectable, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServerService, MessagesService } from './../../../utils/index';

// Base component

import { BaseComponent } from './../../../core/components/base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { JsonResponse } from './../../../interfaces';

@Injectable()
export class FormComponent extends BaseComponent implements OnInit, AfterViewInit {
  title = 'Titulo del formulario';
  public customForm: FormGroup;
  public modalForm: FormGroup;
  public focusElement: ElementRef;
  public uploadFile: ElementRef;
  public saveAClose   = false;
  public saveACreate  = false;
  public changeImage  = false;
  public toClose      = false;
  public editing      = false;
  public uid: any     = 0;
  public PostURL      = '';
  public PutURL       = '';
  public imgData     : any = '';
  public imgname     = '';
  public customFormSubmitted = false;
  public isLoginFailed = false;
  public active = 1;
  public activeLang = 'es';
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner?: NgxSpinnerService
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
  }

  showSpinner(mask: string = ''): void {
    this.maskSpinner  = mask;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  }

  hideSpinner(): void {
    this.spinner.hide();
  }


  loadData(id: any = 0): void {
    // Implements
    this.showSpinner();
  }

  fullLoad(): void {
    this.hideSpinner();
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
    if(form){
      form.reset();
    }
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
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    let values	: any = {};
    ts.onBeforeSave(frm);
    if (!frm.invalid) {
      ts.showSpinner();
      values  = frm.value;
      if(ts.changeImage) {
        values.imgdata = ts.imgData;
        values.imgname = ts.imgname;
      }
      if (ts.editing) {
        values.id = ts.uid;
        const data = {
          records: JSON.stringify(values)
        };

        ts.api.put(`${ts.PutURL}${ts.uid}`, data)
          .subscribe({
            next: (resp: JsonResponse) => {
                ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
                ts.editing = false;
                ts.onAfterSave(resp);
                if (ts.toClose) {
                    ts.close();
                } else {
                    ts.onResetForm(frm);
                    if(ts.focusElement){
                        ts.focusElement.nativeElement.focus();
                    }
                }
                ts.disabledLoading();
                ts.hideSpinner();
            },
            error: (err: string) => {
                ts.disabledLoading();
                ts.hideSpinner();
                ts.msg.toastMessage(lang.instant('general.error'), err, 4);
            }
        });
      } else {
        values.records = JSON.stringify(values);
        ts.api.post(ts.PostURL, values)
          .subscribe({
            next: (resp: JsonResponse) => {
                ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
                ts.onAfterSave(resp);
                if (ts.toClose) {
                    ts.close();
                } else {
                    ts.onResetForm(frm);
                    if(ts.focusElement){
                        ts.focusElement.nativeElement.focus();
                    }
                }
                ts.disabledLoading();
                ts.hideSpinner();
            },
            error: (err: string) => {
                ts.disabledLoading();
                ts.hideSpinner();
                ts.msg.toastMessage(lang.instant('general.error'), err, 4);
            }
        });
      }
    }
  }

  uploadImage(e: any): void {
    const ts    = this;
    const file  = e.target.files[0];
    let size    = 0;
    if (file){
      size        = (parseInt(file.size)/1024);
      ts.imgData  = 'assets/avatars/no-image.png';
      if(parseInt(file.size) > 512000){
        ts.msg.toastMessage('Archivo muy grande.',`El tamaño del archivo no debe ser mayor a 512 kb. Peso del archivo actual: ${size.toFixed(3)}`, 3);
        ts.uploadFile.nativeElement.value = '';
        return;
      }
      if(file.type == "image/jpeg" || file.type == "image/png"){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          ts.imgData      = reader.result;
          ts.changeImage  = true;
          ts.imgname      = file.name;
        };
        reader.onerror = function (error: any) {
            console.log('Error: ', error);
            ts.msg.toastMessage('Error', error, 4);
        };
      }else{
        ts.uploadFile.nativeElement.value = '';
        ts.msg.toastMessage('Formato no soportado.','Solo se permiten archivos en formato PNG/JPG', 4);
      }
    }
  }

	/**
	 * Valida si el contenido del campo de un objeto del formulario es invalido o incorrecto
	 * @param controlName Nombre del campo o control del formulario
	 * @returns Boolean
 */
	isInvalid (controlName: string): boolean {
		const ts  = this;
		if(!ts.customForm) {
			return false;
		}
		return ts.customForm.get(controlName).invalid && ts.customForm.get(controlName).touched;
	}

	isInvalidNumber (controlName: string): boolean {
		const ts  = this;
		if(!ts.customForm) {
			return false;
		}
		return (this.customForm.get(controlName).value <= 0) ? true : false;
	}

	onAfterSave(resp: JsonResponse) {
		// Implements
	}
    onBeforeSave(frm: FormGroup) : void {
        // Implements
    }
}
