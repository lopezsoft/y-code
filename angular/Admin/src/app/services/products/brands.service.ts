import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { Brands } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(
    private api: ApiServerService
  ){}

  getAll(): Observable<Brands[]> {
    const ts  = this;
    return ts.api.get(`/products/brands/read/all`)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Brands[]> {
    const ts  = this;
    return ts.api.get(`/products/brands/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
