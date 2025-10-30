<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('account_types', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del tipo de cuenta contable');
            $table->string('name_type', 255)
                ->comment('Nombre del tipo de cuenta. Ej: Activo, Pasivo, Patrimonio, Ingresos, Gastos, Costos');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('account_types');
    }
};