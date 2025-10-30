<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('branch_offices', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la sucursal');
            $table->integer('currency_id')
                ->comment('FK a currency_sys. Moneda principal de operación de la sucursal');
            $table->integer('country_id')
                ->comment('FK a countries. País donde está ubicada la sucursal');
            $table->string('postal_code', 255)->nullable()
                ->comment('Código postal de la sucursal. NULL = sin código postal');
            $table->string('branch_name', 255)
                ->comment('Nombre de la sucursal. Ej: "Sucursal Centro", "Agencia Norte", "Matriz"');
            $table->text('address')->nullable()
                ->comment('Dirección física completa de la sucursal');
            $table->text('location')->nullable()
                ->comment('Ubicación GPS o coordenadas. NULL = sin ubicación GPS');
            $table->string('email', 255)->nullable()
                ->comment('Email de contacto de la sucursal');
            $table->string('mobile', 255)->nullable()
                ->comment('Teléfono móvil/celular de contacto');
            $table->string('phone', 255)->nullable()
                ->comment('Teléfono fijo de la sucursal');
            $table->string('web', 255)->nullable()
                ->comment('Sitio web específico de la sucursal. NULL = usa web corporativa');
            $table->tinyInteger('is_point_of_sale')
                ->comment('1 = tiene punto de venta (POS) activo. 0 = solo oficina administrativa');
            $table->tinyInteger('is_branch')
                ->comment('1 = es sucursal. 0 = es matriz/casa matriz');
            $table->string('state', 255)
                ->comment('Estado de la sucursal: active, inactive, maintenance, closed');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('branch_offices');
    }
};