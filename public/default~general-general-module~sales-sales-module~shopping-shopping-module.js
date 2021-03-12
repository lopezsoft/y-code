(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~general-general-module~sales-sales-module~shopping-shopping-module"],{

/***/ "52YP":
/*!*****************************************************!*\
  !*** ./src/app/services/general/persons.service.ts ***!
  \*****************************************************/
/*! exports provided: PersonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsService", function() { return PersonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var PersonsService = /** @class */ (function () {
    function PersonsService(api) {
        this.api = api;
        this.data = [];
    }
    PersonsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/persons/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getCustomersAll = function () {
        var ts = this;
        return ts.api.get('/persons/customers/all')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getCustomers = function (params) {
        var ts = this;
        return ts.api.get('/persons/customers', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getTypePersons = function (params) {
        var ts = this;
        return ts.api.get('/typepersons', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getTimeLimit = function (params) {
        var ts = this;
        return ts.api.get('/timelimit', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getMeansPayment = function (params) {
        var ts = this;
        return ts.api.get('/meanspayment', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getTypePersonsCustomers = function (params) {
        var ts = this;
        return ts.api.get('/typepersons/customers', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.prototype.getProviders = function (params) {
        var ts = this;
        return ts.api.get('/persons/providers', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    PersonsService.ɵfac = function PersonsService_Factory(t) { return new (t || PersonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    PersonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonsService, factory: PersonsService.ɵfac, providedIn: 'root' });
    return PersonsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "726Y":
/*!*********************************************************!*\
  !*** ./src/app/services/general/resolutions.service.ts ***!
  \*********************************************************/
/*! exports provided: ResolutionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionsService", function() { return ResolutionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ResolutionsService = /** @class */ (function () {
    function ResolutionsService(api) {
        this.api = api;
        this.data = [];
    }
    ResolutionsService.prototype.getAccountingDocuments = function (params) {
        var ts = this;
        return ts.api.get('/documenttype', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ResolutionsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/resolutions/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ResolutionsService.ɵfac = function ResolutionsService_Factory(t) { return new (t || ResolutionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ResolutionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResolutionsService, factory: ResolutionsService.ɵfac, providedIn: 'root' });
    return ResolutionsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResolutionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "K56k":
/*!********************************************************!*\
  !*** ./src/app/services/companies/wineries.service.ts ***!
  \********************************************************/
/*! exports provided: WineriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineriesService", function() { return WineriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var WineriesService = /** @class */ (function () {
    function WineriesService(api) {
        this.api = api;
        this.data = [];
    }
    WineriesService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/companies/wineries/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    WineriesService.ɵfac = function WineriesService_Factory(t) { return new (t || WineriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    WineriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WineriesService, factory: WineriesService.ɵfac, providedIn: 'root' });
    return WineriesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WineriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "M3Vx":
/*!***************************************************!*\
  !*** ./src/app/services/general/taxes.service.ts ***!
  \***************************************************/
/*! exports provided: TaxesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesService", function() { return TaxesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var TaxesService = /** @class */ (function () {
    function TaxesService(api) {
        this.api = api;
        this.data = [];
    }
    TaxesService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/taxes/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TaxesService.ɵfac = function TaxesService_Factory(t) { return new (t || TaxesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    TaxesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxesService, factory: TaxesService.ɵfac, providedIn: 'root' });
    return TaxesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "PcHl":
/*!*******************************************!*\
  !*** ./src/app/services/general/index.ts ***!
  \*******************************************/
/*! exports provided: CurrencySysService, CurrencyService, TaxAccountingAccountService, TaxRatesService, TaxesService, PersonsService, ResolutionsService, ShippingFrequencyService, ReportsHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currency_sys_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-sys.service */ "yPNe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencySysService", function() { return _currency_sys_service__WEBPACK_IMPORTED_MODULE_0__["CurrencySysService"]; });

/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.service */ "fTWp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return _currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]; });

/* harmony import */ var _tax_accounting_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-accounting-account.service */ "oWNr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxAccountingAccountService", function() { return _tax_accounting_account_service__WEBPACK_IMPORTED_MODULE_2__["TaxAccountingAccountService"]; });

/* harmony import */ var _tax_rates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-rates.service */ "zC4a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxRatesService", function() { return _tax_rates_service__WEBPACK_IMPORTED_MODULE_3__["TaxRatesService"]; });

/* harmony import */ var _taxes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxes.service */ "M3Vx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxesService", function() { return _taxes_service__WEBPACK_IMPORTED_MODULE_4__["TaxesService"]; });

/* harmony import */ var _persons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persons.service */ "52YP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonsService", function() { return _persons_service__WEBPACK_IMPORTED_MODULE_5__["PersonsService"]; });

/* harmony import */ var _resolutions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolutions.service */ "726Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolutionsService", function() { return _resolutions_service__WEBPACK_IMPORTED_MODULE_6__["ResolutionsService"]; });

/* harmony import */ var _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping-frequency.service */ "v8ZU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShippingFrequencyService", function() { return _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_7__["ShippingFrequencyService"]; });

/* harmony import */ var _reports_header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports-header.service */ "oswf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderService", function() { return _reports_header_service__WEBPACK_IMPORTED_MODULE_8__["ReportsHeaderService"]; });












/***/ }),

/***/ "bLyg":
/*!*****************************************************************!*\
  !*** ./src/app/services/companies/type-organization.service.ts ***!
  \*****************************************************************/
/*! exports provided: TypeOrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationService", function() { return TypeOrganizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var TypeOrganizationService = /** @class */ (function () {
    function TypeOrganizationService(api) {
        this.api = api;
        this.data = [];
    }
    TypeOrganizationService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/typeorganization', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TypeOrganizationService.ɵfac = function TypeOrganizationService_Factory(t) { return new (t || TypeOrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    TypeOrganizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypeOrganizationService, factory: TypeOrganizationService.ɵfac, providedIn: 'root' });
    return TypeOrganizationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeOrganizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "fTWp":
/*!******************************************************!*\
  !*** ./src/app/services/general/currency.service.ts ***!
  \******************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var CurrencyService = /** @class */ (function () {
    function CurrencyService(api) {
        this.api = api;
        this.data = [];
    }
    CurrencyService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/currency', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    CurrencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' });
    return CurrencyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "g+P5":
/*!*******************************************************!*\
  !*** ./src/app/services/companies/company.service.ts ***!
  \*******************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils */ "YMfE");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var CompanyService = /** @class */ (function () {
    function CompanyService(api) {
        this.api = api;
        this.data = [];
    }
    CompanyService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/company/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils__WEBPACK_IMPORTED_MODULE_1__["ApiServerService"])); };
    CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
    return CompanyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_1__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "mm0L":
/*!*********************************************!*\
  !*** ./src/app/services/companies/index.ts ***!
  \*********************************************/
/*! exports provided: TypeOrganizationService, WineriesService, CompanyService, DepartmentsService, BranchOfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-organization.service */ "bLyg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationService", function() { return _type_organization_service__WEBPACK_IMPORTED_MODULE_0__["TypeOrganizationService"]; });

/* harmony import */ var _wineries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wineries.service */ "K56k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WineriesService", function() { return _wineries_service__WEBPACK_IMPORTED_MODULE_1__["WineriesService"]; });

/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.service */ "g+P5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]; });

/* harmony import */ var _departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments.service */ "syhk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return _departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentsService"]; });

/* harmony import */ var _branch_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-office.service */ "vDid");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeService", function() { return _branch_office_service__WEBPACK_IMPORTED_MODULE_4__["BranchOfficeService"]; });








/***/ }),

/***/ "oWNr":
/*!********************************************************************!*\
  !*** ./src/app/services/general/tax-accounting-account.service.ts ***!
  \********************************************************************/
/*! exports provided: TaxAccountingAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxAccountingAccountService", function() { return TaxAccountingAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var TaxAccountingAccountService = /** @class */ (function () {
    function TaxAccountingAccountService(api) {
        this.api = api;
        this.data = [];
    }
    TaxAccountingAccountService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/TaxAccountingAccount/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TaxAccountingAccountService.ɵfac = function TaxAccountingAccountService_Factory(t) { return new (t || TaxAccountingAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    TaxAccountingAccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxAccountingAccountService, factory: TaxAccountingAccountService.ɵfac, providedIn: 'root' });
    return TaxAccountingAccountService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxAccountingAccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "oswf":
/*!************************************************************!*\
  !*** ./src/app/services/general/reports-header.service.ts ***!
  \************************************************************/
/*! exports provided: ReportsHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderService", function() { return ReportsHeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ReportsHeaderService = /** @class */ (function () {
    function ReportsHeaderService(api) {
        this.api = api;
        this.data = [];
    }
    ReportsHeaderService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/reports/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ReportsHeaderService.ɵfac = function ReportsHeaderService_Factory(t) { return new (t || ReportsHeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ReportsHeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportsHeaderService, factory: ReportsHeaderService.ɵfac, providedIn: 'root' });
    return ReportsHeaderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsHeaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "syhk":
/*!***********************************************************!*\
  !*** ./src/app/services/companies/departments.service.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var DepartmentsService = /** @class */ (function () {
    function DepartmentsService(api) {
        this.api = api;
        this.data = [];
    }
    DepartmentsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/companies/departments/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    DepartmentsService.ɵfac = function DepartmentsService_Factory(t) { return new (t || DepartmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    DepartmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentsService, factory: DepartmentsService.ɵfac, providedIn: 'root' });
    return DepartmentsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "v8ZU":
/*!****************************************************************!*\
  !*** ./src/app/services/general/shipping-frequency.service.ts ***!
  \****************************************************************/
/*! exports provided: ShippingFrequencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFrequencyService", function() { return ShippingFrequencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ShippingFrequencyService = /** @class */ (function () {
    function ShippingFrequencyService(api) {
        this.api = api;
        this.data = [];
    }
    ShippingFrequencyService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/shippingfrequency', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ShippingFrequencyService.ɵfac = function ShippingFrequencyService_Factory(t) { return new (t || ShippingFrequencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ShippingFrequencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShippingFrequencyService, factory: ShippingFrequencyService.ɵfac, providedIn: 'root' });
    return ShippingFrequencyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingFrequencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "vDid":
/*!*************************************************************!*\
  !*** ./src/app/services/companies/branch-office.service.ts ***!
  \*************************************************************/
/*! exports provided: BranchOfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeService", function() { return BranchOfficeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var BranchOfficeService = /** @class */ (function () {
    function BranchOfficeService(api) {
        this.api = api;
        this.data = [];
    }
    BranchOfficeService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/companies/branchoffice/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    BranchOfficeService.prototype.getPointsOfSale = function (params) {
        var ts = this;
        return ts.api.get('/companies/branchoffice/read/pointofsale', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    BranchOfficeService.ɵfac = function BranchOfficeService_Factory(t) { return new (t || BranchOfficeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    BranchOfficeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchOfficeService, factory: BranchOfficeService.ɵfac, providedIn: 'root' });
    return BranchOfficeService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchOfficeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "yPNe":
/*!**********************************************************!*\
  !*** ./src/app/services/general/currency-sys.service.ts ***!
  \**********************************************************/
/*! exports provided: CurrencySysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySysService", function() { return CurrencySysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var CurrencySysService = /** @class */ (function () {
    function CurrencySysService(api) {
        this.api = api;
        this.data = [];
    }
    CurrencySysService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/currency/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CurrencySysService.prototype.getChangeLocal = function (params) {
        var ts = this;
        return ts.api.get('/general/currency/change/local', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CurrencySysService.ɵfac = function CurrencySysService_Factory(t) { return new (t || CurrencySysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    CurrencySysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencySysService, factory: CurrencySysService.ɵfac, providedIn: 'root' });
    return CurrencySysService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencySysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~general-general-module~sales-sales-module~shopping-shopping-module.js.map