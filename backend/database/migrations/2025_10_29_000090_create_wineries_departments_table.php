<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wineries_departments', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación bodega-departamento');
            $table->integer('department_id')
                ->comment('FK a company_departments. Departamento de la empresa');
            $table->integer('wineries_id')
                ->comment('FK a warehouse. Bodega asignada al departamento');
            $table->string('state', 255)
                ->comment('Estado de la relación: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wineries_departments');
    }
};