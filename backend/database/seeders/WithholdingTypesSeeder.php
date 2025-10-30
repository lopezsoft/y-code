<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class WithholdingTypesSeeder extends Seeder
{
    /**
     * Seeder de Tipos de Retención para Honduras
     * 
     * Catálogo de tipos de retenciones ISR e ISV según SAR
     * Incluye tasas, umbrales mínimos y reglas de aplicación
     */
    public function run(): void
    {
        $withholdingTypes = [
            // ============= RETENCIONES ISR =============
            [
                'code' => 'RET-ISR-10',
                'name' => 'Retención ISR 10% - Honorarios Profesionales',
                'description' => 'Retención del 10% sobre honorarios profesionales y servicios técnicos (médicos, abogados, ingenieros, contadores, consultores).',
                'rate' => 10.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-HON-10',
                'min_threshold' => 0.00,
                'applies_to' => 'services',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-12.5',
                'name' => 'Retención ISR 12.5% - Arrendamientos',
                'description' => 'Retención del 12.5% sobre arrendamientos de bienes inmuebles (locales comerciales, oficinas, bodegas) y muebles (equipos, vehículos).',
                'rate' => 12.5000,
                'is_percentage' => true,
                'sar_code' => 'ISR-ARR-12.5',
                'min_threshold' => 0.00,
                'applies_to' => 'rent',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-15',
                'name' => 'Retención ISR 15% - Servicios Generales',
                'description' => 'Retención del 15% sobre servicios generales (limpieza, seguridad, mantenimiento, transporte, publicidad, catering).',
                'rate' => 15.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-SRV-15',
                'min_threshold' => 0.00,
                'applies_to' => 'services',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-25',
                'name' => 'Retención ISR 25% - No Residentes',
                'description' => 'Retención del 25% sobre pagos a personas naturales o jurídicas no residentes fiscales en Honduras (servicios internacionales, regalías, dividendos).',
                'rate' => 25.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-NORES-25',
                'min_threshold' => 0.00,
                'applies_to' => 'all',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-SALARIO',
                'name' => 'Retención ISR - Salarios (Progresiva)',
                'description' => 'Retención progresiva sobre salarios según tabla SAR (0% hasta L. 180,000/año, hasta 25% para ingresos superiores a L. 1,000,000).',
                'rate' => 0.0000, // Variable según tabla
                'is_percentage' => true,
                'sar_code' => 'ISR-SAL',
                'min_threshold' => 15000.00, // L. 15,000/mes = L. 180,000/año
                'applies_to' => 'salary',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIONES ISV =============
            [
                'code' => 'RET-ISV-100',
                'name' => 'Retención ISV 100% - Agente Retenedor Estado',
                'description' => 'Retención del 100% del ISV cuando el Estado (gobierno central, municipalidades, instituciones descentralizadas) actúa como agente retenedor.',
                'rate' => 100.0000,
                'is_percentage' => true,
                'sar_code' => 'ISV-RET-100',
                'min_threshold' => 0.00,
                'applies_to' => 'all',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIONES ESPECIALES =============
            [
                'code' => 'RET-ISR-3',
                'name' => 'Retención ISR 3% - Compras Sector Agropecuario',
                'description' => 'Retención del 3% sobre compras de productos agropecuarios a pequeños productores (café, granos básicos, ganado).',
                'rate' => 3.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-AGRO-3',
                'min_threshold' => 0.00,
                'applies_to' => 'goods',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-5',
                'name' => 'Retención ISR 5% - Proveedores sin Factura',
                'description' => 'Retención del 5% sobre compras a proveedores que no emiten factura o están en régimen simplificado.',
                'rate' => 5.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-NOFAC-5',
                'min_threshold' => 0.00,
                'applies_to' => 'goods',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        DB::table('withholding_types')->insert($withholdingTypes);

        $this->command->info('✅ ' . count($withholdingTypes) . ' tipos de retención cargados exitosamente para Honduras');
    }
}
