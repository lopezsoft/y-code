import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { Currency} from './../../models/general-model';


@Injectable({
  providedIn: 'root'
})
export class CurrencySysService {
  data: Currency[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(): Observable<Currency[]> {
    const ts  = this;
    return ts.api.get('/general/currency/currencies')
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
