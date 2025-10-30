#!/usr/bin/env php
<?php

/**
 * Generador CORREGIDO de migraciones individuales
 * Crea migraciones correctas usando Blueprint API de Laravel
 */

$basePath = __DIR__ . '/..';
$migrationsPath = "$basePath/database/migrations";
$jsonFile = __DIR__ . '/tables-structure.json';

if (!file_exists($jsonFile)) {
    die("❌ Archivo tables-structure.json no encontrado\n");
}

$allTables = json_decode(file_get_contents($jsonFile), true);

// Orden correcto de dependencias
$tableDependencies = [
    'countries' => [],
    'departments' => ['countries'],
    'cities' => ['countries', 'departments'],
    'currency' => [],
    'currency_sys' => [],
    'tax_rates' => [],
    'accounting_groups' => [],
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
    'accounting_accounts' => ['accounting_groups', 'tax_rates', 'currency_sys'],
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
    'sales_master' => ['persons', 'sellers', 'branch_offices', 'currency_sys'],
    'sales_detail' => ['sales_master', 'products'],
    'sales_detail_taxes' => ['sales_detail', 'tax_rates'],
    'sales_detail_units' => ['sales_detail', 'measurement_units'],
    'sales_seller' => ['sales_master', 'sellers'],
    'sales_currency' => ['sales_master', 'currency_sys'],
    'means_payment_sale' => ['sales_master', 'means_payment'],
    'resolution_sale' => ['sales_master'],
    'customers_sale' => ['persons'],
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
    
    // Mapeo directo
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
    
    // Buscar coincidencia
    foreach ($blueprints as $pattern => $blueprint) {
        if (stripos($sqlType, $pattern) !== false) {
            return $blueprint;
        }
    }
    
    return ['string', 255];
}

echo "\n🔧 Generando " . count($tableDependencies) . " migraciones atomicas...\n\n";

$migrationNumber = 14;

foreach ($tableDependencies as $tableName => $deps) {
    if (!isset($allTables[$tableName])) {
        echo "⚠️  $tableName no en estructura\n";
        continue;
    }
    
    $columns = $allTables[$tableName];
    $paddedNum = str_pad($migrationNumber, 6, '0', STR_PAD_LEFT);
    
    $className = 'Create' . str_replace('_', '', ucwords($tableName, '_')) . 'Table';
    $filename = sprintf('%s/2025_10_29_%s_create_%s_table.php', $migrationsPath, $paddedNum, $tableName);
    
    $code = "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\n";
    $code .= "use Illuminate\\Database\\Schema\\Blueprint;\n";
    $code .= "use Illuminate\\Support\\Facades\\Schema;\n\n";
    $code .= "return new class extends Migration\n{\n";
    $code .= "    public function up(): void\n    {\n";
    $code .= "        Schema::create('$tableName', function (Blueprint \$table) {\n";
    $code .= "            \$table->id();\n";
    
    $foreignKeys = [];
    
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
            $code .= "            \$table->unsignedBigInteger('$colName')";
            if ($nullable) $code .= "->nullable()";
            $code .= ";\n";
            continue;
        }
        
        [$blueprintType, $param] = getBlueprint($colDef);
        $code .= "            \$table->$blueprintType('$colName'";
        
        if ($param) {
            $code .= ", $param";
        }
        
        $code .= ")";
        if ($nullable) $code .= "->nullable()";
        $code .= ";\n";
    }
    
    $code .= "            \$table->timestamps();\n";
    
    // FKs
    foreach ($foreignKeys as $colName => $refTable) {
        $code .= "            \$table->foreign('$colName')->references('id')->on('$refTable')";
        $code .= "->onDelete('cascade')->onUpdate('cascade');\n";
    }
    
    $code .= "        });\n    }\n\n";
    $code .= "    public function down(): void\n    {\n";
    $code .= "        Schema::dropIfExists('$tableName');\n";
    $code .= "    }\n};\n";
    
    file_put_contents($filename, $code);
    echo "✓ Migración $migrationNumber: $tableName\n";
    
    $migrationNumber++;
}

echo "\n✅ Total migraciones creadas: " . ($migrationNumber - 14) . "\n";
