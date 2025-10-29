<?php

namespace App\Models;

use App\Core\BaseModel;

class SaleItem extends BaseModel
{
    protected $table = 'sales_items';

    protected $fillable = [
        'company_id', 'sale_id', 'description', 'quantity', 'unit_price',
        'line_total', 'tax_code', 'tax_rate'
    ];

    protected $casts = [
        'quantity' => 'decimal:2',
        'unit_price' => 'decimal:2',
        'line_total' => 'decimal:2',
        'tax_rate' => 'decimal:2',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }
}
