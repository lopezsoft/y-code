<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Mail\SignupActivate;
use App\Mail\RecoverMessage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;
use App\Models\users\PasswordReset;
use App\Traits\MessagesTrait;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
	use MessagesTrait;
	public function recoverActivate($token)
    {
        $passwordReset = PasswordReset::where('activation_token', $token)
                                ->where('activated',0)
                                ->first();
        if (!$passwordReset) {
            return redirect('/');
        }
        /**
         * Se activa el usuario
         */
        $passwordReset->activated        = true;
        $passwordReset->save();

        $user       = User::where('email',$passwordReset->email)
                        ->where('active',1)
                        ->first();

         /**
         * Se cambia el password del usuario
         */
        if($user){
            $user->password = $passwordReset->password;
            $user->save();
        }

        return redirect('/');
    }

    public function recover(Request $request)
    {
        DB::beginTransaction();
        try {
            $password   = bin2hex(random_bytes(12));
            $token      = Str::random(80);
            $user       = DB::table('users')
                ->where('email',$request->email)
                ->where('active',1)
                ->first();

            if(!$user) {
                return  $this->getErrorResponse("El correo {$request->email} no está registrado en nuestra base de datos.");
            }

            $passwordReset = PasswordReset::forceCreate([
                'email'             => $request->email,
                'activated'         => 0,
                'password'          => bcrypt($password),
                'activation_token'  => $token,
            ]);
            $passwordReset->save();

            $message    = [
                'company_name'          => "{$user->first_name} {$user->last_name}",
                'dni'                   => $password,
                'url'                   => url('/api/v1/auth/recover/activate/'.$token),
                'email'                 => $request->email
            ];
            Mail::to($request->email)->queue(new RecoverMessage($message));
            Mail::to('registro@ycodeaccounting.com')->queue(new RecoverMessage($message));
            DB::commit();

            return $this->getResponseMessage("Por favor revise su correo electrónico({$request->email}) y confirme el cambio de la contraseña.");

        } catch (Exception $e) {
            DB::rollBack();

            return $this->getErrorResponse($e->getMessage());
        }
    }

    public function createUser(Request $request) {
        $userExist  = DB::table('users')->where('email',$request->email)->first();
        $password   = bin2hex(random_bytes(12));
        $token      = Str::random(80);
        $model      = new MasterModel();
        $company    = $model->getCompany();
        DB::beginTransaction();
        try {
            if(!$userExist){
                $user = User::forceCreate([
                    'name'              => $request->name,
                    'email'             => $request->email,
                    'type_id'           => $request->type_id,
                    'password'          => bcrypt($password),
                    'activation_token'  => $token,
                ]);
                $user->save();
                DB::insert('insert into business_users (user_id, company_id, type_id) values (?, ?, ?)', [$user->id, $company->id, $request->type_id]);
                $message    = [
                    'company_name'          => $request->name,
                    'dni'                   => $password,
                    'url'                   => url('/api/ubl2.1/auth/signup/activate/'.$token),
                    'email'                 => $request->email
                ];
                Mail::to($request->email)->queue(new SignupActivate($message));
                DB::commit();

                return response()->json([
                    'message'   => 'Usuario creado con éxito. Confirme su dirección de correo electrónico: '.$request->email,
                    'success'   => true
                ]);
            }else{
                $user   = $userExist;
                $query  = DB::table('business_users')
                        ->where('company_id', $company->id)
                        ->where('user_id', $user->id)
                        ->first();
                if($query) {
                    return $model->getResponseMessage('El usuario ya tiene una cuenta registrada.');
                }

                DB::insert('insert into business_users (user_id, company_id, type_id) values (?, ?, ?)', [$user->id, $company->id, $request->type_id]);
                $message    = [
                    'company_name'          => $request->name,
                    'dni'                   => $password,
                    'url'                   => url('/api/ubl2.1/auth/signup/activate/'.$token),
                    'email'                 => $request->email
                ];
                Mail::to($request->email)->queue(new SignupActivate($message));
                DB::commit();
                return response()->json([
                    'message'   => 'Usuario asignado con éxito. Confirme su dirección de correo electrónico: '.$request->email,
                    'success'   => true
                ]);
            }
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message'   => 'Internal Server Error',
                'success'   => false,
                'payload'   => $e->getMessage()
            ], 500);
        }
    }

    public function getUsers(Request $request)
    {
        $user       = auth()->user();
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $uid        = $request->uid;

        if(isset($uid)) {
            $query  = DB::table('business_users')
                    ->where('company_id', $company->id)
                    ->where('user_id', $uid)
                    ->first();
            if(!$query) {
                return $this->getResponseMessage('El usuario que intenta consultar no exite.');
            }
            $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ? AND a.id = ?", [$company->id, $uid]);
            return  $this->getRecordsResponse($query, count($query));
        }else{
            
            if($user->type_id == 1) { // Administrador Carga todos los usuarios
                $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ?", [$company->id]);
            }else { // Carga solo usuario conectado
                $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ? AND a.id = ?", [$company->id, $user->id]);
            }
            return  $this->getRecordsResponse($query, count($query));
        }
    }

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
        return redirect('/auth/login');;
    }

    public function signup(Request $request)
    {
				$credentials  = DB::table('users')->where('email',$request->email)->first();

        if ($credentials) {
            return response()->json([
							'message' => "Ya existe un usuario con el correo: {$request->email}.",
							'success' => false,
						], 500);
        }

        $request->validate([
            'first_name'  => 'required|string',
            'last_name'  	=> 'required|string',
            'email'    		=> 'required|string|email|unique:users',
            'password' 		=> 'required|string|confirmed',
        ]);

        try {
					
					DB::beginTransaction();
					$activation_token       = Str::random(80);
					$user = new User([
							'first_name'      	=> $request->first_name,
							'last_name'         => $request->last_name,
							'email'             => $request->email,
							'type_id'           => 1,
							'activation_token'  => $activation_token,
							'password'          => bcrypt($request->password),
					]);
					$user->save();

					$message    = [
							'name'                  => "{$request->first_name} {$request->last_name}",
							'url'                   => url('/api/v1/auth/signup/activate/'.$activation_token)
					];
					Mail::to($request->email)->queue(new SignupActivate($message));
					Mail::to("registro@ycodeaccounting.com")->queue(new SignupActivate($message));

					DB::commit();

					return response()->json([
							'message' => 'Usuario creado con exito!. Debe ingresar a su correo y confirmar la cuenta.'
					], 201);
				} catch (Exception $e) {
					DB::rollBack();

					return response()->json([
							'message'   => 'Internal Server Error',
							'success'   => false,
							'payload'   => $e->getMessage()
					], 500);
			}
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
            'firstName'     => $user->first_name,
            'lastName'      => $user->last_name,
            'avatar'       	=> $user->avatar,
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


		public function getUser(Request $request)
    {
        $model      = new MasterModel();
        $company    = $model->getCompany();
        $user       = $request->user();
        $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                        FROM users AS a
                        LEFT JOIN user_types AS b ON a.type_id = b.id
                        LEFT JOIN business_users AS c ON c.user_id = a.id
                        WHERE c.company_id = ? AND a.id = ?", [$company->id, $user->id]);
        return  $this->getRecordsResponse($query, count($query));
    }

    public function user(Request $request)
    {
        return $this->getRecordsResponse($request->user(), 1) ;
    }

    public function updateUser($id, Request $request)
    {
        $table      = 'users';
        $user       = auth()->user();
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        // $company    = $model->getCompany();
        $records->id= $id;
        if(isset($user->pasw)){
            if(strlen($user->pasw) > 6){
                $records->password  = bcrypt($user->pasw);
            }
        }

        if(isset($records->imgdata)){
            $occcurs    = strpos($records->imgdata, ",");
            //get the base-64 from data
            $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);

            if(strlen($base64_str)  > 0 &&  $occcurs > 0){
                //decode base64 string
                $image              = base64_decode($base64_str);
                $imgname            = $records->imgname;
                $records->logo      = $this->putFile($id, $image, $imgname);
                $result = $model->updateData($records,$table, $ip);
            }else{
                $result = $model->updateData($records,$table, $ip);
            }
        }else{
            $result =   $model->updateData($records,$table, $ip);
        }
        $user       = User::where('id', $user->id)->first();
        $result = $this->getRecordsResponse($user, 1);
        return $result;
    }

    private function putFile($id, $data, $imgname){
        $path  = "users/{$id}/profile/".$imgname;
        Storage::disk('public')->put($path, $data);
        return Storage::url($path);
    }
}
