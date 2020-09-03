<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Core\MasterModel;

class MasterController extends Controller
{
    public function geMeansPayment(){
        $model      = new MasterModel();
        return $model->getTable('means_payment', '', 0, 100);
    }

    public function getPaymentMethods(){
        $model      = new MasterModel();
        return $model->getTable('payment_methods', '', 0, 10);
    }

    public function getReferencePrice(){
        $model      = new MasterModel();
        return $model->getTable('reference_price', '', 0, 10);
    }

    public function getTypeItemIdentifications(){
        $model      = new MasterModel();
        return $model->getTable('type_item_identifications', '', 0, 10);
    }

    public function getQuantityUnits(){
        $model      = new MasterModel();
        return $model->getTable('quantity_units', '', 0, 1100);
    }

    public function getTaxRegime(){
        $model      = new MasterModel();
        return $model->getTable('tax_regime', '', 0, 20);
    }

    public function getTaxLevel(){
        $model      = new MasterModel();
        return $model->getTable('tax_level', '', 0, 20);
    }

    public function getTypeOrganization(){
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = $company->database_name.'.type_organization';
        return $model->getTable($table, '', 0, 20);
    }

    public function getCountries(){
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = $company->database_name.'.countries';
        return $model->getTable($table, '', 0, 300, ['active' => 1], ['country_name' => 'asc']);
    }

    public function getTaxes(){
        $model      = new MasterModel();
        return $model->getTable('taxes', '', 0, 20);
    }

    public function getIdentityDocuments(){
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = $company->database_name.'.identity_documents';
        return $model->getTable($table, '', 0, 20);
    }

    public function getOperationType(){
        $model      = new MasterModel();
        return $model->getTable('operation_types', '', 0, 20);
    }

    public function getDocumentType(){
        $model      = new MasterModel();
        return $model->getTable('accounting_documents', '', 0, 10);
    }

    public function getDestinationEnvironme(){
        $model      = new MasterModel();
        return $model->getTable('destination_environme', '', 0, 2);
    }

    public function getDepartments(){
        $model      = new MasterModel();
        return $model->getTable('departments', '', 0, 45);
    }

    public function getCurrency(){
        $where      = [
            'active'    => 1
        ];
        $model      = new MasterModel();
        return $model->getTable('currency', '', 0, 30, $where);
    }

    public function getCurrencySys(){
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = $company->database_name.'.';

        $sqlSelect  = "SELECT a.*, CONCAT(TRIM(b.CurrencyISO),' ',TRIM(b.CurrencyName)) AS currency_name
                            FROM {$table}currency_sys AS a
                            LEFT JOIN {$table}currency AS b ON a.currency_id = b.id";
        $sqlCount   = "SELECT COUNT(id) as total FROM {$table}currency_sys";
        return $model->sqlQuery($sqlSelect, $sqlCount, [], '', 0, 10);
    }

    public function getCities(){
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $table      = $company->database_name.'.';

        $sqlSelect  = "SELECT a.*, b.name_departament FROM {$table}cities AS a
                       LEFT JOIN {$table}departments b ON a.departament_id= b.id ";
        $sqlCount   = "SELECT COUNT(a.id) as total FROM {$table}cities AS a
                       LEFT JOIN {$table}departments b ON a.departament_id= b.id ";
        return $model->sqlQuery($sqlSelect, $sqlCount, [], '', 0, 10);
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
        return $model->getUsers($query, $start, $limit, $type, $fields, $user);
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
        return $model->getTable($table, $query, $start, $limit, $whereSend, $orderSend);
    }

    public function updateData($id, Request $request)
    {
        $table      = $request->input('pdbTable');
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model        = new MasterModel();
        return $model->updateData($records,$table, $ip);
    }

    public function insertData(Request $request)
    {
        $table      = $request->input('pdbTable');
        $ip         = $request->ip();
        $records    = json_decode($request->input('records'));
        $model        = new MasterModel();
        $file       = $request->file('image');
        return $model->insertData($records,$table, $ip);
    }

    public function deleteData(Request $request)
    {
        $table      = $request->input('pdbTable');
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model        = new MasterModel();
        return $model->deleteData($records,$table, $ip);
    }
}
