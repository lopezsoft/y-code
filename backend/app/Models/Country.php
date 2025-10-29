<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * ✅ MODEL: COUNTRY (País)
 * 
 * Datos globales (No multi-tenant)
 * - Compartido por todas las empresas
 * - NO tiene company_id
 * - NO hereda BaseModel (no necesita multi-tenant filtering)
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $country_code
 * @property string $country_name
 * @property string|null $timezone
 */
class Country extends Model
{
    public $timestamps = false;

    protected $table = 'countries';

    protected $fillable = [
        'country_code',
        'country_name',
        'timezone',
    ];

    /**
     * Relación: Companies en este país
     */
    public function companies()
    {
        return $this->hasMany(Company::class, 'country_id');
    }

    /**
     * Scope: Buscar por código
     */
    public function scopeByCode($query, string $code)
    {
        return $query->where('country_code', strtoupper($code));
    }

    /**
     * Scope: Activos
     */
    public function scopeActive($query)
    {
        return $query->whereNull('deleted_at');
    }
}
