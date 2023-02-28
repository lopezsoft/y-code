<?php

namespace App\Models\Sales;

use App\Models\Company;
use Illuminate\Support\Facades\DB;

class SalesMaster
{
				
		/**
		 * create
		 *
		 * @param  mixed $company
		 * @param  mixed $resolution
		 * @param  mixed $records
		 * @return INT Id de la factura
		 */
		static function create(Company $company, $resolution, $records) {
			try {
				$db             = $company->database_name.".";
				$sale_master    = DB::table($db.'sales_master')
																->where('point_of_sale_id',$records->point_of_sale_id)
																->where('invoice_type_id',$records->invoice_type_id)
																->where('prefix',$resolution->prefix)
																->orderBy('invoice_nro','desc')
																->first();
	
				$initial_number = ($resolution->initial_number == 0) ? $resolution->range_from : $resolution->initial_number;
	
				if($sale_master){
						$invoice_nro    = $sale_master->invoice_nro + 1;
				}else{
						$invoice_nro    = $initial_number;
				}
				$invoice_date   = date('Y-m-d',strtotime(str_replace('/','-',$records->invoice_date)));
				$time           = date('H:i:s');
				$invoice_time   = $invoice_date.' '.$time;
				$data       = [
						'invoice_type_id'   => $records->invoice_type_id ,
						'point_of_sale_id'  => $records->point_of_sale_id ,
						'payment_method_id' => $records->payment_method_id ,
						'time_limit_id'     => isset($records->time_limit_id) ? $records->time_limit_id : 1,
						'invoice_nro'       => $invoice_nro ,
						'prefix'            => $resolution->prefix,
						'subtotal'          => $records->subtotal ,
						'tax_value'         => $records->vat ,
						'discount'          => $records->discount,
						'total'             => $records->total ,
						'total_allowance'   => isset($records->total_allowance) ? $records->total_allowance : 0 ,
						'total_charges'     => isset($records->total_charges) ? $records->total_charges : 0 ,
						'cash'              => isset($records->cash) ? $records->cash : 0 ,
						'payment_change'    => isset($records->payment_change) ? $records->payment_change : 0 ,
						'invoice_date'      => $invoice_date,
						'expiration_date'   => isset($records->expiration_date) ? date('Y-m-d',strtotime(str_replace('/','-',$records->expiration_date))) : $invoice_date,
						'invoice_time'      => $invoice_time,
						'notes'             => isset($records->notes) ? $records->notes : '',
				];
				return DB::table($db.'sales_master')->insertGetId($data);
			}catch (\Throwable $th) {
				throw $th;
			}	
		}
}
