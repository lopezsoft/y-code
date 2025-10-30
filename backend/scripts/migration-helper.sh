#!/bin/bash

# ============================================================================
# Migration Helper Script - Y-Code Backend
# Script para facilitar operaciones comunes de migración
# ============================================================================

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================================================
# FUNCIONES AUXILIARES
# ============================================================================

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# ============================================================================
# 1. PRE-FLIGHT CHECKS
# ============================================================================

check_prerequisites() {
    print_header "VERIFICANDO PREREQUISITOS"
    
    local errors=0
    
    # Check PHP
    if command -v php &> /dev/null; then
        print_success "PHP encontrado: $(php -v | head -n 1)"
    else
        print_error "PHP no encontrado"
        errors=$((errors+1))
    fi
    
    # Check MySQL
    if command -v mysql &> /dev/null; then
        print_success "MySQL encontrado: $(mysql --version)"
    else
        print_error "MySQL no encontrado"
        errors=$((errors+1))
    fi
    
    # Check .env
    if [ -f .env ]; then
        print_success ".env encontrado"
    else
        print_error ".env no existe"
        errors=$((errors+1))
    fi
    
    # Check Laravel
    if [ -f artisan ]; then
        print_success "Laravel (artisan) encontrado"
    else
        print_error "Laravel (artisan) no encontrado"
        errors=$((errors+1))
    fi
    
    if [ $errors -eq 0 ]; then
        print_success "Todos los prerequisitos verificados"
        return 0
    else
        print_error "Se encontraron $errors prerequisitos faltantes"
        return 1
    fi
}

# ============================================================================
# 2. VERIFICAR CONEXIONES A BASES DE DATOS
# ============================================================================

check_databases() {
    print_header "VERIFICANDO CONEXIONES A BASES DE DATOS"
    
    local db_host=${1:-127.0.0.1}
    local db_port=${2:-3307}
    local db_user=${3:-root}
    
    # BD Nueva
    print_info "Verificando y_code_new..."
    if mysql -h $db_host -P $db_port -u $db_user -e "USE y_code_new; SELECT 1;" 2>/dev/null; then
        print_success "BD y_code_new accesible"
    else
        print_error "No se puede conectar a y_code_new"
        return 1
    fi
    
    # BD Antigua
    print_info "Verificando y_code..."
    if mysql -h $db_host -P $db_port -u $db_user -e "USE y_code; SELECT 1;" 2>/dev/null; then
        print_success "BD y_code accesible"
    else
        print_warning "BD y_code no accesible (puede ser y_doce_companies)"
    fi
    
    print_success "Conexiones a BD verificadas"
}

# ============================================================================
# 3. CREAR BACKUPS
# ============================================================================

create_backup() {
    local database=$1
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    local backup_file="storage/backups/${database}_backup_${timestamp}.sql"
    
    print_header "CREANDO BACKUP: $database"
    
    # Crear directorio si no existe
    mkdir -p storage/backups
    
    print_info "Creando backup en: $backup_file"
    
    if mysqldump -u root -h 127.0.0.1 -P 3307 $database > "$backup_file" 2>/dev/null; then
        local size=$(du -h "$backup_file" | cut -f1)
        print_success "Backup creado exitosamente (${size})"
        echo $backup_file
        return 0
    else
        print_error "Error creando backup"
        return 1
    fi
}

# ============================================================================
# 4. CONTAR REGISTROS
# ============================================================================

count_records() {
    print_header "CONTEO DE REGISTROS"
    
    local database=$1
    local query="
    SELECT 'companies' as tabla, COUNT(*) as registros FROM companies
    UNION
    SELECT 'users', COUNT(*) FROM users
    UNION
    SELECT 'business_users', COUNT(*) FROM business_users
    UNION
    SELECT 'customers', COUNT(*) FROM customers
    UNION
    SELECT 'accounting_accounts', COUNT(*) FROM accounting_accounts
    UNION
    SELECT 'sales', COUNT(*) FROM sales
    UNION
    SELECT 'sales_items', COUNT(*) FROM sales_items
    UNION
    SELECT 'expenses', COUNT(*) FROM expenses
    UNION
    SELECT 'payments', COUNT(*) FROM payments
    ORDER BY tabla;
    "
    
    print_info "Registros en: $database"
    mysql -u root -h 127.0.0.1 -P 3307 $database -e "$query"
}

# ============================================================================
# 5. EJECUTAR MIGRACION
# ============================================================================

run_migration() {
    local verbose=${1:-false}
    
    print_header "EJECUTANDO MIGRACION DE DATOS"
    
    print_warning "Esta operación puede tomar varios minutos..."
    echo ""
    
    if [ "$verbose" = true ]; then
        php artisan migrate:data --from-old -v
    else
        php artisan migrate:data --from-old
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Migración completada"
        return 0
    else
        print_error "Error durante la migración"
        return 1
    fi
}

# ============================================================================
# 6. VALIDAR MIGRACION
# ============================================================================

validate_migration() {
    local detailed=${1:-false}
    local export=${2:-false}
    
    print_header "VALIDANDO MIGRACION"
    
    local cmd="php artisan validate:data"
    
    if [ "$detailed" = true ]; then
        cmd="$cmd --detailed"
    fi
    
    if [ "$export" = true ]; then
        cmd="$cmd --export"
    fi
    
    $cmd
    
    if [ $? -eq 0 ]; then
        print_success "Validación completada"
        return 0
    else
        print_error "Validación encontró errores"
        return 1
    fi
}

# ============================================================================
# 7. ROLLBACK
# ============================================================================

