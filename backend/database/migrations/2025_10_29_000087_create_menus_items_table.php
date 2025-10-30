<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menus_items', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del ítem de menú');
            $table->string('id_menu', 255)
                ->comment('FK a menus. Menú padre al que pertenece el ítem');
            $table->string('name_item', 255)
                ->comment('Nombre del ítem de menú. Ej: "Nueva Factura", "Listado Clientes", "Balance General"');
            $table->tinyInteger('active')
                ->comment('1 = ítem activo y visible. 0 = oculto');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menus_items');
    }
};