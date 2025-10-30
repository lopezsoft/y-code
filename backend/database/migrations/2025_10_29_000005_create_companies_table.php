<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Companies Table
     * 
     * ROOT ENTITY para multi-tenant
     * - Base de la jerarquía
     * - Todas las empresas en 1 tabla
     * - Otros modelos tienen FK company_id
     * 
     * SOLID: Single Responsibility
     *   - Tabla responsable solo de datos de empresa
     */
    
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la empresa');
            
            // FK: País
            $table->unsignedBigInteger('country_id')
                ->comment('FK a countries. País de operación de la empresa');
            
            // Datos de empresa
            $table->string('company_name', 250)
                ->comment('Razón social o nombre comercial de la empresa');
            $table->string('dni', 30)->unique()
                ->comment('Identificación fiscal: RTN (Honduras), RUC (Perú), NIT (Colombia), DNJ, etc.');
            $table->string('address', 250)->nullable()
                ->comment('Dirección fiscal principal de la empresa');
            $table->date('lockdate')->nullable()
                ->comment('Fecha de cierre contable. Bloquea modificaciones anteriores a esta fecha');
            $table->boolean('active')->default(true)
                ->comment('true = empresa activa. false = deshabilitada (no puede operar)');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = empresa activa');
            
            // Índices
            $table->index('country_id');
            $table->index('active');
            $table->fulltext('company_name');
            
            // Foreign Keys
            $table->foreign('country_id')
                ->references('id')
                ->on('countries')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
