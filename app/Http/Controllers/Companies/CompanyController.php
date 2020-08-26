<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use App\core\MasterModel;
use Illuminate\Http\Request;

class CompanyController extends Controller
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
                "SELECT a.*, b.country_name, d.description, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS CurrencyISO
                FROM {$table}company a
                LEFT JOIN {$table}countries b ON a.country_id = b.id
                LEFT JOIN {$table}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$table}type_organization d ON a.type_organization_id = d.id
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
}
