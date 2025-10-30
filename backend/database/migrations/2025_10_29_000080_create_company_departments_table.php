<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('company_departments', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del departamento de la empresa');
            $table->smallInteger('branch_office_id')
                ->comment('FK a branch_offices. Sucursal a la que pertenece el departamento');
            $table->string('department_name', 255)
                ->comment('Nombre del departamento. Ej: "Ventas", "Contabilidad", "Almacén", "RRHH"');
            $table->string('state', 255)
                ->comment('Estado del departamento: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('company_departments');
    }
};