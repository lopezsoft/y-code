# 🏗️ ARQUITECTURA: ACTUAL vs PROPUESTA

## ARQUITECTURA ACTUAL (Problemática)

```
┌────────────────────────────────────────────────────────────────┐
│                      CLIENTE (Frontend)                         │
└────────────────────┬─────────────────────────────────────────┘
                     │
                     │ HTTP Request
                     │
┌────────────────────▼─────────────────────────────────────────┐
│                   API Routes (api.php)                        │
│  /api/v1/sales → SalesController                             │
│  /api/v1/crud → TableCrudController                          │
│  /api/v1/auth → AuthController                               │
└────────────────────┬─────────────────────────────────────────┘
                     │
                     │
┌────────────────────▼─────────────────────────────────────────┐
│            Controllers (SalesController.php)                  │
│ ❌ Contiene lógica de negocio                                 │
│ ❌ Queries directas a DB                                      │
│ ❌ Sin inyección de dependencias                              │
│ ❌ Manejo de transacciones mixto                              │
└────────┬─────────────────────┬────────────────────────────┬──┘
         │                     │                            │
         │                     │                            │
    ┌────▼──┐          ┌─────▼──┐                 ┌────────▼──┐
    │        │          │        │                 │           │
    │        │          │        │                 │           │
┌───▼──┐ ┌──▼──┐ ┌─────▼──┐ ┌──▼──┐  ┌──────────▼──┐  ┌────▼──┐
│      │ │     │ │        │ │     │  │             │  │       │
│CrudC │ │Cmpy │ │Special │ │...  │  │  CrudClass  │  │ Models│
│lass  │ │Class│ │Services│ │     │  │  (Estático) │  │ (Vacío)
│      │ │     │ │        │ │     │  │ ❌ No Tests │  │       │
└───┬──┘ └──┬──┘ └────┬───┘ └──┬──┘  └─────┬──────┘  └────┬───┘
    │       │         │        │            │             │
    │       │         │        │            │             │
    └───┬───┴─────────┴────────┴────────────┴─────────────┘
        │
        │ DB::table() ⚠️ UNSAFE
        │ DB::select() ⚠️ VULNERABLE
        │
┌───────▼────────────────────────────────────────────────────┐
│                   Database (MySQL)                          │
│  ❌ Sin índices de búsqueda                                │
│  ❌ Auditoría registra TODO (sensibles)                    │
│  ❌ N+1 queries potenciales                               │
│  ❌ Sin optimización                                       │
└────────────────────────────────────────────────────────────┘
```

### Problemas Visibles

```
SEGURIDAD:
├─ Controllers hacen queries directo (SQL injection)
├─ Validación en CrudClass (tarde)
└─ Auditoría sin filtros (data leak)

PERFORMANCE:
├─ N+1 queries (Models sin relaciones)
├─ Sin caché (maestros consultados N veces)
└─ Paginación offset (O(n))

MANTENIBILIDAD:
├─ Controllers monolíticos (200+ líneas)
├─ Lógica duplicada entre controllers
├─ Sin tests
└─ Métodos estáticos (no testeable)

ESCALABILIDAD:
├─ DB sobrecargada por queries ineficientes
├─ Sin queue para reportes pesados
└─ Imposible extraer a microservicios
```

---

## ARQUITECTURA PROPUESTA (Mejorada)

