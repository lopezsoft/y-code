import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { TypeOrganization } from './../../models/companies-model';

@Injectable({
  providedIn: 'root'
})
export class TypeOrganizationService {
  data: TypeOrganization[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<TypeOrganization[]> {
    const ts  = this;
    return ts.api.get('/typeorganization', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}

