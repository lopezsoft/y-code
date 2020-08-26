import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormComponent } from 'src/app/core/components/forms/form.component';
import { ErrorResponse, JsonResponse } from 'src/app/interfaces';

import {  ClassOfAccounting } from 'src/app/models/accounting-model';

@Component({
  selector: 'app-class-of-accounting-form',
  templateUrl: './class-of-accounting-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class ClassOfAccountingFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('name') name: ElementRef;
  model: ClassOfAccounting;

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute
  ){
    super(fb, msg, api, router, translate, aRouter);
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
    const ts    = this;
    ts.title  = 'Crear/Editar clase de cuenta';
    ts.uid    = ts.aRouter.snapshot.paramMap.get('id');

    ts.model  = {
      id: 0,
      name: '',
      number: 0
    };

    if (ts.uid){
      ts.loadData(ts.uid);
    }

  }

  ngAfterViewInit(): void {
    this.name.nativeElement.focus();
  }


  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;
    ts.api.get(`/accounting/clasofaccounts/read`, { uid: id}).
      subscribe((resp: any) => {
        this.model = resp.records[0];
      }, (err: ErrorResponse) => {
        ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
      });
  }


  saveAndClose(): void {
    super.saveAndClose();
    this.toClose  = true;
    this.saveData();
  }

  saveAndCreate(): void {
    super.saveAndCreate();
    this.toClose  = false;
    this.saveData();
  }

  saveData(): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    if (!frm.invalid) {
      if(ts.editing){

        const data  = {
          records : JSON.stringify(frm.value)
        };

        ts.api.put(`/accounting/clasofaccounts/update/${ts.uid}`, data)
          .subscribe((resp: JsonResponse) => {
            ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
            ts.editing  = false;
            if (ts.toClose){
              ts.close();
            }else{
              ts.onResetForm(frm);
              ts.name.nativeElement.focus();
            }
            ts.disabledLoading();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
            ts.disabledLoading();
          });
        }else{
          ts.api.post('/accounting/clasofaccounts/create', frm.value)
            .subscribe((resp: JsonResponse) => {
              ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
              if (ts.toClose){
                ts.close();
              }else{
                ts.onResetForm(frm);
                ts.name.nativeElement.focus();
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
