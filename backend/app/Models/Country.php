<?php

namespace App\Models;

use App\Core\CoreModel;

class Country extends CoreModel
{
    public $table   = 'countries';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'abbreviation_A2', 'country_name','phone_code',
    ];
}
