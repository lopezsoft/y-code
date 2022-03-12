<?php

namespace App\Models\Sales;

use App\Models\Company;
use Illuminate\Support\Facades\DB;

class MeansPaymentSale
{
	static  function create(Company $company, $records, $sale_id): void
	{
		$db       	= $company->database_name.".";					
		$data       = [
			'means_payment_id'  => isset($records->means_payment_id) ? $records->means_payment_id : 10,
			'sale_id'           => $sale_id,
			'value_paid'        => $records->total,
		];
		DB::table($db.'means_payment_sale')->insert($data);
	}
}
