import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IdentityDocuments, IdentityDocumentsService } from 'src/app/services/global';

@Component({
  selector: 'app-edit-identitydocs',
  templateUrl: './edit-identitydocs.component.html',
  styleUrls: ['./edit-identitydocs.component.scss']
})
export class EditIdentitydocsComponent extends FormComponent implements OnInit{
  @ViewChild('focusElement') focusElement: ElementRef;
  model: IdentityDocuments;

  constructor(public fb: FormBuilder,
      public msg: MessagesService,
      public api: ApiServerService,
      public router: Router,
      public translate: TranslateService,
      public aRouter: ActivatedRoute,
      private types: IdentityDocumentsService
  ){
  super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      code                 : ['', [Validators.required, Validators.minLength(1)] ],
      document_name        : ['', [Validators.required, Validators.minLength(3)] ],
      abbrev               : ['', [Validators.required, Validators.minLength(1)] ],
      active               : ['', [Validators.required, Validators.minLength(1)] ],
    });
  }

  get invalidCode(): boolean{
    return this.customForm.get('code').invalid && this.customForm.get('code').touched;
  }
  get invalidDocumentName(): boolean{
    return this.customForm.get('document_name').invalid && this.customForm.get('document_name').touched;
  }
  get invalidAbbrev(): boolean{
    return this.customForm.get('abbrev').invalid && this.customForm.get('abbrev').touched;
  }
  get invalidActive(): boolean{
    return this.customForm.get('active').invalid && this.customForm.get('active').touched;
  }
  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    ts.title  = 'Crear/Editar moneda';
    ts.model = {
      id: 0,
      abbrev: '',
      active: 0,
      code: '',
      document_name: '',
      state: 1
    };
    ts.PutURL   = '/general/identitydocs/update/';
    ts.PostURL  = '/general/identitydocs/create';
  }


  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    const lang  = ts.translate;
    ts.editing  = true;

    ts.types.getData({uid: id}).subscribe((resp) => {
      this.model = resp[0];
    });
  }
}