```
┌────────────────────────────────────────────────────────────────┐
│                      CLIENTE (Frontend)                         │
└────────────────────┬─────────────────────────────────────────┘
                     │
                     │ HTTP Request
                     │
┌────────────────────▼─────────────────────────────────────────┐
│              Middleware Stack                                 │
│  ✅ Auth::api                                                │
│  ✅ Throttle (Rate Limiting)                                 │
│  ✅ CORS                                                      │
│  ✅ Logging                                                   │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│              API Routes (api.php)                             │
│  ✅ Versionado (/api/v1)                                     │
│  ✅ Con rate limiting específico                             │
│  ✅ Grouped by resource                                      │
│  ✅ Explicit authorization                                   │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│           Controllers (Slim & Focused)                        │
│  ✅ < 150 líneas cada uno                                    │
│  ✅ Solo: validar input → llamar service → retornar         │
│  ✅ No contiene lógica de negocio                            │
│  ✅ Inyección de dependencias                                │
└────────────┬────────────────────────────────────────┬───────┘
             │                                        │
      ┌──────▼────────┐                    ┌─────────▼──────┐
      │                │                    │                │
      │   Policies     │                    │   Requests     │
      │  ✅ Autorizar  │                    │ ✅ Validar    │
      │                │                    │                │
      └────────────────┘                    └────────────────┘
             │                                        │
             └────────────────┬────────────────────────┘
                              │
                     ┌────────▼────────┐
                     │                 │
             ┌───────▼──────┐   ┌──────▼────────┐
             │              │   │               │
             │  Services    │   │  Repositories │
             │              │   │               │
             │ ✅ Lógica de │   │ ✅ Acceso a  │
             │   negocio    │   │    datos     │
             │              │   │               │
             │ SaleService  │   │ SaleRepository
             │ CustomerSvc  │   │ CustomerRepo
             │ ReportingSvc │   │ ProductRepo
             │              │   │               │
             └───────┬──────┘   └──────┬────────┘
                     │                 │
                     │                 │
             ┌───────▼─────────────────▼──────┐
             │                                 │
             │         Models/Eloquent         │
             │  ✅ Relaciones explícitas       │
             │  ✅ Scopes para queries comunes │
             │  ✅ Casts automáticos          │
             │                                 │
             │  Sale::with('customer',        │
             │        'details',              │
             │        'company')              │
             │                                 │
             └───────┬─────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    ┌───▼────┐  ┌───▼────┐  ┌───▼────┐
    │ Events  │  │ Traits  │  │ Scopes │
    │ ✅ Model│  │ ✅ DRY │  │ ✅ DRY │
    │ Hooks   │  │ Code   │  │ Queries
    └─────────┘  └─────────┘  └────────┘
        │            │            │
        └────────────┼────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│                  Caching Layer                             │
│  ✅ Redis para datos maestros                             │
│  ✅ Query result caching                                  │
│  ✅ Invalidación inteligente                              │
└────────────────────┬───────────────────────────────────────┘
                     │
┌────────────────────▼───────────────────────────────────────┐
│              Database (Optimizado)                         │
│  ✅ Índices estratégicos                                   │
│  ✅ Queries builder de Laravel                            │
│  ✅ Prepared statements (seguro)                          │
│  ✅ Eager loading (0 N+1)                                │
│  ✅ Auditoría sanitizada                                  │
└────────────────────────────────────────────────────────────┘

            │                                 │
            │                                 │
    ┌───────▼───────┐           ┌───────────▼────┐
    │               │           │                │
    │  Queue (Jobs) │           │  Log Handler   │
    │  ✅ Reportes  │           │ ✅ Structured │
    │  ✅ Emailing  │           │ ✅ Sentry      │
    │  ✅ Async ops │           │ ✅ CloudWatch  │
    └───────────────┘           └────────────────┘
```

---

## COMPONENTES NUEVOS DETALLADOS

### 1. Service Layer

```
┌──────────────────────────────────────────┐
│  SaleService                             │
├──────────────────────────────────────────┤
│ + __construct(                           │
│     SaleRepository $repo,                │
│     SaleDetailService $detail,           │
│     AuditService $audit,                 │
│     NotificationService $notify)         │
│                                          │
│ + create(CreateSaleRequest): Sale        │
│ + update(UpdateSaleRequest): Sale        │
│ + cancel(int $id, string $reason)       │
│ + markAsPaid(int $id)                   │
│ + getForReport(filters): Collection      │
│                                          │
│ Responsabilidades:                       │
│ - Validaciones de negocio                │
│ - Transacciones                          │
│ - Eventos/Notificaciones                │
│ - Orquestación de operaciones           │
└──────────────────────────────────────────┘
```

