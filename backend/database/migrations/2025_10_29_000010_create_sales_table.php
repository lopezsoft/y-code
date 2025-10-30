<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la venta');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa que realiza la venta');
            $table->unsignedBigInteger('user_id')
                ->comment('FK a users. Usuario que registra la venta (vendedor o cajero)');
            $table->unsignedBigInteger('customer_id')
                ->comment('FK a customers. Cliente que compra');
            $table->unsignedBigInteger('currency_id')
                ->comment('FK a currency_sys. Moneda de la venta');

            $table->string('invoice_number', 50)->unique()
                ->comment('Número de factura único. Ej: FAC-2024-001, puede incluir prefijo SAR');
            $table->date('sale_date')
                ->comment('Fecha de la venta. Usado para reportes y cierres fiscales');
            $table->decimal('subtotal', 15, 2)->default(0)
                ->comment('Subtotal antes de impuestos (suma de line_total de items)');
            $table->decimal('tax_amount', 15, 2)->default(0)
                ->comment('Monto total de impuestos (ISV). Calculado desde sales_items');
            $table->decimal('total', 15, 2)->default(0)
                ->comment('Total de la venta = subtotal + tax_amount');
            $table->string('status', 50)->default('draft')
                ->comment('Estado: draft=borrador, confirmed=confirmada, paid=pagada, cancelled=anulada');
            $table->text('notes')->nullable()
                ->comment('Observaciones o notas adicionales de la venta');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = venta activa');

            $table->index('company_id');
            $table->index('user_id');
            $table->index('customer_id');
            $table->index('sale_date');
            $table->index('status');
            $table->index(['company_id', 'created_at']);

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('customer_id')
                ->references('id')->on('customers')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('currency_id')
                ->references('id')->on('currency_sys')
                ->onUpdate('cascade')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
