import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { CurrencySys} from './../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  data: CurrencySys[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<CurrencySys[]> {
    const ts  = this;
    return ts.api.get('/general/currency/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
