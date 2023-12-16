<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use App\Modules\Company\Companies;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'first_name'    => ['required', 'string', 'max:65'],
            'last_name'     => ['required', 'string', 'max:65'],
            'email'         => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password'      => ['required', 'confirmed', Rules\Password::defaults()],
            'dni'           => ['required', 'string', 'unique:'.Company::class],
            'company_name'  => ['required', 'string', 'max:65'],
        ]);
        try {
            DB::beginTransaction();
            $user = User::create([
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'type_id'       => $request->multi_company ? 3 : 1,
                'password'      => Hash::make($request->password),
                'active'        => 1,
            ]);
            Companies::store([
                'country_id'            => 45,
                'city_id'               => $request->city_id    ?? 149,
                'identity_document_id'  => 3,
                'type_organization_id'  => 1,
                'tax_regime_id'         => 2,
                'tax_level_id'          => 5,
                'company_name'          => $request->company_name,
                'trade_name'            => '',
                'reference'             => '',
                'dni'                   => $request->dni,
                'dv'                    => $request->dv ?? 0,
                'address'               => '',
                'location'              => '',
                'postal_code'           => '',
                'mobile'                => '',
                'phone'                 => '' ,
                'email'                 => $request->email,
                'web'                   => ''
            ], $user);

            DB::commit();
            event(new Registered($user));
            Auth::login($user);
            return response()->noContent();

        }catch (Exception $e) {
            DB::rollBack();
            return response([
                'message' => 'Error al crear la cuenta',
                'error' => $e->getMessage(),
            ], 400);
        }
    }
}
