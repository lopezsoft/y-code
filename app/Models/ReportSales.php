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

    public function getInventoryReport($typeReport, $format = 'pdf')
    {
        $user           = auth()->user();
        $report         = new JReportModel();
        $reportName     = 'stock';
        $company        = $this->getCompany();
        $outputFolder   = "{$company->dni}/reports/users/{$user->id}/{$reportName}/".date('dmY');
        $path           = "{$report->path_report}/{$format}/{$outputFolder}";
        $routputName    = $reportName;

        Storage::disk('reports')->makeDirectory($path);
        $params = [
            'COMPANY_ID'    => $company->id,
        ];

        return $report->getReportExport($reportName,$routputName,$format,'', $outputFolder, $params);
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

    public function getNoteReport($id, $format = 'pdf')
    {

        $report         =  new JReportModel();
        $company        = $this->getCompany();
        $reportName     = 'accounting_notes_01';
        $query          = DB::select("CALL `sp_select_credit_notes`('{$company->id}', '{$id}', NULL, NULL, '0')");
        $select         = $query[0];
        $dni            = str_pad($company->dni,10,'0', STR_PAD_LEFT);
        $year           = date('y');
        $ppp            = '000';
        $invoiceNro     = str_pad($select->invoice_nro,8,'0', STR_PAD_LEFT);
        $invoiceNro     = "{$select->prefix_doc}{$dni}{$ppp}{$year}{$select->prefix}{$invoiceNro}";
        $routputName    = "{$invoiceNro}";

        $query          = "CALL `sp_select_credit_notes`('{$company->id}', '{$id}', NULL, NULL, '0')";
        $outputFolder   = "{$company->dni}/notes/{$invoiceNro}/".date('dmY');
        $path           = "{$report->path_report}/{$format}/{$outputFolder}";

        Storage::disk('reports')->makeDirectory($path);
        $qrUrl  = "QRCode:https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey={$select->cufe}";
        $qrCode = new QrCode();
        $path   = public_path('storage');
        $img    = "{$path}/{$report->path_report}/{$format}/{$outputFolder}/QR_{$invoiceNro}.png";
        $qrCode
            ->setText($select->qrcode.$select->cufe.$qrUrl)
            ->setSize(128)
            ->setPadding(2)
            ->setErrorCorrection('high')
            ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
            ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
            ->setLabelFontSize(16)
            ->setImageType(QrCode::IMAGE_TYPE_PNG)
            ->save($img);
        $model      = new NumbersToLetters();
        $letters    = $model->getNumbersToLetters($select->total, $select->plural_name).$select->denomination;

        $params = [
            'QRIMAGE'       => $img,
            'COMPANY_ID'    => $company->id,
            'INVOICE_ID'    => $id,
            'PLETTERS'      => $letters
        ];

        $response   = $report->getReportExport($reportName,$routputName,$format,$query, $outputFolder, $params);
        $resp       = $response->original;
        DB::update("update accounting_notes set path_report = '{$resp['pathFile']}'  where id = ? limit 1", [$id]);

        return $response;
    }

    public function saveInvoiceAttachments($id = 0, $file = null, $format = 'pdf')
    {
        if($id > 0 && !is_null($file)){
            $report         =  new JReportModel();
            $company        = $this->getCompany();
            $query          = DB::select("CALL `sp_select_sales_master`('{$company->id}', '{$id}', '1', NULL, NULL, '0')");
            $select         = $query[0];
            $dni            = str_pad($company->dni,10,'0', STR_PAD_LEFT);
            $year           = date('y');
            $ppp            = '000';
            $invoiceNro     = str_pad($select->invoice_nro,8,'0', STR_PAD_LEFT);
            $invoiceNro     = "{$select->prefix_doc}{$dni}{$ppp}{$year}{$select->prefix}{$invoiceNro}";

            $outputFolder   = "{$company->dni}/invoices/{$invoiceNro}/Attachments";
            $path           = "{$report->path_report}/{$format}/{$outputFolder}";

            Storage::disk('reports')->makeDirectory($path);

            if (!is_null($file)) {
                $path       = public_path('storage/').$path;
                // $this->putFile($file, $path);
            }
        }
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
        // if($sale->invoice_type_id == 1) { // POS
        // }else{
        //     $reportName     = 'invoice_fe_01';
        //     $select          = DB::select("CALL {$db}`sp_select_sales_master`('{$company->id}', '{$id}', '1', NULL, NULL, '0')")[0];
        //     $invoiceNro     = str_pad($select->invoice_nro,8,'0', STR_PAD_LEFT);
        //     $invoiceNro     = "{$select->prefix_doc}{$select->prefix}{$invoiceNro}";
        //     $routputName    = "{$invoiceNro}";

        //     $query          = "CALL {$db}sp_select_sales_master('".$company->id."','".$id."',1,NULL,NULL,0)";
        //     $subquery       = "CALL  {$db}sp_select_sales_detail ({$id})";
        //     $outputFolder   = "{$company->dni}/invoices/{$invoiceNro}/".date('dmY');
        //     $path           = "{$report->path_report}/{$format}/{$outputFolder}";

        //     Storage::disk('reports')->makeDirectory($path);

        //     $qrUrl  = $invoiceNro;
        //     $qrCode = new QrCode();
        //     $path   = public_path('storage');
        //     $img    = "{$path}/{$report->path_report}/{$format}/{$outputFolder}/QR_{$invoiceNro}.png";
        //     $qrCode
        //         ->setText($qrUrl)
        //         ->setSize(128)
        //         ->setPadding(2)
        //         ->setErrorCorrection('high')
        //         ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
        //         ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
        //         ->setLabelFontSize(16)
        //         ->setImageType(QrCode::IMAGE_TYPE_PNG)
        //         ->save($img);
        //     $model      = new NumbersToLetters();
        //     $letters    = $model->getNumbersToLetters($select->total, $select->plural_name).$select->denomination;

        //     $params = [
        //         'QRIMAGE'       => $img,
        //         'COMPANY_ID'    => $company->id,
        //         'INVOICE_ID'    => $id,
        //         'SUB_QUERY'     => $subquery,
        //         'PLETTERS'      => $letters
        //     ];

        //     $response   = $report->getReportExport($reportName,$routputName,$format,$query, $outputFolder, $params);
        //     $resp       = $response->original;
        //     DB::update("update {$db}sales_master set path_report = '{$resp['pathFile']}'  where id = ? limit 1", [$id]);

        //     return $response;
        // }
    }
}
