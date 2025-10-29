<?php

namespace App\Models;

use App\Core\BaseModel;

class Expense extends BaseModel
{
    protected $fillable = [
        'company_id', 'user_id', 'accounting_account_id', 'currency_id',
        'expense_number', 'expense_date', 'description', 'amount', 'status', 'notes'
    ];

    protected $casts = [
        'expense_date' => 'date',
        'amount' => 'decimal:2',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accountingAccount()
    {
        return $this->belongsTo(AccountingAccount::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}
