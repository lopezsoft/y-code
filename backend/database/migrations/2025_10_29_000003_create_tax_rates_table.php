<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Tax Rates Table
     * 
     * DATOS GLOBALES - No tiene company_id
     * Rangos de impuestos disponibles
     * 
     * Honduras: Impuesto sobre Ventas (ISV)
     */
    
    public function up(): void
    {
        Schema::create('tax_rates', function (Blueprint $table) {
            $table->id();
            
            // Datos de impuesto
            $table->string('tax_name', 100);
            $table->string('tax_code', 20)->unique();  // ej: 'ISV', 'IR'
            $table->decimal('rate', 5, 2);  // ej: 15.00
            $table->text('description')->nullable();
            $table->boolean('active')->default(true);
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes();
            
            // Índices
            $table->index('tax_code');
            $table->index('active');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tax_rates');
    }
};
