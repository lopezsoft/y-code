<?php

namespace App\Models\Sales;


use App\Models\Company;
use Illuminate\Support\Facades\DB;

class SalesCurrency 
{
	static function create(Company $company, $records, $sale_id) {
		$db       	= $company->database_name.".";
		$data       = [
			'currency_id'   => $records->currency_id,
			'sale_id'       => $sale_id,
		];
		DB::table($db.'sales_currency')->insert($data);
	}
}
