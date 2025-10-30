<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assigned_work_shifts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la asignación usuario-turno de trabajo');
            $table->integer('id_user')
                ->comment('FK a users. Usuario asignado al turno');
            $table->string('id_wotk_shift', 255)
                ->comment('FK a work_shifts. Turno asignado. Ej: "MATUTINO", "VESPERTINO", "NOCTURNO". NOTA: Typo en el nombre del campo (wotk → work)');
            $table->tinyInteger('active')
                ->comment('1 = asignación vigente. 0 = turno deshabilitado para este usuario');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assigned_work_shifts');
    }
};