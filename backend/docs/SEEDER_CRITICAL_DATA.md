# Seeder de Datos Críticos - CriticalDataSeeder

## 📋 Descripción

Seeder para cargar datos maestros funcionales críticos en la base de datos. Contiene información esencial para que la aplicación funcione correctamente.

## 🎯 Objetivo

Poblar las tablas de configuración fundamental con datos necesarios para:
- Definir países y monedas
- Tipos de documentos de identidad
- Categorías de personas (natural, jurídica, etc.)
- Tipos de organizaciones

## 📊 Tablas Afectadas

| Tabla | Registros | Descripción |
|-------|-----------|-------------|
| `countries` | 250+ | Listado de países del mundo |
| `currency_sys` | 3 | Monedas (USD, COP, EUR) |
| `identity_documents` | 4+ | Tipos de documentos (CC, CE, PA, NIT) |
| `type_persons` | 3 | Categorías de personas |
| `type_organization` | 3 | Tipos de organizaciones |

## 🚀 Uso

```bash
php artisan db:seed --class=CriticalDataSeeder
```

## 📝 Datos Iniciales

### Países (Muestra)
- Colombia (CO)
- Estados Unidos (US)
- México (MX)
- +220 países más

### Monedas
- USD - Dólar Estadounidense (1.00)
- COP - Peso Colombiano (4500.00)
- EUR - Euro (1.08)

### Documentos de Identidad
- CC - Cédula de Ciudadanía
- CE - Cédula de Extranjería
- PA - Pasaporte
- NIT - NIT

### Tipos de Personas
- Persona Natural
- Persona Jurídica
- Empresa

### Tipos de Organización
- Sociedad Anónima (SA)
- Limitada (LTDA)
- Sociedad por Acciones Simplificada (SAS)

## ⚙️ Características Técnicas

### Estrategia de Inserción
- Usa `insertOrIgnore()` para evitar duplicados
- Maneja relaciones foráneas correctamente
- Desactiva verificación de FK durante ejecución

### Estructura
```php
DB::statement('SET FOREIGN_KEY_CHECKS=0');
// ... inserciones ...
DB::statement('SET FOREIGN_KEY_CHECKS=1');
```

### Validación
El seeder incluye mensajes de confirmación para cada tabla:
```
✓ Países
✓ Monedas
✓ Documentos de identidad
✓ Tipos de personas
✓ Tipos de organización
✅ Datos críticos cargados exitosamente
```

## 📌 Notas

- Los datos son **compartidos** entre todas las empresas (datos globales)
- No incluye información de auditoría (timestamps son NULL)
- Diseñado para ser idempotente - puede ejecutarse múltiples veces
- Orientado a América Latina con enfoque en Colombia

## 🔄 Actualización Futura

Para agregar más datos críticos:

1. Crear nuevo método privado en la clase
2. Definir los datos en arrays
3. Usar `DB::table()` y `insertOrIgnore()`
4. Llamar el método desde `run()`
5. Agregar mensaje de confirmación

Ejemplo:
```php
private function seedNewTable(): void
{
    $data = [/* ... */];
    foreach ($data as $item) {
        DB::table('new_table')->insertOrIgnore($item);
    }
    $this->command->info('✓ Nueva tabla');
}
```

## ✅ Validación Post-Ejecución

Para verificar que los datos se cargaron:

```bash
php artisan tinker
>>> DB::table('countries')->count()
>>> DB::table('currency_sys')->count()
>>> DB::table('identity_documents')->count()
```

---

**Última actualización:** 2025-10-29  
**Estado:** ✅ Funcional y validado
