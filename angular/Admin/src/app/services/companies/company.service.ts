import { Injectable } from '@angular/core';
import { JsonResponse } from './../../interfaces';
import { ApiServerService } from './../../utils';
import { Company } from './../../models/companies-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  data: Company[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getTestData(params: any = {}): Observable<Company[]> {
    const ts  = this;
    return ts.api.get('/companies/company/test', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
  getData(params: any = {}): Observable<Company[]> {
    const ts  = this;
    return ts.api.get('/company/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
