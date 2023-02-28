<?php

namespace App\Models\Sales;

use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\Request;
use App\Models\ReportSales;
use App\Models\Sales\SalesMaster;
use App\Models\Sales\CustomersSale;
use App\Models\Sales\UserSales;
use App\Models\Sales\MeansPaymentSale;
use App\Models\Sales\SalesCurrency;
use App\Models\Sales\SalesDetail;
use App\Models\Sales\ChargesAndDiscounts;
use App\Models\Sales\ResolutionSale;

class Sales extends MasterModel
{

	static function create(Request $request) {
		$model              = new MasterModel();
		$company            = $model->getCompany();
		$records            = json_decode($request->input('records'));
		$db                 = $company->database_name.".";
		try {
				if(isset($records)){
						$size       = 0;
						$file       = $request->file('file');
						$file2      = $request->file('file2');
						$file3      = $request->file('file3');
						$file4      = $request->file('file4');
						$file5      = $request->file('file5');
						$file6      = $request->file('file6');
						if (!is_null($file)) {
								$size       += $file->getSize();
						}
						if (!is_null($file2)) {
								$size       += $file2->getSize();
						}
						if (!is_null($file3)) {
								$size       += $file3->getSize();
						}
						if (!is_null($file4)) {
								$size       += $file4->getSize();
						}
						if (!is_null($file5)) {
								$size       += $file5->getSize();
						}
						if (!is_null($file6)) {
								$size       += $file6->getSize();
						}
						if($size > 0){
								$size   = round((($size /1024)/1024),2);
								if( $size > 2.05){ // 2 MB
										return response([
												'message'   => "El tamaño de los archivos adjuntos supera los 2 MB soportados. Tamaño adjunto: {$size} MB",
												'success'   => false,
										]);
								}

						}

						// Resolución de facturación
						$resolution     = DB::table("{$db}resolutions")
															->where("id",  $records->invoice_type_id)
															->where("active",  1)
															->first();
						if($resolution){
								DB::beginTransaction();
								$records->invoice_type_id	= $resolution->type_document_id;

								$sale_id		= SalesMaster::create($company, $resolution, $records);

								ResolutionSale::create($company, $resolution, $sale_id);

								CustomersSale::create($company, $records, $sale_id);

								UserSales::create($company, $sale_id);

								SalesCurrency::create($company, $records, $sale_id);

								MeansPaymentSale::create($company, $records, $sale_id);

								$lines      = $records->lines;
								if(count($lines) > 0){
										SalesDetail::create($company, $lines, $sale_id);
								}else{
									return $model->getErrorResponse("Error en el servidor, no hay detalle para la factura.");
								}

								ChargesAndDiscounts::create($company, $records, $sale_id);

								// Save attachment documents
								$report = new ReportSales();

								// DB::rollBack();
								DB::commit();
								$reportres  = $report->getInvoiceReport($sale_id);

                                // Actualizar inventario
                                self::updateStock($sale_id, $company);

								return response([
										'message'   => 'El documento se ha generado correctamente.',
										'success'   => true,
										'report'    => $reportres->original
								]);
						}else{
								return response([
										'message'   => 'Debe asignar el rango de facturación.',
										'success'   => false,
								]);
						}
				}
		} catch (Exception $e) {
				DB::rollBack();
				$model->getErrorResponse("{$e->getMessage()}");
		}
	}

	function read(Request $request)
	{
		$company    = $this->getCompany();
		$db  				= $company->database_name.'.';
		$query			=  DB::select("CALL {$db}`sp_select_sales_master_by_id`(?)", [$request->saleId]);
		return $this->getReponseJson($query, 1);
	}

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
