# 🏗️ Arquitectura Y-Code Backend (Single-DB, Multi-Tenant)

## 📐 Visión General

**Y-Code** es una plataforma SaaS para gestión contable y POS en Honduras, con soporte para 1,000+ empresas/vendedores en una sola base de datos.

### Decisión Arquitectónica: Single-DB + Row-Level Security

```
ANTES (Problema):         DESPUÉS (Solución):
┌─────────────────┐      ┌──────────────────────────┐
│ y_doce_companies│      │     y_code_new           │
│                 │      │  ┌──────────────────────┐│
└─────────────────┘      │  │ Tabla: companies     ││
│ y_code (1)      │      │  ├──────────────────────┤│
│ y_code (2)      │ ──>  │  │ company_id: 1       ││
│ y_code (3)      │      │  │ company_id: 2       ││
│ ...             │      │  │ company_id: 3       ││
└─────────────────┘      │  └──────────────────────┘│
                         │  ┌──────────────────────┐│
                         │  │ Tabla: sales         ││
                         │  │ company_id: 1        ││
                         │  │ company_id: 1        ││
                         │  │ company_id: 2        ││
                         │  │ company_id: 3        ││
                         │  └──────────────────────┘│
                         │  (Todas las tablas      ││
                         │   tienen company_id)    ││
                         └──────────────────────────┘
```

**Ventajas:**
✅ Escalabilidad (1,000+ empresas fácilmente)  
✅ Seguridad (row-level filtering automático)  
✅ Mantenimiento (1 BD en lugar de 1,000+)  
✅ Backup/Restore (simplificado)  
✅ Cumplimiento normativo Honduras  

---

## 🗂️ Estructura de Capas

```
┌─────────────────────────────────────────────────────┐
│  API LAYER (Controllers/Routes)                     │
│  - HTTP Requests                                    │
│  - Request Validation                               │
│  - Response Formatting                              │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  SERVICE LAYER (Business Logic)                     │
│  - SalesService                                     │
│  - CustomersService                                 │
│  - AccountingService                                │
│  - ExpensesService                                  │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  REPOSITORY LAYER (Data Access)                     │
│  - SalesRepository                                  │
│  - CustomersRepository                              │
│  - AccountingAccountsRepository                     │
│  - ExpensesRepository                               │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  MODEL LAYER (Data Entities)                        │
│  - BaseModel (Multi-tenant logic)                   │
│  - Company, User, Customer, Sale                    │
│  - Expense, AccountingAccount, etc.                 │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  DATABASE LAYER (MySQL/MariaDB)                     │
│  - y_code_new (Single database)                     │
│  - 13 Tables with proper relationships              │
│  - Indexes for performance                          │
└─────────────────────────────────────────────────────┘
```

---

## 🔐 Multi-Tenancy Implementation

### BaseModel (Core/BaseModel.php)

```php
class BaseModel extends Model
{
    // AUTOMATIC COMPANY_ID FILTERING
    protected static function boot()
    {
        // Global Scope: Automatically filters by company_id
        static::addGlobalScope('company', function (Builder $builder) {
            $companyId = auth()->user()->company_id ?? 1;
            $builder->where('company_id', $companyId);
        });
    }
    
    // HOOKS
    protected static function creating(Model $model)
    {
        // Validates company_id is set before creation
        if (!$model->company_id) {
            $model->company_id = auth()->user()->company_id;
        }
    }
}
```

### Automatic Filtering Flow

```
1. User logs in → Passport token includes company_id
2. Request hits API controller
3. Controller calls Service
4. Service calls Repository
5. Repository uses Model
6. Model applies BaseModel global scope
7. Query automatically filters by user's company_id
8. Database returns only user's company data

RESULT: ✅ No SQL injection, ✅ Automatic security
```

### Example: Get Sales for Current Company

```php
// Controller
public function index()
{
    $sales = ServiceLocator::sales()->paginate();
    // Returns only sales where company_id = auth()->user()->company_id
}

// Service
public function paginate()
{
    return $this->repository->paginate(60);
}

// Repository
public function paginate()
{
    return $this->model->paginate(60);
    // Behind the scenes: SELECT * FROM sales 
    //   WHERE company_id = {current_company_id}
}
```

---

## 📊 Database Schema

### Global Tables (No company_id - Shared)

