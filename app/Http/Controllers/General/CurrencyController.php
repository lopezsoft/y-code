<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;


class CurrencyController extends Controller
{
    private  $APIKEY    = "2097|tbf^pf2THM1bJ*MDFH^U_WTp1TWuMaa8";
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
                    'currency_id'             => $request->currency_id,
                    'exchange_rate_value'     => $request->exchange_rate_value,
                    'national_currency'       => $request->national_currency,
                    'plural_name'             => $request->plural_name,
                    'singular_name'           => $request->singular_name,
                    'denomination'            => $request->denomination,
                    'state'                   => 1,
                ];
                $table      = $company->database_name.".currency_sys";

                $result     = $model->insertData($data, $table, $ip);
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

    public function getChangeLocal(Request $request)
    {
        try {
            $model  = new MasterModel();
            $company= $model->getCompany();
            $db     = $company->database_name.'.';

            $table  = "{$db}currency_sys";
            $query  = DB::table($table)
                            ->where(['national_currency' => 1])
                            ->first();
            if($query){

                $table  = "{$db}currency";
                $query  = DB::table($table)
                                ->where(['id' => $query->currency_id])
                                ->first();
                if($query){
                    $source     = $request->source;
                    $target     = $query->CurrencyISO;
                    $quantity   = $request->quantity ?? 1;
                    $url        = "https://api.devises.zone/v1/quotes/{$source}/{$target}/json?quantity={$quantity}&key={$this->APIKEY}";
                    $data       = json_decode( file_get_contents($url) );
                    return response()->json([
                        'success'       => true,
                        'records'       => [[
                                    'value'         => round($data->result->value, 2),
                                    'amount'        => round($data->result->amount, 2),
                                ]]
                        ]);
                }else{
                    return $model->getErrorResponse('No existe la moneda.');
                }
            }else{
                return $model->getErrorResponse('Debe crear la moneda nacional.');
            }
        } catch (Exception $e) {
            return $model->getErrorResponse($e->getMessage());
        }
    }

    public function getChange(Request $request)
    {
        try {
            $source     = $request->source;
            $target     = $request->target;
            $quantity   = $request->quantity;
            $url        = "https://api.devises.zone/v1/quotes/{$source}/{$target}/json?quantity={$quantity}&key={$this->APIKEY}";
            $data       = json_decode( file_get_contents($url) );
            return response()->json([
                'success'       => true,
                'value'         => $data->result->value,
                'amount'        => $data->result->amount,
            ]);
        } catch (Exception $e) {
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
                "SELECT a.*, CONCAT(TRIM(b.CurrencyISO),' - ',TRIM(b.CurrencyName)) CurrencyName, b.CurrencyISO
                 FROM {$table}currency_sys a
                 LEFT JOIN {$table}currency b ON a.currency_id = b.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                 FROM {$table}currency_sys a
                 LEFT JOIN {$table}currency b ON a.currency_id = b.id ";

            $searchFields = ['a.CurrencyName'];
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
            $table          = $company->database_name.'.currency_sys';
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
            $table          = $company->database_name.'.currency_sys';
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
