<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * ORDEN CRÍTICO:
     * 1. TributesSeeder (maestro - independiente)
     * 2. TaxRatesSeeder (detalle - depende de tributes)
     * 3. WithholdingTypesSeeder (maestro retenciones - independiente)
     * 
     * @return void
     */
    public function run()
    {
        // Datos maestros de impuestos y retenciones Honduras
        $this->call([
            TributesSeeder::class,
            TaxRatesSeeder::class,
            WithholdingTypesSeeder::class,
        ]);
        
        $this->command->info('✅ Seeders ejecutados correctamente');
        $this->command->info('📊 Base de datos inicializada con datos fiscales de Honduras');
        $this->command->info('   - Tributos: ISV, ISR, retenciones');
        $this->command->info('   - Tasas: 8 configuraciones');
        $this->command->info('   - Tipos de retención: 9 tipos ISR/ISV');
    }
}
