import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MessagesService, ApiServerService } from 'src/app/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IdentityDocumentsService } from 'src/app/services/global';

@Component({
  selector: 'app-edit-identitydocs',
  templateUrl: './edit-identitydocs.component.html'
})
export class EditIdentitydocsComponent extends FormComponent implements OnInit{
  @ViewChild('focusElement') focusElement: ElementRef;
  constructor(public fb: FormBuilder,
      public msg: MessagesService,
      public api: ApiServerService,
      public router: Router,
      public translate: TranslateService,
      public aRouter: ActivatedRoute,
      private identDocs: IdentityDocumentsService
  ){
  super(fb, msg, api, router, translate, aRouter);
    this.translate.setDefaultLang(this.activeLang);
    this.customForm = this.fb.group({
      code                 : [''],
      document_name        : ['', [Validators.required, Validators.minLength(3)] ],
      abbrev               : ['', [Validators.required, Validators.minLength(1)] ],
      active               : [false ],
    });
  }

  get invalidDocumentName(): boolean{
    return this.customForm.get('document_name').invalid && this.customForm.get('document_name').touched;
  }
  get invalidAbbrev(): boolean{
    return this.customForm.get('abbrev').invalid && this.customForm.get('abbrev').touched;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const ts    = this;
    const lang  = ts.translate;
    ts.title    = `${lang.instant('general.createEdit')} ${lang.instant('identityDocuments.title')}`;
    ts.PutURL   = '/general/identitydocs/update/';
    ts.PostURL  = '/general/identitydocs/create';
  }


  async loadData(id: any = 0): Promise<void> {
    const ts    = this;
    const frm   = ts.customForm;
    ts.editing  = true;
    ts.identDocs.getData({uid: id}).subscribe((resp) => {
      frm.setValue({
        abbrev        : resp[0].abbrev       ,
        active        : resp[0].active       ,
        code          : resp[0].code         ,
        document_name : resp[0].document_name,
      })
    });
  }
}
