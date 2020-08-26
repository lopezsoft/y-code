<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use App\core\MasterModel;
use Illuminate\Http\Request;

class BranchOfficeController extends Controller
{
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
            $sqlStatement =
                "SELECT a.*, b.country_name, d.name_city, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS CurrencyISO FROM {$table}branch_offices a
                LEFT JOIN {$table}countries b ON a.country_id = b.id
                LEFT JOIN {$table}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$table}cities d ON a.city_id = d.id
                LEFT JOIN {$table}currency e ON c.currency_id = e.id ";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}branch_offices a
                LEFT JOIN {$table}countries as b ON a.country_id = b.id ";

            $searchFields = [''];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit);
            // return $model->getTable($table, $query, $start, $limit);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }


    public function selectUnique($id, Request $request)
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
            $sqlStatement =
                "SELECT a.*, b.country_name, d.name_city, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS CurrencyISO
                FROM {$table}branch_offices a
                LEFT JOIN {$table}countries b ON a.country_id = b.id
                LEFT JOIN {$table}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$table}cities d ON a.city_id = d.id
                LEFT JOIN {$table}currency e ON c.currency_id = e.id
                WHERE a.id= {$id} ";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}branch_offices a
                LEFT JOIN {$table}countries as b ON a.country_id = b.id
                WHERE a.id= {$id}";

            $searchFields = [''];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit);

        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }


    public function deleteBranchOffice($id, Request $request)
    {
        $table      = 'branch_offices';
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $customerId = DB::table('branch_offices')->where(['id' => $id, 'company_id'])->first();
        $records->id= $customerId->id;
        echo $model->deleteData($records,$table, $ip);
    }



}
