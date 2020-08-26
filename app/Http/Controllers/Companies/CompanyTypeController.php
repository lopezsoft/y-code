<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\core\MasterModel;

class CompanyTypeController extends Controller
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
                "SELECT a.* FROM {$table}type_organization a";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}type_organization a";

            $searchFields = [''];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit);
            // return $model->getTable($table, $query, $start, $limit);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }
}
