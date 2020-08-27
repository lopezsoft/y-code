<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class BranchOfficeController extends Controller
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
                    'description'       => $request->description,
                    'currency_id'       => $request->currency_id,
                    'country_id'        => $request->country_id,
                    'postal_code'       => $request->postal_code,
                    'branch_name'       => $request->branch_name,
                    'address'           => $request->address,
                    'location'          => $request->location,
                    'email'             => $request->email,
                    'mobile'            => $request->mobile,
                    'phone'             => $request->phone,
                    'is_point_of_sale'  => $request->is_point_of_sale,
                ];
                $table      = $company->database_name.".branch_offices";

                $result     = $model->insertData($data, $table, $ip);
                DB::commit();
                return $result;
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
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
                "SELECT a.*, b.country_name, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS currencyname 
                FROM {$table}branch_offices a
                LEFT JOIN {$table}countries b ON a.country_id = b.id
                LEFT JOIN {$table}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$table}currency e ON c.currency_id = e.id ";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$table}branch_offices a
                LEFT JOIN {$table}countries as b ON a.country_id = b.id ";

            $searchFields = ['a.branch_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where);
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
            $table          = $company->database_name.'.branch_offices';
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
            $table          = $company->database_name.'.branch_offices';
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
