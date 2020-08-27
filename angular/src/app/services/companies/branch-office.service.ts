import { Injectable } from '@angular/core';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  constructor(private Api: ApiServerService) { }

  getData(params: any){
    const me	= this;

    // me.Api.get('/accounting/clasofaccounts/read').subscribe((resp: JsonResponse) => {
    //   console.log(resp.records);
    // }, (err: ErrorResponse) => {
    //   console.log(err.error);
    // });
    return me.Api.get('/companies/branchoffice/read', params);
  }

}

export interface BranchOffice{

}
