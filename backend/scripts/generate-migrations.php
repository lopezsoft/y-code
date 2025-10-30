#!/usr/bin/env php
<?php

/**
 * Script para generar migraciones individuales por tabla
 * Analiza las tablas del SQL de referencia y crea una migración por tabla
 */

$basePath = __DIR__;
$migrationsPath = "$basePath/database/migrations";

// Orden de tablas considerando dependencias
$tables = [
    // 1. Tablas base (sin dependencias)
    'branch_offices' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(255)',
        'code' => 'string(50)',
        'address' => 'string(255)',
        'phone' => 'string(20)',
        'email' => 'string(100)',
        'is_active' => 'boolean',
        'soft_deletes' => true,
    ],
    
    // 2. Tablas de identidad
    'identity_documents' => [
        'code' => 'string(10)',
        'name' => 'string(100)',
        'abbreviation' => 'string(20)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    // 3. Tablas de ubicación
    'cities' => [
        'country_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'code' => 'string(20)',
        'is_active' => 'boolean',
    ],
    
    'departments' => [
        'country_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'code' => 'string(20)',
        'is_active' => 'boolean',
    ],
    
    // 4. Tipos
    'type_persons' => [
        'code' => 'string(20)',
        'name' => 'string(100)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'type_organization' => [
        'code' => 'string(20)',
        'name' => 'string(100)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    // 5. Personas
    'persons' => [
        'company_id' => 'unsignedBigInteger',
        'type_person_id' => 'unsignedBigInteger',
        'identity_document_id' => 'unsignedBigInteger',
        'identity_number' => 'string(50)',
        'first_name' => 'string(100)',
        'last_name' => 'string(100)',
        'business_name' => 'string(200)',
        'email' => 'string(100)',
        'phone' => 'string(50)',
        'mobile' => 'string(50)',
        'address' => 'string(255)',
        'city_id' => 'unsignedBigInteger',
        'postal_code' => 'string(20)',
        'notes' => 'text',
        'is_active' => 'boolean',
        'soft_deletes' => true,
    ],
    
    'secondary_persons' => [
        'person_id' => 'unsignedBigInteger',
        'first_name' => 'string(100)',
        'last_name' => 'string(100)',
        'relationship' => 'string(50)',
        'is_active' => 'boolean',
    ],
    
    // 6. Categorización
    'categories' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(150)',
        'description' => 'text',
        'code' => 'string(50)',
        'is_active' => 'boolean',
    ],
    
    'subcategories' => [
        'category_id' => 'unsignedBigInteger',
        'name' => 'string(150)',
        'description' => 'text',
        'code' => 'string(50)',
        'is_active' => 'boolean',
    ],
    
    'product_categories' => [
        'name' => 'string(150)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'product_subcategories' => [
        'product_category_id' => 'unsignedBigInteger',
        'name' => 'string(150)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'product_brands' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'description' => 'text',
        'logo_url' => 'string(255)',
        'is_active' => 'boolean',
    ],
    
    'product_class' => [
        'code' => 'string(20)',
        'name' => 'string(100)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    // 7. Unidades y atributos
    'measurement_units' => [
        'company_id' => 'unsignedBigInteger',
        'code' => 'string(20)',
        'name' => 'string(100)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'standard_measurement_units' => [
        'code' => 'string(20)',
        'name' => 'string(100)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'attributes' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'type' => 'string(50)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'attribute_terms' => [
        'attribute_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'slug' => 'string(100)',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ],
    
    'sizes' => [
        'company_id' => 'unsignedBigInteger',
        'code' => 'string(20)',
        'name' => 'string(100)',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ],
    
    'trademarks' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(150)',
        'registration_number' => 'string(100)',
        'registration_date' => 'date',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    // 8. Impuestos
    'tributes' => [
        'code' => 'string(20)',
        'name' => 'string(100)',
        'percentage' => 'decimal(8,4)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'tax_group' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(150)',
        'description' => 'text',
        'is_active' => 'boolean',
    ],
    
    'tax_accounting_account' => [
        'tax_rate_id' => 'unsignedBigInteger',
        'accounting_account_id' => 'unsignedBigInteger',
        'account_type' => 'string(50)',
    ],
    
    // 9. Productos
    'products' => [
        'company_id' => 'unsignedBigInteger',
        'sku' => 'string(100)',
        'barcode' => 'string(100)',
        'name' => 'string(255)',
        'description' => 'text',
        'category_id' => 'unsignedBigInteger',
        'brand_id' => 'unsignedBigInteger',
        'purchase_price' => 'decimal(16,4)',
        'sale_price' => 'decimal(16,4)',
        'min_price' => 'decimal(16,4)',
        'cost' => 'decimal(16,4)',
        'stock' => 'integer',
        'min_stock' => 'integer',
        'max_stock' => 'integer',
        'measurement_unit_id' => 'unsignedBigInteger',
        'currency_id' => 'unsignedBigInteger',
        'product_class_id' => 'unsignedBigInteger',
        'is_active' => 'boolean',
        'soft_deletes' => true,
    ],
    
    'product_attributes' => [
        'product_id' => 'unsignedBigInteger',
        'attribute_id' => 'unsignedBigInteger',
        'value' => 'string(255)',
    ],
    
    'product_branch' => [
        'product_id' => 'unsignedBigInteger',
        'branch_office_id' => 'unsignedBigInteger',
        'stock' => 'integer',
        'min_stock' => 'integer',
        'max_stock' => 'integer',
        'sale_price' => 'decimal(16,4)',
        'is_active' => 'boolean',
    ],
    
    'product_units_measure' => [
        'product_id' => 'unsignedBigInteger',
        'measurement_unit_id' => 'unsignedBigInteger',
        'quantity' => 'decimal(16,4)',
        'is_active' => 'boolean',
    ],
    
    'product_code_control' => [
        'product_id' => 'unsignedBigInteger',
        'code' => 'string(100)',
        'description' => 'text',
    ],
    
    // 10. Inventario
    'stock_control' => [
        'product_id' => 'unsignedBigInteger',
        'branch_office_id' => 'unsignedBigInteger',
        'initial_stock' => 'decimal(16,4)',
        'inputs' => 'decimal(16,4)',
        'outputs' => 'decimal(16,4)',
        'stock' => 'decimal(16,4)',
        'date_seat' => 'date',
        'observation' => 'text',
    ],
    
    'stock_outings' => [
        'stock_id' => 'unsignedBigInteger',
        'outputs' => 'decimal(16,4)',
        'sale_price' => 'decimal(16,4)',
        'discount' => 'decimal(16,4)',
        'departure_date' => 'date',
        'sale_id' => 'unsignedBigInteger',
        'stock' => 'decimal(16,4)',
    ],
    
    'warehouse' => [
        'company_id' => 'unsignedBigInteger',
        'name' => 'string(100)',
        'code' => 'string(50)',
        'description' => 'text',
        'location' => 'string(255)',
        'is_active' => 'boolean',
    ],
    
    'warehouse_inventory' => [
        'warehouse_id' => 'unsignedBigInteger',
        'product_id' => 'unsignedBigInteger',
        'quantity' => 'decimal(16,4)',
        'last_inventory_date' => 'date',
    ],
];

echo "\n📋 Generando migraciones individuales por tabla...\n\n";

$migrationNumber = 14;
$foreignKeys = [];

foreach ($tables as $tableName => $columns) {
    $paddedNumber = str_pad($migrationNumber, 6, '0', STR_PAD_LEFT);
    $className = str_replace('_', ' ', $tableName);
    $className = ucwords($className);
    $className = str_replace(' ', '', $className);
    
    $filename = sprintf(
        '%s/2025_10_29_%s_create_%s_table.php',
        $migrationsPath,
        $paddedNumber,
        $tableName
    );
    
    // Generar código de migración
    $code = <<<PHP
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('$tableName', function (Blueprint \$table) {
            \$table->id();

PHP;
    
    foreach ($columns as $columnName => $columnType) {
        if ($columnType === 'soft_deletes') {
            $code .= "            \$table->softDeletes();\n";
        } else {
            $code .= "            \$table->$columnType->nullable();\n";
        }
    }
    
    $code .= "            \$table->timestamps();\n";
    $code .= "        });\n";
    $code .= "    }\n\n";
    $code .= "    public function down(): void\n";
    $code .= "    {\n";
    $code .= "        Schema::dropIfExists('$tableName');\n";
    $code .= "    }\n";
    $code .= "};\n";
    
    file_put_contents($filename, $code);
    echo "✓ Migración $migrationNumber: $tableName\n";
    
    $migrationNumber++;
}

echo "\n✅ Se generaron " . count($tables) . " migraciones individuales\n\n";
