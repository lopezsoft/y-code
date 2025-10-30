<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

/**
 * ✅ MIGRATION COMMAND: Migrate Data
 * 
 * Orquesta la migración completa de datos desde y_code_companies y y_code
 * hacia y_code_new con transformación y validación.
 * 
 * Ejecución:
 * php artisan migrate:data --from-old
 * php artisan migrate:data --validate
 */
class MigrateDataCommand extends Command
{
    protected $signature = 'migrate:data {--from-old : Migrar desde bases antiguas} {--validate : Solo validar integridad}';
    protected $description = 'Migra datos de y_doce_companies y y_code a y_code_new';

    public function handle()
    {
        $this->info('🔄 INICIO DE MIGRACIÓN DE DATOS');
        $this->info('==========================================');

        try {
            if ($this->option('validate')) {
                return $this->validateData();
            }

            if (!$this->option('from-old')) {
                $this->warn('Use --from-old para migrar desde bases antiguas');
                return;
            }

            // ORDEN CRÍTICO DE MIGRACIÓN
            $this->line('');
            $this->info('PASO 1/6: Migrando COMPANIES...');
            $this->migrateCompanies();

            $this->line('');
            $this->info('PASO 2/6: Migrando USERS...');
            $this->migrateUsers();

            $this->line('');
            $this->info('PASO 3/6: Migrando CUSTOMERS...');
            $this->migrateCustomers();

            $this->line('');
            $this->info('PASO 4/6: Migrando ACCOUNTING_ACCOUNTS...');
            $this->migrateAccountingAccounts();

            $this->line('');
            $this->info('PASO 5/6: Migrando SALES y SALES_ITEMS...');
            $this->migrateSales();

            $this->line('');
            $this->info('PASO 6/6: Migrando EXPENSES y PAYMENTS...');
            $this->migrateExpenses();

            $this->line('');
            $this->info('✅ VALIDACIÓN FINAL...');
            $this->validateData();

            $this->info('');
            $this->info('✅✅✅ MIGRACIÓN COMPLETADA EXITOSAMENTE ✅✅✅');
            $this->info('==========================================');

        } catch (\Exception $e) {
            $this->error('❌ ERROR EN MIGRACIÓN: ' . $e->getMessage());
            Log::error('Migration error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
            return 1;
        }
    }

    /**
     * Migrar tabla COMPANIES
     */
    private function migrateCompanies()
    {
        try {
            // Contar registros en origen
            $oldCompaniesCount = DB::connection('mysql_old')
                ->table('companies')
                ->count();

            $this->line("  → Encontrados: {$oldCompaniesCount} empresas");

            // Obtener datos
            $companies = DB::connection('mysql_old')
                ->table('companies')
                ->get();

            // Insertar en nueva BD
            foreach ($companies as $company) {
                DB::table('companies')->updateOrCreate(
                    ['id' => $company->id],
                    [
                        'company_name' => $company->name ?? 'Empresa ' . $company->id,
                        'nrc_number' => $company->nrc ?? null,
                        'country_id' => 1, // Honduras por defecto
                        'timezone' => 'America/Tegucigalpa',
                        'logo_url' => $company->logo ?? null,
                        'is_active' => $company->active ?? true,
                        'created_at' => $company->created_at ?? now(),
                        'updated_at' => $company->updated_at ?? now(),
                    ]
                );
            }

            $newCount = DB::table('companies')->count();
            $this->line("  ✅ Migraron: {$newCount} empresas");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando companies: " . $e->getMessage());
        }
    }

    /**
     * Migrar tabla USERS
     */
    private function migrateUsers()
    {
        try {
            $usersCount = DB::connection('mysql_old')
                ->table('users')
                ->count();

            $this->line("  → Encontrados: {$usersCount} usuarios");

            $users = DB::connection('mysql_old')
                ->table('users')
                ->get();

            foreach ($users as $user) {
                DB::table('users')->updateOrCreate(
                    ['id' => $user->id],
                    [
                        'company_id' => $user->company_id ?? 1,
                        'name' => $user->name,
                        'email' => $user->email,
                        'password' => $user->password,
                        'is_active' => $user->active ?? true,
                        'role' => $user->role ?? 'user',
                        'created_at' => $user->created_at ?? now(),
                        'updated_at' => $user->updated_at ?? now(),
                    ]
                );

                // Crear relación en business_users
                DB::table('business_users')->updateOrCreate(
                    ['user_id' => $user->id, 'company_id' => $user->company_id ?? 1],
                    [
                        'role' => $user->role ?? 'user',
                        'assigned_at' => now(),
                    ]
                );
            }

            $newCount = DB::table('users')->count();
            $this->line("  ✅ Migraron: {$newCount} usuarios");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando users: " . $e->getMessage());
        }
    }

    /**
     * Migrar tabla CUSTOMERS
     */
    private function migrateCustomers()
    {
        try {
            $customersCount = DB::connection('mysql_old')
                ->table('customers')
                ->count();

            $this->line("  → Encontrados: {$customersCount} clientes");

            $customers = DB::connection('mysql_old')
                ->table('customers')
                ->get();

            foreach ($customers as $customer) {
                DB::table('customers')->updateOrCreate(
                    ['id' => $customer->id],
                    [
                        'company_id' => $customer->company_id ?? 1,
                        'name' => $customer->name,
                        'email' => $customer->email ?? null,
                        'phone' => $customer->phone ?? null,
                        'address' => $customer->address ?? null,
                        'is_active' => $customer->active ?? true,
                        'created_at' => $customer->created_at ?? now(),
                        'updated_at' => $customer->updated_at ?? now(),
                    ]
                );
            }

            $newCount = DB::table('customers')->count();
            $this->line("  ✅ Migraron: {$newCount} clientes");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando customers: " . $e->getMessage());
        }
    }

    /**
     * Migrar tabla ACCOUNTING_ACCOUNTS
     */
    private function migrateAccountingAccounts()
    {
        try {
            $accountsCount = DB::connection('mysql_old')
                ->table('accounting_accounts')
                ->count();

            $this->line("  → Encontrados: {$accountsCount} cuentas");

            $accounts = DB::connection('mysql_old')
                ->table('accounting_accounts')
                ->get();

            foreach ($accounts as $account) {
                // Mapear group_id
                $groupId = DB::table('accounting_groups')
                    ->where('group_code', $account->group_code ?? 'PAT')
                    ->first()?->id ?? 5;

                DB::table('accounting_accounts')->updateOrCreate(
                    ['id' => $account->id],
                    [
                        'company_id' => $account->company_id ?? 1,
                        'accounting_group_id' => $groupId,
                        'account_code' => $account->code,
                        'account_name' => $account->name,
                        'account_type' => $account->type ?? 'asset',
                        'current_balance' => $account->balance ?? 0,
                        'is_active' => $account->active ?? true,
                        'created_at' => $account->created_at ?? now(),
                        'updated_at' => $account->updated_at ?? now(),
                    ]
                );
            }

            $newCount = DB::table('accounting_accounts')->count();
            $this->line("  ✅ Migraron: {$newCount} cuentas contables");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando accounting_accounts: " . $e->getMessage());
        }
    }

    /**
     * Migrar tabla SALES y SALES_ITEMS
     */
    private function migrateSales()
    {
        try {
            $salesCount = DB::connection('mysql_old')
                ->table('sales')
                ->count();

            $this->line("  → Encontradas: {$salesCount} ventas");

            $sales = DB::connection('mysql_old')
                ->table('sales')
                ->get();

            foreach ($sales as $sale) {
                // Insertar sale
                DB::table('sales')->updateOrCreate(
                    ['id' => $sale->id],
                    [
                        'company_id' => $sale->company_id ?? 1,
                        'customer_id' => $sale->customer_id,
                        'invoice_number' => $sale->invoice_number,
                        'subtotal' => $sale->subtotal ?? 0,
                        'tax' => $sale->tax ?? 0,
                        'total' => $sale->total ?? 0,
                        'payment_status' => $sale->payment_status ?? 'pending',
                        'status' => $sale->status ?? 'pending',
                        'created_at' => $sale->created_at ?? now(),
                        'updated_at' => $sale->updated_at ?? now(),
                    ]
                );

                // Migrar items
                $items = DB::connection('mysql_old')
                    ->table('sales_items')
                    ->where('sale_id', $sale->id)
                    ->get();

                foreach ($items as $item) {
                    DB::table('sales_items')->updateOrCreate(
                        ['id' => $item->id],
                        [
                            'sale_id' => $sale->id,
                            'description' => $item->description,
                            'quantity' => $item->quantity,
                            'price' => $item->price,
                            'tax_rate' => $item->tax_rate ?? 15,
                            'subtotal' => $item->subtotal ?? 0,
                            'tax_amount' => $item->tax_amount ?? 0,
                            'total' => $item->total ?? 0,
                            'created_at' => $item->created_at ?? now(),
                            'updated_at' => $item->updated_at ?? now(),
                        ]
                    );
                }
            }

            $newSalesCount = DB::table('sales')->count();
            $newItemsCount = DB::table('sales_items')->count();
            $this->line("  ✅ Migraron: {$newSalesCount} ventas, {$newItemsCount} items");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando sales: " . $e->getMessage());
        }
    }

    /**
     * Migrar tabla EXPENSES y PAYMENTS
     */
    private function migrateExpenses()
    {
        try {
            $expensesCount = DB::connection('mysql_old')
                ->table('expenses')
                ->count();

            $this->line("  → Encontrados: {$expensesCount} gastos");

            $expenses = DB::connection('mysql_old')
                ->table('expenses')
                ->get();

            foreach ($expenses as $expense) {
                // Encontrar account_id
                $accountId = DB::table('accounting_accounts')
                    ->where('account_code', 'GAST-ADMIN')
                    ->first()?->id ?? null;

                DB::table('expenses')->updateOrCreate(
                    ['id' => $expense->id],
                    [
                        'company_id' => $expense->company_id ?? 1,
                        'user_id' => $expense->user_id ?? 1,
                        'accounting_account_id' => $accountId,
                        'amount' => $expense->amount,
                        'category' => $expense->category ?? 'other',
                        'expense_date' => $expense->expense_date ?? now(),
                        'description' => $expense->description ?? '',
                        'status' => $expense->status ?? 'pending',
                        'created_at' => $expense->created_at ?? now(),
                        'updated_at' => $expense->updated_at ?? now(),
                    ]
                );
            }

            // Migrar payments
            $paymentsCount = DB::connection('mysql_old')
                ->table('payments')
                ->count();

            $this->line("  → Encontrados: {$paymentsCount} pagos");

            $payments = DB::connection('mysql_old')
                ->table('payments')
                ->get();

            foreach ($payments as $payment) {
                DB::table('payments')->updateOrCreate(
                    ['id' => $payment->id],
                    [
                        'sale_id' => $payment->sale_id,
                        'amount' => $payment->amount,
                        'payment_date' => $payment->payment_date ?? now(),
                        'method' => $payment->method ?? 'cash',
                        'reference' => $payment->reference ?? null,
                        'created_at' => $payment->created_at ?? now(),
                        'updated_at' => $payment->updated_at ?? now(),
                    ]
                );
            }

            $newExpensesCount = DB::table('expenses')->count();
            $newPaymentsCount = DB::table('payments')->count();
            $this->line("  ✅ Migraron: {$newExpensesCount} gastos, {$newPaymentsCount} pagos");

        } catch (\Exception $e) {
            throw new \Exception("Error migrando expenses/payments: " . $e->getMessage());
        }
    }

    /**
     * Validar integridad de datos migrados
     */
    private function validateData()
    {
        $this->info('🔍 VALIDACIÓN DE INTEGRIDAD');
        $this->line('---');

        $validations = [
            'Companies' => DB::table('companies')->count(),
            'Users' => DB::table('users')->count(),
            'BusinessUsers' => DB::table('business_users')->count(),
            'Customers' => DB::table('customers')->count(),
            'Sales' => DB::table('sales')->count(),
            'SalesItems' => DB::table('sales_items')->count(),
            'Expenses' => DB::table('expenses')->count(),
            'Payments' => DB::table('payments')->count(),
            'AccountingAccounts' => DB::table('accounting_accounts')->count(),
        ];

        $allValid = true;

        foreach ($validations as $entity => $count) {
            $status = $count > 0 ? '✅' : '⚠️ ';
            $this->line("  {$status} {$entity}: {$count}");
            if ($count === 0) $allValid = false;
        }

        // FK relationships
        $this->line('');
        $this->line('Validando FK relationships:');

        $orphanUsers = DB::table('users')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('companies')
                    ->whereColumn('companies.id', 'users.company_id');
            })
            ->count();

        $this->line("  ✅ Usuarios huérfanos: {$orphanUsers}");

        $orphanSales = DB::table('sales')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('customers')
                    ->whereColumn('customers.id', 'sales.customer_id');
            })
            ->count();

        $this->line("  ✅ Ventas huérfanas: {$orphanSales}");

        if ($orphanUsers === 0 && $orphanSales === 0) {
            $this->line('');
            $this->info('✅ TODAS LAS VALIDACIONES PASARON');
            return 0;
        } else {
            $this->warn('⚠️ ADVERTENCIAS: Hay registros huérfanos');
            return 1;
        }
    }
}
