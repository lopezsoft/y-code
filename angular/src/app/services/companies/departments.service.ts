import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { Departments } from '../../models/companies-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  data: Departments[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Departments[]> {
    const ts  = this;
    return ts.api.get('/companies/departments/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
