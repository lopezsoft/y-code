<?php

namespace App\Models\Sales;


use App\Models\Company;
use Illuminate\Support\Facades\DB;

class CustomersSale
{
	static function create(Company $company, $records, $sale_id): void
	{
		$db             = $company->database_name.".";
		if($records->customer_id > 0) {
			$data       = [
					'customer_id'       => $records->customer_id,
					'sale_id'           => $sale_id,
			];
			DB::table($db.'customers_sale')->insert($data);
		}
	}
}
