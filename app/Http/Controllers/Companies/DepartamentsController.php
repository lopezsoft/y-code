<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use App\core\MasterModel;
use Illuminate\Http\Request;

class DepartamentsController extends Controller
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
                "SELECT a.*, b.branch_name FROM {$table}company_departments a
                LEFT JOIN {$table}branch_offices b ON a.branch_office_id = b.id";

            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}company_departments a
                LEFT JOIN {$table}branch_offices as b ON a.branch_office_id = b.id ";

            $searchFields = [''];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }
}
