<?php

namespace App\Models\Sales;
use App\Models\Company;
use Illuminate\Support\Facades\DB;

class UserSales 
{
		static function create(Company $company, $sale_id) {
			$user  			= auth()->user();
			$db       	= $company->database_name.".";
			$data       = [
				'user_id'       => $user->id,
				'sale_id'       => $sale_id,
			];
			DB::table($db.'user_sales')->insert($data);
		}
}
