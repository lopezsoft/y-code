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

/***/ "./src/app/services/general/tax-rates.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/general/tax-rates.service.ts ***!
  \*******************************************************/
/*! exports provided: TaxRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxRatesService", function() { return TaxRatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class TaxRatesService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/general/taxerates/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
TaxRatesService.ɵfac = function TaxRatesService_Factory(t) { return new (t || TaxRatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
TaxRatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxRatesService, factory: TaxRatesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxRatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map