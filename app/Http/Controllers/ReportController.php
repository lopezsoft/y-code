<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\ReportSales;

class ReportController extends Controller
{

    public function getNoteReport(Request $request)
    {
        $id             = $request->input('pdbId');
        $invoiceNro     = $request->input('invoiceNro');
        $report = new ReportSales();
        return $report->getnoteReport($id, 'pdf');
    }

    public function getNotes(Request $request)
    {
        $initDate   = date('Y-m-d', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDate  = date('Y-m-d', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $typeId     = $request->input('typeId');
        $model      = new MasterModel();
        $company_id = $model->getCompanyId();

        $query      = DB::select('CALL `sp_select_credit_notes`(?, ?, ?, ?, ?)', [$company_id,0,$initDate,$finalDate,$typeId]);

        return  $model->getReponseJson($query,count($query));
    }


    public function getSalesDetail($id, Request $request)
    {
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $query      = DB::select('CALL sp_select_sales_detail(?, ?)',[$company->id,$id]);
        return  $model->getReponseJson($query,count($query));
    }

    public function getInvoiceReport(Request $request)
    {
        $id             = $request->input('pdbId');
        $type     			= $request->input('type');
        $report = new ReportSales();
        return $report->getInvoiceReport($id, $type);
    }

    public function getSales(Request $request)
    {
        $initDate   = date('Y-m-d', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDate  = date('Y-m-d', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $typeId     = $request->input('typeId');
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $db         = $company->database_name.'.';
        $query      = DB::select("CALL {$db}`sp_select_sales_master`(?, ?, ?, ?, ?, ?)", [0,0,0,$initDate,$finalDate,$typeId]);

        return  $model->getReponseJson($query,count($query));
    }

}
