import { AfterViewInit, ElementRef, Injectable, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

// Services
import { ApiServerService, MessagesService } from '../../../utils/index';

// Base component

import { FormComponent } from './form.component';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class FormSpinnerComponent extends FormComponent implements OnInit, AfterViewInit {

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService
  ) {
    super(fb, msg, api, router, translate, aRouter);
  }

  showSpinner(): void {
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

  fullLoad(): void {
    this.spinner.hide();
  }

}
