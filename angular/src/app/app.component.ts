/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { TranslateService } from '@ngx-translate/core';
import { ApiServerService } from './utils/api-server.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public activeLang = 'es';
  constructor(private api: ApiServerService, private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    if(!this.api.isAuthenticated()) {
      this.router.navigate(['/login']);
    }

    this.changeLanguage(this.activeLang);
  }

  public changeLanguage(lang: string): void {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
