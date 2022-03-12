<?php

namespace App\Models\Sales;

use App\Models\Company;
use Illuminate\Support\Facades\DB;

class ResolutionSale
{
	static function create(Company $company, $resolution, $sale_id)
	{
		$db       	= $company->database_name.".";
		$data       = [
			'resolution_id'   => $resolution->id,
			'sale_id'       	=> $sale_id,
		];
		DB::table($db.'resolution_sale')->insert($data);
	}
}
