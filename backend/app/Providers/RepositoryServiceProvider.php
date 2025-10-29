<?php

namespace App\Providers;

use App\Repositories\{
    BaseRepository,
    SalesRepository,
    CustomersRepository,
    AccountingAccountsRepository,
    ExpensesRepository,
};
use App\Services\{
    SalesService,
    CustomersService,
    AccountingService,
    ExpensesService,
};
use Illuminate\Support\ServiceProvider;

/**
 * ✅ REPOSITORY SERVICE PROVIDER
 * 
 * Registra automáticamente todos los repositories y services
 * Beneficios:
 * - Dependency Injection automático
 * - Fácil testeo con mocks
 * - Centralizado
 */
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registrar repositories y services
     */
    public function register(): void
    {
        // REPOSITORIES
        $this->app->bind(SalesRepository::class, function ($app) {
            return new SalesRepository(new \App\Models\Sale());
        });

        $this->app->bind(CustomersRepository::class, function ($app) {
            return new CustomersRepository(new \App\Models\Customer());
        });

        $this->app->bind(AccountingAccountsRepository::class, function ($app) {
            return new AccountingAccountsRepository(new \App\Models\AccountingAccount());
        });

        $this->app->bind(ExpensesRepository::class, function ($app) {
            return new ExpensesRepository(new \App\Models\Expense());
        });

        // SERVICES
        $this->app->bind(SalesService::class, function ($app) {
            return new SalesService($app->make(SalesRepository::class));
        });

        $this->app->bind(CustomersService::class, function ($app) {
            return new CustomersService($app->make(CustomersRepository::class));
        });

        $this->app->bind(AccountingService::class, function ($app) {
            return new AccountingService($app->make(AccountingAccountsRepository::class));
        });

        $this->app->bind(ExpensesService::class, function ($app) {
            return new ExpensesService($app->make(ExpensesRepository::class));
        });
    }

    /**
     * Bootstrap servicios
     */
    public function boot(): void
    {
        // Aquí se pueden ejecutar acciones al iniciar la app
    }
}
