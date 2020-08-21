import { Injectable } from '@angular/core';
import { ApiServerService } from './../../utils/api-server.service';
import { map } from 'rxjs/operators';

import { JsonResponse, ErrorResponse } from './../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class ClassOfAccountingService {

  constructor(private Api: ApiServerService) { }

   getData(params: any){
    const me	= this;

    // me.Api.get('/accounting/clasofaccounts/read').subscribe((resp: JsonResponse) => {
    //   console.log(resp.records);
    // }, (err: ErrorResponse) => {
    //   console.log(err.error);
    // });
    return me.Api.get('/accounting/clasofaccounts/read', params);
  }
}

export interface ClassOfAccounting {
  id: number;
  name: string;
  number: number;
  state: number;
}
