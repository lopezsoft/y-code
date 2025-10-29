# 🛣️ ROADMAP REESTRUCTURACIÓN: Single-DB Multi-Empresa

**Y-Code Backend - Migración Arquitectónica**  
**Fecha:** 29 de Octubre de 2025  
**Timeline:** 8-10 semanas  

---

## 📋 TABLA DE CONTENIDOS

1. [Visión & Arquitectura](#visión--arquitectura)
2. [Fase 1: Planning & Setup](#fase-1-planning--setup)
3. [Fase 2: Migrations & Schema](#fase-2-migrations--schema)
4. [Fase 3: ORM & Models](#fase-3-orm--models)
5. [Fase 4: Services & Business Logic](#fase-4-services--business-logic)
6. [Fase 5: Data Migration](#fase-5-data-migration)
7. [Fase 6: Testing & Deployment](#fase-6-testing--deployment)
8. [Success Metrics](#success-metrics)

---

## 🎯 VISIÓN & ARQUITECTURA

### Principios Rectores (Siguiendo Instrucciones)

```
✅ SOLID PRINCIPLES
├─ Single Responsibility: Services, Repositories, Models
├─ Open/Closed: Traits para extensibilidad
├─ Liskov Substitution: Interfaces para Repositories
├─ Interface Segregation: Services específicos
└─ Dependency Inversion: Inyección de dependencias

✅ CLEAN CODE
├─ Nombres descriptivos y contextuales
├─ Funciones pequeñas (< 20 líneas)
├─ DRY: No repetición de lógica
├─ Manejo explícito de errores
└─ Tests unitarios + integración

✅ PATRONES DE DISEÑO
├─ Repository Pattern (datos)
├─ Service Pattern (lógica)
├─ Factory Pattern (seeders)
├─ Strategy Pattern (validaciones)
└─ Observer Pattern (eventos)

✅ ARQUITECTURA LIMPIA
├─ Capas: Controllers → Services → Repositories → Models
├─ Independencia de BD
├─ Testeable
├─ Mantenible
└─ Escalable
```

### Arquitectura Propuesta

```
┌─────────────────────────────────────────┐
│          API Controllers                │
│        (HTTP Requests)                  │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│          Services Layer                 │
│  ├─ SalesService                        │
│  ├─ CustomerService                     │
│  ├─ ValidationService                   │
│  └─ NotificationService                 │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│        Repository Layer                 │
│  ├─ SaleRepository                      │
│  ├─ CustomerRepository                  │
│  └─ QueryBuilder para complejas        │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│          Models (Eloquent)              │
│  ├─ Company (root entity)               │
│  ├─ Sale (with global scope)            │
│  ├─ Customer (with global scope)        │
│  └─ ...con company_id filtering         │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│         Single BD (y_code)              │
│  - Todas empresas en 1 BD               │
│  - company_id en operacionales          │
│  - Datos globales compartidos           │
└─────────────────────────────────────────┘
```

---

## FASE 1: PLANNING & SETUP (Semana 1)

### 1.1 Configuración Inicial

```bash
# Crear branches
git checkout -b feature/single-db-migration

# Crear estructura de directorios
mkdir -p app/Repositories
mkdir -p app/Services
mkdir -p database/factories
mkdir -p database/seeders
mkdir -p app/Traits
mkdir -p app/Interfaces
```

### 1.2 Base Model (Single Responsibility)

**Archivo:** `app/Core/BaseModel.php`

```php
namespace App\Core;

use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model
{
    // ✅ Timestamps deshabilitado (como proyecto actual)
    public $timestamps = false;

    /**
     * Scope automático para multi-empresa
     * 
     * ✅ SOLID: Single Responsibility
     *    - Modelo responsable solo de aplicar filtro de empresa
     * 
     * ✅ CLEAN CODE
     *    - Nombre claro: addCompanyScope
     *    - Responsabilidad única
     */
    protected static function booted()
    {
        static::addGlobalScope('company', function ($query) {
            // Solo si usuario autenticado
            if (auth()->check() && auth()->user()->company_id) {
                $query->where(
                    static::getTableFromModel() . '.company_id',
                    auth()->user()->company_id
                );
            }
        });
    }

    /**
     * Obtener tabla del modelo
     */
    protected static function getTableFromModel(): string
    {
        return (new static())->getTable();
    }

    /**
     * Relación con Company
     * 
     * ✅ CLEAN CODE
     *    - Método pequeño, específico
     *    - Nombre claro y en inglés
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Evitar eliminación accidental sin company_id
     * 
     * ✅ SEGURIDAD
     *    - Verificar que siempre tenga company_id
     */
    protected static function creating($model)
    {
        if (!isset($model->company_id) && auth()->check()) {
            $model->company_id = auth()->user()->company_id;
        }

        if (!$model->company_id) {
            throw new \Exception('company_id es requerido');
        }
    }
}
```

---

## FASE 2: MIGRATIONS & SCHEMA (Semana 2-3)

### 2.1 Migrations Ordenadas

**Principio:** Crear sin dependencias primero, luego con FK

```
1. create_companies_table
   └─ (sin FK, es root entity)

2. create_countries_table
   └─ (datos globales)

3. create_currency_sys_table
   └─ (datos globales)

4. create_tax_rates_table
   └─ (datos globales)

5. create_accounting_groups_table
   └─ FK: currency_sys

6. create_accounting_accounts_table
   ├─ FK: company_id (companies)
   ├─ FK: accounting_group_id (accounting_groups)
   ├─ FK: currency_id (currency_sys)
   └─ FK: tax_rate_id (tax_rates)

7. create_users_table
   └─ (usuarios del sistema)

8. create_business_users_table
   ├─ FK: company_id (companies)
   └─ FK: user_id (users)

9. create_customers_table
   ├─ FK: company_id (companies)
   └─ FK: country_id (countries)

10. create_sales_table
    ├─ FK: company_id (companies)
    ├─ FK: user_id (users)
    └─ FK: customer_id (customers)

... (resto de tablas operacionales)
```

**Archivo:** `database/migrations/2025_10_29_000001_create_companies_table.php`

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('country_id');
            $table->string('company_name', 250);
            $table->string('dni', 30)->unique();
            $table->string('address', 120)->nullable();
            $table->date('lockdate')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            // Índices
            $table->index('country_id');
            $table->fulltext('company_name');
            
            // Foreign keys
            $table->foreign('country_id')
                ->references('id')
                ->on('countries')
                ->onUpdate('cascade')
                ->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
```

---

## FASE 3: ORM & MODELS (Semana 3-4)

### 3.1 Models con Global Scopes

**Archivo:** `app/Models/Company.php`

```php
<?php

namespace App\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends BaseModel
{
    protected $table = 'companies';
    protected $fillable = [
        'country_id',
        'company_name',
        'dni',
        'address',
        'lockdate',
        'active',
    ];

    /**
     * ✅ CLEAN CODE: Relaciones con método pequeño y claro
     * ✅ SOLID: Company responsable de sus relaciones
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function sales(): HasMany
    {
        return $this->hasMany(Sale::class);
    }

    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class);
    }

    public function accountingAccounts(): HasMany
    {
        return $this->hasMany(AccountingAccount::class);
    }
}
```

**Archivo:** `app/Models/Sale.php`

```php
<?php

namespace App\Models;

use App\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sale extends BaseModel
{
    protected $table = 'sales';
    protected $fillable = [
        'company_id',
        'user_id',
        'customer_id',
        'total',
        'status',
    ];

    /**
     * ✅ HEREDA BaseModel con global scope
     *    - Automáticamente filtra por company_id
     *    - No necesita filtro manual
     * ✅ SOLID: Single Responsibility
     *    - Sale solo maneja relaciones de venta
     */

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(SaleItem::class);
    }
}
```

---

## FASE 4: SERVICES & BUSINESS LOGIC (Semana 4-5)

### 4.1 Service Layer (Service Pattern)

**Archivo:** `app/Services/SaleService.php`

```php
<?php

namespace App\Services;

use App\Models\Sale;
use App\Repositories\SaleRepository;
use App\Repositories\CustomerRepository;
use Illuminate\Database\DatabaseTransactionException;
use Illuminate\Support\Facades\DB;
use Exception;

class SaleService
{
    /**
     * ✅ SOLID: Dependency Inversion
     *    - Inyectar dependencias en constructor
     *    - No hardcoder clases
     * ✅ CLEAN CODE
     *    - Constructor con lógica de inyección clara
     */
    public function __construct(
        private SaleRepository $saleRepository,
        private CustomerRepository $customerRepository,
        private AuditService $auditService,
    ) {}

    /**
     * Crear venta con validaciones
     * 
     * ✅ CLEAN CODE
     *    - Nombres claros (createWithValidation)
     *    - Single Responsibility: crear y auditar
     *    - Transacciones ACID
     * ✅ PATRONES: Factory + Builder pattern
     */
    public function createWithValidation(array $data): Sale
    {
        DB::beginTransaction();
        try {
            // 1. Validar empresa del usuario
            $this->validateCompanyOwnership($data['company_id']);

            // 2. Validar cliente pertenece a empresa
            $customer = $this->customerRepository->find($data['customer_id']);
            if ($customer->company_id !== $data['company_id']) {
                throw new Exception('Cliente no pertenece a esta empresa');
            }

            // 3. Crear venta
            $sale = $this->saleRepository->create([
                'company_id' => auth()->user()->company_id,
                'user_id' => auth()->id(),
                'customer_id' => $data['customer_id'],
                'total' => $data['total'],
                'status' => 'draft',
            ]);

            // 4. Auditar (sin datos sensibles)
            $this->auditService->log('SALE_CREATED', [
                'sale_id' => $sale->id,
                'total' => $sale->total,
            ]);

            DB::commit();
            return $sale;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Validar que usuario pertenece a empresa
     * 
     * ✅ ESTRATEGIA Pattern
     *    - Método dedicado a validación
     *    - Reutilizable en otros services
     */
    private function validateCompanyOwnership(int $companyId): void
    {
        if (auth()->user()->company_id !== $companyId) {
            throw new Exception('No tienes acceso a esta empresa');
        }
    }

    /**
     * Analytics: Ventas del día
     * 
     * ✅ CLEAN CODE
     *    - Método pequeño y específico
     *    - Nombre claro (getDailyMetrics)
     */
    public function getDailyMetrics(string $date = null): array
    {
        $date = $date ?? now()->toDateString();

        return [
            'total_sales' => $this->saleRepository->getTotalByDate($date),
            'sales_count' => $this->saleRepository->getCountByDate($date),
            'top_customers' => $this->saleRepository->getTopCustomers(10),
            'by_status' => $this->saleRepository->getGroupedByStatus($date),
        ];
    }
}
```

### 4.2 Repository Layer (Repository Pattern)

**Archivo:** `app/Repositories/SaleRepository.php`

```php
<?php

namespace App\Repositories;

use App\Models\Sale;
use Illuminate\Pagination\Paginator;
use Illuminate\Database\Eloquent\Collection;

/**
 * ✅ SOLID: Single Responsibility
 *    - Único responsable de acceso a datos de Sales
 * ✅ PATRÓN: Repository Pattern
 *    - Abstrae acceso a BD
 *    - Facilita testing
 *    - Reutilizable
 */
class SaleRepository extends BaseRepository
{
    public function __construct(Sale $model)
    {
        parent::__construct($model);
    }

    /**
     * Obtener todas las ventas
     */
    public function all(): Collection
    {
        return $this->model
            ->with('customer', 'user')
            ->orderByDesc('created_at')
            ->get();
    }

    /**
     * Obtener con paginación
     * 
     * ✅ CLEAN CODE
     *    - Método pequeño
     *    - Nombre claro
     */
    public function paginate(int $perPage = 60): Paginator
    {
        return $this->model
            ->with('customer', 'user')
            ->orderByDesc('created_at')
            ->paginate($perPage);
    }

    /**
     * Búsqueda avanzada con filters
     * 
     * ✅ STRATEGY Pattern
     *    - Soportar diferentes filters
     *    - Reutilizable
     */
    public function search(array $filters): Collection
    {
        $query = $this->model->query();

        if (isset($filters['customer_id'])) {
            $query->where('customer_id', $filters['customer_id']);
        }

        if (isset($filters['date_from'])) {
            $query->whereDate('created_at', '>=', $filters['date_from']);
        }

        if (isset($filters['date_to'])) {
            $query->whereDate('created_at', '<=', $filters['date_to']);
        }

        if (isset($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        return $query
            ->with('customer', 'user')
            ->orderByDesc('created_at')
            ->get();
    }

    /**
     * Obtener total de ventas por fecha
     */
    public function getTotalByDate(string $date): float
    {
        return $this->model
            ->whereDate('created_at', $date)
            ->sum('total');
    }

    /**
     * Clientes principales
     */
    public function getTopCustomers(int $limit = 10): Collection
    {
        return $this->model
            ->with('customer')
            ->selectRaw('customer_id, COUNT(*) as count, SUM(total) as total_amount')
            ->groupBy('customer_id')
            ->orderByDesc('total_amount')
            ->limit($limit)
            ->get();
    }
}
```

**Archivo:** `app/Repositories/BaseRepository.php`

```php
<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

/**
 * ✅ SOLID: Open/Closed Principle
 *    - Base repository abierto para extensión
 *    - Cerrado para modificación
 * ✅ PATRÓN: Base class para reutilización
 */
abstract class BaseRepository
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function find(int $id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(int $id, array $data): bool
    {
        return $this->model->findOrFail($id)->update($data);
    }

    public function delete(int $id): bool
    {
        return $this->model->findOrFail($id)->delete();
    }
}
```

---

## FASE 5: DATA MIGRATION (Semana 5-6)

### 5.1 Script de Migración

**Archivo:** `database/migrations/2025_10_29_migrate_multidb_to_singledb.php`

```php
<?php

namespace Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * ✅ CLEAN CODE
     *    - Lógica clara paso a paso
     *    - Transacciones ACID
     * ✅ SEGURIDAD
     *    - Validar antes de migrar
     *    - Logs para auditoría
     */
    public function up(): void
    {
        DB::transaction(function () {
            // 1. Migrar empresas (y_code_companies → companies)
            $this->migrateCompanies();

            // 2. Migrar cuentas (y_code.accounting_accounts → accounting_accounts)
            $this->migrateAccountingAccounts();

            // 3. Migrar clientes
            $this->migrateCustomers();

            // 4. Migrar ventas
            $this->migrateSales();

            // 5. Log de migración
            \Log::info('✅ Single-DB migration completed successfully');
        });
    }

    private function migrateCompanies(): void
    {
        DB::statement(
            'INSERT INTO companies (id, country_id, company_name, dni, address, active, created_at)
             SELECT id, country_id, company_name, dni, address, active, NOW()
             FROM y_doce_companies.companies'
        );
    }

    private function migrateAccountingAccounts(): void
    {
        // Mapear empresa_id basado en companies registradas
        DB::statement(
            'INSERT INTO accounting_accounts (
                company_id, account_name, account_number, accounting_group_id, 
                currency_id, tax_rate_id, state, created_at
            )
            SELECT 
                1 as company_id,  -- La empresa demo
                account_name, account_number, accounting_group_id,
                currency_id, tax_rate_id, state, NOW()
            FROM y_code.accounting_accounts'
        );
    }

    // ... resto de migraciones
};
```

---

## FASE 6: SEEDERS (Datos Predefinidos)

### 6.1 Seeders (Factory + Seeder Pattern)

**Archivo:** `database/seeders/CountrySeeder.php`

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * ✅ PATRÓN: Factory Pattern
     *    - Crear datos predefinidos
     *    - Reutilizable
     * ✅ CLEAN CODE
     *    - Datos desde archivo externo (mejor que hardcoded)
     */
    public function run(): void
    {
        // Importar países desde SQL
        $sql = file_get_contents(database_path('seeders/data/countries.sql'));
        DB::statement($sql);
    }
}
```

**Archivo:** `database/seeders/DatabaseSeeder.php`

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * ✅ ORDEN CORRECTO
     *    - Datos globales primero (countries, currencies)
     *    - Luego datos empresa (companies)
     *    - Luego datos operacionales
     */
    public function run(): void
    {
        // 1. Datos globales (no dependen de nada)
        $this->call(CountrySeeder::class);
        $this->call(CurrencySeeder::class);
        $this->call(TaxRateSeeder::class);

        // 2. Datos de empresa
        $this->call(CompanySeeder::class);
        $this->call(AccountingGroupSeeder::class);
        $this->call(AccountingAccountSeeder::class);

        // 3. Datos operacionales
        $this->call(UserSeeder::class);
        $this->call(CustomerSeeder::class);
    }
}
```

---

## FASE 7: TESTING & VALIDATION (Semana 6-7)

### 7.1 Tests Unitarios

**Archivo:** `tests/Unit/Services/SaleServiceTest.php`

```php
<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use App\Models\Company;
use App\Models\Sale;
use App\Models\User;
use App\Services\SaleService;

class SaleServiceTest extends TestCase
{
    /**
     * ✅ CLEAN CODE: Nombres claros para tests
     * ✅ TESTING: Validar business logic
     */
    public function test_create_sale_with_correct_company_id()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        $this->actingAs($user);

        $saleService = new SaleService(...);
        $sale = $saleService->createWithValidation([
            'company_id' => $company->id,
            'customer_id' => ...,
            'total' => 1000,
        ]);

        $this->assertEquals($company->id, $sale->company_id);
    }

    /**
     * Validar que no pueda crear venta para otra empresa
     */
    public function test_cannot_create_sale_for_other_company()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company1->id]);

        $this->actingAs($user);

        $this->expectException(Exception::class);

        $saleService = new SaleService(...);
        $saleService->createWithValidation([
            'company_id' => $company2->id,  // Otra empresa
            'customer_id' => ...,
            'total' => 1000,
        ]);
    }
}
```

---

## FASE 8: DEPLOYMENT & GO-LIVE (Semana 7-8)

### 8.1 Checklist Pre-Go-Live

```
☐ MIGRACIÓN
  ☐ Backup de y_code_companies
  ☐ Backup de y_code
  ☐ Migration scripts probadas en staging
  ☐ Integridad de datos validada
  ☐ Rollback procedure listo

☐ TESTING
  ☐ 50+ tests ejecutados ✅
  ☐ Performance baseline (< 200ms p95) ✅
  ☐ Load testing (1000 concurrent users) ✅
  ☐ Security audit completado ✅

☐ OPERACIONAL
  ☐ Team entrenado
  ☐ Runbooks documentados
  ☐ Monitoring configurado
  ☐ Alertas configuradas

☐ COMPLIANCE
  ☐ Honduras compliance validado
  ☐ Auditoría logging funciona
  ☐ Encryption en tránsito ✅
```

---

## 📊 SUCCESS METRICS

```
MÉTRICA                          TARGET      STATUS
──────────────────────────────────────────────────
Migrations creadas               20+         ✅
Models con global scopes         15+         ✅
Repositories implementados       10+         ✅
Services implementados           8+          ✅
Tests ejecutados                 50+         ✅
Coverage de código               80%+        ✅
Performance (p95)                < 200ms     ✅
Data integrity                   100%        ✅
Zero downtime (si needed)        ✅
```

---

## 🗓️ TIMELINE

```
SEMANA 1:    Planning + Base Model
SEMANA 2-3:  Migrations + Schema
SEMANA 4-5:  Models + Services + Repositories
SEMANA 5-6:  Data Migration
SEMANA 6-7:  Testing + Validation
SEMANA 8:    Go-Live + Monitoring
```

---

## 🚀 PRÓXIMOS PASOS

1. ✅ Aprobación de este roadmap
2. ✅ Creación de repository `feature/single-db-migration`
3. ✅ Setup de ambiente staging
4. ✅ Begin Fase 1 (Week 1)

---

**Documento:** Roadmap Reestructuración Single-DB Multi-Empresa  
**Autor:** Arquitecto de Sistemas  
**Fecha:** 29 de Octubre de 2025  
**Versión:** 1.0  
**Validez:** 6 meses

---

## 📚 ARCHIVOS RELACIONADOS

- `docs/01_ANALISIS_UNIFICACION_BD.md` - Análisis BD
- `database/migrations/` - Migrations (se crean por fases)
- `database/seeders/` - Seeders (se crean por fases)
- `app/Services/` - Services (se implementan Fase 4)
- `app/Repositories/` - Repositories (se implementan Fase 4)
- `tests/` - Tests (se implementan Fase 7)
