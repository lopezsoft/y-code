import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencySysService {
  data: CurrencySys[] = [];
  constructor(
    private api: ApiServerService
  ) { }

  getData(): Observable<CurrencySys[]> {
    const ts = this;
    return ts.api.get('/currencysys')
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }
}

export interface CurrencySys {
  id: number;
  currency_id: number;
  exchange_rate_value: number;
  national_currency: boolean;
  plural_name: string;
  singular_name: string;
  denomination: string;
  currency_name: string;
  state: number
}
