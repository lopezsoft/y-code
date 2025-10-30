<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('currency', function (Blueprint $table) {
            $table->id()
                ->comment('ID único. TABLA DUPLICADA/LEGACY. Consolidar con currency_sys en Sprint 2');
            $table->string('CurrencyISO', 255)->nullable()
                ->comment('Código ISO 4217. Ej: HNL, USD, MXN. DUPLICADO de currency_sys.currency_code');
            $table->string('Language', 255)->nullable()
                ->comment('Idioma asociado a la moneda. Ej: Spanish, English. NULL = sin idioma específico');
            $table->string('CurrencyName', 255)->nullable()
                ->comment('Nombre de la moneda. DUPLICADO de currency_sys.currency_name');
            $table->string('Money', 255)->nullable()
                ->comment('Denominación local de dinero. Ej: "Lempiras", "Pesos". NULL = usar CurrencyName');
            $table->string('Symbol', 255)->nullable()
                ->comment('Símbolo de la moneda. DUPLICADO de currency_sys.currency_symbol');
            $table->string('image', 255)
                ->comment('Ruta de imagen/bandera de la moneda. Ej: flags/HNL.png');
            $table->tinyInteger('active')
                ->comment('1 = activa. 0 = inactiva. DUPLICADO de currency_sys.active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('currency');
    }
};