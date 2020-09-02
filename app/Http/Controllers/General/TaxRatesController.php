<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\core\MasterModel;
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
                $data       = [
                    'tax_gruop_id'  => $request->tax_gruop_id,
                    'rate_name'     => $request->rate_name,
                    'rate_abbre'    => $request->rate_abbre,
                    'rate_value'    => $request->rate_value,
                    'decimal_rate'  => $request->decimal_rate,
                    'state'       => 1,
                ];
                $table      = $company->database_name.".tax_rates";

                $result     = $model->insertData($data, $table, $ip);
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
                "SELECT a.*, b.name_taxe
                FROM {$table}tax_rates a
                LEFT JOIN {$table}tax_group b ON a.tax_gruop_id= b.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}tax_rates a LEFT JOIN {$table}tax_group b ON a.tax_gruop_id= b.id ";

            $searchFields = ['a.rate_name'];
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
            $table          = $company->database_name.'.tax_rates';
            $records->id    = $id;
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
