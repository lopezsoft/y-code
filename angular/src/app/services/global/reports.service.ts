import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';


import { ApiServerService, MessagesService } from '../../utils/index';

import { Sales } from './../../models/reports-model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(
    private api: ApiServerService,
    private msg: MessagesService,
  ) { }

  getSales(params: any): Observable<Sales[]> {
    const ts  = this;
    return ts.api.get('/reports/sales', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  onInvoice(ele: Sales)  {
    const ts = this;
    return ts.api.post(`/reports/invoice`, {
        pdbId       : ele.id,
        invoiceNro  : ele.invoice_nro,
    }).pipe( map ( (resp: JsonResponse) => {
      if(resp.success){
        ts.msg.toastMessage('Generado correctamente', resp.message);
      }else{
        ts.msg.toastMessage('Error', resp.message, 4);
      }
      return resp;
    }));
  }

  onSendMail(ele: Sales) {
    const ts = this;
    return ts.api.post(`/sendMail/${ ele.id }`)
    .pipe( map ( (resp: JsonResponse) => {
      if(resp.success){
        ts.msg.toastMessage('Enviado correctamente', resp.message);
      }else{
        ts.msg.toastMessage('Error', resp.message, 4);
      }
      return resp;
    }));
  }

}
