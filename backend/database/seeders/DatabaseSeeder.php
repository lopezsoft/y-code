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
 * 3. TaxRateSeeder (datos globales)
 * 4. AccountingGroupSeeder (datos globales)
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
            TaxRateSeeder::class,
            AccountingGroupSeeder::class,
        ]);

        $this->command->info('✅ Todas las semillas ejecutadas exitosamente');
    }
}
