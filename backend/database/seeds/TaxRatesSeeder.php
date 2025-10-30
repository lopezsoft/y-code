<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaxRatesSeeder extends Seeder
{
    /**
     * Seed Tax Rates Table - DETALLE DE TASAS HONDURAS
     * 
     * Configuración de tasas vinculadas a tributos (maestro)
     * Datos globales (company_id = NULL) para configuración inicial
     * 
     * NOTA: Las empresas pueden crear sus propias tasas específicas
     * con company_id != NULL
     * 
     * @return void
     */
    public function run()
    {
        // Obtener IDs de tributes
        $isvId = DB::table('tributes')->where('code', 'ISV')->value('id');
        $isvExentoId = DB::table('tributes')->where('code', 'ISV-EXENTO')->value('id');
        $isvExportId = DB::table('tributes')->where('code', 'ISV-EXPORTACION')->value('id');
        $retIsr10Id = DB::table('tributes')->where('code', 'RET-ISR-10')->value('id');
        $retIsr125Id = DB::table('tributes')->where('code', 'RET-ISR-12.5')->value('id');
        $retIsr15Id = DB::table('tributes')->where('code', 'RET-ISR-15')->value('id');
        $retIsr25Id = DB::table('tributes')->where('code', 'RET-ISR-25')->value('id');
        $retIsv100Id = DB::table('tributes')->where('code', 'RET-ISV-100')->value('id');

        $taxRates = [
            // ========== ISV (Impuesto sobre Ventas) ==========
            [
                'tribute_id' => $isvId,
                'company_id' => null, // Global
                'tax_name' => 'ISV Estándar 15%',
                'tax_code' => 'ISV-15',
                'rate' => 15.0000,
                'description' => 'Tasa estándar de Impuesto sobre Ventas en Honduras',
                'tax_type' => 'vat',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tribute_id' => $isvExentoId,
                'company_id' => null,
                'tax_name' => 'ISV Exento 0%',
                'tax_code' => 'ISV-EXENTO-0',
                'rate' => 0.0000,
                'description' => 'Productos exentos de ISV (canasta básica, medicamentos)',
                'tax_type' => 'exempt',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tribute_id' => $isvExportId,
                'company_id' => null,
                'tax_name' => 'ISV Exportación 0%',
                'tax_code' => 'ISV-EXPORT-0',
                'rate' => 0.0000,
                'description' => 'Tasa 0% para exportaciones (permite crédito fiscal)',
                'tax_type' => 'vat',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== RETENCIONES ISR ==========
            [
                'tribute_id' => $retIsr10Id,
                'company_id' => null,
                'tax_name' => 'Retención ISR 10% - Honorarios',
                'tax_code' => 'RET-ISR-10-HON',
                'rate' => 10.0000,
                'description' => 'Retención sobre honorarios profesionales y servicios técnicos',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tribute_id' => $retIsr125Id,
                'company_id' => null,
                'tax_name' => 'Retención ISR 12.5% - Arrendamientos',
                'tax_code' => 'RET-ISR-125-ARR',
                'rate' => 12.5000,
                'description' => 'Retención sobre arrendamiento de inmuebles',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tribute_id' => $retIsr15Id,
                'company_id' => null,
                'tax_name' => 'Retención ISR 15% - Servicios',
                'tax_code' => 'RET-ISR-15-SRV',
                'rate' => 15.0000,
                'description' => 'Retención sobre servicios generales no profesionales',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tribute_id' => $retIsr25Id,
                'company_id' => null,
                'tax_name' => 'Retención ISR 25% - No Residentes',
                'tax_code' => 'RET-ISR-25-NORES',
                'rate' => 25.0000,
                'description' => 'Retención sobre pagos a proveedores no residentes',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== RETENCIÓN ISV ==========
            [
                'tribute_id' => $retIsv100Id,
                'company_id' => null,
                'tax_name' => 'Retención ISV 100% - Agente Estado',
                'tax_code' => 'RET-ISV-100-AGT',
                'rate' => 100.0000,
                'description' => 'Retención total del ISV cuando comprador es agente retenedor',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('tax_rates')->insert($taxRates);

        $this->command->info('✅ ' . count($taxRates) . ' tasas de impuestos insertadas correctamente');
        $this->command->info('📋 Vinculadas a tributos maestros (FK tribute_id)');
        $this->command->info('🌍 Tasas globales (company_id = NULL)');
    }
}