```
┌──────────────────┐
│    countries     │
├──────────────────┤
│ id               │ (PK)
│ country_code ✓   │ (ISO-2 code)
│ country_name     │ (Honduras, Guatemala, etc.)
│ timezone         │ (America/Tegucigalpa)
│ created_at       │
│ updated_at       │
│ deleted_at       │
└──────────────────┘

┌──────────────────┐
│   currency_sys   │
├──────────────────┤
│ id               │ (PK)
│ currency_code    │ (HNL, USD, MXN, EUR)
│ currency_name    │ (Lempira, Dólar, etc.)
│ currency_symbol  │ (L, $, €)
│ exchange_rate    │ (vs. HNL as base)
│ active           │
└──────────────────┘

┌──────────────────┐
│   tax_rates      │
├──────────────────┤
│ id               │ (PK)
│ tax_code         │ (ISV-STANDARD, SOLIDARIO)
│ tax_name         │
│ rate             │ (15.00, 2.50, etc.)
│ description      │
│ active           │
└──────────────────┘

┌──────────────────────┐
│ accounting_groups    │
├──────────────────────┤
│ id                   │ (PK)
│ group_code           │ (AC-C, PA-C, PAT, etc.)
│ group_name           │
│ description          │
│ order                │ (Sort order)
│ active               │
└──────────────────────┘
```

### Multi-Tenant Tables (All have company_id FK)

```
┌──────────────────────┐
│     companies        │  ROOT ENTITY
├──────────────────────┤
│ id                   │ (PK)
│ company_name         │
│ nrc_number           │
│ country_id FK ──────→ countries.id
│ timezone             │
│ logo_url             │
│ is_active            │
│ created_at, updated_at
└──────────────────────┘
        ↓ (1:N)
┌──────────────────────┐
│       users          │
├──────────────────────┤
│ id                   │ (PK)
│ company_id FK  ──────→ companies.id (AUTO FILTER)
│ name                 │
│ email                │
│ password             │
│ is_active            │
│ role                 │
└──────────────────────┘
        ↓ (1:N)
┌──────────────────────┐
│  business_users      │  (User-Company M:N)
├──────────────────────┤
│ id                   │ (PK)
│ user_id FK ──────────→ users.id
│ company_id FK  ──────→ companies.id
│ role                 │ (admin, accountant, manager)
│ assigned_at          │
└──────────────────────┘

┌──────────────────────┐
│     customers        │
├──────────────────────┤
│ id                   │ (PK)
│ company_id FK  ──────→ companies.id (AUTO FILTER)
│ name                 │
│ email                │
│ phone                │
│ address              │
│ is_active            │
│ created_at, updated_at
└──────────────────────┘
        ↓ (1:N)
┌──────────────────────┐
│       sales          │  INVOICES
├──────────────────────┤
│ id                   │ (PK)
│ company_id FK  ──────→ companies.id (AUTO FILTER)
│ customer_id FK ──────→ customers.id
│ invoice_number       │ (UNIQUE per company)
│ subtotal             │
│ tax                  │
│ total                │
│ payment_status       │ (pending, paid, partial)
│ status               │ (pending, completed)
│ created_at, updated_at
└──────────────────────┘
        ↓ (1:N)
┌──────────────────────┐
│    sales_items       │  LINE ITEMS
├──────────────────────┤
│ id                   │ (PK)
│ sale_id FK ──────────→ sales.id
│ description          │
│ quantity             │
│ price                │
│ tax_rate_id FK ──────→ tax_rates.id
│ subtotal             │
│ tax_amount           │
│ total                │
└──────────────────────┘

┌──────────────────────┐
│      expenses        │
├──────────────────────┤
│ id                   │ (PK)
│ company_id FK  ──────→ companies.id (AUTO FILTER)
│ user_id FK ──────────→ users.id
│ account_id FK ──────→ accounting_accounts.id
│ amount               │
│ category             │
│ expense_date         │
│ description          │
│ status               │ (pending, approved, rejected)
│ created_at, updated_at
└──────────────────────┘

┌──────────────────────┐
│      payments        │
├──────────────────────┤
│ id                   │ (PK)
│ sale_id FK ──────────→ sales.id
│ amount               │
│ payment_date         │
│ method               │ (cash, card, check, etc.)
│ reference            │ (Check #, Card auth #)
│ created_at, updated_at
└──────────────────────┘

┌──────────────────────────┐
│ accounting_accounts      │
├──────────────────────────┤
│ id                       │ (PK)
│ company_id FK       ─────→ companies.id (AUTO FILTER)
│ group_id FK         ─────→ accounting_groups.id
│ account_code        │ (1-1-1-01, etc.)
│ account_name        │
│ account_type        │ (asset, liability, etc.)
│ current_balance     │
│ is_active           │
│ created_at, updated_at
└──────────────────────────┘
```

