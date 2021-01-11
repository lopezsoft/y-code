import { PaymentMethods } from './../../../models/general-model';
import { DocumentsService } from './../../../services/global/documents.service';
import { PersonsService } from './../../../services/general/persons.service';
import { ShoppingService } from './../../../services/global/shopping.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FormComponent } from 'src/app/core/components/forms/form.component';
import {  BranchOffice } from 'src/app/models/companies-model';

import { BranchOfficeService } from 'src/app/services/companies/index';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Persons } from 'src/app/models/general-model';
import { ErrorResponse, JsonResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-invoices-form',
  templateUrl: './invoices-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class InvoicesFormComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  points_of_sale: BranchOffice[] = [];
  providers: Persons[] = [];
  payments: PaymentMethods[] = [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private provSer: PersonsService,
              private docsSer: DocumentsService ,
              private branch: BranchOfficeService,
              private shopSer: ShoppingService,
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      admission_date  : [new Date().toISOString().split('T')[0], [Validators.required]],
      discount        : [0],
      freight         : [0],
      invoice_nro     : ['', [Validators.required, Validators.minLength(2)]],
      vat             : [0],
      notes           : [''],
      pay_day         : [new Date().toISOString().split('T')[0], [Validators.required]],
      payment_id      : ['', [Validators.required]],
      point_of_sale_id: ['0', [Validators.required]],
      provider_id     : ['0', [Validators.required]],
      sub_total       : [0, [Validators.required]],
      total           : [0, [Validators.required]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('invoice_nro').invalid && this.customForm.get('invoice_nro').touched;
  }
  get invalidBranch(): boolean{
    return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar factura de compra';
    ts.PutURL   = '/shopping/update/';
    ts.PostURL  = '/shopping/create';

    ts.branch.getPointsOfSale({}).subscribe((resp) => {
      ts.points_of_sale  = resp;
    });

    ts.provSer.getProviders({}).subscribe((resp) => {
      ts.providers  = resp;
    });
    ts.docsSer.getPaymentMethods({}).subscribe((resp) => {
      ts.payments  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('payment_id').setValue(resp[0].id);
      }
    });

  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.shopSer.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        admission_date  : resp[0].admission_date,
        discount        : resp[0].discount,
        freight         : resp[0].freight,
        invoice_nro     : resp[0].invoice_nro,
        vat             : resp[0].vat,
        notes           : resp[0].notes,
        pay_day         : resp[0].pay_day,
        payment_id      : resp[0].payment_id,
        point_of_sale_id: resp[0].point_of_sale_id,
        provider_id     : resp[0].provider_id,
        sub_total       : resp[0].sub_total,
        total           : resp[0].total,
      })
    });
  }
}
