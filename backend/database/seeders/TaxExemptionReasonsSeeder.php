<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**
 * Seeder: TaxExemptionReasonsSeeder
 * 
 * Carga los códigos de exenciones tributarias según SAR (Honduras).
 * 
 * Sprint 2 - Catálogo de exenciones fiscales Honduras
 * 
 * CONTEXT:
 * - SAR Honduras define exenciones específicas diferentes a DIAN Colombia
 * - Cada exención tiene un ámbito de aplicación: product, customer, transaction
 * - Códigos basados en regulaciones fiscales hondureñas vigentes
 * 
 * STRUCTURE:
 * - code: Código interno del sistema (snake_case, English)
 * - sar_code: Código oficial SAR cuando aplique
 * - applies_to: Ámbito de aplicación
 * 
 * SOURCES:
 * - Ley de Equilibrio Financiero y Protección Social Honduras
 * - Reglamentos SAR sobre exenciones tributarias
 */
class TaxExemptionReasonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $exemptions = [
            // EXENCIONES POR PRODUCTO (Artículos/Servicios exentos de ISV)
            [
                'code' => 'BASIC_FOOD',
                'sar_code' => 'EXE-01',
                'name' => 'Alimentos de Primera Necesidad',
                'description' => 'Productos alimenticios básicos exentos de ISV según Art. 15 Ley ISV: arroz, frijol, maíz, harina, aceite, azúcar, sal, leche.',
                'applies_to' => 'product',
                'is_active' => 1,
            ],
            [
                'code' => 'MEDICINE',
                'sar_code' => 'EXE-02',
                'name' => 'Medicamentos',
                'description' => 'Medicamentos de consumo humano registrados en la Secretaría de Salud. Exención según Art. 15 Ley ISV.',
                'applies_to' => 'product',
                'is_active' => 1,
            ],
            [
                'code' => 'EDUCATION',
                'sar_code' => 'EXE-03',
                'name' => 'Servicios Educativos',
                'description' => 'Servicios de educación formal prestados por instituciones reconocidas. Exento de ISV según Art. 15 numeral 7.',
                'applies_to' => 'product',
                'is_active' => 1,
            ],
            [
                'code' => 'HEALTH',
                'sar_code' => 'EXE-04',
                'name' => 'Servicios de Salud',
                'description' => 'Servicios médicos y hospitalarios prestados por profesionales y establecimientos autorizados.',
                'applies_to' => 'product',
                'is_active' => 1,
            ],
            [
                'code' => 'BOOKS',
                'sar_code' => 'EXE-05',
                'name' => 'Libros y Material Educativo',
                'description' => 'Libros, revistas educativas y material didáctico. Exención cultural según Art. 15 Ley ISV.',
                'applies_to' => 'product',
                'is_active' => 1,
            ],
            
            // EXENCIONES POR CLIENTE (Entidades/Personas exentas)
            [
                'code' => 'GOV_ENTITY',
                'sar_code' => 'EXE-C01',
                'name' => 'Entidad Gubernamental',
                'description' => 'Instituciones del Estado, municipalidades y entidades descentralizadas. Exención según Ley de Contratación del Estado.',
                'applies_to' => 'customer',
                'is_active' => 1,
            ],
            [
                'code' => 'DIPLOMATIC',
                'sar_code' => 'EXE-C02',
                'name' => 'Misión Diplomática',
                'description' => 'Embajadas, consulados y organismos internacionales acreditados. Exención por tratados internacionales.',
                'applies_to' => 'customer',
                'is_active' => 1,
            ],
            [
                'code' => 'NGO',
                'sar_code' => 'EXE-C03',
                'name' => 'ONG Reconocida',
                'description' => 'Organizaciones sin fines de lucro registradas y autorizadas por SAR. Aplica según estatutos y fines sociales.',
                'applies_to' => 'customer',
                'is_active' => 1,
            ],
            
            // EXENCIONES POR TIPO DE TRANSACCIÓN
            [
                'code' => 'EXPORT',
                'sar_code' => 'EXE-T01',
                'name' => 'Exportación',
                'description' => 'Operaciones de exportación de bienes y servicios. Tasa 0% según régimen de exportaciones.',
                'applies_to' => 'transaction',
                'is_active' => 1,
            ],
            [
                'code' => 'FREE_ZONE',
                'sar_code' => 'EXE-T02',
                'name' => 'Zona Franca',
                'description' => 'Operaciones en zonas francas o bajo regímenes especiales (ZOLI, ZIP, RIT). Ley de Zonas Libres.',
                'applies_to' => 'transaction',
                'is_active' => 1,
            ],
            [
                'code' => 'TEMPORARY_IMPORT',
                'sar_code' => 'EXE-T03',
                'name' => 'Importación Temporal',
                'description' => 'Bienes ingresados temporalmente bajo garantía. Exención condicionada a reexportación.',
                'applies_to' => 'transaction',
                'is_active' => 1,
            ],
        ];

        foreach ($exemptions as $exemption) {
            DB::table('tax_exemption_reasons')->insert(array_merge($exemption, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }

        // Log resultado
        $count = count($exemptions);
        echo "✅ {$count} exenciones tributarias SAR Honduras cargadas exitosamente\n";
        echo "   - Productos exentos: 5\n";
        echo "   - Clientes exentos: 3\n";
        echo "   - Transacciones exentas: 3\n";
    }
}
