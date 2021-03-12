import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccessToken } from './../interfaces/access-token.interface';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  private url: string;
  private appUrl: string;
  private apiJwt: string;
  constructor(private http: HttpClient) {
    this.url    = environment.APIURL;
    this.appUrl = environment.APPURL;
    this.apiJwt = environment.APIJWT;
  }

  private getHeaders(): HttpHeaders{
    const
      headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    return  headers;
  }

  delete(query: string, params: any = {}) {
    const me = this;
    return me.http.delete(`${ me.url }${ query }`, { headers : me.getHeaders(), params });
  }

  post(query: string, body: any = {}, token: boolean = false) {
    const me = this;
    return me.http.post(`${ me.url }${ query }`, body, { headers : me.getHeaders()});
  }

  put(query: string, body: any, token: boolean = false) {
    const me = this;
    return me.http.put(`${ me.url }${ query }`, body, { headers : me.getHeaders()});
  }

  get(query: string, exParams: any = {}) {
    const me = this;
    return me.http.get(`${me.url}${ query }`, { headers : me.getHeaders(), params: exParams });
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
