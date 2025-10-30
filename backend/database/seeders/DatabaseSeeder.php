<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * ✅ DATABASE SEEDER
 * 
 * Orquesta la ejecución de todos los seeders
 * Orden de ejecución:
 * 1. CountrySeeder (datos globales)
 * 2. CurrencySeeder (datos globales)
 * 3. TributesSeeder (tributos maestros Honduras)
 * 4. TaxRatesSeeder (tasas de impuestos Honduras)
 * 5. WithholdingTypesSeeder (tipos de retención Honduras)
 * 6. TaxRateSeeder (legacy - puede eliminarse si no se usa)
 * 7. AccountingGroupSeeder (datos globales)
 * 
 * Ejecución:
 * php artisan db:seed
 * php artisan db:seed --class=DatabaseSeeder
 */
class DatabaseSeeder extends Seeder
{
    /**
     * Ejecutar los seeders de la base de datos.
     */
    public function run(): void
    {
        $this->call([
            CountrySeeder::class,
            CurrencySeeder::class,
            TributesSeeder::class,        // NUEVO: Tributos Honduras
            TaxRatesSeeder::class,        // NUEVO: Tasas impuestos Honduras
            WithholdingTypesSeeder::class, // NUEVO: Tipos retención Honduras
            TaxRateSeeder::class,          // Legacy (revisar si se usa)
            AccountingGroupSeeder::class,
        ]);

        $this->command->info('✅ Todas las semillas ejecutadas exitosamente');
    }
}
