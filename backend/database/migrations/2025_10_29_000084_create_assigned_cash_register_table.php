<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('assigned_cash_register', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la asignación usuario-caja registradora');
            $table->integer('id_user')
                ->comment('FK a users. Usuario autorizado para usar la caja (cajero)');
            $table->string('id_cash_register', 255)
                ->comment('FK a cash_registers. Caja registradora asignada. Ej: "CAJA-001", "POS-PRINCIPAL"');
            $table->tinyInteger('active')
                ->comment('1 = usuario puede usar esta caja. 0 = acceso deshabilitado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('assigned_cash_register');
    }
};