import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { Terms } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  constructor(
    private api: ApiServerService
  ){}

  getAll(params: any): Observable<Terms[]> {
    const ts  = this;
    return ts.api.get(`/products/terms/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Terms[]> {
    const ts  = this;
    return ts.api.get(`/products/terms/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
