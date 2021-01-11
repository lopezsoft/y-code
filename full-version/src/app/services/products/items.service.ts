import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { Items } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(
    private api: ApiServerService
  ){}

  getAll(params: any): Observable<Items[]> {
    const ts  = this;
    return ts.api.get(`/products/items/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }


  getDataSales(params: any): Observable<Items[]> {
    const ts  = this;
    return ts.api.get(`/products/items/read/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Items[]> {
    const ts  = this;
    return ts.api.get(`/products/items/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
