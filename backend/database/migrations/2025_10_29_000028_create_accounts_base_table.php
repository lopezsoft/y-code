<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounts_base', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la cuenta base del catálogo contable');
            $table->string('codigo', 255)->nullable()
                ->comment('Código de la cuenta base. Ej: 1105 (Bancos), 2105 (Proveedores). NULL = sin código asignado');
            $table->string('nombre', 255)->nullable()
                ->comment('Nombre de la cuenta base. Ej: "Bancos", "Cuentas por Cobrar Clientes"');
            $table->string('clasificacion', 255)->nullable()
                ->comment('Clasificación de la cuenta. Ej: Activo, Pasivo, Patrimonio, Ingreso, Gasto');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounts_base');
    }
};