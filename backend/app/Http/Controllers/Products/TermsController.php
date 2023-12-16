<?php

namespace App\Http\Controllers\Products;

use App\Core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TermsController extends Controller
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
                    'attribute_id'      => $request->attribute_id,
                    'term_name'         => $request->term_name,
                    'term_description'  => $request->term_description,
                    'term_color'        => $request->term_color ?? null,
                    'term_img'          => $request->term_img ?? null,
                    'state'             => $request->state ?? 1,
                ];
                $table      = $company->database_name.".attribute_terms";

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
        $uid    = $request->uid;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $where  = 'a.state = 1 and b.state = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $db     = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 10;
            $start  = isset($start) ? $start : 0;
            $sqlStatement =
                "SELECT a.*, b.attribute_name FROM {$db}attribute_terms AS a
                LEFT JOIN {$db}attributes AS b ON a.attribute_id = b.id ";
            $sqlStatementCount =
                "SELECT COUNT(a.id) AS total FROM {$db}attribute_terms AS a
                LEFT JOIN {$db}attributes AS b ON a.attribute_id = b.id";

            $searchFields = ['a.term_name', 'b.attribute_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'b.attribute_name, a.term_name');
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
            $table          = $company->database_name.'.attribute_terms';
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
            $table          = $company->database_name.'.attribute_terms';
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
