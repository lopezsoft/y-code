(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/accounting/accounting-groups.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/accounting/accounting-groups.service.ts ***!
  \******************************************************************/
/*! exports provided: AccountingGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingGroupsService", function() { return AccountingGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class AccountingGroupsService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/accounting/accountinggroups/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
AccountingGroupsService.ɵfac = function AccountingGroupsService_Factory(t) { return new (t || AccountingGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
AccountingGroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountingGroupsService, factory: AccountingGroupsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountingGroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/accounting/accounts.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/accounting/accounts.service.ts ***!
  \*********************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class AccountsService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getMasterAccounts(params) {
        const ts = this;
        return ts.api.get(`/accounting/accounts/read/masteraccounts`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getsubAccounts(params) {
        const ts = this;
        return ts.api.get(`/accounting/accounts/read/subaccounts`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getDataAll(params) {
        const ts = this;
        return ts.api.get(`/accounting/accounts/read/subaccounts`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/accounting/accounts/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountsService, factory: AccountsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/accounting/class-of-accounting.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/accounting/class-of-accounting.service.ts ***!
  \********************************************************************/
/*! exports provided: ClassOfAccountingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOfAccountingService", function() { return ClassOfAccountingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class ClassOfAccountingService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/accounting/clasofaccounts/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
ClassOfAccountingService.ɵfac = function ClassOfAccountingService_Factory(t) { return new (t || ClassOfAccountingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
ClassOfAccountingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassOfAccountingService, factory: ClassOfAccountingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassOfAccountingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/accounting/index.ts":
/*!**********************************************!*\
  !*** ./src/app/services/accounting/index.ts ***!
  \**********************************************/
/*! exports provided: ClassOfAccountingService, AccountsService, AccountingGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_of_accounting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-of-accounting.service */ "./src/app/services/accounting/class-of-accounting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassOfAccountingService", function() { return _class_of_accounting_service__WEBPACK_IMPORTED_MODULE_0__["ClassOfAccountingService"]; });

/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.service */ "./src/app/services/accounting/accounts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return _accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]; });

/* harmony import */ var _accounting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounting-groups.service */ "./src/app/services/accounting/accounting-groups.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountingGroupsService", function() { return _accounting_groups_service__WEBPACK_IMPORTED_MODULE_2__["AccountingGroupsService"]; });






/***/ }),

/***/ "./src/app/services/general/currency-sys.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/general/currency-sys.service.ts ***!
  \**********************************************************/
/*! exports provided: CurrencySysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySysService", function() { return CurrencySysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class CurrencySysService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/general/currency/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getChangeLocal(params) {
        const ts = this;
        return ts.api.get('/general/currency/change/local', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
CurrencySysService.ɵfac = function CurrencySysService_Factory(t) { return new (t || CurrencySysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
CurrencySysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencySysService, factory: CurrencySysService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencySysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general/currency.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/general/currency.service.ts ***!
  \******************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class CurrencyService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/currency', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
CurrencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general/index.ts":
/*!*******************************************!*\
  !*** ./src/app/services/general/index.ts ***!
  \*******************************************/
/*! exports provided: CurrencySysService, CurrencyService, TaxAccountingAccountService, TaxRatesService, TaxesService, PersonsService, ShippingFrequencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currency_sys_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-sys.service */ "./src/app/services/general/currency-sys.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencySysService", function() { return _currency_sys_service__WEBPACK_IMPORTED_MODULE_0__["CurrencySysService"]; });

/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.service */ "./src/app/services/general/currency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return _currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]; });

/* harmony import */ var _tax_accounting_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-accounting-account.service */ "./src/app/services/general/tax-accounting-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxAccountingAccountService", function() { return _tax_accounting_account_service__WEBPACK_IMPORTED_MODULE_2__["TaxAccountingAccountService"]; });

/* harmony import */ var _tax_rates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-rates.service */ "./src/app/services/general/tax-rates.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxRatesService", function() { return _tax_rates_service__WEBPACK_IMPORTED_MODULE_3__["TaxRatesService"]; });

/* harmony import */ var _taxes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxes.service */ "./src/app/services/general/taxes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxesService", function() { return _taxes_service__WEBPACK_IMPORTED_MODULE_4__["TaxesService"]; });

/* harmony import */ var _persons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persons.service */ "./src/app/services/general/persons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonsService", function() { return _persons_service__WEBPACK_IMPORTED_MODULE_5__["PersonsService"]; });

/* harmony import */ var _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping-frequency.service */ "./src/app/services/general/shipping-frequency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShippingFrequencyService", function() { return _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_6__["ShippingFrequencyService"]; });










/***/ }),

/***/ "./src/app/services/general/persons.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/general/persons.service.ts ***!
  \*****************************************************/
/*! exports provided: PersonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsService", function() { return PersonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class PersonsService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/persons/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getCustomers(params) {
        const ts = this;
        return ts.api.get('/persons/customers', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getTypePersons(params) {
        const ts = this;
        return ts.api.get('/typepersons', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getProviders(params) {
        const ts = this;
        return ts.api.get('/persons/providers', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
PersonsService.ɵfac = function PersonsService_Factory(t) { return new (t || PersonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
PersonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonsService, factory: PersonsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general/shipping-frequency.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/general/shipping-frequency.service.ts ***!
  \****************************************************************/
/*! exports provided: ShippingFrequencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFrequencyService", function() { return ShippingFrequencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class ShippingFrequencyService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/shippingfrequency', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
ShippingFrequencyService.ɵfac = function ShippingFrequencyService_Factory(t) { return new (t || ShippingFrequencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
ShippingFrequencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShippingFrequencyService, factory: ShippingFrequencyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingFrequencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general/tax-accounting-account.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/general/tax-accounting-account.service.ts ***!
  \********************************************************************/
/*! exports provided: TaxAccountingAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxAccountingAccountService", function() { return TaxAccountingAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class TaxAccountingAccountService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/general/TaxAccountingAccount/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
TaxAccountingAccountService.ɵfac = function TaxAccountingAccountService_Factory(t) { return new (t || TaxAccountingAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
TaxAccountingAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxAccountingAccountService, factory: TaxAccountingAccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxAccountingAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/general/taxes.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/general/taxes.service.ts ***!
  \***************************************************/
/*! exports provided: TaxesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesService", function() { return TaxesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class TaxesService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/general/taxes/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
TaxesService.ɵfac = function TaxesService_Factory(t) { return new (t || TaxesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
TaxesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxesService, factory: TaxesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map