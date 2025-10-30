<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shipping_frequency', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la frecuencia de envío');
            $table->string('name', 255)
                ->comment('Nombre de la frecuencia. Ej: "Diario", "Semanal", "Quincenal", "Mensual"');
            $table->smallInteger('rate')
                ->comment('Tasa o días de frecuencia. Ej: 1=diario, 7=semanal, 15=quincenal, 30=mensual');
            $table->tinyInteger('active')
                ->comment('1 = frecuencia activa. 0 = deshabilitada');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shipping_frequency');
    }
};