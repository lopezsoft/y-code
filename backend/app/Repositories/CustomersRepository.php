<?php

namespace App\Repositories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;

/**
 * ✅ CUSTOMERS REPOSITORY
 * 
 * Especialización para operaciones sobre clientes
 * Incluye: búsqueda por nombre, teléfono, email, estado activo
 */
class CustomersRepository extends BaseRepository
{
    public function __construct(Customer $model)
    {
        parent::__construct($model);
    }

    /**
     * Buscar clientes por nombre
     */
    public function findByName(string $name, int $perPage = 30): Paginator
    {
        return $this->model->where('name', 'like', "%{$name}%")
            ->active()
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Buscar por teléfono
     */
    public function findByPhone(string $phone): ?Customer
    {
        return $this->model->where('phone', $phone)->first();
    }

    /**
     * Buscar por email
     */
    public function findByEmail(string $email): ?Customer
    {
        return $this->model->where('email', $email)->first();
    }

    /**
     * Obtener clientes activos
     */
    public function getActive(int $perPage = 30): Paginator
    {
        return $this->model->active()
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener clientes inactivos
     */
    public function getInactive(int $perPage = 30): Paginator
    {
        return $this->model->where('is_active', false)
            ->paginate($perPage);
    }

    /**
     * Buscar avanzada: nombre, teléfono, email
     */
    public function advancedSearch(string $query, int $perPage = 30): Paginator
    {
        return $this->model->where('name', 'like', "%{$query}%")
            ->orWhere('phone', 'like', "%{$query}%")
            ->orWhere('email', 'like', "%{$query}%")
            ->active()
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener clientes con detalles (ventas, crédito)
     */
    public function getWithDetails(int $id): ?Customer
    {
        return $this->model->with(['sales', 'company'])->find($id);
    }

    /**
     * Obtener clientes con más ventas
     */
    public function getTopByPurchases(int $limit = 10): Collection
    {
        return $this->model->withCount('sales')
            ->orderByDesc('sales_count')
            ->limit($limit)
            ->get();
    }

    /**
     * Obtener clientes que no han realizado compras
     */
    public function getNeverPurchased(): Collection
    {
        return $this->model->whereDoesntHave('sales')->active()->get();
    }
}
