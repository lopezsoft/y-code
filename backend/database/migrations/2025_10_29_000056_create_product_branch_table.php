<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_branch', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación producto-sucursal (stock por sucursal)');
            $table->bigInteger('product_id')
                ->comment('FK a products. Producto del inventario');
            $table->smallInteger('point_of_sale_id')
                ->comment('FK a points_of_sale. Punto de venta/sucursal');
            $table->decimal('stock', 16,2)->nullable()
                ->comment('Stock en unidades enteras disponible en la sucursal. Ej: 50.00 unidades');
            $table->decimal('stock_fraction', 16,2)->nullable()
                ->comment('Stock fraccionado disponible. Ej: 0.50 (media unidad). NULL = sin fracciones');
            $table->tinyInteger('active')
                ->comment('1 = producto activo en esta sucursal. 0 = no disponible en esta sucursal');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_branch');
    }
};