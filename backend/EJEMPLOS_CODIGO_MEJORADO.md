# 📌 EJEMPLOS DE CÓDIGO - ANTES Y DESPUÉS
## Soluciones Prácticas Inmediatas

---

## 1. PROBLEMA: Inyección SQL en CrudClass

### ❌ ANTES (VULNERABLE)

```php
// app/Classes/CrudClass.php
public static function sqlQuery(Request $request, string $sqlStatement, string $sqlStatementCount, array $searchFields): JsonResponse
{
    $query  = $request->input('query');
    $start  = $request->start ?? 0;
    $limit  = $request->limit ?? 30;
    $where  = $request->where ?? '';  // 🔴 SIN VALIDACIÓN
    $order  = $request->order ?? '';
    
    // 🔴 VULNERABLE: Concatenación de SQL
    if(strlen($order) > 0){
        $order  = ' ORDER BY '.$order;  // Atacante puede inyectar: ' ORDER BY 1; DROP TABLE sales; --'
    }

    if (strlen($query) > 0) {
        $queryField = '';
        $w = (strlen($where) > 0) ? " WHERE ".$where." AND " : " WHERE " ;  // 🔴 CONCATENACIÓN DIRECTA
        
        foreach ($searchFields as $field) {
            $table = DB::select($sqlStatement.$w.$field." LIKE ? LIMIT 1", ["%".$query."%"]);
        }
    }
}
```

### ✅ DESPUÉS (SEGURO)

```php
// app/Repositories/SafeCrudRepository.php
namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class SafeCrudRepository
{
    // Whitelist de tablas permitidas
    private const ALLOWED_TABLES = [
        'sales', 'sale_details', 'customers', 'products',
        'shopping', 'shopping_details', 'providers', 'users'
    ];
    
    // Whitelist de campos permitidos por tabla
    private const ALLOWED_FIELDS = [
        'sales' => ['id', 'customer_id', 'total', 'created_at'],
        'customers' => ['id', 'name', 'email', 'phone'],
        'products' => ['id', 'code', 'name', 'price'],
    ];

    public function search(string $table, string $query, array $searchFields, int $page = 1, int $limit = 30): array
    {
        // ✅ Validar tabla
        if (!in_array($table, self::ALLOWED_TABLES)) {
            throw new InvalidArgumentException("Tabla no permitida: $table");
        }

        // ✅ Validar campos
        $allowedFields = self::ALLOWED_FIELDS[$table] ?? [];
        foreach ($searchFields as $field) {
            if (!in_array($field, $allowedFields)) {
                throw new InvalidArgumentException("Campo no permitido: $field");
            }
        }

        // ✅ Usar Query Builder en lugar de concatenación
        $baseQuery = DB::table($table);

        if (!empty($query)) {
            $baseQuery->where(function ($q) use ($searchFields, $query) {
                foreach ($searchFields as $field) {
                    $q->orWhere($field, 'LIKE', "%{$query}%");
                }
            });
        }

        // ✅ Paginación segura
        $total = (clone $baseQuery)->count();
        $offset = ($page - 1) * $limit;
        $results = $baseQuery->offset($offset)->limit($limit)->get();

        return [
            'data' => $results,
            'total' => $total,
            'page' => $page,
            'per_page' => $limit,
        ];
    }
}
```

### Uso en Controller:

```php
// ✅ app/Http/Controllers/SearchController.php
class SearchController extends Controller
{
    public function __construct(private SafeCrudRepository $repository) {}

    public function search(Request $request)
    {
        $validated = $request->validate([
            'table' => 'required|string',
            'query' => 'required|string|max:255',
            'fields' => 'required|array',
            'page' => 'integer|min:1',
            'limit' => 'integer|min:1|max:100',
        ]);

        try {
            $results = $this->repository->search(
                $validated['table'],
                $validated['query'],
                $validated['fields'],
                $validated['page'] ?? 1,
                $validated['limit'] ?? 30
            );

            return response()->json($results);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
```

---

## 2. PROBLEMA: Auditoría Registra Datos Sensibles

### ❌ ANTES (INSEGURO)

