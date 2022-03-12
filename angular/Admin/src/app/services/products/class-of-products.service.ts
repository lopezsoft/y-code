import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { ClassOfProducts } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class ClassOfProductsService {
  constructor(
    private api: ApiServerService
  ){}

  getData(): Observable<ClassOfProducts[]> {
    const ts  = this;
    return ts.api.get(`/products/class`)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
