<?php

namespace App\Services;

use Illuminate\Container\Container;

/**
 * ✅ SERVICE LOCATOR
 * 
 * Facilita acceso a servicios desde cualquier lugar
 * Patrón: Service Locator (alternativa a DI)
 * 
 * Uso:
 * ServiceLocator::sales()->getSummary($id)
 * ServiceLocator::customers()->getStatistics($customerId)
 */
class ServiceLocator
{
    protected static ?Container $container = null;

    public static function setContainer(Container $container): void
    {
        static::$container = $container;
    }

    public static function container(): Container
    {
        return static::$container ??= app();
    }

    public static function sales(): SalesService
    {
        return static::container()->make(SalesService::class);
    }

    public static function customers(): CustomersService
    {
        return static::container()->make(CustomersService::class);
    }

    public static function accounting(): AccountingService
    {
        return static::container()->make(AccountingService::class);
    }

    public static function expenses(): ExpensesService
    {
        return static::container()->make(ExpensesService::class);
    }
}
