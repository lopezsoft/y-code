<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Core\MasterModel;

class ResolutionsController extends Controller
{

    public function create(Request $request)
    {
        $records    = $request;
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $db         = $company->database_name.".";
        $table      = $db.'resolutions';
        if($company){
            $data       = [
                'company_id'        => $company->id,
                'type_document_id'  => $records->type_document_id,
                'point_of_sale_id'  => $records->point_of_sale_id,
                'headerline1'       => $records->headerline1 ?? '',
                'headerline2'       => $records->headerline2 ?? '',
                'footline1'         => $records->footline1 ?? '',
                'invoice_name'      => $records->invoice_name ?? 'FACTURA DE VENTA',
                'footline2'         => $records->footline2 ?? '',
                'footline3'         => $records->footline3 ?? '',
                'footline4'         => $records->footline4 ?? '',
                'initial_number'    => $records->initial_number ?? 1,
                'prefix'            => $records->prefix,
                'range_from'        => $records->range_from,
                'range_up'          => $records->range_up,
                'date_from'         => date('Y-m-d',strtotime($records->date_from)),
                'date_up'           => date('Y-m-d',strtotime($records->date_up)),
                'resolution_number' => $records->resolution_number ?? '18760000001',
                'active'            => $records->active ?? 1,
            ];
            $ip         = $request->ip();
            return $model->insertData($data,$table, $ip);
        }else{
            return $this->getErrorResponse();
        }
    }

    public function getResolutions(Request $request)
    {
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $start      = $request->start;
        $limit      = $request->limit;
        $uid        = $request->uid;
        $category_id= $request->category_id;
        $pos				= $request->pos;
        $query      = $request->input('query');
        $db         = $company->database_name.".";
        if($company){
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = "a.state = 1";
            if(isset($uid)){
                $where  = "a.id={$uid}";
            }
            if(isset($category_id)){
                $where  = "{$where} AND b.category_id={$category_id}";
            }
            if(isset($pos)){
                $where  = "{$where} AND b.pos=1";
            }
            $sqlStatement =
                "SELECT a.*, b.voucher_name, c.branch_name
                FROM {$db}resolutions AS a
                LEFT JOIN {$db}accounting_documents AS b ON a.type_document_id = b.id
                LEFT JOIN {$db}branch_offices AS c ON a.point_of_sale_id = c.id";
            $sqlStatementCount =
                "SELECT count(a.id) as total
                FROM {$db}resolutions AS a
                LEFT JOIN {$db}accounting_documents AS b ON a.type_document_id = b.id
                LEFT JOIN {$db}branch_offices AS c ON a.point_of_sale_id = c.id";

            $searchFields = ['a.invoice_name', 'a.resolution_number', 'b.voucher_name', 'c.branch_name'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function getResolution($id, Request $request)
    {
        $start  = $request->input('start');
        $limit  = $request->input('limit');
        $company_id = $request->input('companyId');
        $model    = new MasterModel();
        if(isset($company_id)){
            $company_id = $company_id;
        }else{
            $company_id = $model->getCompanyId();
        }
        if($company_id > 0){
            $whereSend  = array(
                'company_id'    => $company_id,
                'id'            => $id
            );
            $limit  = isset($limit) ? $limit : 0;
            return $model->getTable('resolutions','', $start, $limit, $whereSend);
        }else{
            return $this->getErrorResponse();
        }
    }

    public function update($id, Request $request)
    {
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = "{$company->database_name}.resolutions";
        $records->id= $id;
        return $model->updateData($records,$table, $ip);
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = "{$company->database_name}.resolutions";
        $records = (object)[
            'id'    => $id,
            'state' => 2
        ];
        return   $model->updateData($records,$table, $ip);
    }
}
