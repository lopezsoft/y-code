<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounting_documents', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del tipo de documento contable');
            $table->smallInteger('category_id')
                ->comment('FK a accounting_documents_category. Categoría del documento: Ingresos, Egresos, Diario');
            $table->string('code', 255)
                ->comment('Código único del documento. Ej: FAC, REC, NCR, NDB, COM');
            $table->string('voucher_name', 255)
                ->comment('Nombre del comprobante. Ej: "Factura de Venta", "Recibo de Caja", "Nota de Crédito"');
            $table->string('prefix', 255)->nullable()
                ->comment('Prefijo para numeración automática. Ej: FAC-, REC-, COM-. NULL = sin prefijo');
            $table->tinyInteger('electronic')
                ->comment('1 = es documento electrónico (requiere SAR/DIAN). 0 = documento manual');
            $table->tinyInteger('apply_notes')
                ->comment('1 = permite aplicar notas de crédito/débito. 0 = no aplica');
            $table->tinyInteger('pos')
                ->comment('1 = disponible en punto de venta (POS). 0 = solo backoffice');
            $table->tinyInteger('active')
                ->comment('1 = documento activo y disponible. 0 = deshabilitado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_documents');
    }
};