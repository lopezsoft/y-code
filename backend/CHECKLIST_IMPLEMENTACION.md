# ✅ CHECKLIST DE IMPLEMENTACIÓN - ROADMAP DE MEJORAS

## FASE 1: SEGURIDAD CRÍTICA (Semana 1-2)

### 1.1 Validación y Sanitización de Datos

- [ ] **Crear SafeCrudRepository**
  - [ ] Implementar whitelist de tablas
  - [ ] Validar campos permitidos
  - [ ] Reemplazar concatenación con Query Builder
  - [ ] Tests unitarios para SQL injection
  - **Tiempo:** 2 días
  - **Archivo:** `app/Repositories/SafeCrudRepository.php`

- [ ] **Crear Form Requests**
  - [ ] CreateSaleRequest
  - [ ] UpdateSaleRequest
  - [ ] CreateCustomerRequest
  - [ ] CreateProductRequest
  - **Tiempo:** 1 día
  - **Directorio:** `app/Http/Requests/`

### 1.2 Auditoría Segura

- [ ] **Crear AuditService**
  - [ ] Implementar sanitización de campos sensibles
  - [ ] Crear tabla `audit_logs` mejorada
  - [ ] Reemplazar `tb_audit` genérica
  - [ ] Agregar índices apropiados
  - **Tiempo:** 1.5 días
  - **Archivos:** `app/Services/AuditService.php`, migration

- [ ] **Lista de campos sensibles a proteger**
  ```
  - password
  - token
  - api_token
  - credit_card
  - rtn (ID Honduras)
  - pin
  - secret
  ```

### 1.3 Rate Limiting

- [ ] **Configurar throttling en routes**
  - [ ] Endpoint login: 5 intentos/minuto
  - [ ] Endpoint search: 60 requests/minuto
  - [ ] Reportes: 10 requests/minuto
  - **Tiempo:** 0.5 días
  - **Archivo:** `routes/api.php`

- [ ] **Tests de rate limiting**
  - [ ] Simular exceso de requests
  - [ ] Verificar respuesta 429
  - **Tiempo:** 1 día
  - **Archivo:** `tests/Feature/RateLimitTest.php`

### 1.4 Exception Handling

- [ ] **Mejorar Handler.php**
  - [ ] Custom error responses por tipo
  - [ ] No exponer stack traces en producción
  - [ ] Logging estructurado
  - **Tiempo:** 1 día
  - **Archivo:** `app/Exceptions/Handler.php`

- [ ] **Crear excepciones personalizadas**
  - [ ] InvalidCompanyException
  - [ ] UnauthorizedException
  - [ ] ValidationException
  - **Tiempo:** 0.5 días
  - **Directorio:** `app/Exceptions/Custom/`

**SUBTOTAL FASE 1: 7 días**

---

## FASE 2: ARQUITECTURA BASE (Semana 3-4)

### 2.1 Implementar Service Layer

- [ ] **Crear base de Servicios**
  - [ ] SaleService
  - [ ] CustomerService
  - [ ] ProductService
  - [ ] CompanyService
  - **Tiempo:** 4 días
  - **Directorio:** `app/Services/`

- [ ] **Inyección de dependencias**
  - [ ] Registrar servicios en container
  - [ ] Reemplazar llamadas estáticas
  - **Tiempo:** 1 día
  - **Archivo:** `config/app.php` service providers

### 2.2 Implementar Repository Pattern

- [ ] **Crear Repositorios**
  - [ ] SaleRepository
  - [ ] CustomerRepository
  - [ ] ProductRepository
  - [ ] CompanyRepository
  - **Tiempo:** 3 días
  - **Directorio:** `app/Repositories/`

- [ ] **Implementar métodos comunes**
  - [ ] all(), paginate(), find()
  - [ ] where(), search()
  - [ ] create(), update(), delete()

### 2.3 Relaciones en Modelos

- [ ] **Definir relaciones**
  - [ ] Sale::customer(), details(), company()
  - [ ] SaleDetail::sale(), product()
  - [ ] Customer::company(), sales()
  - [ ] Product::company(), categories()
  - **Tiempo:** 2 días
  - **Directorio:** `app/Models/`

- [ ] **Agregar scopes útiles**
  - [ ] forCompany()
  - [ ] active()
  - [ ] recent()
  - [ ] withRelations()
  - **Tiempo:** 1 día

