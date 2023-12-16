<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class CategoriesController extends Controller
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
                $parent_id  = $request->parent_id;
                $db         =  $company->database_name.".";
                if($parent_id > 0){

                    $data       = [
                        'category_name'     => $request->category_name,
                        'state'             => 1,
                    ];
                    $table      = $db."categories";

                    $id         = DB::table($table)->insertGetId($data);
                    $model->audit($user->id, $ip, $table, 'INSERT', $data);

                    $data       = [
                        'parent_id'     => $parent_id,
                        'child_id'      => $id,
                        'state'         => 1,
                    ];
                    $table      = $db."subcategories";

                    $result     = $model->insertData($data, $table, $ip);
                }else{

                    $data       = [
                        'category_name' => $request->category_name,
                        'state'         => 1,
                    ];
                    $table      = $db."categories";

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

    public function selectChilds(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $uid    = $request->uid;
        if($company){
            $where  = " ";
            if(isset($uid)){
                $where  = " AND c.parent_id = {$uid} ";
            }
            $db     = $company->database_name.'.';
            $sqlStatement = "SELECT a.* FROM {$db}categories AS a
            LEFT JOIN {$db}subcategories AS c ON c.child_id = a.id
            WHERE EXISTS(
                SELECT * FROM {$db}subcategories AS b WHERE b.child_id = a.id
            ) AND a.state = 1 {$where}
            ORDER BY a.category_name";
            $query  = DB::select($sqlStatement);

            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectParents(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $uid    = $request->uid;
        if($company){
            $where  = " ";
            if(isset($uid)){
                $where  = " AND a.id = {$uid} ";
            }
            $db     = $company->database_name.'.';
            $sqlStatement = "SELECT a.* FROM {$db}categories AS a
            WHERE NOT EXISTS(
                SELECT * FROM {$db}subcategories AS b WHERE b.child_id = a.id
            ) AND a.state = 1 {$where}
            ORDER BY a.category_name";
            $query  = DB::select($sqlStatement);

            return $model->getReponseJson($query, count($query));
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function selectAll(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $uid    = $request->uid;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $where  = ['state' => 1];
            if(isset($uid)){
                $where  = ['id' => $uid];
            }
            $table  = $company->database_name.'.categories';

            return $model->getTable($table, $query, 0, 0, $where, ['category_name' => 'ASC']);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function select(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $uid    = $request->uid;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $where  = 'a.state = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 10;
            $start  = isset($start) ? $start : 0;
            $sqlStatement =
                "SELECT a.*, b.parent_id,
                (SELECT ab.category_name FROM {$db}categories AS ab
                LEFT JOIN {$db}subcategories AS bb ON bb.parent_id = ab.id
                WHERE bb.child_id = a.id LIMIT 1) AS parent_name
                FROM {$db}categories AS a
                LEFT JOIN {$db}subcategories AS b ON b.child_id = a.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total FROM {$db}categories a";

            $searchFields = ['a.category_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.category_name ASC');
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
        try {
            if($company){
                $parent_id  = $records->parent_id;
                $db         = $company->database_name.".";
                $query      = DB::table("{$db}subcategories")
                                        ->where('child_id', $id)
                                        ->first();
                if($query){
                    if($parent_id > 0){
                        $data       = (Object) [
                            'id'            => $query->id,
                            'parent_id'     => $parent_id,
                            'child_id'      => $id,
                            'state'         => 1,
                        ];
                        $table      = $db."subcategories";

                        $model->updateData($data, $table, $ip);
                    }else{
                        $data       = (Object) [
                            'id'            => $query->id,
                        ];
                        $table      = $db."subcategories";

                        $model->deleteData($data, $table, $ip);
                    }
                }else if($parent_id > 0){

                    $data       = [
                        'parent_id'     => $parent_id,
                        'child_id'      => $id,
                        'state'         => 1,
                    ];
                    $table      = $db."subcategories";

                   $model->insertData($data, $table, $ip);
                }
                $table          = $company->database_name.'.categories';
                $records->id    = $id;
                return   $model->updateData($records,$table, $ip);
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            return $model->getErrorResponse($e->getMessage());
        }
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.categories';
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
