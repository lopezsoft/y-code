<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateAdditionalTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // ============= TABLAS DE CONFIGURACIÓN =============
        
        // tb_audit - Auditoría de cambios
        Schema::dropIfExists('tb_audit');
        Schema::create('tb_audit', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('action', 100);
            $table->string('table_name', 100);
            $table->text('old_values')->nullable();
            $table->text('new_values')->nullable();
            $table->timestamp('created_at')->useCurrent();
            
            $table->index('company_id');
            $table->index('user_id');
            $table->index('table_name');
            $table->index('created_at');
        });

        // tb_time_limit - Límites de tiempo
        Schema::create('tb_time_limit', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 255);
            $table->integer('minutes');
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // ============= TABLAS DE IDENTIDAD Y LOCALIZACIÓN =============
        
        // identity_documents - Tipos de documentos de identidad
        Schema::create('identity_documents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 10)->unique();
            $table->string('name', 100);
            $table->string('abbreviation', 20)->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // cities - Ciudades
        Schema::create('cities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('country_id');
            $table->string('name', 100);
            $table->string('code', 20)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->index('country_id');
        });

        // departments - Departamentos
        Schema::create('departments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('country_id');
            $table->string('name', 100);
            $table->string('code', 20)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
            $table->index('country_id');
        });

        // type_persons - Tipos de personas (Jurídica, Natural, etc.)
        Schema::create('type_persons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // type_organization - Tipos de organización
        Schema::create('type_organization', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // ============= TABLAS DE PERSONAS Y CONTACTOS =============
        
        // persons - Personas (Clientes, proveedores, empleados)
        Schema::create('persons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('type_person_id');
            $table->unsignedBigInteger('identity_document_id');
            $table->string('identity_number', 50);
            $table->string('first_name', 100);
            $table->string('last_name', 100)->nullable();
            $table->string('business_name', 200)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('phone', 50)->nullable();
            $table->string('mobile', 50)->nullable();
            $table->string('address', 255)->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->string('postal_code', 20)->nullable();
            $table->text('notes')->nullable();
            $table->boolean('is_active')->default(true);
            $table->softDeletes();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('type_person_id')->references('id')->on('type_persons')->onDelete('restrict');
            $table->foreign('identity_document_id')->references('id')->on('identity_documents')->onDelete('restrict');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('set null');
            
            $table->unique(['company_id', 'identity_number']);
            $table->index('company_id');
            $table->index('type_person_id');
            $table->index('identity_number');
        });

        // secondary_persons - Personas secundarias
        Schema::create('secondary_persons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('person_id');
            $table->string('first_name', 100);
            $table->string('last_name', 100)->nullable();
            $table->string('relationship', 50);
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('person_id')->references('id')->on('persons')->onDelete('cascade');
            $table->index('person_id');
        });

        // ============= TABLAS DE CATEGORIZACIÓN =============
        
        // categories - Categorías de productos
        Schema::create('categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->string('code', 50)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->unique(['company_id', 'code']);
            $table->index('company_id');
        });

        // subcategories - Subcategorías
        Schema::create('subcategories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('category_id');
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->string('code', 50)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->index('category_id');
        });

        // product_categories - Categorías de productos
        Schema::create('product_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // product_subcategories - Subcategorías de productos
        Schema::create('product_subcategories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_category_id');
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('product_category_id')->references('id')->on('product_categories')->onDelete('cascade');
            $table->index('product_category_id');
        });

        // product_brands - Marcas de productos
        Schema::create('product_brands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->string('logo_url', 255)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // product_class - Clases de productos
        Schema::create('product_class', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // ============= TABLAS DE UNIDADES Y ATRIBUTOS =============
        
        // measurement_units - Unidades de medida
        Schema::create('measurement_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // standard_measurement_units - Unidades de medida estándar
        Schema::create('standard_measurement_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 20)->unique();
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });

        // attributes - Atributos de productos
        Schema::create('attributes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 100);
            $table->string('type', 50); // text, select, color, size, etc.
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // attribute_terms - Valores de atributos
        Schema::create('attribute_terms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('attribute_id');
            $table->string('name', 100);
            $table->string('slug', 100);
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('attribute_id')->references('id')->on('attributes')->onDelete('cascade');
            $table->index('attribute_id');
        });

        // sizes - Tallas/Tamaños
        Schema::create('sizes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('code', 20);
            $table->string('name', 100);
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->unique(['company_id', 'code']);
            $table->index('company_id');
        });

        // trademarks - Marcas registradas
        Schema::create('trademarks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 150);
            $table->string('registration_number', 100)->nullable();
            $table->date('registration_date')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // ============= TABLAS DE IMPUESTOS Y TRIBUTOS =============
        
        // tributes - MAESTRO DE TRIBUTOS (Catálogo de tipos de impuestos)
        // Datos globales independientes de empresa
        Schema::create('tributes', function (Blueprint $table) {
            $table->bigIncrements('id')
                ->comment('ID único del tributo');
            $table->string('code', 20)->unique()
                ->comment('Código único. Ej: ISV, ISR, RET-ISR-10, RET-ISV-100');
            $table->string('name', 100)
                ->comment('Nombre descriptivo del tributo. Ej: "Impuesto sobre Ventas"');
            $table->decimal('percentage', 8, 4)
                ->comment('Tasa base/referencial del tributo. Ej: 15.0000 para ISV');
            $table->text('description')->nullable()
                ->comment('Descripción detallada del tributo, cuándo aplica, base legal');
            $table->enum('category', ['sales_tax', 'income_tax', 'withholding', 'municipal', 'special'])
                ->default('sales_tax')
                ->comment('Categoría: sales_tax=ISV, income_tax=ISR, withholding=retención, municipal=municipal, special=especial');
            $table->boolean('is_active')->default(true)
                ->comment('true = tributo activo. false = deshabilitado');
            $table->timestamp('created_at')->useCurrent()
                ->comment('Fecha de creación del registro');
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate()
                ->comment('Fecha de última actualización del registro');
            
            // Índices
            $table->index('code');
            $table->index('category');
            $table->index('is_active');
        });

        // tax_group - Grupos de impuestos
        Schema::create('tax_group', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id');
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->index('company_id');
        });

        // tax_accounting_account - Relación entre impuestos y cuentas contables
        Schema::create('tax_accounting_account', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('tax_rate_id');
            $table->unsignedBigInteger('accounting_account_id');
            $table->string('account_type', 50); // debit, credit
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            
            $table->foreign('tax_rate_id')->references('id')->on('tax_rates')->onDelete('cascade');
            $table->foreign('accounting_account_id')->references('id')->on('accounting_accounts')->onDelete('cascade');
            $table->unique(['tax_rate_id', 'accounting_account_id']);
        });

        echo "✅ Migraciones de tablas adicionales creadas exitosamente.\n";
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Eliminar en orden inverso por dependencias
        Schema::dropIfExists('tax_accounting_account');
        Schema::dropIfExists('tributes');
        Schema::dropIfExists('tax_group');
        Schema::dropIfExists('trademarks');
        Schema::dropIfExists('sizes');
        Schema::dropIfExists('attribute_terms');
        Schema::dropIfExists('attributes');
        Schema::dropIfExists('standard_measurement_units');
        Schema::dropIfExists('measurement_units');
        Schema::dropIfExists('product_class');
        Schema::dropIfExists('product_brands');
        Schema::dropIfExists('product_subcategories');
        Schema::dropIfExists('product_categories');
        Schema::dropIfExists('subcategories');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('secondary_persons');
        Schema::dropIfExists('persons');
        Schema::dropIfExists('type_organization');
        Schema::dropIfExists('type_persons');
        Schema::dropIfExists('departments');
        Schema::dropIfExists('cities');
        Schema::dropIfExists('identity_documents');
        Schema::dropIfExists('tb_time_limit');
        Schema::dropIfExists('tb_audit');
    }
}
