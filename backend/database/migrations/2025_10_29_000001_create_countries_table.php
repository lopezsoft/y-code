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
            $table->id()
                ->comment('ID único del país');
            
            // Datos de país
            $table->string('country_code', 2)->unique()
                ->comment('Código ISO 3166-1 alpha-2 del país. Ej: HN=Honduras, CR=Costa Rica, MX=México');
            $table->string('country_name', 100)
                ->comment('Nombre completo del país. Ej: "Honduras", "Costa Rica", "México"');
            $table->string('timezone', 50)->nullable()
                ->comment('Zona horaria del país. Ej: America/Tegucigalpa, America/Mexico_City. NULL = sin zona específica');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = país activo');
            
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
