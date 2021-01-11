import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { Certificate} from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  data: Certificate[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Certificate[]> {
    const ts  = this;
    return ts.api.get('/settings/certificate/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
