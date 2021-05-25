import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { TaxAccountingAccount  } from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class TaxAccountingAccountService {
  data: TaxAccountingAccount[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<TaxAccountingAccount[]> {
    const ts  = this;
    return ts.api.get('/general/TaxAccountingAccount/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