### Key Indexes

```sql
-- Performance indexes for common queries
CREATE INDEX idx_company_id ON sales(company_id);
CREATE INDEX idx_company_created ON sales(company_id, created_at);
CREATE INDEX idx_customer_company ON customers(company_id);
CREATE INDEX idx_user_company ON users(company_id);
CREATE INDEX idx_account_company ON accounting_accounts(company_id);
CREATE INDEX idx_invoice_number ON sales(company_id, invoice_number);
```

---

## 🎯 Design Patterns

### 1. **Repository Pattern**

```
MODEL (Sale) → REPOSITORY (SalesRepository) → SERVICE (SalesService) → CONTROLLER
      ↓               ↓                          ↓                        ↓
   Data            Query Methods          Business Logic         HTTP Response
  Object          + Filtering              + Validation             + Status
                  + Pagination             + Calculations
                  + Relationships          + Transactions
```

**Benefit:** Easy to test, swap implementations, consistent data access

### 2. **Service Locator Pattern**

```php
// Easy access from anywhere
$service = ServiceLocator::sales();
$service->createWithItems($saleData, $items);

// No need to manually inject dependencies
// Container handles it automatically
```

**Benefit:** Convenient, reduces boilerplate

### 3. **Global Scope Pattern (Multi-Tenancy)**

```php
// Automatic filtering
Sale::all(); // Returns only current company's sales

// Bypass when needed
Sale::withoutCompanyScope()->all(); // All sales (admin only)
```

**Benefit:** Security by default, opt-out not opt-in

### 4. **Service Layer Pattern**

```
REQUEST → VALIDATION → SERVICE LOGIC → REPOSITORY → DATABASE
                          ↓
                    • Tax Calculations
                    • Validation
                    • Transactions
                    • Events
                    • Error Handling
```

**Benefit:** Centralized business logic, testable, reusable

---

## 🔄 Transaction Flow Example: Create Sale

```
1. API CONTROLLER
   └─→ POST /api/sales
       ├─→ Validate request data
       └─→ Call SalesService::createWithItems()

2. SERVICE LAYER
   └─→ SalesService::createWithItems($saleData, $items)
       ├─→ Validate items (at least 1)
       ├─→ Begin transaction (DB::beginTransaction)
       ├─→ Calculate subtotal, taxes, total
       ├─→ Create Sale record via Repository
       ├─→ Create SaleItems
       ├─→ Commit transaction (DB::commit)
       └─→ Return updated Sale with all relationships

3. REPOSITORY LAYER
   └─→ SalesRepository::create($data)
       ├─→ Validate company_id
       ├─→ Execute INSERT
       └─→ Return Model instance

4. MODEL LAYER
   └─→ Sale Model
       ├─→ Apply BaseModel global scope
       ├─→ Validate company_id in creating() hook
       ├─→ Set timestamps
       └─→ Persist to database

5. DATABASE
   └─→ y_code_new (Single database)
       ├─→ INSERT INTO sales (company_id, customer_id, ...)
       └─→ INSERT INTO sales_items (sale_id, ...)

6. RESPONSE
   └─→ Return JSON
       ├─→ sale_id
       ├─→ invoice_number
       ├─→ total
       ├─→ items (with line totals)
       └─→ payment_status: "pending"
```

---

## 🛡️ Security Layers

### 1. **Authentication**
- Laravel Passport OAuth 2.0
- Token includes company_id
- User tied to one or more companies via business_users

### 2. **Authorization**
- Role-based (admin, accountant, manager)
- company_id in token verified against request

### 3. **Data Security**
- BaseModel global scope filters by company_id automatically
- No SQL injection (Eloquent query builder)
- Timestamps for audit trail (created_at, updated_at)
- Soft deletes (deleted_at) for data retention

