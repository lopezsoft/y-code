<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del menú del sistema');
            $table->string('name_menu', 255)
                ->comment('Nombre del menú. Ej: "Ventas", "Inventario", "Contabilidad", "Reportes"');
            $table->tinyInteger('active')
                ->comment('1 = menú activo y visible. 0 = oculto o deshabilitado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};