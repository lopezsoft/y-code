<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sales_currency', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación venta-moneda (tabla pivot)');
            $table->bigInteger('sale_id')
                ->comment('FK a sales. Venta realizada');
            $table->integer('currency_id')
                ->comment('FK a currency_sys. Moneda usada en la venta (para multi-moneda)');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_currency');
    }
};