import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { CurrencySys } from './../../models/general-model';

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

