import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormComponent } from './../../../core/components/forms/form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from './../../../utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TaxesService } from './../../../services/general/taxes.service';

@Component({
  selector: 'app-edit-taxes',
  templateUrl: './edit-taxes.component.html'
})
export class EditTaxesComponent extends FormComponent implements OnInit{

  @ViewChild('focusElement') focusElement: ElementRef;
  constructor(public fb: FormBuilder,
              public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
              public spinner: NgxSpinnerService,
              private types: TaxesService
  ){
    super(fb, msg, api, router, translate, aRouter, spinner);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      name_taxe            : ['', [Validators.required, Validators.minLength(2)] ],
      description          : ['', [Validators.required, Validators.minLength(5)] ],
      is_vat               : [false],
    });
  }


  get invalidNameTaxe(): boolean{
    return this.customForm.get('name_taxe').invalid && this.customForm.get('name_taxe').touched;
  }
  get invalidDescription(): boolean{
    return this.customForm.get('description').invalid && this.customForm.get('description').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('taxes.title')}`;
    ts.PutURL   = '/general/taxes/update/';
    ts.PostURL  = '/general/taxes/create';
  }

  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    ts.editing  = true;

    ts.types.getData({uid: id}).subscribe((resp) => {
      this.customForm.setValue({
        name_taxe   : resp[0].name_taxe,
        description : resp[0].description,
        is_vat      : resp[0].is_vat,
      });
    });

  }

}
