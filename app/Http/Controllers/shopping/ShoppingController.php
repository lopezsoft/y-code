<?php

namespace App\Http\Controllers\Shopping;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use Exception;
use Illuminate\Support\Facades\DB;

class ShoppingController extends Controller
{
    public function createDetail(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
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
                $result     = $model->insertData($data, $table, $ip);
                DB::commit();
                return $result;
            }else{
                DB::rollBack();
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $model->getErrorResponse($e->getMessage());
        }
    }
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $data       = [
                    'admission_date'    => $request->admission_date,
                    'discount'          => $request->discount ?? 0,
                    'freight'           => $request->freight ?? 0,
                    'invoice_nro'       => $request->invoice_nro,
                    'vat'               => $request->vat ?? 0,
                    'rfte'              => $request->rfte ?? 0,
                    'notes'             => $request->notes ?? null,
                    'pay_day'           => $request->pay_day,
                    'payment_id'        => $request->payment_id,
                    'point_of_sale_id'  => $request->point_of_sale_id,
                    'provider_id'       => $request->provider_id,
                    'sub_total'         => $request->sub_total ?? 0,
                    'total'             => $request->total ?? 0,
                    'state'             => 1,
                    'closed'            => 0,
                ];

                $db     =  $company->database_name.".";

                if($request->warehouse_id > 0) {
                    $table      = "{$db}invoices";
                    $id         = DB::table($table)->insertGetId($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);

                    $data       = [
                        'bill_id'       => $id,
                        'warehouse_id'  => $request->warehouse_id
                    ];
                    $model->insertData($data, "{$db}warehouse_inventory", $ip);

                    $tb     = "{$db}invoices";
                    $data   = DB::table($tb)
                            ->where('id', $id)
                            ->first();
                    $result =  $model->getReponseJson($data, 1);
                }else{
                    $table      = "{$db}invoices";
                    $result     = $model->insertData($data, $table, $ip);
                }
                DB::commit();
                return $result;
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $model->getErrorResponse($e->getMessage());
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
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.invoices';
            $records->id    = $id;
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
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
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
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