```php
// app/Classes/CrudClass.php
public static function audit($ip, $table, $what_did, $data): void
{
    $user = Auth::user();
    $audit  = [
        'user_id'   => $user->id,
        'ip'        => $ip,
        'table'     => $table,
        'what_did'  => $what_did,
        'data'      => json_encode($data)  // 🔴 REGISTRA TODO: contraseñas, tokens, etc.
    ];
    DB::table('tb_audit')->insert($audit);
}

// Ejemplo: Usuario actualiza su contraseña
// TB_AUDIT contendrá:
// {
//   "user_id": 1,
//   "password": "mySecurePassword123",
//   "password_confirmation": "mySecurePassword123",
//   "email": "admin@y-code.hn"
// }
```

### ✅ DESPUÉS (SEGURO)

```php
// app/Services/AuditService.php
namespace App\Services;

use App\Models\AuditLog;
use Illuminate\Support\Facades\Auth;

class AuditService
{
    // Campos que NUNCA deben auditarse
    private const SENSITIVE_FIELDS = [
        'password',
        'password_confirmation',
        'token',
        'api_token',
        'remember_token',
        'two_factor_secret',
        'secret',
        'credit_card',
        'cvv',
        'rtn',  // Número de identidad Honduras
        'pin',
        'oauth_token',
    ];

    /**
     * Registrar acción en auditoría de forma segura
     */
    public function log(
        string $action,
        string $entity,
        array $data,
        ?array $changes = null,
        ?string $description = null
    ): void {
        $sanitized = $this->sanitize($data);
        $changesS = $changes ? $this->sanitize($changes) : null;

        AuditLog::create([
            'user_id' => Auth::id(),
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'action' => $action,
            'entity_type' => $entity,
            'entity_id' => $data['id'] ?? null,
            'old_values' => null,  // Para ediciones futuras
            'new_values' => json_encode($sanitized),
            'changes' => json_encode($changesS),
            'description' => $description,
            'status' => 'success',
        ]);
    }

    /**
     * Eliminar campos sensibles de datos
     */
    private function sanitize(array $data): array
    {
        return collect($data)
            ->reject(function ($value, $key) {
                // Buscar campos sensibles (case-insensitive)
                foreach (self::SENSITIVE_FIELDS as $sensitive) {
                    if (strtolower($key) === strtolower($sensitive)) {
                        return true;
                    }
                }
                return false;
            })
            ->map(function ($value) {
                // Sanitizar valores también (en caso de nested arrays)
                if (is_array($value)) {
                    return $this->sanitize($value);
                }
                return $value;
            })
            ->toArray();
    }
}
```

### Migración para tabla auditoría mejorada:

```php
// database/migrations/2025_10_29_create_audit_logs_table.php
Schema::create('audit_logs', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->nullable()->constrained();
    $table->string('ip_address')->nullable();
    $table->text('user_agent')->nullable();
    $table->string('action');  // 'created', 'updated', 'deleted'
    $table->string('entity_type');  // 'Sale', 'Customer'
    $table->unsignedBigInteger('entity_id')->nullable();
    $table->longText('old_values')->nullable();  // JSON de valores anteriores
    $table->longText('new_values')->nullable();  // JSON de nuevos valores
    $table->longText('changes')->nullable();     // Solo campos cambiados
    $table->text('description')->nullable();
    $table->enum('status', ['success', 'failed'])->default('success');
    $table->timestamp('created_at')->useCurrent();
    
    // Índices para queries rápidas
    $table->index(['user_id', 'created_at']);
    $table->index(['entity_type', 'entity_id']);
    $table->index('action');
});
```

---

## 3. PROBLEMA: N+1 Queries en Modelos

### ❌ ANTES (INEFICIENTE)

```php
// app/Http/Controllers/Sales/SalesController.php
class SalesController extends Controller
{
    public function read(Request $request)
    {
        $sales = DB::table('sales')
            ->offset($request->start ?? 0)
            ->limit($request->limit ?? 60)
            ->get();  // Query 1: SELECT * FROM sales

        $result = [];
        foreach ($sales as $sale) {
            // Query 2..N+1: Cargar cliente
            $customer = DB::table('customers')
                ->where('id', $sale->customer_id)
                ->first();

            // Query N+2..2N+1: Cargar detalles
            $details = DB::table('sale_details')
                ->where('sale_id', $sale->id)
                ->get();

            // Query 2N+2..3N+1: Cargar empresa
            $company = DB::table('companies')
                ->where('id', $sale->company_id)
                ->first();

            $result[] = [
                'sale' => $sale,
                'customer' => $customer,
                'details' => $details,
                'company' => $company,
            ];
        }

        // Para 100 ventas: 1 + 100 + 100 + 100 = 301 queries ❌
        return response()->json($result);
    }
}
```

