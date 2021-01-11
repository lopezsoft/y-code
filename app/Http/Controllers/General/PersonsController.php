<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Storage;


class PersonsController extends Controller
{
    public function createProvider(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $data       = [
                    'address'           => $request->address,
                    'city_name'         => $request->city_name,
                    'company_name'      => $request->company_name,
                    'country_id'        => $request->country_id,
                    'currency_id'       => $request->currency_id,
                    'description'       => $request->description,
                    'dni'               => $request->dni,
                    'email'             => $request->email,
                    'full_name'         => $request->full_name,
                    'last_name'         => $request->last_name,
                    'location'          => $request->location,
                    'mobile'            => $request->mobile,
                    'names'             => $request->names,
                    'person_type_id'    => 2,
                    'phone'             => $request->phone,
                    'postal_code'       => $request->postal_code,
                    'state_name'        => $request->state_name,
                    'title'             => $request->title,
                    'web'               => $request->web,
                    'state'             => 1,
                ];
                $table      = $company->database_name.".persons";

                $id         = DB::table($table)
                                    ->insertGetId($data);
                $model->audit($user->id, $ip, $table, 'INSERT', $data);

                $date   = (strlen($request->initial_date) > 0) ? date('Y-m-d', strtotime(str_replace('/','-',$request->initial_date))) : null;
                $table          = $company->database_name.'.billing_payment';
                $data   = [
                    'customer_id'           => $id,
                    'tax_rate_id'           => $request->tax_rate_id ?? 0,
                    'means_payment_id'      => $request->means_payment_id ?? 0,
                    'sales_term'            => $request->sales_term ?? 0,
                    'accounting_account_id' => $request->accounting_account_id ?? 0,
                    'initial_balance'       => $request->initial_balance ?? null,
                    'initial_date'          => $date,
                ];
                $result     = $model->insertData($data, $table, $ip);

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
                    'address'           => $request->address,
                    'city_name'         => $request->city_name,
                    'company_name'      => $request->company_name,
                    'country_id'        => $request->country_id,
                    'currency_id'       => $request->currency_id,
                    'description'       => $request->description,
                    'dni'               => $request->dni,
                    'email'             => $request->email,
                    'full_name'         => $request->full_name,
                    'last_name'         => $request->last_name,
                    'location'          => $request->location,
                    'mobile'            => $request->mobile,
                    'names'             => $request->names,
                    'person_type_id'    => 1,
                    'phone'             => $request->phone,
                    'postal_code'       => $request->postal_code,
                    'state_name'        => $request->state_name,
                    'title'             => $request->title,
                    'web'               => $request->web,
                    'state'             => 1,
                ];
                $table      = $company->database_name.".persons";

                $id         = DB::table($table)
                                    ->insertGetId($data);
                $model->audit($user->id, $ip, $table, 'INSERT', $data);

                $date   = (strlen($request->initial_date) > 0) ? date('Y-m-d', strtotime(str_replace('/','-',$request->initial_date))) : null;
                $table          = $company->database_name.'.billing_payment';
                $data   = [
                    'customer_id'           => $id,
                    'tax_rate_id'           => $request->tax_rate_id ?? 0,
                    'means_payment_id'      => $request->means_payment_id ?? 0,
                    'sales_term'            => $request->sales_term ?? 0,
                    'accounting_account_id' => $request->accounting_account_id ?? 0,
                    'initial_balance'       => $request->initial_balance ?? null,
                    'initial_date'          => $date,
                ];
                $result     = $model->insertData($data, $table, $ip);

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


    public function selectProviders(Request $request)
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
            $where  = "a.state = 1 and a.person_type_id = 2";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
                c.accounting_account_id, c.initial_balance, c.initial_date
                FROM {$table}persons a
                LEFT JOIN {$table}type_persons b ON a.person_type_id = b.id
                LEFT JOIN {$table}billing_payment AS c ON c.customer_id = a.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                 FROM {$table}persons a
                 LEFT JOIN {$table}type_persons b ON a.person_type_id = b.id ";

            $searchFields = ['a.full_name', 'a.dni', 'a.company_name', 'a.names', 'a.last_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.full_name');
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

    public function selectCustomers(Request $request)
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
            $where  = "a.state = 1 and a.person_type_id = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
                c.accounting_account_id, c.initial_balance, c.initial_date
                FROM {$table}persons a
                LEFT JOIN {$table}type_persons AS b ON a.person_type_id = b.id
                LEFT JOIN {$table}billing_payment AS c ON c.customer_id = a.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                 FROM {$table}persons a
                 LEFT JOIN {$table}type_persons b ON a.person_type_id = b.id ";

            $searchFields = ['a.full_name', 'a.dni', 'a.company_name', 'a.names', 'a.last_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.full_name');
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
            $table          = $company->database_name.'.billing_payment';

            $query          = DB::table($table)
                                ->where(['customer_id' => $id])
                                ->first();
            $date   = (strlen($records->initial_date) > 0) ? date('Y-m-d', strtotime(str_replace('/','-',$records->initial_date))) : null;
            $data   = [
                'customer_id'           => $id,
                'tax_rate_id'           => $records->tax_rate_id ?? 0,
                'means_payment_id'      => $records->means_payment_id ?? 0,
                'sales_term'            => $records->sales_term ?? 0,
                'accounting_account_id' => $records->accounting_account_id ?? 0,
                'initial_balance'       => $records->initial_balance ?? null,
                'initial_date'          => $date,
            ];
            if($query){
                DB::table($table)->where(['id'  => $query->id])->update($data);
            }else{
                DB::table($table)->insert($data);
            }

            $table          = $company->database_name.'.persons';
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
            $table          = $company->database_name.'.persons';
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
