<?php

namespace Database\Seeders;

use App\Models\TaxRate;
use Illuminate\Database\Seeder;

/**
 * ✅ TAX RATE SEEDER
 * 
 * Carga tasas de impuestos para Honduras
 * ISV (Impuesto sobre Ventas) = 15%
 * Impuesto de Solidaridad, IVA regional, etc.
 * 
 * Ejecución:
 * php artisan db:seed --class=TaxRateSeeder
 */
class TaxRateSeeder extends Seeder
{
    public function run(): void
    {
        $taxes = [
            // Honduras - ISV (Impuesto sobre Ventas)
            [
                'tax_code' => 'ISV-STANDARD',
                'tax_name' => 'ISV Estándar (Honduras)',
                'rate' => 15.00,
                'description' => 'Impuesto sobre Ventas - Tasa Estándar',
            ],
            [
                'tax_code' => 'ISV-REDUCED',
                'tax_name' => 'ISV Reducido (Honduras)',
                'rate' => 3.00,
                'description' => 'Impuesto sobre Ventas - Productos Básicos',
            ],
            [
                'tax_code' => 'ISV-ZERO',
                'tax_name' => 'ISV Exento (Honduras)',
                'rate' => 0.00,
                'description' => 'Impuesto sobre Ventas - Productos Exentos',
            ],
            
            // Impuesto de Solidaridad (Honduras)
            [
                'tax_code' => 'SOLIDARIO',
                'tax_name' => 'Impuesto de Solidaridad (Honduras)',
                'rate' => 2.50,
                'description' => 'Impuesto sobre bienes y servicios específicos',
            ],
            
            // IVA (aplicable en Centroamérica)
            [
                'tax_code' => 'IVA-STANDARD',
                'tax_name' => 'IVA Estándar',
                'rate' => 15.00,
                'description' => 'Impuesto al Valor Agregado - Tasa Estándar',
            ],
            [
                'tax_code' => 'IVA-REDUCED',
                'tax_name' => 'IVA Reducido',
                'rate' => 5.00,
                'description' => 'Impuesto al Valor Agregado - Tasa Reducida',
            ],
            
            // Retención en la fuente (Honduras)
            [
                'tax_code' => 'RET-RENTA',
                'tax_name' => 'Retención Renta',
                'rate' => 10.00,
                'description' => 'Retención en la fuente - Impuesto sobre la Renta',
            ],
            [
                'tax_code' => 'RET-IVA',
                'tax_name' => 'Retención IVA',
                'rate' => 3.00,
                'description' => 'Retención en la fuente - IVA',
            ],
            
            // Impuesto de Timbres y Registro (Honduras)
            [
                'tax_code' => 'TIMBRES',
                'tax_name' => 'Timbres y Registro',
                'rate' => 0.50,
                'description' => 'Impuesto de Timbres y Registro (variable por monto)',
            ],
            
            // Impuesto a la Gasolina y Combustibles
            [
                'tax_code' => 'IMP-COMBUSTIBLE',
                'tax_name' => 'Impuesto a Combustibles',
                'rate' => 5.00,
                'description' => 'Impuesto especial sobre combustibles',
            ],
            
            // Impuesto a bebidas alcohólicas
            [
                'tax_code' => 'IMP-ALCOHOL',
                'tax_name' => 'Impuesto a Bebidas Alcohólicas',
                'rate' => 20.00,
                'description' => 'Impuesto selectivo a bebidas alcohólicas',
            ],
            
            // Impuesto a cigarrillos
            [
                'tax_code' => 'IMP-CIGARRILLOS',
                'tax_name' => 'Impuesto a Cigarrillos',
                'rate' => 16.50,
                'description' => 'Impuesto selectivo a cigarrillos',
            ],
            
            // Impuesto inmobiliario (Honduras)
            [
                'tax_code' => 'IMPUESTO-INMUEBLE',
                'tax_name' => 'Impuesto Inmobiliario',
                'rate' => 1.00,
                'description' => 'Impuesto anual sobre bienes inmuebles',
            ],
            
            // Sin impuesto (para items que no aplica)
            [
                'tax_code' => 'EXENTO',
                'tax_name' => 'Exento de Impuestos',
                'rate' => 0.00,
                'description' => 'Ítem exento de impuestos',
            ],
        ];

        foreach ($taxes as $tax) {
            TaxRate::firstOrCreate(
                ['tax_code' => $tax['tax_code']],
                [
                    'tax_name' => $tax['tax_name'],
                    'rate' => $tax['rate'],
                    'description' => $tax['description'],
                ]
            );
        }

        $this->command->info('✅ 14 tasas de impuestos cargadas exitosamente');
    }
}
