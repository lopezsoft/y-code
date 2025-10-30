# 📋 Post-Migración: Checklist & Operaciones Críticas

## 1️⃣ Fase 1: Verificación Inmediata (5-10 minutos)

### 1.1 Verificar Integridad de Datos

```bash
# Terminal: Contar registros
php artisan tinker
>>>
$companies = App\Models\Company::count();
$users = App\Models\User::count();
$customers = App\Models\Customer::count();
$sales = App\Models\Sales::count();
$expenses = App\Models\Expense::count();

echo "Companies: $companies\n";
echo "Users: $users\n";
echo "Customers: $customers\n";
echo "Sales: $sales\n";
echo "Expenses: $expenses\n";
```

### 1.2 Verificar Relaciones

```php
// Verificar que cada compañía tiene usuarios
$companies_without_users = Company::whereDoesntHave('users')->count();
echo "Empresas sin usuarios: $companies_without_users\n";

// Verificar que cada venta tiene cliente
$sales_without_customer = Sales::whereNull('customer_id')->count();
echo "Ventas sin cliente: $sales_without_customer\n";

// Verificar totales de ventas
$total_sales_amount = Sales::sum('total');
echo "Total de ventas: " . number_format($total_sales_amount, 2) . "\n";

// Verificar items de venta
$total_items = SalesItems::sum('quantity');
echo "Total items vendidos: $total_items\n";
```

### 1.3 Ejecutar Validación Completa

```bash
# Terminal: Ejecutar validador
php artisan validate:data --detailed --export

# Revisar reporte en
cat storage/logs/validation_report_*.log
```

---

## 2️⃣ Fase 2: Testing de API (10-15 minutos)

### 2.1 Iniciar Servidor

```bash
# Terminal 1
php artisan serve --host=127.0.0.1 --port=8000

# Terminal 2: Tests
cd backend
```

### 2.2 Test: Autenticación

```bash
# Obtener todos los usuarios
curl -X GET http://localhost:8000/api/users \
  -H "Accept: application/json"

# Crear token para usuario (si tienes endpoint de login)
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password"}'

# Usar token en requests posteriores
TOKEN="your_token_here"
curl -X GET http://localhost:8000/api/users \
  -H "Authorization: Bearer $TOKEN"
```

### 2.3 Test: Empresas

```bash
# GET todas las empresas
curl -X GET http://localhost:8000/api/companies \
  -H "Accept: application/json"

# GET empresa específica
curl -X GET http://localhost:8000/api/companies/1 \
  -H "Accept: application/json"

# Verificar que users está filtrado por company_id
curl -X GET http://localhost:8000/api/companies/1/users \
  -H "Accept: application/json"
```

### 2.4 Test: Clientes

```bash
# GET clientes de una empresa
curl -X GET http://localhost:8000/api/companies/1/customers \
  -H "Accept: application/json"

# GET cliente específico
curl -X GET http://localhost:8000/api/customers/1 \
  -H "Accept: application/json"

# Crear cliente (test de validación)
curl -X POST http://localhost:8000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "company_id":1,
    "name":"Cliente Test",
    "email":"cliente@test.com",
    "phone":"99999999",
    "address":"Dirección Test"
  }'
```

### 2.5 Test: Ventas

```bash
# GET ventas de una empresa
curl -X GET http://localhost:8000/api/companies/1/sales \
  -H "Accept: application/json"

# GET venta específica con items
curl -X GET http://localhost:8000/api/sales/1 \
  -H "Accept: application/json"

# Verificar totales
curl -X GET http://localhost:8000/api/companies/1/sales?summary=true \
  -H "Accept: application/json"
```

### 2.6 Test: Reportes Contables

```bash
# Balance sheet
curl -X GET http://localhost:8000/api/companies/1/accounting/balance-sheet \
  -H "Accept: application/json"

# Income statement
curl -X GET http://localhost:8000/api/companies/1/accounting/income-statement \
  -H "Accept: application/json"

# Transactions por período
curl -X GET "http://localhost:8000/api/companies/1/accounting/transactions?month=10&year=2025" \
  -H "Accept: application/json"
```

---

## 3️⃣ Fase 3: Pruebas de Seguridad (5-10 minutos)

### 3.1 Verificar Row-Level Security

