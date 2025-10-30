<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WithholdingTypesSeeder extends Seeder
{
    /**
     * Seed Withholding Types Table - TIPOS DE RETENCIÓN HONDURAS
     * 
     * Catálogo de retenciones ISR e ISV según regulación SAR
     * Datos globales independientes de empresa
     * 
     * @return void
     */
    public function run()
    {
        $withholdingTypes = [
            // ========== RETENCIONES ISR (Impuesto sobre la Renta) ==========
            
            [
                'code' => 'RET-ISR-10',
                'name' => 'Retención ISR 10% - Honorarios Profesionales',
                'description' => 'Retención del 10% sobre honorarios profesionales, servicios técnicos y consultorías. Aplica a médicos, abogados, ingenieros, consultores, etc.',
                'rate' => 10.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-HON-10',
                'min_threshold' => 0.00,
                'applies_to' => 'services',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'code' => 'RET-ISR-12.5',
                'name' => 'Retención ISR 12.5% - Arrendamientos',
                'description' => 'Retención del 12.5% sobre pagos de arrendamiento de bienes inmuebles (alquiler de locales, oficinas, bodegas)',
                'rate' => 12.5000,
                'is_percentage' => true,
                'sar_code' => 'ISR-ARR-125',
                'min_threshold' => 0.00,
                'applies_to' => 'rent',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'code' => 'RET-ISR-15',
                'name' => 'Retención ISR 15% - Servicios Generales',
                'description' => 'Retención del 15% sobre servicios generales no profesionales (transporte, vigilancia, limpieza, mantenimiento)',
                'rate' => 15.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-SRV-15',
                'min_threshold' => 0.00,
                'applies_to' => 'services',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'code' => 'RET-ISR-25',
                'name' => 'Retención ISR 25% - No Residentes',
                'description' => 'Retención del 25% sobre pagos a proveedores no residentes en Honduras (servicios del exterior, regalías, asistencia técnica internacional)',
                'rate' => 25.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-NORES-25',
                'min_threshold' => 0.00,
                'applies_to' => 'all',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'code' => 'RET-ISR-SALARIO',
                'name' => 'Retención ISR - Salarios (Tabla Progresiva)',
                'description' => 'Retención progresiva sobre salarios según tabla SAR (0% a 25% según tramo de ingreso)',
                'rate' => 0.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-SAL-PROG',
                'min_threshold' => 0.00,
                'applies_to' => 'salary',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // ========== RETENCIONES ISV (Impuesto sobre Ventas) ==========
            
            [
                'code' => 'RET-ISV-100',
                'name' => 'Retención ISV 100% - Agente Retenedor Estado',
                'description' => 'Retención del 100% del ISV cuando el comprador es agente retenedor del Estado (instituciones gubernamentales)',
                'rate' => 100.0000,
                'is_percentage' => true,
                'sar_code' => 'ISV-RET-100',
                'min_threshold' => 0.00,
                'applies_to' => 'all',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // ========== RETENCIONES ESPECIALES ==========
            
            [
                'code' => 'RET-ISR-3',
                'name' => 'Retención ISR 3% - Compras al Sector Agropecuario',
                'description' => 'Retención del 3% sobre compras de productos agropecuarios a pequeños productores',
                'rate' => 3.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-AGRO-3',
                'min_threshold' => 1000.00,
                'applies_to' => 'goods',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'code' => 'RET-ISR-5',
                'name' => 'Retención ISR 5% - Compras a Proveedores sin Factura',
                'description' => 'Retención del 5% sobre compras a proveedores que no pueden emitir factura fiscal',
                'rate' => 5.0000,
                'is_percentage' => true,
                'sar_code' => 'ISR-NOFAC-5',
                'min_threshold' => 0.00,
                'applies_to' => 'goods',
                'requires_certificate' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('withholding_types')->insert($withholdingTypes);

        $this->command->info('✅ ' . count($withholdingTypes) . ' tipos de retención de Honduras insertados correctamente');
        $this->command->info('📋 Categorías: ISR (10%, 12.5%, 15%, 25%, salarios, agro, sin factura), ISV (100%)');
    }
}
