import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { TranslateService } from '@ngx-translate/core';

import { FormComponent } from 'src/app/core/components/forms/form.component';

import { TypeOrganization } from 'src/app/models/companies-model';

import { ApiServerService, MessagesService } from 'src/app/utils';
import { TypeOrganizationService } from 'src/app/services/companies/type-organization.service';

@Component({
  selector: 'app-company-type-form',
  templateUrl: './company-type-form.component.html',
  styleUrls: ['./../../shared/form-layouts.component.scss']
})
export class CompanyTypeFormComponent extends FormComponent implements OnInit {
  @ViewChild('focusElement') focusElement: ElementRef;
  model: TypeOrganization;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              private types: TypeOrganizationService
  ){
    super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      description  : ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get invalidName(): boolean{
  return this.customForm.get('description').invalid && this.customForm.get('description').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar tipo de compañia';
    ts.model  = {
      id: 0,
      description: '',
      code: 0
    };
    ts.PutURL   = '/companies/companytype/update/';
    ts.PostURL  = '/companies/companytype/create';
  }

  loadData(id: any = 0): void {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;
    ts.types.getData().subscribe((resp) => {
      this.model = resp[0];
    });
  }

}