### ✅ DESPUÉS (OPTIMIZADO)

```php
// app/Models/Sale.php
class Sale extends CoreModel
{
    // ⚠️ NOTA IMPORTANTE: Arquitectura Multi-DB
    // Si usas multi-BD por empresa, necesitas:
    // protected $connection = 'tenant';  // Dinámicamente asignado
    
    protected static function booted()
    {
        // Global scope: solo acceder a datos de la empresa actual
        static::addGlobalScope('company', function (Builder $query) {
            $query->where('company_id', config('app.current_company_id'));
        });
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function details()
    {
        return $this->hasMany(SaleDetail::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    // Scope para búsquedas comunes
    public function scopeWithRelations($query)
    {
        return $query->with(['customer', 'details', 'company']);
    }

    public function scopeForCompany($query, int $companyId)
    {
        return $query->where('company_id', $companyId);
    }
}

// ✅ app/Http/Controllers/Sales/SalesController.php
class SalesController extends Controller
{
    public function __construct(private SaleRepository $repository) {}

    public function read(Request $request)
    {
        $validated = $request->validate([
            'page' => 'integer|min:1',
            'limit' => 'integer|min:1|max:100',
            'company_id' => 'required|integer|exists:companies,id',
        ]);

        // ✅ Eager loading: 4 queries totales (1 + 1 + 1 + 1)
        $sales = Sale::withRelations()
            ->forCompany($validated['company_id'])
            ->paginate($validated['limit'] ?? 60);

        return response()->json($sales);
    }
}

// ✅ app/Repositories/SaleRepository.php
class SaleRepository
{
    public function getForCompany(int $companyId, int $limit = 60, int $page = 1)
    {
        return Sale::with(['customer', 'details', 'company'])  // Eager loading
            ->forCompany($companyId)
            ->paginate($limit, ['*'], 'page', $page);
    }

    public function getById(int $saleId, int $companyId)
    {
        return Sale::with(['customer', 'details', 'company'])
            ->forCompany($companyId)
            ->findOrFail($saleId);
    }
}
```

### Impacto:
- **Antes:** 301 queries en 10-15 segundos
- **Después:** 4 queries en 100-200ms
- **Mejora:** 50-100x más rápido

---

## 4. PROBLEMA: Sin Rate Limiting

### ❌ ANTES (VULNERABLE)

```php
// routes/api.php
Route::post('auth/login', 'AuthController@login');  // Sin rate limiting
Route::get('crud', 'TableCrudController@read');      // DoS posible
```

### ✅ DESPUÉS (PROTEGIDO)

```php
// routes/api.php
Route::group(['middleware' => 'throttle:5,1'], function () {  // 5 intentos por minuto
    Route::post('auth/login', [AuthController::class, 'login']);
});

Route::group(['middleware' => 'throttle:60,1'], function () {  // 60 requests por minuto
    Route::get('crud', [TableCrudController::class, 'read']);
});

// app/Http/Middleware/ThrottleRequests.php (Laravel la provee)
// Automáticamente devuelve 429 (Too Many Requests) cuando se excede el límite
```

### Respuesta de cliente cuando se excede límite:

```json
HTTP 429 Too Many Requests

{
    "message": "Too Many Requests",
    "retry_after": 60
}

Headers:
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1730234520
Retry-After: 60
```

---

## 5. PROBLEMA: Sin Validación en Requests

### ❌ ANTES (SIN VALIDACIÓN)

```php
// app/Http/Controllers/Sales/SalesController.php
public function create(Request $request)
{
    // Datos sin validar 🔴
    $sale = Sale::create($request->all());
    
    foreach ($request->details as $detail) {  // ¿Existe details? ¿Es array?
        SaleDetail::create($detail);
    }
    
    return response()->json($sale);
}
```

