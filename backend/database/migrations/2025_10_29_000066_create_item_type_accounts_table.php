<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('item_type_accounts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación tipo de ítem - cuenta contable');
            $table->integer('item_type_id')
                ->comment('FK a items_types. Tipo de ítem');
            $table->bigInteger('account_type_id')
                ->comment('FK a account_types. Tipo de cuenta contable (Activo, Ingreso, Costo, etc.)');
            $table->bigInteger('account_id')
                ->comment('FK a accounting_accounts. Cuenta contable específica para este tipo de ítem');
            $table->string('state', 255)
                ->comment('Estado de la relación: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_type_accounts');
    }
};