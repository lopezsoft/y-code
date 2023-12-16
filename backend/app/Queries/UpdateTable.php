<?php

namespace App\Queries;

use App\Classes\CrudClass;
use App\Common\HttpResponseMessages;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateTable
{
    public static function update(Request $request, mixed $fields, string $tb): JsonResponse
    {
        $ip     = $request->ip();
        try {
            DB::beginTransaction();
            $fieldsTb   = ShowColumns::getColumns($tb); // Listado de las columnas de la tabla
            if (is_array($fields)) {
                foreach ($fields as $value) {
                    self::process($value, $fieldsTb, $tb, $ip);
                }
            }else{
                self::process($fields, $fieldsTb, $tb, $ip);
            }
            DB::commit();
            return HttpResponseMessages::getResponse([
                'message' => 'Registro actualizado correctamente',
            ]);
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message' => $e->getMessage(),
            ]);
        }
    }

    protected  static function process($fields, $fieldsTb, $tb, $ip): void
    {
        $data       = [];
        $pKey       = 0;
        $primaryKey = 'id';
        foreach ($fields as $key => $value) {
            foreach ($fieldsTb as $field) {
                if($field->Key === "PRI"){
                    $primaryKey = $field->Field;
                }
                if($field->Field == $key ){
                    if($field->Type == 'date'){
                        $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$value)));
                    }else{
                        $data[$key] = $value;
                    }
                    break;
                }
            }
            if ($key == $primaryKey) {
                $primaryKey = $key;
                $pKey       = $value;
            }
        };

        $query = DB::table($tb)
                    ->where($primaryKey, $pKey)
                    ->first();
        $dataUpdate = [];
        if ($query) {
            foreach ($query as $key => $value) {
                $changeValue = $data[$key];
                if ($value != $changeValue) {
                    $dataUpdate[$key] = $changeValue;
                }
            }
        }
        if (count($dataUpdate) > 0) {
            DB::table($tb)
                ->where($primaryKey, $pKey)
                ->limit(1)
                ->update($dataUpdate);
            CrudClass::audit($ip, $tb, 'UPDATE', $dataUpdate);
        }
    }

}
