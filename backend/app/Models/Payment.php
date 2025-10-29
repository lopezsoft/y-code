<?php

namespace App\Models;

use App\Core\BaseModel;

class Payment extends BaseModel
{
    protected $fillable = [
        'company_id', 'sale_id', 'currency_id', 'payment_number',
        'payment_date', 'amount', 'payment_method', 'reference', 'status', 'notes'
    ];

    protected $casts = [
        'payment_date' => 'date',
        'amount' => 'decimal:2',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}
