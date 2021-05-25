import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JsonResponse } from '../../interfaces/index';
import { MeasurementUnits, ProductsMeasurementUnits } from '../../models/products-model';
import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitsService {
  constructor(
    private api: ApiServerService
  ){}

  getBase(): Observable<MeasurementUnits[]> {
    const ts  = this;
    return ts.api.get(`/measurementunits`)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getProduct(params: any): Observable<ProductsMeasurementUnits[]> {
    const ts  = this;
    return ts.api.get(`/products/units/read/product`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getAll(params: any): Observable<MeasurementUnits[]> {
    const ts  = this;
    return ts.api.get(`/products/units/read/all`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getData(params: any): Observable<MeasurementUnits[]> {
    const ts  = this;
    return ts.api.get(`/products/units/read`, params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
