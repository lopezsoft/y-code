import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { Software} from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  data: Software[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Software[]> {
    const ts  = this;
    return ts.api.get('/settings/software/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
