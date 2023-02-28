<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Exception;

class ReportsHeaderController extends Controller
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
                    'branch_office_id'  => $request->branch_office_id,
                    'line1'             => $request->line1,
                    'line2'             => $request->line2,
                    'foot'              => $request->foot,
                    'state'             => 1,
                ];
                $table      = $company->database_name.".report_header";
                $records    = $request;

                if(isset($records->imgdata)){
                    $occcurs    = strpos($records->imgdata, ",");
                    //get the base-64 from data
                    $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);

                    if(strlen($base64_str)  > 0 &&  $occcurs > 0){
                        //decode base64 string
                        $image              = base64_decode($base64_str);
                        $imgname            = $records->imgname;
                        $data['image']      = $this->putFile($company->id, $image, $imgname);
                        $result     = $model->insertData($data, $table, $ip);
                    }else{
                        $result     = $model->insertData($data, $table, $ip);
                    }
                }else{
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
            $table  = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = "a.state = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            $sqlStatement =
                "SELECT a.*, b.branch_name
                 FROM {$table}report_header a
                 LEFT JOIN {$table}branch_offices b ON a.branch_office_id = b.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                 FROM {$table}report_header a
                 LEFT JOIN {$table}branch_offices b ON a.branch_office_id = b.id ";

            $searchFields = ['b.branch_name'];
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
        $db         = $company->database_name.'.';
        $table      = "{$db}report_header";
        $records->id    = $id;
        if(isset($records->imgdata)){
            $occcurs    = strpos($records->imgdata, ",");
            //get the base-64 from data
            $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);

            if(strlen($base64_str)  > 0 &&  $occcurs > 0){
                //decode base64 string
                $image              = base64_decode($base64_str);
                $imgname            = $records->imgname;
                $records->image     = $this->putFile($company->id, $image, $imgname);
                $result = $model->updateData($records,$table, $ip);
            }else{
                $result = $model->updateData($records,$table, $ip);
            }
        }else{
            $result =   $model->updateData($records,$table, $ip);
        }
        return $result;
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.report_header';
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
        $path  = "companies/{$company_id}/reports/logo/".$imgname;
        Storage::disk('public')->put($path, $data);
        return Storage::url($path);
    }
}
