<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounting_accounts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la cuenta contable');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Cada empresa tiene su propio plan de cuentas');
            $table->unsignedBigInteger('accounting_group_id')
                ->comment('FK a accounting_groups. Grupo al que pertenece la cuenta (Activo, Pasivo, etc.)');
            $table->unsignedBigInteger('currency_id')
                ->comment('FK a currency_sys. Moneda de la cuenta');
            $table->unsignedBigInteger('tax_rate_id')->nullable()
                ->comment('FK a tax_rates. Tasa de impuesto por defecto para esta cuenta. NULL = sin impuesto automático');

            $table->string('account_number', 30)
                ->comment('Número de cuenta contable. Ej: 1105.01.001 (Bancos - Cuenta Corriente)');
            $table->string('account_name', 200)
                ->comment('Nombre descriptivo de la cuenta. Ej: "Banco Nacional - Cuenta Corriente USD"');
            $table->text('description')->nullable()
                ->comment('Descripción detallada de para qué se usa esta cuenta');
            $table->decimal('balance', 15, 2)->default(0)
                ->comment('Saldo actual de la cuenta. Actualizado por transacciones');
            $table->boolean('active')->default(true)
                ->comment('true = cuenta activa y disponible. false = deshabilitada (no se puede usar)');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = cuenta activa');

            $table->unique(['company_id', 'account_number']);
            $table->index('company_id');
            $table->index('accounting_group_id');
            $table->index('active');

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('accounting_group_id')
                ->references('id')->on('accounting_groups')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('currency_id')
                ->references('id')->on('currency_sys')
                ->onUpdate('cascade')->onDelete('restrict');

            $table->foreign('tax_rate_id')
                ->references('id')->on('tax_rates')
                ->onUpdate('cascade')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_accounts');
    }
};
