import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FooterFormComponent } from './components/forms/footer-form/footer-form.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
	exports: [FooterFormComponent],
  declarations: [FooterFormComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    TranslateModule,
  ]
})
export class CoreModule { }
