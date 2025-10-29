<?php

namespace App\Queries;

use Exception;

class TableList
{
    public static function getTable($prefix): string
    {
        if(!$prefix) {
            throw new Exception('No se ha especificado el prefijo de la tabla');
        }
        $tableList = [
            'T001' => 'tax_group',
            'T002' => 'tax_rates',
        ];
        return $tableList[$prefix];
    }
}
