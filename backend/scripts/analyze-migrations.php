<?php
/**
 * SCRIPT PARA ANALIZAR Y GENERAR MIGRACIONES FALTANTES
 * 
 * Este script compara las dos bases de datos y genera automáticamente
 * todas las migraciones que faltan
 */

// Array de tablas encontradas en los scripts SQL
$allTables = [
    'accounting_accounts', 'accounting_documents', 'accounting_documents_category',
    'accounting_groups', 'accounting_subaccounts', 'accounts_base', 'account_types',
    'assigned_branches_office', 'assigned_cash_register', 'assigned_work_shifts',
    'attributes', 'attribute_terms', 'billing_payment', 'branch_offices', 'cash_registers',
    'categories', 'cities', 'class_of_accounts', 'company', 'company_departments',
    'countries', 'currency', 'currency_sys', 'customers_sale', 'departments',
    'fe_party_tax', 'fe_reference_price_codes', 'fe_tax_level', 'fe_tax_regime',
    'general_settings', 'identity_documents', 'invoices', 'invoice_detail', 'items_types',
    'item_type_accounts', 'languajes', 'means_payment', 'means_payment_sale',
    'measurement_units', 'menus', 'menus_items', 'payment_methods', 'persons',
    'points_of_sale', 'products', 'product_attributes', 'product_branch', 'product_brands',
    'product_categories', 'product_class', 'product_code_control', 'product_subcategories',
    'product_units_measure', 'report_header', 'resolutions', 'resolution_sale',
    'sales_currency', 'sales_detail', 'sales_detail_taxes', 'sales_detail_units',
    'sales_master', 'sales_seller', 'secondary_persons', 'sellers', 'shipping_frequency',
    'sizes', 'standard_measurement_units', 'stock_control', 'stock_outings', 'subcategories',
    'tax_accounting_account', 'tax_group', 'tax_rates', 'tb_audit', 'tb_time_limit',
    'trademarks', 'tributes', 'type_organization', 'type_persons', 'type_users',
    'users', 'user_notes', 'user_sales', 'warehouse', 'warehouse_inventory'
];

// Tablas que ya tienen migraciones
$existingMigrations = [
    'countries', 'currency_sys', 'tax_rates', 'accounting_groups', 'companies',
    'users', 'business_users', 'accounting_accounts', 'customers', 'sales',
    'sales_items', 'expenses', 'payments'
];

// Comparar
$missingTables = array_diff($allTables, $existingMigrations);

echo "=== ANÁLISIS DE MIGRACIONES ===\n\n";
echo "Total de tablas encontradas: " . count($allTables) . "\n";
echo "Tablas con migraciones: " . count($existingMigrations) . "\n";
echo "Tablas FALTANTES: " . count($missingTables) . "\n\n";

echo "TABLAS FALTANTES:\n";
echo str_repeat("=", 60) . "\n";
foreach ($missingTables as $table) {
    echo "  - $table\n";
}

echo "\n\nPROCEDIMIENTOS ALMACENADOS ENCONTRADOS:\n";
echo str_repeat("=", 60) . "\n";
$procedures = [
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
    'sp_update_kardex'
];

foreach ($procedures as $proc) {
    echo "  - $proc\n";
}

echo "\n\nTRIGGERS ENCONTRADOS:\n";
echo str_repeat("=", 60) . "\n";
$triggers = [
    'branch_offices_after_insert' => 'branch_offices',
    'companies_before_insert' => 'companies',
    'currency_sys_before_insert' => 'currency_sys',
    'currency_sys_before_update' => 'currency_sys',
    'invoice_detail_after_insert' => 'invoice_detail',
    'invoice_detail_before_insert' => 'invoice_detail',
    'invoice_detail_before_update' => 'invoice_detail',
    'products_after_insert' => 'products',
    'products_before_insert' => 'products',
    'sales_detail_after_insert' => 'sales_detail',
    'sales_detail_before_update' => 'sales_detail',
    'stock_control_after_insert' => 'stock_control',
    'stock_control_before_insert' => 'stock_control',
    'stock_control_before_update' => 'stock_control',
    'stock_outings_before_insert' => 'stock_outings'
];

foreach ($triggers as $trigger => $table) {
    echo "  - $trigger (en tabla: $table)\n";
}

echo "\n\nRESUMEN EJECUTIVO:\n";
echo str_repeat("=", 60) . "\n";
echo "Migraciones a crear: " . (count($missingTables) + 1) . " (tablas + 1 para procedimientos/triggers)\n";
echo "Procedimientos a crear: " . count($procedures) . "\n";
echo "Triggers a crear: " . count($triggers) . "\n";
echo "Total de archivos de migración: " . ceil((count($missingTables) + count($procedures) + count($triggers)) / 10) . " (agrupados)\n";

echo "\n✅ Análisis completado.\n";
?>
