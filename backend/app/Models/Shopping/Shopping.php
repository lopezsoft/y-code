<?php

namespace App\Models\Shopping;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;

class Shopping extends MasterModel
{
    use HasFactory;
		function create(Request $request) {
			DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $company    = $this->getCompany();
						$lines			= json_decode($request->lines) ?? [];
            if($company){
                $data       = [
                    'admission_date'    => $this->realDate($request->admission_date),
                    'discount'          => $request->discount ?? 0,
                    'freight'           => $request->freight ?? 0,
                    'invoice_nro'       => $request->invoice_nro,
                    'vat'               => $request->vat ?? 0,
                    'rfte'              => $request->rfte ?? 0,
                    'notes'             => $request->notes ?? null,
                    'pay_day'           => $this->realDate($request->pay_day),
                    'payment_method_id' => $request->payment_id,
                    'point_of_sale_id'  => $request->point_of_sale_id,
                    'provider_id'       => $request->provider_id,
                    'sub_total'         => $request->sub_total ?? 0,
                    'total'             => $request->total ?? 0,
                    'state'             => 1,
                    'closed'            => 0,
                ];

                $db     =  $company->database_name.".";

								$table      = "{$db}invoices";
								$id         = DB::table($table)->insertGetId($data);
								$this->audit($user->id, $ip, $table, 'INSERT', $data);

								foreach ($lines as $line) {
									$data       = [
                    'invoice_id'        => $id,
                    'product_id'        => $line->id,
                    'tax_sale_id'       => $line->tax_sales_id,
                    'tax_bill_id'       => $line->tax_bill_id,
                    'batch'             => $line->batch ?? NULL,
                    'amount'            => $line->quantity,
                    'unit_cost'         => $line->purchase_cost,
                    'freight'           => $line->freight ?? 0,
                    'discount'          => $line->discount ?? 0,
                    'total_cost'        => $line->total,
                    'sale_price'        => $line->sale_price,
                    'admission_date'    => $this->realDate($request->admission_date),
                    'fabrication_date'  => $line->fabrication_date ?? null,
                    'expiration_date'   => $line->expiration_date ?? null,
                    'vat_included'      => $line->vat_included,
									];
									$table      = "{$db}invoice_detail";
									$result     = $this->insertData($data, $table, $ip);
								}

                if($request->warehouse_id > 0) {

                    $data       = [
                        'bill_id'       => $id,
                        'warehouse_id'  => $request->warehouse_id
                    ];
                    $this->insertData($data, "{$db}warehouse_inventory", $ip);

                    $tb     = "{$db}invoices";
                    $data   = DB::table($tb)
                            ->where('id', $id)
                            ->first();
                    $result =  $this->getReponseJson($data, 1);
                }else{
									$data['id']	= $id;
                  $result     = $this->getReponseJson($data, 1);
                }
                DB::commit();
                return $result;
            }else{
                return $this->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $this->getErrorResponse($e->getMessage());
        }
		}

		public function createDetail(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $company    = $this->getCompany();
            $records    = json_decode($request->records);
            if($company){
                $data       = [
                    'invoice_id'        => $records->invoice_id,
                    'product_id'        => $records->product_id,
                    'tax_sale_id'       => $records->tax_sale_id,
                    'tax_bill_id'       => $records->tax_bill_id,
                    'batch'             => $records->batch,
                    'amount'            => $records->amount,
                    'unit_cost'         => $records->unit_cost,
                    'freight'           => $records->freight,
                    'total_cost'        => $records->total_cost,
                    'sale_price'        => $records->sale_price,
                    'admission_date'    => $records->admission_date,
                    'fabrication_date'  => $records->fabrication_date,
                    'expiration_date'   => $records->expiration_date,
                    'vat_included'      => $records->vat_included,
                ];
                $table      = $company->database_name.".invoice_detail";
                $result     = $this->insertData($data, $table, $ip);
                DB::commit();
                return $result;
            }else{
                DB::rollBack();
                return $this->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $this->getErrorResponse($e->getMessage());
        }
    }

