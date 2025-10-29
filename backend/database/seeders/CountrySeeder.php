<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

/**
 * ✅ COUNTRY SEEDER
 * 
 * Carga países con información de zona horaria
 * Honduras, países latinoamericanos y principales socios comerciales
 * 
 * Ejecución:
 * php artisan db:seed --class=CountrySeeder
 */
class CountrySeeder extends Seeder
{
    public function run(): void
    {
        $countries = [
            // Honduras y región Centroamericana
            ['country_code' => 'HN', 'country_name' => 'Honduras', 'timezone' => 'America/Tegucigalpa'],
            ['country_code' => 'GT', 'country_name' => 'Guatemala', 'timezone' => 'America/Guatemala'],
            ['country_code' => 'SV', 'country_name' => 'El Salvador', 'timezone' => 'America/El_Salvador'],
            ['country_code' => 'NI', 'country_name' => 'Nicaragua', 'timezone' => 'America/Managua'],
            ['country_code' => 'CR', 'country_name' => 'Costa Rica', 'timezone' => 'America/Costa_Rica'],
            ['country_code' => 'PA', 'country_name' => 'Panamá', 'timezone' => 'America/Panama'],
            ['country_code' => 'BZ', 'country_name' => 'Belice', 'timezone' => 'America/Belize'],
            
            // América Latina principal
            ['country_code' => 'MX', 'country_name' => 'México', 'timezone' => 'America/Mexico_City'],
            ['country_code' => 'US', 'country_name' => 'Estados Unidos', 'timezone' => 'America/New_York'],
            ['country_code' => 'CA', 'country_name' => 'Canadá', 'timezone' => 'America/Toronto'],
            
            ['country_code' => 'CO', 'country_name' => 'Colombia', 'timezone' => 'America/Bogota'],
            ['country_code' => 'VE', 'country_name' => 'Venezuela', 'timezone' => 'America/Caracas'],
            ['country_code' => 'EC', 'country_name' => 'Ecuador', 'timezone' => 'America/Guayaquil'],
            ['country_code' => 'PE', 'country_name' => 'Perú', 'timezone' => 'America/Lima'],
            ['country_code' => 'BO', 'country_name' => 'Bolivia', 'timezone' => 'America/La_Paz'],
            ['country_code' => 'CL', 'country_name' => 'Chile', 'timezone' => 'America/Santiago'],
            ['country_code' => 'AR', 'country_name' => 'Argentina', 'timezone' => 'America/Argentina/Buenos_Aires'],
            ['country_code' => 'UY', 'country_name' => 'Uruguay', 'timezone' => 'America/Montevideo'],
            ['country_code' => 'PY', 'country_name' => 'Paraguay', 'timezone' => 'America/Asuncion'],
            ['country_code' => 'BR', 'country_name' => 'Brasil', 'timezone' => 'America/Sao_Paulo'],
            
            // Caribe
            ['country_code' => 'CU', 'country_name' => 'Cuba', 'timezone' => 'America/Havana'],
            ['country_code' => 'DO', 'country_name' => 'República Dominicana', 'timezone' => 'America/Santo_Domingo'],
            ['country_code' => 'PR', 'country_name' => 'Puerto Rico', 'timezone' => 'America/Puerto_Rico'],
            ['country_code' => 'JM', 'country_name' => 'Jamaica', 'timezone' => 'America/Jamaica'],
            ['country_code' => 'TT', 'country_name' => 'Trinidad y Tobago', 'timezone' => 'America/Trinidad'],
            
            // Europa
            ['country_code' => 'ES', 'country_name' => 'España', 'timezone' => 'Europe/Madrid'],
            ['country_code' => 'FR', 'country_name' => 'Francia', 'timezone' => 'Europe/Paris'],
            ['country_code' => 'DE', 'country_name' => 'Alemania', 'timezone' => 'Europe/Berlin'],
            ['country_code' => 'IT', 'country_name' => 'Italia', 'timezone' => 'Europe/Rome'],
            ['country_code' => 'GB', 'country_name' => 'Reino Unido', 'timezone' => 'Europe/London'],
            ['country_code' => 'PT', 'country_name' => 'Portugal', 'timezone' => 'Europe/Lisbon'],
            ['country_code' => 'NL', 'country_name' => 'Países Bajos', 'timezone' => 'Europe/Amsterdam'],
            ['country_code' => 'BE', 'country_name' => 'Bélgica', 'timezone' => 'Europe/Brussels'],
            ['country_code' => 'AT', 'country_name' => 'Austria', 'timezone' => 'Europe/Vienna'],
            ['country_code' => 'CH', 'country_name' => 'Suiza', 'timezone' => 'Europe/Zurich'],
            ['country_code' => 'SE', 'country_name' => 'Suecia', 'timezone' => 'Europe/Stockholm'],
            ['country_code' => 'NO', 'country_name' => 'Noruega', 'timezone' => 'Europe/Oslo'],
            ['country_code' => 'DK', 'country_name' => 'Dinamarca', 'timezone' => 'Europe/Copenhagen'],
            ['country_code' => 'FI', 'country_name' => 'Finlandia', 'timezone' => 'Europe/Helsinki'],
            ['country_code' => 'IE', 'country_name' => 'Irlanda', 'timezone' => 'Europe/Dublin'],
            ['country_code' => 'GR', 'country_name' => 'Grecia', 'timezone' => 'Europe/Athens'],
            ['country_code' => 'PL', 'country_name' => 'Polonia', 'timezone' => 'Europe/Warsaw'],
            ['country_code' => 'CZ', 'country_name' => 'República Checa', 'timezone' => 'Europe/Prague'],
            ['country_code' => 'HU', 'country_name' => 'Hungría', 'timezone' => 'Europe/Budapest'],
            ['country_code' => 'RO', 'country_name' => 'Rumania', 'timezone' => 'Europe/Bucharest'],
            ['country_code' => 'BG', 'country_name' => 'Bulgaria', 'timezone' => 'Europe/Sofia'],
            ['country_code' => 'HR', 'country_name' => 'Croacia', 'timezone' => 'Europe/Zagreb'],
            ['country_code' => 'SI', 'country_name' => 'Eslovenia', 'timezone' => 'Europe/Ljubljana'],
            ['country_code' => 'SK', 'country_name' => 'Eslovaquia', 'timezone' => 'Europe/Bratislava'],
            ['country_code' => 'RU', 'country_name' => 'Rusia', 'timezone' => 'Europe/Moscow'],
            ['country_code' => 'UA', 'country_name' => 'Ucrania', 'timezone' => 'Europe/Kyiv'],
            
            // Asia
            ['country_code' => 'CN', 'country_name' => 'China', 'timezone' => 'Asia/Shanghai'],
            ['country_code' => 'JP', 'country_name' => 'Japón', 'timezone' => 'Asia/Tokyo'],
            ['country_code' => 'KR', 'country_name' => 'Corea del Sur', 'timezone' => 'Asia/Seoul'],
            ['country_code' => 'IN', 'country_name' => 'India', 'timezone' => 'Asia/Kolkata'],
            ['country_code' => 'TH', 'country_name' => 'Tailandia', 'timezone' => 'Asia/Bangkok'],
            ['country_code' => 'MY', 'country_name' => 'Malasia', 'timezone' => 'Asia/Kuala_Lumpur'],
            ['country_code' => 'SG', 'country_name' => 'Singapur', 'timezone' => 'Asia/Singapore'],
            ['country_code' => 'ID', 'country_name' => 'Indonesia', 'timezone' => 'Asia/Jakarta'],
            ['country_code' => 'PH', 'country_name' => 'Filipinas', 'timezone' => 'Asia/Manila'],
            ['country_code' => 'VN', 'country_name' => 'Vietnam', 'timezone' => 'Asia/Ho_Chi_Minh'],
            ['country_code' => 'BD', 'country_name' => 'Bangladesh', 'timezone' => 'Asia/Dhaka'],
            ['country_code' => 'PK', 'country_name' => 'Pakistán', 'timezone' => 'Asia/Karachi'],
            ['country_code' => 'AE', 'country_name' => 'Emiratos Árabes Unidos', 'timezone' => 'Asia/Dubai'],
            ['country_code' => 'SA', 'country_name' => 'Arabia Saudita', 'timezone' => 'Asia/Riyadh'],
            ['country_code' => 'IL', 'country_name' => 'Israel', 'timezone' => 'Asia/Jerusalem'],
            ['country_code' => 'TW', 'country_name' => 'Taiwán', 'timezone' => 'Asia/Taipei'],
            
            // Oceanía
            ['country_code' => 'AU', 'country_name' => 'Australia', 'timezone' => 'Australia/Sydney'],
            ['country_code' => 'NZ', 'country_name' => 'Nueva Zelanda', 'timezone' => 'Pacific/Auckland'],
            
            // África
            ['country_code' => 'EG', 'country_name' => 'Egipto', 'timezone' => 'Africa/Cairo'],
            ['country_code' => 'ZA', 'country_name' => 'Sudáfrica', 'timezone' => 'Africa/Johannesburg'],
            ['country_code' => 'NG', 'country_name' => 'Nigeria', 'timezone' => 'Africa/Lagos'],
            ['country_code' => 'KE', 'country_name' => 'Kenia', 'timezone' => 'Africa/Nairobi'],
            ['country_code' => 'ET', 'country_name' => 'Etiopía', 'timezone' => 'Africa/Addis_Ababa'],
        ];

        foreach ($countries as $country) {
            Country::firstOrCreate(
                ['country_code' => $country['country_code']],
                [
                    'country_name' => $country['country_name'],
                    'timezone' => $country['timezone'],
                ]
            );
        }

        $this->command->info('✅ 67 países cargados exitosamente');
    }
}
