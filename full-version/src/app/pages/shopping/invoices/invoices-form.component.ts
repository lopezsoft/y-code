import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FormComponent } from './../../../core/components/forms/form.component';
import { wineries, BranchOffice } from './../../../models/companies-model';

import { WineriesService } from './../../../services/companies/index';
import { MessagesService, ApiServerService } from './../../../utils';
import { Persons } from './../../../models/general-model';
import { PaymentMethods } from './../../../models/general-model';
import { DocumentsService } from './../../../services/global/documents.service';
import { PersonsService } from './../../../services/general/persons.service';
import { ShoppingService } from './../../../services/global/shopping.service';
import { BranchOfficeService } from 'app/services/companies';

@Component({
  selector: 'app-invoices-form',
  templateUrl: './invoices-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class InvoicesFormComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  providers: Persons[] = [];
  payments: PaymentMethods[] = [];
  ware_house: wineries[] = [];
  pointsOfSale: BranchOffice[] = [];

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private provSer: PersonsService,
              private docsSer: DocumentsService ,
              private shopSer: ShoppingService,
              private branchSer: BranchOfficeService,
              private wareHouseServ: WineriesService,
              public spinner: NgxSpinnerService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      admission_date    : [new Date().toISOString().split('T')[0], [Validators.required]],
      discount          : [0],
      freight           : [0],
      rfte              : [0],
      invoice_nro       : ['', [Validators.required, Validators.minLength(2)]],
      vat               : [0],
      notes             : [''],
      pay_day           : [new Date().toISOString().split('T')[0], [Validators.required]],
      payment_method_id : ['', [Validators.required]],
      point_of_sale_id  : ['0', [Validators.required]],
      warehouse_id      : ['0'],
      provider_id       : ['0', [Validators.required]],
      sub_total         : [0, [Validators.required]],
      total             : [0, [Validators.required]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('invoice_nro').invalid && this.customForm.get('invoice_nro').touched;
  }
  get invalidBranch(): boolean{
    return this.customForm.get('point_of_sale_id').invalid && this.customForm.get('point_of_sale_id').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar factura de compra';
    ts.PutURL   = '/shopping/update/';
    ts.PostURL  = '/shopping/create';

    ts.wareHouseServ.getData({}).subscribe((resp) => {
      ts.ware_house  = resp;
    });

    ts.provSer.getProviders({}).subscribe((resp) => {
      ts.providers  = resp;
    });

    ts.docsSer.getPaymentMethods({}).subscribe((resp) => {
      ts.payments  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('payment_method_id').setValue(resp[0].id);
      }
    });

    ts.branchSer.getPointsOfSale({}).subscribe((resp) => {
      ts.pointsOfSale  = resp;
      if( resp.length > 0 ){
        ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
      }
    });

  }

  loadData(id: any = 0) {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.shopSer.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        admission_date    : resp[0].admission_date,
        discount          : resp[0].discount,
        freight           : resp[0].freight,
        invoice_nro       : resp[0].invoice_nro,
        vat               : resp[0].vat,
        rfte              : resp[0].rfte,
        notes             : resp[0].notes,
        pay_day           : resp[0].pay_day,
        warehouse_id      : resp[0].warehouse_id ?? '0',
        payment_method_id : resp[0].payment_method_id,
        point_of_sale_id  : resp[0].point_of_sale_id,
        provider_id       : resp[0].provider_id,
        sub_total         : resp[0].sub_total,
        total             : resp[0].total,
      })
    });
  }
}
