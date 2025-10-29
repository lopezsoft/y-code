<?php
Route::controller('MasterController')->group(function () {
    Route::get('countries', 'getCountries');
    Route::get('currency', 'getCurrency');
    Route::get('currencysys', 'getCurrencySys');
    Route::get('cities', 'getCities');
    Route::get('identitydocuments', 'getIdentityDocuments');
    Route::get('taxes', 'getTaxes');
    Route::get('typeorganization', 'getTypeOrganization');
    Route::get('taxlevel', 'getTaxLevel');
    Route::get('taxregime', 'getTaxRegime');
    Route::get('quantityunits', 'getQuantityUnits');
    Route::get('typeitemidentifications', 'getTypeItemIdentifications');
    Route::get('referenceprice', 'getReferencePrice');
    Route::get('paymentmethods', 'getPaymentMethods');
    Route::get('meanspayment', 'getMeansPayment');
    Route::get('timelimit', 'getTimeLimit');
    Route::get('timelimits', 'getTimeLimit');
    Route::get('shippingfrequency', 'getShippingFrequency');
    Route::get('measurementunits', 'getMeasurementUnits');
    Route::get('accounttypes', 'getAccountTypes');
    Route::get('typepersons', 'getTypePersons');
    Route::get('typepersons/customers', 'getTypePersonsCustomers');
    Route::get('ipinfo', 'getIpInfo');
});
