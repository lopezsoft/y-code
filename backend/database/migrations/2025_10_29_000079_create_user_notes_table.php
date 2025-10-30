<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_notes', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la relación usuario-nota (tabla pivot)');
            $table->bigInteger('note_id')
                ->comment('FK a notes. Nota registrada en el sistema');
            $table->integer('user_id')
                ->comment('FK a users. Usuario que creó la nota');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_notes');
    }
};