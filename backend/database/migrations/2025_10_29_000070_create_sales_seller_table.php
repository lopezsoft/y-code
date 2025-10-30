<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_seller', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación venta-vendedor (tabla pivot)');
            $table->bigInteger('sale_id')
                ->comment('FK a sales. Venta realizada');
            $table->bigInteger('seller_id')
                ->comment('FK a sellers. Vendedor que realizó la venta (para cálculo de comisiones)');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_seller');
    }
};