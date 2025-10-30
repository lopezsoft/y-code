# 📊 Análisis de Tablas que Requieren SEED

**Total de tablas con datos iniciales:** 79 tablas

## 🎯 Clasificación por Prioridad

### **NIVEL 1: CRÍTICO - Master/Reference Data (Funcionamiento Base)**
Estas tablas son imprescindibles para que la aplicación funcione. Sin ellas, habrá errores en:
- Validaciones
- Cálculos
- Restricciones de negocio

```
1. countries                         - Países (FK requerida)
2. currency_sys                      - Sistemas de moneda
3. tax_rates                         - Rangos/tarifas de impuestos
4. accounting_groups                 - Grupos contables
5. currencies (currency)             - Monedas
6. departments                       - Departamentos geográficos
7. cities                            - Ciudades
8. account_types                     - Tipos de cuentas
9. class_of_accounts                 - Clases contables
10. accounting_documents_category    - Categorías de documentos
11. identity_documents               - Tipos de identificación
12. type_persons                     - Tipos de personas
13. type_users                       - Tipos de usuarios
14. type_organization                - Tipos de organización
15. languajes                        - Idiomas
16. payment_methods                  - Métodos de pago
17. means_payment                    - Medios de pago
18. product_class                    - Clases de producto
19. work_shifts                      - Turnos de trabajo
20. shipping_frequency               - Frecuencias de envío
21. standard_measurement_units       - Unidades de medida estándar
22. tributes (tax_group)             - Grupos tributarios
23. fe_tax_level                     - Niveles de impuesto FE
24. fe_tax_regime                    - Regímenes tributarios
25. items_types                      - Tipos de items
```

**Acción:** ✅ REQUIRED - Cargar obligatoriamente en seed inicial

---

### **NIVEL 2: IMPORTANTE - Reference/Configuration Data**
Datos de configuración y referencia que facilitan operación normal pero no rompen la app

```
26. company                          - Empresa principal (1 registro mínimo)
27. branch_offices                   - Sucursales/puntos de venta
28. warehouse                        - Almacenes
29. cash_registers                   - Cajas registradoras
30. points_of_sale                   - Puntos de venta
31. company_departments              - Departamentos de empresa
32. accounting_accounts              - Cuentas contables (~2,284 registros)
33. accounting_subaccounts           - Subcuentas contables
34. accounting_documents             - Documentos contables
35. accounts_base                    - Cuentas base
36. tax_accounting_account           - Cuentas tributarias
37. item_type_accounts               - Cuentas por tipo de item
38. categories                       - Categorías de producto
39. subcategories                    - Subcategorías
40. attributes                       - Atributos de producto
41. attribute_terms                  - Términos de atributos
42. sizes                            - Tallas
43. trademarks                       - Marcas
44. measurement_units                - Unidades de medida
45. report_header                    - Encabezados de reportes
46. general_settings                 - Configuración general
47. menus                            - Menús del sistema
48. menus_items                      - Items de menú
49. tb_time_limit                    - Límites de tiempo
50. fe_party_tax                     - Datos de partes tributarias FE
51. fe_reference_price_codes         - Códigos de precios ref FE
```

**Acción:** ⚠️ RECOMENDADO - Cargar en seed de desarrollo, opcional en producción

---

### **NIVEL 3: TRANSACCIONAL - Datos de Ejemplo/Operación**
Datos específicos de operación que varían según instancia

```
52. users                            - Usuarios (varía por empresa)
53. persons                          - Personas/clientes
54. secondary_persons                - Personas secundarias
55. customers_sale                   - Relación cliente-venta
56. products                         - Productos
57. product_branch                   - Productos por sucursal
58. product_brands                   - Marcas de producto
59. product_categories               - Categorías de producto
60. product_subcategories            - Subcategorías de producto
61. product_units_measure            - Unidades de medida de producto
62. product_code_control             - Control de códigos
63. stock_control                    - Control de inventario
64. stock_outings                    - Salidas de stock
65. sales_master                     - Maestro de ventas
66. sales_detail                     - Detalle de ventas
67. sales_currency                   - Monedas de venta
68. sales_detail_taxes               - Impuestos en detalle
69. means_payment_sale               - Medios de pago por venta
70. resolution_sale                  - Resoluciones de venta
71. resolutions                      - Resoluciones
72. invoices                         - Facturas
73. invoice_detail                   - Detalle de facturas
74. billing_payment                  - Pagos de facturación
75. user_sales                       - Usuarios/vendedores por venta
76. sales_items                      - Items de venta
77. expenses                         - Gastos
78. payments                         - Pagos
79. warehouse_inventory              - Inventario de almacén
80. assigned_cash_register           - Asignaciones de caja
81. assigned_work_shifts             - Asignaciones de turno
```

**Acción:** ❌ OPCIONAL - Solo para ambiente de desarrollo/testing

---

## 📋 Resumen de Estrategia

| Nivel | Tabla | Total | Acción | Prioridad |
|-------|-------|-------|--------|-----------|
| 1 | Master/Reference (Crítico) | 25 | **REQUERIDO** | 🔴 Inmediato |
| 2 | Config/Reference | 26 | **RECOMENDADO** | 🟡 Próximo |
| 3 | Transaccional/Ejemplo | 28 | **OPCIONAL** | 🟢 Opcional |

---

## 🛠️ Plan de Ejecución

### Fase 1: CRÍTICO (25 tablas)
- Crear seeders para Nivel 1
- Ejecutar: `php artisan db:seed --class=CriticalDataSeeder`
- Verifica que app funcione sin errores

### Fase 2: RECOMENDADO (26 tablas)
- Crear seeders para Nivel 2
- Ejecutar: `php artisan db:seed --class=ConfigurationDataSeeder`
- Prepara ambiente para operación

### Fase 3: OPCIONAL (28 tablas)
- Crear seeders para Nivel 3 (solo si necesario)
- Ejecutar: `php artisan db:seed --class=TransactionalDataSeeder`
- Datos de prueba/ejemplo

---

## ✅ Validación

Después de cada fase:
```bash
php artisan db:seed --class=[SeederName]
# Verificar que no hay errores FK
# Verificar que datos se insertaron correctamente
```

---

**Estado:** 📊 Análisis completado - Listo para generar seeders