```php
// Tinker: Verificar que user no ve datos de otra empresa
$user1 = User::find(1); // Usuario empresa 1
$user2 = User::find(2); // Usuario empresa 2

// Cambiar contexto a user1
Auth::login($user1);

// Intentar acceder clientes de empresa 2 (debe estar vacío)
$customers_user1 = $user1->company->customers()->count();
echo "Clientes visibles para User1: $customers_user1\n";

// Intentar acceso directo a cliente de otra empresa
$foreign_customer = Customer::whereNotIn('company_id', [$user1->company_id])->first();
if ($foreign_customer) {
    // Debería fallar o devolver 403
    echo "ADVERTENCIA: Acceso a cliente de otra empresa posible\n";
}
```

### 3.2 Verificar Global Scopes

```php
// Verificar que BaseModel filtra automáticamente
$customers = Customer::all(); // Debe filtrar por company_id actual
echo "Clientes (con global scope): " . count($customers) . "\n";

// Sin scope (para comparar)
$customers_all = Customer::withoutGlobalScope('company_filter')->count();
echo "Clientes (sin global scope): $customers_all\n";
```

### 3.3 Verificar Permisos

```php
// Verificar que solo admin puede ver usuarios
Auth::logout();
Auth::login(User::where('role', 'user')->first());

// Acceso a usuarios (debe fallar o estar limitado)
try {
    $response = Http::get('http://localhost:8000/api/users');
    echo "Status: " . $response->status() . "\n";
    if ($response->status() !== 200) {
        echo "✅ Acceso denegado para usuario regular (correcto)\n";
    }
} catch (Exception $e) {
    echo "✅ Error de acceso: " . $e->getMessage() . "\n";
}
```

---

## 4️⃣ Fase 4: Performance Baseline (10-15 minutos)

### 4.1 Índices de Base de Datos

```sql
-- Verificar índices creados
SHOW INDEXES FROM customers;
SHOW INDEXES FROM sales;
SHOW INDEXES FROM expenses;

-- Verificar que company_id tiene índice en cada tabla
SELECT TABLE_NAME, INDEX_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.STATISTICS
WHERE TABLE_SCHEMA = 'y_code_new'
AND COLUMN_NAME = 'company_id';
```

### 4.2 Queries Lentas

```bash
# Activar query log en MySQL
mysql -u root -e "
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 0.5;
SET GLOBAL log_queries_not_using_indexes = 'ON';
"

# Ejecutar requests en loop
for i in {1..100}; do
    curl -s http://localhost:8000/api/companies/1/customers > /dev/null
    echo "Request $i"
done

# Revisar slow queries
mysql -u root -e "
SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;
"
```

### 4.3 Benchmarks Básicos

```php
// Tinker
$start = microtime(true);
$companies = Company::with('users', 'customers')->paginate(20);
$time = microtime(true) - $start;
echo "Companies load time: " . number_format($time * 1000, 2) . "ms\n";

$start = microtime(true);
$sales = Sales::with('items', 'customer', 'company')->paginate(50);
$time = microtime(true) - $start;
echo "Sales load time: " . number_format($time * 1000, 2) . "ms\n";

$start = microtime(true);
$expenses = Expense::with('account', 'approver', 'company')->paginate(50);
$time = microtime(true) - $start;
echo "Expenses load time: " . number_format($time * 1000, 2) . "ms\n";
```

---

## 5️⃣ Fase 5: Actualizar Documentación

### 5.1 Crear Deployment Guide

Crear `docs/DEPLOYMENT.md`:

```markdown
# Deployment Guide - Y-Code Single-DB Architecture

## Pre-Deployment

1. Backup de BD antigua
2. Migración a y_code_new
3. Validación completa
4. Testing en staging

## Deployment Steps

1. Deploy código a producción
2. Ejecutar migraciones nuevas
3. Ejecutar migrate:data en background
4. Validar integridad
5. Rollback plan si es necesario

## Post-Deployment

1. Monitorar logs
2. Revisar performance
3. Notificar usuarios
```

### 5.2 Crear README.md para Operaciones

```markdown
# Y-Code Backend - Operational Guide

## Daily Operations

- Monitor `storage/logs/`
- Check failed jobs
- Review validation reports

## Maintenance

- Weekly: `php artisan backup:run`
- Monthly: Optimization review
- Quarterly: Security audit
```

