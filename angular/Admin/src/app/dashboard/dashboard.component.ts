import { Component, OnInit } from '@angular/core';
import { ApiServerService } from '../utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quantityProducst  = 0;
  quantityProviders = 0;
  quantityCustomers = 0;
  quantityElectronicDocuments = 0;
  quantityPosDocuments        = 0;
  quantitySalesTotal          = 0;
  quantityTaxTotal            = 0;
  today: number     = Date.now();
  constructor(
    private api: ApiServerService
  ) {
  }

  ngOnInit(): void {
    this.onLoadProducts();
    this.onMontStatistics();
  }
  onMontStatistics() {
    const ts    = this;
    // let   io    = ts.socket;
    // const token = ts.api.getToken();

    // io.connect();
    // io.emit('sqlQuery', {
    //   sql : `CALL sp_month_statistics(${token.company[0].id}, 1)` // Documentos electronicos
    // },(err: any, result: any) => {
    //   if(!err) {
    //     ts.quantityElectronicDocuments = result[0][0].total ?? 0;
    //   }
    // });

    // let io2   = ts.socket;
    // io2.connect();
    // io2.emit('sqlQuery', {
    //   sql : `CALL sp_month_statistics(${token.company[0].id}, 2)` // Documentos POS
    // },(err: any, result: any) => {
    //   if(!err) {
    //     ts.quantityPosDocuments = result[0][0].total ?? 0;
    //   }
    // });

    // let io3   = ts.socket;
    // io3.connect();
    // io3.emit('sqlQuery', {
    //   sql : `CALL sp_month_statistics(${token.company[0].id}, 3)` // Total ventas
    // },(err: any, result: any) => {
    //   if(!err) {
    //     ts.quantitySalesTotal= result[0][0].total ?? 0;
    //   }
    // });

    // let io4   = ts.socket;
    // io4.connect();
    // io4.emit('sqlQuery', {
    //   sql : `CALL sp_month_statistics(${token.company[0].id}, 4)` // Total impuestos
    // },(err: any, result: any) => {
    //   if(!err) {
    //     ts.quantityTaxTotal = result[0][0].total ?? 0;
    //   }
    // });
  }

  onLoadProducts() {
    const ts    = this;
    // let   io    = ts.socket;
    // const token = ts.api.getToken();

    // io.connect();
    // io.emit('querySelect', {
    //   table : 'products a',
    //   fields: 'COUNT(id) AS total',
    //   where : 'a.company_id = ? AND a.state = ?  ',
    //   values: [token.company[0].id,1]
    // },(err: any, result: any) => {
    //   if(!err) {
    //     ts.quantityProducst = result[0].total;
    //     let io2   = ts.socket;
    //     io2.connect();
    //     io2.emit('querySelect', {
    //       table : 'business_customers a',
    //       fields: 'COUNT(id) AS total',
    //       where : 'a.company_id = ? AND a.state = ?  AND a.type_person_id IN (1,3)',
    //       values: [token.company[0].id,1]
    //     },(err: any, result: any) => {
    //       if(!err) {
    //         ts.quantityCustomers = result[0].total;
    //         let io3   = ts.socket;
    //         io3.connect();
    //         io3.emit('querySelect', {
    //           table : 'business_customers a',
    //           fields: 'COUNT(id) AS total',
    //           where : 'a.company_id = ? AND a.state = ? AND a.type_person_id IN (2,3)',
    //           values: [token.company[0].id, 1]
    //         },(err: any, result: any) => {
    //           if(!err) {
    //             ts.quantityProviders = result[0].total;
    //           }
    //           io.disconnect();
    //           io2.disconnect();
    //           io3.disconnect();
    //         });
    //       }
    //     });
    //   }
    // });
  }
}
