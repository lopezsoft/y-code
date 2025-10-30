<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CriticalDataSeeder extends Seeder
{
    /**
     * Seed critical master data from original SQL files
     * Adapting from original structure to simplified multi-tenant schema
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        
        try {
            $this->command->info('🔄 Cargando datos maestros críticos...');
            
            $this->seedCountries();
            $this->seedCurrency();
            $this->seedTaxRates();
            $this->seedAccountingGroups();
            $this->seedIdentityDocuments();
            $this->seedTypePersons();
            $this->seedTypeOrganization();
            
        } finally {
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }
        
        $this->command->info('✅ Datos críticos cargados exitosamente');
    }

    /**
     * Seed essential countries (manual data - expandir con SQL import después)
     */
    private function seedCountries(): void
    {
        $countries = [
            ['country_code' => 'CO', 'country_name' => 'Colombia', 'timezone' => 'America/Bogota'],
            ['country_code' => 'US', 'country_name' => 'Estados Unidos', 'timezone' => 'America/New_York'],
            ['country_code' => 'MX', 'country_name' => 'México', 'timezone' => 'America/Mexico_City'],
            ['country_code' => 'ES', 'country_name' => 'España', 'timezone' => 'Europe/Madrid'],
            ['country_code' => 'AR', 'country_name' => 'Argentina', 'timezone' => 'America/Argentina/Buenos_Aires'],
            ['country_code' => 'CL', 'country_name' => 'Chile', 'timezone' => 'America/Santiago'],
            ['country_code' => 'PE', 'country_name' => 'Perú', 'timezone' => 'America/Lima'],
            ['country_code' => 'EC', 'country_name' => 'Ecuador', 'timezone' => 'America/Guayaquil'],
            ['country_code' => 'VE', 'country_name' => 'Venezuela', 'timezone' => 'America/Caracas'],
        ];

        $inserted = 0;
        foreach ($countries as $country) {
            $result = DB::table('countries')->insertOrIgnore($country);
            if ($result) $inserted++;
        }

        $this->command->info("✓ countries: {$inserted} registros");
    }

    /**
     * Seed essential currencies (manual data)
     */
    private function seedCurrency(): void
    {
        $currencies = [
            ['currency_code' => 'COP', 'currency_name' => 'Peso Colombiano', 'currency_symbol' => '$', 'exchange_rate' => 1.0, 'active' => true],
            ['currency_code' => 'USD', 'currency_name' => 'Dólar Estadounidense', 'currency_symbol' => '$', 'exchange_rate' => 4300.0, 'active' => true],
            ['currency_code' => 'EUR', 'currency_name' => 'Euro', 'currency_symbol' => '€', 'exchange_rate' => 4650.0, 'active' => true],
            ['currency_code' => 'MXN', 'currency_name' => 'Peso Mexicano', 'currency_symbol' => '$', 'exchange_rate' => 230.0, 'active' => true],
        ];

        $inserted = 0;
        foreach ($currencies as $curr) {
            $result = DB::table('currency_sys')->insertOrIgnore($curr);
            if ($result) $inserted++;
        }

        $this->command->info("✓ currency_sys: {$inserted} registros");
    }

    /**
     * Seed countries from original SQL (mapping 18 fields → 3 essential)
     */
    private function seedCountriesFromSQL(): void
    {
        $sqlFile = base_path('scripts sql/y-code.sql');
        
        if (!file_exists($sqlFile)) {
            $this->command->warn('⚠ Archivo y-code.sql no encontrado');
            return;
        }
        
        // Extract INSERT statements for countries - capture after VALUES keyword
        $sql = file_get_contents($sqlFile);
        
        if (!preg_match('/INSERT IGNORE INTO `countries`\s*\([^)]+\)\s*VALUES\s*(.+?);$/ms', $sql, $matches)) {
            $this->command->warn('⚠ No se encontraron datos de countries en SQL');
            return;
        }
        
        // Parse each row: (id,'continent','A2','A3','FIPS','NUTS','HASC','name','lang','langPC','phone','TLD',lat,lon,alt,'territory','img',active)
        preg_match_all("/\((\d+),'[^']*','([^']+)','[^']+','[^']+','[^']+','[^']+','([^']+)',/", $matches[1], $countries);
        
        $inserted = 0;
        for ($i = 0; $i < count($countries[0]); $i++) {
            $result = DB::table('countries')->insertOrIgnore([
                'country_code' => $countries[2][$i], // abbreviation_A2 → country_code
                'country_name' => $countries[3][$i],
                'timezone' => 'UTC', // Default timezone
            ]);
            if ($result) $inserted++;
        }
        
        $this->command->info("✓ countries: {$inserted} registros");
    }

    /**
     * Seed currency from original SQL (merging currency + currency_sys → simplified currency_sys)
     * Original: currency (id, CurrencyISO, CurrencyName, Symbol) + currency_sys (exchange_rate_value, national_currency)
     * Target: currency_sys (currency_code, currency_name, currency_symbol, exchange_rate, active)
     */
    private function seedCurrencyFromSQL(): void
    {
        $sqlFile = base_path('scripts sql/y-code.sql');
        
        if (!file_exists($sqlFile)) {
            return;
        }
        
        $sql = file_get_contents($sqlFile);
        
        // Extract currency base data - capture after VALUES
        preg_match('/INSERT IGNORE INTO `currency`\s*\([^)]+\)\s*VALUES\s*(.+?);$/ms', $sql, $currencyMatches);
        
        // Extract currency_sys exchange rates
        preg_match('/INSERT IGNORE INTO `currency_sys`\s*\([^)]+\)\s*VALUES\s*(.+?);$/ms', $sql, $ratesMatches);
        
        if (empty($currencyMatches[1])) {
            $this->command->warn('⚠ No se encontraron datos de currency en SQL');
            return;
        }
        
        // Parse currency_sys: (id, currency_id, exchange_rate, national, plural, singular, denomination, state)
        $exchangeRates = [];
        if (!empty($ratesMatches[1])) {
            preg_match_all("/\((\d+),\s*(\d+),\s*([^,]+),\s*\d,/", $ratesMatches[1], $rates);
            for ($i = 0; $i < count($rates[0]); $i++) {
                $exchangeRates[$rates[2][$i]] = (float)$rates[3][$i];
            }
        }
        
        // Parse currency: (id,'ISO','Lang','Name','Money','Symbol','image',active)
        preg_match_all("/\((\d+),\s*'([^']*)',\s*'[^']*',\s*'([^']*)',\s*'[^']*',\s*'([^']*)',/", $currencyMatches[1], $currencies);
        
        $inserted = 0;
        for ($i = 0; $i < count($currencies[0]); $i++) {
            $currencyId = $currencies[1][$i];
            
            $result = DB::table('currency_sys')->insertOrIgnore([
                'currency_code' => $currencies[2][$i] ?: 'XXX', // CurrencyISO → currency_code
                'currency_name' => $currencies[3][$i],
                'currency_symbol' => $currencies[4][$i] ?: '$',
                'exchange_rate' => $exchangeRates[$currencyId] ?? 1.0,
                'active' => isset($exchangeRates[$currencyId]),
            ]);
            if ($result) $inserted++;
        }
        
        $this->command->info("✓ currency_sys: {$inserted} registros");
    }

    /**
     * Seed tax rates (simplified - manual data)
     */
    private function seedTaxRates(): void
    {
        $taxRates = [
            ['tax_name' => 'IVA 19%', 'tax_code' => 'IVA19', 'rate' => 19.00, 'description' => 'Impuesto al Valor Agregado del 19%', 'active' => true],
            ['tax_name' => 'IVA 5%', 'tax_code' => 'IVA5', 'rate' => 5.00, 'description' => 'Impuesto al Valor Agregado del 5%', 'active' => true],
            ['tax_name' => 'IVA 0%', 'tax_code' => 'IVA0', 'rate' => 0.00, 'description' => 'Sin IVA', 'active' => true],
            ['tax_name' => 'Retención 2.5%', 'tax_code' => 'RET25', 'rate' => 2.50, 'description' => 'Retención en la Fuente 2.5%', 'active' => true],
        ];

        $inserted = 0;
        foreach ($taxRates as $tax) {
            $result = DB::table('tax_rates')->insertOrIgnore($tax);
            if ($result) $inserted++;
        }

        $this->command->info("✓ tax_rates: {$inserted} registros");
    }

    /**
     * Seed accounting groups (simplified structure)
     */
    private function seedAccountingGroups(): void
    {
        $groups = [
            ['group_code' => '1', 'group_name' => 'ACTIVO', 'description' => 'Recursos controlados', 'order' => 1, 'active' => true],
            ['group_code' => '2', 'group_name' => 'PASIVO', 'description' => 'Obligaciones presentes', 'order' => 2, 'active' => true],
            ['group_code' => '3', 'group_name' => 'PATRIMONIO', 'description' => 'Participación residual', 'order' => 3, 'active' => true],
            ['group_code' => '4', 'group_name' => 'INGRESOS', 'description' => 'Incrementos en beneficios económicos', 'order' => 4, 'active' => true],
            ['group_code' => '5', 'group_name' => 'GASTOS', 'description' => 'Decrementos en beneficios económicos', 'order' => 5, 'active' => true],
            ['group_code' => '6', 'group_name' => 'COSTOS', 'description' => 'Costo de ventas', 'order' => 6, 'active' => true],
        ];

        $inserted = 0;
        foreach ($groups as $group) {
            $result = DB::table('accounting_groups')->insertOrIgnore($group);
            if ($result) $inserted++;
        }

        $this->command->info("✓ accounting_groups: {$inserted} registros");
    }

    /**
     * Seed identity documents (verified structure)
     */
    private function seedIdentityDocuments(): void
    {
        $documents = [
            ['code' => 'CC', 'name' => 'Cédula de Ciudadanía', 'abbreviation' => 'CC', 'is_active' => true],
            ['code' => 'CE', 'name' => 'Cédula de Extranjería', 'abbreviation' => 'CE', 'is_active' => true],
            ['code' => 'NIT', 'name' => 'Número de Identificación Tributaria', 'abbreviation' => 'NIT', 'is_active' => true],
            ['code' => 'TI', 'name' => 'Tarjeta de Identidad', 'abbreviation' => 'TI', 'is_active' => true],
            ['code' => 'PP', 'name' => 'Pasaporte', 'abbreviation' => 'PP', 'is_active' => true],
        ];

        $inserted = 0;
        foreach ($documents as $doc) {
            $result = DB::table('identity_documents')->insertOrIgnore($doc);
            if ($result) $inserted++;
        }

        $this->command->info("✓ identity_documents: {$inserted} registros");
    }

    /**
     * Seed type of persons (verified structure)
     */
    private function seedTypePersons(): void
    {
        $types = [
            ['code' => 'PN', 'name' => 'Persona Natural', 'is_active' => true],
            ['code' => 'PJ', 'name' => 'Persona Jurídica', 'is_active' => true],
            ['code' => 'EP', 'name' => 'Entidad Pública', 'is_active' => true],
        ];

        $inserted = 0;
        foreach ($types as $type) {
            $result = DB::table('type_persons')->insertOrIgnore($type);
            if ($result) $inserted++;
        }

        $this->command->info("✓ type_persons: {$inserted} registros");
    }

    /**
     * Seed type of organization (verified structure)
     */
    private function seedTypeOrganization(): void
    {
        $types = [
            ['code' => 'SA', 'name' => 'Sociedad Anónima', 'is_active' => true],
            ['code' => 'SAS', 'name' => 'Sociedad por Acciones Simplificada', 'is_active' => true],
            ['code' => 'LTDA', 'name' => 'Sociedad Limitada', 'is_active' => true],
            ['code' => 'UNIP', 'name' => 'Unipersonal', 'is_active' => true],
        ];

        $inserted = 0;
        foreach ($types as $type) {
            $result = DB::table('type_organization')->insertOrIgnore($type);
            if ($result) $inserted++;
        }

        $this->command->info("✓ type_organization: {$inserted} registros");
    }
}
