<?php

namespace App\Http\Controllers\companies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class BranchOfficeController extends Controller
{
    public function createPointOfSale(Request $request)
    {
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $db         = $company->database_name;
                $table      = $db.".branch_offices";
                $query      = DB::table($table)
                                    ->where(['id'   => $request->branch_id ])
                                    ->first();
                if($query){
                    $data       = [
                        'currency_id'       => $query->currency_id,
                        'country_id'        => $query->country_id,
                        'postal_code'       => $query->postal_code,
                        'branch_name'       => $request->branch_name,
                        'address'           => $request->address,
                        'address2'          => $query->address2,
                        'location'          => $query->location,
                        'email'             => $query->email,
                        'mobile'            => $request->mobile,
                        'phone'             => $request->phone,
                        'is_branch'         => 0,
                        'is_point_of_sale'  => 0,
                    ];
                    $table      = $db.".branch_offices";
                    $child_id   = DB::table($table)->insertGetId($data);

                    $table      = $db.".points_of_sale";
                    $data       = [
                        'parent_id'     => $request->branch_id,
                        'child_id'      => $child_id,
                        'status'        => 1,
                    ];
                    $result     = $model->insertData($data, $table, $ip);
                    DB::commit();
                }else{
                    DB::rollBack();
                    $result     = $model->getErrorResponse('Error en el servidor.');
                }
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
                    'currency_id'       => $request->currency_id,
                    'country_id'        => $request->country_id,
                    'postal_code'       => $request->postal_code,
                    'branch_name'       => $request->branch_name,
                    'address'           => $request->address,
                    'address2'          => $request->address2,
                    'location'          => $request->location,
                    'email'             => $request->email,
                    'mobile'            => $request->mobile,
                    'phone'             => $request->phone,
                    'is_branch'         => 1,
                    'is_point_of_sale'  => $request->is_point_of_sale ?? 0,
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
            return $model->getErrorResponse($e->getMessage());
        }
    }

    public function selectPointOfSale(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $uid    = $request->uid;
        $query  = $request->input('query');
        if($company){
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = "a.state = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.country_name, CONCAT(e.CurrencyISO, ' ', e.CurrencyName) AS currencyname,
                f.branch_name AS branch, f.id AS branch_id
                FROM {$db}points_of_sale AS ps
                left JOIN {$db}branch_offices AS a ON ps.child_id = a.id
                LEFT JOIN {$db}countries b ON a.country_id = b.id
                LEFT JOIN {$db}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$db}currency e ON c.currency_id = e.id
                LEFT JOIN {$db}branch_offices AS f ON (ps.parent_id = f.id AND f.is_branch = 1)";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                FROM {$db}points_of_sale AS ps
                left JOIN {$db}branch_offices AS a ON ps.child_id = a.id
                LEFT JOIN {$db}countries b ON a.country_id = b.id
                LEFT JOIN {$db}currency_sys c ON a.currency_id = c.id
                LEFT JOIN {$db}currency e ON c.currency_id = e.id
                LEFT JOIN {$db}branch_offices AS f ON (ps.parent_id = f.id AND f.is_branch = 1)";

            $searchFields = ['a.branch_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
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
            $where  = "a.state = 1 AND a.is_branch = 1";
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

    public function updatePointOfSale($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $user       = auth()->user();
        if($company){
            $db         = $company->database_name;
            $table      = $db.".points_of_sale";
            $query      = DB::table($table)
                                ->where(['child_id'   => $id ])
                                ->first();
            if($query){
                $data   = [
                    'parent_id'     => $records->branch_id,
                ];
                $table          = $db.'.points_of_sale';
                DB::update("update {$table} set parent_id = {$records->branch_id} where id = ?", [$query->id]);
                $model->audit($user->id, $ip, $table, 'UPDATE', $data);
            }
            $table          = $db.'.branch_offices';
            $records->id    = $id;
            return   $model->updateData($records,$table, $ip);
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
