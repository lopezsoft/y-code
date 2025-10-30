# ⚙️ INFRASTRUCTURE - Configuración de Migración

## 📁 Estructura de Archivos Creados

```
y-code/backend/
├── MIGRACION.md                           # Guía completa de migración
├── app/
│   ├── Console/
│   │   └── Commands/
│   │       ├── MigrateDataCommand.php       # Comando principal: php artisan migrate:data
│   │       ├── MigrateRollbackDataCommand.php  # Rollback: php artisan migrate:rollback-data
│   │       └── ValidateDataCommand.php       # Validación: php artisan validate:data
│   └── Core/
│       └── BaseModel.php                  # (Ya creado) Con global scopes
├── config/
│   └── database.php                       # (Actualizado) Con mysql_old connection
├── docs/
│   ├── ARQUITECTURA.md                    # (Ya creado) Patrones de diseño
│   ├── PROGRESS.md                        # (Ya creado) Tracking de fases
│   └── POST-MIGRACION.md                  # Verificación y post-deployment
├── scripts/
│   ├── migration-helper.sh                # Menu interactivo para migraciones
│   └── setup-migration-env.sh             # Setup automático de .env
└── storage/
    └── backups/
        ├── y_doce_companies.sql           # (Ya existe) Backup original
        ├── y_code.sql                     # (Ya existe) Backup original
        └── (se crean durante proceso)
```

---

## 🔌 Conexiones de Base de Datos Configuradas

### Conexión Principal (y_code_new - Destino)

**Archivo:** `config/database.php`

```php
'mysql' => [
    'driver' => 'mysql',
    'url' => env('DATABASE_URL'),
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', 3307),
    'database' => env('DB_DATABASE', 'y_code_new'),
    'username' => env('DB_USERNAME', 'root'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'engine' => 'InnoDB',
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
]
```

### Conexión Antigua (y_code - Origen)

**Archivo:** `config/database.php`

```php
'mysql_old' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST_OLD', '127.0.0.1'),
    'port' => env('DB_PORT_OLD', 3307),
    'database' => env('DB_DATABASE_OLD', 'y_code'),
    'username' => env('DB_USERNAME_OLD', 'root'),
    'password' => env('DB_PASSWORD_OLD', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => 'InnoDB',
]
```

### Variables de Entorno Necesarias (.env)

```env
# BD Nueva (y_code_new)
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=y_code_new
DB_USERNAME=root
DB_PASSWORD=

# BD Antigua (y_code) - Para lectura durante migración
DB_HOST_OLD=127.0.0.1
DB_PORT_OLD=3307
DB_DATABASE_OLD=y_code
DB_USERNAME_OLD=root
DB_PASSWORD_OLD=
```

---

## 📋 CLI Commands Disponibles

### 1. Migrar Datos

**Comando:** `php artisan migrate:data`

```bash
# Migración completa desde BD antigua
php artisan migrate:data --from-old

# Con output verbose
php artisan migrate:data --from-old -v

# Validar sin ejecutar
php artisan migrate:data --validate
```

**Qué hace:**
- Lee datos de `mysql_old` connection (BD antigua)
- Transforma según nueva estructura
- Inserta en `mysql` connection (y_code_new)
- 6 pasos: Companies → Users → Customers → Accounting → Sales → Expenses

**Ubicación:** `app/Console/Commands/MigrateDataCommand.php` (450+ líneas)

---

### 2. Validar Migración

**Comando:** `php artisan validate:data`

```bash
# Validación básica
php artisan validate:data

# Con detalles (muestra todas las tablas)
php artisan validate:data --detailed

# Exportar reporte a archivo
php artisan validate:data --export

# Combinado
php artisan validate:data --detailed --export
```

**Qué valida:**
- ✅ Conteos de registros por tabla
- ✅ Foreign key relationships (sin huérfanos)
- ✅ Unicidad de emails y facturas
- ✅ Valores nulos críticos
- ✅ Balances contables
- ✅ Accounting equation validation

**Ubicación:** `app/Console/Commands/ValidateDataCommand.php` (350+ líneas)

---

### 3. Deshacer Migración (Rollback)

**Comando:** `php artisan migrate:rollback-data`

```bash
# Rollback interactivo (pide confirmación)
php artisan migrate:rollback-data

# Rollback automático (sin confirmación)
php artisan migrate:rollback-data --confirm
```

