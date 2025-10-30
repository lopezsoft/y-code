<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fe_party_tax', function (Blueprint $table) {
            $table->id()
                ->comment('ID único. LEGACY COLOMBIA - DIAN. Será eliminada en Sprint 2');
            $table->string('code', 255)
                ->comment('Código de responsabilidad fiscal DIAN. Ej: R-99-PN (Persona Natural)');
            $table->string('description', 255)
                ->comment('Descripción de la responsabilidad fiscal. SOLO VÁLIDO PARA COLOMBIA');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fe_party_tax');
    }
};