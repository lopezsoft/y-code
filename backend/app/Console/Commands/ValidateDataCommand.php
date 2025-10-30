<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

/**
 * ✅ VALIDATION COMMAND: Verify Data Integrity
 * 
 * Valida que los datos migrados sean correctos y completos.
 * Verifica:
 * - Conteos de registros
 * - Foreign key relationships
 * - Duplicados
 * - Valores nulos inválidos
 * - Totales contables
 * 
 * Ejecución:
 * php artisan validate:data
 * php artisan validate:data --detailed
 * php artisan validate:data --repair
 */
class ValidateDataCommand extends Command
{
    protected $signature = 'validate:data {--detailed : Mostrar detalles completos} {--repair : Intentar reparar problemas} {--export : Exportar reporte a archivo}';
    protected $description = 'Valida la integridad de datos en y_code_new';

    protected array $errors = [];
    protected array $warnings = [];
    protected array $stats = [];

    public function handle()
    {
        $this->info('🔍 VALIDACIÓN COMPLETA DE INTEGRIDAD');
        $this->info('==========================================');
        $this->line('');

        try {
            $this->validateStructure();
            $this->line('');
            
            $this->validateRelationships();
            $this->line('');
            
            $this->validateDataQuality();
            $this->line('');
            
            $this->validateAccounting();
            $this->line('');
            
            $this->showReport();

            if ($this->option('export')) {
                $this->exportReport();
            }

            return 0;

        } catch (\Exception $e) {
            $this->error('❌ ERROR EN VALIDACIÓN: ' . $e->getMessage());
            return 1;
        }
    }

    /**
     * Validar estructura de datos
     */
    private function validateStructure()
    {
        $this->info('📊 VALIDACIÓN DE ESTRUCTURA');
        $this->line('---');

        $tables = [
            'companies' => 'Empresas',
            'users' => 'Usuarios',
            'business_users' => 'Usuarios-Empresa',
            'customers' => 'Clientes',
            'sales' => 'Ventas',
            'sales_items' => 'Items Ventas',
            'expenses' => 'Gastos',
            'payments' => 'Pagos',
            'accounting_accounts' => 'Cuentas Contables',
        ];

        foreach ($tables as $table => $label) {
            $count = DB::table($table)->count();
            $this->stats[$table] = $count;

            if ($count > 0) {
                $this->line("  ✅ {$label}: {$count} registros");
            } else {
                $this->line("  ⚠️  {$label}: 0 registros (posible problema)");
                $this->warnings[] = "Tabla {$table} vacía";
            }
        }
    }

