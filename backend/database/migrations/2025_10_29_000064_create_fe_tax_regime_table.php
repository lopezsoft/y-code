<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fe_tax_regime', function (Blueprint $table) {
            $table->id()
                ->comment('ID único. LEGACY COLOMBIA - DIAN. Será eliminada en Sprint 2');
            $table->string('code', 255)
                ->comment('Código de régimen tributario DIAN. Ej: 48 (Responsable IVA), 49 (No responsable IVA)');
            $table->string('description', 255)
                ->comment('Descripción del régimen tributario. SOLO VÁLIDO PARA COLOMBIA');
            $table->tinyInteger('active')
                ->comment('1 = activo. 0 = inactivo');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fe_tax_regime');
    }
};