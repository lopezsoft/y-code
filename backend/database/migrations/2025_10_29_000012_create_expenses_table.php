<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del gasto');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa que registra el gasto');
            $table->unsignedBigInteger('user_id')
                ->comment('FK a users. Usuario que registra el gasto');
            $table->unsignedBigInteger('accounting_account_id')
                ->comment('FK a accounting_accounts. Cuenta contable a la que se carga el gasto');
            $table->unsignedBigInteger('currency_id')
                ->comment('FK a currency_sys. Moneda del gasto');

            $table->string('expense_number', 50)
                ->comment('Número único del comprobante de gasto. Ej: EGR-2024-001');
            $table->date('expense_date')
                ->comment('Fecha del gasto. Usado para cierres contables y declaraciones SAR');
            $table->string('description', 200)
                ->comment('Descripción del gasto. Ej: "Pago servicios públicos", "Compra insumos oficina"');
            $table->decimal('amount', 15, 2)
                ->comment('Monto del gasto');
            $table->string('status', 50)->default('pending')
                ->comment('Estado: pending=pendiente, approved=aprobado, paid=pagado, rejected=rechazado');
            $table->text('notes')->nullable()
                ->comment('Observaciones adicionales del gasto');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = gasto activo');

            $table->unique(['company_id', 'expense_number']);
            $table->index('company_id');
            $table->index('user_id');
            $table->index('expense_date');
            $table->index('status');
            $table->index(['company_id', 'created_at']);

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('accounting_account_id')
                ->references('id')->on('accounting_accounts')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('currency_id')
                ->references('id')->on('currency_sys')
                ->onUpdate('cascade')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('expenses');
    }
};
