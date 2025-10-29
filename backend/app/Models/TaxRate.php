<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxRate extends Model
{
    public $timestamps = false;

    protected $fillable = ['tax_name', 'tax_code', 'rate', 'description', 'active'];

    protected $casts = [
        'rate' => 'decimal:2',
        'active' => 'boolean',
    ];
}
