import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlockUIModule } from 'ng-block-ui';

import { FooterFormComponent } from './components/forms';
import { TranslateModule } from '@ngx-translate/core';
import {NgFallimgModule} from 'ng-fallimg';
import {ExodolibsModule} from 'exodolibs';

@NgModule({
    exports: [
      FooterFormComponent,
      NgxSpinnerModule,
      BlockUIModule,
      TranslateModule,
      NgFallimgModule,
      ExodolibsModule
    ],
    declarations: [
      FooterFormComponent
    ],
    imports: [
        CommonModule,
        NgxSpinnerModule,
        TranslateModule.forRoot({
          defaultLanguage: 'es',
        }),
        ExodolibsModule,
        BlockUIModule.forRoot({
            message: 'Procesando...',
        }),
        NgFallimgModule.forRoot({
          default: 'assets/avatars/no-image.png',
          user: 'assets/avatars/unknown_img.png',
          product: 'assets/img/Product_32px.png',
        }),
    ]
})
export class CoreModule { }
