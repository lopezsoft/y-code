<?php

namespace App\Services\Company;

use App\Models\Company;
use Exception;
use Illuminate\Support\Facades\DB;

class CompanyService
{
    public static function getCompany()
    {
        try {
            $user           = auth()->user();
            $businessUser   = DB::table('business_users')->where('user_id', $user->id)->first();
            if(!$businessUser){
                throw new Exception('No se encontró la empresa asociada al usuario.');
            }
            return Company::where('id', $businessUser->company_id)->first();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
    public static function getCompanyId(){
        $user           = auth()->user();
        $businessUser   = DB::table('business_users')->where('user_id', $user->id)->first();
        return ($businessUser) ? $businessUser->company_id : 0;
    }
}
