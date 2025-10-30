#!/usr/bin/env php
<?php

/**
 * GENERADOR DEFINITIVO Y CORRECTO 
 * Genera 77 migraciones individuales sin duplicados
 */

$basePath = __DIR__ . '/..';
$migrationsPath = "$basePath/database/migrations";
$jsonFile = __DIR__ . '/tables-structure.json';

if (!file_exists($jsonFile)) {
    die("❌ Archivo no encontrado\n");
}

$allTables = json_decode(file_get_contents($jsonFile), true);

// 77 tablas que NO existen en las migraciones 1-13
$tables = ['departments', 'cities', 'currency', 'accounting_documents_category', 'identity_documents', 
    'type_persons', 'type_organization', 'type_users', 'languajes', 'payment_methods', 'means_payment', 
    'product_class', 'account_types', 'class_of_accounts', 'accounts_base', 'tributes', 'work_shifts',
    'shipping_frequency', 'standard_measurement_units', 'persons', 'secondary_persons', 'categories', 
    'subcategories', 'product_categories', 'product_subcategories', 'product_brands', 'attributes', 
    'attribute_terms', 'sizes', 'trademarks', 'measurement_units', 'branch_offices', 'warehouse', 
    'warehouse_inventory', 'points_of_sale', 'cash_registers', 'sellers', 'accounting_subaccounts',
    'tax_accounting_account', 'accounting_documents', 'products', 'product_attributes', 'product_branch',
    'product_units_measure', 'product_code_control', 'stock_control', 'stock_outings', 'fe_party_tax',
    'fe_reference_price_codes', 'fe_tax_level', 'fe_tax_regime', 'items_types', 'item_type_accounts',
    'tax_group', 'sales_detail_taxes', 'sales_detail_units', 'sales_seller', 'sales_currency',
    'means_payment_sale', 'resolution_sale', 'resolutions', 'invoices', 'invoice_detail', 
    'billing_payment', 'user_sales', 'user_notes', 'company_departments', 'tb_audit', 'tb_time_limit',
    'assigned_branches_office', 'assigned_cash_register', 'assigned_work_shifts', 'menus', 'menus_items',
    'general_settings', 'report_header', 'wineries_departments'];

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

echo "\n🔧 Generando 77 migraciones CORRECTAS...\n\n";

$migrationNumber = 14;

foreach ($tables as $tableName) {
    if (!isset($allTables[$tableName])) {
        echo "⚠️  $tableName no existe en JSON\n";
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
    
    $code = <<<'MCLASS'
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('TABLA', function (Blueprint $table) {
            $table->id();
COLSHERE            $table->timestamps();
FKSHERE        });
    }

    public function down(): void
    {
        Schema::dropIfExists('TABLA');
    }
};
MCLASS;
    
    $code = str_replace(['TABLA', 'COLSHERE', 'FKSHERE'], [$tableName, $colsCode, $fkCode], $code);
    
    file_put_contents($filename, $code);
    echo "✓ Migración $migrationNumber: $tableName\n";
    $migrationNumber++;
}

echo "\n✅ Se crearon " . count($tables) . " migraciones individuales\n";
echo "📊 Siguiente migración será: $migrationNumber\n";
