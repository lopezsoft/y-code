import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { Attributes } from './../../../models/products-model';
import { AttributesService } from './../../../services/products/index';


@Component({
  selector: 'app-attributes-form',
  templateUrl: './attributes-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class AttributesFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  attributes : Attributes[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public atSer: AttributesService
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      attribute_name   : ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('attribute_name').invalid && this.customForm.get('attribute_name').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.PutURL   = '/products/attributes/update/';
    ts.PostURL  = '/products/attributes/create';
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.atSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          attribute_name     : resp[0].attribute_name,
        });
      });
  }

}
