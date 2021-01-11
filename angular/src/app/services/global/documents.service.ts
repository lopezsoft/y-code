import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';

import { TypeOrganization } from 'src/app/models/companies-model';
import { TaxLevel, TaxRegime, IdentityDocuments, TimeLimits, MeansPayment, PaymentMethods} from '../../models/general-model';

import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(
    private api: ApiServerService
  ) { }

  getTimeLimits(params: any): Observable<TimeLimits[]> {
    const ts  = this;
    return ts.api.get('/timelimits', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getPaymentMethods(params: any): Observable<PaymentMethods[]> {
    const ts  = this;
    return ts.api.get('/paymentmethods', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getMeansPayment(params: any): Observable<MeansPayment[]> {
    const ts  = this;
    return ts.api.get('/meanspayment', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getTypeOrganization(params: any): Observable<TypeOrganization[]> {
    const ts  = this;
    return ts.api.get('/typeorganization', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getIdentityDocuments(params: any): Observable<IdentityDocuments[]> {
    const ts = this;
    return ts.api.get('/identitydocuments', params)
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }

  getTaxLevel(params: any): Observable<TaxLevel[]> {
    const ts = this;
    return ts.api.get('/taxlevel', params)
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }

  getTaxRegime(params: any): Observable<TaxRegime[]> {
    const ts = this;
    return ts.api.get('/taxregime', params)
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }
}
