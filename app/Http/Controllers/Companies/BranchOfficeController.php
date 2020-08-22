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
            $table  = $company->database_name.'.branch_offices';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            return $model->getTable($table, $query, $start, $limit);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }
}
