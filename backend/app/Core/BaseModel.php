<?php

namespace App\Core;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Builder;

/**
 * ✅ BASE MODEL PARA MULTI-TENANT CON COMPANY_ID
 * 
 * SOLID Principles:
 * - Single Responsibility: Manejar scopes de company_id
 * - Open/Closed: Extendible para otros modelos
 * 
 * Clean Code:
 * - Métodos pequeños y claramente nombrados
 * - Documentación explícita
 * - Sin magic numbers
 * 
 * @package App\Core
 */
abstract class BaseModel extends Model
{
    /**
     * ✅ Deshabilitar timestamps (como proyecto actual)
     * 
     * En la migración se crearán created_at y updated_at
     * pero Eloquent no los maneja automáticamente
     */
    public $timestamps = false;

    /**
     * Aplicar filtro automático de company_id
     * 
     * Este método se ejecuta cuando se crea una instancia del modelo
     * Implementa el PATRÓN: Global Scope para multi-tenant
     * 
     * ✅ SEGURIDAD: Garantiza que nunca se acceda a datos de otra empresa
     * 
     * @return void
     */
    protected static function booted(): void
    {
        // ✅ Global scope automático
        // Cuando se consulta este modelo, se filtra por company_id
        static::addGlobalScope('company', function (Builder $builder) {
            // Solo aplicar scope si existe usuario autenticado
            // y tiene company_id asignado
            if (self::shouldApplyCompanyScope()) {
                $companyId = auth()->user()->company_id;
                
                // Obtener tabla del modelo
                $table = $builder->getModel()->getTable();
                
                // Aplicar filtro WHERE company_id = ?
                $builder->where("{$table}.company_id", $companyId);
            }
        });

        // Hook: Asignar company_id automáticamente al crear
        static::creating(function (self $model) {
            self::ensureCompanyIdOnCreate($model);
        });
    }

    /**
     * Determinar si se debe aplicar scope de company
     * 
     * ✅ CLEAN CODE: Lógica separada y testeable
     * 
     * @return bool
     */
    private static function shouldApplyCompanyScope(): bool
    {
        // En tests o commands sin autenticación
        if (!auth()->check()) {
            return false;
        }

        // Usuario debe tener company_id
        return (bool) auth()->user()?->company_id;
    }

    /**
     * Asegurar que company_id se asigna al crear un registro
     * 
     * ✅ SOLID: Single Responsibility - solo manejar assignment
     * ✅ SEGURIDAD: Evita crear registros sin company_id
     * 
     * @param  self  $model
     * @return void
     * @throws \Exception
     */
    private static function ensureCompanyIdOnCreate(self $model): void
    {
        // Si ya tiene company_id, no hacer nada
        if ($model->company_id) {
            return;
        }

        // Intentar asignar del usuario autenticado
        if (auth()->check() && auth()->user()?->company_id) {
            $model->company_id = auth()->user()->company_id;
            return;
        }

        // Si llegamos aquí, es un error
        throw new \Exception(
            'No se puede crear registro sin company_id. ' .
            'Usuario no autenticado o sin empresa asignada.'
        );
    }

    /**
     * Relación: Modelo pertenece a una Empresa
     * 
     * ✅ CLEAN CODE
     *    - Método pequeño y específico
     *    - Nombre en inglés siguiendo convención Laravel
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(
            \App\Models\Company::class,
            'company_id',
            'id'
        );
    }

    /**
     * Scope local: Obtener registros de empresa específica
     * 
     * Uso: Model::forCompany($id)->get()
     * 
     * ✅ PATRÓN: Local Scope
     * ✅ CLEAN CODE: Opción explícita sin usar global scope
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  int  $companyId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForCompany($query, int $companyId)
    {
        return $query->where(
            $this->getTable() . '.company_id',
            $companyId
        );
    }

    /**
     * Scope local: Sin filtro de company (admin bypass)
     * 
     * Uso: Model::withoutCompanyScope()->get()
     * 
     * ✅ ADVERTENCIA: Solo para operaciones admin
     * ✅ AUDITORÍA: Loguear cuando se usa
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithoutCompanyScope($query)
    {
        // Log para auditoría
        \Log::warning('⚠️ WITHOUT_COMPANY_SCOPE usado por ' . auth()->user()?->id);

        return $query->withoutGlobalScope('company');
    }

    /**
     * Scope local: Registros activos (soft delete compatible)
     * 
     * Uso: Model::active()->get()
     * 
     * ✅ CLEAN CODE: Scope reutilizable
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
     * Scope local: Ordenar por fecha de creación (descendente)
     * 
     * Uso: Model::newestFirst()->get()
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNewestFirst($query)
    {
        return $query->orderByDesc('created_at');
    }

    /**
     * Scope local: Paginación con defaults
     * 
     * Uso: Model::paginated()->get()
     * 
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  int  $perPage
     * @return \Illuminate\Pagination\Paginator
     */
    public function scopePaginated($query, int $perPage = 60)
    {
        return $query->paginate($perPage);
    }

    /**
     * Obtener tabla del modelo
     * 
     * ✅ HELPER: Acceso a tabla desde contexto estático
     * 
     * @return string
     */
    public static function getTableName(): string
    {
        return (new static())->getTable();
    }

    /**
     * Verificar que modelo tiene company_id
     * 
     * ✅ PATRÓN: Type Checking
     * ✅ SEGURIDAD: Validar estructura del modelo
     * 
     * @return bool
     */
    public static function hasCompanyId(): bool
    {
        $instance = new static();
        return in_array('company_id', $instance->getFillable());
    }

    /**
     * Convertir timestamps a formato ISO 8601
     * 
     * ✅ OVERRIDE: Customizar serialización
     * 
     * @param  \DateTime  $value
     * @return string|null
     */
    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
