import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FooterFormComponent } from './components/forms/footer-form/footer-form.component';
import { TranslateModule } from '@ngx-translate/core';

import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbRadioModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  exports: [FooterFormComponent],
  declarations: [FooterFormComponent],
  imports: [
    ThemeModule,
    CommonModule,
    NgxSpinnerModule,
    TranslateModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbRadioModule,
    NbEvaIconsModule,
  ]
})
export class CoreModule { }