### 2.4 Refactor de Controllers

- [ ] **Dividir MasterController**
  - [ ] CountryController
  - [ ] CityController
  - [ ] CurrencyController
  - [ ] TaxController
  - [ ] UserTypeController
  - **Tiempo:** 2 días
  - **Directorio:** `app/Http/Controllers/Master/`

- [ ] **Limpiar SalesController**
  - [ ] Inyectar SaleService
  - [ ] Usar Form Requests
  - [ ] Implementar Policies
  - **Tiempo:** 1.5 días

**SUBTOTAL FASE 2: 14.5 días**

---

## FASE 3: RENDIMIENTO (Semana 5-6)

### 3.1 Implementar Caché

- [ ] **Caché de datos maestros**
  - [ ] MasterDataService::getCountries()
  - [ ] MasterDataService::getCities()
  - [ ] MasterDataService::getCurrencies()
  - [ ] MasterDataService::getTaxRates()
  - **Tiempo:** 2 días
  - **Archivo:** `app/Services/MasterDataService.php`

- [ ] **Invalidación de caché**
  - [ ] Event listeners al crear/editar maestros
  - [ ] Cache::flush() en lugares apropiados
  - **Tiempo:** 1 día

### 3.2 Eager Loading Optimization

- [ ] **Auditar queries con Debugbar**
  - [ ] Instalar Laravel Debugbar
  - [ ] Identificar N+1 en endpoints principales
  - [ ] Documentar resultados
  - **Tiempo:** 1.5 días

- [ ] **Aplicar eager loading**
  - [ ] Todos los endpoints de lectura
  - [ ] Tests de performance
  - **Tiempo:** 2 días

### 3.3 Índices de Base de Datos

- [ ] **Crear migration de índices**
  - [ ] Índices simples (FK)
  - [ ] Índices compuestos (search)
  - [ ] FULLTEXT para búsquedas
  - **Tiempo:** 1.5 días
  - **Archivo:** `database/migrations/add_optimized_indexes.php`

### 3.4 Cursor Pagination (si aplica)

- [ ] **Implementar CursorPagination**
  - [ ] Crear trait o helper
  - [ ] Integrar en endpoints grandes
  - **Tiempo:** 1.5 días

- [ ] **Tests de paginación**
  - [ ] Verificar offset vs cursor performance
  - **Tiempo:** 1 día

**SUBTOTAL FASE 3: 10.5 días**

---

## FASE 4: TESTING (Semana 7-8)

### 4.1 Tests de Integración

- [ ] **Crear test suite para Ventas**
  - [ ] Test crear venta
  - [ ] Test actualizar venta
  - [ ] Test eliminar venta
  - [ ] Test búsqueda de ventas
  - **Tiempo:** 3 días
  - **Archivo:** `tests/Feature/SalesTest.php`

- [ ] **Tests de Clientes**
  - [ ] CRUD completo
  - [ ] Búsqueda con filtros
  - **Tiempo:** 2 días
  - **Archivo:** `tests/Feature/CustomersTest.php`

- [ ] **Tests de Autenticación**
  - [ ] Login exitoso
  - [ ] Login fallido
  - [ ] Token expiration
  - **Tiempo:** 1.5 días
  - **Archivo:** `tests/Feature/AuthTest.php`

### 4.2 Tests de Seguridad

- [ ] **SQL Injection**
  - [ ] Intentar payloads maliciosos
  - [ ] Verificar que fallan correctamente
  - **Tiempo:** 1.5 días
  - **Archivo:** `tests/Feature/SecurityTest.php`

- [ ] **Autorización**
  - [ ] Usuario A no accede a datos de Usuario B
  - [ ] Admin accede a todo
  - [ ] Rol vendedor limitado
  - **Tiempo:** 2 días

- [ ] **Rate Limiting**
  - [ ] Exceso de requests retorna 429
  - [ ] Headers correctos (X-RateLimit-*)
  - **Tiempo:** 1 día

### 4.3 Tests Unitarios

- [ ] **Servicios**
  - [ ] SaleService::create()
  - [ ] AuditService::log()
  - [ ] MasterDataService (con cache)
  - **Tiempo:** 2 días
  - **Directorio:** `tests/Unit/Services/`

