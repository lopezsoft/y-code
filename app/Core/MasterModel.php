<?php

namespace App\Core;

use App\Models\Company;
use App\User;
use Exception;
use Illuminate\Http\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\TryCatch;

class MasterModel
{
    /**
     * Re
     */
    public $primaryKey  = "id";
    public $queryField  = "";
    public $queryString = "";

    /**
     * Retorna el tipo de usuario conectado
     *
     * Return INT
     */
    public function getUserType()
    {
        try {
            $user   = auth()->user();
            $tuser  = DB::table('user_types')->where('id', $user->type_id)->first();
            return ($tuser) ? $tuser->type : 0;
        } catch (\Throwable $th) {
            return $this->getErrorResponse();
        }
    }

    /**
     * Retorna los datos de la empresa del usuario conectado
     *
     * Return object
     */
    public function getCompany()
    {
        try {
            $user   = auth()->user();
            $buser  = DB::table('business_users')->where('user_id', $user->id)->first();
            if($buser){
                $company    = Company::where('id', $buser->company_id)->first();
            }else{
                $company    = null;
            }
            return $company;
        } catch (\Throwable $th) {
            return null;
        }
    }
    /**
     * Retorna el ID de la empresa del usuario conectado
     *
     * Return INT
     */
    public function getCompanyId(){
        $user   = auth()->user();
        $buser  = DB::table('business_users')->where('user_id', $user->id)->first();
        return ($buser) ? $buser->company_id : 0;
    }

    public function audit($user_id, $ip, $tb, $what_did, $data)
    {
        // User
        $user = auth()->user();
        $audit  = [
            'user_id'   => $user->id,
            'ip'        => $ip,
            'table'     => $tb,
            'what_did'  => $what_did,
            'data'      => json_encode($data)
        ];
        DB::table('tb_audit')->insert($audit);
    }

    public function getUsers($query = null, $start = 0, $limit = 0, $type = 3, $fields = null, $user)
    {
        try {
            $sign = '=';
            if($type > 0){
                if ($type != 3) {
                    $sign = "<>";
                    $type = 3;
                }
                if (!is_null($query) && !is_null($fields)) {
                    $search = json_decode($fields);
                    foreach ($search as $value) {
                        $select = User::where($value, 'like', '%' . $query . '%')
                            ->where('type', $sign, $type)
                            ->limit(1)
                            ->get();
                        if ($select->count() > 0) {
                            $this->queryField = $value;
                            break;
                        }
                    }
                    if (strlen($this->queryField) > 0) {
                        $select = User::where($this->queryField, 'like', '%' . $query . '%')
                            ->where('type', $sign, $type)
                            ->limit($limit, $start)
                            ->get();
                    } else {
                        $select = User::where('first_name', 'like', '%' . $query . '%')
                            ->where('type', $sign, $type)
                            ->limit($limit, $start)
                            ->get();
                    }
                } else {
                    $select = User::where('type', $sign, $type)
                            ->limit($limit, $start)
                            ->get();
                }
            }else{
                $select = User::where('id', $sign, $user)
                            ->limit(1)->get();
            }
            $result = $this->getReponseJson($select, $select->count());
        } catch (\Throwable $th) {
            $result = $this->getErrorResponse('Error en la consulta');
            throw $th;
        }
        return $result;
    }

    public function uploadFileData($data,$path){
        $fileSize    = file_put_contents($path, $data);
		if ($fileSize > 0) {
            $name   = basename($path);
            $format = pathinfo($path, PATHINFO_EXTENSION);
			$request = array(
                'success'       => TRUE,
                'name'          => $name,
                'format'        => $format,
				'size'			=> round((($fileSize/1024)/1024),3)
			);
        }else{
            $request = array(
                'success'       =>FALSE
			);
        }
        return json_encode($request);
    }

    public function uploadFile($file,$path){
		$fileName = $file['name'];
		$fileTmp  = $file['tmp_name'];
		$filetype = $file['type'];
		$fileSize = $file['size'];
		if ($fileSize > 2048000) {
			$request = array(
				'success'       =>FALSE,
				'error'			=> 'No se permite subir archivos mayores a 2 MB'
			);
			$request = json_encode($request);
        }
    }

