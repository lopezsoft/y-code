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

        Route::group(['middleware' => 'auth:api'], function() {
            Route::get('logout', 'AuthController@logout');
            Route::get('user', 'AuthController@user');
        });
    });

    Route::group(['middleware' => 'auth:api'], function() {
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
        Route::get('meanspayment', 'MasterController@geMeansPayment');


        // Products
        Route::group(['prefix' => 'products'], function () {
            Route::group(['prefix' => 'items'], function () {
                Route::post('create',           'Products\ItemsController@create');
                Route::get('read',              'Products\ItemsController@select');
                Route::put('update/{id}',       'Products\ItemsController@update');
                Route::delete('delete/{id}',    'Products\ItemsController@delete');
            });
            Route::group(['prefix' => 'categories'], function () {
                Route::post('create',           'Products\CategoriesController@create');
                Route::get('read',              'Products\CategoriesController@select');
                Route::put('update/{id}',       'Products\CategoriesController@update');
                Route::delete('delete/{id}',    'Products\CategoriesController@delete');
            });
            Route::group(['prefix' => 'brands'], function () {
                Route::post('create',           'Products\TradeMarksController@create');
                Route::get('read',              'Products\TradeMarksController@select');
                Route::put('update/{id}',       'Products\TradeMarksController@update');
                Route::delete('delete/{id}',    'Products\TradeMarksController@delete');
            });
        });

        // Accounting
        Route::group(['prefix' => 'accounting'], function () {
            Route::group(['prefix' => 'accounts'], function () {
                Route::post('create',           'Accounting\AccountsController@create');
                Route::get('read',              'Accounting\AccountsController@select');
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

        Route::group(['prefix' => 'companies'], function ()
        {
            Route::group(['prefix' => 'company'], function () {
                Route::post('create',           'Companies\CompanyController@createCompany');
                Route::get('read',              'Companies\CompanyController@select');
                Route::put('update/{id}',       'Companies\CompanyController@updateCompany');
                Route::delete('delete/{id}',    'Companies\CompanyController@deleteCompany');
            });

            Route::group(['prefix' => 'branchoffice'], function () {
                Route::post('create',           'Companies\BranchOfficeController@create');
                Route::get('read',              'Companies\BranchOfficeController@select');
                Route::put('update/{id}',       'Companies\BranchOfficeController@update');
                Route::delete('delete/{id}',    'Companies\BranchOfficeController@delete');
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

        Route::group(['prefix' => 'general'], function ()
        {
            Route::group(['prefix' => 'taxes'], function () {
                Route::post('create',           'General\TaxesController@create');
                Route::get('read',              'General\TaxesController@select');
                Route::put('update/{id}',       'General\TaxesController@update');
                Route::delete('delete/{id}',    'General\TaxesController@delete');
            });

            Route::group(['prefix' => 'currency'], function () {
                Route::post('create',           'General\CurrencyController@create');
                Route::get('read',              'General\CurrencyController@select');
                Route::get('currencies',        'General\CurrencyController@getCurrencies');
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
