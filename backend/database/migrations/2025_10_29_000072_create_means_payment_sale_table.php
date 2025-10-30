<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('means_payment_sale', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación medio de pago - venta (tabla pivot)');
            $table->bigInteger('sale_id')
                ->comment('FK a sales. Venta realizada');
            $table->smallInteger('means_payment_id')
                ->comment('FK a means_payment. Medio de pago usado (Efectivo, Visa, Transferencia, etc.)');
            $table->decimal('value_paid', 16,2)->nullable()
                ->comment('Monto pagado con este medio. Ej: si paga $50 efectivo + $50 tarjeta');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('means_payment_sale');
    }
};