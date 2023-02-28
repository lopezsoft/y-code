<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\ReportSales;

class ReportController extends Controller
{
    public function getSalesReport(Request $request)
    {
        $user       = $request->user();
        $initDate   = date('Y-m-d', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDate  = date('Y-m-d', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $initDateR  = date('d-m-Y', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDateR = date('d-m-Y', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $typeId     = $request->input('typeId');
        $typeReport = $request->input('typeReport');
        $model      = new MasterModel();

        $isAdmin    = $model->isAdministrator();

        $uid        = ($isAdmin) ? 0 : $user->id;

        $report = new ReportSales();

        return  $report->gerSalesReport($initDate, $initDateR, $finalDate,  $finalDateR, $typeId, $typeReport, $uid, 'pdf');
    }

    /**
     * Informes de cierres de ventas
     */
    public function getClosingSalesReport(Request $request)
    {
        $user       = $request->user();
        $initDate   = date('Y-m-d', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDate  = date('Y-m-d', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $initDateR  = date('d-m-Y', strtotime(str_replace('/','-',$request->input('initDate'))));
        $finalDateR = date('d-m-Y', strtotime(str_replace('/','-',$request->input('finalDate'))));
        $typeId     = $request->input('typeId');
        $typeReport = $request->input('typeReport');
        $model      = new MasterModel();

        $isAdmin    = $model->isAdministrator();

        $uid        = ($isAdmin) ? 0 : $user->id;

        $report = new ReportSales();

        return  $report->getClosingSalesReport($initDate, $initDateR, $finalDate,  $finalDateR, $typeId, $typeReport, $uid, 'pdf');
    }

    public function getInventoryReport(Request $request)
    {
        // $user       = $request->user();
        $typeReport     = $request->input('typeReport');
        $point_of_sale  = $request->input('points_of_sale');
        // $model      = new MasterModel();

        // $isAdmin    = $model->isAdministrator();s

        $report = new ReportSales();

        return  $report->getInventoryReport($typeReport, $point_of_sale, 'pdf');
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
        $type     		= $request->input('type');
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
