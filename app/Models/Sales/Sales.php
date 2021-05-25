<?php

namespace App\Models\Sales;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Sales extends MasterModel
{
  use HasFactory;
	public function getCheckin(Request $request)
		{
			$company    		= $this->getCompany();
			$db  						= $company->database_name.'.';
			$currency				= "SELECT a.*, CONCAT(TRIM(b.CurrencyISO),' - ',TRIM(b.CurrencyName)) CurrencyName, b.CurrencyISO,
												b.image, b.Symbol FROM {$db}currency_sys a
												LEFT JOIN {$db}currency b ON a.currency_id = b.id
												WHERE a.state = ?";
			$currency				= DB::select($currency, [1]);

			$point_of_sales	=
                "SELECT a.*, b.country_name, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS currencyname,
                f.branch_name AS branch, f.id AS branch_id
                FROM {$db}points_of_sale AS ps
                left JOIN {$db}branch_offices AS a ON ps.child_id = a.id
                LEFT JOIN {$db}countries b ON a.country_id = b.id
                LEFT JOIN {$db}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$db}currency e ON c.currency_id = e.id
                LEFT JOIN {$db}branch_offices AS f ON (ps.parent_id = f.id AND f.is_branch = 1)
								WHERE a.state = ?";
			$point_of_sales	= DB::select($point_of_sales, [1]);

			$customers = "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
										c.accounting_account_id, c.initial_balance, c.initial_date
										FROM {$db}persons a
										LEFT JOIN {$db}type_persons AS b ON a.person_type_id = b.id
										LEFT JOIN {$db}billing_payment AS c ON c.customer_id = a.id
										WHERE a.state = ? and a.person_type_id = ? ORDER BY a.full_name";
      $customers  = DB::select($customers,[1,1]);

			$tax_rates =
                "SELECT a.*, b.name_taxe, c.name AS fecuency_name,
                if(ISNULL(d.account_id), 0, d.account_id) AS account_id, CONCAT(e.account_number,' ',TRIM(e.account_name)) account_name
                FROM {$db}tax_rates a
                LEFT JOIN {$db}tax_group AS b ON a.tax_gruop_id = b.id
                LEFT JOIN {$db}shipping_frequency AS c ON a.shipping_frequency_id = c.id
                LEFT JOIN {$db}tax_accounting_account AS d ON d.tax_rate_id = a.id
                LEFT JOIN {$db}accounting_accounts AS e ON d.account_id = e.id
								WHERE a.state = ? AND b.is_vat = ?";
			$tax_rates	= DB::select($tax_rates, [1, 1]);
			
			$means_payment	= DB::table("{$db}means_payment")->get();
			$payment_methods= DB::table("{$db}payment_methods")->get();
			$tb_time_limit	= DB::table("{$db}tb_time_limit")->get();

			return response()->json([
				"success" =>	true,
				"checkIn"	=> [
						"customers"				=> $customers,
						"currencySys"			=> $currency,
						"pointOfSales"		=> $point_of_sales,
						"paymentMethods"	=> $payment_methods,
						"meansPayment"		=> $means_payment,
						"timeLimits"			=> $tb_time_limit,
						"taxRates"				=> $tax_rates,
					]
			]);
		}
}
