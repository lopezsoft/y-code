<?php

namespace App\Services;

use App\Repositories\AccountingAccountsRepository;
use Exception;

/**
 * ✅ ACCOUNTING SERVICE
 * 
 * Lógica de negocio para contabilidad
 * Responsabilidades:
 * - Validaciones de cuentas contables
 * - Asientos contables
 * - Reportes
 */
class AccountingService
{
    public function __construct(protected AccountingAccountsRepository $repository)
    {
    }

    /**
     * Validar que cuenta exista
     */
    public function validateAccountExists(string $code): bool
    {
        return $this->repository->codeExists($code);
    }

    /**
     * Obtener cuenta por código
     */
    public function getByCode(string $code)
    {
        $account = $this->repository->findByCode($code);

        if (!$account) {
            throw new Exception("Cuenta {$code} no encontrada");
        }

        return $account;
    }

    /**
     * Obtener balance de cuentas
     */
    public function getBalanceSheet(): array
    {
        $assetAccounts = $this->repository->getBalanceAccounts()
            ->where('account_type', 'asset');
        
        $liabilityAccounts = $this->repository->getBalanceAccounts()
            ->where('account_type', 'liability');
        
        $equityAccounts = $this->repository->getBalanceAccounts()
            ->where('account_type', 'equity');

        $totalAssets = $assetAccounts->sum('current_balance');
        $totalLiabilities = $liabilityAccounts->sum('current_balance');
        $totalEquity = $equityAccounts->sum('current_balance');

        return [
            'assets' => [
                'accounts' => $assetAccounts->toArray(),
                'total' => $totalAssets,
            ],
            'liabilities' => [
                'accounts' => $liabilityAccounts->toArray(),
                'total' => $totalLiabilities,
            ],
            'equity' => [
                'accounts' => $equityAccounts->toArray(),
                'total' => $totalEquity,
            ],
            'validation' => [
                'assets_equal_liabilities_plus_equity' => 
                    abs($totalAssets - ($totalLiabilities + $totalEquity)) < 0.01,
            ],
        ];
    }

    /**
     * Obtener estado de resultados
     */
    public function getIncomeStatement(): array
    {
        $incomeAccounts = $this->repository->getResultAccounts()
            ->where('account_type', 'income');
        
        $expenseAccounts = $this->repository->getResultAccounts()
            ->where('account_type', 'expense');

        $totalIncome = $incomeAccounts->sum('current_balance');
        $totalExpenses = $expenseAccounts->sum('current_balance');
        $netIncome = $totalIncome - $totalExpenses;

        return [
            'income' => [
                'accounts' => $incomeAccounts->toArray(),
                'total' => $totalIncome,
            ],
            'expenses' => [
                'accounts' => $expenseAccounts->toArray(),
                'total' => $totalExpenses,
            ],
            'net_income' => $netIncome,
        ];
    }

    /**
     * Validar saldo nulo (para ajustes)
     */
    public function validateAccounting(): array
    {
        $balanceSheet = $this->getBalanceSheet();
        
        return [
            'is_balanced' => $balanceSheet['validation']['assets_equal_liabilities_plus_equity'],
            'status' => $balanceSheet['validation']['assets_equal_liabilities_plus_equity'] 
                ? 'Contabilidad cuadrada' 
                : 'Hay discrepancias',
        ];
    }
}
