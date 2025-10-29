<?php

namespace App\Models;

use App\Core\BaseModel;

class User extends BaseModel
{
    protected $fillable = ['company_id', 'name', 'email', 'password', 'active'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'active' => 'boolean',
    ];

    protected $hidden = ['password', 'remember_token'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function businessUsers()
    {
        return $this->hasMany(BusinessUser::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }
}