### ✅ DESPUÉS (CON VALIDACIÓN)

```php
// app/Http/Requests/CreateSaleRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateSaleRequest extends FormRequest
{
    public function authorize(): bool
    {
        // ✅ Validar autorización
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            // Campos principales
            'company_id' => 'required|integer|exists:companies,id',
            'customer_id' => 'required|integer|exists:customers,id',
            'payment_method_id' => 'required|integer|exists:payment_methods,id',
            'notes' => 'nullable|string|max:500',
            
            // Detalles
            'details' => 'required|array|min:1|max:100',  // Al menos 1, máximo 100 líneas
            'details.*.product_id' => 'required|integer|exists:products,id',
            'details.*.quantity' => 'required|numeric|min:0.01|max:999999.99',
            'details.*.unit_price' => 'required|numeric|min:0|max:999999.99',
            'details.*.discount_percent' => 'nullable|numeric|min:0|max:100',
        ];
    }

    public function messages(): array
    {
        return [
            'customer_id.required' => 'El cliente es requerido',
            'customer_id.exists' => 'El cliente seleccionado no existe',
            'details.required' => 'Debe agregar al menos un producto',
            'details.min' => 'Debe haber al menos 1 producto',
            'details.max' => 'Máximo 100 productos por venta',
            'details.*.product_id.exists' => 'Producto no encontrado',
        ];
    }
}

// ✅ app/Http/Controllers/Sales/SalesController.php
class SalesController extends Controller
{
    public function __construct(private SaleService $saleService) {}

    public function create(CreateSaleRequest $request)  // ✅ Automáticamente validado
    {
        // $request->validated() solo contiene datos válidos
        $sale = $this->saleService->create($request->validated());
        
        return response()->json([
            'message' => 'Venta creada correctamente',
            'sale' => $sale
        ], 201);
    }
}
```

---

## 6. PROBLEMA: Transacciones Manuales Repetidas

### ❌ ANTES (CÓDIGO REPETIDO)

```php
// ❌ Patrón repetido en 10+ controladores
public function create(Request $request)
{
    try {
        DB::beginTransaction();
        
        $record = DB::table('sales')->insertGetId($data);
        
        DB::commit();
        return response()->json(['id' => $record]);
    } catch (Exception $e) {
        DB::rollBack();
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
```

### ✅ DESPUÉS (DRY - Don't Repeat Yourself)

```php
// ✅ app/Traits/DatabaseTransaction.php
namespace App\Traits;

use Exception;
use Illuminate\Support\Facades\DB;

trait DatabaseTransaction
{
    /**
     * Ejecutar código dentro de transacción
     */
    protected function inTransaction(callable $callback)
    {
        try {
            DB::beginTransaction();
            $result = $callback();
            DB::commit();
            return $result;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }
}

// ✅ Uso en Service:
class SaleService
{
    use DatabaseTransaction;

    public function create(array $data): Sale
    {
        return $this->inTransaction(function () use ($data) {
            $sale = Sale::create($data);
            
            foreach ($data['details'] as $detail) {
                $sale->details()->create($detail);
            }
            
            return $sale;
        });
    }
}
```

---

## 7. PROBLEMA: Modelos sin Métodos Utilitarios

### ❌ ANTES (POCO PRÁCTICO)

```php
// app/Models/Sale.php
class Sale extends Model
{
    // Nada de lógica, solo atributos
}

// En controllers:
$saleTotal = 0;
foreach ($sale->details as $detail) {
    $saleTotal += $detail->quantity * $detail->price;  // Calculado cada vez
}
```

### ✅ DESPUÉS (CON MÉTODOS ÚTILES)

