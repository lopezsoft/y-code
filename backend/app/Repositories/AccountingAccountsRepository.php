<?php

namespace App\Repositories;

use App\Models\AccountingAccount;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;

/**
 * ✅ ACCOUNTING ACCOUNTS REPOSITORY
 * 
 * Especialización para operaciones sobre cuentas contables
 * Incluye: búsqueda por código, grupo, tipo, estado
 */
class AccountingAccountsRepository extends BaseRepository
{
    public function __construct(AccountingAccount $model)
    {
        parent::__construct($model);
    }

    /**
     * Buscar por código de cuenta
     */
    public function findByCode(string $code): ?AccountingAccount
    {
        return $this->model->where('account_code', $code)->first();
    }

    /**
     * Obtener cuentas por grupo
     */
    public function findByGroup(int $groupId, int $perPage = 30): Paginator
    {
        return $this->model->where('accounting_group_id', $groupId)
            ->active()
            ->paginate($perPage);
    }

    /**
     * Obtener cuentas por tipo (activos, pasivos, patrimonio, ingresos, gastos)
     */
    public function findByType(string $type, int $perPage = 30): Paginator
    {
        return $this->model->where('account_type', $type)
            ->active()
            ->paginate($perPage);
    }

    /**
     * Obtener cuentas activas
     */
    public function getActive(int $perPage = 50): Paginator
    {
        return $this->model->active()
            ->with('group')
            ->paginate($perPage);
    }

    /**
     * Buscar por nombre de cuenta
     */
    public function findByName(string $name, int $perPage = 30): Paginator
    {
        return $this->model->where('name', 'like', "%{$name}%")
            ->active()
            ->paginate($perPage);
    }

    /**
     * Obtener con grupo contable
     */
    public function getWithGroup(int $id): ?AccountingAccount
    {
        return $this->model->with('group')->find($id);
    }

    /**
     * Obtener todas las cuentas con sus grupos (para reportes)
     */
    public function getAllWithGroups(): Collection
    {
        return $this->model->active()
            ->with('group')
            ->orderBy('account_code')
            ->get();
    }

    /**
     * Validar si código existe
     */
    public function codeExists(string $code): bool
    {
        return $this->model->where('account_code', $code)->exists();
    }

    /**
     * Obtener cuentas de resultado (ingresos y gastos)
     */
    public function getResultAccounts(): Collection
    {
        return $this->model->whereIn('account_type', ['income', 'expense'])
            ->active()
            ->orderBy('account_code')
            ->get();
    }

    /**
     * Obtener cuentas de balance
     */
    public function getBalanceAccounts(): Collection
    {
        return $this->model->whereIn('account_type', ['asset', 'liability', 'equity'])
            ->active()
            ->orderBy('account_code')
            ->get();
    }
}
