<?php

namespace App\Models;

use App\Core\NumbersToLetters;
use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;
use App\Core\JReportModel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class ReportSales extends MasterModel
{

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

            $outputFolder   = "{$company->dni}/invoices/{$invoiceNro}";
            if(!file_exists($report->path_report."/{$format}/".$outputFolder)){
                mkdir($report->path_report."/{$format}/".$outputFolder, 0777,true);
            }

            if (!is_null($file)) {
                //obtenemos el nombre del archivo
                $fielName   = $file->getClientOriginalName();
                $path       = "reportsjr/{$format}/".$outputFolder;
                Storage::putFileAs($path, new File($file), $fielName);
            }
        }
    }

    public function getInvoiceReport($id, $format = 'pdf')
    {
        $report         =  new JReportModel();
        $company        = $this->getCompany();
        $reportName     = 'invoice_fe_01';
        $query          = DB::select("CALL `sp_select_sales_master`('{$company->id}', '{$id}', '1', NULL, NULL, '0')");
        $select         = $query[0];
        $dni            = str_pad($company->dni,10,'0', STR_PAD_LEFT);
        $year           = date('y');
        $ppp            = '000';
        $invoiceNro     = str_pad($select->invoice_nro,8,'0', STR_PAD_LEFT);
        $invoiceNro     = "{$select->prefix_doc}{$dni}{$ppp}{$year}{$select->prefix}{$invoiceNro}";
        $routputName    = "{$invoiceNro}";

        $query          = "CALL `sp_select_sales_master`('{$company->id}', '{$id}', '1', NULL, NULL, '0')";
        $outputFolder   = "{$company->dni}/invoices/{$invoiceNro}/".date('dmY');
        if(!file_exists($report->path_report."/{$format}/".$outputFolder)){
            mkdir($report->path_report."/{$format}/".$outputFolder, 0777,true);
        }

        // if($select->electronic == 1){ // Electronic document
        //     if($select->invoice_type_id == 9 && strlen($select->cufe) < 10){ // Document type 03
        //         $adocuments = DB::table('accounting_documents')->where('id', $select->invoice_type_id)->first();
        //         $software   = DB::table('software_information')->where('company_id', $company->id)->first();
        //         $CUFE       = "{$select->invoice_nro}{$select->invoice_date}{$select->invoice_time}-05:00{($select->total - $select->tax_value)}01
        //                        {$select->tax_value}040.00030.00{$select->total}{$company->dni}{$select->dni}{$software->pin}{$software->environme_id}";
        //         $CUFE       = hash('sha384',$CUFE);
        //         DB::update("update sales_master set cufe = '{$CUFE}'  where id = ?", [$id]);
        //     }
        // }

        // $qrCode = new QrCode();
        // $img    = strtolower("{$report->path_report}/{$format}/{$outputFolder}/QR_{$invoiceNro}.png");
        // $qrCode
        //     ->setText($select->qrcode.$select->cufe)
        //     ->setSize(128)
        //     ->setPadding(2)
        //     ->setErrorCorrection('high')
        //     ->setForegroundColor(array('r' => 0, 'g' => 0, 'b' => 0, 'a' => 0))
        //     ->setBackgroundColor(array('r' => 255, 'g' => 255, 'b' => 255, 'a' => 0))
        //     ->setLabelFontSize(16)
        //     ->setImageType(QrCode::IMAGE_TYPE_PNG)
        //     ->save($img);
        // $model      = new NumbersToLetters();
        // $letters    = $model->getNumbersToLetters($select->total, $select->plural_name).$select->denomination;

        // $params = [
        //     'QRIMAGE'   => $img,
        //     'PLETTERS'  => $letters
        // ];

        // $response   = $report->getReportExport($reportName,$routputName,$format,$query, $outputFolder, $params);
        // $resp       = $response->original;
        // DB::update("update sales_master set path_report = '{$resp['pathFile']}'  where id = ? limit 1", [$id]);

        return $response;
    }
}
