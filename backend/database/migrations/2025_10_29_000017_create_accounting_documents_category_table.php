<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounting_documents_category', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la categoría de documentos contables');
            $table->string('category_name', 255)
                ->comment('Nombre de la categoría. Ej: Ingresos, Egresos, Diario, Notas de Ajuste');
            $table->tinyInteger('active')
                ->comment('1 = categoría activa. 0 = deshabilitada');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_documents_category');
    }
};