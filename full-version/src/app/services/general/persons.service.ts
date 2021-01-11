import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { TimeLimit, MeansPayment, Persons, TypePersons} from '../../models/general-model';


@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  data: Persons[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(params: any): Observable<Persons[]> {
    const ts  = this;
    return ts.api.get('/persons/read', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));

  }

  getCustomersAll(): Observable<Persons[]> {
    const ts  = this;
    return ts.api.get('/persons/customers/all')
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));

  }

  getCustomers(params: any): Observable<Persons[]> {
    const ts  = this;
    return ts.api.get('/persons/customers', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));

  }

  getTypePersons(params: any): Observable<TypePersons[]> {
    const ts  = this;
    return ts.api.get('/typepersons', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getTimeLimit(params: any): Observable<TimeLimit[]> {
    const ts  = this;
    return ts.api.get('/timelimit', params)
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

  getTypePersonsCustomers(params: any): Observable<TypePersons[]> {
    const ts  = this;
    return ts.api.get('/typepersons/customers', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }

  getProviders(params: any): Observable<Persons[]> {
    const ts  = this;
    return ts.api.get('/persons/providers', params)
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));

  }
}
