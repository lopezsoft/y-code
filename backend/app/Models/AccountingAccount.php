<?php

namespace App\Models;

use App\Core\BaseModel;

class AccountingAccount extends BaseModel
{
    protected $table = 'accounting_accounts';

    protected $fillable = [
        'company_id', 'accounting_group_id', 'currency_id', 'tax_rate_id',
        'account_number', 'account_name', 'description', 'balance', 'active'
    ];

    protected $casts = [
        'balance' => 'decimal:2',
        'active' => 'boolean',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function accountingGroup()
    {
        return $this->belongsTo(AccountingGroup::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }

    public function taxRate()
    {
        return $this->belongsTo(TaxRate::class);
    }
}
