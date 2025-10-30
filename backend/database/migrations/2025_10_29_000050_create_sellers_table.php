<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sellers', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del vendedor');
            $table->smallInteger('branch_office_id')
                ->comment('FK a branch_offices. Sucursal a la que está asignado el vendedor');
            $table->bigInteger('person_id')
                ->comment('FK a users o persons. Persona que es el vendedor');
            $table->decimal('commission', 16,2)->nullable()
                ->comment('Porcentaje de comisión sobre ventas. Ej: 5.00 = 5%. NULL = sin comisión');
            $table->tinyInteger('active')
                ->comment('1 = vendedor activo. 0 = inactivo o suspendido');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sellers');
    }
};