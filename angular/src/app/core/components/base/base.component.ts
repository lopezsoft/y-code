import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ApiServerService } from './../../../utils/api-server.service';

@Injectable()
export class BaseComponent implements OnInit {
  public loading: boolean;
  public activeLang   = 'es';
  public maskSpinner  = '';
  constructor(public api: ApiServerService,
              public router: Router,
              public translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.activeLang);
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
    // this.changeLanguage(this.activeLang);
  }

  public changeLanguage(lang: string): void {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  removeLoading(): void {
    const
      ele = document.getElementById('nb-global-spinner');
    // Ocultando la animación
    if (ele) {
      ele.classList.remove('spinner');
    }
  }

  /**
   * Redirigir a la ruta de inicio de la aplicación.
   */

  goHome(): void {
    if(this.api.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  /**
   * Redirigir a la ruta indicada.
   * @name : Nombre de la ruta
   */
  goRoute(name : string): void{
    if(this.api.isAuthenticated()) {
      this.router.navigate([`/${name}`]);
    }
  }

  activeLoading(): void {
    this.loading  = true;
  }

  disabledLoading(): void {
    this.loading  = false;
  }



}
