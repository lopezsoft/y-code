<?php

namespace App\Models;

use App\Core\CoreModel;

class Company extends CoreModel
{
    /**
     * With default model.
     *
     * @var array
     */

    public $table    = 'companies';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id', 'company_name', 'dni', 'database_name', 'folder_name', 'lockdate', 'active',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
}
