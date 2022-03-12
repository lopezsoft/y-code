<?php

namespace App\Models\Companies;

use Illuminate\Http\Request;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Storage;

class CreateDB
{
    static function create(Request $request) {
        $sqlFile    = public_path('storage/scripts/blank_ycode.sql');

        if(file_exists($sqlFile)){
            $model      = new MasterModel();
            $company    = $model->getCompany();

            set_time_limit(0);
            $db         = $company->database_name;
            try {
                DB::statement("DROP DATABASE IF EXISTS {$db}");
                DB::statement("CREATE DATABASE {$db}");
                $dbhost = env('DB_HOST','localhost');
                $dbuser = env('DB_USERNAME','root');
                $dbpass = env('DB_PASSWORD','');

                $output = $sqlFile;
                exec("D:\wamp64\bin\mariadb\mariadb10.3.23\bin\mysql -h$dbhost --user=$dbuser --database=$db --password=$dbpass < $output");
                return response()->json([
                    'success'   => true,
                    'message'   => 'Base de datos creada exitosamente.',
                ]);

            } catch (Exception $e) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage(),
                ],500);
            }
        }else {
            return response()->json([
                'success' => false,
                'message' => 'No existe el SCRIPT para crear la base de datos. Por favor comuniquese con el soporte técnico.'
            ],500);
        }
    }
}
