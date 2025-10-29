<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountingGroup extends Model
{
    public $timestamps = false;

    protected $fillable = ['group_name', 'group_code', 'description', 'order', 'active'];

    protected $casts = ['active' => 'boolean'];
}
