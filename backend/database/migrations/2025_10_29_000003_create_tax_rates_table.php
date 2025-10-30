<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Tax Rates Table
     * 
     * DETALLE DE TASAS DE IMPUESTOS
     * Configuración específica de tasas por empresa/período
     * 
     * Relación: tributes (maestro) → tax_rates (detalle)
     * Honduras: ISV 15%, ISR retenciones, etc.
     */
    
    public function up(): void
    {
        Schema::create('tax_rates', function (Blueprint $table) {
            $table->id()->comment('ID único de la tasa de impuesto');
            
            // Relación con maestro de tributos
            $table->unsignedBigInteger('tribute_id')->nullable()
                ->comment('FK a tributes. NULL si es tasa legacy sin tributo padre asignado');
            
            // Relación con empresa (opcional para configuración específica)
            $table->unsignedBigInteger('company_id')->nullable()
                ->comment('FK a companies. NULL = tasa global aplicable a todas las empresas');
            
            // Datos de impuesto
            $table->string('tax_name', 100)
                ->comment('Nombre descriptivo de la tasa. Ej: "ISV Estándar 15%"');
            $table->string('tax_code', 20)->unique()
                ->comment('Código único identificador. Ej: "ISV-15", "ISR-RET-10"');
            $table->decimal('rate', 8, 4)
                ->comment('Porcentaje de impuesto. Precisión 8,4 para Honduras. Ej: 15.0000, 12.5000');
            $table->text('description')->nullable()
                ->comment('Descripción detallada de cuándo aplicar esta tasa');
            
            // Tipología y configuración
            $table->enum('tax_type', ['vat', 'income', 'withholding', 'special', 'exempt'])
                ->default('vat')
                ->comment('Tipo: vat=ISV, income=ISR, withholding=retención, special=especial, exempt=exento');
            $table->boolean('is_retention')->default(false)
                ->comment('true = es una retención (ISR/ISV). false = impuesto normal');
            $table->boolean('active')->default(true)
                ->comment('true = tasa activa y disponible. false = deshabilitada');
            
            // Vigencia temporal
            $table->date('effective_from')->nullable()
                ->comment('Fecha desde la cual esta tasa es válida. NULL = sin límite inferior');
            $table->date('effective_to')->nullable()
                ->comment('Fecha hasta la cual esta tasa es válida. NULL = sin límite superior (vigente)');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()->comment('Fecha de eliminación lógica. NULL = registro activo');
            
            // Foreign Keys
            // NOTA: FKs comentadas porque las tablas referenciadas se crean en migraciones posteriores
            // - tributes se crea en 2025_10_29_000014_create_additional_tables
            // - companies se crea en 2025_10_29_000004_create_companies_table (o similar)
            // Las relaciones lógicas existen, pero las constraints se agregarán en migración futura
            // $table->foreign('tribute_id')->references('id')->on('tributes')->onDelete('restrict');
            // $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            
            // Índices
            $table->index('tribute_id');
            $table->index('company_id');
            $table->index('tax_code');
            $table->index('tax_type');
            $table->index('active');
            $table->index(['effective_from', 'effective_to']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tax_rates');
    }
};
