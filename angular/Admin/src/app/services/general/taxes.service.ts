import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { Taxes  } from './../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class TaxesService {
  data: Taxes[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Taxes[]> {
    const ts  = this;
    return ts.api.get('/general/taxes/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
