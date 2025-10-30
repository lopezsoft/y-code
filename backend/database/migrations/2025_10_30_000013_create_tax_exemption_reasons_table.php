<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Crea la tabla tax_exemption_reasons para gestionar las exenciones fiscales
     * según regulaciones SAR (Servicio de Administración de Rentas) de Honduras.
     * 
     * Sprint 2 - Catálogo de exenciones tributarias Honduras
     * 
     * CONTEXT:
     * - Honduras tiene exenciones específicas diferentes a Colombia (DIAN)
     * - SAR define códigos oficiales para cada tipo de exención
     * - Exenciones pueden aplicar a productos, clientes o transacciones
     * 
     * USE CASES:
     * - Productos: Alimentos básicos, medicamentos, servicios educativos
     * - Clientes: Entidades gubernamentales, ONGs reconocidas
     * - Transacciones: Exportaciones, operaciones especiales
     * 
     * DESIGN DECISIONS:
     * - applies_to: ENUM para control estricto de aplicabilidad
     * - sar_code: Código oficial SAR (nullable para futuros códigos internos)
     * - code: Código interno del sistema (único, obligatorio)
     */
    public function up(): void
    {
        Schema::create('tax_exemption_reasons', function (Blueprint $table) {
            $table->id();
            
            // Códigos de identificación
            $table->string('code', 20)
                ->unique()
                ->comment('Código interno único. Ej: EXPORT, BASIC_FOOD, MEDICINE');
            
            $table->string('sar_code', 50)
                ->nullable()
                ->index()
                ->comment('Código oficial SAR Honduras (si aplica)');
            
            // Información descriptiva
            $table->string('name', 150)
                ->comment('Nombre de la exención tributaria');
            
            $table->text('description')
                ->nullable()
                ->comment('Descripción detallada y fundamento legal');
            
            // Clasificación
            $table->enum('applies_to', ['product', 'customer', 'transaction'])
                ->index()
                ->comment('Ámbito de aplicación de la exención');
            
            // Control
            $table->boolean('is_active')
                ->default(1)
                ->index()
                ->comment('Estado de vigencia de la exención');
            
            $table->timestamps();
            
            // Índices compuestos para consultas frecuentes
            $table->index(['applies_to', 'is_active'], 'idx_exemptions_scope_active');
        });
    }

    /**
     * Reverse the migrations.
     * 
     * Elimina la tabla de exenciones tributarias.
     */
    public function down(): void
    {
        Schema::dropIfExists('tax_exemption_reasons');
    }
};
