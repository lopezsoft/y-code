<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
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
            'address'       => ['required', 'string', 'min:10'],
            'country_id'    => ['required', 'exists:countries,id'],
        ]);
        try {
            DB::beginTransaction();
            $user = User::create([
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'type_id'       => $request->type_id ?? 1,
                'password'      => Hash::make($request->password),
                'active'        => 1,
            ]);
            $database_name  = strtolower('ycode_db' . Str::random(6));

            $data       = [
                'country_id'            => $request->country_id,
                'database_name'         => $database_name,
                'folder_name'           => '',
                'dni'                   => $request->dni,
                'company_name'          => $request->company_name,
                'address'               => $request->address,
            ];


            $company_id = DB::table('companies')->insertGetId($data);

            DB::insert('insert into business_users (user_id, company_id) values (?, ?)', [$user->id, $company_id]);

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
