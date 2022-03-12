<?php

namespace App\Models;

use App\Core\NumbersToLetters;
use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;
use App\Core\JReportModel;
use App\models\dashboard\Company;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use CodeItNow\BarcodeBundle\Utils\QrCode;
use App\Models\Report;

class ReportSales extends MasterModel
{

    public function getClosingSalesReport($initDate, $initDateR, $finalDate,  $finalDateR, $typeId, $typeReport,  $uid, $format = 'pdf')
    {
        $user           = auth()->user();
        $report         = new JReportModel();
        $reportName     = 'closing_sales_01';
        $company        = $this->getCompany();
        if($typeReport   !== '1'){ // Invoice POS
            $reportName     = 'closing_sales_pos_80';
        }
        $outputFolder   = "{$company->dni}/reports/users/{$user->id}/{$reportName}/".date('dmY');
        $path           = "{$report->path_report}/{$format}/{$outputFolder}";
        $routputName    = $reportName;

        Storage::disk('reports')->makeDirectory($path);
        $params = [
            'USER_ID'       => $uid,
            'COMPANY_ID'    => $company->id,
            'INIT_DATE'     => $initDate,
            'INIT_DATER'    => $initDateR,
            'FINAL_DATE'    => $finalDate,
            'FINAL_DATER'   => $finalDateR,
            'TYPE_ID'       => $typeId,
            "PSymbol"       => '$ ',
        ];

        return $report->getReportExport($reportName,$routputName,$format,'', $outputFolder, $params);
    }

    public function getInventoryReport($typeReport, $point_of_sale, $format = 'pdf')
    {
        $user           = auth()->user();
        $report         = new JReportModel();
        $reportName     = 'stock';
        // $reportName     = 'hello_world';
        $company        = $this->getCompany();
        $db             = $company->database_name;
        $outputFolder   = "{$company->dni}/reports/users/{$user->id}/{$reportName}/".date('dmY');
        $path           = "{$report->path_report}/{$format}/{$outputFolder}";
        $routputName    = $reportName;

        Storage::disk('reports')->makeDirectory($path);
        $params = [
            'COMPANY_ID'    => $company->id,
            'POINT_OF_SALE' => $point_of_sale,
            'SQL_PARAM'     => "CALL {$db}.`sp_select_sales_products`({$company->id} , '', '0', '0', '0')"
        ];

        return $report->getReportExport($reportName,$routputName,$format,'', $outputFolder, $params, $point_of_sale);
    }

    public function gerSalesReport($initDate, $finalDate, $typeId, $typeReport,  $uid, $format = 'pdf')
    {
        $user           = auth()->user();
        $report         = new JReportModel();
        $reportName     = 'invoice_report';
        $company        = $this->getCompany();
        if($typeReport   !== '1'){ // Invoice POS
            $reportName     = 'invoice_report';
        }
        $outputFolder   = "{$company->dni}/reports/users/{$user->id}/{$reportName}/".date('dmY');
        $path           = "{$report->path_report}/{$format}/{$outputFolder}";
        $routputName    = $reportName;

        Storage::disk('reports')->makeDirectory($path);
        $params = [
            'USER_ID'       => $uid,
            'COMPANY_ID'    => $company->id,
            'INIT_DATE'     => $initDate,
            'FINAL_DATE'    => $finalDate,
            'TYPE_ID'       => $typeId,
        ];

        return $report->getReportExport($reportName,$routputName,$format,'', $outputFolder, $params);
    }


    public function getInvoiceReport($id, $type	= 1)
    {

        // $report         = new JReportModel();
        $company        = $this->getCompany();
        $db             = $company->database_name.".";
        $sale           = DB::table($db.'sales_master')
                            ->where('id', $id)
                            ->first();
        if(!$sale){
            return $this->getErrorResponse("El documento al que desea generar la representación gráfica, no pertenece a la empresa {$company->company_name} o no existe.");
        }
        $ticket         = new Report();
        return          $ticket->setInvoice($id, $type);
    }
}