### 2. Repository Layer

```
┌──────────────────────────────────────────┐
│  SaleRepository                          │
├──────────────────────────────────────────┤
│ - $model: Sale                           │
│                                          │
│ + all(filters): Collection               │
│ + paginate(page, limit): Paginator       │
│ + find(id): Sale                         │
│ + search(query): Collection              │
│ + where(conditions): Collection          │
│ + create(data): Sale                     │
│ + update(id, data): Sale                 │
│ + delete(id): bool                       │
│                                          │
│ Responsabilidades:                       │
│ - Acceso a datos                         │
│ - Queries optimizadas                    │
│ - Eager loading                          │
│ - Caché                                  │
└──────────────────────────────────────────┘
```

### 3. Controller Nuevo

```php
// ANTES (60 líneas de lógica)
public function create(Request $request) {
    // Validaciones
    // DB calls
    // Transacciones
    // Auditoría
    // Errores
}

// DESPUÉS (10 líneas, solo lógica de HTTP)
public function create(CreateSaleRequest $request) {
    // ✅ Request ya validado
    $sale = $this->saleService->create($request->validated());
    // ✅ Service hizo toda la lógica
    return response()->json($sale, 201);
    // ✅ Auditoría y eventos automáticos
}
```

---

## COMPARATIVA DE RENDIMIENTO ESPERADO

### Antes vs Después

```
MÉTRICA                  ANTES        DESPUÉS      MEJORA
─────────────────────────────────────────────────────────
Query count/request      50-100       2-5          95%↓
DB CPU usage             60-80%       10-20%       75%↓
Page load time           2-5s         100-200ms    20-50x↑
Concurrent users         10-20        100-200      5-10x↑
Memory per request       15MB         8MB          45%↓
Cache hit rate           0%           85%          -
N+1 query incidents      COMMON       NONE         100%↓
```

### Escalabilidad

```
ACTUAL (Monolítico):
├─ Servidor 1: 10 usuarios concurrentes antes de degrade
├─ DB bottleneck @ ~300 conexiones
└─ No puede escalar

PROPUESTO (Servicios):
├─ Servidor 1: 100+ usuarios concurrentes
├─ Fácil agregar servidor 2, 3, N
├─ Cada módulo puede ser microservicio después
└─ Escalabilidad horizontal viable
```

---

## MAPA DE MIGRACIÓN

### Iteración 1: Seguridad Crítica
```
Controllers → +Request Validators ✅
Controllers → +Policies ✅
CrudClass   → SafeCrudRepository ✅
Auditoría   → AuditService ✅
Routes      → +Rate Limiting ✅

RESULTADO: Código igual pero seguro
```

### Iteración 2: Servicios
```
Controllers → Services (new layer)
Controllers → Solo validación + service call

RESULTADO: Lógica en servicios, controllers finos
```

### Iteración 3: Repositories
```
CrudClass → Repositories
Services → Repositories

RESULTADO: Acceso a datos centralizado
```

### Iteración 4: Modelos
```
Models → +Relaciones explícitas
Models → +Scopes
Models → +Métodos utilitarios

RESULTADO: Modelos ricos con comportamiento
```

### Iteración 5: Caché + Performance
```
Services → Cache calls
DB → Indexes
Queries → Eager loading

RESULTADO: Performance 10-50x mejor
```

### Iteración 6: Testing
```
Services → Unit tests
Controllers → Feature tests
Policies → Authorization tests
Security → Penetration tests

RESULTADO: 70%+ code coverage
```

---

## VISTA DE CARPETAS

### ANTES
```
app/
├── Classes/
│   ├── CrudClass.php          (500 líneas 😱)
│   └── CompanyClass.php
├── Http/Controllers/
│   ├── MasterController.php    (400+ líneas 😱)
│   ├── SalesController.php
│   ├── Sales/SalesController.php
│   └── ...
├── Models/
│   ├── Sale.php               (vacío)
│   └── ...
├── Core/
│   ├── CoreModel.php
│   └── JReportModel.php
└── [NO HAY]
    ├── Services/ (no existe)
    ├── Repositories/ (no existe)
    ├── Policies/ (no existe)
    ├── Traits/ (no existe)
    └── Events/ (no existe)
```

