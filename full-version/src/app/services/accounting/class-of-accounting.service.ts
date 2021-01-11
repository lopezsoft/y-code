import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse, ErrorResponse } from './../../interfaces/index';
import { ClassOfAccounting } from './../../models/accounting-model';
import { ApiServerService } from './../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class ClassOfAccountingService {

  data: ClassOfAccounting[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<ClassOfAccounting[]> {
    const ts  = this;
    return ts.api.get(`/accounting/clasofaccounts/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
