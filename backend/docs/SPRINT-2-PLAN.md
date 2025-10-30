# 📋 SPRINT 2: Limpieza DIAN y Adaptación Honduras

**Fecha:** 30 de Octubre, 2025  
**Objetivo:** Eliminar dependencias Colombia DIAN y fortalecer modelo Honduras

---

## 🎯 Objetivos del Sprint

1. ✅ Auditar todas las referencias a tablas DIAN
2. 🔄 Migrar lógica de tablas DIAN a campos Honduras
3. 🔄 Refactorizar stored procedures
4. 🔄 Eliminar tablas DIAN legacy
5. 🔄 Fortalecer integridad referencial
6. 🔄 Crear catálogo de exenciones SAR

---

## 📊 Auditoría Completada

### Tablas DIAN Identificadas (4 tablas):
```
1. fe_party_tax             - Régimen tributario de terceros
2. fe_tax_level             - Niveles tributarios DIAN
3. fe_tax_regime            - Regímenes: común/simplificado
4. fe_reference_price_codes - Códigos de precios de referencia
```

### Dependencias Encontradas:

#### ✅ Base de Datos:
- **Stored Procedure:** `sp_select_customer_sale` (línea 77)
  - Usa: `LEFT JOIN fe_tax_level AS tl ON tp.tax_level_id = tl.id`
  - Usa: `LEFT JOIN fe_tax_regime AS tg ON tp.tax_regime_id = tg.id`
  - Campos retornados: `tl.code AS tax_level`, `tg.description AS tax_regime`

