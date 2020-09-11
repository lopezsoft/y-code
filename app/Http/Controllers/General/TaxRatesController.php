<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;


class TaxRatesController extends Controller
{
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $account_id = $request->account_id;
                $data       = [
                    'tax_gruop_id'          => $request->tax_gruop_id,
                    'shipping_frequency_id' => $request->shipping_frequency_id,
                    'is_exempt'             => $request->is_exempt,
                    'rate_name'             => $request->rate_name,
                    'rate_abbre'            => $request->rate_abbre,
                    'rate_value'            => $request->rate_value,
                    'decimal_rate'          => $request->decimal_rate,
                    'state'                 => 1,
                ];
                $table      = $company->database_name.".tax_rates";
                if($account_id > 0){
                    $tax_id     = DB::table($table)->insertGetId($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);

                    $table      = $company->database_name.".tax_accounting_account";
                    $data       = [
                        'tax_rate_id'       => $tax_id,
                        'account_id'        => $account_id
                    ];
                    $result     = $model->insertData($data, $table, $ip);
                }else{
                    $result     = $model->insertData($data, $table, $ip);
                }
                DB::commit();
                return $result;
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
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
                "SELECT a.*, b.name_taxe, c.name AS fecuency_name,
                if(ISNULL(d.account_id), 0, d.account_id) AS account_id, CONCAT(e.account_number,' ',TRIM(e.account_name)) account_name
                FROM {$table}tax_rates a
                LEFT JOIN {$table}tax_group AS b ON a.tax_gruop_id = b.id
                LEFT JOIN {$table}shipping_frequency AS c ON a.shipping_frequency_id = c.id
                LEFT JOIN {$table}tax_accounting_account AS d ON d.tax_rate_id = a.id
                LEFT JOIN {$table}accounting_accounts AS e ON d.account_id = e.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}tax_rates a LEFT JOIN {$table}tax_group b ON a.tax_gruop_id= b.id ";

            $searchFields = ['a.rate_name', 'b.name_taxe'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.tax_gruop_id, a.rate_value');
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        try{
            DB::beginTransaction();
            $records    = json_decode($request->input('records'));
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $account_id     = $records->account_id;
                $table          = $company->database_name.'.tax_rates';
                $records->id    = $id;
                if($account_id > 0){

                    $table      = $company->database_name.".tax_accounting_account";
                    $query      = DB::table($table)
                                    ->where(['tax_rate_id' => $id])
                                    ->first();
                    $data       = [
                        'tax_rate_id'       => $id,
                        'account_id'        => $account_id
                    ];
                    if($query){
                        $data       = (Object) [
                            'id'                => $query->id,
                            'tax_rate_id'       => $id,
                            'account_id'        => $account_id
                        ];
                        $model->updateData($data,$table, $ip);
                    }else{
                        $model->insertData($data, $table, $ip);
                    }

                    $table      = $company->database_name.'.tax_rates';
                    $result     = $model->updateData($records,$table, $ip);
                }else{
                    $result     = $model->updateData($records,$table, $ip);
                }
                DB::commit();
                return   $result;
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
        }
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.tax_rates';
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
