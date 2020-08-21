import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/core/components/forms/form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JsonResponse, ErrorResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent extends FormComponent implements OnInit {

  companieForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public api: ApiServerService,
    public msg: MessagesService,
    public router: Router,
    private translate: TranslateService
  ) {
    super(fb, msg, api, router);
    this.companieForm = this.fb.group({
      company_name                  : ['', [Validators.required, Validators.minLength(12)]],
      dni                           : ['', [Validators.required, Validators.minLength(5)]],
      dv                            : ['', [Validators.required, Validators.maxLength(2)]],
      address                       : ['', [Validators.required, Validators.minLength(2)]],
      location                      : ['', [Validators.required, Validators.minLength(2)]],
      postal_code                   : ['', [Validators.required, Validators.minLength(2)]],
      mobile                        : ['', [Validators.required, Validators.maxLength(10)]],
      phone                         : ['', [Validators.required, Validators.minLength(10)]],
      web                           : ['', [Validators.required, Validators.minLength(2)]],
      email                         : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });
  }

  ngOnInit():void{
    this.removeLoading();
  }

  // VALIDATION

  get invalidcompany_name(): boolean{
    return this.companieForm.get('company_name').invalid && this.companieForm.get('company_name').touched;
  }
  get invaliddni(): boolean{
    return this.companieForm.get('dni').invalid && this.companieForm.get('dni').touched;
  }
  get invaliddv(): boolean{
    return this.companieForm.get('dv').invalid && this.companieForm.get('dv').touched;
  }
  get invalidaddress(): boolean{
    return this.companieForm.get('address').invalid && this.companieForm.get('address').touched;
  }
  get invalidlocation(): boolean{
    return this.companieForm.get('location').invalid && this.companieForm.get('location').touched;
  }
  get invalidpostal_code(): boolean{
    return this.companieForm.get('postal_code').invalid && this.companieForm.get('postal_code').touched;
  }
  get invalidmobile(): boolean{
    return this.companieForm.get('mobile').invalid && this.companieForm.get('mobile').touched;
  }
  get invalidphone(): boolean{
    return this.companieForm.get('phone').invalid && this.companieForm.get('phone').touched;
  }
  get invalidweb(): boolean{
    return this.companieForm.get('web').invalid && this.companieForm.get('web').touched;
  }
  get invalidEmail(): boolean{
    return this.companieForm.get('email').invalid && this.companieForm.get('email').touched;
  }


  // GET PLACEHOLDERS
  get placeholdercompany_name(): string {
    return this.translate.instant('companies.company_name');
  }
  get placeholderdni(): string {
    return this.translate.instant('companies.dni');
  }
  get placeholderdv(): string {
    return this.translate.instant('companies.dv');
  }
  get placeholderaddress(): string {
    return this.translate.instant('companies.address');
  }
  get placeholderlocation(): string {
    return this.translate.instant('companies.location');
  }
  get placeholderpostal_code(): string {
    return this.translate.instant('companies.postal_code');
  }
  get placeholdermobile(): string {
    return this.translate.instant('companies.mobile');
  }
  get placeholderphone(): string {
    return this.translate.instant('companies.phone');
  }
  get placeholderimage(): string {
    return this.translate.instant('companies.image');
  }
  get placeholderemail(): string {
    return this.translate.instant('companies.email');
  }
  get placeholderweb(): string {
    return this.translate.instant('companies.web');
  }
  get placeholderSave(): string {
    return this.translate.instant('general.save');
  }


  onSave(): void {
    const me    = this.companieForm;
    const ts    = this;
    const lang  = this.translate;
    ts.activeLoading();
    if (me.invalid){
      ts.onValidateForm(me);
      ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
      ts.disabledLoading();
    }else{
      ts.api.post('/company/create', me.value)
      .subscribe((resp: JsonResponse) => {
        ts.onResetForm(me);
        ts.msg.toastMessage(lang.instant('register.messages.successfulRegistration'), resp.message, 0);
        window.location.reload();
      }, (err: ErrorResponse) => {
        ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
        ts.onValidateForm(me);
        setTimeout(() => {
          window.location.reload();
          // ts.disabledLoading();
        }, 5000);
      });
    }
  }

}
