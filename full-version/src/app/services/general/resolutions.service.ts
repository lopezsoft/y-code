import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { AccountingDocuments } from './../../models/accounting-model';
import { Resolutions} from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class ResolutionsService {
  data: Resolutions[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getAccountingDocuments(params: any): Observable<AccountingDocuments[]> {
    const ts  = this;
    return ts.api.get('/documenttype', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<Resolutions[]> {
    const ts  = this;
    return ts.api.get('/general/resolutions/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
