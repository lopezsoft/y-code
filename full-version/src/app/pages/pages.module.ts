import { NgModule } from '@angular/core';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    jqxGridModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