rollback_migration() {
    print_header "DESHACIENDO MIGRACION"
    
    print_warning "Esta operación truncará las tablas operacionales"
    print_warning "Los datos de seeders (países, monedas, etc.) se preservarán"
    echo ""
    
    read -p "¿Deseas continuar? (s/n): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        php artisan migrate:rollback-data --confirm
        if [ $? -eq 0 ]; then
            print_success "Rollback completado"
            return 0
        else
            print_error "Error durante rollback"
            return 1
        fi
    else
        print_info "Rollback cancelado"
        return 2
    fi
}

# ============================================================================
# 8. RESTAURAR DESDE BACKUP
# ============================================================================

restore_from_backup() {
    local backup_file=$1
    local database=$2
    
    if [ -z "$backup_file" ] || [ -z "$database" ]; then
        print_error "Uso: restore_from_backup <backup_file> <database>"
        return 1
    fi
    
    if [ ! -f "$backup_file" ]; then
        print_error "Archivo de backup no existe: $backup_file"
        return 1
    fi
    
    print_header "RESTAURANDO DESDE BACKUP"
    print_info "Backup: $backup_file"
    print_info "Base de datos: $database"
    
    read -p "¿Deseas continuar? (s/n): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        if mysql -u root -h 127.0.0.1 -P 3307 $database < "$backup_file" 2>/dev/null; then
            print_success "Restauración completada"
            return 0
        else
            print_error "Error restaurando backup"
            return 1
        fi
    else
        print_info "Restauración cancelada"
        return 2
    fi
}

# ============================================================================
# 9. COMPARAR BUSCAS
# ============================================================================

compare_databases() {
    print_header "COMPARANDO REGISTROS ENTRE BASES DE DATOS"
    
    local db_old=$1
    local db_new=${2:-y_code_new}
    
    echo ""
    echo "Tabla de comparación:"
    echo "────────────────────────────────────────────────────────────"
    
    mysql -u root -h 127.0.0.1 -P 3307 -e "
    SELECT 
        tabla,
        COALESCE(OLD, 0) as 'BD_Antigua',
        COALESCE(NEW, 0) as 'BD_Nueva',
        COALESCE(NEW, 0) - COALESCE(OLD, 0) as 'Diferencia'
    FROM (
        SELECT 'companies' as tabla, COUNT(*) as OLD FROM $db_old.companies
        UNION ALL
        SELECT 'users', COUNT(*) FROM $db_old.users
        UNION ALL
        SELECT 'customers', COUNT(*) FROM $db_old.customers
        UNION ALL
        SELECT 'sales', COUNT(*) FROM $db_old.sales
        UNION ALL
        SELECT 'expenses', COUNT(*) FROM $db_old.expenses
    ) old
    FULL OUTER JOIN (
        SELECT 'companies' as tabla, COUNT(*) as NEW FROM $db_new.companies
        UNION ALL
        SELECT 'users', COUNT(*) FROM $db_new.users
        UNION ALL
        SELECT 'customers', COUNT(*) FROM $db_new.customers
        UNION ALL
        SELECT 'sales', COUNT(*) FROM $db_new.sales
        UNION ALL
        SELECT 'expenses', COUNT(*) FROM $db_new.expenses
    ) new ON old.tabla = new.tabla
    ORDER BY tabla;
    "
}

# ============================================================================
# 10. MENU PRINCIPAL
# ============================================================================

show_menu() {
    echo ""
    print_header "MIGRATION HELPER - MENU PRINCIPAL"
    echo ""
    echo "1) Verificar prerequisitos"
    echo "2) Verificar conexiones a BDs"
    echo "3) Crear backup de y_code_new"
    echo "4) Crear backup de y_code"
    echo "5) Contar registros en y_code_new"
    echo "6) Contar registros en y_code"
    echo "7) Ejecutar migración (normal)"
    echo "8) Ejecutar migración (verbose)"
    echo "9) Validar migración"
    echo "10) Validar migración (detallado)"
    echo "11) Comparar BDs (vieja vs nueva)"
    echo "12) Deshacer migración (rollback)"
    echo "13) Restaurar desde backup"
    echo "14) Salir"
    echo ""
    read -p "Selecciona una opción (1-14): " choice
}

# ============================================================================
# MAIN EXECUTION
# ============================================================================

main() {
    clear
    
    while true; do
        show_menu
        
        case $choice in
            1)
                check_prerequisites
                ;;
            2)
                check_databases
                ;;
            3)
                create_backup "y_code_new"
                ;;
            4)
                create_backup "y_code"
                ;;
            5)
                count_records "y_code_new"
                ;;
            6)
                count_records "y_code"
                ;;
            7)
                run_migration false
                ;;
            8)
                run_migration true
                ;;
            9)
                validate_migration false false
                ;;
            10)
                validate_migration true true
                ;;
            11)
                compare_databases "y_code" "y_code_new"
                ;;
            12)
                rollback_migration
                ;;
            13)
                read -p "Ruta del backup (ej: storage/backups/y_code_new_backup.sql): " backup_file
                read -p "Base de datos destino (ej: y_code_new): " target_db
                restore_from_backup "$backup_file" "$target_db"
                ;;
            14)
                print_success "¡Hasta luego!"
                exit 0
                ;;
            *)
                print_error "Opción inválida"
                ;;
        esac
        
        echo ""
        read -p "Presiona ENTER para continuar..."
    done
}

# Ejecutar main si el script se ejecuta directamente
if [ "${BASH_SOURCE[0]}" = "${0}" ]; then
    main "$@"
fi
