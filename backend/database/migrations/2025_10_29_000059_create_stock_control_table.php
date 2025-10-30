<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stock_control', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del movimiento de inventario (kardex)');
            $table->bigInteger('product_id')
                ->comment('FK a products. Producto del movimiento');
            $table->bigInteger('invoice_id')->nullable()
                ->comment('FK a invoices. Factura de compra origen. NULL = movimiento sin factura (ajuste, venta)');
            $table->smallInteger('point_of_sale_id')
                ->comment('FK a points_of_sale. Punto de venta que registra el movimiento');
            $table->smallInteger('tax_sale_id')
                ->comment('FK a tax_rates. Impuesto para venta de este lote');
            $table->smallInteger('tax_bill_id')
                ->comment('FK a tax_rates. Impuesto de compra de este lote');
            $table->string('batch', 255)->nullable()
                ->comment('Número de lote. Ej: LOTE-2024-A01. NULL = producto sin lote');
            $table->date('fabrication_date')->nullable()
                ->comment('Fecha de fabricación del lote. NULL = no aplica');
            $table->date('expiration_date')->nullable()
                ->comment('Fecha de vencimiento del lote. NULL = no perecedero');
            $table->date('entry_date')->nullable()
                ->comment('Fecha de ingreso al inventario. NULL = salida o ajuste');
            $table->string('description', 255)->nullable()
                ->comment('Descripción del movimiento. Ej: "Compra factura #123", "Venta #456", "Ajuste inventario"');
            $table->decimal('unit_cost', 16,2)->nullable()
                ->comment('Costo unitario del movimiento de entrada');
            $table->decimal('entries', 16,2)->nullable()
                ->comment('Cantidad de entrada (positivo). NULL = movimiento de salida');
            $table->decimal('freight', 16,2)->nullable()
                ->comment('Flete prorrateado por unidad. NULL = sin flete');
            $table->decimal('outputs', 16,2)->nullable()
                ->comment('Cantidad de salida (positivo). NULL = movimiento de entrada');
            $table->decimal('stock', 16,2)->nullable()
                ->comment('Stock acumulado después del movimiento (saldo kardex)');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_control');
    }
};