# ⚡ Quick Reference - Comandos de Migración

## 🚀 Setup Inicial

```bash
# 1. Configurar entorno automáticamente
bash scripts/setup-migration-env.sh

# 2. Seleccionar opción 5 (Setup completo)
# Esto configura .env, verifica conexiones, limpia cache
```

---

## 🔄 Workflow de Migración

### Paso 1: Verificar Prerequisitos
```bash
# Opción A: Menú interactivo
bash scripts/migration-helper.sh
# Seleccionar opción 1

# Opción B: Comando directo
php artisan tinker --execute="echo 'OK'"
```

### Paso 2: Hacer Backup Pre-Migración
```bash
# Opción A: Menú interactivo
bash scripts/migration-helper.sh
# Seleccionar opción 3

# Opción B: Comando directo
mysqldump -u root -h 127.0.0.1 -P 3307 y_code_new > storage/backups/y_code_new_pre_migration.sql
```

### Paso 3: Ejecutar Migración
```bash
# Opción A: Migración completa
php artisan migrate:data --from-old

# Opción B: Con verbose output
php artisan migrate:data --from-old -v

# Opción C: Solo validar sin migrar
php artisan migrate:data --validate
```

### Paso 4: Validar Resultados
```bash
# Opción A: Validación rápida
php artisan validate:data

# Opción B: Validación detallada
php artisan validate:data --detailed

# Opción C: Exportar reporte
php artisan validate:data --export

# Opción D: Todo incluido
php artisan validate:data --detailed --export
```

---

## 🔍 Monitoreo & Verificación

### Ver Conteo de Registros
```bash
# Menú interactivo
bash scripts/migration-helper.sh
# Seleccionar opción 5 (y_code_new) o 6 (y_code)

# SQL directo
mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "
SELECT 
  'companies' as tabla, COUNT(*) as registros FROM companies
UNION
SELECT 'users', COUNT(*) FROM users
UNION
SELECT 'customers', COUNT(*) FROM customers
UNION
SELECT 'sales', COUNT(*) FROM sales
UNION
SELECT 'expenses', COUNT(*) FROM expenses
ORDER BY tabla;
"
```

### Comparar BDs (Vieja vs Nueva)
```bash
# Menú interactivo
bash scripts/migration-helper.sh
# Seleccionar opción 11
```

### Ver Logs
```bash
# Últimas líneas
tail -50 storage/logs/laravel.log

# En tiempo real
tail -f storage/logs/laravel.log

# Buscar errores
grep "ERROR" storage/logs/laravel.log | head -20

# Contar errores
grep -c "ERROR" storage/logs/laravel.log
```

---

## ↩️ Rollback de Emergencia

### Opción 1: Rollback Seguro (Recomendado)
```bash
# Con confirmación
php artisan migrate:rollback-data

# Automático
php artisan migrate:rollback-data --confirm
```

### Opción 2: Restaurar Backup
```bash
mysql -u root -h 127.0.0.1 -P 3307 y_code_new < storage/backups/y_code_new_pre_migration.sql
```

### Opción 3: Rollback Manual
```bash
mysql -u root -h 127.0.0.1 -P 3307 y_code_new << EOF
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE payments;
TRUNCATE TABLE sales_items;
TRUNCATE TABLE sales;
TRUNCATE TABLE expenses;
TRUNCATE TABLE accounting_accounts;
TRUNCATE TABLE customers;
TRUNCATE TABLE business_users;
TRUNCATE TABLE users;
TRUNCATE TABLE companies;
SET FOREIGN_KEY_CHECKS = 1;
EOF
```

---

## 🧪 Testing Post-Migración

### Conexión a BD
```bash
# BD nueva
mysql -u root -h 127.0.0.1 -P 3307 y_code_new

# BD antigua
mysql -u root -h 127.0.0.1 -P 3307 y_code
```

### Tinker (Interactive Shell)
```bash
php artisan tinker

# Ver conteos
>>> App\Models\Company::count()
>>> App\Models\User::count()
>>> App\Models\Customer::count()

# Ver relaciones
>>> $company = App\Models\Company::with('users')->first()
>>> $company->users
```

### API Tests (después de `php artisan serve`)
```bash
# Todas las empresas
curl -X GET http://localhost:8000/api/companies

# Clientes de empresa 1
curl -X GET http://localhost:8000/api/companies/1/customers

# Ventas
curl -X GET http://localhost:8000/api/companies/1/sales

# Gastos
curl -X GET http://localhost:8000/api/companies/1/expenses
```

---

## 📋 Checklists Rápidos

