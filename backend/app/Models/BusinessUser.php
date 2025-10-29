<?php

namespace App\Models;

use App\Core\BaseModel;

class BusinessUser extends BaseModel
{
    protected $table = 'business_users';

    protected $fillable = ['company_id', 'user_id', 'role', 'active'];

    protected $casts = ['active' => 'boolean'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
