import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../utils';

import { FormComponent } from './../../core/components/forms/form.component';

import { BrandsService } from './../../services/products/index';

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class BrandsFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;

  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public brands: BrandsService
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      brand_name  : ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('brand_name').invalid && this.customForm.get('brand_name').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar marca';
    ts.PutURL   = '/products/brands/update/';
    ts.PostURL  = '/products/brands/create';
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.brands.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          brand_name    : resp[0].brand_name,
        });
      });
  }

}
