<?php

namespace App\Repositories;

use App\Models\Sale;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;

/**
 * ✅ SALES REPOSITORY
 * 
 * Especialización para operaciones sobre ventas
 * Incluye: búsqueda avanzada, filtrado por fecha, estado, cliente
 */
class SalesRepository extends BaseRepository
{
    public function __construct(Sale $model)
    {
        parent::__construct($model);
    }

    /**
     * Buscar ventas por cliente
     */
    public function findByCustomer(int $customerId): Collection
    {
        return $this->model->where('customer_id', $customerId)
            ->with(['customer', 'items', 'payments'])
            ->newestFirst()
            ->get();
    }

    /**
     * Obtener ventas por rango de fecha con paginación
     */
    public function findByDateRange($startDate, $endDate, int $perPage = 30): Paginator
    {
        return $this->model->whereBetween('created_at', [$startDate, $endDate])
            ->with(['customer', 'items'])
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Buscar por número de invoice
     */
    public function findByInvoiceNumber(string $invoiceNumber): ?Sale
    {
        return $this->model->where('invoice_number', $invoiceNumber)->first();
    }

    /**
     * Obtener ventas pendientes de pago
     */
    public function getPending(int $perPage = 30): Paginator
    {
        return $this->model->where('payment_status', 'pending')
            ->with(['customer'])
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Obtener ventas por estado
     */
    public function findByStatus(string $status, int $perPage = 30): Paginator
    {
        return $this->model->where('status', $status)
            ->with(['customer', 'items'])
            ->newestFirst()
            ->paginate($perPage);
    }

    /**
     * Calcular total de ventas en período
     */
    public function getTotalInPeriod($startDate, $endDate): float
    {
        return $this->model->whereBetween('created_at', [$startDate, $endDate])
            ->sum('total');
    }

    /**
     * Obtener top clientes por ventas
     */
    public function getTopCustomers(int $limit = 10): Collection
    {
        return $this->model->selectRaw('customer_id, COUNT(*) as count, SUM(total) as total_sales')
            ->groupBy('customer_id')
            ->orderByDesc('total_sales')
            ->limit($limit)
            ->with('customer')
            ->get();
    }

    /**
     * Obtener ventas con detalles completos
     */
    public function getWithDetails(int $id): ?Sale
    {
        return $this->model->with(['customer', 'items', 'payments', 'company'])->find($id);
    }
}
