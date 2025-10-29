<?php

namespace App\Services;

use App\Repositories\CustomersRepository;
use App\Models\Customer;
use Exception;

/**
 * ✅ CUSTOMERS SERVICE
 * 
 * Lógica de negocio para clientes
 * Responsabilidades:
 * - Validaciones complejas
 * - Duplicados
 * - Estadísticas
 */
class CustomersService
{
    public function __construct(protected CustomersRepository $repository)
    {
    }

    /**
     * Crear cliente
     */
    public function create(array $data): Customer
    {
        // Validar que no exista con el mismo email
        if (!empty($data['email'])) {
            $exists = $this->repository->findByEmail($data['email']);
            if ($exists) {
                throw new Exception('Email ya registrado');
            }
        }

        // Validar que no exista con el mismo teléfono
        if (!empty($data['phone'])) {
            $exists = $this->repository->findByPhone($data['phone']);
            if ($exists) {
                throw new Exception('Teléfono ya registrado');
            }
        }

        return $this->repository->create($data);
    }

    /**
     * Actualizar cliente
     */
    public function update(int $id, array $data): bool
    {
        $customer = $this->repository->findOrFail($id);

        // Validar email único
        if (!empty($data['email']) && $data['email'] !== $customer->email) {
            $exists = $this->repository->findByEmail($data['email']);
            if ($exists) {
                throw new Exception('Email ya registrado');
            }
        }

        // Validar teléfono único
        if (!empty($data['phone']) && $data['phone'] !== $customer->phone) {
            $exists = $this->repository->findByPhone($data['phone']);
            if ($exists) {
                throw new Exception('Teléfono ya registrado');
            }
        }

        return $this->repository->update($id, $data);
    }

    /**
     * Obtener estadísticas del cliente
     */
    public function getStatistics(int $id): array
    {
        $customer = $this->repository->getWithDetails($id);

        if (!$customer) {
            throw new Exception('Cliente no encontrado');
        }

        $totalSales = $customer->sales->sum('total');
        $salesCount = $customer->sales->count();

        return [
            'id' => $customer->id,
            'name' => $customer->name,
            'email' => $customer->email,
            'phone' => $customer->phone,
            'total_purchases' => $totalSales,
            'number_of_purchases' => $salesCount,
            'average_purchase' => $salesCount > 0 ? $totalSales / $salesCount : 0,
            'is_active' => $customer->is_active,
            'created_at' => optional($customer->created_at)->format('Y-m-d H:i'),
        ];
    }

    /**
     * Desactivar cliente
     */
    public function deactivate(int $id): bool
    {
        return $this->repository->update($id, ['is_active' => false]);
    }

    /**
     * Reactivar cliente
     */
    public function activate(int $id): bool
    {
        return $this->repository->update($id, ['is_active' => true]);
    }
}
