<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class MeasurementUnitsController extends Controller
{
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($company){
                $data       = [
                    'base_unit_id'      => $request->base_unit_id,
                    'unit_description'  => $request->unit_description,
                    'factor'            => $request->factor,
                    'state'             => $request->state ?? 1,
                ];
                $table      = $company->database_name.".measurement_units";

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

    public function selectProducts(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $uid    = $request->uid;
        $pid    = $request->pid;
        $query  = $request->input('query');
        if($company){
            $where  = "a.product_id = {$pid} and a.state = 1 and b.state = 1 and c.active = 1";
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $sqlStatement =
                "SELECT a.*, b.base_unit_id, b.unit_description, b.factor,
                c.unit_name, c.abbre_unit
                FROM {$db}product_units_measure AS a
                LEFT JOIN {$db}measurement_units AS b ON a.unit_id = b.id
                LEFT JOIN {$db}standard_measurement_units AS c ON b.base_unit_id = c.id
                WHERE {$where}";
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
        $uid    = $request->uid;
        $query  = $request->input('query');
        if($company){
            $where  = 'a.state = 1 and b.active = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $sqlStatement =
                "SELECT a.*, b.unit_name, b.abbre_unit
                FROM {$db}measurement_units AS a
                LEFT JOIN {$db}standard_measurement_units AS b ON a.base_unit_id = b.id
                WHERE {$where}";
            $query  = DB::select($sqlStatement);
            return $model->getReponseJson($query, count($query));
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
            $where  = 'a.state = 1 and b.active = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 10;
            $start  = isset($start) ? $start : 0;
            $sqlStatement =
                "SELECT a.*, b.unit_name, b.abbre_unit
                FROM {$db}measurement_units AS a
                LEFT JOIN {$db}standard_measurement_units AS b ON a.base_unit_id = b.id ";
            $sqlStatementCount =
                "SELECT COUNT(a.id) AS total
                FROM {$db}measurement_units AS a
                LEFT JOIN {$db}standard_measurement_units AS b ON a.base_unit_id = b.id ";

            $searchFields = ['a.unit_description', 'b.unit_name', 'b.abbre_unit'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.unit_description');
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
            $table          = $company->database_name.'.measurement_units';
            $records->id    = $id;
            if(isset($records->imgdata)){
                //get the base-64 from data
                $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);
                if(strlen($base64_str) > 0){
                    //decode base64 string
                    $image              = base64_decode($base64_str);
                    $imgname            = $records->imgname;
                    $records->term_img  = $this->putFile($company->id, $image, $imgname);
                    $result = $model->updateData($records,$table, $ip);
                }else{
                    $result = $model->updateData($records,$table, $ip);
                }
            }else{
                $result = $model->updateData($records,$table, $ip);
            }
            return  $result;
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
            $table          = $company->database_name.'.measurement_units';
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function deleteProduct($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.product_units_measure';
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    private function putFile($company_id, $data, $imgname){
        $path   = "{$company_id}/products/terms/".$imgname;
        Storage::disk('company')->put($path, $data);
        return Storage::url($path);
    }
}
