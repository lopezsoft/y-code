<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('work_shifts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del turno de trabajo');
            $table->string('name_of_shift', 255)
                ->comment('Nombre del turno. Ej: "Turno Mañana", "Turno Tarde", "Turno Noche", "24 horas"');
            $table->string('entry_time', 255)
                ->comment('Hora de entrada del turno. Ej: "08:00", "14:00", "22:00"');
            $table->string('depart_time', 255)
                ->comment('Hora de salida del turno. Ej: "14:00", "22:00", "08:00"');
            $table->tinyInteger('active')
                ->comment('1 = turno activo y disponible. 0 = deshabilitado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('work_shifts');
    }
};