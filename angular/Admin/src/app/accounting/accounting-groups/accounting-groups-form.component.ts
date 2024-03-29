import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormComponent } from './../../core/components/forms/form.component';

import { ClassOfAccounting } from './../../models/accounting-model';

import { AccountingGroupsService, ClassOfAccountingService } from './../../services/accounting/index';


@Component({
  selector: 'app-accounting-groups-form',
  templateUrl: './accounting-groups-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class AccountingGroupsFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  modelClass: ClassOfAccounting[]=[];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public groupServi: AccountingGroupsService,
              public classSer: ClassOfAccountingService,
              public spinner: NgxSpinnerService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      accounting_group_name : ['', [Validators.required, Validators.minLength(5)]],
      class_account_id      : [0, [Validators.required]],
      number                : ['', [Validators.required]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('accounting_group_name').invalid && this.customForm.get('accounting_group_name').touched;
  }

  get invalidClass(): boolean{
    return (this.customForm.get('class_account_id').value === 0) ? true : false;
  }

  get invalidNumber(): boolean{
    return this.customForm.get('number').invalid && this.customForm.get('number').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar grupo contable';
    ts.PutURL   = '/accounting/accountinggroups/update/';
    ts.PostURL  = '/accounting/accountinggroups/create';
    ts.classSer.getData({}).subscribe(resp => {
      ts.modelClass = resp;
    });
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.groupServi.getData({ uid: id}).subscribe((resp) => {
        frm.setValue({
          class_account_id      : resp[0].class_account_id      ,
          accounting_group_name : resp[0].accounting_group_name ,
          number                : resp[0].number
        });
    });
  }
}