- [ ] **Modelos**
  - [ ] Sale::getTotal()
  - [ ] Sale::getFinalTotal()
  - [ ] Relaciones
  - **Tiempo:** 1.5 días
  - **Directorio:** `tests/Unit/Models/`

**SUBTOTAL FASE 4: 15 días**

---

## FASE 5: DOCUMENTACIÓN (Semana 9)

### 5.1 OpenAPI/Swagger

- [ ] **Instalar Laravel Swagger package**
  ```bash
  composer require darkaonline/l5-swagger
  php artisan vendor:publish --provider="L5Swagger\L5SwaggerServiceProvider"
  ```
  - **Tiempo:** 0.5 días

- [ ] **Documentar endpoints principales**
  - [ ] Rutas de autenticación
  - [ ] CRUD de ventas
  - [ ] CRUD de clientes
  - [ ] Reportes
  - **Tiempo:** 3 días
  - **Archivo:** `storage/api-docs/api-docs.json` (auto-generado)

- [ ] **Agregar modelos en Swagger**
  - [ ] Sale
  - [ ] SaleDetail
  - [ ] Customer
  - [ ] Product
  - **Tiempo:** 1.5 días

### 5.2 Documentación de Código

- [ ] **Comentarios PHPDoc**
  - [ ] Todas las clases públicas
  - [ ] Todos los métodos públicos
  - [ ] Parámetros y return types
  - **Tiempo:** 3 días

- [ ] **README.md mejorado**
  - [ ] Setup del proyecto
  - [ ] Variables de entorno
  - [ ] Scripts de migración
  - [ ] Cómo correr tests
  - **Tiempo:** 1 día
  - **Archivo:** `README.md`

### 5.3 Postman Collection

- [ ] **Crear colección de endpoints**
  - [ ] Pre-request scripts para auth
  - [ ] Variables de entorno
  - [ ] Test scripts en requests
  - **Tiempo:** 2 días
  - **Archivo:** `postman/Y-Code-API.postman_collection.json`

**SUBTOTAL FASE 5: 11 días**

---

## FASE 6: MONITOREO Y LOGGING (Semana 10)

### 6.1 Structured Logging

- [ ] **Configurar logging centralizado**
  - [ ] CloudWatch (AWS)
  - [ ] O ELK (self-hosted)
  - **Tiempo:** 2 días

- [ ] **Crear custom logger**
  - [ ] Logs de negocio
  - [ ] Logs de error
  - [ ] Logs de seguridad
  - **Tiempo:** 1.5 días
  - **Archivo:** `app/Logging/CustomLogger.php`

### 6.2 Error Tracking

- [ ] **Integrar Sentry**
  ```bash
  composer require sentry/sentry-laravel
  php artisan sentry:publish
  ```
  - **Tiempo:** 1 día

- [ ] **Configurar alertas**
  - [ ] Errores críticos vía email
  - [ ] Dashboard en Sentry
  - **Tiempo:** 1 día

### 6.3 Performance Monitoring

- [ ] **Instalar New Relic (si presupuesto permite)**
  - [ ] O usar Laravel Telescope (gratis)
  - **Tiempo:** 1.5 días

**SUBTOTAL FASE 6: 7 días**

---

## FASE 7: OPTIMIZACIONES AVANZADAS (Optional)

### 7.1 Event Sourcing para Auditoría

- [ ] **Implementar Event Sourcing**
  - [ ] SaleCreatedEvent
  - [ ] SaleUpdatedEvent
  - [ ] SaleCancelledEvent
  - **Tiempo:** 5 días

### 7.2 CQRS Pattern (si se necesita)

- [ ] **Separar lectura de escritura**
  - [ ] Commands para mutaciones
  - [ ] Queries para lectura
  - **Tiempo:** 10 días

### 7.3 Microservicios (largo plazo)

- [ ] **Extraer servicios independientes**
  - [ ] Sales Service
  - [ ] Reporting Service
  - [ ] Inventory Service
  - **Tiempo:** 30+ días

---

## TIMELINE RECOMENDADO

