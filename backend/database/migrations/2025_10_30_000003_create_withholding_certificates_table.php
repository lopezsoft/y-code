<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * ✅ MIGRATION: Create Withholding Certificates Table
     * 
     * CERTIFICADOS DE RETENCIÓN
     * Comprobantes emitidos a proveedores/clientes por retenciones aplicadas
     * 
     * Honduras SAR:
     * - Obligatorio emitir certificado por cada retención
     * - Debe contener: monto base, monto retenido, período, datos del retenido
     * - El retenido usa estos certificados como crédito fiscal en su declaración ISR
     */
    
    public function up(): void
    {
        Schema::create('withholding_certificates', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del certificado de retención');
            
            // Empresa que emite el certificado
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa que emite el certificado de retención');
            
            // Número de certificado (correlativo por empresa)
            $table->string('certificate_number', 50)
                ->comment('Número de certificado único. Ej: CERT-RET-2024-001, generado correlativo por empresa');
            
            // Tercero que recibe el certificado
            $table->unsignedBigInteger('party_id')
                ->comment('ID del tercero (proveedor/cliente/empleado) que recibe el certificado como comprobante de retención');
            $table->enum('party_type', ['supplier', 'customer', 'employee'])->default('supplier')
                ->comment('Tipo de tercero: supplier=proveedor, customer=cliente, employee=empleado');
            
            // Período fiscal cubierto
            $table->year('period_year')
                ->comment('Año fiscal cubierto por el certificado. Ej: 2024');
            $table->tinyInteger('period_month')->nullable()
                ->comment('Mes fiscal cubierto (1-12). NULL si es certificado anual. Ej: 10 = Octubre');
            
            // Totales consolidados
            $table->decimal('total_base', 18, 4)
                ->comment('Suma total de bases imponibles de todas las retenciones del período');
            $table->decimal('total_withheld', 18, 4)
                ->comment('Suma total de montos retenidos del período. Este es el crédito fiscal del retenido');
            
            // Emisión
            $table->timestamp('issued_at')->nullable()
                ->comment('Fecha y hora de emisión del certificado. NULL si status=draft');
            $table->unsignedBigInteger('issued_by')->nullable()
                ->comment('FK a users. Usuario que emitió el certificado');
            
            // Archivos generados
            $table->string('pdf_path')->nullable()
                ->comment('Ruta relativa del archivo PDF generado. Ej: storage/certificates/2024/cert-001.pdf');
            $table->string('xml_path')->nullable()
                ->comment('Ruta relativa del archivo XML generado (si aplica). NULL si no se requiere XML');
            
            // Estado
            $table->enum('status', ['draft', 'issued', 'sent', 'cancelled'])->default('draft')
                ->comment('Estado: draft=borrador, issued=emitido, sent=enviado al retenido, cancelled=anulado');
            $table->timestamp('sent_at')->nullable()
                ->comment('Fecha y hora de envío al retenido (email/físico). NULL si no se ha enviado');
            $table->timestamp('cancelled_at')->nullable()
                ->comment('Fecha y hora de anulación. NULL si status != cancelled');
            $table->text('cancellation_reason')->nullable()
                ->comment('Motivo de anulación del certificado. NULL si status != cancelled');
            
            // Auditoría
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = registro activo');
            
            // Foreign Keys
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('issued_by')->references('id')->on('users')->onDelete('set null');
            
            // Índices
            $table->unique(['company_id', 'certificate_number'], 'unique_company_cert_number');
            $table->index(['company_id', 'period_year', 'period_month'], 'idx_company_period');
            $table->index(['party_id', 'party_type'], 'idx_party');
            $table->index('status');
            $table->index('issued_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('withholding_certificates');
    }
};
