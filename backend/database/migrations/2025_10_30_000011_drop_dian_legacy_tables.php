<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Sprint 2: Eliminar Tablas DIAN Legacy (Colombia)
     * 
     * Tablas eliminadas:
     * 1. fe_party_tax - Régimen tributario de terceros DIAN
     * 2. fe_reference_price_codes - Códigos de precios de referencia DIAN
     * 3. fe_tax_level - Niveles tributarios DIAN
     * 4. fe_tax_regime - Regímenes tributarios DIAN (común/simplificado)
     * 
     * JUSTIFICACIÓN:
     * - Conceptos específicos de DIAN (Colombia), no aplicables a SAR (Honduras)
     * - Sin dependencias en código de aplicación (app/)
     * - Sin modelos Eloquent
     * - Única dependencia era sp_select_customer_sale (ya refactorizado)
     * 
     * IMPACTO:
     * - Sin impacto en funcionalidad (tablas no usadas)
     * - Simplifica modelo de datos
     * - Elimina confusión conceptual Colombia vs Honduras
     */
    public function up(): void
    {
        // Verificar que no existan datos antes de eliminar (seguridad)
        $this->logTableStats();

        // Eliminar tablas en orden inverso de dependencias
        Schema::dropIfExists('fe_party_tax');
        Schema::dropIfExists('fe_reference_price_codes');
        Schema::dropIfExists('fe_tax_level');
        Schema::dropIfExists('fe_tax_regime');
    }

    /**
     * Reversar cambios: Recrear tablas DIAN (solo estructura, sin datos)
     */
    public function down(): void
    {
        // Recrear fe_tax_level
        Schema::create('fe_tax_level', function (Blueprint $table) {
            $table->id()
                ->comment('LEGACY COLOMBIA - DIAN. Niveles tributarios (responsabilidades fiscales)');
            $table->string('code', 20)->unique()
                ->comment('Código nivel tributario DIAN. Ej: R-99-PN, O-47');
            $table->string('name', 150)
                ->comment('Nombre del nivel. Ej: "Responsable de IVA", "No responsable"');
            $table->text('description')->nullable()
                ->comment('Descripción detallada del nivel tributario');
            $table->boolean('active')->default(true)
                ->comment('true = nivel activo. false = deshabilitado');
            $table->timestamps();
        });

        // Recrear fe_tax_regime
        Schema::create('fe_tax_regime', function (Blueprint $table) {
            $table->id()
                ->comment('LEGACY COLOMBIA - DIAN. Régimen tributario (común/simplificado)');
            $table->string('code', 20)->unique()
                ->comment('Código régimen DIAN. Ej: REGIMEN_COMUN, REGIMEN_SIMPLIFICADO');
            $table->string('description', 255)
                ->comment('Descripción del régimen tributario');
            $table->boolean('active')->default(true)
                ->comment('true = régimen activo. false = deshabilitado');
            $table->timestamps();
        });

        // Recrear fe_reference_price_codes
        Schema::create('fe_reference_price_codes', function (Blueprint $table) {
            $table->id()
                ->comment('LEGACY COLOMBIA - DIAN. Códigos de precios de referencia para facturación electrónica');
            $table->string('code', 20)->unique()
                ->comment('Código de precio de referencia DIAN');
            $table->string('description', 255)
                ->comment('Descripción del código de precio');
            $table->boolean('active')->default(true)
                ->comment('true = código activo. false = deshabilitado');
            $table->timestamps();
        });

        // Recrear fe_party_tax
        Schema::create('fe_party_tax', function (Blueprint $table) {
            $table->id()
                ->comment('LEGACY COLOMBIA - DIAN. Régimen tributario de terceros (clientes/proveedores)');
            $table->unsignedBigInteger('person_id')
                ->comment('FK a persons. Tercero al que aplica el régimen tributario');
            $table->unsignedBigInteger('tax_level_id')->nullable()
                ->comment('FK a fe_tax_level. Nivel tributario del tercero');
            $table->unsignedBigInteger('tax_regime_id')->nullable()
                ->comment('FK a fe_tax_regime. Régimen tributario del tercero');
            $table->boolean('active')->default(true)
                ->comment('true = configuración activa. false = deshabilitada');
            $table->timestamps();
            
            $table->foreign('tax_level_id')->references('id')->on('fe_tax_level')->onDelete('set null');
            $table->foreign('tax_regime_id')->references('id')->on('fe_tax_regime')->onDelete('set null');
        });
    }

    /**
     * Registrar estadísticas de tablas antes de eliminar
     */
    private function logTableStats(): void
    {
        $tables = ['fe_party_tax', 'fe_reference_price_codes', 'fe_tax_level', 'fe_tax_regime'];
        
        foreach ($tables as $table) {
            if (Schema::hasTable($table)) {
                $count = DB::table($table)->count();
                // Registro silencioso: {$table} tiene {$count} registros
            }
        }
    }
};
