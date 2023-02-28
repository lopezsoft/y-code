<?php

namespace App\Models;

use Exception;
use App\DomPdf\DPdf;
use App\Core\MasterModel;
use App\Core\JReportModel;
use Illuminate\Support\Str;
use App\Core\NumbersToLetters;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Report extends MasterModel
{
    public $path_logo_reports  = "resources/images/logo_reports.jpeg";

    public function setInvoice($id = 0, $type = 1)
    {
        if ($id > 0) {
            try {
                $report         = new JReportModel();
                $company        = $this->getCompany();
                $format         = 'pdf';
                $db             = $company->database_name.".";

                $sale           = DB::select("CALL {$db}`sp_select_sales_master`('{$company->id}', '{$id}', '1', NULL, NULL, '0')")[0];

                $company        = DB::table("{$db}company")->first();

                $this->path_logo_reports    = public_path($company->image);

                $dni            = str_pad($company->dni,10,'0', STR_PAD_LEFT);
                $year           = date('y');
                $ppp            = '000';
                $invoiceNro     = str_pad($sale->invoice_nro,8,'0', STR_PAD_LEFT);
                $invoiceNro     = "{$sale->prefix_doc}{$dni}{$ppp}{$year}{$sale->prefix}{$invoiceNro}";
                $routputName    = "{$invoiceNro}";

								$document		= "invoices";
								if($type <> 1) {
									$document	= "pos";
								}
                $outputFolder   = "{$company->dni}/{$document}/{$invoiceNro}/".date('dmY');
                $path           = "{$report->path_report}/{$format}/{$outputFolder}";

                Storage::disk('reports')->makeDirectory($path);

                $saleMaster     = $sale;

                $saleDetail     = DB::select("CALL {$db}`sp_select_sales_detail`('{$id}')");

                $details				= [];
                foreach($saleDetail as $key => $pro){
                    $decAmount      	= $this->totalDecimals($pro->amount, 2);
                    $decUnit        	= $this->totalDecimals($pro->unit_price, 2);
                    $decTotal       	= $this->totalDecimals($pro->total, 2);
                    $decDiscount     	= $this->totalDecimals($pro->discount, 2);
                    $line				= $pro;
                    $line->detail		= strtoupper((Trim($pro->detail)));
                    $line->amount		= number_format($pro->amount,$decAmount,".",",");
                    $line->abbre_unit	= (Trim($pro->abbre_unit));
                    $line->unit_price	= "{$saleMaster->Symbol} ".number_format($pro->unit_price,$decUnit,".",",");
                    $line->total		= "{$saleMaster->Symbol} ".number_format($pro->total,$decTotal,".",",");
                    $line->discount		= "{$saleMaster->Symbol} ".number_format($pro->discount,$decDiscount,".",",");
                    $details[]			= $line;
                }

                $sale_taxes					= DB::SELECT("CALL {$db}`sp_select_sales_taxes`(?)", [$id]);

                // listado del I.S.V
                $taxes							= DB::SELECT("CALL {$db}`sp_select_vat`()");

                $tax_all						= [];

                foreach ($taxes as $tax) {
                    $tax->total			= 0;
                    $tax->tax_value	= 0;
                    foreach ($sale_taxes as $stax) {
                        if($tax->id === $stax->id) {
                            $tax->total			= $stax->base;
                            $tax->tax_value	= $stax->tax_value;
                            break;
                        }
                    }
                    $tax_all[] 	= $tax;
                }

                $model      = new NumbersToLetters();
                $letters    = $model->getNumbersToLetters($saleMaster->total, $saleMaster->plural_name).$saleMaster->denomination;

                $pdf 	= new DPdf();

                $data	= [
                    "logo"				=> (Str::length($company->image) > 10) ? url($company->image) : null,
                    "headerLine1"	    => $saleMaster->headerline1,
                    "headerLine2"	    => $saleMaster->headerline2,
                    "saleMaster"	    => $saleMaster,
                    "details"			=> $details,
                    "taxAll"			=> $tax_all,
                    "letters"			=> $letters,
                    "rowspan"			=> Count($tax_all) + 2,
                ];

                if($type <> 1) {
                    $pdf->loadView('reports.pos80mm', $data);
                    $pdf->setPaper80mm();
                }else {
                    $pdf->loadView('reports.invoice', $data);
                }

                $path_s   = "public/{$path}/{$routputName}.pdf";
                $pdf->save($path_s);

                $path   = "storage/{$path}/{$routputName}.pdf";
                $result = response()->json([
                    'success'   => true,
                    'pathFile'  => utf8_encode($path),
                    'css'		=> asset('assets/reports/css/invoice.css')
                ], 200);
                return $result;
            } catch (Exception $e) {
                DB::rollback();
                return $this->getErrorResponse($e->getMessage());
            }
        }else{
            $result = $this->getErrorResponse('Error en los datos recibidos');
        }

        return  $result;
    }
}
