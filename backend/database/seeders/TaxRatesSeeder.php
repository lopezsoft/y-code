<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TaxRatesSeeder extends Seeder
{
    /**
     * Seeder de Tasas de Impuestos para Honduras
     * 
     * Configuración específica de tasas vinculadas a tributos maestros
     * Estas son tasas globales (company_id = NULL) aplicables a todas las empresas
     */
    public function run(): void
    {
        // Obtener IDs de tributos maestros
        $tributes = DB::table('tributes')->pluck('id', 'code');

        $taxRates = [
            // ============= ISV (Impuesto sobre Ventas) =============
            [
                'tribute_id' => $tributes['ISV'] ?? null,
                'company_id' => null, // Tasa global
                'tax_name' => 'ISV Estándar 15%',
                'tax_code' => 'ISV-15',
                'rate' => 15.0000,
                'description' => 'Tasa estándar de Impuesto sobre Ventas en Honduras aplicable a la mayoría de bienes y servicios.',
                'tax_type' => 'vat',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'tribute_id' => $tributes['ISV-EXENTO'] ?? null,
                'company_id' => null,
                'tax_name' => 'ISV Exento 0%',
                'tax_code' => 'ISV-EXENTO-0',
                'rate' => 0.0000,
                'description' => 'Tasa 0% para productos/servicios exentos: medicinas, alimentos básicos, educación, servicios de salud.',
                'tax_type' => 'exempt',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'tribute_id' => $tributes['ISV-EXPORTACION'] ?? null,
                'company_id' => null,
                'tax_name' => 'ISV Exportación 0%',
                'tax_code' => 'ISV-EXPORT-0',
                'rate' => 0.0000,
                'description' => 'Tasa 0% aplicable a exportaciones de bienes y servicios fuera de Honduras.',
                'tax_type' => 'vat',
                'is_retention' => false,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIONES ISR =============
            [
                'tribute_id' => $tributes['RET-ISR-10'] ?? null,
                'company_id' => null,
                'tax_name' => 'Retención ISR 10% - Honorarios',
                'tax_code' => 'RET-ISR-10-HON',
                'rate' => 10.0000,
                'description' => 'Retención del 10% sobre honorarios profesionales, servicios técnicos y consultoría.',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'tribute_id' => $tributes['RET-ISR-12.5'] ?? null,
                'company_id' => null,
                'tax_name' => 'Retención ISR 12.5% - Arrendamientos',
                'tax_code' => 'RET-ISR-125-ARR',
                'rate' => 12.5000,
                'description' => 'Retención del 12.5% sobre arrendamientos de bienes inmuebles y equipos.',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'tribute_id' => $tributes['RET-ISR-15'] ?? null,
                'company_id' => null,
                'tax_name' => 'Retención ISR 15% - Servicios',
                'tax_code' => 'RET-ISR-15-SRV',
                'rate' => 15.0000,
                'description' => 'Retención del 15% sobre servicios generales (limpieza, seguridad, mantenimiento, transporte).',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'tribute_id' => $tributes['RET-ISR-25'] ?? null,
                'company_id' => null,
                'tax_name' => 'Retención ISR 25% - No Residentes',
                'tax_code' => 'RET-ISR-25-NORES',
                'rate' => 25.0000,
                'description' => 'Retención del 25% sobre pagos a personas o empresas no residentes fiscales en Honduras.',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIÓN ISV =============
            [
                'tribute_id' => $tributes['RET-ISV-100'] ?? null,
                'company_id' => null,
                'tax_name' => 'Retención ISV 100% - Estado',
                'tax_code' => 'RET-ISV-100-AGT',
                'rate' => 100.0000,
                'description' => 'Retención del 100% del ISV cuando el Estado actúa como agente retenedor en compras gubernamentales.',
                'tax_type' => 'withholding',
                'is_retention' => true,
                'active' => true,
                'effective_from' => '2024-01-01',
                'effective_to' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        DB::table('tax_rates')->insert($taxRates);

        $this->command->info('✅ ' . count($taxRates) . ' tasas de impuestos cargadas exitosamente para Honduras');
    }
}
