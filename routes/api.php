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
        // Accounting
        Route::group(['prefix' => 'accounting'], function () {
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
            Route::group(['prefix' => 'branchoffice'], function () {
                Route::post('create',           'Companies\BranchOfficeController@createCompany');
                Route::get('read/{id}',         'Companies\BranchOfficeController@selectUnique');
                Route::get('read',              'Companies\BranchOfficeController@select');
                Route::put('update/{id}',       'Companies\BranchOfficeController@updateCompany');
                Route::delete('delete/{id}',    'Companies\BranchOfficeController@deleteBranchOffice');
            });

            Route::group(['prefix' => 'departaments'], function () {
                Route::post('create',           'Companies\DepartamentsController@createCompany');
                Route::get('read',              'Companies\DepartamentsController@select');
                Route::put('update/{id}',       'Companies\DepartamentsController@updateCompany');
                Route::delete('delete/{id}',    'Companies\DepartamentsController@deleteCompany');
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
