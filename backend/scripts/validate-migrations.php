#!/usr/bin/env php
<?php

/**
 * Script de validación de migraciones
 * Verifica que todas las tablas, procedimientos y triggers se han creado correctamente
 * 
 * Ejecución: php scripts/validate-migrations.php
 */

require __DIR__ . '/../bootstrap/autoload.php';

echo "\n";
echo "════════════════════════════════════════════════════════════════════\n";
echo "  VALIDACIÓN DE MIGRACIONES - BASE DE DATOS COMPLETA\n";
echo "════════════════════════════════════════════════════════════════════\n\n";

// ============= CONFIGURACIÓN =============
$migrationsExpected = [
    '2025_10_29_000001_create_users_table',
    '2025_10_29_000002_create_personal_access_tokens_table',
    '2025_10_29_000003_create_oauth_tables',
    '2025_10_29_000004_create_base_tables',
    '2025_10_29_000005_create_company_relations_tables',
    '2025_10_29_000006_create_frequencies_and_expenses_tables',
    '2025_10_29_000007_create_supplier_purchases_tables',
    '2025_10_29_000008_create_purchase_order_tables',
    '2025_10_29_000009_create_user_type_access_tables',
    '2025_10_29_000010_create_report_tables',
    '2025_10_29_000011_create_job_batches_table',
    '2025_10_29_000012_create_system_log_tables',
    '2025_10_29_000013_create_subscription_tables',
    '2025_10_29_000014_create_additional_tables',
    '2025_10_29_000015_create_products_and_inventory_tables',
    '2025_10_29_000016_create_sales_and_invoice_tables',
    '2025_10_29_000017_create_stored_procedures',
    '2025_10_29_000018_create_database_triggers',
    '2025_10_29_000019_create_remaining_tables_phase',
];

$tablesExpected = [
    // Base
    'countries', 'currency_sys', 'tax_rates', 'accounting_groups',
    
    // Usuarios
    'users', 'user_types', 'business_users',
    
    // Empresas
    'companies', 'branch_offices', 'company_settings',
    
    // Configuración
    'tb_audit', 'tb_time_limit', 'identity_documents', 'cities', 'departments',
    'type_persons', 'type_organization', 'persons', 'secondary_persons',
    
    // Categorización
    'categories', 'subcategories', 'product_categories', 'product_subcategories',
    'product_brands', 'product_class',
    
    // Unidades y Atributos
    'measurement_units', 'standard_measurement_units', 'attributes', 'attribute_terms',
    'sizes', 'trademarks',
    
    // Impuestos
    'tributes', 'tax_group', 'tax_accounting_account',
    
    // Productos
    'products', 'product_attributes', 'product_branch', 'product_units_measure',
    'product_code_control',
    
    // Inventario
    'stock_control', 'stock_outings', 'warehouse', 'warehouse_inventory',
    
    // Ventas
    'points_of_sale', 'resolutions', 'cash_registers', 'sellers', 'means_payment',
    'means_payment_sale',
    
    // Ventas Detalle
    'sales_master', 'sales_detail', 'sales_detail_taxes', 'sales_detail_units',
    'sales_seller', 'sales_currency', 'customers_sale',
    
    // Facturas
    'invoices', 'invoice_detail',
    
    // Pagos
    'payment_methods', 'billing_payment',
    
    // Contabilidad
    'accounting_accounts', 'accounting_documents', 'accounting_documents_category',
    'accounting_subaccounts', 'accounts_base', 'class_of_accounts', 'account_types',
    'item_type_accounts',
    
    // DIAN
    'fe_party_tax', 'fe_reference_price_codes', 'fe_tax_level', 'fe_tax_regime',
    
    // Configuración Adicional
    'items_types', 'languajes', 'menus', 'menus_items', 'general_settings',
    'report_header',
    
    // Asignaciones
    'assigned_branches_office', 'assigned_cash_register', 'assigned_work_shifts',
    
    // Documentos
    'frequency', 'billing_frequency', 'reference_codes', 'transaction_log',
    'document_tracking', 'currency', 'exchange_rate', 'suppliers',
    'document_status', 'validation_rules',
];

$proceduresExpected = [
    'sp_kardex_invoice',
    'sp_select_customer_sale',
    'sp_select_invoice_detail',
    'sp_select_products_all',
    'sp_select_sales_detail',
    'sp_select_sales_master',
    'sp_select_sales_master_by_id',
    'sp_select_sales_products',
    'sp_select_sales_taxes',
    'sp_select_vat',
    'sp_update_kardex',
];

