import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from './../../interfaces';


import { ApiServerService } from '../../utils/api-server.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityDocumentsService {

  data: IdentityDocuments[] = [];
  constructor(
    private api: ApiServerService
  ) { }

  getData(): Observable<IdentityDocuments[]> {
    const ts = this;
    return ts.api.get('/identitydocuments')
      .pipe(map((resp: JsonResponse) => {
        return resp.records;
      }));
  }
}

export interface IdentityDocuments {
  id: number;
  code: string;
  document_name: string;
  abbrev: string;
  active: number;
}
