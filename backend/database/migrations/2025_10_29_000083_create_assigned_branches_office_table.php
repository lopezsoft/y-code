<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assigned_branches_office', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la asignación usuario-sucursal');
            $table->integer('id_user')
                ->comment('FK a users. Usuario asignado a la sucursal');
            $table->smallInteger('id_branch_office')
                ->comment('FK a branch_offices. Sucursal asignada al usuario');
            $table->tinyInteger('active')
                ->comment('1 = asignación activa, usuario tiene acceso. 0 = acceso revocado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assigned_branches_office');
    }
};