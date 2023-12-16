<?php

namespace App\Classes;

use App\Common\HttpResponseMessages;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CrudClass
{
    public static string $primaryKey  = "id";

    public static function insert(Request $request, $data = [], $table = null): JsonResponse
    {
        try {
            DB::beginTransaction();
            $ip       = $request->ip();
            $id       = DB::table($table)->insertGetId($data);

            self::audit($ip, $table, 'INSERT', $data);
            DB::commit();
            $data[self::$primaryKey] = $id;
            return HttpResponseMessages::getRecordsResponse(collect($data));

        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function insertData(Request $request, $fields = null, $tb = null): JsonResponse
    {
        try {
            $ip = $request->ip();
            DB::beginTransaction();
            $fieldsTable    = self::getColumns($tb); // Listado de las columnas de la tabla
            $data           = [];
            foreach ($fields as $key => $value) {
                if ($key !== self::$primaryKey) {
                    foreach ($fieldsTable as $field) {
                        if($field->Field == $key ){
                            if($field->Type == 'date'){
                                $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$value)));
                            }else{
                                $data[$key] = $value;
                            }
                            break;
                        }
                    }
                }
            }
            $result = DB::table($tb)
                ->insertGetId($data);

            self::audit($ip,$tb,'INSERT',$data);
            DB::commit();
            $data = DB::table($tb)
                ->where(self::$primaryKey, $result)
                ->first();

            return HttpResponseMessages::getRecordsResponse(collect($data));
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function update(Request $request, $data = null, string $table = null): JsonResponse
    {
        if (!$data && !$table) {
            return HttpResponseMessages::getResponse404([
                'message'   => 'No se encontraron los datos para actualizar'
            ]);
        }
        try {
            DB::beginTransaction();
            $ip    = $request->ip();
            if (is_array($data)) { // Si es mas de un registro
                foreach ($data as $value) {
                    DB::table($table)
                        ->where(self::$primaryKey, $value[self::$primaryKey])
                        ->limit(1)
                        ->update($data);

                    self::audit($ip, $table, 'UPDATE', $data);
                }
            } else {
                $upData    = [];
                foreach ($data as $key => $value) {
                    $upData[$key]    = $value;
                }
                DB::table($table)
                    ->where(self::$primaryKey, $upData[self::$primaryKey])
                    ->limit(1)
                    ->update($upData);

                self::audit($ip, $table, 'UPDATE', $upData);
            }
            DB::commit();
            return HttpResponseMessages::getResponse();
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function updateData(Request $request, $fields = null, $tb = null): JsonResponse
    {
        $result = [];
        try {
            DB::beginTransaction();
            $fieldsTb   = self::getColumns($tb); // Listado de las columnas de la tabla
            $data       = [];
            $ip         = $request->ip();
            if (is_array($fields)) {
                foreach ($fields as $value) {
                    $pKey = null;
                    foreach ($value as $key => $val) {
                        foreach ($fieldsTb as $field) {
                            if($field->Field == $key ){
                                if($field->Type == 'date'){
                                    $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$val)));
                                }else{
                                    $data[$key] = $val;
                                }
                                break;
                            }
                        }
                        if ($key == self::$primaryKey) {
                            $pKey = $val;
                        }
                    }
                    $result = DB::table($tb)
                            ->where(self::$primaryKey, $pKey)
                            ->limit(1)
                            ->update($data);

                    self::audit($ip,$tb,'UPDATE',$data);
                }
            }else{
                $pKey = null;
                foreach ($fields as $key => $value) {
                    foreach ($fieldsTb as $field) {
                        if($field->Field == $key ){
                            if($field->Type == 'date'){
                                $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$value)));
                            }else{
                                $data[$key] = $value;
                            }
                            break;
                        }
                    }
                    if ($key == self::$primaryKey) {
                        $pKey = $value;
                    }
                };
                DB::table($tb)
                    ->where(self::$primaryKey, $pKey)
                    ->limit(1)
                    ->update($data);

                self::audit($ip,$tb,'UPDATE',$data);

                $result = DB::table($tb)
                            ->where(self::$primaryKey, $pKey)
                            ->first();
            }
            DB::commit();
            return HttpResponseMessages::getRecordsResponse(collect($result));
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }


    public static function audit($ip, $table, $what_did, $data): void
    {
        // User
        $user = Auth::user();
        $audit  = [
            'user_id'   => $user->id,
            'ip'        => $ip,
            'table'     => $table,
            'what_did'  => $what_did,
            'data'      => json_encode($data)
        ];
        DB::table('tb_audit')->insert($audit);
    }

    public static function sqlQuery(Request $request, string $sqlStatement, string $sqlStatementCount, array $searchFields): JsonResponse
    {
        $query  = $request->input('query');
        $start  = $request->start ?? 0;
        $limit  = $request->limit ?? 30;
        $where  = $request->where ?? '';
        $order  = $request->order ?? '';
        $table  = [];

        if(strlen($order) > 0){
            $order  = ' ORDER BY '.$order;
        }

        if (strlen($query) > 0) {
            $queryField = '';
            $w          = (strlen($where) > 0) ? " WHERE ".$where." AND " : " WHERE " ;
            foreach ($searchFields as $field) {
                $table  = DB::select($sqlStatement.$w.$field." LIKE ? LIMIT 1", ["%".$query."%"]);
                if (count($table) >0 ) {
                    $queryField   = $field;
                    break;
                }
            }

            if(strlen($queryField) > 0){
                $table  = DB::select($sqlStatement.$w.$queryField." LIKE ? {$order} LIMIT ?, ?", ["%".$query."%", $start, $limit]);
            }
        }else {
            $w      = (strlen($where) > 0) ? " WHERE ".$where : "" ;
            $table  = DB::select($sqlStatement.$w." {$order} LIMIT ?, ?", [$start, $limit]);
        }
        return HttpResponseMessages::getRecordsResponse(collect($table));
    }


    public static function getTable(Request $request, String $tb, String $primaryKey = 'id'): JsonResponse
    {
        try {
            $query  = $request->input('query');
            $start  = $request->start ?? 0;
            $limit  = $request->limit ?? 60;
            $where  = $request->where ?? [];
            $order  = $request->order ?? [];
            $table  = [];

            if (strlen($query) > 0) {
                $fields     = self::getColumns($tb);
                $queryField = '';
                foreach ($fields as $field) {
                    if ($field->Field <> $primaryKey) {
                        $table  = DB::table($tb)
                                ->where($field->Field,'like', '%'. $query .'%')
                                ->limit(1)
                                ->get();
                        if ($table->count() > 0 ) {
                            $queryField   = $field->Field;
                            break;
                        }
                    }
                }

                if(strlen($queryField) > 0){
                    $table  = DB::table($tb)->orderBy($primaryKey, 'DESC')
                                ->where($queryField, 'like', '%'. $query .'%')
                                ->offset($start)
                                ->limit($limit)
                                ->get();
                }
            }else {
                $totalDb  = DB::table($tb);
                $tableDb  = DB::table($tb);

                if(count($where) > 0){
                    $totalDb->where($where);
                    $tableDb->where($where);
                }

                if(count($order) > 0){
                    foreach ($order as $key => $value) {
                        $tableDb->orderBy($key, $value);
                    }
                }

                if($limit > 0){
                    $tableDb->offset($start)->limit($limit);
                }

                $table  = $tableDb->get();
            }
            return HttpResponseMessages::getRecordsResponse(collect($table));
        } catch (Exception $e) {
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function delete(Request $request, $fields = null, string $tb = null): JsonResponse
    {
        try {
            $data       = [];
            $ip         = $request->ip();
            DB::beginTransaction();
            foreach ($fields as $key => $value) {
                $data[$key] = $value;
            }

            $delete  = DB::table($tb)->where($data)->get();

            DB::table($tb)->where($data)->delete();

            self::audit($ip,$tb,'DELETE',$delete);

            DB::commit();
            return HttpResponseMessages::getResponse([
                'message'   => 'Registro eliminado correctamente'
            ]);
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function deleteById(Request $request, array $data, string $tb): JsonResponse
    {
        try {
            $ip         = $request->ip();
            DB::beginTransaction();
            $delete  = DB::table($tb)->where($data)->get();

            DB::table($tb)->where($data)->delete();

            self::audit($ip,$tb,'DELETE',$delete);

            DB::commit();
            return HttpResponseMessages::getResponse([
                'message'   => 'Registro eliminado correctamente'
            ]);
        } catch (Exception $e) {
            DB::rollback();
            return HttpResponseMessages::getResponse500([
                'message'   => $e->getMessage()
            ]);
        }
    }

    public static function delUpdate($id, $tb, Request $request): JsonResponse
    {
        $table          = $tb;
        $records = (object)[
            'id'    => $id,
            'state' => 2
        ];
        return self::update($request, $records, $table);
    }

    public static function getColumns($table = ''): ?array
    {
        $select = null;
        if (strlen($table) >0 ) {
            $select = DB::select('SHOW COLUMNS FROM '.$table);
        }
        return $select;
    }

}
