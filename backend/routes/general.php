<?php
Route::group(['prefix' => 'general'], function () {

    Route::group(['prefix' => 'resolutions'], function () {
        Route::post('/',           'General\ResolutionsController@create');
        Route::get('/',            'General\ResolutionsController@getResolutions');
        Route::put('/{id}',       'General\ResolutionsController@update');
        Route::delete('/{id}',    'General\ResolutionsController@delete');
    });

    Route::group(['prefix' => 'reports'], function () {
        Route::post('/',          'General\ReportsHeaderController@create');
        Route::get('/',           'General\ReportsHeaderController@select');
        Route::put('/{id}',       'General\ReportsHeaderController@update');
        Route::delete('/{id}',    'General\ReportsHeaderController@delete');
    });

    Route::group(['prefix' => 'taxes'], function () {
        Route::post('/',          'General\TaxesController@create');
        Route::get('/',           'General\TaxesController@select');
        Route::put('/{id}',       'General\TaxesController@update');
        Route::delete('/{id}',    'General\TaxesController@delete');
    });

    Route::group(['prefix' => 'currency'], function () {
        Route::post('/',           'General\CurrencyController@create');
        Route::get('change',            'General\CurrencyController@getChange');
        Route::get('change/local',      'General\CurrencyController@getChangeLocal');
        Route::get('/',              'General\CurrencyController@select');
        Route::put('/{id}',       'General\CurrencyController@update');
        Route::delete('/{id}',    'General\CurrencyController@delete');
    });

    Route::group(['prefix' => 'taxerates'], function () {
        Route::post('/',           'General\TaxRatesController@create');
        Route::get('/',              'General\TaxRatesController@select');
        Route::put('/{id}',       'General\TaxRatesController@update');
        Route::delete('/{id}',    'General\TaxRatesController@delete');
    });

    Route::group(['prefix' => 'identitydocs'], function () {
        Route::post('/',           'General\IdentityDocumentsController@create');
        Route::get('/',              'General\IdentityDocumentsController@select');
        Route::put('/{id}',       'General\IdentityDocumentsController@update');
        Route::delete('/{id}',    'General\IdentityDocumentsController@delete');
    });
});
