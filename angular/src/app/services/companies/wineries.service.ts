import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { wineries } from './../../models/companies-model';

@Injectable({
  providedIn: 'root'
})

export class WineriesService {
  data: wineries[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<wineries[]> {
    const ts  = this;
    return ts.api.get('/companies/wineries/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
