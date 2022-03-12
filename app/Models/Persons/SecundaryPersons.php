<?php

namespace App\Models\Persons;

use Illuminate\Support\Facades\DB;
use App\Models\Company;
use Exception;

class SecundaryPersons
{
    static function createOrUpdate($childId, $records, Company $company) {
        $db             = "{$company->database_name}.";
        $table          = "{$db}secondary_persons";

        if(isset($records->parent_id)){
            $query          = DB::table($table)
                                ->where(['child_id' => $childId])
                                ->first();

            if($query) {
                if($records->parent_id > 0){
                    $data   = [
                        "parent_id"     => $records->parent_id,
                    ];
                    DB::table($table)->where(['id'  => $query->id])->update($data);
                }else{
                    DB::table($table)->where(['id'  => $query->id])->delete();
                }
            }else if($records->parent_id > 0) {
                $data   = [
                    "parent_id"     => $records->parent_id,
                    "child_id"      => $childId,
                ];
                DB::table($table)->insert($data);
            }
        }
    }
}
