<?php

namespace Database\Seeders;

use App\Models\AccountingGroup;
use Illuminate\Database\Seeder;

/**
 * ✅ ACCOUNTING GROUP SEEDER
 * 
 * Carga los grupos contables base (estructura del plan de cuentas)
 * Sigue el modelo contable estándar:
 * - Activos (Circulantes, No Circulantes)
 * - Pasivos (Circulantes, No Circulantes)  
 * - Patrimonio
 * - Ingresos
 * - Gastos
 * 
 * Ejecución:
 * php artisan db:seed --class=AccountingGroupSeeder
 */
class AccountingGroupSeeder extends Seeder
{
    public function run(): void
    {
        $groups = [
            // ACTIVOS
            [
                'group_code' => 'AC-C',
                'group_name' => 'Activos Circulantes',
                'description' => 'Activos que se convertirán a efectivo en menos de 1 año',
            ],
            [
                'group_code' => 'AC-NC',
                'group_name' => 'Activos No Circulantes',
                'description' => 'Activos de largo plazo (más de 1 año)',
            ],
            
            // PASIVOS
            [
                'group_code' => 'PA-C',
                'group_name' => 'Pasivos Circulantes',
                'description' => 'Obligaciones a corto plazo (menos de 1 año)',
            ],
            [
                'group_code' => 'PA-NC',
                'group_name' => 'Pasivos No Circulantes',
                'description' => 'Obligaciones a largo plazo (más de 1 año)',
            ],
            
            // PATRIMONIO
            [
                'group_code' => 'PAT',
                'group_name' => 'Patrimonio',
                'description' => 'Capital y Reservas',
            ],
            [
                'group_code' => 'PAT-UTIL',
                'group_name' => 'Utilidades Retenidas',
                'description' => 'Ganancias acumuladas no distribuidas',
            ],
            
            // INGRESOS
            [
                'group_code' => 'ING-VENTAS',
                'group_name' => 'Ventas de Bienes y Servicios',
                'description' => 'Ingresos por venta de productos y servicios',
            ],
            [
                'group_code' => 'ING-SERVICIOS',
                'group_name' => 'Ingresos por Servicios',
                'description' => 'Ingresos por prestación de servicios',
            ],
            [
                'group_code' => 'ING-FINANCIERO',
                'group_name' => 'Ingresos Financieros',
                'description' => 'Intereses, dividendos y comisiones por cobrar',
            ],
            [
                'group_code' => 'ING-OTROS',
                'group_name' => 'Otros Ingresos',
                'description' => 'Ingresos no operacionales y extraordinarios',
            ],
            
            // GASTOS
            [
                'group_code' => 'GAST-COSTO-VENTA',
                'group_name' => 'Costo de Ventas',
                'description' => 'Costo directo de bienes vendidos',
            ],
            [
                'group_code' => 'GAST-ADMIN',
                'group_name' => 'Gastos Administrativos',
                'description' => 'Salarios, alquileres, servicios administrativos',
            ],
            [
                'group_code' => 'GAST-VENTA',
                'group_name' => 'Gastos de Ventas',
                'description' => 'Publicidad, comisiones, transporte de ventas',
            ],
            [
                'group_code' => 'GAST-FINANCIERO',
                'group_name' => 'Gastos Financieros',
                'description' => 'Intereses pagados y otros gastos financieros',
            ],
            [
                'group_code' => 'GAST-OTROS',
                'group_name' => 'Otros Gastos',
                'description' => 'Gastos no operacionales y extraordinarios',
            ],
            [
                'group_code' => 'GAST-DEPREC',
                'group_name' => 'Depreciación y Amortización',
                'description' => 'Gasto por depreciación de activos y amortización de intangibles',
            ],
            
            // IMPUESTOS
            [
                'group_code' => 'IMP-ISV',
                'group_name' => 'ISV (Impuesto sobre Ventas)',
                'description' => 'ISV por pagar en Honduras',
            ],
            [
                'group_code' => 'IMP-RENTA',
                'group_name' => 'Impuesto sobre la Renta',
                'description' => 'Impuesto a la renta a pagar',
            ],
            [
                'group_code' => 'IMP-SOLIDARIO',
                'group_name' => 'Impuesto de Solidaridad',
                'description' => 'Impuesto de solidaridad Honduras',
            ],
        ];

        foreach ($groups as $group) {
            AccountingGroup::firstOrCreate(
                ['group_code' => $group['group_code']],
                [
                    'group_name' => $group['group_name'],
                    'description' => $group['description'],
                ]
            );
        }

        $this->command->info('✅ 19 grupos contables cargados exitosamente');
    }
}
