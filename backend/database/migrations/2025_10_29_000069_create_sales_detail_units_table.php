<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_detail_units', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación detalle de venta - unidad de medida');
            $table->bigInteger('sale_detail_id')
                ->comment('FK a sales_items. Ítem de venta');
            $table->bigInteger('product_unit_id')
                ->comment('FK a product_units_measure. Unidad de medida usada en la venta (Caja, Docena, Unidad)');
            $table->decimal('base_factor', 16,2)->nullable()
                ->comment('Factor de conversión base del producto. Ej: 1 caja = 12 unidades → 12.00');
            $table->decimal('factor', 16,2)->nullable()
                ->comment('Factor aplicado en esta venta. Ej: si se vende 1 caja → factor=12.00');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_detail_units');
    }
};