### 5.3 Actualizar PROGRESS.md

Agregar nueva sección:
```markdown
## FASE 6: DATA MIGRATION (COMPLETADA ✅)

- [x] MigrateDataCommand creado
- [x] MigrateRollbackDataCommand creado
- [x] ValidateDataCommand creado
- [x] Migración ejecutada exitosamente
- [x] Validación pasada sin errores
- [x] Post-migration testing completado

## FASE 7: PRODUCTION DEPLOYMENT

- [ ] Security audit
- [ ] Performance optimization
- [ ] Load testing
- [ ] Go-live procedures
```

---

## 6️⃣ Fase 6: Limpieza & Archivado

### 6.1 Archivar Código Antiguo

```bash
# Crear branch para código antiguo
git checkout -b archive/old-multidb
git rm -r app/OldMultiDBClasses/
git commit -m "archive: move old multi-db code to archive"
git checkout feature/single-db-migration

# O en carpeta separada
mkdir -p archive/old-code
cp -r app/Models/Old* archive/old-code/
```

### 6.2 Limpiar Backups Antiguos

```bash
# Mantener últimos 5 backups
cd storage/backups
ls -1t *.sql | tail -n +6 | xargs -I {} rm -- {}
echo "✅ Backups antiguos removidos"
```

### 6.3 Actualizar .gitignore

Asegurar que no se comiten:
```
.env
storage/logs/*
storage/backups/*.sql
storage/cache/*
```

---

## 7️⃣ Fase 7: Moniteo Continuo (Después del Deploy)

### 7.1 Health Checks

Crear `routes/api-health.php`:

```php
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'database' => DB::connection()->getDatabaseName(),
        'companies_count' => Company::count(),
        'users_count' => User::count(),
        'timestamp' => now(),
    ]);
});
```

### 7.2 Monitoreo de Logs

```bash
# Terminal 1: Monitorear logs en vivo
tail -f storage/logs/laravel.log

# Terminal 2: Contar errores
grep -c "ERROR" storage/logs/laravel.log

# Terminal 3: Ver últimos 50 errores
grep "ERROR" storage/logs/laravel.log | tail -50
```

### 7.3 Alertas Importantes

```bash
# Crear script de alertas
cat > scripts/check-alerts.sh << 'EOF'
#!/bin/bash

# Errores en últimas 2 horas
ERROR_COUNT=$(grep "ERROR" storage/logs/laravel.log | grep -c "$(date -d '2 hours ago' '+%Y-%m-%d')")

if [ $ERROR_COUNT -gt 50 ]; then
    echo "ALERTA: $ERROR_COUNT errores en últimas 2 horas"
fi

# Verificar BD
mysql -u root y_code_new -e "SELECT 1" || echo "ALERTA: BD no accesible"

# Verificar espacio
DISK_USAGE=$(df -h storage/ | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 90 ]; then
    echo "ALERTA: Espacio en disco al ${DISK_USAGE}%"
fi
EOF

chmod +x scripts/check-alerts.sh
```

---

## 8️⃣ Fase 8: Rollback de Emergencia

### Si Algo Sale Mal

**Opción 1: Deshacer Migración (rápido)**
```bash
php artisan migrate:rollback-data --confirm
# y_code_new quedará sin datos operacionales (solo seeders)
```

**Opción 2: Restaurar desde Backup**
```bash
mysql -u root y_code_new < storage/backups/y_code_new_backup_pre_migration.sql
```

**Opción 3: Revertir a Rama Anterior (código)**
```bash
git checkout main
git reset --hard HEAD~5  # O commit específico
php artisan migrate
```

---

## ✅ Checklist Final

- [ ] Integridad de datos verificada
- [ ] API testeada completamente
- [ ] Seguridad row-level validada
- [ ] Performance aceptable
- [ ] Documentación actualizada
- [ ] Backups archivados
- [ ] Equipo notificado
- [ ] Moniteo activo
- [ ] Plan de rollback confirmado
- [ ] Go-live autorizado

---

**Status:** 🟢 LISTO PARA PRODUCCIÓN  
**Fecha:** Octubre 29, 2025  
**Version:** 1.0
