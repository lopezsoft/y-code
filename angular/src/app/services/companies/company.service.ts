import { Injectable } from '@angular/core';
import { JsonResponse } from 'src/app/interfaces';
import { ApiServerService } from 'src/app/utils';
import { Company } from 'src/app/models/companies-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  data: Company[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Company[]> {
    const ts  = this;
    return ts.api.get('/company/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