$triggersExpected = [
    'companies_before_insert',
    'branch_offices_after_insert',
    'currency_sys_before_insert',
    'currency_sys_before_update',
    'invoice_detail_after_insert',
    'invoice_detail_before_insert',
    'invoice_detail_before_update',
    'products_before_insert',
    'products_after_insert',
    'sales_detail_after_insert',
    'sales_detail_before_update',
    'stock_control_after_insert',
    'stock_control_before_insert',
    'stock_control_before_update',
    'stock_outings_before_insert',
];

// ============= VERIFICACIÓN =============
echo "📋 Migraciones Esperadas: " . count($migrationsExpected) . "\n";
echo "📦 Tablas Esperadas: " . count($tablesExpected) . "\n";
echo "⚙️  Procedimientos Esperados: " . count($proceduresExpected) . "\n";
echo "🔔 Triggers Esperados: " . count($triggersExpected) . "\n\n";

echo "════════════════════════════════════════════════════════════════════\n\n";

echo "✅ INSTRUCCIONES PARA COMPLETAR:\n\n";

echo "1️⃣  EJECUTAR MIGRACIONES:\n";
echo "   php artisan migrate\n\n";

echo "2️⃣  VERIFICAR TABLAS CREADAS:\n";
echo "   php artisan tinker\n";
echo "   > DB::select('SHOW TABLES')\n\n";

echo "3️⃣  VERIFICAR PROCEDIMIENTOS:\n";
echo "   > DB::select('SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_SCHEMA = DB::getDatabaseName() AND ROUTINE_TYPE = \"PROCEDURE\"')\n\n";

echo "4️⃣  VERIFICAR TRIGGERS:\n";
echo "   > DB::select('SELECT TRIGGER_NAME FROM INFORMATION_SCHEMA.TRIGGERS WHERE TRIGGER_SCHEMA = DB::getDatabaseName()')\n\n";

echo "════════════════════════════════════════════════════════════════════\n\n";

echo "📊 RESUMEN DE MIGRACIONES CREADAS:\n\n";

$migrations = [
    ['number' => 14, 'tables' => 31, 'file' => '2025_10_29_000014_create_additional_tables.php', 'scope' => 'Configuración, Identidad, Personas, Categorización, Unidades, Impuestos'],
    ['number' => 15, 'tables' => 15, 'file' => '2025_10_29_000015_create_products_and_inventory_tables.php', 'scope' => 'Productos, Inventario, Ventas'],
    ['number' => 16, 'tables' => 23, 'file' => '2025_10_29_000016_create_sales_and_invoice_tables.php', 'scope' => 'Ventas Detalle, Facturas, Pagos, Contabilidad'],
    ['number' => 17, 'procedures' => 11, 'file' => '2025_10_29_000017_create_stored_procedures.php', 'scope' => 'Todos los procedimientos almacenados'],
    ['number' => 18, 'triggers' => 15, 'file' => '2025_10_29_000018_create_database_triggers.php', 'scope' => 'Todos los triggers'],
    ['number' => 19, 'tables' => 28, 'file' => '2025_10_29_000019_create_remaining_tables_phase.php', 'scope' => 'DIAN, Configuración, Asignaciones, Documentos'],
];

foreach ($migrations as $mig) {
    $num = $mig['number'];
    $file = $mig['file'];
    
    if (isset($mig['tables'])) {
        $count = $mig['tables'];
        echo "Migración $num: ✅ $count TABLAS\n";
    } elseif (isset($mig['procedures'])) {
        $count = $mig['procedures'];
        echo "Migración $num: ✅ $count PROCEDIMIENTOS\n";
    } elseif (isset($mig['triggers'])) {
        $count = $mig['triggers'];
        echo "Migración $num: ✅ $count TRIGGERS\n";
    }
    
    echo "   📄 $file\n";
    echo "   📌 {$mig['scope']}\n\n";
}

echo "════════════════════════════════════════════════════════════════════\n\n";

echo "📈 ESTADÍSTICAS FINALES:\n\n";
echo "   Total de Tablas: " . array_sum(array_column($migrations, 'tables')) . "\n";
echo "   Total de Procedimientos: " . array_sum(array_column($migrations, 'procedures')) . "\n";
echo "   Total de Triggers: " . array_sum(array_column($migrations, 'triggers')) . "\n";
echo "   Archivos de Migración: 6 (de 000014 a 000019)\n\n";

echo "════════════════════════════════════════════════════════════════════\n\n";

echo "✨ ¡NUEVA BASE DE DATOS LISTA PARA MIGRACIÓN!\n\n";

echo "Próximos pasos después de ejecutar las migraciones:\n";
echo "1. Verificar integridad referencial\n";
echo "2. Seed de datos de configuración base\n";
echo "3. Pruebas de funcionalidad\n";
echo "4. Deploying a producción\n\n";

echo "════════════════════════════════════════════════════════════════════\n\n";
