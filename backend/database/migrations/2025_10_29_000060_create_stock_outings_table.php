<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_outings', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la salida de inventario (detalle de venta desde kardex)');
            $table->bigInteger('stock_id')
                ->comment('FK a stock_control. Registro de kardex origen de la salida');
            $table->bigInteger('sale_detail_id')
                ->comment('FK a sales_items. Detalle de venta que genera la salida');
            $table->string('notes', 255)->nullable()
                ->comment('Observaciones de la salida. Ej: "Venta factura #123". NULL = sin notas');
            $table->decimal('outputs', 16,2)->nullable()
                ->comment('Cantidad salida del inventario. Ej: 10.00 unidades');
            $table->decimal('sale_price', 16,2)->nullable()
                ->comment('Precio de venta unitario aplicado');
            $table->decimal('discount', 16,2)->nullable()
                ->comment('Descuento por unidad. NULL = sin descuento');
            $table->decimal('profits', 16,2)->nullable()
                ->comment('Utilidad calculada = (sale_price - unit_cost) * outputs');
            $table->decimal('stock', 16,2)->nullable()
                ->comment('Stock restante después de la salida (saldo kardex)');
            $table->date('departure_date')->nullable()
                ->comment('Fecha de la salida del inventario');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_outings');
    }
};