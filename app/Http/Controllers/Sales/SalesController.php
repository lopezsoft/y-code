<?php

namespace App\Http\Controllers\Sales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReportSales;
use App\Core\MasterModel;
use App\Models\Sales\Sales;
use Exception;
use Illuminate\Support\Facades\DB;

class SalesController extends Controller
{

		public function getCheckin(Request $request)
		{
			$model	= new Sales();
			
			return $model->getCheckin($request);
		}
    /**
     * Guarda las facturas o documentos electronicos
     */
    public function create(Request $request)
    {
        $user               = auth()->user();
        $model              = new MasterModel();
        $company            = $model->getCompany();
        $records            = json_decode($request->input('records'));
        $db                 = $company->database_name.".";
        try {
            if(isset($records)){
                $size       = 0;
                $file       = $request->file('file');
                $file2      = $request->file('file2');
                $file3      = $request->file('file3');
                $file4      = $request->file('file4');
                $file5      = $request->file('file5');
                $file6      = $request->file('file6');
                if (!is_null($file)) {
                    $size       += $file->getSize();
                }
                if (!is_null($file2)) {
                    $size       += $file2->getSize();
                }
                if (!is_null($file3)) {
                    $size       += $file3->getSize();
                }
                if (!is_null($file4)) {
                    $size       += $file4->getSize();
                }
                if (!is_null($file5)) {
                    $size       += $file5->getSize();
                }
                if (!is_null($file6)) {
                    $size       += $file6->getSize();
                }
                if($size > 0){
                    $size   = round((($size /1024)/1024),2);
                    if( $size > 2.05){ // 2 MB
                        return response([
                            'message'   => "El tamaño de los archivos adjuntos supera los 2 MB soportados. Tamaño adjunto: {$size} MB",
                            'success'   => false,
                        ]);
                    }

                }

                // Resolución de facturación
                $resolution     = DB::table("{$db}resolutions")
																	->where("id",  $records->invoice_type_id)
																	->where("active",  1)
																	->first();
                if($resolution){
										DB::beginTransaction();
										$records->invoice_type_id	= $resolution->type_document_id;
                    $ip         = $request->ip();

                    $sale_master    = DB::table($db.'sales_master')
                                            ->where('point_of_sale_id',$records->point_of_sale_id)
                                            ->where('invoice_type_id',$records->invoice_type_id)
                                            ->where('prefix',$resolution->prefix)
                                            ->orderBy('invoice_nro','desc')
                                            ->first();

                    $initial_number = ($resolution->initial_number == 0) ? $resolution->range_from : $resolution->initial_number;

                    if($sale_master){
                        $invoice_nro    = $sale_master->invoice_nro + 1;
                    }else{
                        $invoice_nro    = $initial_number;
                    }
                    $invoice_date   = date('Y-m-d',strtotime(str_replace('/','-',$records->invoice_date)));
                    $time           = date('H:i:s');
                    $invoice_time   = $invoice_date.' '.$time;
                    $data       = [
                        'invoice_type_id'   => $records->invoice_type_id ,
                        'point_of_sale_id'  => $records->point_of_sale_id ,
                        'payment_method_id' => $records->payment_method_id ,
                        'time_limit_id'     => isset($records->time_limit_id) ? $records->time_limit_id : 1,
                        'invoice_nro'       => $invoice_nro ,
                        'prefix'            => $resolution->prefix,
                        'subtotal'          => $records->subtotal ,
                        'tax_value'         => $records->vat ,
                        'discount'          => $records->discount,
                        'total'             => $records->total ,
                        'total_allowance'   => isset($records->total_allowance) ? $records->total_allowance : 0 ,
                        'total_charges'     => isset($records->total_charges) ? $records->total_charges : 0 ,
                        'cash'              => isset($records->cash) ? $records->cash : 0 ,
                        'payment_change'    => isset($records->payment_change) ? $records->payment_change : 0 ,
                        'invoice_date'      => $invoice_date,
                        'expiration_date'   => isset($records->expiration_date) ? date('Y-m-d',strtotime(str_replace('/','-',$records->expiration_date))) : $invoice_date,
                        'invoice_time'      => $invoice_time,
                        'notes'             => isset($records->notes) ? $records->notes : '',
                    ];
                    $sale_id = DB::table($db.'sales_master')->insertGetId($data);

                    if($records->customer_id > 0) {
                        $data       = [
                            'customer_id'       => $records->customer_id,
                            'sale_id'           => $sale_id,
                        ];
                        DB::table($db.'customers_sale')->insert($data);
                    }
                    $data       = [
                        'user_id'       => $user->id,
                        'sale_id'       => $sale_id,
                    ];
                    DB::table($db.'user_sales')->insert($data);

                    $data       = [
                        'currency_id'   => $records->currency_id,
                        'sale_id'       => $sale_id,
                    ];
                    DB::table($db.'sales_currency')->insert($data);

                    $data       = [
                        'means_payment_id'  => isset($records->means_payment_id) ? $records->means_payment_id : 10,
                        'sale_id'           => $sale_id,
                        'value_paid'        => $records->total,
                    ];
                    DB::table($db.'means_payment_sale')->insert($data);

                    $lines      = $records->lines;
                    if(count($lines) > 0){
                        $data   = [];
                        foreach ($lines as $line) {
                            $data     = [
                                'sale_id'       => $sale_id,
                                'product_id'    => $line->id,
                                'amount'        => $line->quantity,
                                'unit_price'    => $line->sale_price,
                                'discount'      => $line->discount,
                                'reason'        => isset($line->reason) ? $line->reason : '',
                                'purchase_price'=> isset($line->purchase_cost) ? $line->purchase_cost : 0,
                                'with_units'    => ($line->product_unit_id == 0) ? 0 : 1,
                                'total'         => $line->total,
                            ];

                            $detail_id = DB::table($db.'sales_detail')->insertGetId($data);
                            $data   = [
                                'sale_detail_id'    => $detail_id,
                                'tax_rate_id'       => $line->tax_sales_id,
                                'vat'               => $line->tax_sale_rate,
                                'tax_value'         => $line->tax_amount,
                            ];
                            DB::table($db.'sales_detail_taxes')->insertGetId($data);

                            if($line->product_unit_id > 0){
                                $data   = [
                                    'sale_detail_id'    => $detail_id,
                                    'product_unit_id'   => $line->product_unit_id,
                                    'base_factor'       => $line->base_factor,
                                    'factor'            => $line->factor,
                                ];
                                DB::table($db.'sales_detail_units')->insertGetId($data);
                            }
                        }
                    }else{
                        return response([
                            'message'   => 'Error en el servidor, no hay detalle para la factura.',
                            'success'   => false,
                        ]);
                    }

                    $charges    = [];
                    $discounts  = [];

                    if(isset($records->charges)){
                        $charges    = $records->charges;
                    }

                    if ( isset( $records->discounts)){
                        $discounts  = $records->discounts;
                    }

                    if(count($charges) > 0){
                        $data   = [];
                        foreach ($charges as $charge) {
                            $data   []    = [
                                'sale_id'       => $sale_id,
                                'description'   => $charge->description,
                                'charge_value'  => $charge->charge_value,
                            ];
                        }
                        DB::table($db.'sale_charges')->insert($data);
                    }

                    if(count($discounts) > 0){
                        $data   = [];
                        foreach ($discounts as $discount) {
                            $data   []    = [
                                'sale_id'       => $sale_id,
                                'discount_id'   => $discount->discount_id,
                                'discount_value'=> $discount->discount_value,
                            ];
                        }
                        DB::table($db.'sale_discounts')->insert($data);
                    }

                    // Save attachment documents
                    $report = new ReportSales();
                    if($size > 0){
                        $report->saveInvoiceAttachments($sale_id, $file);
                        $report->saveInvoiceAttachments($sale_id, $file2);
                        $report->saveInvoiceAttachments($sale_id, $file3);
                        $report->saveInvoiceAttachments($sale_id, $file4);
                        $report->saveInvoiceAttachments($sale_id, $file5);
                        $report->saveInvoiceAttachments($sale_id, $file6);
                    }

                    // DB::rollBack();
                    DB::commit();
                    $reportres  = $report->getInvoiceReport($sale_id);

                    return response([
                        'message'   => 'El documento se ha generado correctamente.',
                        'success'   => true,
                        'report'    => $reportres->original
                    ]);
                }else{
                    return response([
                        'message'   => 'Debe asignar el rango de facturación.',
                        'success'   => false,
                    ]);
                }
            }
        } catch (Exception $e) {
            DB::rollBack();

            return response([
                'message' => $e->getMessage(),
                'success'   => false,
            ], 500);
        }
    }
}
