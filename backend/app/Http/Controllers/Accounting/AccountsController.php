<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;


class AccountsController extends Controller
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
                $is_subaccount  = $request->is_subaccount;
                $account_id     = $request->account_id;
                $db             =  $company->database_name.".";
                if($is_subaccount && !is_null($account_id)){
                    $data       = [
                        'account_id'          => $request->account_id,
                        'accounting_group_id' => $request->accounting_group_id,
                        'currency_id'         => $request->currency_id        ,
                        'tax_rate_id'         => $request->tax_rate_id        ,
                        'account_name'        => $request->account_name       ,
                        'description'         => $request->description        ,
                        'account_number'      => $request->account_number     ,
                        'is_subaccount'       => $request->is_subaccount      ,
                        'state'               => 1,
                    ];
                    $table      = $db."accounting_accounts";
                    $id         = DB::table($table)->insertGetId($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);

                    $data       = [
                        'account_id'        => $request->account_id,
                        'subaccount_id'     => $id,
                        'state'             => 1,
                    ];
                    $table      = $db."accounting_subaccounts";

                    $result     = $model->insertData($data, $table, $ip);

                }else{
                    $data       = [
                        'account_id'          => $request->account_id,
                        'accounting_group_id' => $request->accounting_group_id,
                        'currency_id'         => $request->currency_id        ,
                        'tax_rate_id'         => $request->tax_rate_id        ,
                        'account_name'        => $request->account_name       ,
                        'description'         => $request->description        ,
                        'account_number'      => $request->account_number     ,
                        'is_subaccount'       => $request->is_subaccount      ,
                        'state'               => 1,
                    ];
                    $table      = $db."accounting_accounts";

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

    public function selectMasterAccounts(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $table  = $company->database_name.'.';
            $sqlStatement    = DB::select("SELECT a.id, a.account_name, a.account_number
            FROM {$table}accounting_accounts a WHERE a.is_subaccount = ? ORDER BY a.account_number", [0]);

            return $model->getReponseJson($sqlStatement, count($sqlStatement));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectSubAccounts(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $table  = $company->database_name.'.';
            $sqlStatement    = DB::select("SELECT a.id, a.account_name, a.account_number
            FROM {$table}accounting_accounts a WHERE a.is_subaccount = ? ORDER BY a.account_number", [1]);

            return $model->getReponseJson($sqlStatement, count($sqlStatement));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectAll(Request $request)
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
            $sqlStatement    = DB::select("SELECT a.id, a.account_name, a.account_number
            FROM {$table}accounting_accounts a WHERE a.is_subaccount = ? ORDER BY a.account_number", [1]);

            return $model->getReponseJson($sqlStatement, count($sqlStatement));
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
            $sqlStatement       = "SELECT a.*, b.accounting_group_name, c.name AS classofaccount,
                d.rate_name, concat(trim(f.CurrencyISO),' ',TRIM(f.CurrencyName)) AS currencyname,
                (SELECT sa.account_id FROM {$table}accounting_subaccounts AS sa WHERE sa.subaccount_id = a.id LIMIT 1) AS account_id
                FROM {$table}accounting_accounts AS a
                LEFT JOIN {$table}accounting_groups AS b ON a.accounting_group_id = b.id
                LEFT JOIN {$table}class_of_accounts AS c ON b.class_account_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_rate_id = d.id
                LEFT JOIN {$table}currency_sys AS e ON a.currency_id = e.id
                LEFT JOIN {$table}currency AS f ON e.currency_id = f.id ";
            $sqlStatementCount  = "SELECT COUNT(a.id) AS total  FROM {$table}accounting_accounts AS a
                LEFT JOIN {$table}accounting_groups AS b ON a.accounting_group_id = b.id
                LEFT JOIN {$table}class_of_accounts AS c ON b.class_account_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_rate_id = d.id
                LEFT JOIN {$table}accounting_accounts AS e ON a.currency_id = e.id
                LEFT JOIN {$table}currency AS f ON e.currency_id = f.id ";
            $searchFields   = ['a.account_name','a.account_number','b.accounting_group_name', 'c.name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields, $query, $start, $limit, $where, 'a.account_number');
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
            $is_subaccount  = $records->is_subaccount;
            $account_id     = $records->account_id;
            $db             = $company->database_name.".";

            $table  = $db.'accounting_subaccounts';
            $query  = DB::table($table)
                            ->where(['subaccount_id'    => $id])
                            ->first();
            $data   = [
                'account_id'    => $account_id,
                'subaccount_id' => $id
            ];
            if($query){
                $data   = (Object) [
                    'account_id'    => $account_id,
                    'subaccount_id' => $id,
                    'id'            => $query->id
                ];
                $model->updateData($data,$table, $ip);
            }else if ($is_subaccount){
                $model->insertData($data,$table, $ip);
            }

            $table          = $db.'accounting_accounts';
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
            $table          = $company->database_name.'.accounting_accounts';
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
