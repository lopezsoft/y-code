<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_detail_taxes', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del impuesto aplicado en detalle de venta');
            $table->bigInteger('sale_detail_id')
                ->comment('FK a sales_items. Ítem de venta al que se aplica el impuesto');
            $table->smallInteger('tax_rate_id')
                ->comment('FK a tax_rates. Tasa de impuesto aplicada (ISV 15%, Exento, etc.)');
            $table->decimal('vat', 16,2)->nullable()
                ->comment('LEGACY: Porcentaje de impuesto. Migrar a usar tax_rate_id. NULL = usar tax_rate_id');
            $table->decimal('tax_value', 16,2)->nullable()
                ->comment('Monto calculado del impuesto = (line_total * tax_rate). Ej: 100 * 15% = 15.00');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_detail_taxes');
    }
};