		public function selectDetailId($id, Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $query  = $request->input('query');
        if($company){
            $db     = $company->database_name.'.';
            $query  = DB::select("SELECT a.*, b.internal_code, b.product_name,
                    b.barcode, b.perishable, c.rate_value AS tax_sale,
                    d.rate_value AS tax_bill, f.winery_name
                    FROM {$db}invoice_detail AS a
                    LEFT JOIN {$db}products AS b ON a.product_id = b.id
                    LEFT JOIN {$db}tax_rates AS c ON a.tax_sale_id = c.id
                    LEFT JOIN {$db}tax_rates AS d ON a.tax_bill_id = d.id
                    LEFT JOIN {$db}warehouse_inventory AS e ON e.bill_id = a.invoice_id
                    LEFT JOIN {$db}warehouse AS f ON e.warehouse_id = f.id
                    WHERE a.id = {$id}");
            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectDetail($id, Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $query  = $request->input('query');
        if($company){
            $db     = $company->database_name.'.';
            $query  = DB::select("CALL {$db}sp_select_invoice_detail({$id})");
            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function select(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $uid    = $request->uid;
        $query  = $request->input('query');
        if($company){
            $table  = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = "a.state = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.full_name, c.branch_name, e.winery_name
                FROM {$table}invoices AS a
                LEFT JOIN {$table}persons AS b ON a.provider_id = b.id
                LEFT JOIN {$table}branch_offices AS c ON a.point_of_sale_id = c.id
                LEFT JOIN {$table}warehouse_inventory AS d ON d.bill_id = a.id
                LEFT JOIN {$table}warehouse AS e ON d.warehouse_id = e.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                FROM {$table}invoices AS a
                LEFT JOIN {$table}persons AS b ON a.provider_id = b.id
                LEFT JOIN {$table}branch_offices AS c ON a.point_of_sale_id = c.id
                LEFT JOIN {$table}warehouse_inventory AS d ON d.bill_id = a.id
                LEFT JOIN {$table}warehouse AS e ON d.warehouse_id = e.id";

            $searchFields = ['a.invoice_nro','b.full_name', 'c.branch_name', 'e.winery_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where,'a.id DESC');
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
				$lines			= json_decode($records->lines) ?? [];
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
				$user				= auth()->user();
				try {
					DB::beginTransaction();
					if($company){
						$db								= "{$company->database_name}.";
						$records->id    = $id;
						$data       = [
							'admission_date'    => $this->realDate($records->admission_date),
							'discount'          => $records->discount ?? 0,
							'freight'           => $records->freight ?? 0,
							'invoice_nro'       => $records->invoice_nro,
							'vat'               => $records->vat ?? 0,
							'rfte'              => $records->rfte ?? 0,
							'notes'             => $records->notes ?? null,
							'pay_day'           => $this->realDate($records->pay_day),
							'payment_method_id' => $records->payment_id,
							'point_of_sale_id'  => $records->point_of_sale_id,
							'provider_id'       => $records->provider_id,
							'sub_total'         => $records->sub_total ?? 0,
							'total'             => $records->total ?? 0,
						];

						$table      = "{$db}invoices";
						DB::table($table)
													->where('id',$id)
													->update($data);
						$this->audit($user->id, $ip, $table, 'UPDATE', $data);

						foreach ($lines as $line) {
							$data       = [
								'invoice_id'        => $id,
								'product_id'        => $line->id,
								'tax_sale_id'       => $line->tax_sales_id,
								'tax_bill_id'       => $line->tax_bill_id,
								'batch'             => $line->batch ?? NULL,
								'amount'            => $line->quantity,
								'unit_cost'         => $line->purchase_cost,
								'freight'           => $line->freight ?? 0,
								'discount'          => $line->discount ?? 0,
								'total_cost'        => $line->total,
								'sale_price'        => $line->sale_price,
								'admission_date'    => $this->realDate($records->admission_date),
								'fabrication_date'  => $line->fabrication_date ?? null,
								'expiration_date'   => $line->expiration_date ?? null,
								'vat_included'      => $line->vat_included,
							];
							$table      = "{$db}invoice_detail";
							$detail_id	= $line->detail_id ?? 0;
							if($detail_id > 0){
								DB::table($table)
													->where('id',$detail_id)
													->update($data);
									$this->audit($user->id, $ip, $table, 'UPDATE', $data);
							}else {
								$this->insertData($data, $table, $ip);
							}
						}

						if($records->warehouse_id > 0) {

							$tb     = "{$db}warehouse_inventory";
							$result	= DB::table($tb)
												->where('bill_id', $id)
												->first();
							if($result) {
								$data       = [
										'warehouse_id'  => $records->warehouse_id
								];
								DB::table($tb)
										->where('id', $result->id)
										->update($data);

							}else{
								$data       = [
										'bill_id'       => $id,
										'warehouse_id'  => $records->warehouse_id
								];
								$this->insertData($data, $tb, $ip);
							}
						}
						DB::commit();
						return	$this->getReponseJson($records, 1);
					}else{
						return $model->getErrorResponse('Error en el servidor.');
					}
				} catch (Exception $e) {
					DB::rollback();
					return $this->getErrorResponse($e->getMessage());
				}
    }

    public function updateDetail($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.invoice_detail';
            $records->id    = $id;
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function deleteDetail($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.invoice_detail';
            $records = [
                'id'    => $id,
            ];
            return   $model->deleteData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.invoices';
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }
}
