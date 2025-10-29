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
            $table->id();
            
            // FK: País
            $table->unsignedBigInteger('country_id');
            
            // Datos de empresa
            $table->string('company_name', 250);
            $table->string('dni', 30)->unique();  // RUC, NIT, DNJ
            $table->string('address', 250)->nullable();
            $table->date('lockdate')->nullable();
            $table->boolean('active')->default(true);
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes();
            
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
