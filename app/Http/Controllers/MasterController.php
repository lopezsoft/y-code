<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\core\MasterModel;

class MasterController extends Controller
{
    public function geMeansPayment(){
        $model      = new MasterModel();
        echo $model->getTable('means_payment', '', 0, 100);
    }

    public function getPaymentMethods(){
        $model      = new MasterModel();
        echo $model->getTable('payment_methods', '', 0, 10);
    }

    public function getReferencePrice(){
        $model      = new MasterModel();
        echo $model->getTable('reference_price', '', 0, 10);
    }

    public function getTypeItemIdentifications(){
        $model      = new MasterModel();
        echo $model->getTable('type_item_identifications', '', 0, 10);
    }

    public function getQuantityUnits(){
        $model      = new MasterModel();
        echo $model->getTable('quantity_units', '', 0, 1100);
    }

    public function getTaxRegime(){
        $model      = new MasterModel();
        echo $model->getTable('tax_regime', '', 0, 20);
    }

    public function getTaxLevel(){
        $model      = new MasterModel();
        echo $model->getTable('tax_level', '', 0, 20);
    }

    public function getTypeOrganization(){
        $model      = new MasterModel();
        echo $model->getTable('type_organization', '', 0, 20);
    }

    public function getTaxes(){
        $model      = new MasterModel();
        echo $model->getTable('taxes', '', 0, 20);
    }

    public function getIdentityDocuments(){
        $model      = new MasterModel();
        echo $model->getTable('identity_documents', '', 0, 20);
    }

    public function getOperationType(){
        $model      = new MasterModel();
        echo $model->getTable('operation_types', '', 0, 20);
    }

    public function getDocumentType(){
        $model      = new MasterModel();
        echo $model->getTable('accounting_documents', '', 0, 10);
    }

    public function getDestinationEnvironme(){
        $model      = new MasterModel();
        echo $model->getTable('destination_environme', '', 0, 2);
    }

    public function getDepartments(){
        $model      = new MasterModel();
        echo $model->getTable('departments', '', 0, 45);
    }

    public function getCurrency(){
        $where      = [
            'active'    => 1
        ];
        $model      = new MasterModel();
        echo $model->getTable('currency', '', 0, 30, $where);
    }

    public function getCities(){
        $sqlSelect  = "SELECT a.id, a.department_id, a.city_code,
        CONCAT(TRIM(a.name_city),' (',TRIM(b.name_department),')') AS name_city
        FROM cities a LEFT JOIN departments AS b ON a.department_id = b.id
        ORDER BY name_city";
        $sqlCount   = "SELECT COUNT(id) as total FROM cities";
        $model        = new MasterModel();
        echo $model->sqlQuery($sqlSelect, $sqlCount, [], '', 0, 1200);
    }

    public function getUsers(Request $request)
    {
        $type   = $request->input('type');
        $query  = $request->input('query');
        $start  = $request->input('start');
        $limit  = $request->input('limit');
        $fields = $request->input('fields');
        $user   = $request->input('user');
        $model    = new MasterModel();
        echo $model->getUsers($query, $start, $limit, $type, $fields, $user);
    }


    public function getTable(Request $request)
    {
        $table  = $request->input('pdbTable');
        $where  = $request->input('where');
        $order  = $request->input('order');
        $query  = $request->input('query');
        $start  = $request->input('start');
        $limit  = $request->input('limit');
        $whereSend  = [];
        if(isset($where)){
            $where  = json_decode($where);
            foreach ($where as $key => $modelue) {
                $whereSend[$key] = $modelue;
            }
        }
        $orderSend  = [];
        if(isset($order)){
            $order  = json_decode($order);
            foreach ($order as $key => $modelue) {
                $orderSend[$key] = $modelue;
            }
        }
        $limit  = isset($limit) ? $limit : 30;
        $model    = new MasterModel();
        echo $model->getTable($table, $query, $start, $limit, $whereSend, $orderSend);
    }

    public function updateData($id, Request $request)
    {
        $table      = $request->input('pdbTable');
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model        = new MasterModel();
        echo $model->updateData($records,$table, $ip);
    }

    public function insertData(Request $request)
    {
        $table      = $request->input('pdbTable');
        $ip         = $request->ip();
        $records    = json_decode($request->input('records'));
        $model        = new MasterModel();
        $file       = $request->file('image');
        echo $model->insertData($records,$table, $ip);
    }

    public function deleteData(Request $request)
    {
        $table      = $request->input('pdbTable');
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model        = new MasterModel();
        echo $model->deleteData($records,$table, $ip);
    }
}
