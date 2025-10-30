<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('type_users', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del tipo de usuario');
            $table->string('user_type_name', 255)
                ->comment('Nombre del tipo de usuario. Ej: Administrador, Contador, Vendedor, Auditor');
            $table->tinyInteger('active')
                ->comment('1 = tipo activo y disponible. 0 = deshabilitado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('type_users');
    }
};