    public function setImageProd($file = null, $id = 0)
    {
        if (!is_null($file) and $id > 0) {
            //obtenemos el nombre del archivo
            $fielName = $file->getClientOriginalName();
            $urlM = "products/" . $id;
            Storage::putFileAs($urlM, new File($file), $fielName);
            $mime = Storage::mimeType($urlM . '/' . $fielName);
            DB::update('UPDATE tb_products SET mime = "' . $mime . '", image = "storage/' . $urlM . '/' . $fielName .
                '" WHERE id = ?', [$id]);
            $data = DB::table('tb_products')
                ->get()
                ->where($this->primaryKey, $id);

            return $this->getReponseJson($data, 1);
        }
    }

    public function getSaleMaster($id = 0, $type = 1)
    {
        if ($type == 1) {
            $table = DB::select("CALL sp_sales_master(" . $id . ")");
        } else {
            $table = DB::select("CALL sp_sales_master_out(" . $id . ")");
        }
        return $table;
    }

    public function getConfigInvoive()
    {
        $result = DB::table('tb_configure_invoice')->get();
        return $result;
    }

    /**
     * Borra los cambios en la tabla pasada como parametro
     *
     * @$tb
     */
    public function deleteData($fields = null, string $tb = null, $ip, $user_id = 0)
    {
        if ($fields) {
            try {
                DB::beginTransaction();
                foreach ($fields as $key => $value) {
                    $data[$key] = $value;
                }

                $delete  = DB::table($tb)
                                ->where($data)
                                ->get();

                $result = DB::table($tb)
                    ->where($data)
                    ->delete();

                $this->audit($user_id,$ip,$tb,'DELETE',$delete);

                DB::commit();
                $result = $this->getResponseSucces($result);
            } catch (\Throwable $th) {
                DB::rollback();
                $result = $this->getErrorResponse('Error al tratar de eliminar el registro');
                throw $th;
            }
            return  $result;
        }
    }

    /**
     * Inserta los cambios en la tabla pasada como parametro
     *
     * @$tb
     */
    public function insertData($fields = null, string $tb = null, $ip, $user_id = 0)
    {
        if ($fields) {
            try {
                DB::beginTransaction();
                $fieldstb   = $this->getColumns($tb); // Listado de las columnas de la tabla
                $data       = [];
                foreach ($fields as $key => $value) {
                    if ($key !== $this->primaryKey) {
                        foreach ($fieldstb as $field) {
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

                $this->audit($user_id,$ip,$tb,'INSERT',$data);
                DB::commit();
                $data = DB::table($tb)
                    ->get()
                    ->where($this->primaryKey, $result);

                $result =  $this->getReponseJson($data, $result);
            } catch (Exception $e) {
                DB::rollback();
                $result = $this->getErrorResponse('Error en la base de datos: '. $e->getMessage());
            }

            return  $result;
        }
    }

    /**
     * Guarda los cambios en la tabla pasada como parametro
     *
     * @$tb
     */
    public function updateData($fields = null, string $tb = null, $ip, $user_id = 0)
    {
        if ($fields) {
            try {
                DB::beginTransaction();
                $fieldstb   = $this->getColumns($tb); // Listado de las columnas de la tabla
                if (is_array($fields)) {
                    foreach ($fields as $value) {
                        foreach ($value as $key => $val) {
                            foreach ($fieldstb as $field) {
                                if($field->Field == $key ){
                                    if($field->Type == 'date'){
                                        $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$val)));
                                    }else{
                                        $data[$key] = $val;
                                    }
                                    break;
                                }
                            }
                            if ($key == $this->primaryKey) {
                                $pKey = $val;
                            }
                        }
                        $result = DB::table($tb)
                                ->where($this->primaryKey, $pKey)
                                ->limit(1)
                                ->update($data);

                        $this->audit($user_id,$ip,$tb,'UPDATE',$data);
                    }
                }else{
                    foreach ($fields as $key => $value) {
                        foreach ($fieldstb as $field) {
                            if($field->Field == $key ){
                                if($field->Type == 'date'){
                                    $data[$key] = date('Y-m-d', strtotime(str_replace('/','-',$value)));
                                }else{
                                    $data[$key] = $value;
                                }
                                break;
                            }
                        }
                        if ($key == $this->primaryKey) {
                            $pKey = $value;
                        }
                    };
                    $result = DB::table($tb)
                        ->where($this->primaryKey, $pKey)
                        ->limit(1)
                        ->update($data);
                    $this->audit($user_id,$ip,$tb,'UPDATE',$data);
                }
                DB::commit();
                $result = $this->getResponseSucces($result);
            } catch (\Throwable $th) {
                DB::rollback();
                $result = $this->getErrorResponse('Error en la base de datos');
                throw $th;
            }
            return  $result;
        }
    }

