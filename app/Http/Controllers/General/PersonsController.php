<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;

class PersonsController extends Controller
{

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
            $sqlStatement =
                "SELECT a.*, CONCAT(TRIM(b.CurrencyISO),' - ',TRIM(b.CurrencyName)) CurrencyName, b.CurrencyISO
                 FROM {$table}persons a
                 LEFT JOIN {$table}currency b ON a.currency_id = b.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                 FROM {$table}persons a
                 LEFT JOIN {$table}currency b ON a.currency_id = b.id ";

            $searchFields = ['a.CurrencyName'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectCustomersAll(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        if($company){
            $table  = $company->database_name.'.';
            $sqlStatement =
                "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
                c.accounting_account_id, c.initial_balance, c.initial_date
                FROM {$table}persons a
                LEFT JOIN {$table}type_persons AS b ON a.person_type_id = b.id
                LEFT JOIN {$table}billing_payment AS c ON c.customer_id = a.id
                WHERE a.state = ? and a.person_type_id = ? ORDER BY a.full_name";
            $query  = DB::select($sqlStatement,[1,1]);
            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

}
