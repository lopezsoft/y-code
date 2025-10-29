# 📊 ANÁLISIS UNIFICACIÓN BD: y_code + y_code_companies

**Fecha:** 29 de Octubre de 2025  
**Propósito:** Analizar estructura actual para migración a Single-DB multi-empresa  
**Decisión:** ✅ UNIFICAR a Single-DB con campo `company_id`

---

## 1. ESTRUCTURA ACTUAL

### BD: `y_code_companies` (Matriz - Datos Globales)

```sql
TABLAS PRINCIPALES:
├─ companies (3 registros)
│  ├─ id, country_id, company_name, dni, database_name, folder_name, address, lockdate, active
│  └─ Registro enlace a otras BDs multi-DB
│
├─ business_users (relación Usuario-Empresa)
│  ├─ id, company_id, user_id, status
│  └─ Tabla de unión para usuarios en múltiples empresas
│
├─ countries (datos globales)
│  ├─ +250 países
│  └─ Compartida en todas empresas
│
├─ currency_sys (monedas)
├─ tax_rates (impuestos)
├─ accounting_groups (grupos contables)
└─ ...otros datos predefinidos
```

### BD: `y_code` (Operacional - Datos de Empresa)

```sql
TABLAS PRINCIPALES:
├─ accounting_accounts (~2,284 registros)
├─ sales / customers
├─ inventory / products
├─ expenses / payments
├─ tax_calculations
└─ ...todas operacionales
```

---

## 2. IDENTIFICACIÓN DE DIFERENCIAS

### ✅ Tablas Idénticas (Sincronizadas)
```
accounting_accounts
accounting_groups
currency_sys
tax_rates
...otras tablas de configuración
```

**PROBLEMA:** Se replican en y_code + y_code_companies
**SOLUCIÓN:** Una sola copia + campo company_id

### 📍 Tablas Específicas

| Tabla | Ubicación | Propósito |
|-------|-----------|----------|
| `companies` | y_code_companies | Meta-información de empresas |
| `business_users` | y_code_companies | Relación usuario-empresa |
| `countries` | y_code_companies | Datos globales (compartida) |
| `accounting_accounts` | Ambas | Config contable (duplicada) |

---

## 3. PLAN UNIFICACIÓN

### Fase 1: Schema Unificado

```
NUEVA BD: y_code (unificada)
├─ ALL tablas de y_code (operacionales)
├─ Agregar: company_id A TODAS TABLAS
├─ ALL tablas de y_code_companies (globales)
├─ Index: (company_id, created_at) en operacionales
└─ Seeders para datos predefinidos
```

### Fase 2: Foreign Keys Multi-Empresa

```sql
-- Estructura para multi-empresa

CREATE TABLE companies (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    country_id INT NOT NULL,
    company_name VARCHAR(250),
    dni VARCHAR(30) UNIQUE,
    address VARCHAR(120),
    active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP,
    FOREIGN KEY (country_id) REFERENCES countries(id)
) ENGINE=InnoDB;

CREATE TABLE accounting_accounts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT NOT NULL,  -- ← NUEVO
    account_name VARCHAR(250),
    account_number VARCHAR(50),
    ...otros campos
    created_at TIMESTAMP,
    INDEX idx_company_id (company_id),
    INDEX idx_company_created (company_id, created_at),
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
) ENGINE=InnoDB;
```

### Fase 3: Datos Predefinidos (Seeders)

```
✅ Countries (250+)
✅ Currency_sys (monedas)
✅ Tax_rates (impuestos)
✅ Accounting_groups (grupos contables)
✅ Accounting_accounts (cuentas estándar)
```

---

## 4. MIGRATIONS NECESARIAS

```
1. Create companies table
2. Create countries table
3. Create currency_sys table
4. Create tax_rates table
5. Create accounting_groups table
6. Create accounting_accounts (CON company_id)
7. Create customers (CON company_id)
8. Create sales (CON company_id)
9. ...todas operacionales CON company_id
10. Create business_users (relación usuario-empresa)
11. Create indexes (company_id)
```

---

## 5. SEEDERS NECESARIOS

```
✅ CountrySeeder        (250+ países)
✅ CurrencySeeder       (monedas)
✅ TaxRateSeeder        (impuestos)
✅ AccountingGroupSeeder (grupos)
✅ AccountingAccountSeeder (cuentas ~2000+)
✅ CompanySeeder        (empresas demo)
```

---

## 6. CAMBIOS EN ORM MODELS

### ANTES (Multi-DB)
```php
DB::table($db.'accounting_accounts')->get();
```

### DESPUÉS (Single-DB + Eloquent)
```php
class AccountingAccount extends Model {
    protected $table = 'accounting_accounts';
    
    protected static function booted() {
        static::addGlobalScope('company', fn($q) => 
            $q->where('company_id', auth()->user()->company_id)
        );
    }
    
    public function company() {
        return $this->belongsTo(Company::class);
    }
}

// Uso:
AccountingAccount::all();  // Auto-filtra por company_id
```

---

## 7. ARQUITECTURA POST-UNIFICACIÓN

```
┌──────────────────────────────────────┐
│       Single-DB: y_code              │
├──────────────────────────────────────┤
│                                      │
│  Datos Globales (Shared):            │
│  ├─ countries                        │
│  ├─ currency_sys                     │
│  ├─ tax_rates                        │
│  ├─ accounting_groups                │
│  └─ ...Master data                   │
│                                      │
│  Multi-Empresa (company_id):         │
│  ├─ companies                        │
│  ├─ users / business_users           │
│  ├─ accounting_accounts              │
│  ├─ sales / customers                │
│  ├─ inventory                        │
│  └─ ...todas operacionales           │
│                                      │
└──────────────────────────────────────┘
         ↓
    Global Scopes
    (auto-filter)
         ↓
    company_id
```

---

**Documento:** Análisis Unificación BD  
**Versión:** 1.0  
**Fecha:** 29 de Octubre de 2025  
**Siguiente:** Crear migrations + seeders
