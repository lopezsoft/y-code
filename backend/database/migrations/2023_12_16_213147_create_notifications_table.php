<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary()
                ->comment('UUID único de la notificación (Laravel Notifications)');
            $table->string('type')
                ->comment('Clase completa de la notificación. Ej: "App\\Notifications\\InvoiceCreated"');
            
            // Relación polimórfica: morphs() crea notifiable_type y notifiable_id
            $table->string('notifiable_type')
                ->comment('Tipo de entidad que recibe la notificación. Ej: "App\\Models\\User", "App\\Models\\Company"');
            $table->unsignedBigInteger('notifiable_id')
                ->comment('ID de la entidad que recibe la notificación (user.id, company.id, etc.)');
            $table->index(['notifiable_type', 'notifiable_id']);
            
            $table->text('data')
                ->comment('Datos JSON de la notificación: mensaje, título, acciones, metadatos');
            $table->timestamp('read_at')->nullable()
                ->comment('Fecha/hora en que se marcó como leída. NULL = no leída (notificación pendiente)');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