    /**
     * Retorna los datos de un query
     *
    */

    public function sqlQuery(string $sqlStatement, string $sqlStatementCount, array $searchFields , $query = '', $start = 0, $limit = 30, $where = '', $order = '')
    {
        if(strlen($order) > 0){
            $order  = ' ORDER BY '.$order;
        }
        if (strlen($query) > 0) {
            $queryField = '';
            // $w      = (strlen($where) > 0) ? " WHERE ".$where." AND " : " WHERE " ;
            $w      = (strlen($where) > 0) ? " AND ".$where." " : "" ;
            foreach ($searchFields as $field) {
                $table  = DB::select($sqlStatement." WHERE ".$field." LIKE ? {$w} LIMIT 1", ["%".$query."%"]);
                if (count($table) >0 ) {
                    $queryField   = $field;
                    break;
                }
            }

            if(strlen($queryField) > 0){
                $total  = DB::select($sqlStatementCount." WHERE ".$queryField." LIKE ? {$w}", ["%".$query."%"]);
                $table  = DB::select($sqlStatement." WHERE ".$queryField." LIKE ? {$w} {$order} LIMIT ?, ?", ["%".$query."%", $start, $limit]);
                $result = $this->getReponseJson($table, $total[0]->total);
            }else {
                $table      = null;
                $result = $this->getReponseJson($table, 0);
            }
        }else {
            $w      = (strlen($where) > 0) ? " WHERE ".$where : "" ;
            $total  = DB::select($sqlStatementCount.$w);
            $table  = DB::select($sqlStatement.$w.$order." LIMIT ?, ?", [$start, $limit]);
            $result = $this->getReponseJson($table, $total[0]->total);
        }
        return $result;
    }


    /**
     * Retorna los datos de un select a una tabla
     *
    */

    public function getTable(String $tb = null, $query = '', $start = 0, $limit = 30, $where = [], $order = [], $primaryKey = 'id')
    {
        try {
            if (strlen($query) > 0) {
                $fiels      = $this->getColumns($tb);
                $queryField = '';
                foreach ($fiels as $field) {
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
                    $total  = DB::table($tb)
                                ->where($queryField, 'like', '%'. $query .'%')
                                ->count();

                    $table  = DB::table($tb)->orderBy($primaryKey, 'DESC')
                                ->where($queryField, 'like', '%'. $query .'%');

                    if($limit > 0){
                        $table->offset($start)->limit($limit);
                    }

                    $table  = $table->get();

                }else {
                    $total  = 0;
                    $table  = [];
                }
            }else {
                $total  = DB::table($tb);
                $table  = DB::table($tb);

                if(count($where) > 0){
                    $total->where($where);
                    $table->where($where);
                }

                if(count($order) > 0){
                    foreach ($order as $key => $value) {
                        $table->orderBy($key, $value);
                    }
                }

                if($limit > 0){
                    $table->offset($start)->limit($limit);
                }

                $total  = $total->count();
                $table  = $table->get();
            }
            return $this->getReponseJson($table, $total);
        } catch (Exception $e) {
            return $this->getErrorResponse($e->getMessage());
        }
    }

    /**
     * Retorna la respuesta Json de la API
     */
    public function getResponseSucces($lis = null)
    {
        return json_encode(array(
            'success' => true,
            'data' => $lis,
        ));
    }

    public function getErrorResponse($msg  = '')
    {
        return response()->json([
            'success' => false,
            'error' => $msg
        ],500);
    }


    /**
     * Retorna la respuesta Json de la API
     */

    public function getReponseJson($lis = array(), $total = 0){
        return response()->json([
            'success' => true,
            'records' => isset($lis) ? $lis : [],
            'total' => $total,
        ]);
    }

    public function getReponseMessage($msg = ''){
        return response()->json([
            'message'   => $msg,
            'success'   => true
        ]);
    }

    public function getColumns($table = '')
    {
        if (strlen($table) >0 ) {
            $select = DB::select('SHOW COLUMNS FROM '.$table);
        }else {
            $select = null;
        }

        return $select;
    }

}
