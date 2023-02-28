<?php

namespace App\Models\Sales;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Company;
use App\Core\MasterModel;


class SalesDetail
{
		static function create(Company $company, $lines = [], $sale_id) {
			try {
				$db    	= $company->database_name.".";
				$data   = [];
				foreach ($lines as $line) {
						$data     = [
								'sale_id'       => $sale_id,
								'product_id'    => $line->id,
								'amount'        => $line->quantity,
								'unit_price'    => $line->sale_price,
								'discount'      => $line->discount,
								'reason'        => isset($line->reason) ? $line->reason : '',
								'purchase_price'=> isset($line->purchase_cost) ? $line->purchase_cost : 0,
								'with_units'    => ($line->product_unit_id == 0) ? 0 : 1,
								'total'         => $line->total,
						];
						$detail_id = DB::table($db.'sales_detail')->insertGetId($data);

						$data   = [
								'sale_detail_id'    => $detail_id,
								'tax_rate_id'       => $line->tax_sales_id,
								'vat'               => $line->tax_sale_rate,
								'tax_value'         => $line->tax_amount,
						];
						DB::table($db.'sales_detail_taxes')->insertGetId($data);

						if($line->product_unit_id > 0){
								$data   = [
										'sale_detail_id'    => $detail_id,
										'product_unit_id'   => $line->product_unit_id,
										'base_factor'       => $line->base_factor,
										'factor'            => $line->factor,
								];
								DB::table($db.'sales_detail_units')->insertGetId($data);
						}
				}
			} catch (\Throwable $th) {
				throw $th;
			}
		}

		static function read(Request $request) {
			try {
				$model  = new MasterModel();
				$company= $model->getCompany();
				$db     = $company->database_name.'.';
				$query  = DB::select("SELECT a.id, a.sale_id, a.product_id, a.amount AS quantity, 
								a.unit_price AS sale_price, a.purchase_price, a.discount,
								a.charge, a.reason, a.total, a.active, a.with_units,
								b.internal_code, b.product_name,  b.barcode, b.perishable, 
								g.tax_value, g.vat, c.rate_value AS tax_sale, g.tax_rate_id AS tax_sales_id,
								c.decimal_rate, c.rate_value, c.is_exempt
								FROM {$db}sales_detail AS a
								LEFT JOIN {$db}products AS b ON a.product_id = b.id
								LEFT JOIN {$db}sales_detail_taxes AS g ON g.sale_detail_id = a.id
								LEFT JOIN {$db}tax_rates AS c ON g.tax_rate_id = c.id
								WHERE a.id = {$request->saleId}");
				return $model->getReponseJson($query, count($query));
			} catch (Exception $e) {
				return $model->getErrorResponse($e->getMessage());
			}
		}
}
