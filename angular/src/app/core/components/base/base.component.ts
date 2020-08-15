import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServerService } from './../../../utils/api-server.service';

export class BaseComponent  {
  public loading: boolean;
  constructor(public api: ApiServerService, public router: Router) {
  }

  removeLoading(): void {
    let
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
