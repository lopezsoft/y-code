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
            'T001' => 'price_list',
            'T002' => 'product_price_list',
        ];
        return $tableList[$prefix];
    }
}
