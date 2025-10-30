<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Withholdings Table
     * 
     * REGISTRO DE RETENCIONES APLICADAS
     * Retenciones ISR/ISV aplicadas en facturas de compra/venta
     * 
     * Flujo Honduras:
     * 1. Se genera factura de compra con retención ISR 10%
     * 2. Se registra withholding vinculado a invoice/expense
     * 3. Se acumula por período fiscal (mes)
     * 4. Se genera certificado de retención
     * 5. Se declara mensualmente ante SAR
     */
    
    public function up(): void
    {
        Schema::create('withholdings', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del registro de retención');
            
            // Empresa que retiene
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa que aplica y debe pagar la retención al SAR');
            
            // Tercero al que se le retiene
            $table->unsignedBigInteger('party_id')
                ->comment('ID del tercero (proveedor/cliente/empleado) al que se le aplicó la retención');
            $table->enum('party_type', ['supplier', 'customer', 'employee'])->default('supplier')
                ->comment('Tipo de tercero: supplier=proveedor, customer=cliente, employee=empleado');
            
            // Documento origen (factura o gasto)
            $table->unsignedBigInteger('invoice_id')->nullable()
                ->comment('FK a invoices si la retención proviene de una factura de venta. NULL si es compra');
            $table->unsignedBigInteger('expense_id')->nullable()
                ->comment('FK a expenses/purchases si la retención proviene de una compra. NULL si es venta');
            
            // Tipo de retención
            $table->unsignedBigInteger('withholding_type_id')
                ->comment('FK a withholding_types. Define el porcentaje y reglas de la retención');
            
            // Montos
            $table->decimal('base_amount', 18, 4)
                ->comment('Monto base imponible sobre el cual se calculó la retención. Ej: 1000.00');
            $table->decimal('withheld_amount', 18, 4)
                ->comment('Monto retenido calculado. Ej: 100.00 si base=1000 y rate=10%');
            
            // Período fiscal
            $table->year('period_year')
                ->comment('Año fiscal de la retención. Ej: 2024');
            $table->tinyInteger('period_month')
                ->comment('Mes fiscal de la retención (1-12). Ej: 10 = Octubre');
            
            // Certificado
            $table->string('certificate_number', 50)->nullable()
                ->comment('Número del certificado de retención emitido. NULL si aún no se emitió');
            $table->timestamp('certificate_issued_at')->nullable()
                ->comment('Fecha y hora de emisión del certificado. NULL si aún no se emitió');
            
            // Contabilización
            $table->boolean('accounted')->default(false)
                ->comment('true = ya fue contabilizado en asiento contable. false = pendiente contabilizar');
            $table->unsignedBigInteger('accounting_entry_id')->nullable()
                ->comment('FK a asiento contable. NULL si accounted=false');
            
            // Declaración SAR
            $table->boolean('declared')->default(false)
                ->comment('true = ya fue declarado ante SAR. false = pendiente declarar');
            $table->timestamp('declared_at')->nullable()
                ->comment('Fecha y hora de declaración ante SAR. NULL si declared=false');
            $table->string('declaration_reference', 100)->nullable()
                ->comment('Número de referencia de la declaración SAR. NULL si declared=false');
            
            // Auditoría
            $table->unsignedBigInteger('created_by')->nullable()
                ->comment('FK a users. Usuario que creó el registro de retención');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = registro activo');
            
            // Foreign Keys
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('withholding_type_id')->references('id')->on('withholding_types')->onDelete('restrict');
            $table->foreign('invoice_id')->references('id')->on('invoices')->onDelete('set null');
            // $table->foreign('expense_id')->references('id')->on('expenses')->onDelete('set null'); // Descomentar cuando exista tabla expenses
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            
            // Índices para consultas comunes
            $table->index(['company_id', 'period_year', 'period_month'], 'idx_company_period');
            $table->index(['party_id', 'party_type'], 'idx_party');
            $table->index('accounted');
            $table->index('declared');
            $table->index('certificate_number');
            
            // Constraint: debe tener invoice_id O expense_id
            $table->index(['invoice_id', 'expense_id'], 'idx_document_source');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('withholdings');
    }
};