**Qué hace:**
- Trunca tablas en orden inverso (respeta FKs)
- Preserva datos de seeders (países, monedas, impuestos, grupos)
- Deja BD lista para re-intentar migración

**Ubicación:** `app/Console/Commands/MigrateRollbackDataCommand.php` (80+ líneas)

---

## 🛠️ Scripts Helper

### Script 1: Migration Helper (Menú Interactivo)

**Ubicación:** `scripts/migration-helper.sh`

```bash
# Ejecutar
bash scripts/migration-helper.sh

# Opciones:
# 1) Verificar prerequisitos
# 2) Verificar conexiones a BDs
# 3) Crear backup de y_code_new
# 4) Crear backup de y_code
# 5) Contar registros en y_code_new
# 6) Contar registros en y_code
# 7) Ejecutar migración (normal)
# 8) Ejecutar migración (verbose)
# 9) Validar migración
# 10) Validar migración (detallado)
# 11) Comparar BDs (vieja vs nueva)
# 12) Deshacer migración (rollback)
# 13) Restaurar desde backup
# 14) Salir
```

**Ventajas:**
- Interfaz amigable
- Manejo de errores
- Backups automáticos
- Validación de conexiones

---

### Script 2: Setup Migration Environment

**Ubicación:** `scripts/setup-migration-env.sh`

```bash
# Ejecutar
bash scripts/setup-migration-env.sh

# Opciones:
# 1) Verificar prerequisitos
# 2) Configurar variables de entorno
# 3) Verificar conexiones a BD
# 4) Limpiar cache de Laravel
# 5) Ejecutar setup completo (1+2+3+4)
# 6) Salir
```

**Ventajas:**
- Configura automáticamente .env
- Agrega DB_HOST_OLD, DB_PORT_OLD, etc.
- Verifica conexiones
- Limpiar cache

---

## 📊 Flujo de Migración Completo

```
┌─────────────────────────────────────────────────────────┐
│ INICIO: BD Antigua (y_code) vs BD Nueva (y_code_new)    │
└─────────────────────────────────────────────────────────┘
                            ↓
                   Setup Environment
                   (scripts/setup-migration-env.sh)
                            ↓
                    ┌───────────────┐
                    │ 1. BACKUP     │
                    │ y_code_new    │
                    └───────────────┘
                            ↓
                   ┌─────────────────┐
                   │ 2. MIGRATE DATA │
                   │ migrate:data    │
                   └─────────────────┘
                            ↓
          ┌─────────────────────────────────────┐
          │ 3. PASO 1: Migrate COMPANIES        │
          │ 4. PASO 2: Migrate USERS           │
          │ 5. PASO 3: Migrate CUSTOMERS       │
          │ 6. PASO 4: Migrate ACCOUNTING      │
          │ 7. PASO 5: Migrate SALES + ITEMS  │
          │ 8. PASO 6: Migrate EXPENSES        │
          └─────────────────────────────────────┘
                            ↓
                   ┌──────────────────┐
                   │ 3. VALIDATE DATA │
                   │ validate:data    │
                   └──────────────────┘
                            ↓
                    ✅ EXITOSO ¿?
                        ↙       ↖
                      ✅           ❌
                      ↓             ↓
                  Go-Live      ROLLBACK
                              (rollback-data)
                              ↓
                          Re-Intentar
```

---

## 🔐 Seguridad & Permisos

### Global Scopes (Filtrado Automático)

**Archivo:** `app/Core/BaseModel.php`

```php
protected static function booted(): void
{
    // Scope global que filtra automáticamente por company_id
    static::addGlobalScope('company_filter', function (Builder $builder) {
        if (Auth::check()) {
            $builder->where('company_id', Auth::user()->company_id);
        }
    });
    
    // Validación al crear
    static::creating(function (self $model) {
        if (empty($model->company_id) && Auth::check()) {
            $model->company_id = Auth::user()->company_id;
        }
    });
}
```

**Impacto:**
- Todos los SELECT automáticamente incluyen `WHERE company_id = X`
- Imposible acceder a datos de otra empresa
- Row-level security transparent

---

### Middleware de Validación (Recomendado)

Crear middleware para verificar company_id en requests:

```php
// app/Http/Middleware/ValidateCompanyId.php
public function handle($request, $next) {
    $company_id = $request->route('company_id');
    
    if ($company_id && Auth::user()->company_id != $company_id) {
        return response()->json(['error' => 'Unauthorized'], 403);
    }
    
    return $next($request);
}
```

