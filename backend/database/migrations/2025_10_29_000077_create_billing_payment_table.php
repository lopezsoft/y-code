<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('billing_payment', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la configuración de facturación/pago del cliente');
            $table->bigInteger('customer_id')
                ->comment('FK a customers. Cliente con configuración de pago personalizada');
            $table->smallInteger('tax_rate_id')->nullable()
                ->comment('FK a tax_rates. Tasa de impuesto por defecto para este cliente. NULL = usar tasa estándar');
            $table->smallInteger('means_payment_id')->nullable()
                ->comment('FK a means_payment. Medio de pago preferido del cliente. NULL = sin preferencia');
            $table->smallInteger('time_limit_id')->nullable()
                ->comment('FK a time_limits/payment_terms. Plazo de pago autorizado. NULL = contado');
            $table->smallInteger('sales_term')->nullable()
                ->comment('Término de venta en días. Ej: 30, 60, 90 días. NULL = contado');
            $table->bigInteger('accounting_account_id')->nullable()
                ->comment('FK a accounting_accounts. Cuenta contable específica del cliente. NULL = usar cuenta por defecto');
            $table->bigInteger('currency_id')->nullable()
                ->comment('FK a currency_sys. Moneda preferida del cliente. NULL = moneda por defecto');
            $table->decimal('initial_balance', 16,2)->nullable()
                ->comment('Saldo inicial histórico del cliente. Ej: 1000.00 debe. NULL = 0');
            $table->date('initial_date')->nullable()
                ->comment('Fecha del saldo inicial. NULL = sin saldo inicial');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('billing_payment');
    }
};