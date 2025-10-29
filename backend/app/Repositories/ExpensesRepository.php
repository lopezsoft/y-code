<?php

namespace App\Repositories;

use App\Models\Expense;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;

/**
 * ✅ EXPENSES REPOSITORY
 * 
 * Especialización para operaciones sobre gastos
 * Incluye: búsqueda por categoría, fecha, monto, estado
 */
class ExpensesRepository extends BaseRepository
{
    public function __construct(Expense $model)
    {
        parent::__construct($model);
    }

    /**
     * Obtener gastos por rango de fecha
     */
    public function findByDateRange($startDate, $endDate, int $perPage = 30): Paginator
    {
        return $this->model->whereBetween('expense_date', [$startDate, $endDate])
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener gastos por categoría
     */
    public function findByCategory(string $category, int $perPage = 30): Paginator
    {
        return $this->model->where('category', $category)
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener gastos por monto mínimo
     */
    public function findByMinAmount(float $minAmount, int $perPage = 30): Paginator
    {
        return $this->model->where('amount', '>=', $minAmount)
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener gastos pendientes de aprobación
     */
    public function getPending(int $perPage = 30): Paginator
    {
        return $this->model->where('status', 'pending')
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener gastos aprobados
     */
    public function getApproved(int $perPage = 30): Paginator
    {
        return $this->model->where('status', 'approved')
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Calcular total de gastos en período
     */
    public function getTotalInPeriod($startDate, $endDate): float
    {
        return $this->model->whereBetween('expense_date', [$startDate, $endDate])
            ->sum('amount');
    }

    /**
     * Obtener gastos por usuario
     */
    public function findByUser(int $userId, int $perPage = 30): Paginator
    {
        return $this->model->where('user_id', $userId)
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener gastos con detalles completos
     */
    public function getWithDetails(int $id): ?Expense
    {
        return $this->model->with(['user', 'account', 'company'])->find($id);
    }

    /**
     * Gastos por categoría con totales
     */
    public function getTotalByCategory($startDate, $endDate): Collection
    {
        return $this->model->selectRaw('category, SUM(amount) as total, COUNT(*) as count')
            ->whereBetween('expense_date', [$startDate, $endDate])
            ->groupBy('category')
            ->orderByDesc('total')
            ->get();
    }
}