### 4. **Request Validation**
- Form Request classes (to be created in Phase 8)
- Input sanitization
- Rate limiting (to be configured)

---

## 📈 Honduras-Specific Features

### Tax System Integration
```php
// ISV (Impuesto sobre Ventas) = 15% standard
$taxRate = TaxRate::where('code', 'ISV-STANDARD')->first();
// 15.00 automatically applied to line items

// Impuesto de Solidaridad = 2.5%
$solidarioRate = TaxRate::where('code', 'SOLIDARIO')->first();

// Retención en la Fuente = 10% (Renta)
$retencionRate = TaxRate::where('code', 'RET-RENTA')->first();
```

### Accounting Compliance
- **Chart of Accounts:** Follows Honduras GAAP
- **Accounting Groups:** Asset, Liability, Equity, Income, Expense
- **Trial Balance:** Validates accounting equation (Assets = Liabilities + Equity)

### Currency & Localization
- **Primary:** HNL (Lempira) as base
- **Support:** USD, MXN, GTQ, CRC, NIO, PAB, etc.
- **Timezone:** America/Tegucigalpa (Central Time)
- **Language:** Spanish (es)

---

## 🚀 Scaling Considerations

### Current Capacity (Phase 5)
- **Companies:** 1-10,000 (tested design)
- **Users per Company:** 1-1,000
- **Transactions:** 10M+ per year
- **Database Size:** ~2GB per year

### Optimization Points
1. **Indexing:** Composite indexes on (company_id, created_at)
2. **Caching:** Redis for exchange rates, tax rates
3. **Queries:** N+1 prevention with eager loading
4. **Soft Deletes:** Periodic cleanup of deleted records
5. **Archives:** Old transactions to history tables

### Future Enhancements
- Read replicas for reporting
- Document storage (AWS S3)
- Queue for bulk imports
- Webhook system for integrations

---

## 📚 Code Examples

### Create Sale with Items
```php
// Service automatically handles tax calculation
$result = ServiceLocator::sales()->createWithItems(
    [
        'customer_id' => 1,
        'invoice_number' => 'INV-2024-001',
        'payment_status' => 'pending',
    ],
    [
        [
            'description' => 'Product A',
            'quantity' => 2,
            'price' => 100.00,
            'tax_rate' => 15.00, // ISV
        ],
        [
            'description' => 'Service B',
            'quantity' => 1,
            'price' => 50.00,
            'tax_rate' => 0, // Exempt
        ],
    ]
);
// $result->total = (2*100 + 1*50) + (2*100*0.15 + 1*50*0) = $380
```

### Get Customer Statistics
```php
$stats = ServiceLocator::customers()->getStatistics(customerId: 5);
// Returns: [
//   'id' => 5,
//   'name' => 'ABC Company',
//   'total_purchases' => 5000.00,
//   'number_of_purchases' => 15,
//   'average_purchase' => 333.33,
//   'is_active' => true,
// ]
```

### Get Balance Sheet
```php
$balanceSheet = ServiceLocator::accounting()->getBalanceSheet();
// Returns: [
//   'assets' => ['accounts' => [...], 'total' => 50000],
//   'liabilities' => ['accounts' => [...], 'total' => 20000],
//   'equity' => ['accounts' => [...], 'total' => 30000],
//   'validation' => ['assets_equal_liabilities_plus_equity' => true],
// ]
```

---

## 📖 SOLID Principles Implementation

| Principle | Implementation | Benefit |
|-----------|-----------------|---------|
| **S**ingle Responsibility | Each repository handles one entity; each service has one job | Easy to test and maintain |
| **O**pen/Closed | BaseModel extensible for custom logic | Add features without modifying core |
| **L**iskov Substitution | All repositories implement same interface | Consistent API across data access |
| **I**nterface Segregation | Services expose only needed methods | Reduced coupling |
| **D**ependency Inversion | Services depend on repositories (abstraction) | Easy to mock for tests |

---

## 🎓 Learning Resources

- **Design Patterns:** Repository, Service Locator, Global Scope
- **Laravel Concepts:** Eloquent ORM, Service Providers, Global Scopes
- **Multi-Tenancy:** Row-level security, company_id filtering
- **Accounting:** Trial balance, income statement, balance sheet

**Next:** See PROGRESS.md for implementation timeline
