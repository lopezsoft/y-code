<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TributesSeeder extends Seeder
{
    /**
     * Seed Tributes Table - MAESTRO DE IMPUESTOS HONDURAS
     * 
     * Catálogo de tipos de tributos según SAR (Servicio de Administración de Rentas)
     * Datos globales independientes de empresa
     * 
     * @return void
     */
    public function run()
    {
        $tributes = [
            // ========== IMPUESTO SOBRE VENTAS (ISV) ==========
            [
                'code' => 'ISV',
                'name' => 'Impuesto sobre Ventas',
                'percentage' => 15.0000,
                'description' => 'Impuesto sobre Ventas estándar en Honduras (equivalente a IVA). Tasa vigente: 15%',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'ISV-EXENTO',
                'name' => 'ISV - Exento',
                'percentage' => 0.0000,
                'description' => 'Productos/servicios exentos de ISV (canasta básica, medicamentos, educación)',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'ISV-EXPORTACION',
                'name' => 'ISV - Exportación (0%)',
                'percentage' => 0.0000,
                'description' => 'Tasa 0% para exportaciones (permite crédito fiscal)',
                'category' => 'sales_tax',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== IMPUESTO SOBRE LA RENTA (ISR) ==========
            [
                'code' => 'ISR',
                'name' => 'Impuesto sobre la Renta',
                'percentage' => 25.0000,
                'description' => 'ISR para personas jurídicas (tasa general)',
                'category' => 'income_tax',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== RETENCIONES ISR ==========
            [
                'code' => 'RET-ISR-10',
                'name' => 'Retención ISR 10% - Servicios Profesionales',
                'percentage' => 10.0000,
                'description' => 'Retención del 10% sobre honorarios profesionales y servicios técnicos',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'RET-ISR-12.5',
                'name' => 'Retención ISR 12.5% - Arrendamientos',
                'percentage' => 12.5000,
                'description' => 'Retención del 12.5% sobre pagos de arrendamiento de bienes inmuebles',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'RET-ISR-15',
                'name' => 'Retención ISR 15% - Servicios Generales',
                'percentage' => 15.0000,
                'description' => 'Retención del 15% sobre servicios generales no profesionales',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'RET-ISR-25',
                'name' => 'Retención ISR 25% - No Residentes',
                'percentage' => 25.0000,
                'description' => 'Retención del 25% sobre pagos a no residentes',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 'RET-ISR-SALARIOS',
                'name' => 'Retención ISR - Salarios (Progresiva)',
                'percentage' => 0.0000,
                'description' => 'Retención progresiva sobre salarios según tabla SAR (0% a 25%)',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== RETENCIÓN ISV ==========
            [
                'code' => 'RET-ISV-100',
                'name' => 'Retención ISV 100% - Agente Retenedor',
                'percentage' => 100.0000,
                'description' => 'Retención del 100% del ISV cuando el comprador es agente retenedor del Estado',
                'category' => 'withholding',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== IMPUESTOS MUNICIPALES ==========
            [
                'code' => 'IMP-MUNICIPAL',
                'name' => 'Impuesto Municipal',
                'percentage' => 0.0000,
                'description' => 'Impuestos municipales variables según municipio (típicamente sobre ventas o ingresos)',
                'category' => 'municipal',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ========== IMPUESTOS ESPECIALES ==========
            [
                'code' => 'IMP-SELECTIVO-CONSUMO',
                'name' => 'Impuesto Selectivo al Consumo',
                'percentage' => 0.0000,
                'description' => 'Impuesto selectivo sobre productos específicos (bebidas alcohólicas, tabaco, combustibles)',
                'category' => 'special',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('tributes')->insert($tributes);

        $this->command->info('✅ ' . count($tributes) . ' tributos de Honduras insertados correctamente');
        $this->command->info('📋 Categorías: ISV, ISR, Retenciones, Municipales, Especiales');
    }
}
