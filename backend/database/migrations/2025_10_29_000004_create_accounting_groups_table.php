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
            $table->id();
            
            // Datos del grupo
            $table->string('group_name', 150);
            $table->string('group_code', 10)->unique();
            $table->text('description')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('active')->default(true);
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes();
            
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
