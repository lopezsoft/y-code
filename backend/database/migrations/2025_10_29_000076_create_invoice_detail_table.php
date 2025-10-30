<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('invoice_detail', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del detalle de factura de compra');
            $table->bigInteger('invoice_id')
                ->comment('FK a invoices. Factura de compra a la que pertenece');
            $table->bigInteger('product_id')
                ->comment('FK a products. Producto comprado');
            $table->smallInteger('tax_sale_id')
                ->comment('FK a tax_rates. Impuesto para venta de este producto');
            $table->smallInteger('tax_bill_id')
                ->comment('FK a tax_rates. Impuesto aplicado en la compra (factura del proveedor)');
            $table->string('batch', 255)->nullable()
                ->comment('Número de lote del producto. Ej: LOTE-2024-A01. NULL = sin lote');
            $table->decimal('amount', 16,2)->nullable()
                ->comment('Cantidad comprada. Ej: 100.00 unidades');
            $table->decimal('unit_cost', 16,2)->nullable()
                ->comment('Costo unitario del producto sin impuesto');
            $table->decimal('discount', 16,2)->nullable()
                ->comment('Descuento por unidad. NULL = sin descuento');
            $table->decimal('freight', 16,2)->nullable()
                ->comment('Flete prorrateado por unidad. NULL = sin flete');
            $table->decimal('vat', 16,2)->nullable()
                ->comment('Impuesto (IVA/ISV) por unidad. NULL = sin impuesto');
            $table->decimal('total_cost', 16,2)->nullable()
                ->comment('Costo total de línea = (unit_cost * amount) + freight + vat - discount');
            $table->decimal('sale_price', 16,2)->nullable()
                ->comment('Precio de venta sugerido calculado. NULL = sin precio sugerido');
            $table->date('admission_date')->nullable()
                ->comment('Fecha de ingreso del producto al inventario. NULL = no ingresado aún');
            $table->date('fabrication_date')->nullable()
                ->comment('Fecha de fabricación del lote. NULL = no aplica');
            $table->date('expiration_date')->nullable()
                ->comment('Fecha de vencimiento del lote. NULL = no perecedero');
            $table->tinyInteger('active')
                ->comment('1 = línea activa. 0 = anulada o eliminada');
            $table->string('state', 255)
                ->comment('Estado de la línea: pending, received, cancelled');
            $table->tinyInteger('vat_included')
                ->comment('1 = el unit_cost incluye IVA. 0 = IVA se suma aparte');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('invoice_detail');
    }
};