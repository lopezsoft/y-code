<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Fiscal Periods Table
     * 
     * PERÍODOS FISCALES - Honduras
     * Control de períodos contables y fiscales para declaraciones SAR
     * 
     * Casos de uso:
     * 1. Declaración mensual ISV (cada mes)
     * 2. Declaración mensual retenciones ISR
     * 3. Cierre contable mensual/trimestral/anual
     * 4. Bloqueo de transacciones en períodos cerrados
     * 5. Reportes fiscales históricos
     */
    
    public function up(): void
    {
        Schema::create('fiscal_periods', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del período fiscal');
            
            // Empresa
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Cada empresa tiene sus propios períodos fiscales');
            
            // Tipo de período
            $table->enum('period_type', ['monthly', 'quarterly', 'annual'])->default('monthly')
                ->comment('Tipo de período: monthly=mensual (declaraciones SAR), quarterly=trimestral, annual=anual');
            
            // Identificación temporal
            $table->year('year')
                ->comment('Año del período fiscal. Ej: 2024');
            $table->tinyInteger('month')->nullable()
                ->comment('Mes del período (1-12). NULL si period_type=quarterly o annual. Ej: 10 = Octubre');
            $table->tinyInteger('quarter')->nullable()
                ->comment('Trimestre del período (1-4). NULL si period_type=monthly o annual. Ej: 4 = Oct-Dic');
            
            // Fechas del período
            $table->date('start_date')
                ->comment('Fecha de inicio del período fiscal. Ej: 2024-10-01');
            $table->date('end_date')
                ->comment('Fecha de fin del período fiscal. Ej: 2024-10-31');
            
            // Estado
            $table->enum('status', ['open', 'closed', 'locked'])->default('open')
                ->comment('Estado: open=activo (permite transacciones), closed=cerrado (solo consulta), locked=bloqueado permanente (no modificable)');
            
            // Control de cierre
            $table->timestamp('closed_at')->nullable()
                ->comment('Fecha y hora de cierre del período. NULL si status=open');
            $table->unsignedBigInteger('closed_by')->nullable()
                ->comment('FK a users. Usuario que cerró el período. NULL si status=open');
            
            // Declaraciones SAR
            $table->boolean('isv_declared')->default(false)
                ->comment('true = Declaración mensual de ISV completada y enviada al SAR. false = pendiente');
            $table->timestamp('isv_declared_at')->nullable()
                ->comment('Fecha y hora de declaración de ISV ante SAR. NULL si isv_declared=false');
            $table->string('isv_declaration_ref', 100)->nullable()
                ->comment('Número de referencia de la declaración ISV en SAR. NULL si isv_declared=false');
            
            $table->boolean('isr_declared')->default(false)
                ->comment('true = Declaración mensual de retenciones ISR completada. false = pendiente');
            $table->timestamp('isr_declared_at')->nullable()
                ->comment('Fecha y hora de declaración de retenciones ISR. NULL si isr_declared=false');
            $table->string('isr_declaration_ref', 100)->nullable()
                ->comment('Número de referencia de la declaración ISR en SAR. NULL si isr_declared=false');
            
            // Totales calculados (cache)
            $table->decimal('total_sales', 18, 4)->default(0)
                ->comment('Total de ventas del período (cache). Ej: 100000.00');
            $table->decimal('total_purchases', 18, 4)->default(0)
                ->comment('Total de compras del período (cache). Ej: 50000.00');
            $table->decimal('total_isv_collected', 18, 4)->default(0)
                ->comment('Total ISV cobrado en ventas (crédito fiscal). Ej: 15000.00');
            $table->decimal('total_isv_paid', 18, 4)->default(0)
                ->comment('Total ISV pagado en compras (débito fiscal). Ej: 7500.00');
            $table->decimal('total_withholdings', 18, 4)->default(0)
                ->comment('Total retenciones ISR aplicadas en el período. Ej: 3000.00');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = registro activo');
            
            // Foreign Keys
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('closed_by')->references('id')->on('users')->onDelete('set null');
            
            // Índices
            $table->unique(['company_id', 'period_type', 'year', 'month', 'quarter'], 'unique_company_period');
            $table->index(['company_id', 'status'], 'idx_company_status');
            $table->index(['year', 'month'], 'idx_year_month');
            $table->index('isv_declared');
            $table->index('isr_declared');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fiscal_periods');
    }
};