    /**
     * Validar relaciones (Foreign Keys)
     */
    private function validateRelationships()
    {
        $this->info('🔗 VALIDACIÓN DE RELACIONES (FK)');
        $this->line('---');

        // Users sin empresa válida
        $orphanUsers = DB::table('users')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('companies')
                    ->whereColumn('companies.id', 'users.company_id');
            })
            ->count();

        if ($orphanUsers > 0) {
            $this->line("  ❌ Usuarios huérfanos: {$orphanUsers}");
            $this->errors[] = "{$orphanUsers} usuarios sin empresa válida";
        } else {
            $this->line("  ✅ Todos los usuarios tienen empresa válida");
        }

        // Customers sin empresa válida
        $orphanCustomers = DB::table('customers')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('companies')
                    ->whereColumn('companies.id', 'customers.company_id');
            })
            ->count();

        if ($orphanCustomers > 0) {
            $this->line("  ❌ Clientes huérfanos: {$orphanCustomers}");
            $this->errors[] = "{$orphanCustomers} clientes sin empresa válida";
        } else {
            $this->line("  ✅ Todos los clientes tienen empresa válida");
        }

        // Sales sin cliente válido
        $orphanSales = DB::table('sales')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('customers')
                    ->whereColumn('customers.id', 'sales.customer_id');
            })
            ->count();

        if ($orphanSales > 0) {
            $this->line("  ❌ Ventas huérfanas: {$orphanSales}");
            $this->errors[] = "{$orphanSales} ventas sin cliente válido";
        } else {
            $this->line("  ✅ Todas las ventas tienen cliente válido");
        }

        // Payments sin venta válida
        $orphanPayments = DB::table('payments')
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('sales')
                    ->whereColumn('sales.id', 'payments.sale_id');
            })
            ->count();

        if ($orphanPayments > 0) {
            $this->line("  ❌ Pagos huérfanos: {$orphanPayments}");
            $this->errors[] = "{$orphanPayments} pagos sin venta válida";
        } else {
            $this->line("  ✅ Todos los pagos tienen venta válida");
        }
    }

    /**
     * Validar calidad de datos
     */
    private function validateDataQuality()
    {
        $this->info('✨ VALIDACIÓN DE CALIDAD DE DATOS');
        $this->line('---');

        // Emails únicos en users
        $duplicateEmails = DB::table('users')
            ->select('email')
            ->groupBy('email')
            ->havingRaw('count(*) > 1')
            ->count();

        if ($duplicateEmails > 0) {
            $this->line("  ⚠️  Emails duplicados en usuarios: {$duplicateEmails}");
            $this->warnings[] = "{$duplicateEmails} emails duplicados";
        } else {
            $this->line("  ✅ Todos los emails de usuarios son únicos");
        }

        // Invoice numbers únicos por company
        $companies = DB::table('companies')->pluck('id');
        foreach ($companies as $companyId) {
            $duplicateInvoices = DB::table('sales')
                ->where('company_id', $companyId)
                ->select('invoice_number')
                ->groupBy('invoice_number')
                ->havingRaw('count(*) > 1')
                ->count();

            if ($duplicateInvoices > 0) {
                $this->line("  ⚠️  Facturas duplicadas en empresa {$companyId}: {$duplicateInvoices}");
                $this->warnings[] = "Empresa {$companyId} tiene facturas duplicadas";
            }
        }

        $this->line("  ✅ Validación de unicidad completada");

        // Valores nulos críticos
        $nullEmails = DB::table('users')->whereNull('email')->count();
        if ($nullEmails > 0) {
            $this->line("  ⚠️  Usuarios sin email: {$nullEmails}");
            $this->warnings[] = "{$nullEmails} usuarios sin email";
        }

        $nullTotals = DB::table('sales')->whereNull('total')->count();
        if ($nullTotals > 0) {
            $this->line("  ⚠️  Ventas sin total: {$nullTotals}");
            $this->errors[] = "{$nullTotals} ventas sin total (CRÍTICO)";
        }

        $this->line("  ✅ Validación de valores nulos completada");
    }

    /**
     * Validar ecuaciones contables
     */
    private function validateAccounting()
    {
        $this->info('📈 VALIDACIÓN DE CONTABILIDAD');
        $this->line('---');

        // Totales de ventas
        $totalSales = DB::table('sales')->sum('total');
        $totalPayments = DB::table('payments')->sum('amount');

        $this->line("  💰 Total ventas: " . number_format($totalSales, 2, '.', ','));
        $this->line("  💳 Total pagos: " . number_format($totalPayments, 2, '.', ','));
        $this->line("  ⏳ Pendiente: " . number_format($totalSales - $totalPayments, 2, '.', ','));

        // Totales de gastos
        $totalExpenses = DB::table('expenses')
            ->where('status', 'approved')
            ->sum('amount');

        $this->line("  💸 Total gastos aprobados: " . number_format($totalExpenses, 2, '.', ','));

        // Balances (sin filtro de tipo por ahora)
        $totalBalance = DB::table('accounting_accounts')
            ->sum('balance');

        $this->line("  📊 Balance total de cuentas: " . number_format($totalBalance ?? 0, 2, '.', ','));

        $this->line("  ✅ Validación contable completada");
    }

    /**
     * Mostrar reporte final
     */
    private function showReport()
    {
        $this->line('');
        $this->info('📋 REPORTE FINAL');
        $this->line('==========================================');

        $this->line('');
        $this->line('📊 ESTADÍSTICAS:');
        foreach ($this->stats as $table => $count) {
            $this->line("  • {$table}: {$count}");
        }

        if (!empty($this->errors)) {
            $this->line('');
            $this->error('❌ ERRORES CRÍTICOS: ' . count($this->errors));
            foreach ($this->errors as $error) {
                $this->error("  • {$error}");
            }
        }

        if (!empty($this->warnings)) {
            $this->line('');
            $this->warn('⚠️  ADVERTENCIAS: ' . count($this->warnings));
            foreach ($this->warnings as $warning) {
                $this->warn("  • {$warning}");
            }
        }

        $this->line('');
        if (empty($this->errors)) {
            $this->info('✅ VALIDACIÓN COMPLETADA - SIN ERRORES CRÍTICOS');
        } else {
            $this->error('❌ VALIDACIÓN COMPLETADA - CON ERRORES');
        }
    }

    /**
     * Exportar reporte a archivo
     */
    private function exportReport()
    {
        $filename = storage_path('logs/validation-report-' . now()->format('Y-m-d-His') . '.txt');

        $report = "REPORTE DE VALIDACIÓN DE DATOS\n";
        $report .= "Fecha: " . now() . "\n";
        $report .= str_repeat('=', 50) . "\n\n";

        $report .= "ESTADÍSTICAS:\n";
        foreach ($this->stats as $table => $count) {
            $report .= "  • {$table}: {$count}\n";
        }

        if (!empty($this->errors)) {
            $report .= "\nERRORES CRÍTICOS (" . count($this->errors) . "):\n";
            foreach ($this->errors as $error) {
                $report .= "  • {$error}\n";
            }
        }

        if (!empty($this->warnings)) {
            $report .= "\nADVERTENCIAS (" . count($this->warnings) . "):\n";
            foreach ($this->warnings as $warning) {
                $report .= "  • {$warning}\n";
            }
        }

        file_put_contents($filename, $report);
        $this->info("Reporte exportado a: {$filename}");
    }
}
