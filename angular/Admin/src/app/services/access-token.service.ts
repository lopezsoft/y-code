import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {AccessToken, UserCompany} from '../interfaces';
import {GlobalSettingsService} from './global-settings.service';
@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {
  private  token: string;
  private accessTokenString: string | null = null;
  constructor(
    public settings: GlobalSettingsService,
  ) {}
  get accessToken(): string | null {
    return this.accessTokenString;
  }
  set accessToken(token: string) {
    this.accessTokenString = token;
  }
  set currentCompany(company: UserCompany) {
    try {
      localStorage.setItem('currentCompany', JSON.stringify(company.company));
    } catch (e) {
      console.log(e);
    }
  }
  setToken(jwt: string) {
    const data: AccessToken = JSON.parse(jwt);
    this.accessToken = data.access_token;
    jwt = JSON.stringify(data);
    localStorage.setItem(environment.APIJWT, jwt);
    this.token  = jwt;
    this.currentUser = data.user;
  }

  getToken(): AccessToken {
    this.token  = localStorage.getItem(environment.APIJWT);
    return JSON.parse(this.token);
  }
  // Token ha expirado
  hasTokenExpired(): boolean {
    const
      token = this.getToken();
    if (!token) { return true; }
    const
      tokenExpirationDate = new Date(token.expires_at);
    return tokenExpirationDate < new Date();
  }

  get currentUser() {
    const ts    = this;
    const   user: any = {};
    /**
     * Set user value
     */
    if (!localStorage.getItem('currentUser')) {
      const token     = ts.getToken();
      if (token) {
        localStorage.setItem('currentUser', JSON.stringify(token.user));
      }
    }
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  set currentUser(user: UserCompany) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  upCurrentUser(data: UserCompany) {
    const   ts  = this;
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', JSON.stringify(data));
    ts.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
    return ts.currentUser;
  }
}
