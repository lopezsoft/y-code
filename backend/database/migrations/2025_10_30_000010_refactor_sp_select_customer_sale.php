<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Sprint 2: Refactorizar sp_select_customer_sale
     * 
     * Elimina dependencias a tablas DIAN (fe_tax_level, fe_tax_regime)
     * Los campos tp.tax_level_id y tp.tax_regime_id no existen en la tabla persons actual
     * 
     * CAMBIOS:
     * - Eliminar LEFT JOIN a fe_tax_level
     * - Eliminar LEFT JOIN a fe_tax_regime
     * - Eliminar campos tl.code AS tax_level y tg.description AS tax_regime del SELECT
     */
    public function up(): void
    {
        // Eliminar stored procedure existente
        DB::unprepared('DROP PROCEDURE IF EXISTS sp_select_customer_sale');

        // Recrear sin dependencias DIAN
        DB::unprepared(<<<'SQL'
CREATE PROCEDURE `sp_select_customer_sale`(IN `PSaleId` BIGINT)
COMMENT 'Obtiene datos completos del cliente de una venta (Honduras - Sin dependencias DIAN)'
BEGIN
    SELECT 
        tm.id, 
        RIGHT(CONCAT('00000000000', tm.invoice_nro), 9) AS invoice_nro, 
        tm.prefix AS prefix_invo, 
        IF(ISNULL(tp.full_name), (SELECT value FROM general_settings WHERE tag = 19), TRIM(tp.full_name)) AS customer_name, 
        tp.dv, 
        tp.identity_document_id, 
        tp.type_organization_id, 
        -- tp.tax_level_id,  -- ELIMINADO: Campo no existe en persons
        -- tp.tax_regime_id, -- ELIMINADO: Campo no existe en persons
        IF(ISNULL(tp.dni), 0, tp.dni) AS dni, 
        ti.document_name, 
        ti.abbrev, 
        tp.mobile, 
        tp.phone, 
        tp.location, 
        tp.address, 
        tp.postal_code, 
        tp.email, 
        tp.city_id, 
        tp.country_id, 
        tp.merchant_registration, 
        tc.city_code, 
        tc.name_city, 
        dp.name_departament, 
        co.abbreviation_A3, 
        co.country_name, 
        -- tl.code AS tax_level,    -- ELIMINADO: Dependencia DIAN
        -- tg.description AS tax_regime, -- ELIMINADO: Dependencia DIAN
        o.description AS organization 
    FROM sales_master AS tm
    LEFT JOIN customers_sale AS cs ON cs.sale_id = tm.id
    LEFT JOIN persons AS tp ON cs.customer_id = tp.id
    LEFT JOIN identity_documents AS ti ON tp.identity_document_id = ti.id
    LEFT JOIN cities AS tc ON tp.city_id = tc.id
    LEFT JOIN departments AS dp ON tc.departament_id = dp.id
    LEFT JOIN countries AS co ON dp.country_id = co.id
    -- LEFT JOIN fe_tax_level AS tl ON tp.tax_level_id = tl.id  -- ELIMINADO: Tabla DIAN legacy
    -- LEFT JOIN fe_tax_regime AS tg ON tp.tax_regime_id = tg.id -- ELIMINADO: Tabla DIAN legacy
    LEFT JOIN type_organization AS o ON tp.type_organization_id = o.id
    WHERE tm.active >= 1 AND tm.id = PSaleId;
END
SQL);

        DB::statement("
            -- Documentar cambio en log
            INSERT INTO migrations (migration, batch) 
            VALUES ('refactor_sp_select_customer_sale_remove_dian', 2)
            ON DUPLICATE KEY UPDATE batch = 2
        ");
    }

    /**
     * Revertir cambios: Restaurar SP con dependencias DIAN
     */
    public function down(): void
    {
        DB::unprepared('DROP PROCEDURE IF EXISTS sp_select_customer_sale');

        // Restaurar versión original con DIAN (para rollback)
        DB::unprepared(<<<'SQL'
CREATE PROCEDURE `sp_select_customer_sale`(IN `PSaleId` BIGINT)
BEGIN
    SELECT tm.id, RIGHT(CONCAT('00000000000',tm.invoice_nro),9) AS invoice_nro, tm.prefix AS prefix_invo, if(isnull(tp.full_name), (SELECT value FROM general_settings WHERE tag = 19), TRIM(tp.full_name)) AS customer_name, tp.dv, tp.identity_document_id, tp.type_organization_id, tp.tax_level_id, tp.tax_regime_id, if(isnull(tp.dni),0,tp.dni) AS dni, ti.document_name, ti.abbrev, tp.mobile, tp.phone, tp.location, tp.address, tp.postal_code, tp.email, tp.city_id, tp.country_id, tp.merchant_registration, tc.city_code, tc.name_city, dp.name_departament, co.abbreviation_A3, co.country_name, tl.code AS tax_level, tg.description AS tax_regime, o.description AS organization FROM sales_master AS tm LEFT JOIN customers_sale AS cs ON cs.sale_id = tm.id LEFT JOIN persons AS tp ON cs.customer_id = tp.id LEFT JOIN identity_documents AS ti ON tp.identity_document_id = ti.id LEFT JOIN cities AS tc ON tp.city_id = tc.id LEFT JOIN departments AS dp ON tc.departament_id = dp.id LEFT JOIN countries AS co ON dp.country_id = co.id LEFT JOIN fe_tax_level AS tl ON tp.tax_level_id = tl.id LEFT JOIN fe_tax_regime AS tg ON tp.tax_regime_id = tg.id LEFT JOIN type_organization AS o ON tp.type_organization_id = o.id WHERE tm.active >= 1 AND tm.id = PSaleId;
END
SQL);
    }
};
