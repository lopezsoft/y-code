<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_units_measure', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la unidad de medida alternativa del producto');
            $table->bigInteger('product_id')
                ->comment('FK a products. Producto que tiene múltiples unidades de medida');
            $table->bigInteger('unit_id')
                ->comment('FK a units_of_measure. Unidad de medida alternativa. Ej: Caja, Docena, Paquete');
            $table->string('unit_name', 255)->nullable()
                ->comment('Nombre de la unidad para este producto. Ej: "Caja x12", "Paquete x50". NULL = usar nombre de unit_id');
            $table->decimal('purchase_cost', 16,2)->nullable()
                ->comment('Costo de compra en esta unidad. Ej: si caja=12 unidades, cost=120.00');
            $table->decimal('sale_price', 16,2)->nullable()
                ->comment('Precio de venta en esta unidad. Ej: precio caja vs precio unitario');
            $table->string('state', 255)
                ->comment('Estado de la unidad: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_units_measure');
    }
};