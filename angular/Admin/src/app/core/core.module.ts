import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BlockUIModule } from 'ng-block-ui';

import { FooterFormComponent } from './components/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    exports: [
      FooterFormComponent,
      NgxSpinnerModule,
      BlockUIModule
    ],
    declarations: [
      FooterFormComponent
    ],
    imports: [
        CommonModule,
        NgxSpinnerModule,
        TranslateModule,
        BlockUIModule.forRoot({
            message: 'Procesando...',
        }),
    ]
})
export class CoreModule { }
