<?php

namespace App\Services;

use App\Repositories\SalesRepository;
use App\Models\Sale;
use App\Models\SaleItem;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;
use Exception;

/**
 * ✅ SALES SERVICE
 * 
 * Lógica de negocio para ventas
 * Responsabilidades:
 * - Validaciones complejas
 * - Cálculos de totales, impuestos
 * - Transacciones
 * - Eventos de negocio
 */
class SalesService
{
    public function __construct(protected SalesRepository $repository)
    {
    }

    /**
     * Crear venta con items
     */
    public function createWithItems(array $saleData, array $items): Sale
    {
        // Validación: al menos un item
        if (empty($items)) {
            throw new Exception('La venta debe contener al menos un item');
        }

        // Crear transacción
        try {
            DB::beginTransaction();

            // Calcular subtotal e impuestos
            $subtotal = 0;
            $totalTax = 0;

            foreach ($items as $item) {
                $itemSubtotal = $item['quantity'] * $item['price'];
                $itemTax = $itemSubtotal * ($item['tax_rate'] ?? 0) / 100;
                
                $subtotal += $itemSubtotal;
                $totalTax += $itemTax;
            }

            $total = $subtotal + $totalTax;

            // Asignar totales a la venta
            $saleData['subtotal'] = $subtotal;
            $saleData['tax'] = $totalTax;
            $saleData['total'] = $total;

            // Crear venta
            $sale = $this->repository->create($saleData);

            // Crear items
            foreach ($items as $item) {
                $item['sale_id'] = $sale->id;
                SaleItem::create($item);
            }

            DB::commit();

            return $sale->refresh();
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Error al crear venta: ' . $e->getMessage());
        }
    }

    /**
     * Actualizar estado de venta
     */
    public function updateStatus(int $saleId, string $status): bool
    {
        $validStatuses = ['pending', 'processing', 'completed', 'cancelled'];
        
        if (!in_array($status, $validStatuses)) {
            throw new Exception("Estado inválido: {$status}");
        }

        return $this->repository->update($saleId, ['status' => $status]);
    }

    /**
     * Obtener resumen de venta (con detalles completos)
     */
    public function getSummary(int $saleId): array
    {
        $sale = $this->repository->getWithDetails($saleId);

        if (!$sale) {
            throw new Exception('Venta no encontrada');
        }

        return [
            'id' => $sale->id,
            'invoice_number' => $sale->invoice_number,
            'customer' => $sale->customer->name,
            'date' => optional($sale->created_at)->format('Y-m-d H:i'),
            'items_count' => $sale->items->count(),
            'subtotal' => $sale->subtotal,
            'tax' => $sale->tax,
            'total' => $sale->total,
            'payment_status' => $sale->payment_status,
            'status' => $sale->status,
        ];
    }

    /**
     * Obtener ventas del período con totales
     */
    public function getPeriodReport($startDate, $endDate): array
    {
        $sales = $this->repository->findByDateRange($startDate, $endDate, 1000);
        
        $totalAmount = $this->repository->getTotalInPeriod($startDate, $endDate);
        $totalSales = $sales->total();

        return [
            'period_start' => $startDate,
            'period_end' => $endDate,
            'total_sales' => $totalSales,
            'total_amount' => $totalAmount,
            'average_sale' => $totalSales > 0 ? $totalAmount / $totalSales : 0,
        ];
    }

    /**
     * Cancelar venta
     */
    public function cancel(int $saleId, string $reason): bool
    {
        $sale = $this->repository->findOrFail($saleId);

        if ($sale->status === 'cancelled') {
            throw new Exception('La venta ya fue cancelada');
        }

        return $this->repository->update($saleId, [
            'status' => 'cancelled',
            'cancellation_reason' => $reason,
        ]);
    }

    /**
     * Obtener ingresos por cliente
     */
    public function getTopCustomers(int $limit = 10): Collection
    {
        return $this->repository->getTopCustomers($limit);
    }
}
