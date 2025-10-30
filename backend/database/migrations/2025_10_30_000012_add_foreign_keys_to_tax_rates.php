<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Agrega constraints de clave foránea a la tabla tax_rates para reforzar
     * la integridad referencial con las tablas tributes y companies.
     * 
     * Sprint 2 - Fortalecimiento del modelo tributario Honduras
     * 
     * CONTEXT:
     * - En Sprint 1 se creó tax_rates sin FKs (problemas de orden de migración)
     * - Ahora agregamos FKs ahora que todas las tablas existen
     * - tribute_id: Relaciona con el tributo (ISV, ISR, etc.)
     * - company_id: Permite tasas específicas por empresa
     * 
     * IMPACT:
     * - RESTRICT en tribute_id: No permite borrar tributos si tienen tasas asociadas
     * - CASCADE en company_id: Si se elimina empresa, se eliminan sus tasas específicas
     */
    public function up(): void
    {
        Schema::table('tax_rates', function (Blueprint $table) {
            // FK a tributes - RESTRICT porque un tributo no debe borrarse si tiene tasas activas
            $table->foreign('tribute_id', 'fk_tax_rates_tribute')
                ->references('id')
                ->on('tributes')
                ->onDelete('restrict')
                ->onUpdate('cascade');

            // FK a companies - CASCADE porque si una empresa se elimina, sus tasas específicas también
            $table->foreign('company_id', 'fk_tax_rates_company')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     * 
     * Elimina los constraints de clave foránea restaurando el estado de Sprint 1.
     */
    public function down(): void
    {
        Schema::table('tax_rates', function (Blueprint $table) {
            $table->dropForeign('fk_tax_rates_tribute');
            $table->dropForeign('fk_tax_rates_company');
        });
    }
};
