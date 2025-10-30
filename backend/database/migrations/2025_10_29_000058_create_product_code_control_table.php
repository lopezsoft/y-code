<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_code_control', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del control de códigos de producto');
            $table->string('value', 255)
                ->comment('Último código generado o valor del contador. Ej: "00001234" para generar próximo código');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_code_control');
    }
};