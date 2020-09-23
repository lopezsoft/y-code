/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';
import { NgSelectConfig } from '@ng-select/ng-select';

//Services
import { TranslateService } from '@ngx-translate/core';
import { ApiServerService } from './utils/api-server.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  public activeLang = 'es';
  constructor(private api: ApiServerService, private router: Router,
    private translate: TranslateService,
    private iconsLibrary: NbIconLibraries,
    private config: NgSelectConfig
    ) {
    this.config.appendTo = 'body';
    this.translate.setDefaultLang(this.activeLang);
    this.iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconsLibrary.registerFontPack('fab', { packClass: 'fab', iconClassPrefix: 'fa' });
    this.iconsLibrary.setDefaultPack('fas');
    this.iconsLibrary.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
    this.iconsLibrary.setDefaultPack('font-awesome'); // <---- set as default
  }

  ngOnInit(): void {
    if(!this.api.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }


}
