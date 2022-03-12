<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class AccountingGroupsController extends Controller
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
                    'company_id'            => $model->id,
                    'class_account_id'      => $request->class_account_id,
                    'accounting_group_name' => $request->accounting_group_name,
                    'number'                => $request->number,
                ];
                $table      = $company->database_name.".accounting_groups";

                DB::table($table)->insertGetId($data);
                $model->audit($user->id, $ip, $table , 'INSERT', $data);
            }
            DB::commit();
            return $model->getReponseMessage('Registro creado con exito');
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
        $query  = $request->input('query');
        if($company){
            $table  = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $sqlStatement       = "SELECT a.*, b.name AS classofaccount FROM {$table}accounting_groups a
                        LEFT JOIN {$table}class_of_accounts AS b ON a.class_account_id = b.id";
            $sqlStatementCount  = "SELECT COUNT(a.id) AS total FROM {$table}accounting_groups a
                        LEFT JOIN {$table}class_of_accounts AS b ON a.class_account_id = b.id";
            $searchFields   = ['b.name', 'a.accounting_group_name', 'a.number'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields, $query, $start, $limit);
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
            $table          = $company->database_name.'.accounting_groups';
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
            $table          = $company->database_name.'.accounting_groups';
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
