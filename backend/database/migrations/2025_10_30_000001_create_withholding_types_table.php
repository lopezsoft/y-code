<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Withholding Types Table
     * 
     * MAESTRO DE TIPOS DE RETENCIÓN - Honduras
     * Catálogo de retenciones ISR, ISV según SAR
     * 
     * Ejemplos Honduras:
     * - ISR 10% sobre honorarios profesionales
     * - ISR 12.5% sobre arrendamientos
     * - ISR 15% sobre servicios generales
     * - ISR 25% sobre pagos a no residentes
     * - ISV 100% retención cuando comprador es agente retenedor Estado
     */
    
    public function up(): void
    {
        Schema::create('withholding_types', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del tipo de retención');
            
            // Identificación
            $table->string('code', 50)->unique()
                ->comment('Código único. Ej: RET-ISR-10, RET-ISV-100, RET-ISR-SALARIO');
            $table->string('name', 150)
                ->comment('Nombre descriptivo del tipo de retención. Ej: "Retención ISR 10% - Honorarios"');
            $table->text('description')->nullable()
                ->comment('Descripción detallada: a quién aplica, base legal SAR, ejemplos de uso');
            
            // Configuración de tasa
            $table->decimal('rate', 8, 4)
                ->comment('Porcentaje de retención (si is_percentage=true) o monto fijo. Ej: 10.0000, 12.5000');
            $table->boolean('is_percentage')->default(true)
                ->comment('true = rate es porcentaje (%). false = rate es monto fijo en moneda local');
            
            // Integración SAR
            $table->string('sar_code', 50)->nullable()
                ->comment('Código oficial SAR Honduras para declaraciones. Ej: ISR-HON-10, ISV-RET-100');
            
            // Reglas de aplicación
            $table->decimal('min_threshold', 18, 4)->nullable()
                ->comment('Monto mínimo base para aplicar retención. NULL = sin mínimo. Ej: 1000.00');
            $table->enum('applies_to', ['services', 'rent', 'salary', 'goods', 'all'])->default('all')
                ->comment('A qué tipo de transacción aplica: services=servicios, rent=arrendamientos, salary=salarios, goods=bienes, all=todos');
            
            // Control
            $table->boolean('requires_certificate')->default(true)
                ->comment('true = emitir certificado automático al aplicar retención. false = no requiere certificado');
            $table->boolean('is_active')->default(true)
                ->comment('true = tipo de retención activo y disponible. false = deshabilitado');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = registro activo');
            
            // Índices
            $table->index('code');
            $table->index('is_active');
            $table->index('applies_to');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('withholding_types');
    }
};
