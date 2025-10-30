<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounting_subaccounts', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación cuenta-subcuenta');
            $table->bigInteger('account_id')
                ->comment('FK a accounting_accounts. Cuenta principal');
            $table->bigInteger('subaccount_id')
                ->comment('FK a accounting_accounts. Subcuenta o auxiliar');
            $table->string('state', 255)
                ->comment('Estado de la relación. Ej: active, inactive, pending');
            $table->date('timestate')
                ->comment('Fecha de cambio de estado o activación de la relación');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_subaccounts');
    }
};