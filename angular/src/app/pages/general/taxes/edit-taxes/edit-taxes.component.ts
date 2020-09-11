import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taxes } from 'src/app/models/general-model';
import { TaxesService } from 'src/app/services/general/taxes.service';

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
              private types: TaxesService
  ){
    super(fb, msg, api, router, translate, aRouter);
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
