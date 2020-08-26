<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\core\MasterModel;
use DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class ItemsController extends Controller
{
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $records    = $request;
            $NotAssig   = "Sin asignar";

            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if(!$company){
                //TODO: Esta linea se habilitrá en producción. $database_name  = 'ycode_'.Str::random(5).'_'.$records->country_id ?? 113;

                $database_name  = 'y_code';

                $data       = [
                    'country_id'            => $records->country_id ?? 113,
                    'database_name'         => $database_name,
                    'folder_name'           => '',
                    'dni'                   => $records->dni ?? null,
                    'company_name'          => $records->company_name ?? $NotAssig
                ];

                $company_id = DB::table('companies')->insertGetId($data);

                DB::insert('insert into business_users (user_id, company_id) values (?, ?)', [$user->id, $company_id]);
                $data   = [$user->id, $company_id];
                $model->audit($user->id,$ip,'business_users','INSERT',$data);

                $data       = [
                    'country_id'            => $records->country_id ?? 113,
                    'currency_id'           => $records->currency_id    ?? 1,
                    'identity_document_id'  => $records->identity_document_id ?? 3,
                    'type_organization_id'  => $records->type_organization_id ?? 1,
                    'company_name'          => $records->company_name ?? $NotAssig,
                    'dni'                   => $records->dni,
                    'dv'                    => $records->dv ?? 0,
                    'address'               => $records->address ?? $NotAssig,
                    'location'              => $records->location ?? $NotAssig,
                    'postal_code'           => $records->postal_code ?? '',
                    'mobile'                => $records->mobile ?? '',
                    'phone'                 => $records->phone  ?? '',
                    'email'                 => $records->email ?? '',
                    'web'                   => $records->web ?? ''
                ];

                $company    = $model->getCompany();
                $table      = $company->database_name.".company";

                DB::table($table)->insertGetId($data);
                $model->audit($user->id, $ip, $table , 'UPDATE', $data);

                $data       = [
                    'folder_name'           => $company->id
                ];

                DB::table('companies')->where('id', $company->id)->update($data);

                $model->audit($user->id, $ip, 'companies', 'UPDATE', $data);

                Storage::disk('company')->makeDirectory($company->id);
            }
            DB::commit();
            return $model->getReponseMessage('Empresa creado con exito');
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
        }
    }

    public function select(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $query  = $request->input('query');
        if($company){
            $table  = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $sqlStatement       = "SELECT a.*, b.product_class_name, c.rate_value AS tax_sales,
                d.rate_value AS tax_bill FROM {$table}products a
                LEFT JOIN {$table}product_class AS b ON a.class_id = b.id
                LEFT JOIN {$table}tax_rates AS c ON a.tax_sales_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_bill_id = d.id ";
            $sqlStatementCount  = "SELECT COUNT(a.id) AS total  FROM {$table}products a
                LEFT JOIN {$table}product_class AS b ON a.class_id = b.id
                LEFT JOIN {$table}tax_rates AS c ON a.tax_sales_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_bill_id = d.id ";
            $searchFields   = ['a.product_name','b.product_class_name','a.internal_code', 'a.product_description'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields, $query, $start, $limit,'', 'b.product_class_name, a.product_name');
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        $user       = auth()->user();
        $table      = 'companies';
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company_id = $model->getCompanyId();
        if(isset($records->dataimg)){
            //get the base-64 from data
            $base64_str = substr($records->dataimg, strpos($records->dataimg, ",") + 1);

            if(strlen($base64_str)  > 0){
                //decode base64 string
                $image      = base64_decode($base64_str);
                $imgname    = $records->imgname;
                $path       =  $_SERVER['DOCUMENT_ROOT']."/storage/companies/{$company_id}/logo/";
                if(!is_dir($path)){
                    mkdir($path, 0777, true);
                }
                $pathimg    = $path.$imgname;

                $result     = json_decode($model->uploadFileData($image, $pathimg));
                if($result->success){
                    $pathimg            = "storage/companies/{$company_id}/logo/".$imgname;
                    $records->image     = $pathimg;
                    $result = $model->updateData($records,$table, $ip);
                }else{
                    $result = $model->getErrorResponse('Error al guardar la imagen.');
                }
            }else{
                $result = $model->updateData($records,$table, $ip);
            }
        }else{
            $result =   $model->updateData($records,$table, $ip);
        }
        echo $result;
    }

    public function delete($id, Request $request)
    {
        $table      = 'business_users';
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $customerId = DB::table('business_users')->where(['customer_id' => $id, 'company_id' => $company->id])->first();
        $records->id= $customerId->id;
        echo $model->deleteData($records,$table, $ip);
    }
}
