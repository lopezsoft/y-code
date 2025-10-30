<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la factura de compra (proveedores)');
            $table->string('invoice_nro', 255)
                ->comment('Número de factura del proveedor. Ej: FAC-PROV-2024-001');
            $table->bigInteger('provider_id')
                ->comment('FK a suppliers/providers. Proveedor que emite la factura');
            $table->smallInteger('payment_method_id')
                ->comment('FK a payment_methods. Método de pago acordado');
            $table->smallInteger('point_of_sale_id')
                ->comment('FK a points_of_sale. Punto de venta/sucursal que registra la compra');
            $table->date('admission_date')->nullable()
                ->comment('Fecha de recepción/ingreso de la factura. NULL = no recibida aún');
            $table->date('pay_day')->nullable()
                ->comment('Fecha de pago o vencimiento. NULL = sin fecha límite');
            $table->decimal('sub_total', 16,2)->nullable()
                ->comment('Subtotal antes de impuestos y descuentos');
            $table->decimal('freight', 16,2)->nullable()
                ->comment('Costo de flete o envío. NULL = sin flete');
            $table->decimal('vat', 16,2)->nullable()
                ->comment('Impuesto (IVA/ISV) de la factura. NULL = sin impuesto');
            $table->decimal('total', 16,2)->nullable()
                ->comment('Total de la factura = sub_total + freight + vat - discount - rfte');
            $table->decimal('discount', 16,2)->nullable()
                ->comment('Descuento aplicado. NULL = sin descuento');
            $table->decimal('rfte', 16,2)->nullable()
                ->comment('Retención en la fuente (ISR/income tax). NULL = sin retención');
            $table->text('notes')->nullable()
                ->comment('Observaciones adicionales de la factura');
            $table->string('state', 255)
                ->comment('Estado de la factura: pending, received, paid, cancelled');
            $table->tinyInteger('closed')
                ->comment('1 = factura cerrada (contabilizada). 0 = abierta/editable');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};