import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {APIURL, APPURL, APIJWT} from '../utils/utils';
import { AccessToken } from './../interfaces/access-token.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  private url: string;
  private appUrl: string;
  private apiJwt: string;
  constructor(private http: HttpClient) {
    this.url    = APIURL;
    this.appUrl = APPURL;
    this.apiJwt = APIJWT;
  }

  private getHeaders(): HttpHeaders{
    const
      headers = new HttpHeaders()
        // .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    return  headers;
  }

  post(query: string, params: any, token: boolean = false){
    const me = this;
    return me.http.post(`${ me.url }${ query }`, params, { headers : me.getHeaders()});
  }

  get(query: string, token: boolean = false){
    const me = this;
    return me.http.get(`${me.url}${ query }`, { headers : me.getHeaders() });
  }

  getUrl(): string{
    return this.url;
  }

  getAppUrl(): string{
    return this.appUrl;
  }

  getApiJwt(): string{
    return this.apiJwt;
  }

  isAuthenticated(): boolean {
    const
      token = this.getToken();
    return (token) ? true : false;
  }

  getToken(): AccessToken{
    const
      token: AccessToken = JSON.parse(localStorage.getItem(this.getApiJwt()));
    return token;
  }
}
