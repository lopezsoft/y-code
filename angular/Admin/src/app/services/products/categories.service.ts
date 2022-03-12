import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { Categories } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private api: ApiServerService
  ){}

  getAll(params: any): Observable<Categories[]> {
    const ts  = this;
    return ts.api.get(`/products/categories/read/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getChids(params: any): Observable<Categories[]> {
    const ts  = this;
    return ts.api.get(`/products/categories/childs`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getParents(params: any): Observable<Categories[]> {
    const ts  = this;
    return ts.api.get(`/products/categories/parents`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Categories[]> {
    const ts  = this;
    return ts.api.get(`/products/categories/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
