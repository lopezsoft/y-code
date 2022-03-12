import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiServerService } from '../../utils/api-server.service';
import { CheckIn, SaleDetailInterface, SaleInterface } from '../../models/sales-model';
import { JsonResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor( private api: ApiServerService) { }

	getSaleDetail(saleId: number): Observable<SaleDetailInterface[]> {
		return this.api.get('/sales/detail/read', {saleId})
			.pipe(map((resp: JsonResponse) => {
				return resp.records;
			}));
	}

	getSaleId(saleId: number): Observable<SaleInterface[]>{
		return this.api.get('/sales/read', {saleId})
			.pipe(map((resp: JsonResponse) => {
				return resp.records;
			}));
	}

	getCheckIn(): Observable<CheckIn> {
		return this.api.get('/sales/checkin')
			.pipe( map ((resp: JsonResponse) => {
				return resp.checkIn;
			}));
	}
}