---

## 📈 Performance Considerations

### Índices Recomendados

```sql
-- En cada tabla operacional
ALTER TABLE companies ADD INDEX idx_company_id (id);
ALTER TABLE users ADD INDEX idx_company_id (company_id);
ALTER TABLE customers ADD INDEX idx_company_id (company_id);
ALTER TABLE accounting_accounts ADD INDEX idx_company_id (company_id);
ALTER TABLE sales ADD INDEX idx_company_id (company_id);
ALTER TABLE sales ADD INDEX idx_customer_id (customer_id);
ALTER TABLE sales_items ADD INDEX idx_sales_id (sales_id);
ALTER TABLE expenses ADD INDEX idx_company_id (company_id);
ALTER TABLE payments ADD INDEX idx_expense_id (expense_id);

-- Composite indices para queries comunes
ALTER TABLE sales ADD INDEX idx_company_customer (company_id, customer_id);
ALTER TABLE expenses ADD INDEX idx_company_status (company_id, status);
```

### Queries Optimizadas

```php
// ✅ CORRECTO: Uses lazy eager loading
$sales = Sales::with('items', 'customer')->paginate(50);

// ❌ EVITAR: N+1 problem
foreach ($sales as $sale) {
    echo $sale->customer->name;
    echo $sale->items()->count(); // Query por item!
}

// ✅ CORRECTO: Preload everything
$sales = Sales::with(['items', 'customer', 'company'])->get();
```

---

## 🔄 Ciclo de Vida de Migración

### Timeline Recomendado

```
Día 1:
  - 08:00 Setup environment (scripts/setup-migration-env.sh)
  - 09:00 Crear backup pre-migración
  - 09:30 Ejecutar php artisan migrate:data --from-old
  - 10:30 Validar con php artisan validate:data --detailed

Día 2:
  - Pruebas exhaustivas de API
  - Tests de seguridad (row-level)
  - Tests de performance
  - Revisión de logs

Día 3:
  - Go-live a producción
  - Monitoreo activo
  - Comunicar a usuarios
  - Documentar issues

Permanente:
  - Daily health checks
  - Weekly backups
  - Monthly performance review
```

---

## 📞 Soporte & Troubleshooting

### Problemas Comunes & Soluciones

| Problema | Causa | Solución |
|----------|-------|----------|
| "Connection refused" | Host/Port incorrecto | Verificar con `mysql -u root -h host -P port` |
| "Database not found" | BD antigua no existe | Restaurar desde backup: `mysql < backup.sql` |
| "Foreign key constraint" | Huérfanos en BD | Ejecutar `validate:data --detailed` para identificar |
| "Duplicate entry" | Re-ejecutada 2 veces | Usar `updateOrCreate` (ya implementado) |
| "Column not found" | Estructura diferente | Verificar schema: `DESC table_old` vs `DESC table_new` |

### Logs de Referencia

- **Migración:** `storage/logs/laravel.log` (buscar "PASO")
- **Validación:** `storage/logs/validation_report_*.log`
- **SQL:** `mysql.log` (si activado)

---

## ✅ Checklist Pre-Migración

- [ ] `.env` configurado con DB_HOST_OLD, DB_DATABASE_OLD
- [ ] Ambas BDs accesibles (verificar con `mysql`)
- [ ] Backups antiguos en `storage/backups/`
- [ ] y_code_new con 13 migrations ejecutadas
- [ ] 142 registros de seeders cargados
- [ ] BaseModel con global scopes funcionando
- [ ] CLI commands registrados (run `php artisan list` para ver)
- [ ] scripts/ son ejecutables (`chmod +x scripts/*.sh`)
- [ ] Documentación (MIGRACION.md, POST-MIGRACION.md) leída

---

## 🎯 Próximos Pasos

1. **Setup:** `bash scripts/setup-migration-env.sh`
2. **Verificar:** `php artisan migrate:data --validate`
3. **Ejecutar:** `php artisan migrate:data --from-old`
4. **Validar:** `php artisan validate:data --detailed`
5. **Testear:** API endpoints y seguridad
6. **Documentar:** Issues y learnings
7. **Go-live:** Deploy a producción
8. **Monitor:** Logs y performance

---

**Status:** ✅ Infraestructura Completa  
**Versión:** 1.0  
**Fecha:** Octubre 29, 2025
