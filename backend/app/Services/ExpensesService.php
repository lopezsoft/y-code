<?php

namespace App\Services;

use App\Repositories\ExpensesRepository;
use App\Models\Expense;
use Exception;

/**
 * ✅ EXPENSES SERVICE
 * 
 * Lógica de negocio para gastos
 * Responsabilidades:
 * - Validaciones de cantidad y monto
 * - Workflow de aprobación
 * - Reportes de gastos
 */
class ExpensesService
{
    public function __construct(protected ExpensesRepository $repository)
    {
    }

    /**
     * Crear gasto
     */
    public function create(array $data): Expense
    {
        // Validar monto positivo
        if ($data['amount'] <= 0) {
            throw new Exception('El monto debe ser mayor a 0');
        }

        // Por defecto, estado pendiente
        $data['status'] = $data['status'] ?? 'pending';

        return $this->repository->create($data);
    }

    /**
     * Aprobar gasto
     */
    public function approve(int $id, ?string $approverNotes = null): bool
    {
        $expense = $this->repository->findOrFail($id);

        if ($expense->status === 'approved') {
            throw new Exception('El gasto ya fue aprobado');
        }

        if ($expense->status === 'rejected') {
            throw new Exception('No se puede aprobar un gasto rechazado');
        }

        return $this->repository->update($id, [
            'status' => 'approved',
            'approver_notes' => $approverNotes,
            'approved_at' => now(),
        ]);
    }

    /**
     * Rechazar gasto
     */
    public function reject(int $id, string $reason): bool
    {
        $expense = $this->repository->findOrFail($id);

        if ($expense->status === 'approved') {
            throw new Exception('No se puede rechazar un gasto ya aprobado');
        }

        return $this->repository->update($id, [
            'status' => 'rejected',
            'rejection_reason' => $reason,
            'rejected_at' => now(),
        ]);
    }

    /**
     * Obtener reporte de gastos por período
     */
    public function getReport($startDate, $endDate): array
    {
        $totalAmount = $this->repository->getTotalInPeriod($startDate, $endDate);
        $byCategory = $this->repository->getTotalByCategory($startDate, $endDate);

        return [
            'period_start' => $startDate,
            'period_end' => $endDate,
            'total_expenses' => $totalAmount,
            'by_category' => $byCategory->toArray(),
        ];
    }

    /**
     * Obtener gastos de usuario por período
     */
    public function getUserExpenses(int $userId, $startDate, $endDate): array
    {
        $expenses = $this->repository->findByUser($userId, 1000);
        
        $filtered = $expenses->getCollection()
            ->whereBetween('expense_date', [$startDate, $endDate])
            ->all();

        return [
            'user_id' => $userId,
            'period_start' => $startDate,
            'period_end' => $endDate,
            'expenses' => $filtered,
            'total' => collect($filtered)->sum('amount'),
        ];
    }
}
