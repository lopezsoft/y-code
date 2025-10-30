<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('means_payment', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del medio de pago');
            $table->string('payment_method', 255)
                ->comment('Descripción del medio de pago. Ej: "Visa", "Mastercard", "Banco Nacional", "Davivienda"');
            $table->string('code', 255)
                ->comment('Código del medio de pago según SAR/DIAN. Ej: VISA-10, MC-20, BN-01');
            $table->string('active', 255)
                ->comment('Estado: active, inactive');
            $table->string('state', 255)
                ->comment('Estado adicional del medio: available, suspended, blocked');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('means_payment');
    }
};