<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;

/**
 * ✅ CURRENCY SEEDER
 * 
 * Carga monedas principales
 * Honduras: HNL (lempira)
 * Regionales: USD, MXN, GTQ, CRC, NIO, PAB
 * Internacionales: EUR, GBP, JPY, CNY, CAD, AUD
 * 
 * Ejecución:
 * php artisan db:seed --class=CurrencySeeder
 */
class CurrencySeeder extends Seeder
{
    public function run(): void
    {
        $currencies = [
            // Honduras y Centroamérica
            ['currency_code' => 'HNL', 'currency_name' => 'Lempira Hondureño', 'currency_symbol' => 'L', 'exchange_rate' => 1.00],
            ['currency_code' => 'USD', 'currency_name' => 'Dólar Estadounidense', 'currency_symbol' => '$', 'exchange_rate' => 0.0404],
            ['currency_code' => 'MXN', 'currency_name' => 'Peso Mexicano', 'currency_symbol' => '$', 'exchange_rate' => 0.69],
            ['currency_code' => 'GTQ', 'currency_name' => 'Quetzal Guatemalteco', 'currency_symbol' => 'Q', 'exchange_rate' => 3.12],
            ['currency_code' => 'CRC', 'currency_name' => 'Colón Costarricense', 'currency_symbol' => '₡', 'exchange_rate' => 21.50],
            ['currency_code' => 'NIO', 'currency_name' => 'Córdoba Nicaragüeño', 'currency_symbol' => 'C', 'exchange_rate' => 1.41],
            ['currency_code' => 'PAB', 'currency_name' => 'Balboa Panameño', 'currency_symbol' => 'B', 'exchange_rate' => 0.0404],
            ['currency_code' => 'SVC', 'currency_name' => 'Dólar Salvadoreño', 'currency_symbol' => '$', 'exchange_rate' => 0.0404],
            
            // América Latina
            ['currency_code' => 'COP', 'currency_name' => 'Peso Colombiano', 'currency_symbol' => '$', 'exchange_rate' => 157.89],
            ['currency_code' => 'VES', 'currency_name' => 'Bolívar Venezolano', 'currency_symbol' => 'B', 'exchange_rate' => 0.01],
            ['currency_code' => 'PEN', 'currency_name' => 'Sol Peruano', 'currency_symbol' => 'S', 'exchange_rate' => 0.15],
            ['currency_code' => 'CLP', 'currency_name' => 'Peso Chileno', 'currency_symbol' => '$', 'exchange_rate' => 33.75],
            ['currency_code' => 'ARS', 'currency_name' => 'Peso Argentino', 'currency_symbol' => '$', 'exchange_rate' => 4.05],
            ['currency_code' => 'UYU', 'currency_name' => 'Peso Uruguayo', 'currency_symbol' => '$', 'exchange_rate' => 1.65],
            ['currency_code' => 'PYG', 'currency_name' => 'Guaraní Paraguayo', 'currency_symbol' => 'G', 'exchange_rate' => 271.50],
            ['currency_code' => 'BRL', 'currency_name' => 'Real Brasileño', 'currency_symbol' => 'R', 'exchange_rate' => 0.197],
            ['currency_code' => 'BOB', 'currency_name' => 'Boliviano', 'currency_symbol' => 'B', 'exchange_rate' => 0.28],
            ['currency_code' => 'ECU', 'currency_name' => 'Dólar Ecuatoriano', 'currency_symbol' => '$', 'exchange_rate' => 0.0404],
            
            // Europa
            ['currency_code' => 'EUR', 'currency_name' => 'Euro', 'currency_symbol' => '€', 'exchange_rate' => 0.0378],
            ['currency_code' => 'GBP', 'currency_name' => 'Libra Esterlina', 'currency_symbol' => '£', 'exchange_rate' => 0.0321],
            ['currency_code' => 'CHF', 'currency_name' => 'Franco Suizo', 'currency_symbol' => 'C', 'exchange_rate' => 0.0358],
            ['currency_code' => 'SEK', 'currency_name' => 'Corona Sueca', 'currency_symbol' => 'k', 'exchange_rate' => 0.378],
            ['currency_code' => 'NOK', 'currency_name' => 'Corona Noruega', 'currency_symbol' => 'k', 'exchange_rate' => 0.391],
            ['currency_code' => 'DKK', 'currency_name' => 'Corona Danesa', 'currency_symbol' => 'k', 'exchange_rate' => 0.278],
            ['currency_code' => 'PLN', 'currency_name' => 'Złoty Polaco', 'currency_symbol' => 'z', 'exchange_rate' => 0.162],
            ['currency_code' => 'CZK', 'currency_name' => 'Corona Checa', 'currency_symbol' => 'K', 'exchange_rate' => 0.937],
            ['currency_code' => 'HUF', 'currency_name' => 'Florín Húngaro', 'currency_symbol' => 'F', 'exchange_rate' => 13.95],
            ['currency_code' => 'RON', 'currency_name' => 'Leu Rumano', 'currency_symbol' => 'l', 'exchange_rate' => 0.188],
            
            // Asia
            ['currency_code' => 'CNY', 'currency_name' => 'Yuan Chino', 'currency_symbol' => '¥', 'exchange_rate' => 0.286],
            ['currency_code' => 'JPY', 'currency_name' => 'Yen Japonés', 'currency_symbol' => '¥', 'exchange_rate' => 6.05],
            ['currency_code' => 'KRW', 'currency_name' => 'Won Surcoreano', 'currency_symbol' => '₩', 'exchange_rate' => 51.85],
            ['currency_code' => 'INR', 'currency_name' => 'Rupia India', 'currency_symbol' => '₹', 'exchange_rate' => 3.35],
            ['currency_code' => 'THB', 'currency_name' => 'Baht Tailandés', 'currency_symbol' => '฿', 'exchange_rate' => 1.41],
            ['currency_code' => 'MYR', 'currency_name' => 'Ringgit Malayo', 'currency_symbol' => 'R', 'exchange_rate' => 0.189],
            ['currency_code' => 'SGD', 'currency_name' => 'Dólar Singapurense', 'currency_symbol' => 'S', 'exchange_rate' => 0.0536],
            ['currency_code' => 'IDR', 'currency_name' => 'Rupia Indonesia', 'currency_symbol' => 'R', 'exchange_rate' => 638.50],
            ['currency_code' => 'PHP', 'currency_name' => 'Peso Filipinense', 'currency_symbol' => '₱', 'exchange_rate' => 2.25],
            ['currency_code' => 'VND', 'currency_name' => 'Dong Vietnamita', 'currency_symbol' => '₫', 'exchange_rate' => 1010.25],
            ['currency_code' => 'PKR', 'currency_name' => 'Rupia Paquistaní', 'currency_symbol' => '₨', 'exchange_rate' => 10.65],
            ['currency_code' => 'AED', 'currency_name' => 'Dirham de EAU', 'currency_symbol' => 'D', 'exchange_rate' => 0.148],
            ['currency_code' => 'SAR', 'currency_name' => 'Rial Saudita', 'currency_symbol' => 'R', 'exchange_rate' => 0.1515],
            ['currency_code' => 'ILS', 'currency_name' => 'Sheqel Israelí', 'currency_symbol' => '₪', 'exchange_rate' => 0.150],
            ['currency_code' => 'TWD', 'currency_name' => 'Dólar Taiwanés', 'currency_symbol' => 'N', 'exchange_rate' => 1.27],
            ['currency_code' => 'HKD', 'currency_name' => 'Dólar Hongkonés', 'currency_symbol' => 'H', 'exchange_rate' => 0.316],
            
            // Oceanía
            ['currency_code' => 'AUD', 'currency_name' => 'Dólar Australiano', 'currency_symbol' => 'A', 'exchange_rate' => 0.0609],
            ['currency_code' => 'NZD', 'currency_name' => 'Dólar Neozelandés', 'currency_symbol' => 'N', 'exchange_rate' => 0.0668],
            
            // África
            ['currency_code' => 'EGP', 'currency_name' => 'Libra Egipcia', 'currency_symbol' => '£', 'exchange_rate' => 1.97],
            ['currency_code' => 'ZAR', 'currency_name' => 'Rand Sudafricano', 'currency_symbol' => 'R', 'exchange_rate' => 0.683],
            ['currency_code' => 'NGN', 'currency_name' => 'Naira Nigeriana', 'currency_symbol' => '₦', 'exchange_rate' => 49.75],
            ['currency_code' => 'KES', 'currency_name' => 'Chelín Keniano', 'currency_symbol' => 'K', 'exchange_rate' => 5.25],
        ];

        foreach ($currencies as $currency) {
            Currency::firstOrCreate(
                ['currency_code' => $currency['currency_code']],
                [
                    'currency_name' => $currency['currency_name'],
                    'currency_symbol' => $currency['currency_symbol'],
                    'exchange_rate' => $currency['exchange_rate'],
                ]
            );
        }

        $this->command->info('✅ 42 monedas cargadas exitosamente');
    }
}