#### ✅ Código de Aplicación:
- **app/**: ❌ Sin referencias (0 dependencias)
- **Models**: ❌ Sin modelos Eloquent para fe_* tables

#### ✅ Scripts de Desarrollo:
- Solo referencias en scripts de generación (no crítico)
- Scripts: analyze-migrations.php, generate-*.php, validate-migrations.php

---

## 🔄 Plan de Migración

### Paso 1: Adaptar Tabla `persons` (Clientes/Proveedores)

**Problema:** La tabla `persons` tiene campos:
- `tax_level_id` → FK a `fe_tax_level` (DIAN)
- `tax_regime_id` → FK a `fe_tax_regime` (DIAN)

**Solución:**
```sql
-- 1. Agregar nuevo campo tax_regime en persons
ALTER TABLE persons
  ADD COLUMN tax_regime ENUM('general','simplified','exempt') DEFAULT 'general' 
    COMMENT 'Régimen tributario Honduras: general=régimen general, simplified=régimen simplificado, exempt=exento'
  AFTER tax_regime_id;

-- 2. Migrar datos de fe_tax_regime a persons.tax_regime
UPDATE persons p
LEFT JOIN fe_tax_regime ftr ON p.tax_regime_id = ftr.id
SET p.tax_regime = CASE 
    WHEN ftr.code IN ('REGIMEN_COMUN', 'RC', 'COMMON') THEN 'general'
    WHEN ftr.code IN ('REGIMEN_SIMPLIFICADO', 'RS', 'SIMPLIFIED') THEN 'simplified'
    WHEN ftr.code IN ('EXENTO', 'EXEMPT') THEN 'exempt'
    ELSE 'general'
END
WHERE p.tax_regime_id IS NOT NULL;

-- 3. Eliminar campos legacy
ALTER TABLE persons
  DROP FOREIGN KEY IF EXISTS persons_tax_level_id_foreign,
  DROP FOREIGN KEY IF EXISTS persons_tax_regime_id_foreign,
  DROP COLUMN tax_level_id,
  DROP COLUMN tax_regime_id;
```

### Paso 2: Refactorizar `sp_select_customer_sale`

**ANTES (con DIAN):**
```sql
SELECT ..., tl.code AS tax_level, tg.description AS tax_regime, ...
FROM sales_master AS tm
LEFT JOIN fe_tax_level AS tl ON tp.tax_level_id = tl.id
LEFT JOIN fe_tax_regime AS tg ON tp.tax_regime_id = tg.id
...
```

**DESPUÉS (Honduras):**
```sql
SELECT ..., tp.tax_regime AS tax_regime, ...
FROM sales_master AS tm
-- Eliminar JOINs a fe_tax_level y fe_tax_regime
...
```

### Paso 3: Eliminar Tablas DIAN

```sql
DROP TABLE IF EXISTS fe_party_tax;
DROP TABLE IF EXISTS fe_reference_price_codes;
DROP TABLE IF EXISTS fe_tax_level;
DROP TABLE IF EXISTS fe_tax_regime;
```

### Paso 4: Agregar FKs a tax_rates

```sql
ALTER TABLE tax_rates
  ADD CONSTRAINT fk_tax_rates_tribute 
    FOREIGN KEY (tribute_id) REFERENCES tributes(id) ON DELETE RESTRICT,
  ADD CONSTRAINT fk_tax_rates_company 
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE;
```

### Paso 5: Crear Catálogo de Exenciones SAR

```sql
CREATE TABLE tax_exemption_reasons (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(150) NOT NULL,
  description TEXT NULL,
  sar_code VARCHAR(50) NULL COMMENT 'Código oficial SAR',
  applies_to ENUM('product','customer','transaction') NOT NULL,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## 📁 Migraciones a Crear

### 1. `2025_10_30_000010_adapt_persons_for_honduras.php`
- Agregar campo `tax_regime` enum
- Migrar datos de fe_tax_regime
- Eliminar campos legacy tax_level_id, tax_regime_id

### 2. `2025_10_30_000011_update_sp_select_customer_sale.php`
- DROP PROCEDURE sp_select_customer_sale
- CREATE PROCEDURE sp_select_customer_sale (versión Honduras)

### 3. `2025_10_30_000012_drop_dian_tables.php`
- DROP TABLE fe_party_tax
- DROP TABLE fe_reference_price_codes
- DROP TABLE fe_tax_level
- DROP TABLE fe_tax_regime

### 4. `2025_10_30_000013_add_foreign_keys_to_tax_rates.php`
- ALTER TABLE tax_rates ADD CONSTRAINT fk_tax_rates_tribute
- ALTER TABLE tax_rates ADD CONSTRAINT fk_tax_rates_company

### 5. `2025_10_30_000014_create_tax_exemption_reasons_table.php`
- CREATE TABLE tax_exemption_reasons
- Seeder con exenciones SAR Honduras

---

## ✅ Checklist de Ejecución

- [ ] Crear migración: adapt_persons_for_honduras
- [ ] Crear migración: update_sp_select_customer_sale
- [ ] Crear migración: drop_dian_tables
- [ ] Crear migración: add_foreign_keys_to_tax_rates
- [ ] Crear migración: create_tax_exemption_reasons
- [ ] Crear seeder: TaxExemptionReasonsSeeder
- [ ] Backup de base de datos antes de ejecutar
- [ ] Ejecutar: php artisan migrate
- [ ] Ejecutar: php artisan db:seed --class=TaxExemptionReasonsSeeder
- [ ] Validar: SHOW FULL COLUMNS FROM persons
- [ ] Validar: SELECT * FROM tax_exemption_reasons
- [ ] Validar: Ejecutar sp_select_customer_sale(1)
- [ ] Commit cambios Sprint 2
- [ ] Actualizar documentación

---

## 🎯 Resultado Esperado

### Antes (Sprint 1):
```
✓ 4 tablas DIAN (fe_*)
✓ Stored procedure con JOINs a DIAN
✓ persons.tax_level_id, persons.tax_regime_id
✗ Sin FKs en tax_rates
✗ Sin catálogo exenciones
```

### Después (Sprint 2):
```
✓ 0 tablas DIAN
✓ Stored procedure adaptado Honduras
✓ persons.tax_regime (enum nativo)
✓ FKs en tax_rates → tributes, companies
✓ Catálogo tax_exemption_reasons con seeders SAR
```

---

## 📊 Impacto

- **Tablas eliminadas:** 4
- **Stored procedures refactorizados:** 1
- **Migraciones nuevas:** 5
- **Seeders nuevos:** 1
- **FKs agregadas:** 2
- **Código de aplicación afectado:** 0 (sin impacto ✅)

---

**Status:** 📋 PLAN LISTO - Listo para ejecución
**Estimado:** 2-3 horas
**Riesgo:** BAJO (sin dependencias en código de aplicación)
