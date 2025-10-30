<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFailedJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del trabajo fallido en la cola');
            $table->text('connection')
                ->comment('Conexión de cola usada. Ej: "database", "redis", "sync"');
            $table->text('queue')
                ->comment('Nombre de la cola. Ej: "default", "emails", "notifications"');
            $table->longText('payload')
                ->comment('Datos serializados del trabajo (clase, método, parámetros)');
            $table->longText('exception')
                ->comment('Mensaje completo de la excepción que causó el fallo (stack trace)');
            $table->timestamp('failed_at')->useCurrent()
                ->comment('Fecha y hora en que el trabajo falló');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('failed_jobs');
    }
}
