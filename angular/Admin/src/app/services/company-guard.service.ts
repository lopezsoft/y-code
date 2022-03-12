import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiServerService } from '../utils/api-server.service';

@Injectable()
export class CompanyGuard implements CanActivate {

    constructor(private authService: ApiServerService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const ts = this;
        const isAuth = ts.authService.isAuthenticated();
        if (!isAuth) {
            ts.router.navigate(['/auth/login']);
        } else {
            const token = ts.authService.getToken();
            if (token.companyCreated) {
                return false;
            } else {
                return true;
            }
        }
    }
}
