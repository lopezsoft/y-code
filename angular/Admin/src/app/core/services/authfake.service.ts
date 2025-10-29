import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiServerService } from 'src/app/utils';
import {UserCompany} from '../../interfaces';

@Injectable({ providedIn: 'root' })
export class AuthfakeauthenticationService {
    private currentUserSubject: BehaviorSubject<UserCompany>;
    public currentUser: Observable<UserCompany>;

    constructor(
      private api: ApiServerService,
      ) {
        this.currentUserSubject = new BehaviorSubject<UserCompany>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserCompany {
        return this.api.getCurrentUser();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
