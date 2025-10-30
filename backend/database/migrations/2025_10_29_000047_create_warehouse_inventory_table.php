<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('warehouse_inventory', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación factura-bodega');
            $table->bigInteger('bill_id')
                ->comment('FK a invoices. Factura de compra que ingresa al inventario');
            $table->integer('warehouse_id')
                ->comment('FK a warehouse. Bodega destino del ingreso');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('warehouse_inventory');
    }
};