import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from './../../interfaces/index';
import { AccountingGroups } from './../../models/accounting-model';
import { ApiServerService } from './../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class AccountingGroupsService {

  data: AccountingGroups[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<AccountingGroups[]> {
    const ts  = this;
    return ts.api.get(`/accounting/accountinggroups/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
