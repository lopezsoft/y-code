import { Injectable } from '@angular/core';
import { ApiServerService } from './../../utils/api-server.service';

import { JsonResponse, ErrorResponse } from './../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class ClassOfAccountingService {

  constructor(private Api: ApiServerService) { }

   // tslint:disable-next-line: typedef
   getData(params: any){
    const me	= this;

    return me.Api.get('/accounting/clasofaccounts/read', params);
  }
}

export interface ClassOfAccounting {
  id: number;
  name: string;
  number: number;
  state: number;
}
