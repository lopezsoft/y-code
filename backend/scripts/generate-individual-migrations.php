#!/usr/bin/env php
<?php

/**
 * Generador avanzado de migraciones individuales por tabla
 * Lee tables-structure.json y crea una migración por tabla
 */

$basePath = __DIR__ . '/..';
$migrationsPath = "$basePath/database/migrations";
$jsonFile = __DIR__ . '/tables-structure.json';

if (!file_exists($jsonFile)) {
    echo "❌ Archivo tables-structure.json no encontrado\n";
    exit(1);
}

$tables = json_decode(file_get_contents($jsonFile), true);

// Orden de dependencias (tablas que NO necesitan otras)
$tableDependencies = [
    // Tablas base (sin dependencias en la mayoría de casos)
    'countries' => [],
    'departments' => ['countries'],
    'cities' => ['countries', 'departments'],
    'currency' => [],
    'currency_sys' => [],
    'tax_rates' => [],
    'accounting_groups' => [],
    'accounting_documents_category' => [],
    
    // Tipos
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
    
    // Company (ya existe en migraciones 1-13)
    // 'companies' => ['countries'],
    // 'users' => ['companies'],
    // 'business_users' => ['companies', 'users'],
    
    // Personas
    'persons' => ['type_persons', 'identity_documents', 'cities'],
    'secondary_persons' => ['persons'],
    
    // Categorías y atributos
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
    
    // Ramas y ubicaciones
    'branch_offices' => [],
    'warehouse' => [],
    'warehouse_inventory' => ['warehouse'],
    'points_of_sale' => ['branch_offices'],
    'cash_registers' => ['points_of_sale'],
    'sellers' => ['branch_offices'],
    
    // Cuentas contables
    'accounting_accounts' => ['accounting_groups', 'tax_rates', 'currency_sys'],
    'accounting_subaccounts' => ['accounting_accounts'],
    'tax_accounting_account' => ['tax_rates', 'accounting_accounts'],
    'accounting_documents' => ['accounting_documents_category'],
    
    // Productos
    'products' => ['categories', 'product_brands', 'measurement_units', 'product_class'],
    'product_attributes' => ['products', 'attributes'],
    'product_branch' => ['products', 'branch_offices'],
    'product_units_measure' => ['products', 'measurement_units'],
    'product_code_control' => ['products'],
    
    // Inventario
    'stock_control' => ['products', 'branch_offices'],
    'stock_outings' => ['stock_control'],
    
    // DIAN
    'fe_party_tax' => [],
    'fe_reference_price_codes' => [],
    'fe_tax_level' => [],
    'fe_tax_regime' => [],
    
    // Items
    'items_types' => [],
    'item_type_accounts' => ['items_types', 'accounting_accounts'],
    
    // Ventas
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
    
    // Facturas
    'resolutions' => ['accounting_documents'],
    'invoices' => ['sales_master', 'persons', 'resolutions'],
    'invoice_detail' => ['invoices', 'sales_detail'],
    'billing_payment' => ['invoices'],
    
    // Usuarios y configuración
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

echo "\n🔧 Generando " . count($tableDependencies) . " migraciones individuales...\n\n";

$migrationNumber = 14;
$createdMigrations = [];

// Función para mapear tipos SQL a Blueprint
function mapSqlType($sqlType) {
    $sqlType = strtolower(trim($sqlType));
    
    // Extraer el tipo base sin parámetros
    $baseType = preg_split('/[\(]/', $sqlType)[0];
    
    // Manejar comentarios
    $baseType = preg_split('/[C]OMMENT/', $baseType)[0];
    $baseType = trim($baseType);
    
    $nullable = stripos($sqlType, 'NOT NULL') === false;
    $default = null;
    
    // Extraer DEFAULT
    if (preg_match('/DEFAULT\s+([\'"]?)([^\s\'";,]+)\1/i', $sqlType, $m)) {
        $default = $m[2];
    }
    
    // Mapeo de tipos
    $typeMap = [
        'bigint' => 'bigInteger',
        'int' => 'integer',
        'smallint' => 'smallInteger',
        'tinyint' => 'tinyInteger',
        'varchar' => 'string',
        'char' => 'char',
        'text' => 'text',
        'longtext' => 'longText',
        'decimal' => 'decimal',
        'float' => 'float',
        'double' => 'double',
        'date' => 'date',
        'datetime' => 'dateTime',
        'timestamp' => 'timestamp',
        'json' => 'json',
        'boolean' => 'boolean',
    ];
    
    $blueprintType = $typeMap[$baseType] ?? 'string';
    
    // Extraer length para varchar
    if ($baseType === 'varchar' && preg_match('/varchar\s*\(\s*(\d+)\s*\)/i', $sqlType, $m)) {
        $blueprintType = "string($m[1])";
    } elseif ($baseType === 'char' && preg_match('/char\s*\(\s*(\d+)\s*\)/i', $sqlType, $m)) {
        $blueprintType = "char($m[1])";
    } elseif ($baseType === 'decimal' && preg_match('/decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/i', $sqlType, $m)) {
        $blueprintType = "decimal($m[1],$m[2])";
    }
    
    return ['type' => $blueprintType, 'nullable' => $nullable, 'default' => $default];
}

// Generar migraciones en orden de dependencias
foreach ($tableDependencies as $tableName => $dependencies) {
    
    if (!isset($tables[$tableName])) {
        echo "⚠️  Tabla $tableName no encontrada en structure.json\n";
        continue;
    }
    
    $columns = $tables[$tableName];
    
    $paddedNumber = str_pad($migrationNumber, 6, '0', STR_PAD_LEFT);
    $className = 'Create' . str_replace('_', '', ucwords($tableName, '_')) . 'Table';
    
    $filename = sprintf(
        '%s/2025_10_29_%s_create_%s_table.php',
        $migrationsPath,
        $paddedNumber,
        $tableName
    );
    
    // Generar código de migración
    $code = "<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\n";
    $code .= "use Illuminate\\Database\\Schema\\Blueprint;\n";
    $code .= "use Illuminate\\Support\\Facades\\Schema;\n\n";
    $code .= "return new class extends Migration {\n";
    $code .= "    public function up(): void\n";
    $code .= "    {\n";
    $code .= "        Schema::create('$tableName', function (Blueprint \$table) {\n";
    
    // Variables para almacenar foreign keys
    $foreignKeys = [];
    
    foreach ($columns as $columnName => $columnDef) {
        // Saltar la columna id (ya se añade automáticamente)
        if ($columnName === 'id' || $columnName === 'timestamp') {
            continue;
        }
        
        $columnDef = trim($columnDef);
        
        // Detectar foreign key
        if (preg_match('/REFERENCES\s+`?([^`\s(]+)`?\s*\(/i', $columnDef, $m)) {
            $foreignTable = $m[1];
            // Guardar para después
            $foreignKeys[$columnName] = $foreignTable;
            
            // Determinar tipo
            $type = 'unsignedBigInteger';
            if (stripos($columnDef, 'smallint') !== false) {
                $type = 'unsignedSmallInteger';
            } elseif (stripos($columnDef, 'tinyint') !== false) {
                $type = 'unsignedTinyInteger';
            } elseif (stripos($columnDef, 'int(11)') !== false) {
                $type = 'unsignedInteger';
            }
            
            $nullable = stripos($columnDef, 'NOT NULL') === false;
            $code .= "            \$table->$type('$columnName')";
            if ($nullable) {
                $code .= "->nullable()";
            }
            $code .= ";\n";
            
            continue;
        }
        
        // Tipos normales
        $typeInfo = mapSqlType($columnDef);
        $code .= "            \$table->" . $typeInfo['type'] . "('$columnName')";
        
        if ($typeInfo['nullable']) {
            $code .= "->nullable()";
        }
        
        if ($typeInfo['default'] !== null) {
            if (is_numeric($typeInfo['default']) || in_array(strtolower($typeInfo['default']), ['true', 'false'])) {
                $code .= "->default(" . $typeInfo['default'] . ")";
            } else {
                $code .= "->default('" . $typeInfo['default'] . "')";
            }
        }
        
        $code .= ";\n";
    }
    
    $code .= "            \$table->timestamps();\n";
    
    // Agregar foreign keys
    foreach ($foreignKeys as $columnName => $foreignTable) {
        $code .= "            \$table->foreign('$columnName')->references('id')->on('$foreignTable')->onDelete('cascade')->onUpdate('cascade');\n";
    }
    
    $code .= "        });\n";
    $code .= "    }\n\n";
    $code .= "    public function down(): void\n";
    $code .= "    {\n";
    $code .= "        Schema::dropIfExists('$tableName');\n";
    $code .= "    }\n";
    $code .= "};\n";
    
    file_put_contents($filename, $code);
    echo "✓ Migración $migrationNumber: $tableName\n";
    $createdMigrations[$tableName] = $migrationNumber;
    $migrationNumber++;
}

echo "\n✅ Se generaron " . count($createdMigrations) . " migraciones individuales\n";
echo "📊 Número siguiente: $migrationNumber\n\n";
