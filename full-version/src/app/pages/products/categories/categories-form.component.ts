import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';
import { ApiServerService, MessagesService } from './../../../utils';

import { FormComponent } from './../../../core/components/forms/form.component';

import { Categories } from './../../../models/products-model';
import { CategoriesService } from './../../../services/products/index';



@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class CategoriesFormComponent extends FormComponent implements OnInit, AfterViewInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  categories : Categories[] = [];
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public catSer: CategoriesService
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      category_name   : ['', [Validators.required, Validators.minLength(2)]],
      parent_id       : ['0'],
    });
  }

  get invalidName(): boolean{
    return this.customForm.get('category_name').invalid && this.customForm.get('category_name').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title    = 'Crear/Editar categoria';
    ts.PutURL   = '/products/categories/update/';
    ts.PostURL  = '/products/categories/create';

    ts.catSer.getAll({}).subscribe((resp) => {
      ts.categories = resp;
    });
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.catSer.getData({ uid: id}).
      subscribe((resp) => {
        frm.setValue({
          parent_id         : resp[0].parent_id || '0',
          // image             : resp[0].imagen,
          category_name     : resp[0].category_name,
        });
      });
  }

}
