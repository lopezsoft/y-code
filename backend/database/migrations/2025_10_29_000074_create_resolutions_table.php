<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('resolutions', function (Blueprint $table) {
            $table->id()
                ->comment('ID único de la resolución de facturación SAR/DIAN');
            $table->smallInteger('point_of_sale_id')
                ->comment('FK a points_of_sale. Punto de venta autorizado para usar esta resolución');
            $table->smallInteger('type_document_id')
                ->comment('FK a accounting_documents. Tipo de documento: Factura, Nota Crédito, etc.');
            $table->string('image', 255)->nullable()
                ->comment('Imagen/PDF de la resolución SAR. NULL = sin imagen');
            $table->string('mime', 255)->nullable()
                ->comment('Tipo MIME de la imagen. Ej: application/pdf, image/jpeg. NULL = sin imagen');
            $table->string('prefix', 255)->nullable()
                ->comment('Prefijo autorizado por SAR. Ej: FAC-, REC-. NULL = sin prefijo');
            $table->string('invoice_name', 255)
                ->comment('Nombre de la factura según resolución. Ej: "Factura de Venta", "Tiquete Electrónico"');
            $table->bigInteger('range_from')
                ->comment('Número inicial del rango autorizado. Ej: 1 o 1000');
            $table->bigInteger('range_up')
                ->comment('Número final del rango autorizado. Ej: 5000, 10000');
            $table->bigInteger('initial_number')
                ->comment('Número actual/siguiente a usar. Se incrementa con cada factura');
            $table->date('date_from')->nullable()
                ->comment('Fecha de inicio de vigencia de la resolución. NULL = sin fecha inicio');
            $table->date('date_up')->nullable()
                ->comment('Fecha de vencimiento de la resolución. NULL = sin vencimiento');
            $table->string('resolution_number', 255)->nullable()
                ->comment('Número de resolución SAR. Ej: RES-SAR-2024-001. NULL = sin número asignado');
            $table->tinyInteger('active')
                ->comment('1 = resolución activa y en uso. 0 = vencida o deshabilitada');
            $table->string('state', 255)
                ->comment('Estado: active, expired, suspended, revoked');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resolutions');
    }
};