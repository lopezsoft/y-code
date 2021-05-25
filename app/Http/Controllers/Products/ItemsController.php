<?php

namespace App\Http\Controllers\products;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class ItemsController extends Controller
{
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $records    = $request;
            $records    = json_decode($request->input('records'));
            $units      = json_decode($request->input('units'));
            $user       = auth()->user();
            $ip         = $request->ip();
            $model      = new MasterModel();
            $company    = $model->getCompany();
            if(!$company){
                $data       = [
                    'class_id'              => $records->class_id,
                    'tax_sales_id'          => $records->tax_sales_id,
                    'unit_id'               => $records->unit_id,
                    'tax_bill_id'           => $records->tax_bill_id,
                    'sku'                   => $records->sku ?? '',
                    'qr_code'               => $records->qr_code ?? '',
                    'product_name'          => $records->product_name,
                    'notes'                 => $records->notes ?? null ,
                    'description_sales'     => $records->description_sales ?? '',
                    'shopping_description'  => $records->shopping_description ?? '',
                    'barcode'               => $records->barcode ?? '',
                    'state'                 => $records->state ?? 1,
                    'sale_price'            => $records->sale_price ?? 0,
                    'base_factor'           => $records->base_factor ?? 1,
                    'purchase_cost'         => $records->purchase_cost ?? 0,
                    'stock_min'             => $records->stock_min ?? 0,
                    'stock_max'             => $records->stock_max ?? 0,
                    'percentage_gain'       => $records->percentage_gain ?? 0,
                    'average_cost'          => $records->average_cost ?? 0,
                    'recipe'                => $records->recipe ?? false,
                    'perishable'            => $records->perishable ?? false,
                ];
                $db         = $company->database_name.".";
                $table      = $db."products";
                $id         = DB::table($table)->insertGetId($data);

                $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                $data['id'] = $id;
                $result     = $model->getReponseJson($data, 1);

                $brand_id           = $records->brand_id;
                $sub_category_id    = $records->sub_category_id;
                $category_id        = $records->category_id;

                // Brands
                if($brand_id){
                    $table      = $db."product_brands";
                    $data       = [
                        'product_id'    => $id,
                        'brand_id'      => $brand_id,
                        'active'        => 1,
                    ];
                    DB::table($table)->insert($data);
                    $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                }

                // Categories
                if($category_id){
                    $table      = $db."product_categories";
                    $data       = [
                        'product_id'    => $id,
                        'category_id'   => $category_id,
                        'active'        => 1,
                    ];
                    DB::table($table)->insert($data);
                    $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                }

                if($sub_category_id){
                    $table      = $db."product_subcategories";
                    $data       = [
                        'product_id'    => $id,
                        'category_id'   => $category_id,
                        'active'        => 1,
                    ];
                    DB::table($table)->insert($data);
                    $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                }

                // Measurements units
                foreach ($units as $unit) {
                    if($unit->id > 0 ){
                        $data   = [
                            'id'            => $unit->id,
                            'unit_id'       => $unit->unit_id,
                            'purchase_cost' => $unit->purchase_cost,
                            'sale_price'    => $unit->sale_price,
                        ];
                       $model->updateData($data,$db.'product_units_measure', $ip);
                    }else{
                        $data   = [
                            'product_id'    => $id,
                            'unit_id'       => $unit->unit_id,
                            'purchase_cost' => $unit->purchase_cost,
                            'sale_price'    => $unit->sale_price,
                            'state'         => 1,
                        ];
                        DB::table($db.'product_units_measure')->insert($data);
                        $model->audit($user->id, $ip, $db.'product_units_measure', 'INSERT', $data);
                    }
                }

            }
            DB::commit();
            return $result;
        } catch (Exception $e) {
            DB::rollBack();
            return $model->getErrorResponse($e->getMessage());
        }
    }

    public function getSalesProducts(Request $request)
    {
        $model      				= new MasterModel();
        $company    				= $model->getCompany();
        $db         				= $company->database_name.'.';
        $point_of_sale_id   = $request->point_of_sale_id ?? 0; 
        $type   						= $request->type ?? 0;
        $querySearch				= $request->query_search ?? "";
        $start   						= $request->start ?? 0;
        $limit   						= $request->limit ?? 60;

        $query      				= DB::select("CALL {$db}sp_select_sales_products(?, ?, ?, ?, ?)",[$point_of_sale_id, $querySearch, $type, $start, $limit]);

        return $model->getReponseJson($query, count($query));
    }

    public function getAllProducts(Request $request)
    {
        $model      				= new MasterModel();
        $company    				= $model->getCompany();
        $db         				= $company->database_name.'.';
        $point_of_sale_id   = $request->point_of_sale_id ?? 0;

        $query      				= DB::select("CALL {$db}sp_select_products_all(?)",[$point_of_sale_id]);

        return $model->getReponseJson($query, count($query));
    }

    public function select(Request $request)
    {
        $model  = new MasterModel();
        $company= $model->getCompany();
        $start  = $request->start;
        $limit  = $request->limit;
        $query  = $request->input('query');
        $uid    = $request->uid;
        if($company){
            $table  = $company->database_name.'.';
            $limit  = isset($limit) ? $limit : 20;
            $start  = isset($start) ? $start : 0;
            $where  = 'a.state = 1';
            if(isset($uid)){
                $where  = "a.id = {$uid}";
            }
            $sqlStatement       = "SELECT a.*, b.product_class_name, c.rate_value AS tax_sales,
                d.rate_value AS tax_bill, e.brand_id, f.category_id, g.category_id AS sub_category_id
                FROM {$table}products a
                LEFT JOIN {$table}product_class AS b ON a.class_id = b.id
                LEFT JOIN {$table}tax_rates AS c ON a.tax_sales_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_bill_id = d.id
                LEFT JOIN {$table}product_brands AS e ON e.product_id = a.id
                LEFT JOIN {$table}product_categories AS f ON f.product_id = a.id
                LEFT JOIN {$table}product_subcategories AS g ON g.product_id = a.id";
            $sqlStatementCount  = "SELECT COUNT(a.id) AS total  FROM {$table}products a
                LEFT JOIN {$table}product_class AS b ON a.class_id = b.id
                LEFT JOIN {$table}tax_rates AS c ON a.tax_sales_id = c.id
                LEFT JOIN {$table}tax_rates AS d ON a.tax_bill_id = d.id ";
            $searchFields   = ['a.product_name','b.product_class_name','a.internal_code', 'aproduct_description'];
            return $model->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields, $query, $start, $limit, $where, 'b.product_class_name, a.product_name');
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function update($id, Request $request)
    {
        $user       = auth()->user();
        $records    = json_decode($request->input('records'));
        $units      = json_decode($request->input('units'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            DB::beginTransaction();
            $db             = $company->database_name.'.';
            $table          = $db.'products';
            $records->id    = $id;
            try {

                $brand_id           = $records->brand_id;
                $sub_category_id    = $records->sub_category_id;
                $category_id        = $records->category_id;

                // Brands
                $table      = $db."product_brands";
                $query      = DB::table($table)
                                ->where(['product_id'   => $id])
                                ->first();
                if($brand_id > 0 ){
                    if($query){
                        $data       = [
                            'brand_id'      => $brand_id,
                        ];
                        DB::table($table)
                            ->where('id', $query->id)
                            ->update($data);

                        $model->audit($user->id, $ip,  $table, 'UPDATE', $data);
                    }else{
                        $data       = [
                            'product_id'    => $id,
                            'brand_id'      => $brand_id,
                            'active'        => 1,
                        ];
                        DB::table($table)->insert($data);
                        $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                    }
                }else if($query){
                    DB::delete("delete from {$table} where id = ?", [$query->id]);
                    $model->audit($user->id, $ip,  $table, 'DELETE', $query);
                }

                // Categories
                $table      = $db."product_categories";
                $query      = DB::table($table)
                                ->where(['product_id'   => $id])
                                ->first();
                if($category_id > 0 ){
                    if($query){
                        $data       = [
                            'category_id'      => $category_id,
                        ];
                        DB::table($table)
                            ->where('id', $query->id)
                            ->update($data);
                        $model->audit($user->id, $ip,  $table, 'UPDATE', $data);
                    }else{
                        $data       = [
                            'product_id'    => $id,
                            'category_id'   => $category_id,
                            'active'        => 1,
                        ];
                        DB::table($table)->insert($data);
                        $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                    }
                }else if($query){
                    DB::delete("delete from {$table} where id = ?", [$query->id]);
                    $model->audit($user->id, $ip,  $table, 'DELETE', $query);
                }

                $table      = $db."product_subcategories";
                $query      = DB::table($table)
                                ->where(['product_id'   => $id])
                                ->first();

                if($sub_category_id > 0 ){
                    if($query){
                        $data       = [
                            'category_id'      => $sub_category_id,
                        ];
                        DB::table($table)
                            ->where('id', $query->id)
                            ->update($data);
                        $model->audit($user->id, $ip,  $table, 'UPDATE', $data);
                    }else{
                        $data       = [
                            'product_id'    => $id,
                            'category_id'   => $sub_category_id,
                            'active'        => 1,
                        ];
                        DB::table($table)->insert($data);
                        $model->audit($user->id, $ip,  $table, 'INSERT', $data);
                    }
                }else if($query){
                    DB::delete("delete from {$table} where id = ?", [$query->id]);
                    $model->audit($user->id, $ip,  $table, 'DELETE', $query);
                }

                // Measuremenets units
                foreach ($units as $unit) {
                    if($unit->id > 0 ){
                        $data   = (Object) [
                            'id'            => $unit->id,
                            'unit_id'       => $unit->unit_id,
                            'purchase_cost' => $unit->purchase_cost,
                            'unit_name'     => $unit->unit_name,
                            'sale_price'    => $unit->sale_price,
                        ];
                        $model->updateData($data,$db.'product_units_measure', $ip);
                    }else{
                        $data   = [
                            'product_id'    => $id,
                            'unit_id'       => $unit->unit_id,
                            'unit_name'     => $unit->unit_name,
                            'purchase_cost' => $unit->purchase_cost,
                            'sale_price'    => $unit->sale_price,
                            'state'         => 1,
                        ];
                        DB::table($db.'product_units_measure')->insert($data);
                        $model->audit($user->id, $ip, $db.'product_units_measure', 'INSERT', $data);
                    }
                }
                $table          = $db.'products';
                if(isset($records->imgdata)){
                    //get the base-64 from data
                    $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);
                    if(strlen($base64_str) > 0){
                        //decode base64 string
                        $image              = base64_decode($base64_str);
                        $imgname            = $records->imgname;
                        $records->image     = $this->putFile($company->id, $image, $imgname);
                        $result = $model->updateData($records,$table, $ip);
                    }else{
                        $result = $model->updateData($records,$table, $ip);
                    }
                }else{
                    $result = $model->updateData($records,$table, $ip);
                }
                DB::commit();
            } catch (Exception $e) {
                DB::rollback();
                $result = $model->getErrorResponse($e->getMessage());
            }
            return  $result;
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    public function delete($id, Request $request)
    {
        $ip         = $request->ip();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        if($company){
            $table          = $company->database_name.'.products';
            $records = (object)[
                'id'    => $id,
                'state' => 2
            ];
            return   $model->updateData($records,$table, $ip);
        }else{
            return $model->getErrorResponse('Error en el servidor.');
        }
    }

    private function putFile($company_id, $data, $imgname){
        $path   = "{$company_id}/products/terms/".$imgname;
        Storage::disk('company')->put($path, $data);
        return Storage::url($path);
    }
}
