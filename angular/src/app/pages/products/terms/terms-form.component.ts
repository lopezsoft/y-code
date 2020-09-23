import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { Attributes, Terms } from './../../../models/products-model';
import { AttributesService, TermsService } from './../../../services/products/index';


@Component({
  selector: 'app-terms-form',
  templateUrl: './terms-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class TermsFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  @ViewChild('uploadFile') uploadFile: ElementRef;
  @ViewChild('imgUp') imgUp: ElementRef;
  // @ViewChild('imgData') imgData: ElementRef;
  attributes  : Attributes[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public termsSer: TermsService,
              public attrSer: AttributesService
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      attribute_id    : ['', [Validators.required]],
      term_name       : ['', [Validators.required, Validators.minLength(1)]],
      term_description: [''],
      term_color      : [''],
      term_img        : [''],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('term_name').invalid && this.customForm.get('term_name').touched;
  }

  get invalidAttributeId(): boolean{
    return (this.customForm.get('attribute_id').value === 0) ? true : false;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/products/terms/update/';
    ts.PostURL  = '/products/terms/create';
    ts.attrSer.getAll({}).subscribe((resp) => {
      ts.attributes = resp;
    });
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.termsSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          attribute_id      : resp[0].attribute_id,
          term_name         : resp[0].term_name,
          term_description  : resp[0].term_description,
          term_color        : resp[0].term_color,
          term_img          : resp[0].term_img,
        });
        ts.imgData          = resp[0].term_img ? resp[0].term_img : '';
      });
  }
}
