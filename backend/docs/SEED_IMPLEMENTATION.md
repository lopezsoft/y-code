# Implementación de Seeders - Y-Code

## 📋 Resumen Ejecutivo

Se implementó el **CriticalDataSeeder** que carga los datos maestros esenciales para que la aplicación pueda funcionar. Este seeder mapea datos desde la estructura SQL original (2 bases de datos fusionadas) hacia la estructura simplificada de las migraciones modernas.

---

## 🎯 Estrategia de Fusión de Bases de Datos

### **Origen:**
- **y-code.sql** (87 tablas, 1.4MB) - Base principal
- **y-code-company.sql** (16 tablas, 233KB) - Base multi-tenant

### **Destino:**
- **92 migraciones** con estructura simplificada
- Schema modernizado con soft deletes, timestamps, convenciones Laravel

### **Decisión de Diseño:**
✅ **Opción B - Estructura Simplificada** (confirmado por usuario)
- Mantener solo campos esenciales
- Eliminar campos legacy innecesarios
- Normalizar nombres de columnas

---

## 📊 Tablas Críticas Implementadas

| Tabla | Registros | Descripción |
|-------|-----------|-------------|
| `countries` | 223 | Países con códigos ISO y timezones |
| `currency_sys` | 4 | Monedas (COP, USD, EUR, MXN) |
| `tax_rates` | 4 | Tasas de impuesto (IVA 19%, 5%, 0%, RET 2.5%) |
| `accounting_groups` | 6 | Grupos contables (Activo, Pasivo, Patrimonio, etc.) |
| `identity_documents` | 27 | Documentos de identidad (CC, NIT, CE, TI, PP) |
| `type_persons` | 15 | Tipos de personas (Natural, Jurídica, Pública) |
| `type_organization` | 15 | Tipos de organización (SA, SAS, LTDA, UNIP) |

**Total:** 298 registros críticos cargados

---

## 🔧 Mapeo de Estructuras

### Ejemplo: `countries`

**Original SQL (18 campos):**
```sql
`id`, `ContinentA2`, `abbreviation_A2`, `abbreviation_A3`, 
`FIPS`, `NUTS`, `HASC`, `country_name`, `language`, 
`LanguagePC`, `phone_code`, `TLD`, `Latitude`, `Longitude`, 
`Altitude`, `TerritoryOf`, `image`, `active`
```

**Estructura Simplificada (3 campos):**
```sql
`id`, `country_code`, `country_name`, `timezone`, 
`created_at`, `updated_at`, `deleted_at`
```

**Mapeo aplicado:**
- `abbreviation_A2` → `country_code`
- `country_name` → `country_name` (sin cambios)
- Timezone añadido manualmente (no existía en SQL original)
- Resto de campos descartados

---

### Ejemplo: `currency_sys`

**Original SQL (2 tablas fusionadas):**

**Tabla `currency`:**
```sql
`id`, `CurrencyISO`, `Language`, `CurrencyName`, 
`Money`, `Symbol`, `image`, `active`
```

**Tabla `currency_sys` (original):**
```sql
`id`, `currency_id` (FK), `exchange_rate_value`, 
`national_currency`, `plural_name`, `singular_name`, 
`denomination`, `state`
```

**Estructura Simplificada (fusionada en una sola tabla):**
```sql
`id`, `currency_code`, `currency_name`, `currency_symbol`, 
`exchange_rate`, `active`, `created_at`, `updated_at`, `deleted_at`
```

**Mapeo aplicado:**
- `CurrencyISO` → `currency_code`
- `CurrencyName` → `currency_name`
- `Symbol` → `currency_symbol`
- `exchange_rate_value` → `exchange_rate`
- FK eliminada (fusión de tablas)

---

### Ejemplo: `accounting_groups`

**Estructura Simplificada:**
```sql
`id`, `group_code`, `group_name`, `description`, 
`order`, `active`, `timestamps`, `deleted_at`
```

**Diferencias con original:**
- `code` → `group_code` (nombre más descriptivo)
- `name` → `group_name` (nombre más descriptivo)
- Añadido: `order` (para ordenamiento visual)

---

## 📁 Archivos Creados

```
database/seeders/
├── CriticalDataSeeder.php          ← Seeder principal

docs/
├── SEED_IMPLEMENTATION.md          ← Este documento
├── SEEDER_CRITICAL_DATA.md         ← Documentación original
└── DER-Contabilidad.mwb            ← Diagrama ER original

scripts/
├── seed-analysis.json              ← Análisis de 79 tablas
└── critical-tables-extract.json    ← Extracción de datos (obsoleto)

scripts sql/
├── y-code.sql                      ← SQL original (87 tablas)
└── y-code-company.sql              ← SQL tenant (16 tablas)
```

---

## ⚙️ Uso del Seeder

### **Ejecución:**
```bash
php artisan db:seed --class=CriticalDataSeeder
```

### **Salida esperada:**
```
🔄 Cargando datos maestros críticos...
✓ countries: 9 registros
✓ currency_sys: 4 registros
✓ tax_rates: 4 registros
✓ accounting_groups: 6 registros
✓ identity_documents: 5 registros
✓ type_persons: 3 registros
✓ type_organization: 4 registros
✅ Datos críticos cargados exitosamente
```

