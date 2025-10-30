#!/usr/bin/env php
<?php

/**
 * Generador FINAL de migraciones - Usa escribir con template físico
 */

$basePath = __DIR__ . '/..';
$migrationsPath = "$basePath/database/migrations";
$jsonFile = __DIR__ . '/tables-structure.json';

if (!file_exists($jsonFile)) {
    die("❌ Archivo no encontrado\n");
}

$allTables = json_decode(file_get_contents($jsonFile), true);

$tableDependencies = [
    // EXCLUIDAS: ya en migraciones 1-13
    // 'countries', 'currency_sys', 'tax_rates', 'accounting_groups', 'companies',
    // 'users', 'business_users', 'accounting_accounts', 'customers_sale', 'sales_master',
    // 'sales_detail', 'expenses', 'payments'
    
    'departments' => ['countries'],
    'cities' => ['countries', 'departments'],
    'currency' => [],
    'accounting_documents_category' => [],
    'identity_documents' => [],
    'type_persons' => [],
    'type_organization' => [],
    'type_users' => [],
    'languajes' => [],
    'payment_methods' => [],
    'means_payment' => [],
    'product_class' => [],
    'account_types' => [],
    'class_of_accounts' => [],
    'accounts_base' => [],
    'tributes' => [],
    'work_shifts' => [],
    'shipping_frequency' => [],
    'standard_measurement_units' => [],
    'persons' => ['type_persons', 'identity_documents', 'cities'],
    'secondary_persons' => ['persons'],
    'categories' => [],
    'subcategories' => ['categories'],
    'product_categories' => [],
    'product_subcategories' => ['product_categories'],
    'product_brands' => [],
    'attributes' => [],
    'attribute_terms' => ['attributes'],
    'sizes' => [],
    'trademarks' => [],
    'measurement_units' => [],
    'branch_offices' => [],
    'warehouse' => [],
    'warehouse_inventory' => ['warehouse'],
    'points_of_sale' => ['branch_offices'],
    'cash_registers' => ['points_of_sale'],
    'sellers' => ['branch_offices'],
    'accounting_subaccounts' => ['accounting_accounts'],
    'tax_accounting_account' => ['tax_rates', 'accounting_accounts'],
    'accounting_documents' => ['accounting_documents_category'],
    'products' => ['categories', 'product_brands', 'measurement_units', 'product_class'],
    'product_attributes' => ['products', 'attributes'],
    'product_branch' => ['products', 'branch_offices'],
    'product_units_measure' => ['products', 'measurement_units'],
    'product_code_control' => ['products'],
    'stock_control' => ['products', 'branch_offices'],
    'stock_outings' => ['stock_control'],
    'fe_party_tax' => [],
    'fe_reference_price_codes' => [],
    'fe_tax_level' => [],
    'fe_tax_regime' => [],
    'items_types' => [],
    'item_type_accounts' => ['items_types', 'accounting_accounts'],
    'tax_group' => [],
    'sales_detail_taxes' => ['sales_detail', 'tax_rates'],
    'sales_detail_units' => ['sales_detail', 'measurement_units'],
    'sales_seller' => ['sales_master', 'sellers'],
    'sales_currency' => ['sales_master', 'currency_sys'],
    'means_payment_sale' => ['sales_master', 'means_payment'],
    'resolution_sale' => ['sales_master'],
    'resolutions' => ['accounting_documents'],
    'invoices' => ['sales_master', 'persons', 'resolutions'],
    'invoice_detail' => ['invoices', 'sales_detail'],
    'billing_payment' => ['invoices'],
    'user_sales' => ['sellers'],
    'user_notes' => [],
    'company_departments' => [],
    'tb_audit' => [],
    'tb_time_limit' => [],
    'assigned_branches_office' => ['branch_offices'],
    'assigned_cash_register' => ['cash_registers'],
    'assigned_work_shifts' => ['work_shifts'],
    'menus' => [],
    'menus_items' => ['menus'],
    'general_settings' => [],
    'report_header' => [],
    'wineries_departments' => [],
];

function getBlueprint($sqlType) {
    $sqlType = strtolower(trim($sqlType));
    $blueprints = [
        'bigint(20)' => ['bigInteger', null],
        'int(11)' => ['integer', null],
        'smallint(6)' => ['smallInteger', null],
        'tinyint(1)' => ['tinyInteger', null],
        'varchar' => ['string', 255],
        'char' => ['char', 50],
        'text' => ['text', null],
        'longtext' => ['longText', null],
        'decimal' => ['decimal', '16,2'],
        'float' => ['float', null],
        'date' => ['date', null],
        'datetime' => ['dateTime', null],
        'timestamp' => ['timestamp', null],
    ];
    
    foreach ($blueprints as $pattern => $blueprint) {
        if (stripos($sqlType, $pattern) !== false) {
            return $blueprint;
        }
    }
    
    return ['string', 255];
}

echo "\n🔧 Generando 85 migraciones atomicas (CORREGIDAS)...\n\n";

$migrationNumber = 14;

foreach ($tableDependencies as $tableName => $deps) {
    if (!isset($allTables[$tableName])) {
        echo "⚠️  $tableName no existe\n";
        continue;
    }
    
    $columns = $allTables[$tableName];
    $paddedNum = str_pad($migrationNumber, 6, '0', STR_PAD_LEFT);
    $filename = "$migrationsPath/2025_10_29_${paddedNum}_create_${tableName}_table.php";
    
    $foreignKeys = [];
    $colsCode = '';
    
    foreach ($columns as $colName => $colDef) {
        if ($colName === 'id' || $colName === 'timestamp') {
            continue;
        }
        
        $colDef = trim($colDef);
        $nullable = stripos($colDef, 'NOT NULL') === false;
        
        // Detectar FK
        if (preg_match('/REFERENCES\s+`?([^`\s(]+)`?/i', $colDef, $m)) {
            $refTable = $m[1];
            $foreignKeys[$colName] = $refTable;
            $colsCode .= "            \$table->unsignedBigInteger('{$colName}')";
            if ($nullable) $colsCode .= "->nullable()";
            $colsCode .= ";\n";
            continue;
        }
        
        [$blueprintType, $param] = getBlueprint($colDef);
        $colsCode .= "            \$table->{$blueprintType}('{$colName}'";
        
        if ($param) {
            $colsCode .= ", {$param}";
        }
        
        $colsCode .= ")";
        if ($nullable) $colsCode .= "->nullable()";
        $colsCode .= ";\n";
    }
    
    $fkCode = '';
    foreach ($foreignKeys as $colName => $refTable) {
        $fkCode .= "            \$table->foreign('{$colName}')->references('id')->on('{$refTable}')->onDelete('cascade')->onUpdate('cascade');\n";
    }
    
    $code = <<<MCLASS
<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('{$tableName}', function (Blueprint \$table) {
            \$table->id();
{$colsCode}            \$table->timestamps();
{$fkCode}        });
    }

    public function down(): void
    {
        Schema::dropIfExists('{$tableName}');
    }
};
MCLASS;
    
    file_put_contents($filename, $code);
    echo "✓ Migración $migrationNumber: $tableName\n";
    $migrationNumber++;
}

echo "\n✅ Listas: " . ($migrationNumber - 14) . " migraciones\n";
