<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_items', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del ítem de venta');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa de la venta');
            $table->unsignedBigInteger('sale_id')
                ->comment('FK a sales. Venta a la que pertenece este ítem');

            $table->string('description', 200)
                ->comment('Descripción del producto o servicio vendido');
            $table->decimal('quantity', 15, 2)
                ->comment('Cantidad vendida. Ej: 5.00 unidades, 2.50 horas');
            $table->decimal('unit_price', 15, 2)
                ->comment('Precio unitario sin impuesto');
            $table->decimal('line_total', 15, 2)
                ->comment('Total de línea = quantity * unit_price (sin impuesto)');
            $table->string('tax_code', 20)->nullable()
                ->comment('Código de impuesto aplicado. Ej: ISV-15, ISV-EXENTO. NULL = sin impuesto');
            $table->decimal('tax_rate', 5, 2)->default(0)
                ->comment('Tasa de impuesto aplicada. Ej: 15.00 para ISV Honduras. LEGACY (migrar a DECIMAL 8,4)');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = ítem activo');

            $table->index('company_id');
            $table->index('sale_id');

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('sale_id')
                ->references('id')->on('sales')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_items');
    }
};
