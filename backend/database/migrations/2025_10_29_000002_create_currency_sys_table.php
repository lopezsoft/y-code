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
            $table->id()
                ->comment('ID único de la moneda');
            
            // Datos de moneda
            $table->string('currency_code', 3)->unique()
                ->comment('Código ISO 4217 de la moneda. Ej: HNL=Lempira, USD=Dólar, MXN=Peso Mexicano');
            $table->string('currency_name', 100)
                ->comment('Nombre completo de la moneda. Ej: "Lempira Hondureño", "Dólar Estadounidense"');
            $table->char('currency_symbol', 1)
                ->comment('Símbolo de la moneda. Ej: L (Lempira), $ (Dólar), Q (Quetzal)');
            $table->decimal('exchange_rate', 10, 4)->default(1)
                ->comment('Tipo de cambio respecto a moneda base (USD). Ej: 24.7500 HNL = 1 USD. 1.0000 = moneda base');
            $table->boolean('active')->default(true)
                ->comment('true = moneda activa y disponible. false = deshabilitada');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = moneda activa');
            
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