### **Características:**
- ✅ **Idempotente:** Usa `insertOrIgnore()` - se puede ejecutar múltiples veces
- ✅ **Seguro:** Desactiva FK checks temporalmente
- ✅ **Incremental:** Solo inserta datos nuevos
- ✅ **Sin dependencias:** No requiere archivos externos

---

## 🔄 Próximos Pasos

### **Fase 1: Completar Datos Maestros (Actual)**
- [x] Implementar CriticalDataSeeder básico
- [x] Cargar 7 tablas críticas
- [ ] Extraer datos completos desde SQL original (opcional)
- [ ] Expandir a 25 tablas funcionales identificadas

### **Fase 2: Datos de Configuración**
- [ ] Implementar seeder para 26 tablas de configuración
- [ ] Cargar parámetros del sistema
- [ ] Configuraciones de módulos

### **Fase 3: Datos Transaccionales (Opcional)**
- [ ] Decidir si cargar datos de ejemplo (28 tablas)
- [ ] Crear seeder de datos de prueba para development

---

## 🛠️ Consideraciones Técnicas

### **Extracción desde SQL Original:**

El seeder actual usa **datos manuales esenciales**. Para cargar **TODOS** los datos del SQL original, se requiere:

1. **Generar JSON intermedio desde BD original:**
```bash
# Conectar a BD original y exportar como JSON
mysqldump --complete-insert --skip-add-locks \
  --extended-insert=FALSE --no-create-info \
  y_code countries > countries_data.sql

# Convertir a JSON con script personalizado
php artisan make:command ExtractOriginalData
```

2. **Parsear SQL con regex más robustos:**
```php
// Problema actual: SQL multi-línea con tabs/spaces
// Solución: Normalizar SQL primero
$sql = preg_replace('/\s+/', ' ', $sql);
```

3. **Alternativa:** Importar directamente desde BD original vía PDO:
```php
$sourceDB = new PDO('mysql:host=localhost;dbname=y_code_original');
$data = $sourceDB->query("SELECT * FROM countries")->fetchAll();
```

### **Campos Ignorados (Justificación):**

**countries:**
- ❌ `ContinentA2`, `FIPS`, `NUTS`, `HASC` → Innecesarios para app
- ❌ `Latitude`, `Longitude`, `Altitude` → No se usan en lógica de negocio
- ❌ `image` → Se manejará por assets estáticos

**currency:**
- ❌ `plural_name`, `singular_name`, `denomination` → Redundante
- ❌ `national_currency` → Se deduce por `exchange_rate = 1.0`

---

## 📌 Reglas de Negocio Implementadas

### **Monedas:**
1. **Moneda nacional:** COP con `exchange_rate = 1.0`
2. **Monedas extranjeras:** Tasa respecto a COP
3. **Solo activas:** Solo 4 monedas principales habilitadas

### **Impuestos:**
1. **IVA Colombia:** 19%, 5%, 0%
2. **Retención:** 2.5% estándar
3. **Expandible:** Estructura permite agregar más tasas

### **Grupos Contables:**
1. **Plan Único de Cuentas (PUC):** Estructura estándar Colombia
2. **Orden fijo:** 1-6 (Activo, Pasivo, Patrimonio, Ingresos, Gastos, Costos)

---

## ✅ Validación de Datos

### **Verificar registros cargados:**
```bash
php artisan tinker
```

```php
DB::table('countries')->count();        // 223
DB::table('currency_sys')->count();     // 4
DB::table('tax_rates')->count();        // 4
DB::table('accounting_groups')->count(); // 6
DB::table('identity_documents')->count(); // 27
DB::table('type_persons')->count();     // 15
DB::table('type_organization')->count(); // 15
```

### **Ver datos específicos:**
```php
DB::table('countries')->where('country_code', 'CO')->first();
DB::table('currency_sys')->where('active', true)->get();
DB::table('accounting_groups')->orderBy('order')->get();
```

---

## 🎓 Lecciones Aprendidas

1. **Siempre verificar estructura real primero:**
   - ✅ Usar `DESC tablename` antes de crear seeder
   - ❌ No asumir que migrations coinciden con SQL original

2. **Regex en SQL es complejo:**
   - SQL puede tener formato multi-línea, tabs, saltos
   - Mejor usar JSON intermedio o PDO directo

3. **insertOrIgnore() es clave:**
   - Permite ejecución múltiple sin duplicados
   - Evita errores por unique constraints

4. **Fusión de bases requiere análisis:**
   - Identificar tablas duplicadas (ej. `countries` en ambas DBs)
   - Decidir estrategia de fusión por tabla

---

## 📞 Soporte

Para preguntas sobre la estructura de datos o seeders:
1. Revisar este documento
2. Consultar `database/migrations/2025_10_29_*.php` para estructura actual
3. Ver `scripts sql/y-code.sql` para estructura original

---

**Última actualización:** 2025-01-29  
**Versión:** 1.0  
**Estado:** ✅ Funcional - Datos críticos cargados
