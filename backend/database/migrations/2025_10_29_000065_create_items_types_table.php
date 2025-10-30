<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('items_types', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del tipo de ítem/producto');
            $table->smallInteger('product_class_id')
                ->comment('FK a product_classes. Clase del producto: Bien, Servicio, Materia Prima');
            $table->string('name_type', 255)
                ->comment('Nombre del tipo de ítem. Ej: "Producto Terminado", "Servicio Profesional", "Insumo"');
            $table->string('state', 255)
                ->comment('Estado del tipo: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('items_types');
    }
};