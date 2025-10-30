<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('warehouse', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la bodega/almacén');
            $table->smallInteger('branch_id')
                ->comment('FK a branch_offices. Sucursal a la que pertenece la bodega');
            $table->string('winery_name', 255)
                ->comment('Nombre de la bodega. Ej: "Bodega Principal", "Almacén Frio", "Tránsito"');
            $table->date('date_time')->nullable()
                ->comment('Fecha de creación o activación de la bodega. NULL = sin fecha específica');
            $table->string('state', 255)
                ->comment('Estado de la bodega: active, inactive, maintenance');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('warehouse');
    }
};