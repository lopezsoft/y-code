<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class ItemsTypeController extends Controller
{
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $records    = json_decode($request->records);
            $accounts   = json_decode($request->accounts);
            $company    = $model->getCompany();
            if($company){
                $data       = [
                    'product_class_id'  => $records->product_class_id,
                    'name_type'         => $records->name_type,
                    'state'             => $records->state ?? 1,
                ];

                $db         = $company->database_name.'.';
                $table      = $db."items_types";
                $id         = DB::table($table)
                                ->insertGetId($data);

                $model->audit($user->id, $ip, $table, 'INSERT', $data);
                $data['id'] = $id;

                $result     = $model->getReponseJson($data,1);

                foreach ($accounts as $account) {
                    $table  = $db."item_type_accounts";
                    $data   = [
                        'item_type_id'      => $id,
                        'account_type_id'   => $account->account_type_id,
                        'account_id'        => $account->account_id,
                    ];
                    DB::table($table)
                            ->insert($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);
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

    public function selectItemTypeAccounts(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $uid    = $request->uid;
        $pid    = $request->pid;
        $query  = $request->input('query');
        if($company){
            $where  = "a.item_type_id = {$pid} and a.state = 1";
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $sqlStatement =
                "SELECT a.*, b.name_type AS group_name , c.name_type, d.account_number,
                d.account_name, e.product_class_name
                FROM {$db}item_type_accounts AS a
                LEFT JOIN {$db}items_types AS b ON a.item_type_id = b.id
                LEFT JOIN {$db}account_types AS c ON a.account_type_id = c.id
                LEFT JOIN {$db}accounting_accounts AS d ON a.account_id = d.id
                LEFT JOIN {$db}product_class AS e ON b.product_class_id = e.id
                WHERE {$where}";
            $query  = DB::select($sqlStatement);
            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectAll(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $uid    = $request->uid;
        $query  = $request->input('query');
        if($company){
            $where  = 'a.state = 1 and b.active = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $sqlStatement =
                "SELECT a.*, b.product_class_name
                FROM {$db}items_types AS a
                LEFT JOIN {$db}product_class AS b ON a.product_class_id = b.id
                WHERE {$where}";
            $query  = DB::select($sqlStatement);
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
        $uid    = $request->uid;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $where  = 'a.state = 1 and b.active = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 10;
            $start  = isset($start) ? $start : 0;
            $sqlStatement =
                "SELECT a.*, b.product_class_name
                FROM {$db}items_types AS a
                LEFT JOIN {$db}product_class AS b ON a.product_class_id = b.id";
            $sqlStatementCount =
                "SELECT COUNT(a.id) AS total
                FROM {$db}items_types AS a
                LEFT JOIN {$db}product_class AS b ON a.product_class_id = b.id ";

            $searchFields = ['a.name_type', 'b.product_class_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.name_type');
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
        $accounts   = json_decode($request->accounts);
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $user       = auth()->user();
        if($company){
            DB::beginTransaction();
            try {
                $db             = $company->database_name.'.';
                $table          = $db.'items_types';
                $records->id    = $id;
                $result = $model->updateData($records,$table, $ip);

                foreach ($accounts as $account) {
                    $table  = $db."item_type_accounts";
                    $data   = [
                        'item_type_id'      => $id,
                        'account_type_id'   => $account->account_type_id,
                        'account_id'        => $account->account_id,
                    ];
                    if($account->id > 0){
                        DB::table($table)
                            ->where('id', $account->id)
                            ->update($data);
                        $model->audit($user->id, $ip, $table, 'UPDATE', $data);
                    }else{
                        DB::table($table)
                            ->insert($data);
                        $model->audit($user->id, $ip, $table, 'INSERT', $data);
                    }
                }
                DB::commit();
            } catch (Exception $e) {
                DB::rollback();
                $result = $model->getErrorResponse($e->getMessage());
            }
            return  $result;
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
            $table          = $company->database_name.'.items_types';
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function deleteItemTypeAccounts($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.item_type_accounts';
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
