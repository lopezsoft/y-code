<?php

namespace App\Http\Controllers;

use App\Services\Auth\AuthAccessService;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Mail\SignupActivate;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Core\MasterModel;
use App\Traits\MessagesTrait;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    use MessagesTrait;
    public function createUser(Request $request)
    {
        $userExist  = DB::table('users')->where('email', $request->email)->first();
        $password   = bin2hex(random_bytes(12));
        $token      = Str::random(80);
        $model      = new MasterModel();
        $company    = $model->getCompany();
        DB::beginTransaction();
        try {
            if (!$userExist) {
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
                    'url'                   => url('/api/ubl2.1/auth/signup/activate/' . $token),
                    'email'                 => $request->email
                ];
                Mail::to($request->email)->queue(new SignupActivate($message));
                DB::commit();

                return response()->json([
                    'message'   => 'Usuario creado con éxito. Confirme su dirección de correo electrónico: ' . $request->email,
                    'success'   => true
                ]);
            } else {
                $user   = $userExist;
                $query  = DB::table('business_users')
                    ->where('company_id', $company->id)
                    ->where('user_id', $user->id)
                    ->first();
                if ($query) {
                    return $model->getResponseMessage('El usuario ya tiene una cuenta registrada.');
                }

                DB::insert('insert into business_users (user_id, company_id, type_id) values (?, ?, ?)', [$user->id, $company->id, $request->type_id]);
                $message    = [
                    'company_name'          => $request->name,
                    'dni'                   => $password,
                    'url'                   => url('/api/ubl2.1/auth/signup/activate/' . $token),
                    'email'                 => $request->email
                ];
                Mail::to($request->email)->queue(new SignupActivate($message));
                DB::commit();
                return response()->json([
                    'message'   => 'Usuario asignado con éxito. Confirme su dirección de correo electrónico: ' . $request->email,
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

        if (isset($uid)) {
            $query  = DB::table('business_users')
                ->where('company_id', $company->id)
                ->where('user_id', $uid)
                ->first();
            if (!$query) {
                return $this->getResponseMessage('El usuario que intenta consultar no exite.');
            }
            $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ? AND a.id = ?", [$company->id, $uid]);
            return  $this->getRecordsResponse($query, count($query));
        } else {

            if ($user->type_id == 1) { // Administrador Carga todos los usuarios
                $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ?", [$company->id]);
            } else { // Carga solo usuario conectado
                $query      = DB::select("SELECT a.id, a.type_id, a.first_name, a.last_name, a.email, a.avatar, a.active, b.user_type_name AS user_type
                            FROM users AS a
                            LEFT JOIN user_types AS b ON a.type_id = b.id
                            LEFT JOIN business_users AS c ON c.user_id = a.id
                            WHERE c.company_id = ? AND a.id = ?", [$company->id, $user->id]);
            }
            return  $this->getRecordsResponse($query, count($query));
        }
    }

    public function login(Request $request): JsonResponse
    {
        return AuthAccessService::login($request);
    }

    public function logout(Request $request): JsonResponse
    {
        return AuthAccessService::logout($request);
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
        return $this->getRecordsResponse($request->user(), 1);
    }

    public function updateUser($id, Request $request)
    {
        $table      = 'users';
        $user       = auth()->user();
        $records    = json_decode($request->input('records'));
        $ip         = $request->ip();
        $model      = new MasterModel();
        // $company    = $model->getCompany();
        $records->id = $id;
        if (isset($user->pasw)) {
            if (strlen($user->pasw) > 6) {
                $records->password  = bcrypt($user->pasw);
            }
        }

        if (isset($records->imgdata)) {
            $occcurs    = strpos($records->imgdata, ",");
            //get the base-64 from data
            $base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);

            if (strlen($base64_str)  > 0 &&  $occcurs > 0) {
                //decode base64 string
                $image              = base64_decode($base64_str);
                $imgname            = $records->imgname;
                $records->logo      = $this->putFile($id, $image, $imgname);
                $result = $model->updateData($records, $table, $ip);
            } else {
                $result = $model->updateData($records, $table, $ip);
            }
        } else {
            $result =   $model->updateData($records, $table, $ip);
        }
        $user       = User::where('id', $user->id)->first();
        $result = $this->getRecordsResponse($user, 1);
        return $result;
    }

    private function putFile($id, $data, $imgname)
    {
        $path  = "users/{$id}/profile/" . $imgname;
        Storage::disk('public')->put($path, $data);
        return Storage::url($path);
    }
}