```
Sprint 1 (5 días):    FASE 1 - Seguridad crítica
Sprint 2 (7 días):    FASE 2 (parte 1) - Servicios
Sprint 3 (7.5 días):  FASE 2 (parte 2) - Repositorios
Sprint 4 (5.5 días):  FASE 3 - Rendimiento
Sprint 5 (8 días):    FASE 4 (parte 1) - Tests integración
Sprint 6 (7 días):    FASE 4 (parte 2) - Tests seguridad
Sprint 7 (5.5 días):  FASE 5 - Documentación
Sprint 8 (3.5 días):  FASE 6 - Monitoreo

Total: 10-12 semanas (3 meses)
```

---

## MÉTRICAS DE ÉXITO

### Por Fase

#### ✅ FASE 1 Completada:
- [ ] 0 vulnerabilidades de SQL injection
- [ ] Auditoría NO registra datos sensibles
- [ ] Rate limiting funcionando (429 response)
- [ ] Errores no exponen stack traces

#### ✅ FASE 2 Completada:
- [ ] 100% de queries pasan por Repository
- [ ] 0 métodos estáticos en lógica de negocio
- [ ] All Controllers < 200 líneas
- [ ] Modelos con relaciones explícitas

#### ✅ FASE 3 Completada:
- [ ] 0 N+1 queries en endpoints principales
- [ ] Datos maestros cacheados (< 100ms)
- [ ] Load time promedio < 500ms
- [ ] DB CPU < 30%

#### ✅ FASE 4 Completada:
- [ ] Code coverage > 70%
- [ ] Todos los endpoints tienen tests
- [ ] Security tests passing
- [ ] CI/CD pipeline verde

#### ✅ FASE 5 Completada:
- [ ] Swagger documentado
- [ ] Postman collection funcional
- [ ] Código con PHPDoc completo
- [ ] README actualizado

---

## DEPENDENCIAS POR PAQUETE

```
composer require darkaonline/l5-swagger
composer require sentry/sentry-laravel
```

---

## ARCHIVOS A CREAR/MODIFICAR

### Nuevos Archivos:
```
app/Services/
  ├── SaleService.php
  ├── CustomerService.php
  ├── AuditService.php
  └── MasterDataService.php

app/Repositories/
  ├── SaleRepository.php
  ├── CustomerRepository.php
  └── SafeCrudRepository.php

app/Http/Requests/
  ├── CreateSaleRequest.php
  ├── UpdateSaleRequest.php
  └── CreateCustomerRequest.php

app/Exceptions/Custom/
  ├── InvalidCompanyException.php
  └── UnauthorizedException.php

app/Traits/
  └── DatabaseTransaction.php

app/Policies/
  ├── SalePolicy.php
  └── CustomerPolicy.php

tests/Feature/
  ├── SalesTest.php
  ├── SecurityTest.php
  └── RateLimitTest.php

database/migrations/
  └── 2025_10_29_create_audit_logs_table.php
```

### Archivos a Modificar:
```
routes/api.php (rate limiting)
config/app.php (service registration)
app/Exceptions/Handler.php (error handling)
app/Models/Sale.php (relaciones)
app/Http/Controllers/Sales/SalesController.php (refactor)
```

---

## COMANDOS ÚTILES DURANTE IMPLEMENTACIÓN

```bash
# Verificar tests
php artisan test

# Migrar base de datos
php artisan migrate

# Generar Swagger docs
php artisan l5-swagger:generate

# Code style
./vendor/bin/pint

# Static analysis
./vendor/bin/phpstan analyse app

# Ver queries ejecutadas (en dev)
php artisan tinker
# > DB::listen(fn($q) => dump($q->sql, $q->bindings));
```

---

## PUNTOS DE CONTROL (Checkpoints)

Después de cada fase, ejecutar:
```bash
# Tests
php artisan test --coverage

# Seguridad
composer audit

# Performance
php artisan tinker
# Verificar queries en dashboard

# Coverage mínimo
- FASE 1: Security tests passing
- FASE 2: 50% code coverage
- FASE 3: Performance benchmarks met
- FASE 4: 70% code coverage
- FASE 5: All APIs documented
```

---

## RIESGOS Y MITIGACIÓN

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|-----------|
| Regresiones al refactor | Media | Alto | Tests exhaustivos, CI/CD |
| Performance degrada | Baja | Alto | Benchmarks antes/después |
| Deuda técnica acumulada | Alta | Medio | Code reviews obligatorios |
| Scope creep | Alta | Medio | Mantener foco en fases |
| Equipo desmotivado | Baja | Medio | Celebrar completión de fases |

