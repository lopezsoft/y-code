<?php

namespace App\Services\Auth;

use App\Common\HttpResponseMessages;
use App\Common\MessageExceptionResponse;
use App\Models\Company;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthAccessService
{
    public static function login($request): JsonResponse
    {
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',
            'remember_me' => 'boolean',
        ]);

        try {
            $credentials                = request(['email', 'password']);
            $credentials['deleted_at']  = null;
            if (!Auth::attempt($credentials)) {
                throw new Exception('No puede acceder al sistema, verifique que su cuenta esté activa.', 404);
            }

            $user               = $request->user();
            if($user->active == 0){
                throw new Exception('El usuario se encuentra inactivo. Comuníquese con el administrador.', 404);
            }
            if (!$user->hasVerifiedEmail()) {
                throw new Exception('El correo electrónico no ha sido verificado. Comuníquese con el administrador.', 404);
            }
            DB::beginTransaction();
            $tokenResult        = $user->createToken($user->email);
            $token              = $tokenResult->token;
            $token->expires_at  = Carbon::now()->addDays(3);
            if ($request->remember_me) {
                $token->expires_at  = Carbon::now()->addWeeks(3);
            }
            $token->save();
            $buser      = DB::table('business_users')->where('user_id', $user->id)->first();
            $company    = Company::where('id', $buser->company_id)->first();
            $data       = DB::select("SHOW DATABASES LIKE  '{$company->database_name}'");
            if (COUNT($data) > 0) {
                $companyCreated    = 1;
            } else {
                $companyCreated    = 0;
            }
            DB::commit();
            return HttpResponseMessages::getResponse([
                'access_token'      => $tokenResult->accessToken,
                'token_type'        => 'Bearer',
                'company'           => (object) [
                    'address'           => $company->address,
                    'company_name'      => $company->company_name,
                    'dni'               => $company->dni,
                    'lockdate'          => $company->lockdate,
                ],
                'user'              => $user,
                'companyCreated'    => $companyCreated,
                'expires_at'        => Carbon::parse($token->expires_at)->toDateTimeString(),
                'message'           => 'Bienvenido a Y-CODE ACCOUNTING. Su sesión ha sido iniciada con éxito.'
            ]);
        }catch (Exception $e){
            DB::rollBack();
            return MessageExceptionResponse::response($e);
        }
    }

    public static function logout($request): JsonResponse
    {
        try {
            $request->user()->token()->revoke();
            return HttpResponseMessages::getResponse([
                'message' => 'Successfully logged out'
            ]);
        } catch (Exception $e) {
            return HttpResponseMessages::getResponse500([
                'message' => $e->getMessage()
            ]);
        }
    }

}
