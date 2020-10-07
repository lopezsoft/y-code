<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;


class PersonsController extends Controller
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
                    'person_type_id'    => $request->person_type_id,
                    'phone'             => $request->phone,
                    'postal_code'       => $request->postal_code,
                    'state_name'        => $request->state_name,
                    'title'             => $request->title,
                    'web'               => $request->web,
                    'state'             => 1,
                ];
                $table      = $company->database_name.".persons";

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
            $where  = "a.state = 1 and a.person_type_id = 2 or a.person_type_id = 3";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.description
                 FROM {$table}persons a
                 LEFT JOIN {$table}type_persons b ON a.person_type_id = b.id";
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
            $where  = "a.state = 1 and a.person_type_id = 1 or a.person_type_id = 3 or a.person_type_id = 6";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.description
                 FROM {$table}persons a
                 LEFT JOIN {$table}type_persons b ON a.person_type_id = b.id";
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
