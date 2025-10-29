<?php

namespace App\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * ✅ MODEL: COMPANY (Empresa)
 * 
 * Root entity para multi-tenant
 * - Todas las empresas en una tabla única
 * - Otros modelos tienen FK company_id
 * - NO hereda global scope (es la entidad raíz)
 * 
 * SOLID:
 * - Single Responsibility: Manejar datos de empresa
 * - Liskov Substitution: Hereda de BaseModel pero sin company_id
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $country_id
 * @property string $company_name
 * @property string $dni
 * @property string|null $address
 * @property string|null $lockdate
 * @property bool $active
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Company extends BaseModel
{
    protected $table = 'companies';

    /**
     * ✅ FILLABLE: Solo estos campos pueden ser mass-assigned
     * 
     * SEGURIDAD: Evita asignación de campos no permitidos
     */
    protected $fillable = [
        'country_id',
        'company_name',
        'dni',
        'address',
        'lockdate',
        'active',
    ];

    /**
     * ✅ CASTS: Conversión automática de tipos
     * 
     * CLEAN CODE: Eloquent convierte automáticamente
     */
    protected $casts = [
        'active' => 'boolean',
        'lockdate' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * ✅ QUERY SCOPES CUSTOMIZADOS
     */
    protected static function booted(): void
    {
        // Company NO tiene global scope de company_id
        // (porque es la raíz de la jerarquía)
        
        static::creating(function (self $model) {
            // Solo validar que tenga country_id y company_name
            if (!$model->country_id || !$model->company_name) {
                throw new \Exception('company_name y country_id son requeridos');
            }
        });
    }

    /**
     * Relación: Country
     * 
     * Una empresa pertenece a un país
     */
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Relación: Users (Usuarios de la empresa)
     * 
     * Una empresa tiene muchos usuarios
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'company_id');
    }

    /**
     * Relación: Business Users (Relación muchos-a-muchos con usuarios)
     */
    public function businessUsers(): HasMany
    {
        return $this->hasMany(BusinessUser::class, 'company_id');
    }

    /**
     * Relación: Customers (Clientes)
     */
    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class, 'company_id');
    }

    /**
     * Relación: Sales (Ventas)
     */
    public function sales(): HasMany
    {
        return $this->hasMany(Sale::class, 'company_id');
    }

    /**
     * Relación: Accounting Accounts (Cuentas contables)
     */
    public function accountingAccounts(): HasMany
    {
        return $this->hasMany(AccountingAccount::class, 'company_id');
    }

    /**
     * Relación: Expenses (Gastos)
     */
    public function expenses(): HasMany
    {
        return $this->hasMany(Expense::class, 'company_id');
    }

    /**
     * Relación: Payments (Pagos)
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class, 'company_id');
    }

    /**
     * Scope: Empresas activas
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', true)
                    ->whereNull('deleted_at');
    }

    /**
     * Scope: Empresas de un país
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  int  $countryId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByCountry($query, int $countryId)
    {
        return $query->where('country_id', $countryId);
    }

    /**
     * Obtener usuarios activos de la empresa
     * 
     * @return \Illuminate\Support\Collection
     */
    public function getActiveUsers()
    {
        return $this->users()
            ->where('active', true)
            ->whereNull('deleted_at')
            ->get();
    }

    /**
     * Obtener total de ventas
     * 
     * @return float
     */
    public function getTotalSales(): float
    {
        return $this->sales()
            ->sum('total');
    }

    /**
     * Obtener total de clientes
     * 
     * @return int
     */
    public function getCustomersCount(): int
    {
        return $this->customers()
            ->count();
    }
}
