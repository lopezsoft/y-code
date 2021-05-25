import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { ItemsType, AccountTypes, ItemsTypeAccounts } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsTypeService {
  constructor(
    private api: ApiServerService
  ){}

  getItemTypeAccounts(params: any): Observable<ItemsTypeAccounts[]> {
    const ts  = this;
    return ts.api.get(`/products/groups/getItemTypeAccounts`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
  getAll(params: any): Observable<ItemsType[]> {
    const ts  = this;
    return ts.api.get(`/products/groups/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getType(params: any): Observable<AccountTypes[]> {
    const ts  = this;
    return ts.api.get(`/accounttypes`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<ItemsType[]> {
    const ts  = this;
    return ts.api.get(`/products/groups/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
