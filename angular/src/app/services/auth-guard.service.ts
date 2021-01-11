import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiServerService } from './../utils/api-server.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: ApiServerService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      this.router.navigate(['/auth/login']);
    }else {
      return true;
    }
  }
}
