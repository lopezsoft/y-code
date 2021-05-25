import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';
import { ShippingFrequency  } from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class ShippingFrequencyService {
  data: ShippingFrequency[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<ShippingFrequency[]> {
    const ts  = this;
    return ts.api.get('/shippingfrequency', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
