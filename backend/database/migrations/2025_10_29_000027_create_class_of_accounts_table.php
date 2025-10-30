<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('class_of_accounts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la clase de cuenta contable');
            $table->string('name', 255)
                ->comment('Nombre de la clase. Ej: "Activos Corrientes", "Pasivos No Corrientes"');
            $table->string('number', 255)
                ->comment('Número/código de la clase. Ej: 1 (Activos), 2 (Pasivos), 3 (Patrimonio)');
            $table->string('state', 255)
                ->comment('Estado de la clase: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('class_of_accounts');
    }
};