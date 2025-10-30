<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('general_settings', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la configuración general del sistema');
            $table->string('tag', 255)
                ->comment('Etiqueta/categoría de la configuración. Ej: "app", "mail", "pos", "accounting"');
            $table->string('key_value', 255)
                ->comment('Clave única de configuración. Ej: "app_name", "tax_rate_default", "receipt_printer"');
            $table->string('data_type', 255)->nullable()
                ->comment('Tipo de dato: string, integer, boolean, json, decimal. NULL = string por defecto');
            $table->string('value', 255)
                ->comment('Valor de la configuración. Ej: "Mi Empresa", "15.00", "true"');
            $table->string('OBS', 255)
                ->comment('Observaciones o descripción de la configuración. Para qué sirve esta setting');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('general_settings');
    }
};