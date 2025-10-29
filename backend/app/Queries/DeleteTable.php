<?php

namespace App\Queries;

use App\Classes\CrudClass;
use App\Common\HttpResponseMessages;
use App\Traits\MessagesTrait;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeleteTable
{
    use MessagesTrait;
    public static function delete(Request $request, int $id, Object $params): JsonResponse
    {
        try {
            $ip         = $request->ip();
            $company    = $params->company;
            $db         = $company->database_name.".";
            $tb         = "{$db}$params->table";
            DB::beginTransaction();
            $delete  = DB::table($tb)->where('id', $id)->get();

            DB::table($tb)->where('id', $id)->delete();

            CrudClass::audit($ip,$tb,'DELETE',$delete);

            DB::commit();
            return HttpResponseMessages::getResponse(['records' => $delete]);
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500(
                [
                    'message' => "Error al borrar el registro. Es posible que tenga relaciones con otras tablas.",
                ]);
        }
    }

}
