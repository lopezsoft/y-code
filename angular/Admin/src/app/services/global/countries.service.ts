import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  data: Country[] = [];
  constructor(
    private api: ApiServerService
  ) { }

  getPublicCountries(): Observable<Country[]> {
    const ts = this;
    return ts.api.get('/public/countries')
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }

  getData(): Observable<Country[]> {
    const ts = this;
    return ts.api.get('/countries')
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }
}

export interface Country {
  id: number;
  abbreviation_A2: string;
  country_name: string;
  phone_code: string;
  image: string;
  active: boolean;
}
