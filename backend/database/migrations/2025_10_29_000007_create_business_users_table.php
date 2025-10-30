<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('business_users', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación usuario-empresa');
            $table->unsignedBigInteger('company_id')
                ->comment('FK a companies. Empresa a la que pertenece el usuario');
            $table->unsignedBigInteger('user_id')
                ->comment('FK a users. Usuario asignado a la empresa');
            $table->string('role')->default('user')
                ->comment('Rol del usuario en esta empresa: admin, manager, user, seller, accountant, etc.');
            $table->boolean('active')->default(true)
                ->comment('true = usuario activo en esta empresa. false = deshabilitado temporalmente');
            $table->timestamps();
            $table->softDeletes()
                ->comment('Fecha de eliminación lógica de la relación. NULL = relación activa');

            $table->unique(['company_id', 'user_id']);
            $table->index('company_id');
            $table->index('role');

            $table->foreign('company_id')
                ->references('id')->on('companies')
                ->onUpdate('cascade')->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('business_users');
    }
};
