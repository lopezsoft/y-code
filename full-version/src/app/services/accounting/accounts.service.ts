import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from './../../interfaces/index';
import { Accounts } from './../../models/accounting-model';
import { ApiServerService } from './../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  data: Accounts[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getMasterAccounts(params: any): Observable<Accounts[]> {
    const ts  = this;
    return ts.api.get(`/accounting/accounts/read/masteraccounts`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getsubAccounts(params: any): Observable<Accounts[]> {
    const ts  = this;
    return ts.api.get(`/accounting/accounts/read/subaccounts`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getDataAll(params: any): Observable<Accounts[]> {
    const ts  = this;
    return ts.api.get(`/accounting/accounts/read/subaccounts`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Accounts[]> {
    const ts  = this;
    return ts.api.get(`/accounting/accounts/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
