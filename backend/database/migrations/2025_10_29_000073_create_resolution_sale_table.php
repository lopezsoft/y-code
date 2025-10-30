<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('resolution_sale', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación resolución-venta (tabla pivot)');
            $table->bigInteger('resolution_id')
                ->comment('FK a resolutions. Resolución SAR/DIAN autorizada para facturación');
            $table->bigInteger('sale_id')
                ->comment('FK a sales. Venta que usa esta resolución (numeración autorizada)');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resolution_sale');
    }
};