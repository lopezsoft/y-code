import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';


import { ApiServerService, MessagesService } from '../../utils/index';

import { Shopping, ShoppingDetail } from './../../models/shopping-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor(
    private api: ApiServerService,
    private msg: MessagesService,
  ) { }

  getDetailID(id: number): Observable<ShoppingDetail[]>  {
    const ts  = this;
    return ts.api.get(`/shopping/detail/detailId/${id}`)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getDetail(id: number): Observable<ShoppingDetail[]>  {
    const ts  = this;
    return ts.api.get(`/shopping/detail/read/${id}`)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Shopping[]>  {
    const ts  = this;
    return ts.api.get('/shopping/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

}
