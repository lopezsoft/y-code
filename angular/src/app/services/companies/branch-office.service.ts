import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from 'src/app/interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { BranchOffice } from './../../models/companies-model';
@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  data: BranchOffice[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<BranchOffice[]> {
    const ts  = this;
    return ts.api.get('/companies/branchoffice/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getPointsOfSale(params: any): Observable<BranchOffice[]> {
    const ts  = this;
    return ts.api.get('/companies/branchoffice/read/pointofsale', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

}
