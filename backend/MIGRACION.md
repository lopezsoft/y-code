# 📚 Guía de Migración de Datos - Y-Code Backend

## 📋 Tabla de Contenidos

1. [Resumen](#resumen)
2. [Prerequisitos](#prerequisitos)
3. [Proceso de Migración](#proceso-de-migración)
4. [Validación](#validación)
5. [Rollback](#rollback)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Resumen

Este documento describe cómo migrar datos desde la antigua arquitectura Multi-DB (1 BD por empresa) a la nueva arquitectura Single-DB (1 BD para todas las empresas) en **y_code_new**.

**Cambio Principal:** Todos los datos ahora tienen un `company_id` que filtra automáticamente.

---

## ✅ Prerequisitos

### 1. Backups Realizados
```bash
✅ storage/backups/y_doce_companies.sql (51 KB)
✅ storage/backups/y_code.sql (1.3 MB)
```

### 2. Base de Datos Nueva Lista
```bash
✅ y_code_new database
✅ 13 migrations ejecutadas
✅ 142 registros globales (seeders)
```

### 3. Configuración de Variables de Entorno

En `.env`, añadir:
```env
# Nueva BD (destino)
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=y_code_new
DB_USERNAME=root
DB_PASSWORD=

# BD antigua (origen) - PARA MIGRACIÓN SOLO
DB_HOST_OLD=127.0.0.1
DB_PORT_OLD=3307
DB_DATABASE_OLD=y_code
DB_USERNAME_OLD=root
DB_PASSWORD_OLD=
```

### 4. Ambas Bases de Datos Accesibles
```bash
# Verificar conexión a BD nueva
mysql -u root -h 127.0.0.1 -P 3307 y_code_new

# Verificar conexión a BD antigua
mysql -u root -h 127.0.0.1 -P 3307 y_code
```

---

## 🚀 Proceso de Migración

### PASO 1: Crear Backup Preventivo
```bash
# Backup de y_code_new ANTES de migración
mysqldump -u root -h 127.0.0.1 -P 3307 y_code_new > storage/backups/y_code_new_backup_pre_migration.sql

echo "✅ Backup pre-migración creado"
```

### PASO 2: Ejecutar Migración
```bash
# Opción 1: Migración completa desde BD antigua
php artisan migrate:data --from-old

# Opción 2: Solo validar sin migrar
php artisan migrate:data --validate

# Opción 3: Migración con output detallado
php artisan migrate:data --from-old -v
```

**Duración esperada:** 2-5 minutos (depende del volumen de datos)

#### Qué Hace Este Comando

**ORDEN DE EJECUCIÓN (crítico):**

1. **COMPANIES** → Migra tabla de empresas
   - Mapea `name` → `company_name`
   - Mapea `nrc` → `nrc_number`
   - Asigna `country_id = 1` (Honduras)

2. **USERS** → Migra usuarios con company_id
   - Preserva roles
   - Crea relación en `business_users`

3. **CUSTOMERS** → Migra clientes
   - Filtra por company_id
   - Valida emails y teléfonos

4. **ACCOUNTING_ACCOUNTS** → Migra plan de cuentas
   - Mapea group_id usando group_code
   - Preserva balances

5. **SALES + SALES_ITEMS** → Migra facturas
   - Recalcula totales
   - Preserva invoice_number único por company

6. **EXPENSES + PAYMENTS** → Migra gastos y pagos
   - Mapea a cuentas contables
   - Valida referencias cruzadas

### PASO 3: Validar Migración
```bash
# Validación completa
php artisan validate:data

# Validación con detalles
php artisan validate:data --detailed

# Validación y exportar reporte
php artisan validate:data --export
```

**Qué Verifica:**

✅ Conteos de registros por tabla  
✅ Foreign key relationships (sin huérfanos)  
✅ Unicidad de emails y facturas  
✅ Valores nulos críticos  
✅ Balances contables  

**Salida Esperada:**
```
✅ VALIDACIÓN COMPLETADA - SIN ERRORES CRÍTICOS
```

---

## 🔍 Validación Detallada

### Verificar Conteos
```bash
# SQL: Contar registros por tabla
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
SELECT 'expenses', COUNT(*) FROM expenses;
"
```

### Verificar FK Relationships
```bash
# Usuarios sin empresa válida
SELECT COUNT(*) FROM users WHERE company_id NOT IN (SELECT id FROM companies);

# Clientes sin empresa válida
SELECT COUNT(*) FROM customers WHERE company_id NOT IN (SELECT id FROM companies);

# Ventas sin cliente
SELECT COUNT(*) FROM sales WHERE customer_id NOT IN (SELECT id FROM customers);
```

### Verificar Totales
```bash
# Total de ventas por empresa
SELECT company_id, SUM(total) as total_ventas, COUNT(*) as num_ventas 
FROM sales GROUP BY company_id;

# Total de gastos aprobados
SELECT company_id, SUM(amount) as total_gastos 
FROM expenses WHERE status = 'approved' GROUP BY company_id;
```

---

## ↩️ Rollback (Deshacer Migración)

**Si algo sale mal durante la migración:**

### Opción 1: Rollback Automático
```bash
# Limpiar datos migrados (mantiene seeders)
php artisan migrate:rollback-data

# Con confirmación automática (sin prompts)
php artisan migrate:rollback-data --confirm
```

**Resultado:**
- Se vacían todas las tablas operacionales
- Se mantienen: países, monedas, impuestos, grupos contables
- y_code_new queda lista para re-intentar migración

### Opción 2: Restaurar desde Backup
```bash
# Restaurar BD nueva desde backup pre-migración
mysql -u root -h 127.0.0.1 -P 3307 y_code_new < storage/backups/y_code_new_backup_pre_migration.sql

echo "✅ y_code_new restaurada desde backup"
```

### Opción 3: Rollback Manual (No Recomendado)
```bash
# Truncar tablas en orden inverso
mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "
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
"
```

---

## 🐛 Troubleshooting

### Error: "Column not found: 1054"
**Causa:** La BD antigua tiene estructura diferente  
**Solución:** Verificar que los nombres de columnas coinciden
```bash
# Ver estructura de tabla en BD antigua
DESC y_code.users;
DESC y_code_new.users;
```

### Error: "Foreign key constraint failed"
**Causa:** Un registro tiene FK a algo que no existe  
**Solución:** Ejecutar validación y corregir huérfanos
```bash
# Encontrar clientes sin empresa
SELECT * FROM customers WHERE company_id NOT IN (SELECT id FROM companies);

# Eliminar o reasignar
DELETE FROM customers WHERE company_id NOT IN (SELECT id FROM companies);
```

### Error: "Duplicate entry"
**Causa:** Migración ejecutada 2 veces  
**Solución:** Usar `updateOrCreate` (ya implementado)
```bash
# Re-ejecutar migración (es segura, no duplica)
php artisan migrate:data --from-old
```

### Error: "Connection refused"
**Causa:** Puerto o host incorrecto en `.env`  
**Solución:** Verificar conexión
```bash
# Probar conexión a BD antigua
mysql -u root -h 127.0.0.1 -P 3307 y_code -e "SELECT 1;"

# Probar conexión a BD nueva
mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "SELECT 1;"
```

### Error: "Base de datos no existe"
**Causa:** BD antigua no restaurada  
**Solución:** Restaurar desde backup
```bash
# Restaurar y_code desde backup
mysql -u root -h 127.0.0.1 -P 3307 < storage/backups/y_code.sql
```

---

## 📊 Monitoreo Durante Migración

### Ver Progreso en Tiempo Real
```bash
# Terminal 1: Ejecutar migración
php artisan migrate:data --from-old -v

# Terminal 2: Monitorear crecimiento de BD
watch -n 1 'mysql -u root -h 127.0.0.1 -P 3307 y_code_new -e "
SELECT 
  (SELECT COUNT(*) FROM companies) as companies,
  (SELECT COUNT(*) FROM users) as users,
  (SELECT COUNT(*) FROM customers) as customers,
  (SELECT COUNT(*) FROM sales) as sales,
  (SELECT COUNT(*) FROM expenses) as expenses;
"'
```

---

## ✨ Post-Migración

### 1. Verificar Aplicación
```bash
# Compilar código
php artisan tinker --execute="echo 'OK'"

# Correr seeders globales (sin duplicar)
php artisan db:seed

# Limpiar caché
php artisan cache:clear
php artisan config:clear
```

### 2. Verificar API
```bash
# Testear endpoints
curl -X GET http://localhost:8000/api/companies
curl -X GET http://localhost:8000/api/users
curl -X GET http://localhost:8000/api/customers
```

### 3. Backup Post-Migración
```bash
# Crear backup definitivo
mysqldump -u root -h 127.0.0.1 -P 3307 y_code_new > storage/backups/y_code_new_backup_post_migration.sql

echo "✅ Backup post-migración creado"
```

---

## 📝 Checklist Final

- [ ] `.env` configurado con DB_HOST_OLD, DB_DATABASE_OLD
- [ ] Backup pre-migración creado
- [ ] BD antigua accesible (y_code o y_doce_companies)
- [ ] BD nueva lista (y_code_new con seeders)
- [ ] Migración ejecutada (`php artisan migrate:data --from-old`)
- [ ] Validación pasada (`php artisan validate:data` sin errores)
- [ ] Rollback conocido (en caso de emergencia)
- [ ] Backup post-migración creado
- [ ] API testeada y funcionando
- [ ] Equipo notificado de cambios

---

## 🆘 Contacto & Escalada

Si algo sale mal:

1. **NO confundas las BDs** - Verifica siempre cuál estás usando
2. **Restaura desde backup** - Siempre hay un plan B
3. **Ejecuta validación** - Identifica exactamente qué está mal
4. **Consulta los logs** - `storage/logs/` tiene detalles

---

## 📚 Referencias

- **Arquitectura:** Ver `ARQUITECTURA.md`
- **Progreso:** Ver `PROGRESS.md`
- **Seeders:** `database/seeders/`
- **Migraciones:** `database/migrations/`

---

**Status:** ✅ Listo para Producción  
**Última Actualización:** Octubre 29, 2025  
**Versión:** 1.0
