<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Core\CoreModel;

class CompanyMembership extends CoreModel
{
    use HasFactory;
    
    public $table   = "company_membership";

    protected   $fillable = [
        'company_id', 'membership_plan_id', 'activation_date', 'lock_date', 'active',
    ];
}
