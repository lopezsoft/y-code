<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public $timestamps = false;
    protected $table = 'currency_sys';

    protected $fillable = ['currency_code', 'currency_name', 'currency_symbol', 'exchange_rate', 'active'];

    protected $casts = [
        'exchange_rate' => 'decimal:4',
        'active' => 'boolean',
    ];
}
