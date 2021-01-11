<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', 'AuthController@login');
        Route::post('signup', 'AuthController@signup');
        Route::get('signup/activate/{token}', 'AuthController@signupActivate');

        Route::group(['middleware' => 'auth:api'], function () {
            Route::get('logout', 'AuthController@logout');
            Route::get('user', 'AuthController@user');
        });
    });

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('currency', 'MasterController@getCurrency');
        Route::get('currencysys', 'MasterController@getCurrencySys');
        Route::get('countries', 'MasterController@getCountries');
        Route::get('cities', 'MasterController@getCities');
        Route::get('destenvironme', 'MasterController@getDestinationEnvironme');
        Route::get('documenttype', 'MasterController@getDocumentType');
        Route::get('operationtype', 'MasterController@getOperationType');
        Route::get('identitydocuments', 'MasterController@getIdentityDocuments');
        Route::get('taxes', 'MasterController@getTaxes');
        Route::get('typeorganization', 'MasterController@getTypeOrganization');
        Route::get('taxlevel', 'MasterController@getTaxLevel');
        Route::get('taxregime', 'MasterController@getTaxRegime');
        Route::get('quantityunits', 'MasterController@getQuantityUnits');
        Route::get('typeitemidentifications', 'MasterController@getTypeItemIdentifications');
        Route::get('referenceprice', 'MasterController@getReferencePrice');
        Route::get('paymentmethods', 'MasterController@getPaymentMethods');
        Route::get('meanspayment', 'MasterController@getMeansPayment');
        Route::get('timelimit', 'MasterController@getTimeLimit');
        Route::get('timelimits', 'MasterController@getTimeLimit');
        Route::get('shippingfrequency', 'MasterController@getShippingFrequency');
        Route::get('measurementunits', 'MasterController@getMeasurementUnits');
        Route::get('accounttypes', 'MasterController@getAccountTypes');
        Route::get('typepersons', 'MasterController@getTypePersons');
        Route::get('typepersons/customers', 'MasterController@getTypePersonsCustomers');
        Route::get('ipinfo', 'MasterController@getIpInfo');


        Route::group(['prefix' => 'reports'], function () {
            Route::get('sales',             'ReportController@getSales');
            Route::get('notes',             'ReportController@getNotes');
            Route::get('sales/detail/{id}', 'ReportController@getSalesDetail');
            Route::post('invoice',          'ReportController@getInvoiceReport');
            Route::post('note',             'ReportController@getNoteReport');
        });


        Route::group(['prefix' => 'sales'], function () {
            Route::post('create',           'Sales\SalesController@create');
        });


        Route::group(['prefix' => 'shopping'], function () {
            Route::post('create',           'Shopping\ShoppingController@create');
            Route::post('create/detail',    'Shopping\ShoppingController@createDetail');
            Route::get('read',              'Shopping\ShoppingController@select');
            Route::get('read/detail/{id}',  'Shopping\ShoppingController@selectDetail');
            Route::get('read/detailId/{id}','Shopping\ShoppingController@selectDetailId');
            Route::put('update/{id}',       'Shopping\ShoppingController@update');
            Route::put('update/detail/{id}','Shopping\ShoppingController@updateDetail');
            Route::delete('delete/{id}',    'Shopping\ShoppingController@delete');
            Route::delete('delete/detail/{id}',    'Shopping\ShoppingController@deleteDetail');
        });

        Route::group(['prefix' => 'persons'], function () {
            Route::post('create',           'General\PersonsController@create');
            Route::post('create/provider',  'General\PersonsController@createProvider');
            Route::get('read',              'General\PersonsController@select');
            Route::get('customers/all',     'General\PersonsController@selectCustomersAll');
            Route::get('customers',         'General\PersonsController@selectCustomers');
            Route::get('providers',         'General\PersonsController@selectProviders');
            Route::put('update/{id}',       'General\PersonsController@update');
            Route::delete('delete/{id}',    'General\PersonsController@delete');
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
                Route::get('getItemTypeAccounts','Products\ItemsTypeController@selectItemTypeAccounts');
                Route::put('update/{id}',       'Products\ItemsTypeController@update');
                Route::delete('delete/{id}',    'Products\ItemsTypeController@delete');
                Route::delete('delete/itemTypeAccounts/{id}',    'Products\ItemsTypeController@deleteItemTypeAccounts');
            });

            Route::group(['prefix' => 'items'], function () {
                Route::post('create',           'Products\ItemsController@create');
                Route::get('read',              'Products\ItemsController@select');
                Route::get('read/all',          'Products\ItemsController@getAllProducts');
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
                Route::put('update/{id}',       'Companies\CompanyController@updateCompany');
                Route::delete('delete/{id}',    'Companies\CompanyController@deleteCompany');
            });

            Route::group(['prefix' => 'branchoffice'], function () {
                Route::post('create',                   'Companies\BranchOfficeController@create');
                Route::post('create/pointofsale',       'Companies\BranchOfficeController@createPointOfSale');
                Route::get('read',                      'Companies\BranchOfficeController@select');
                Route::get('read/pointofsale',          'Companies\BranchOfficeController@selectPointOfSale');
                Route::put('update/{id}',               'Companies\BranchOfficeController@update');
                Route::put('update/pointofsale/{id}',   'Companies\BranchOfficeController@updatePointOfSale');
                Route::delete('delete/{id}',            'Companies\BranchOfficeController@delete');
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

        Route::group(['prefix' => 'general'], function () {

            Route::group(['prefix' => 'resolutions'], function () {
                Route::post('create',           'General\ResolutionsController@create');
                Route::get('read',              'General\ResolutionsController@getResolutions');
                Route::put('update/{id}',       'General\ResolutionsController@update');
                Route::delete('delete/{id}',    'General\ResolutionsController@delete');
            });

            Route::group(['prefix' => 'reports'], function () {
                Route::post('create',           'General\ReportsHeaderController@create');
                Route::get('read',              'General\ReportsHeaderController@select');
                Route::put('update/{id}',       'General\ReportsHeaderController@update');
                Route::delete('delete/{id}',    'General\ReportsHeaderController@delete');
            });

            Route::group(['prefix' => 'taxes'], function () {
                Route::post('create',           'General\TaxesController@create');
                Route::get('read',              'General\TaxesController@select');
                Route::put('update/{id}',       'General\TaxesController@update');
                Route::delete('delete/{id}',    'General\TaxesController@delete');
            });

            Route::group(['prefix' => 'currency'], function () {
                Route::post('create',           'General\CurrencyController@create');
                Route::get('change',            'General\CurrencyController@getChange');
                Route::get('change/local',      'General\CurrencyController@getChangeLocal');
                Route::get('read',              'General\CurrencyController@select');
                Route::put('update/{id}',       'General\CurrencyController@update');
                Route::delete('delete/{id}',    'General\CurrencyController@delete');
            });

            Route::group(['prefix' => 'taxerates'], function () {
                Route::post('create',           'General\TaxRatesController@create');
                Route::get('read',              'General\TaxRatesController@select');
                Route::put('update/{id}',       'General\TaxRatesController@update');
                Route::delete('delete/{id}',    'General\TaxRatesController@delete');
            });

            Route::group(['prefix' => 'identitydocs'], function () {
                Route::post('create',           'General\IdentityDocumentsController@create');
                Route::get('read',              'General\IdentityDocumentsController@select');
                Route::put('update/{id}',       'General\IdentityDocumentsController@update');
                Route::delete('delete/{id}',    'General\IdentityDocumentsController@delete');
            });
        });

        Route::group(['prefix' => 'company'], function () {
            Route::post('create',           'CompanyController@createCompany');
            Route::get('read',              'CompanyController@getCompany');
            Route::put('update/{id}',       'CompanyController@updateCompany');
            Route::delete('delete/{id}',    'CompanyController@deleteCompany');
        });
    });
});
