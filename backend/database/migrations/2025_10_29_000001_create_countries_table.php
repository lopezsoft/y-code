<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Countries Table
     * 
     * DATOS GLOBALES - No tiene company_id
     * Compartido por todas las empresas
     * 
     * SOLID: Single Responsibility
     *   - Migración responsable solo de crear tabla countries
     */
    
    public function up(): void
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            
            // Datos de país
            $table->string('country_code', 2)->unique();  // ej: 'HN'
            $table->string('country_name', 100);
            $table->string('timezone', 50)->nullable();
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes();
            
            // Índices
            $table->index('country_code');
            $table->fulltext('country_name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
