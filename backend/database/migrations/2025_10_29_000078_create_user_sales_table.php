<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_sales', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación usuario-venta (tabla pivot)');
            $table->bigInteger('sale_id')
                ->comment('FK a sales. Venta realizada');
            $table->integer('user_id')
                ->comment('FK a users. Usuario que atendió/procesó la venta (cajero, vendedor)');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_sales');
    }
};