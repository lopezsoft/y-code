<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_attributes', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación producto-atributo');
            $table->bigInteger('term_id')
                ->comment('FK a terms/taxonomy. Término del atributo: Color=Rojo, Talla=M, Material=Algodón');
            $table->bigInteger('product_id')
                ->comment('FK a products. Producto al que se asigna el atributo');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_attributes');
    }
};