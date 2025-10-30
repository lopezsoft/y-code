<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del pago');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa que registra el pago');
            $table->unsignedBigInteger('sale_id')
                ->comment('FK a sales. Venta a la que se aplica el pago');
            $table->unsignedBigInteger('currency_id')
                ->comment('FK a currency_sys. Moneda del pago');

            $table->string('payment_number', 50)
                ->comment('Número único del recibo de pago. Ej: REC-2024-001');
            $table->date('payment_date')
                ->comment('Fecha de recepción del pago');
            $table->decimal('amount', 15, 2)
                ->comment('Monto del pago recibido');
            $table->string('payment_method', 50)
                ->comment('Método de pago: cash, card, transfer, check, credit');
            $table->string('reference', 100)->nullable()
                ->comment('Referencia de pago: número de cheque, voucher tarjeta, referencia transferencia. NULL = efectivo sin referencia');
            $table->string('status', 50)->default('pending')
                ->comment('Estado del pago: pending, confirmed, rejected, cancelled');
            $table->text('notes')->nullable()
                ->comment('Observaciones adicionales del pago');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = pago activo');

            $table->unique(['company_id', 'payment_number']);
            $table->index('company_id');
            $table->index('sale_id');
            $table->index('payment_date');
            $table->index('status');
            $table->index(['company_id', 'created_at']);

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('sale_id')
                ->references('id')->on('sales')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('currency_id')
                ->references('id')->on('currency_sys')
                ->onUpdate('cascade')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
