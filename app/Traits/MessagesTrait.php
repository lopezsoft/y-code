<?php

namespace App\Traits;

use App\Company;
use Illuminate\Support\Facades\Auth;
use App\User;
use Exception;
use Illuminate\Http\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
/**
 * Messages Trait
 */
trait MessagesTrait
{

		function realDate($date) {
			return date('Y-m-d', strtotime(str_replace('/','-',$date ?? date('Y-m-d'))));
		}
    /**
     * Retorna el total de decimales de un numero
     */
    function totalDecimals(string $amount) {
        $result = 0;
        if(strlen($amount) > 0) {
            $value = substr($amount, strpos($amount, ".") + 1);
            for ($i=0; $i < strlen($value); $i++) {
                $n  = substr($value,$i,1);
                if(intval($n) > 0){
                    $result += 1;
                }
            }
        }
        return $result;
    }

    /**
     * Función Para extraer el digito de verificación de un documento en Colombia
     * @Param int Numero de identificación tributaria
     */

    public function digitVerificacion(int $Number = 0)
    {
        $vector    = array();
        if ($Number > 0) {
            $SValue         = strval($Number);
            $Residue        = 0;
            $Accumulator    = 0;
            $vector[1]      =  3 ;
            $vector[2]      =  7 ;
            $vector[3]      = 13 ;
            $vector[4]      = 17 ;
            $vector[5]      = 19 ;
            $vector[6]      = 23 ;
            $vector[7]      = 29 ;
            $vector[8]      = 37 ;
            $vector[9]      = 41 ;
            $vector[10]     = 43 ;
            $vector[11]     = 47 ;
            $vector[12]     = 53 ;
            $vector[13]     = 59 ;
            $vector[14]     = 67 ;
            $vector[15]     = 71 ;
            $NValue         = strlen($SValue);
            for ($i=0; $i < $NValue; $i++) {
                $Num    = substr($SValue,$i,1);
                $Accumulator += intval($Num) * $vector[$NValue - $i] ;
            }

            $Residue    = $Accumulator % 11;

            $result      = ($Residue > 1) ? 11 - $Residue : $Residue;
        }else{
            $result      = -1;
        }

        return $result;
    }


    /**
     * Retorna una respuesta con los registros indicados
     *
     * @param  mixed $lis
     * @param  mixed $total
     * @return JSON
     */
    public function getRecordsResponse($lis = array(), $total = 0)
    {
        return response()->json([
            'success'   => true,
            'records'   => $lis,
            'total'     => $total,
        ]);
    }


    /**
     * getSuccessResponse: Respuesta de exito
     *
     * @param  mixed $lis
     * @return JSON
     */
    public function getSuccessResponse($lis = null)
    {
        return response()->json([
            'success'   => true,
            'data'      => $lis,
        ]);
    }

    /**
     * getErrorResponse: Retorna una respuesta de error 500
     *
     * @param  mixed $msg
     * @return JSON
     */
    public function getErrorResponse($msg  = '')
    {
        return response()->json([
            'success'   => false,
            'message'   => $msg,
            'payload'   => 'Internal Server Error',
        ],500);
    }

    /**
     * getResponse: Retorna una respuesta con el mensaje indicado, en formato JSON
     *
     * @param  mixed $msg: Mensaje que debe retornar
     * @return JSON
     */
    public function getResponseMessage($msg = ''){
        return response()->json([
            'message'   => $msg,
            'success'   => true
        ]);
    }

}
