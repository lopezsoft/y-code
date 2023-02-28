<?php

namespace App\Models\Persons;

use App\Models\Company;
use App\Core\MasterModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;
use App\Models\Persons\BillingPayment;
use App\Models\Persons\SecundaryPersons;

class InsertPersons
{
    static function insert(Request $request, $data, Company $company){
        DB::beginTransaction();
        try {
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            if($company){

                $table  = "{$company->database_name}.persons";

                $id     = DB::table($table)->insertGetId($data);

                $model->audit($user->id, $ip, $table, 'INSERT', $data);

                BillingPayment::createOrUpdate($id, $request, $company);
                SecundaryPersons::createOrUpdate($id, $request, $company);

                DB::commit();

                $result     = DB::table($table)->where('id', $id)->first();
                return $model->getReponseJson($result, 1);
            }else{
                return $model->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $model->getErrorResponse($e->getMessage());
        }
    }
}