### ✅ Pre-Migración (30 min)
- [ ] `.env` configurado (DB_HOST, DB_DATABASE, DB_HOST_OLD, DB_DATABASE_OLD)
- [ ] Conexión a y_code_new verificada
- [ ] Conexión a y_code verificada
- [ ] Backups en `storage/backups/`
- [ ] 13 migraciones ejecutadas en y_code_new
- [ ] 142 registros de seeders cargados

### ✅ Migración (10-30 min)
- [ ] Backup pre-migración creado
- [ ] `php artisan migrate:data --from-old` ejecutado
- [ ] Sin errores en la salida
- [ ] Log revisado (`tail storage/logs/laravel.log`)

### ✅ Post-Migración (20 min)
- [ ] `php artisan validate:data --detailed` sin errores críticos
- [ ] Conteo de registros verificado
- [ ] FKs validadas (sin huérfanos)
- [ ] API tests pasados
- [ ] Backup post-migración creado

### ✅ Go-Live (5 min)
- [ ] Toda documentación leída
- [ ] Plan de rollback confirmado
- [ ] Equipo notificado
- [ ] Monitoring activo

---

## 🆘 Troubleshooting Rápido

| Problema | Comando de Diagnóstico |
|----------|----------------------|
| BD no accesible | `mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "SELECT 1"` |
| Migración falló | `tail -100 storage/logs/laravel.log \| grep ERROR` |
| Datos inconsistentes | `php artisan validate:data --detailed` |
| Necesito rollback | `php artisan migrate:rollback-data --confirm` |
| Foreign key error | `php artisan validate:data --detailed \| grep -i "orphan"` |
| Duplicados | `php artisan validate:data --detailed \| grep -i "duplicate"` |

---

## 📊 Comandos SQL Útiles

### Ver Estructura
```sql
DESCRIBE y_code_new.companies;
DESCRIBE y_code_new.sales;
DESCRIBE y_code_new.customers;
```

### Verificar Integridad
```sql
-- FK relationships
SELECT COUNT(*) FROM sales WHERE customer_id NOT IN (SELECT id FROM customers);

-- Valores nulos
SELECT COUNT(*) FROM customers WHERE email IS NULL;

-- Duplicados
SELECT email, COUNT(*) as cnt FROM customers GROUP BY email HAVING cnt > 1;
```

### Ver Datos
```sql
-- Todas las empresas
SELECT id, company_name, nrc_number FROM companies;

-- Usuarios por empresa
SELECT u.id, u.name, u.email, c.company_name 
FROM users u 
JOIN companies c ON u.company_id = c.id;

-- Top ventas
SELECT id, invoice_number, total FROM sales ORDER BY total DESC LIMIT 10;
```

### Estadísticas
```sql
-- Total por tabla
SELECT 'companies' as tabla, COUNT(*) FROM companies
UNION
SELECT 'users', COUNT(*) FROM users
UNION
SELECT 'customers', COUNT(*) FROM customers
UNION
SELECT 'sales', COUNT(*) FROM sales
UNION
SELECT 'expenses', COUNT(*) FROM expenses;

-- Total por empresa
SELECT c.company_name, 
       COUNT(DISTINCT u.id) as users,
       COUNT(DISTINCT cu.id) as customers,
       COUNT(DISTINCT s.id) as sales,
       SUM(s.total) as total_sales
FROM companies c
LEFT JOIN users u ON c.id = u.company_id
LEFT JOIN customers cu ON c.id = cu.company_id
LEFT JOIN sales s ON c.id = s.company_id
GROUP BY c.id;
```

---

## 📚 Documentación de Referencia

| Documento | Propósito | Ubicación |
|-----------|-----------|-----------|
| **MIGRACION.md** | Guía paso-a-paso completa | `/backend/MIGRACION.md` |
| **POST-MIGRACION.md** | Verificación post-migración | `/backend/docs/POST-MIGRACION.md` |
| **INFRASTRUCTURE.md** | Referencia técnica | `/backend/docs/INFRASTRUCTURE.md` |
| **PROGRESS.md** | Estado del proyecto | `/backend/PROGRESS.md` |
| **FASE-6-SUMMARY.md** | Resumen Fase 6 | `/backend/docs/FASE-6-SUMMARY.md` |

---

## 🎯 Comandos Más Comunes

```bash
# Setup completo
bash scripts/setup-migration-env.sh && echo "Seleccionar opción 5"

# Migrar (el principal)
php artisan migrate:data --from-old

# Validar
php artisan validate:data --detailed --export

# Rollback si falla
php artisan migrate:rollback-data --confirm

# Verificar
mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "SELECT COUNT(*) FROM companies;"

# Ver logs
tail -f storage/logs/laravel.log

# Menu helper
bash scripts/migration-helper.sh
```

---

**Last Updated:** Octubre 29, 2025  
**Status:** ✅ Ready to Use  
**Version:** 1.0
