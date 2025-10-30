<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

/**
 * ✅ ROLLBACK COMMAND: Reverse Data Migration
 * 
 * Deshacer la migración de datos si hay problemas.
 * Restaura y_code_new a su estado vacío después de seeders.
 * 
 * Ejecución:
 * php artisan migrate:rollback-data
 */
class MigrateRollbackDataCommand extends Command
{
    protected $signature = 'migrate:rollback-data {--confirm : Confirmar sin prompta}';
    protected $description = 'Deshace la migración de datos y limpia y_code_new';

    public function handle()
    {
        $this->warn('⚠️  ADVERTENCIA: Esto eliminará TODOS los datos migrados');
        $this->warn('   y dejará solo los datos de seeders (países, monedas, etc.)');

        if (!$this->option('confirm')) {
            if (!$this->confirm('¿Continuar con el ROLLBACK?')) {
                $this->info('❌ Operación cancelada');
                return 1;
            }
        }

        try {
            $this->info('🔄 INICIANDO ROLLBACK DE DATOS');
            $this->line('==========================================');

            // Orden inverso de inserción
            $tables = [
                'payments',
                'sales_items',
                'sales',
                'expenses',
                'accounting_accounts',
                'customers',
                'business_users',
                'users',
                'companies',
            ];

            foreach ($tables as $table) {
                $this->line("  → Limpiando {$table}...");
                DB::table($table)->truncate();
                $this->line("  ✅ {$table} limpia");
            }

            $this->line('');
            $this->info('✅ ROLLBACK COMPLETADO EXITOSAMENTE');
            $this->info('==========================================');
            $this->info('Estado actual: Solo seeders (países, monedas, impuestos, grupos)');

            return 0;

        } catch (\Exception $e) {
            $this->error('❌ ERROR EN ROLLBACK: ' . $e->getMessage());
            return 1;
        }
    }
}
