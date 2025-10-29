<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Currency System Table
     * 
     * DATOS GLOBALES - No tiene company_id
     * Monedas disponibles para todas las empresas
     * 
     * Ejemplo: USD, HNL (Lempira Honduras), MXN, etc
     */
    
    public function up(): void
    {
        Schema::create('currency_sys', function (Blueprint $table) {
            $table->id();
            
            // Datos de moneda
            $table->string('currency_code', 3)->unique();  // ej: 'HNL'
            $table->string('currency_name', 100);
            $table->char('currency_symbol', 1);
            $table->decimal('exchange_rate', 10, 4)->default(1);
            $table->boolean('active')->default(true);
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes();
            
            // Índices
            $table->index('currency_code');
            $table->index('active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('currency_sys');
    }
};
