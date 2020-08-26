<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\core\MasterModel;

class WineriesController extends Controller
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
                "SELECT a.*, b.department_name
                FROM {$table}warehouse a LEFT JOIN {$table}company_departments b ON a.department_id = b.id ";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}warehouse a
                LEFT JOIN {$table}company_departments b ON a.department_id = b.id";

            $searchFields = [''];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit);
            // return $model->getTable($table, $query, $start, $limit);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }
}
