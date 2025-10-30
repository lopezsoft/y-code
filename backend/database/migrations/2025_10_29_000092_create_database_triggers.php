<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Migración de triggers de auditoría para tablas críticas.
     * 
     * TABLAS AUDITADAS:
     * - accounting_accounts: Plan de cuentas contables
     * - companies: Empresas del sistema (multi-tenant)
     * - customers: Clientes
     * - expenses: Gastos
     * - payments: Pagos
     * 
     * TRIGGERS POR TABLA:
     * - *_insert: Registra creación de registro (action_id=1)
     * - *_update: Registra modificación de registro (action_id=2)
     * - *_delete: Registra eliminación de registro (action_id=3)
     * 
     * DESTINO: Tabla tb_audit (id_table, id_row, action_id, table_name, created_at)
     * 
     * PROPÓSITO: Trazabilidad de cambios en tablas financieras y maestras.
     * Cumplimiento con requisitos de auditoría contable y SAR.
     */
    public function up(): void
    {
        DB::unprepared(<<<'SQL'
CREATE TRIGGER `accounting_accounts_insert` AFTER INSERT ON `accounting_accounts` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 1, 1, 'accounting_accounts', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `accounting_accounts_update` AFTER UPDATE ON `accounting_accounts` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 2, 1, 'accounting_accounts', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `accounting_accounts_delete` AFTER DELETE ON `accounting_accounts` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (OLD.id, 3, 1, 'accounting_accounts', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `companies_insert` AFTER INSERT ON `companies` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 1, 1, 'companies', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `companies_update` AFTER UPDATE ON `companies` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 2, 1, 'companies', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `companies_delete` AFTER DELETE ON `companies` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (OLD.id, 3, 1, 'companies', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `customers_insert` AFTER INSERT ON `customers` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 1, 1, 'customers', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `customers_update` AFTER UPDATE ON `customers` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 2, 1, 'customers', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `customers_delete` AFTER DELETE ON `customers` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (OLD.id, 3, 1, 'customers', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `expenses_insert` AFTER INSERT ON `expenses` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 1, 1, 'expenses', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `expenses_update` AFTER UPDATE ON `expenses` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 2, 1, 'expenses', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `expenses_delete` AFTER DELETE ON `expenses` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (OLD.id, 3, 1, 'expenses', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `payments_insert` AFTER INSERT ON `payments` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 1, 1, 'payments', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `payments_update` AFTER UPDATE ON `payments` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (NEW.id, 2, 1, 'payments', NOW());
END
SQL);

        DB::unprepared(<<<'SQL'
CREATE TRIGGER `payments_delete` AFTER DELETE ON `payments` FOR EACH ROW BEGIN
    INSERT INTO tb_audit (id_table, id_row, action_id, table_name, created_at) VALUES (OLD.id, 3, 1, 'payments', NOW());
END
SQL);
    }

    public function down(): void
    {
        DB::unprepared('DROP TRIGGER IF EXISTS `accounting_accounts_insert`');
        DB::unprepared('DROP TRIGGER IF EXISTS `accounting_accounts_update`');
        DB::unprepared('DROP TRIGGER IF EXISTS `accounting_accounts_delete`');
        DB::unprepared('DROP TRIGGER IF EXISTS `companies_insert`');
        DB::unprepared('DROP TRIGGER IF EXISTS `companies_update`');
        DB::unprepared('DROP TRIGGER IF EXISTS `companies_delete`');
        DB::unprepared('DROP TRIGGER IF EXISTS `customers_insert`');
        DB::unprepared('DROP TRIGGER IF EXISTS `customers_update`');
        DB::unprepared('DROP TRIGGER IF EXISTS `customers_delete`');
        DB::unprepared('DROP TRIGGER IF EXISTS `expenses_insert`');
        DB::unprepared('DROP TRIGGER IF EXISTS `expenses_update`');
        DB::unprepared('DROP TRIGGER IF EXISTS `expenses_delete`');
        DB::unprepared('DROP TRIGGER IF EXISTS `payments_insert`');
        DB::unprepared('DROP TRIGGER IF EXISTS `payments_update`');
        DB::unprepared('DROP TRIGGER IF EXISTS `payments_delete`');
    }
};
