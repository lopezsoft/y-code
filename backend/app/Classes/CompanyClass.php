<?php

namespace App\Classes;
use App\Common\HttpResponseMessages;
use App\Models\Company;
use App\Models\Memberships\CompanyMembership;
use App\Models\Software;
use App\Models\User;
use App\Models\User\BusinessUser;
use App\Modules\Company\Companies;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CompanyClass
{
    /**
     * @throws Exception
     */
    public static function create(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $auth       = Auth::user();
            $dni        = $request->dni;
            $company    = Company::where('dni', $dni)->first();
            if ($company) {
                return HttpResponseMessages::getResponse400([
                    'message'   => 'La empresa ya existe',
                    'company'   => $company,
                ]);
            }
            DB::beginTransaction();
            $company    = Companies::store([
                'country_id'            => $request->country_id ?? 45,
                'city_id'               => $request->city_id    ?? 836,
                'identity_document_id'  => $request->identity_document_id ?? 3,
                'type_organization_id'  => $request->type_organization_id ?? 1,
                'tax_regime_id'         => $request->tax_regime_id ?? 2,
                'tax_level_id'          => $request->tax_level_id ?? 5,
                'company_name'          => $request->company_name,
                'trade_name'            => $request->trade_name ?? null,
                'reference'             => $request->reference ?? null,
                'dni'                   => $request->dni,
                'dv'                    => $request->dv,
                'address'               => $request->address ?? null,
                'location'              => $request->location ?? null,
                'postal_code'           => $request->postal_code ?? null,
                'mobile'                => $request->mobile ?? null,
                'phone'                 => $request->phone  ?? null,
                'email'                 => $request->email,
                'web'                   => $request->web ?? null
            ], $auth);
            DB::commit();
            $company    = BusinessUser::query()
                ->where('user_id', $auth->id)
                ->where('company_id', $company->id)
                ->first();
            $user = User::findOrFail($auth->id);
            return HttpResponseMessages::getResponse([
                'message'   => 'Empresa creada correctamente',
                'company'   => $company,
                'user'      => $user,
            ]);
        }catch (Exception $e){
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }
    public static function getSoftware($request, Company $company)
    {
        return Software::where('type_id', $request->type_id ?? 1)
            ->where('company_id', $company->id)
            ->first();
    }

    /**
     * @throws Exception
     */
    public static function getCompany($request): Company
    {
        $companyId = $request->companyId ?? null;
        if(!$companyId) {
            throw new Exception('No se ha enviado el ID de la empresa');
        }
        return Company::where('id', $companyId)->first();
    }
}
