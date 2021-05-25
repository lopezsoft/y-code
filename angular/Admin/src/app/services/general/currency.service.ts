import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { Currency} from './../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  data: Currency[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Currency[]> {
    const ts  = this;
    return ts.api.get('/currency', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
