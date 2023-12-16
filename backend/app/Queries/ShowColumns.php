<?php

namespace App\Queries;

use Illuminate\Support\Facades\DB;

class ShowColumns
{
    public static function getColumns($tableName = ''): array
    {
        return DB::select("SHOW COLUMNS FROM $tableName");
    }
}
