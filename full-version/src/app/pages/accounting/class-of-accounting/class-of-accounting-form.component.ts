import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../../utils';

import { FormComponent } from './../../../core/components/forms/form.component';

import {  ClassOfAccounting } from './../../../models/accounting-model';
import { ClassOfAccountingService } from './../../../services/accounting/index';

@Component({
  selector: 'app-class-of-accounting-form',
  templateUrl: './class-of-accounting-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class ClassOfAccountingFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: ClassOfAccounting;

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public servis: ClassOfAccountingService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      name  : ['', [Validators.required, Validators.minLength(5)]],
      number: ['', [Validators.required]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('name').invalid && this.customForm.get('name').touched;
  }

  get invalidNumber(): boolean{
    return this.customForm.get('number').invalid && this.customForm.get('number').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar clase de cuenta';
    ts.PutURL   = '/accounting/clasofaccounts/update/';
    ts.PostURL  = '/accounting/clasofaccounts/create';
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.servis.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          name    : resp[0].name,
          number  : resp[0].number
        });
      });
  }

}