### DESPUÉS
```
app/
├── Classes/
│   ├── CrudClass.php          (reemplazo seguro)
│   └── CompanyClass.php
├── Http/
│   ├── Controllers/           (slim)
│   │   ├── SaleController.php (50 líneas)
│   │   └── ...
│   ├── Requests/              (NEW)
│   │   ├── CreateSaleRequest.php
│   │   └── ...
│   └── Middleware/
├── Models/
│   ├── Sale.php               (rich model)
│   └── ...
├── Services/                  (NEW)
│   ├── SaleService.php
│   └── ...
├── Repositories/              (NEW)
│   ├── SaleRepository.php
│   └── ...
├── Policies/                  (NEW)
│   ├── SalePolicy.php
│   └── ...
├── Traits/                    (NEW)
│   ├── DatabaseTransaction.php
│   └── ...
├── Events/                    (NEW)
│   ├── SaleCreated.php
│   └── ...
├── Listeners/
├── Core/
└── Common/
```

---

## FLUJO DE REQUEST - COMPARATIVA

### ACTUAL ❌ (Vulnerable)

```
Request
  ↓
Route
  ↓
Controller
  ├─ Validación: $request->all()
  ├─ Query: DB::table('sales')->insert($data)  ⚠️
  ├─ Transacción: try/catch manual
  ├─ Auditoría: CrudClass::audit()            ⚠️ Registra todo
  └─ Response: JSON

PROBLEMAS:
- Validación débil
- Query vulnerable
- Auditoría insegura
- Errores exponen stack trace
```

### PROPUESTO ✅ (Seguro)

```
Request
  ↓
Route (con Rate Limiting) ✅
  ↓
Middleware (Auth + Logging)
  ↓
Request Validator ✅
  ├─ Valida estructura
  ├─ Valida tipos
  ├─ Valida rango/valores
  └─ Devuelve datos validados
  ↓
Policy (Autorización) ✅
  ├─ ¿Usuario puede hacer esto?
  ├─ ¿Sobre datos de su empresa?
  └─ Devuelve true/false
  ↓
Controller (Thin)
  ├─ Recibe datos validados
  ├─ Llama: Service::create()
  └─ Retorna: response()->json()
  ↓
Service (Lógica de Negocio)
  ├─ Validaciones complejas
  ├─ Orquestación
  ├─ Repository::create()
  ├─ Event::dispatch()
  └─ Retorna: Model
  ↓
Repository (Acceso a Datos)
  ├─ Query Builder ✅ (seguro)
  ├─ Eager Loading ✅ (eficiente)
  └─ Caché ✅ (rápido)
  ↓
Model Event (Automático)
  ├─ AuditLog::record() ✅ (sanitizado)
  ├─ Notification::send()
  └─ Cache::invalidate()
  ↓
Response
  ├─ Status: 200/201/400/403/500
  ├─ Headers: correctos
  └─ Body: JSON limpio

BENEFICIOS:
- Validación multicapa
- Queries seguras
- Auditoría sanitizada
- Errores controlados
- Testeable
```

---

## CONCLUSIÓN VISUAL

### Hoy
```
┌─────────────────┐
│  Controllers    │ ← TODO
│  + Models       │
│  + CrudClass    │
│  + Services ad-hoc
└─────────────────┘
         ↓
    MONOLÍTICA
    INSEGURA
    LENTA
```

### Futuro
```
┌──────────────┐
│ Controllers  │ ← Thin
├──────────────┤
│  Services    │ ← Lógica
├──────────────┤
│Repositories  │ ← Datos
├──────────────┤
│   Models     │ ← Rich
├──────────────┤
│ Policies     │ ← Auth
├──────────────┤
│  Database    │ ← Optimizado
└──────────────┘
         ↓
   MODULAR
   SEGURA
   RÁPIDA
   TESTEABLE
```

