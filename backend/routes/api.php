<?php

use Illuminate\Http\Request;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;
use PHPUnit\TextUI\XmlConfiguration\Groups;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function () {
    Route::prefix('public')->group(function () {
        Route::get('countries',     'MasterController@getPublicCountries');
    });

    Route::group(['prefix' => 'auth'], function () {
        require_once __DIR__ . '/auth-api.php';
        Route::post('login', 'AuthController@login');

        Route::group(['middleware' => 'auth:api'], function () {
            Route::get('logout', 'AuthController@logout');
            Route::get('user', 'AuthController@user');
        });
    });


    Route::group(['middleware' => 'auth:api'], function () {
        require_once __DIR__ . '/commons.php';
        Route::apiResource('crud', 'TableCrudController');
        Route::group(['prefix' => 'reports'], function () {
            Route::get('sales',             'ReportController@getSales');
            Route::get('notes',             'ReportController@getNotes');
            Route::get('sales/detail/{id}', 'ReportController@getSalesDetail');
            Route::get('inventory',         'ReportController@getInventoryReport');
            Route::get('sales/report',      'ReportController@getSalesReport');
            Route::get('sales/closingsales','ReportController@getClosingSalesReport');
            Route::post('invoice',          'ReportController@getInvoiceReport');
            Route::post('note',             'ReportController@getNoteReport');
        });


        Route::group(['prefix' => 'users'], function () {
            Route::get('read',               'AuthController@getUsers');
            Route::get('profile',            'AuthController@getUser');
            Route::get('types',              'MasterController@getUserTypes');
            Route::put('update/{id}',       'AuthController@updateUser');
            Route::delete('delete/{id}',    'AuthController@deleteData');
        });

        Route::group(['prefix' => 'sales'], function () {
            Route::post('create',               'Sales\SalesController@create');
            Route::get('read',                  'Sales\SalesController@read');
            Route::get('checkin',               'Sales\SalesController@getCheckin');
            Route::prefix('detail')->group(function () {
                Route::get('read',                 'Sales\SalesDetailController@read');
            });
        });


        Route::group(['prefix' => 'shopping'], function () {
            Route::post('create',           'Shopping\ShoppingController@create');
            Route::get('read',              'Shopping\ShoppingController@select');
            Route::put('update/{id}',       'Shopping\ShoppingController@update');
            Route::delete('delete/{id}',    'Shopping\ShoppingController@delete');

            Route::prefix('detail')->group(function () {
                Route::post('create',    'Shopping\ShoppingController@createDetail');
                Route::get('detailId/{id}', 'Shopping\ShoppingController@selectDetailId');
                Route::get('read/{id}',  'Shopping\ShoppingController@selectDetail');
                Route::put('update/{id}', 'Shopping\ShoppingController@updateDetail');
                Route::delete('delete/{id}',    'Shopping\ShoppingController@deleteDetail');
            });
        });

        Route::group(['prefix' => 'persons'], function () {
            Route::prefix('customers')->group(function () {
                Route::post('create',           'Persons\CustomersController@create');
                Route::get('read',              'Persons\CustomersController@read');
                Route::put('update/{id}',       'Persons\CustomersController@update');
                Route::delete('delete/{id}',    'Persons\CustomersController@delete');
                Route::get('all',               'General\PersonsController@selectCustomersAll');
            });
            Route::prefix('providers')->group(function () {
                Route::post('create',           'Persons\ProvidersController@create');
                Route::get('read',              'Persons\ProvidersController@read');
                Route::put('update/{id}',       'Persons\ProvidersController@update');
                Route::delete('delete/{id}',    'Persons\ProvidersController@delete');
            });
            Route::get('customers',         'General\PersonsController@selectCustomers');
        });

        // Products
        Route::group(['prefix' => 'products'], function () {
            Route::get('class',                 'MasterController@getClasOfProducts');
            Route::group(['prefix' => 'units'], function () {
                Route::post('create',           'Products\MeasurementUnitsController@create');
                Route::get('read',              'Products\MeasurementUnitsController@select');
                Route::get('read/all',          'Products\MeasurementUnitsController@selectAll');
                Route::get('read/product',      'Products\MeasurementUnitsController@selectProducts');
                Route::put('update/{id}',       'Products\MeasurementUnitsController@update');
                Route::delete('delete/{id}',    'Products\MeasurementUnitsController@delete');
                Route::delete('delete/product/{id}',    'Products\MeasurementUnitsController@deleteProduct');
            });

            Route::group(['prefix' => 'groups'], function () {
                Route::post('create',           'Products\ItemsTypeController@create');
                Route::get('read',              'Products\ItemsTypeController@select');
                Route::get('getItemTypeAccounts', 'Products\ItemsTypeController@selectItemTypeAccounts');
                Route::put('update/{id}',       'Products\ItemsTypeController@update');
                Route::delete('delete/{id}',    'Products\ItemsTypeController@delete');
                Route::delete('delete/itemTypeAccounts/{id}',    'Products\ItemsTypeController@deleteItemTypeAccounts');
            });

            Route::group(['prefix' => 'items'], function () {
                Route::post('create',           'Products\ItemsController@create');
                Route::get('read',              'Products\ItemsController@select');
                Route::get('read/all',          'Products\ItemsController@getAllProducts');
                Route::get('read/sales',        'Products\ItemsController@getSalesProducts');
                Route::put('update/{id}',       'Products\ItemsController@update');
                Route::delete('delete/{id}',    'Products\ItemsController@delete');
            });

            Route::group(['prefix' => 'categories'], function () {
                Route::post('create',           'Products\CategoriesController@create');
                Route::get('read',              'Products\CategoriesController@select');
                Route::get('read/all',          'Products\CategoriesController@selectAll');
                Route::get('parents',           'Products\CategoriesController@selectParents');
                Route::get('childs',            'Products\CategoriesController@selectChilds');
                Route::put('update/{id}',       'Products\CategoriesController@update');
                Route::delete('delete/{id}',    'Products\CategoriesController@delete');
            });
            Route::group(['prefix' => 'brands'], function () {
                Route::post('create',           'Products\TradeMarksController@create');
                Route::get('read',              'Products\TradeMarksController@select');
                Route::get('read/all',           'Products\TradeMarksController@selectAll');
                Route::put('update/{id}',       'Products\TradeMarksController@update');
                Route::delete('delete/{id}',    'Products\TradeMarksController@delete');
            });
            Route::group(['prefix' => 'attributes'], function () {
                Route::post('create',           'Products\AttributesController@create');
                Route::get('read',              'Products\AttributesController@select');
                Route::get('all',               'Products\AttributesController@selectAll');
                Route::put('update/{id}',       'Products\AttributesController@update');
                Route::delete('delete/{id}',    'Products\AttributesController@delete');
            });
            Route::group(['prefix' => 'terms'], function () {
                Route::post('create',           'Products\TermsController@create');
                Route::get('read',              'Products\TermsController@select');
                Route::put('update/{id}',       'Products\TermsController@update');
                Route::delete('delete/{id}',    'Products\TermsController@delete');
            });
        });

        // Accounting
        Route::group(['prefix' => 'accounting'], function () {
            Route::group(['prefix' => 'accounts'], function () {
                Route::post('create',           'Accounting\AccountsController@create');
                Route::get('read',              'Accounting\AccountsController@select');
                Route::get('read/all',          'Accounting\AccountsController@selectAll');
                Route::get('read/subaccounts',  'Accounting\AccountsController@selectSubAccounts');
                Route::get('read/masteraccounts',   'Accounting\AccountsController@selectMasterAccounts');
                Route::put('update/{id}',       'Accounting\AccountsController@update');
                Route::delete('delete/{id}',    'Accounting\AccountsController@delete');
            });
            Route::group(['prefix' => 'clasofaccounts'], function () {
                Route::post('create',           'Accounting\ClassOfAccountsController@create');
                Route::get('read',              'Accounting\ClassOfAccountsController@select');
                Route::put('update/{id}',       'Accounting\ClassOfAccountsController@update');
                Route::delete('delete/{id}',    'Accounting\ClassOfAccountsController@delete');
            });
            Route::group(['prefix' => 'accountinggroups'], function () {
                Route::post('create',           'Accounting\AccountingGroupsController@create');
                Route::get('read',              'Accounting\AccountingGroupsController@select');
                Route::put('update/{id}',       'Accounting\AccountingGroupsController@update');
                Route::delete('delete/{id}',    'Accounting\AccountingGroupsController@delete');
            });
        });

        Route::group(['prefix' => 'companies'], function () {
            Route::group(['prefix' => 'company'], function () {
                Route::post('create',           'Companies\CompanyController@createCompany');
                Route::get('read',              'Companies\CompanyController@select');
                Route::get('test',              'Companies\CompanyController@testCompany');
                Route::put('update/{id}',       'Companies\CompanyController@updateCompany');
                Route::delete('delete/{id}',    'Companies\CompanyController@deleteCompany');
            });

            Route::group(['prefix' => 'branchoffice'], function () {
                Route::post('create',                   'Companies\BranchOfficeController@create');
                Route::get('read',                      'Companies\BranchOfficeController@select');
                Route::put('update/{id}',               'Companies\BranchOfficeController@update');
                Route::delete('delete/{id}',            'Companies\BranchOfficeController@delete');
                Route::prefix('pointofsale')->group(function () {
                    Route::get('read',          'Companies\BranchOfficeController@selectPointOfSale');
                    Route::put('update/{id}',   'Companies\BranchOfficeController@updatePointOfSale');
                    Route::post('create',       'Companies\BranchOfficeController@createPointOfSale');
                });
            });

            Route::group(['prefix' => 'departments'], function () {
                Route::post('create',           'Companies\DepartmentsController@create');
                Route::get('read',              'Companies\DepartmentsController@select');
                Route::put('update/{id}',       'Companies\DepartmentsController@update');
                Route::delete('delete/{id}',    'Companies\DepartmentsController@delete');
            });

            Route::group(['prefix' => 'wineries'], function () {
                Route::post('create',           'Companies\WineriesController@create');
                Route::get('read',              'Companies\WineriesController@select');
                Route::put('update/{id}',       'Companies\WineriesController@update');
                Route::delete('delete/{id}',    'Companies\WineriesController@delete');
            });

            Route::group(['prefix' => 'companytype'], function () {
                Route::post('create',           'Companies\CompanyTypeController@create');
                Route::get('read',              'Companies\CompanyTypeController@select');
                Route::put('update/{id}',       'Companies\CompanyTypeController@update');
                Route::delete('delete/{id}',    'Companies\CompanyTypeController@delete');
            });
        });
        require_once __DIR__ . '/general.php';
        Route::group(['prefix' => 'company'], function () {
            Route::post('create',           'CompanyController@createCompany');
            Route::post('createDb',         'CompanyController@createDb');
            Route::get('read',              'CompanyController@getCompany');
            Route::put('update/{id}',       'CompanyController@updateCompany');
            Route::delete('delete/{id}',    'CompanyController@deleteCompany');
        });
    });
});
