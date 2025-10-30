<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TributesSeeder extends Seeder
{
    /**
     * Seeder de Tributos Maestros para Honduras
     * 
     * Catálogo de tipos de impuestos según SAR (Servicio de Administración de Rentas)
     * Estos son los tributos principales que se aplican en Honduras
     */
    public function run(): void
    {
        $tributes = [
            // ============= IMPUESTOS SOBRE VENTAS =============
            [
                'code' => 'ISV',
                'name' => 'Impuesto sobre Ventas',
                'percentage' => 15.0000,
                'description' => 'Impuesto sobre Ventas estándar en Honduras (equivalente a IVA). Tasa general 15%.',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'ISV-EXENTO',
                'name' => 'ISV Exento',
                'percentage' => 0.0000,
                'description' => 'Productos/servicios exentos de ISV según Ley (medicinas, alimentos básicos, educación).',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'ISV-EXPORTACION',
                'name' => 'ISV Exportación (0%)',
                'percentage' => 0.0000,
                'description' => 'Tasa 0% aplicable a exportaciones de bienes y servicios.',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= IMPUESTO SOBRE LA RENTA =============
            [
                'code' => 'ISR',
                'name' => 'Impuesto sobre la Renta',
                'percentage' => 25.0000,
                'description' => 'Impuesto sobre la Renta para personas jurídicas. Tasa general 25%.',
                'category' => 'income_tax',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIONES ISR =============
            [
                'code' => 'RET-ISR-10',
                'name' => 'Retención ISR 10% - Honorarios Profesionales',
                'percentage' => 10.0000,
                'description' => 'Retención del 10% sobre honorarios profesionales y servicios técnicos.',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-12.5',
                'name' => 'Retención ISR 12.5% - Arrendamientos',
                'percentage' => 12.5000,
                'description' => 'Retención del 12.5% sobre arrendamientos de bienes inmuebles y muebles.',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-15',
                'name' => 'Retención ISR 15% - Servicios Generales',
                'percentage' => 15.0000,
                'description' => 'Retención del 15% sobre servicios generales (limpieza, seguridad, mantenimiento).',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'code' => 'RET-ISR-25',
                'name' => 'Retención ISR 25% - No Residentes',
                'percentage' => 25.0000,
                'description' => 'Retención del 25% sobre pagos a no residentes fiscales en Honduras.',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= RETENCIONES ISV =============
            [
                'code' => 'RET-ISV-100',
                'name' => 'Retención ISV 100% - Agente Retenedor Estado',
                'percentage' => 100.0000,
                'description' => 'Retención del 100% del ISV cuando el Estado es agente retenedor (ventas al gobierno).',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= IMPUESTOS MUNICIPALES =============
            [
                'code' => 'IMP-MUN',
                'name' => 'Impuesto Municipal',
                'percentage' => 0.0000,
                'description' => 'Impuestos municipales variables según municipio (industria y comercio).',
                'category' => 'municipal',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= IMPUESTOS SELECTIVOS AL CONSUMO =============
            [
                'code' => 'IESC',
                'name' => 'Impuesto Selectivo al Consumo',
                'percentage' => 0.0000,
                'description' => 'Impuesto selectivo sobre consumo específico (bebidas alcohólicas, tabaco, combustibles).',
                'category' => 'special',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            // ============= APORTACIONES SOCIALES =============
            [
                'code' => 'IHSS',
                'name' => 'Aporte IHSS (Instituto Hondureño de Seguridad Social)',
                'percentage' => 0.0000,
                'description' => 'Aportación patronal al IHSS (7% empleador + 3.5% empleado = 10.5% total).',
                'category' => 'special',
                'is_active' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        DB::table('tributes')->insert($tributes);

        $this->command->info('✅ ' . count($tributes) . ' tributos cargados exitosamente para Honduras');
    }
}
