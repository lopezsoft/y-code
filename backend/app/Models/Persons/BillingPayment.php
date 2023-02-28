<?php

namespace App\Models\Persons;

use Illuminate\Support\Facades\DB;
use App\Models\Company;

class BillingPayment
{
    static function createOrUpdate($personId, $records, Company $company) {
        $db             = "{$company->database_name}.";
        $table          = "{$db}billing_payment";

        $query          = DB::table($table)
                            ->where(['customer_id' => $personId])
                            ->first();
        $date   = (strlen($records->initial_date) > 0) ? date('Y-m-d', strtotime(str_replace('/','-',$records->initial_date))) : null;
        $data   = [
            'customer_id'           => $personId,
            'tax_rate_id'           => $records->tax_rate_id ?? 0,
            'means_payment_id'      => $records->means_payment_id ?? 0,
            'sales_term'            => $records->sales_term ?? 0,
            'accounting_account_id' => $records->accounting_account_id ?? 0,
            'initial_balance'       => $records->initial_balance ?? null,
            'initial_date'          => $date,
        ];
        if($query){
            DB::table($table)->where(['id'  => $query->id])->update($data);
        }else{
            DB::table($table)->insert($data);
        }
    }
}
