#!/bin/bash

# ============================================================================
# Setup Migration Environment - Y-Code Backend
# Script para configurar automáticamente las variables de entorno
# ============================================================================

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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
# CONFIGURAR VARIABLES DE ENTORNO
# ============================================================================

setup_env() {
    print_header "CONFIGURACIÓN DE ENTORNO PARA MIGRACIÓN"
    
    # Verificar si .env existe
    if [ ! -f .env ]; then
        print_error ".env no existe"
        print_info "Copiar desde .env.example primero:"
        print_info "cp .env.example .env"
        return 1
    fi
    
    print_info "Leyendo configuración existente..."
    
    # Leer valores existentes o usar defaults
    DB_HOST=$(grep -E "^DB_HOST=" .env | cut -d'=' -f2 | tr -d ' ' || echo "127.0.0.1")
    DB_PORT=$(grep -E "^DB_PORT=" .env | cut -d'=' -f2 | tr -d ' ' || echo "3307")
    DB_USERNAME=$(grep -E "^DB_USERNAME=" .env | cut -d'=' -f2 | tr -d ' ' || echo "root")
    DB_PASSWORD=$(grep -E "^DB_PASSWORD=" .env | cut -d'=' -f2 | tr -d ' ' || echo "")
    
    # Mostrar valores leídos
    print_info "Valores actuales detectados:"
    echo "  DB_HOST: $DB_HOST"
    echo "  DB_PORT: $DB_PORT"
    echo "  DB_USERNAME: $DB_USERNAME"
    echo ""
    
    # Preguntar si cambiar
    read -p "¿Deseas modificar estos valores? (s/n): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        read -p "DB_HOST [$DB_HOST]: " input && DB_HOST=${input:-$DB_HOST}
        read -p "DB_PORT [$DB_PORT]: " input && DB_PORT=${input:-$DB_PORT}
        read -p "DB_USERNAME [$DB_USERNAME]: " input && DB_USERNAME=${input:-$DB_USERNAME}
        read -p "DB_PASSWORD (dejar en blanco si es vacía): " -s input && DB_PASSWORD=${input:-$DB_PASSWORD}
        echo
    fi
    
    # Guardar valores nuevos
    print_info "Guardando configuración de BD nueva..."
    
    # Usar sed para actualizar .env
    sed -i.bak "s/^DB_HOST=.*/DB_HOST=$DB_HOST/" .env
    sed -i.bak "s/^DB_PORT=.*/DB_PORT=$DB_PORT/" .env
    sed -i.bak "s/^DB_DATABASE=.*/DB_DATABASE=y_code_new/" .env
    sed -i.bak "s/^DB_USERNAME=.*/DB_USERNAME=$DB_USERNAME/" .env
    
    if [ -z "$DB_PASSWORD" ]; then
        sed -i.bak "s/^DB_PASSWORD=.*/DB_PASSWORD=/" .env
    else
        sed -i.bak "s/^DB_PASSWORD=.*/DB_PASSWORD=$DB_PASSWORD/" .env
    fi
    
    print_success "Configuración de BD nueva guardada"
    
    # Agregar configuración de BD antigua si no existe
    if ! grep -q "DB_HOST_OLD" .env; then
        print_info "Agregando configuración de BD antigua..."
        
        cat >> .env << EOF

# Base de datos antigua (para migración)
DB_HOST_OLD=$DB_HOST
DB_PORT_OLD=$DB_PORT
DB_DATABASE_OLD=y_code
DB_USERNAME_OLD=$DB_USERNAME
DB_PASSWORD_OLD=$DB_PASSWORD
EOF
        
        print_success "Configuración de BD antigua agregada"
    else
        print_info "Actualizando configuración de BD antigua..."
        
        sed -i.bak "s/^DB_HOST_OLD=.*/DB_HOST_OLD=$DB_HOST/" .env
        sed -i.bak "s/^DB_PORT_OLD=.*/DB_PORT_OLD=$DB_PORT/" .env
        sed -i.bak "s/^DB_DATABASE_OLD=.*/DB_DATABASE_OLD=y_code/" .env
        sed -i.bak "s/^DB_USERNAME_OLD=.*/DB_USERNAME_OLD=$DB_USERNAME/" .env
        
        if [ -z "$DB_PASSWORD" ]; then
            sed -i.bak "s/^DB_PASSWORD_OLD=.*/DB_PASSWORD_OLD=/" .env
        else
            sed -i.bak "s/^DB_PASSWORD_OLD=.*/DB_PASSWORD_OLD=$DB_PASSWORD/" .env
        fi
        
        print_success "Configuración de BD antigua actualizada"
    fi
    
    # Remover archivo de backup
    rm -f .env.bak
    
    print_success "Configuración completada"
    echo ""
    print_info "Valores finales en .env:"
    echo "  DB_HOST: $DB_HOST"
    echo "  DB_PORT: $DB_PORT"
    echo "  DB_DATABASE: y_code_new"
    echo "  DB_USERNAME: $DB_USERNAME"
    echo "  DB_PASSWORD: $([ -z "$DB_PASSWORD" ] && echo '(vacía)' || echo '(configurada)')"
    echo ""
    print_info "BD Antigua:"
    echo "  DB_HOST_OLD: $DB_HOST"
    echo "  DB_PORT_OLD: $DB_PORT"
    echo "  DB_DATABASE_OLD: y_code"
}

