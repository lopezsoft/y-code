<?php

namespace App\Models;

use App\Core\BaseModel;

class Customer extends BaseModel
{
    protected $fillable = [
        'company_id', 'country_id', 'customer_name', 'dni_ruc', 'email',
        'phone', 'address', 'credit_limit', 'current_balance', 'active'
    ];

    protected $casts = [
        'credit_limit' => 'decimal:2',
        'current_balance' => 'decimal:2',
        'active' => 'boolean',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
}
