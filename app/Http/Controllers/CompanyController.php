<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\core\MasterModel;
use DB;
use Exception;
use App\company;

class CompanyController extends Controller
{
    public function insertCustomer(Request $request)
    {
        DB::beginTransaction();
        try {
            $records    = json_decode($request->input('records'));
            $NotAssig   = "Sin asignar";
            $customer   = DB::table('companies')->where('dni',$records->dni)->first();
            $dv         = $this->digitVerificacion($records->dni);

            $model      = new MasterModel();
            $company    = $model->getCompany();
            if($records->dni != $company->dni){
                $user       = auth()->user();
                $ip     = $request->ip();

                if(!$customer){
                    $data       = [
                        'country_id'            => $records->country_id ?? 45,
                        'city_id'               => $records->city_id    ?? 836,
                        'identity_document_id'  => $records->identity_document_id ?? 3,
                        'type_organization_id'  => $records->type_organization_id ?? 1,
                        'tax_regime_id'         => $records->tax_regime_id ?? 1,
                        'tax_level_id'          => $records->tax_level_id ?? 1,
                        'company_name'          => $records->company_name ?? $NotAssig,
                        'dni'                   => $records->dni,
                        'dv'                    => $dv,
                        'address'               => $records->address ?? $NotAssig,
                        'location'              => $records->location ?? $NotAssig,
                        'postal_code'           => $records->postal_code ?? '',
                        'mobile'                => $records->mobile ?? '',
                        'phone'                 => $records->phone  ?? '',
                        'email'                 => $records->email,
                        'web'                   => $records->web ?? 'https://../'
                    ];
                    $customer   = Company::create($data);
                    $customer->save();
                    $model->audit($user->id,$ip,'companies','INSERT',$data);
                };

                DB::insert('insert ignore into auxiliary_companies (customer_id, company_id) values (?, ?)', [$customer->id, $company->id]);
                $data   = [$customer->id, $company->id];
                $model->audit($user->id,$ip,'auxiliary_companies','INSERT',$data);
            }
            DB::commit();
            return $model->getReponseJson('Cliente creado con exito');
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
        }
    }

    public function getCustomers(Request $request)
    {
        $start  = $request->input('start');
        $limit  = $request->input('limit');
        $query  = $request->input('query');

        $model  = new MasterModel();
        $company_id = $model->getCompanyId();
        $userType   = $model->getUserType();
        if($company_id > 0){
            $querySelect    = "SELECT a.*, b.company_id, b.active FROM companies a
                        LEFT JOIN auxiliary_companies AS b ON b.customer_id = a.id ";

            $queryCount = "SELECT COUNT(a.id) AS total FROM companies a
                        LEFT JOIN auxiliary_companies AS b ON b.customer_id = a.id ";
            $where      = '';
            if($userType <> 1){
                $where      = " b.customer_id = a.id AND b.company_id = ".$company_id;
            }else{
                $where      = "a.id != ".$company_id;
            }

            $limit      = isset($limit) ? $limit : 30;
            $searchFields   = array(
                'a.company_name',
                'a.dni',
                'a.city_id'
            );
            echo $model->sqlQuery($querySelect, $queryCount, $searchFields, $query, $start, $limit, $where);
        }else{
            echo $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function updateCustomer($id, Request $request)
    {
        $user       = auth()->user();
        $table      = 'companies';
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company_id = $id;
        if(isset($records->dataimg)){
            //get the base-64 from data
            $base64_str = substr($records->dataimg, strpos($records->dataimg, ",") + 1);

            if(strlen($base64_str) > 0){
                //decode base64 string
                $image      = base64_decode($base64_str);
                $imgname    = $records->imgname;
                $path       = $_SERVER['DOCUMENT_ROOT']."/storage/companies/{$company_id}/logo/";
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

    public function deleteCustomer($id, Request $request)
    {
        $table      = 'auxiliary_companies';
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $customerId = DB::table('auxiliary_companies')->where(['customer_id' => $id, 'company_id' => $company->id])->first();
        $records->id= $customerId->id;
        echo $model->deleteData($records,$table, $ip);
    }
    // END companies instructions



    public function getCompany(Request $request)
    {
        $start  = $request->input('start');
        $limit  = $request->input('limit');
        $model  = new MasterModel();
        $company_id = $model->getCompanyId();
        if($company_id > 0){
            $whereSend  = array(
                'id'    => $company_id
            );
            $limit  = isset($limit) ? $limit : 0;
            echo $model->getTable('companies','', $start, $limit, $whereSend);
        }else{
            echo $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function updateCompany($id, Request $request)
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
}