# ============================================================================
# VERIFICAR CONEXIONES
# ============================================================================

verify_connections() {
    print_header "VERIFICANDO CONEXIONES A BASES DE DATOS"
    
    print_info "Leyendo configuración de .env..."
    
    DB_HOST=$(grep -E "^DB_HOST=" .env | cut -d'=' -f2 | tr -d ' ')
    DB_PORT=$(grep -E "^DB_PORT=" .env | cut -d'=' -f2 | tr -d ' ')
    DB_USERNAME=$(grep -E "^DB_USERNAME=" .env | cut -d'=' -f2 | tr -d ' ')
    
    # Prueba BD nueva
    print_info "Probando y_code_new..."
    if mysql -h $DB_HOST -P $DB_PORT -u $DB_USERNAME -e "USE y_code_new; SELECT 1;" 2>/dev/null; then
        print_success "Conexión a y_code_new exitosa"
    else
        print_error "No se puede conectar a y_code_new"
        return 1
    fi
    
    # Prueba BD antigua
    print_info "Probando y_code..."
    if mysql -h $DB_HOST -P $DB_PORT -u $DB_USERNAME -e "USE y_code; SELECT 1;" 2>/dev/null; then
        print_success "Conexión a y_code exitosa"
    else
        print_warning "No se puede conectar a y_code"
        print_info "Intenta restaurar desde backup:"
        print_info "  mysql -u $DB_USERNAME -h $DB_HOST -P $DB_PORT y_code < storage/backups/y_code.sql"
    fi
}

# ============================================================================
# VERIFICAR PREREQUISITOS
# ============================================================================

check_prerequisites() {
    print_header "VERIFICANDO PREREQUISITOS"
    
    local errors=0
    
    # Check PHP
    if command -v php &> /dev/null; then
        print_success "PHP encontrado"
    else
        print_error "PHP no encontrado"
        errors=$((errors+1))
    fi
    
    # Check MySQL
    if command -v mysql &> /dev/null; then
        print_success "MySQL encontrado"
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
    
    # Check artisan
    if [ -f artisan ]; then
        print_success "Laravel (artisan) encontrado"
    else
        print_error "Laravel (artisan) no encontrado"
        errors=$((errors+1))
    fi
    
    # Check backups
    if [ -d storage/backups ]; then
        local backup_count=$(ls -1 storage/backups/*.sql 2>/dev/null | wc -l)
        print_success "Directorio de backups encontrado ($backup_count backups)"
    else
        print_warning "Directorio storage/backups no existe"
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
# LIMPIAR CACHE DE LARAVEL
# ============================================================================

clear_laravel_cache() {
    print_header "LIMPIANDO CACHE DE LARAVEL"
    
    print_info "Ejecutando comandos de limpieza..."
    
    php artisan config:clear && print_success "Config limpiado"
    php artisan cache:clear && print_success "Cache limpiado"
    php artisan view:clear && print_success "Views limpiado"
    
    print_success "Cache de Laravel limpiado"
}

# ============================================================================
# MENU PRINCIPAL
# ============================================================================

show_menu() {
    echo ""
    print_header "SETUP MIGRATION ENVIRONMENT"
    echo ""
    echo "1) Verificar prerequisitos"
    echo "2) Configurar variables de entorno"
    echo "3) Verificar conexiones a BD"
    echo "4) Limpiar cache de Laravel"
    echo "5) Ejecutar setup completo (1+2+3+4)"
    echo "6) Salir"
    echo ""
    read -p "Selecciona una opción (1-6): " choice
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
                setup_env
                ;;
            3)
                verify_connections
                ;;
            4)
                clear_laravel_cache
                ;;
            5)
                print_header "EJECUTANDO SETUP COMPLETO"
                check_prerequisites && \
                setup_env && \
                verify_connections && \
                clear_laravel_cache && \
                print_success "Setup completado exitosamente"
                ;;
            6)
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

# Ejecutar si se llamó directamente
if [ "${BASH_SOURCE[0]}" = "${0}" ]; then
    main "$@"
fi
