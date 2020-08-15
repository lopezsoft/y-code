<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Mail\SignupActivate;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function signupActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json(['message' => 'El token de activación es inválido'], 404);
        }
        $user->active           = true;
        $user->activation_token = '';
        $user->email_verified_at= date('Y-m-d H:i:s');
        $user->save();
        return redirect('/login');;
    }

    public function signup(Request $request)
    {
        $credentials = request(['email', 'password']);

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => "Ya existe un usuario con el correo: {$request->email}."], 401);
        }

        $request->validate([
            'name'     => 'required|string',
            'email'    => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        $activation_token   = Str::random(80);;
        $user = new User([
            'name'              => $request->name,
            'email'             => $request->email,
            'type_id'           => 1,
            'activation_token'  => $activation_token,
            'password'          => bcrypt($request->password),
        ]);

        $message    = [
            'name'                  => $request->name,
            'url'                   => url('/api/v1/auth/signup/activate/'.$activation_token)
        ];
        Mail::to($request->email)->queue(new SignupActivate($message));

        $user->save();

        return response()->json([
            'message' => 'Usuario creado con exito!. Debe ingresar a su correo y confirmar la cuenta.'], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'       => 'required|string|email',
            'password'    => 'required|string',
            'remember_me' => 'boolean',
        ]);
        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'No puede acceder al sistema, verifique que su cuenta esté activa.'], 401);
        }
        $user           = $request->user();
        $tokenResult    = $user->createToken($user->email);
        $token          = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();
        return response()->json([
            'message'       => 'Hola Bienvenid@...',
            'success'       => true,
            'mail'          => $user->email,
            'user'          => $user->name,
            'access_token'  => $tokenResult->accessToken,
            'token_type'    => 'Bearer',
            'expires_at'    => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' =>
            'Successfully logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