```php
// ✅ app/Models/Sale.php
class Sale extends CoreModel
{
    // ... relaciones ...

    /**
     * Calcular total de la venta
     */
    public function getTotal(): float
    {
        return $this->details
            ->sum(fn($detail) => $detail->quantity * $detail->unit_price);
    }

    /**
     * Calcular total con descuentos
     */
    public function getTotalWithDiscount(): float
    {
        return $this->details
            ->sum(function ($detail) {
                $subtotal = $detail->quantity * $detail->unit_price;
                $discount = ($subtotal * ($detail->discount_percent ?? 0)) / 100;
                return $subtotal - $discount;
            });
    }

    /**
     * Calcular ISV (IVA Honduras)
     */
    public function getISV(): float
    {
        $rate = TaxRate::where('code', 'ISV')->first();
        return $this->getTotalWithDiscount() * ($rate->value / 100);
    }

    /**
     * Obtener total final con impuestos
     */
    public function getFinalTotal(): float
    {
        return $this->getTotalWithDiscount() + $this->getISV();
    }

    /**
     * Cambiar estado de venta
     */
    public function markAsPaid(): void
    {
        $this->update([
            'status' => 'paid',
            'paid_at' => now(),
        ]);

        AuditLog::record('sale.marked_as_paid', $this);
    }

    /**
     * Anular venta
     */
    public function cancel(string $reason): void
    {
        $this->update([
            'status' => 'cancelled',
            'cancellation_reason' => $reason,
            'cancelled_at' => now(),
        ]);

        AuditLog::record('sale.cancelled', $this, ['reason' => $reason]);
    }
}

// ✅ En controllers: mucho más limpio
public function show(Sale $sale)
{
    return response()->json([
        'sale' => $sale,
        'total' => $sale->getTotal(),
        'total_with_discount' => $sale->getTotalWithDiscount(),
        'isv' => $sale->getISV(),
        'final_total' => $sale->getFinalTotal(),
    ]);
}
```

---

## 8. PROBLEMA: Sin Policies (Autorización)

### ❌ ANTES (HARDCODED)

```php
// ❌ app/Http/Controllers/Sales/SalesController.php
public function delete(Request $request, int $saleId)
{
    $sale = Sale::find($saleId);
    
    // Lógica de autorización mezclada con lógica de negocio
    if ($request->user()->type_id != 1 && $request->user()->id != $sale->user_id) {
        return response()->json(['error' => 'Unauthorized'], 403);
    }
    
    $sale->delete();
}
```

### ✅ DESPUÉS (CON POLICIES)

```php
// ✅ app/Policies/SalePolicy.php
namespace App\Policies;

use App\Models\Sale;
use App\Models\User;

class SalePolicy
{
    public function view(User $user, Sale $sale): bool
    {
        // Admin ve todo
        if ($user->isAdmin()) {
            return true;
        }
        
        // Usuario solo puede ver sus propias ventas o de su empresa
        return $sale->user_id === $user->id || 
               $sale->company_id === $user->company_id;
    }

    public function create(User $user): bool
    {
        return $user->hasPermission('sales.create');
    }

    public function update(User $user, Sale $sale): bool
    {
        // Solo el admin o el vendedor que creó la venta
        return $user->isAdmin() || $sale->user_id === $user->id;
    }

    public function delete(User $user, Sale $sale): bool
    {
        // Solo admin puede eliminar, y solo si no está pagada
        return $user->isAdmin() && $sale->status !== 'paid';
    }
}

// ✅ app/Http/Controllers/Sales/SalesController.php
class SalesController extends Controller
{
    public function show(Sale $sale)
    {
        $this->authorize('view', $sale);  // ✅ Validación automática
        return response()->json($sale);
    }

    public function update(Request $request, Sale $sale)
    {
        $this->authorize('update', $sale);  // ✅ Validación automática
        $sale->update($request->validated());
        return response()->json($sale);
    }

    public function delete(Sale $sale)
    {
        $this->authorize('delete', $sale);  // ✅ Validación automática
        $sale->delete();
        return response()->json(['message' => 'Venta eliminada']);
    }
}
```

---

## Resumen de Cambios

| Problema | Solución | Beneficio |
|----------|----------|-----------|
| Inyección SQL | Query Builder + Whitelist | Seguridad 🔒 |
| Auditoría insegura | Sanitización de campos | Privacidad ✅ |
| N+1 Queries | Eager Loading | Performance 🚀 |
| Sin rate limiting | Throttle middleware | Estabilidad 🛡️ |
| Sin validación | Form Requests | Integridad ✅ |
| Código repetido | Traits + Services | Mantenibilidad 📦 |
| Modelos pobres | Métodos utilitarios | DRY principle ✅ |
| Autorización débil | Policies | Seguridad 🔒 |

