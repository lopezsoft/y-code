<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Accounting Groups Table
     * 
     * DATOS GLOBALES - No tiene company_id
     * Grupos de cuentas del plan contable
     * 
     * Ejemplo:
     * - Activos Circulantes
     * - Pasivos Circulantes
     * - Patrimonio
     * - Ingresos
     * - Gastos
     */
    
    public function up(): void
    {
        Schema::create('accounting_groups', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del grupo contable');
            
            // Datos del grupo
            $table->string('group_name', 150)
                ->comment('Nombre del grupo contable. Ej: Activos Corrientes, Pasivos No Corrientes, Patrimonio');
            $table->string('group_code', 10)->unique()
                ->comment('Código único del grupo. Ej: AC, PNC, PAT, ING, GAS');
            $table->text('description')->nullable()
                ->comment('Descripción detallada del grupo y qué tipos de cuentas contiene');
            $table->integer('order')->default(0)
                ->comment('Orden de presentación en estados financieros. Menor número = aparece primero');
            $table->boolean('active')->default(true)
                ->comment('true = grupo activo y disponible. false = deshabilitado');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = grupo activo');
            
            // Índices
            $table->index('group_code');
            $table->index('order');
            $table->index('active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_groups');
    }
};
