<?php

namespace App\Models\Sales;

use App\Models\Company;
use Illuminate\Support\Facades\DB;

class ChargesAndDiscounts
{
	static function create(Company $company, $records, $sale_id) {
		$db					= $company->database_name.".";
		$charges    = [];
		$discounts  = [];

		if(isset($records->charges)){
				$charges    = $records->charges;
		}

		if ( isset( $records->discounts)){
				$discounts  = $records->discounts;
		}
		
		if(count($charges) > 0){
				$data   = [];
				foreach ($charges as $charge) {
						$data   []    = [
								'sale_id'       => $sale_id,
								'description'   => $charge->description,
								'charge_value'  => $charge->charge_value,
						];
				}
				DB::table($db.'sale_charges')->insert($data);
		}

		if(count($discounts) > 0){
				$data   = [];
				foreach ($discounts as $discount) {
						$data   []    = [
								'sale_id'       => $sale_id,
								'discount_id'   => $discount->discount_id,
								'discount_value'=> $discount->discount_value,
						];
				}
				DB::table($db.'sale_discounts')->insert($data);
		}
	}
}
