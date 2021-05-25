import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiServerService } from '../../utils/api-server.service';
import { CheckIn } from '../../models/sales-model';
import { JsonResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor( private api: ApiServerService) { }

	getCheckIn(): Observable<CheckIn> {
		return this.api.get('/sales/checkin')
			.pipe( map ((resp: JsonResponse) => {
				return resp.checkIn;
			}));
	}
}
