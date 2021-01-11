import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { Attributes } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {
  constructor(
    private api: ApiServerService
  ){}

  getAll(params: any): Observable<Attributes[]> {
    const ts  = this;
    return ts.api.get(`/products/attributes/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Attributes[]> {
    const ts  = this;
    return ts.api.get(`/products/attributes/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
