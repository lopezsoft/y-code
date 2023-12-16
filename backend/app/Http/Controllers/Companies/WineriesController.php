<?php

namespace App\Http\Controllers\Companies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class WineriesController extends Controller
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
                $db             = $company->database_name;
                $department_id  = $request->department_id;
                if(is_null( $department_id)){
                    $data       = [
                        'branch_id'         => $request->branch_id,
                        'winery_name'       => $request->winery_name,
                        'date_time'         => date('Y-m-d', strtotime(str_replace('/','-',$request->date_time))) ?? NULL,
                    ];
                    $table      = $db.".warehouse";
                    $result     = $model->insertData($data, $table, $ip);
                }else{
                    $data       = [
                        'branch_id'         => $request->branch_id,
                        'winery_name'       => $request->winery_name,
                        'date_time'         => date('Y-m-d', strtotime(str_replace('/','-',$request->date_time))) ?? NULL,
                    ];

                    $table      = $db.".warehouse";
                    $id         = DB::table($table)->insertGetId($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);

                    $data       = [
                        'department_id' => $department_id,
                        'wineries_id'   => $id,
                    ];

                    $table      = $db.".wineries_departments";
                    $result     = $model->insertData($data, $table, $ip);
                }
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
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = "a.state = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.branch_name, c.department_id, d.department_name
                FROM {$db}warehouse a
                LEFT JOIN {$db}branch_offices b ON a.branch_id = b.id
                LEFT JOIN {$db}wineries_departments AS c ON c.wineries_id = a.id
                LEFT JOIN {$db}company_departments AS d ON c.department_id = d.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$db}warehouse a
                LEFT JOIN {$db}branch_offices b ON a.branch_id = b.id";

            $searchFields = ['a.winery_name'];
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
            $db             = $company->database_name;
            $department_id  = $records->department_id;
            if(is_null($department_id)){
                $table          = $db.'.warehouse';
                $records->id    = $id;
                return   $model->updateData($records,$table, $ip);
            }else{
                $table          = $db.'.warehouse';
                $records->id    = $id;
                $model->updateData($records,$table, $ip);

                $table      = $db.".wineries_departments";
                $query      = DB::table($table)
                                    ->where(['department_id' =>  $department_id, 'wineries_id' => $id])
                                    ->first();
                $data       = [
                    'department_id' => $department_id,
                    'wineries_id'   => $id,
                ];
                if($query){
                    $data       = [
                        'department_id' => $department_id,
                        'wineries_id'   => $id,
                        'id'            => $query->id,
                    ];
                    $result     = $model->updateData($data, $table, $ip);
                }else{
                    $result     = $model->insertData($data, $table, $ip);
                }
                return $result;
            }
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
            $table          = $company->database_name.'.warehouse';
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
