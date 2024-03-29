import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
// import { QuillEditorComponent } from 'ngx-quill';

import { Currency }  from './../../models/general-model';
import { AccountingDocuments } from './../../models/accounting-model';

import { MessagesService, ApiServerService } from './../../utils';
import { CurrencySysService } from './../../services/general/currency-sys.service';
import { ResolutionsService } from './../../services/general/index';
import { BranchOfficeService } from './../../services/companies';

import { BranchOffice } from './../../models/companies-model';

import { FormComponent } from './../../core/components/forms/form.component';

@Component({
  selector: 'app-resolution-form',
  templateUrl: './resolution-form.component.html',
  styleUrls: ['./resolution-form.component.scss']
})
export class ResolutionFormComponent extends FormComponent implements OnInit, AfterViewInit {

  @ViewChild('editorHeader') editorHeader: jqxEditorComponent;
  @ViewChild('editorHeader2') editorHeader2: jqxEditorComponent;
  @ViewChild('footline1') footline1: jqxEditorComponent;
  @ViewChild('footline2') footline2: jqxEditorComponent;
  @ViewChild('footline3') footline3: jqxEditorComponent;
  @ViewChild('footline4') footline4: jqxEditorComponent;
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('exchangeRateValue') exchangeRateValue: ElementRef;
  currency: Currency[]= [];
  aDocuments: AccountingDocuments[]= [];
  pointsOfSale: BranchOffice[]= [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private currSys: CurrencySysService,
              private resSer: ResolutionsService,
              private pointOfSer: BranchOfficeService,
              public spinner: NgxSpinnerService,
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
        date_from         : ['2019-01-19', [Validators.required]],
        date_up           : ['2030-01-19', [Validators.required]],
        footline4         : ['<div style="text-align: center;">Resolución Nº. 18764001112603 de 22 de julio de 2020, Con Prefijo, Factura autorizada desde 1 a 1.000</div>'],
        footline2         : [''],
        footline3         : [''],
        footline1         : [''],
        headerline1       : ['<div style="text-align: center;"><b style=""><font size="3"><font color="#3366ff" style="">EMPRESA </font><font color="#ff9900" style="">DEMO</font> SA.&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); text-align: center;"><b style=""><font size="2">D.N.I. 901.091.403-2&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;">Dirección.&nbsp;</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>CEL</b>: 310 843 5431 - <b>Fijo</b>: (036) 342 3070</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>Correo</b>: demo@demo.com -<b>Sitio web</b>: <a href="https://https://ycodeaccounting.com/">https://https://ycodeaccounting.com/</a></div>'],
        headerline2       : ['<div style="font-size: 13px; text-align: center;"><b>RÉGIMEN</b>&nbsp;</div><div style="text-align: center;"><font size="1">INFO&nbsp;</font></div><div style="text-align: center;"><font size="1">IMPUESTO SOBRE LAS VENTAS (IVA)&nbsp;</font></div><div style="font-size: 13px; text-align: center;"><b>ACTIVIADA ECONÓMICA: 6201</b></div>'],
        initial_number    : [1, [Validators.required]],
        invoice_name      : ['FACTURA DE VENTA', [Validators.required]],
        prefix            : ['FE'],
        range_from        : ['1', [Validators.required]],
        range_up          : [1000, [Validators.required]],
        resolution_number : ['18760000001'],
        type_document_id  : [7, [Validators.required]],
        point_of_sale_id  : [1, [Validators.required]],
    });
  }

  get invalidCurrencyId(): boolean{
    return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
  }
  get invalidExchangeRateValue(): boolean{
    return this.customForm.get('exchange_rate_value').invalid && this.customForm.get('exchange_rate_value').touched;
  }
  get invalidNationalCurrency(): boolean{
    return this.customForm.get('national_currency').invalid && this.customForm.get('national_currency').touched;
  }
  get invalidPluralName(): boolean{
    return this.customForm.get('plural_name').invalid && this.customForm.get('plural_name').touched;
  }
  get invalidSingularName(): boolean{
    return this.customForm.get('singular_name').invalid && this.customForm.get('singular_name').touched;
  }
  get invalidDenomination(): boolean{
    return this.customForm.get('denomination').invalid && this.customForm.get('denomination').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const frm   = ts.customForm;

    ts.PutURL   = '/general/resolutions/update/';
    ts.PostURL  = '/general/resolutions/create';

    ts.resSer.getAccountingDocuments({}).subscribe((resp) => {
      ts.aDocuments  = resp;
      if(resp.length > 0) {
        frm.get('type_document_id').setValue(resp[0].id);
      }
    });

    ts.pointOfSer.getPointsOfSale({}).subscribe((resp) => {
      ts.pointsOfSale  = resp;
      if(resp.length > 0) {
        frm.get('point_of_sale_id').setValue(resp[0].id);
      }else {
				ts.goRoute('companies/pointofsale');
			}
    });

  }

	ngAfterViewInit() {
		super.ngAfterViewInit();
		this.hideSpinner();
	}

  loadData(id: any = 0): void {
    super.loadData();
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.resSer.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        date_from         : resp[0].date_from,
        date_up           : resp[0].date_up,
        footline1         : resp[0].footline1,
        footline2         : resp[0].footline2,
        footline3         : resp[0].footline3,
        footline4         : resp[0].footline4,
        headerline1       : resp[0].headerline1,
        headerline2       : resp[0].headerline2,
        initial_number    : resp[0].initial_number,
        invoice_name      : resp[0].invoice_name,
        prefix            : resp[0].prefix,
        range_from        : resp[0].range_from,
        range_up          : resp[0].range_up,
        resolution_number : resp[0].resolution_number,
        type_document_id  : resp[0].type_document_id,
        point_of_sale_id  : resp[0].point_of_sale_id,
      });
      if(ts.editorHeader) {
        ts.editorHeader.val(resp[0].headerline1);
      }
      if(ts.editorHeader2) {
        ts.editorHeader2.val(resp[0].headerline2);
      }
      if(ts.footline1) {
        ts.footline1.val(resp[0].footline1);
      }
      if(ts.footline2) {
        ts.footline2.val(resp[0].footline2);
      }
      if(ts.footline3) {
        ts.footline3.val(resp[0].footline3);
      }
      if(ts.footline4) {
        ts.footline4.val(resp[0].footline4);
      }
      ts.fullLoad();
    });
  }

  onResetForm(form: FormGroup): void {
    super.onResetForm(form);
    this.customForm.setValue({
      date_from         : '2019-01-19',
      date_up           : '2030-01-19',
      footline4         : '<div style="text-align: center;">Resolución Nº. 18764001112603 de 22 de julio de 2020, Con Prefijo, Factura autorizada desde 1 a 1.000</div>',
      footline2         : '',
      footline3         : '',
      footline1         : '',
	    headerline1       : '<div style="text-align: center;"><b style=""><font size="3"><font color="#3366ff" style="">EMPRESA </font><font color="#ff9900" style="">DEMO</font> SA.&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); text-align: center;"><b style=""><font size="2">D.N.I. 901.091.403-2&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;">Dirección.&nbsp;</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>CEL</b>: 310 843 5431 - <b>Fijo</b>: (036) 342 3070</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>Correo</b>: demo@demo.com -<b>Sitio web</b>: <a href="https://https://ycodeaccounting.com/">https://https://ycodeaccounting.com/</a></div>',
		headerline2       : '<div style="font-size: 13px; text-align: center;"><b>RÉGIMEN</b>&nbsp;</div><div style="text-align: center;"><font size="1">INFO&nbsp;</font></div><div style="text-align: center;"><font size="1">IMPUESTO SOBRE LAS VENTAS (IVA)&nbsp;</font></div><div style="font-size: 13px; text-align: center;"><b>ACTIVIADA ECONÓMICA: 6201</b></div>',
      initial_number    : '1',
      invoice_name      : 'FACTURA DE VENTA',
      prefix            : 'FE',
      range_from        : '1',
      range_up          : 1000,
      resolution_number : '18760000001',
      type_document_id  : this.aDocuments[0].id,
      point_of_sale_id  : this.pointsOfSale[0].id,
    });
  }

  onCurrencyChange(id: any): void{
    const ts  = this;
    if(id){
      const curr = ts.currency.find( currency => currency.id === id);
      const local = ts.customForm.get('national_currency').value;
      if (!local){
        ts.activeLoading();
        ts.currSys.getChangeLocal({ source: curr.CurrencyISO}).
                  subscribe((resp) => {
                    ts.disabledLoading();
                    ts.exchangeRateValue.nativeElement.value = resp[0].value;
                  });
      }
    }
  }

  onBeforeSave(frm: FormGroup) {
    const ts  = this;
    if(ts.editorHeader) {
        frm.get('headerline1').setValue(ts.editorHeader.val());
    }
    if(ts.editorHeader2) {
        frm.get('headerline2').setValue(ts.editorHeader2.val());
    }
    if(ts.footline1) {
        frm.get('footline1').setValue(ts.footline1.val());
    }
    if(ts.footline2) {
        frm.get('footline2').setValue(ts.footline2.val());
    }
    if(ts.footline3) {
        frm.get('footline3').setValue(ts.footline3.val());
    }
    if(ts.footline4) {
        frm.get('footline4').setValue(ts.footline4.val());
    }
  }

}
