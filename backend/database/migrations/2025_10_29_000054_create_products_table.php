<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del producto');
            $table->smallInteger('class_id')
                ->comment('FK a product_classes. Clasificación del producto: Bien, Servicio, Materia Prima');
            $table->smallInteger('unit_id')
                ->comment('FK a units_of_measure. Unidad de medida: Unidad, Kilo, Litro, Metro, Hora');
            $table->smallInteger('tax_sales_id')
                ->comment('FK a tax_rates. Impuesto para ventas (ISV 15%, Exento, etc.)');
            $table->smallInteger('tax_bill_id')
                ->comment('FK a tax_rates. Impuesto para compras');
            $table->string('internal_code', 255)->nullable()
                ->comment('Código interno de la empresa. Ej: PROD-001. NULL = sin código interno');
            $table->string('sku', 255)->nullable()
                ->comment('Stock Keeping Unit. Código único del producto. NULL = no asignado');
            $table->string('qr_code', 255)->nullable()
                ->comment('Código QR generado para el producto. NULL = sin QR');
            $table->string('barcode', 255)->nullable()
                ->comment('Código de barras (EAN-13, UPC, etc.). NULL = sin código de barras');
            $table->string('product_name', 255)
                ->comment('Nombre comercial del producto');
            $table->string('description_sales', 255)->nullable()
                ->comment('Descripción para ventas (imprime en factura). NULL = usar product_name');
            $table->string('shopping_description', 255)->nullable()
                ->comment('Descripción para compras (orden de compra). NULL = usar product_name');
            $table->string('image', 255)->nullable()
                ->comment('Ruta de la imagen del producto. NULL = sin imagen');
            $table->smallInteger('stock_min')
                ->comment('Stock mínimo de seguridad. Alerta cuando stock < stock_min');
            $table->smallInteger('stock_max')
                ->comment('Stock máximo recomendado. Alerta cuando stock > stock_max');
            $table->text('notes')->nullable()
                ->comment('Notas adicionales del producto');
            $table->tinyInteger('perishable')
                ->comment('1 = producto perecedero (requiere lote y vencimiento). 0 = no perecedero');
            $table->tinyInteger('recipe')
                ->comment('1 = producto con receta/fórmula (ensamblado). 0 = producto simple');
            $table->string('location', 255)->nullable()
                ->comment('Ubicación física en bodega. Ej: Pasillo-3-Estante-B. NULL = sin ubicación');
            $table->decimal('sale_price', 16,2)->nullable()
                ->comment('Precio de venta sugerido sin impuesto');
            $table->decimal('purchase_cost', 16,2)->nullable()
                ->comment('Último costo de compra unitario');
            $table->decimal('average_cost', 16,2)->nullable()
                ->comment('Costo promedio ponderado (calculado automáticamente)');
            $table->decimal('percentage_gain', 16,2)->nullable()
                ->comment('Porcentaje de ganancia sobre costo. Ej: 30.00 = 30%');
            $table->decimal('base_factor', 16,2)->nullable()
                ->comment('Factor de conversión de unidad base. Ej: 1 caja = 12 unidades');
            $table->decimal('initial_stock', 16,2)->nullable()
                ->comment('Stock inicial al crear el producto (inventario inicial)');
            $table->decimal('stock', 16,2)->nullable()
                ->comment('Stock actual consolidado (calculado desde stock_control)');
            $table->tinyInteger('vat_included')
                ->comment('1 = precios incluyen impuesto. 0 = impuesto se suma aparte');
            $table->tinyInteger('selling_out_of_inventory')
                ->comment('1 = permitir vender con stock negativo. 0 = bloquear venta si stock=0');
            $table->string('state', 255)
                ->comment('Estado del producto: active, inactive, discontinued');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};