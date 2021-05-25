import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { ReportsHeader} from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class ReportsHeaderService {
  data: ReportsHeader[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<ReportsHeader[]> {
    const ts  = this;
    return ts.api.get('/general/reports/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
