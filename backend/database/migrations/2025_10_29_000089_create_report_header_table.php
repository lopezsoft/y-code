<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('report_header', function (Blueprint $table) {
            $table->id()
                ->comment('ID único del encabezado de reporte por sucursal');
            $table->smallInteger('branch_office_id')
                ->comment('FK a branch_offices. Sucursal para la que aplica este encabezado');
            $table->text('foot')->nullable()
                ->comment('Pie de página del reporte. Información adicional, términos. NULL = sin pie de página');
            $table->string('image', 255)->nullable()
                ->comment('Ruta del logo/imagen del encabezado. Ej: logos/sucursal-01.png. NULL = sin logo');
            $table->string('mime', 255)
                ->comment('Tipo MIME de la imagen. Ej: image/png, image/jpeg');
            $table->string('state', 255)
                ->comment('Estado del encabezado: active, inactive');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('report_header');
    }
};