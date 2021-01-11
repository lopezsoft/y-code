import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonResponse } from '../../interfaces';

import { ApiServerService } from '../../utils/api-server.service';
import { DestinationEnvironme} from '../../models/general-model';
@Injectable({
  providedIn: 'root'
})
export class DestinationEnvironmeService {
  data: DestinationEnvironme[] = [];
  constructor(
    private api: ApiServerService
  ){}

  getData(): Observable<DestinationEnvironme[]> {
    const ts  = this;
    return ts.api.get('/destenvironme')
      .pipe( map ( (resp: JsonResponse ) => {
        return resp.records;
      }));
  }
}
