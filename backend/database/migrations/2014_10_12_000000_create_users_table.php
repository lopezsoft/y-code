<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
    */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del usuario');
            $table->integer('type_id')
                ->comment('FK a type_users. Tipo de usuario: Admin, Contador, Vendedor, etc.');
            $table->string('name')
                ->comment('Nombre completo del usuario');
            $table->string('email')->unique()
                ->comment('Email único para login. Validado por Laravel');
            $table->timestamp('email_verified_at')->nullable()
                ->comment('Fecha de verificación del email. NULL = no verificado');
            $table->string('password')
                ->comment('Contraseña hasheada con bcrypt');
            $table->boolean('active')->default(false)
                ->comment('true = usuario activo puede acceder. false = bloqueado');
            $table->string('activation_token')
                ->comment('Token único para activación inicial de cuenta');
            $table->rememberToken()
                ->comment('Token "Remember Me" de Laravel para sesiones persistentes');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica. NULL = usuario activo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
