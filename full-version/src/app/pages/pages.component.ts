import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class PagesComponent {
  public activeLang = 'es';
  constructor (private translate: TranslateService){
    this.translate.setDefaultLang(this.activeLang);
  }

}
