<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class ClassOfAccountsController extends Controller
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
                    'name'      => $request->name,
                    'number'    => $request->number,
                ];
                $table      = $company->database_name.".class_of_accounts";

                DB::table($table)->insertGetId($data);
                $model->audit($user->id, $ip, $table , 'UPDATE', $data);
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
        $uid    = $request->uid;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $where  = ['state'  => 1];
            if(isset($uid)){
                $where  = ['id' => $uid];
            }
            $table  = $company->database_name.'.class_of_accounts';
            $limit  = isset($limit) ? $limit : 1;
            $start  = isset($start) ? $start : 0;
            return $model->getTable($table, $query, $start, $limit, $where);
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
            $table          = $company->database_name.'.class_of_accounts';
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
            $table          = $company->database_name.'.class_of_accounts';
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
