<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fe_tax_level', function (Blueprint $table) {
            $table->id()
                ->comment('ID único. LEGACY COLOMBIA - DIAN. Será eliminada en Sprint 2');
            $table->string('code', 255)
                ->comment('Código de nivel impositivo DIAN. Ej: O-13 (Régimen Común)');
            $table->string('description', 255)
                ->comment('Descripción del nivel impositivo. SOLO VÁLIDO PARA COLOMBIA');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fe_tax_level');
    }
};