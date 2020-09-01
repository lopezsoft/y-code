import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TaxesComponent } from './general/taxes/taxes.component';
import { CurrencyComponent } from './general/currency/currency.component';

@NgModule({
  imports: [
    jqxGridModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbEvaIconsModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
