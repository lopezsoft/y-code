<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cash_registers', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la caja registradora');
            $table->string('id_branch_office', 255)
                ->comment('FK a branch_offices. Sucursal a la que pertenece la caja');
            $table->string('box_name', 255)
                ->comment('Nombre de la caja. Ej: "Caja 1", "Caja Principal", "Caja Express"');
            $table->string('pc_name', 255)
                ->comment('Nombre del equipo/PC asignado a la caja. Ej: "POS-01", "TERMINAL-A"');
            $table->string('printer', 255)
                ->comment('Impresora asignada a la caja. Ej: "EPSON-TM-T20", "\\\\SERVIDOR\\PRINTER1"');
            $table->tinyInteger('active')
                ->comment('1 = caja activa y disponible. 0 = deshabilitada o en mantenimiento');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cash_registers');
    }
};