<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payment_methods', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del método de pago');
            $table->string('code', 255)
                ->comment('Código único del método. Ej: CASH, CARD, TRANSFER, CHECK, CREDIT');
            $table->string('payment_method', 255)
                ->comment('Nombre descriptivo del método de pago. Ej: "Efectivo", "Tarjeta de Crédito", "Transferencia Bancaria"');
            $table->string('active', 255)
                ->comment('Estado: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_methods');
    }
};