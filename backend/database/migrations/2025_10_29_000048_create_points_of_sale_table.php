<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('points_of_sale', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación punto de venta');
            $table->smallInteger('parent_id')
                ->comment('FK a branch_offices. Sucursal padre (matriz o principal)');
            $table->smallInteger('child_id')
                ->comment('FK a branch_offices. Sucursal hija (punto de venta)');
            $table->string('status', 255)
                ->comment('Estado de la relación: active, inactive, suspended');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('points_of_sale');
    }
};