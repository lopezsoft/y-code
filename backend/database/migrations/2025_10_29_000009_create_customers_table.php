<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del cliente');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa a la que pertenece el cliente');
            $table->unsignedBigInteger('country_id')->nullable()
                ->comment('FK a countries. País del cliente. NULL = mismo país que la empresa');

            $table->string('customer_name', 200)
                ->comment('Nombre completo o razón social del cliente');
            $table->string('dni_ruc', 30)
                ->comment('Identificación fiscal: RTN (Honduras), RUC (Perú), NIT (Colombia), DNI, etc. NOTA: Migrar a tax_identifier en Sprint 2');
            $table->string('email', 100)->nullable()
                ->comment('Email del cliente para comunicaciones y facturación electrónica');
            $table->string('phone', 20)->nullable()
                ->comment('Teléfono de contacto principal');
            $table->text('address')->nullable()
                ->comment('Dirección física del cliente');
            $table->decimal('credit_limit', 15, 2)->default(0)
                ->comment('Límite de crédito autorizado. 0 = sin crédito, solo contado');
            $table->decimal('current_balance', 15, 2)->default(0)
                ->comment('Saldo actual de deuda. Actualizado automáticamente con ventas/pagos');
            $table->boolean('active')->default(true)
                ->comment('true = cliente activo. false = bloqueado (no puede comprar)');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = cliente activo');

            $table->unique(['company_id', 'dni_ruc']);
            $table->index('company_id');
            $table->index('customer_name');
            $table->index('active');

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('country_id')
                ->references('id')->on('countries')
                ->onUpdate('cascade')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
