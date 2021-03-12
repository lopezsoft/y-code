(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-products-module~sales-sales-module~shopping-shopping-module"],{

/***/ "+qta":
/*!*********************************************************!*\
  !*** ./src/app/services/products/categories.service.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var CategoriesService = /** @class */ (function () {
    function CategoriesService(api) {
        this.api = api;
    }
    CategoriesService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/categories/read/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CategoriesService.prototype.getChids = function (params) {
        var ts = this;
        return ts.api.get("/products/categories/childs", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CategoriesService.prototype.getParents = function (params) {
        var ts = this;
        return ts.api.get("/products/categories/parents", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CategoriesService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/categories/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
    return CategoriesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "7q1N":
/*!****************************************************************!*\
  !*** ./src/app/services/products/measurement-units.service.ts ***!
  \****************************************************************/
/*! exports provided: MeasurementUnitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementUnitsService", function() { return MeasurementUnitsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var MeasurementUnitsService = /** @class */ (function () {
    function MeasurementUnitsService(api) {
        this.api = api;
    }
    MeasurementUnitsService.prototype.getBase = function () {
        var ts = this;
        return ts.api.get("/measurementunits")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    MeasurementUnitsService.prototype.getProduct = function (params) {
        var ts = this;
        return ts.api.get("/products/units/read/product", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    MeasurementUnitsService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/units/read/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    MeasurementUnitsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/units/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    MeasurementUnitsService.ɵfac = function MeasurementUnitsService_Factory(t) { return new (t || MeasurementUnitsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    MeasurementUnitsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MeasurementUnitsService, factory: MeasurementUnitsService.ɵfac, providedIn: 'root' });
    return MeasurementUnitsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasurementUnitsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "8qLP":
/*!*********************************************************!*\
  !*** ./src/app/services/products/items-type.service.ts ***!
  \*********************************************************/
/*! exports provided: ItemsTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsTypeService", function() { return ItemsTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ItemsTypeService = /** @class */ (function () {
    function ItemsTypeService(api) {
        this.api = api;
    }
    ItemsTypeService.prototype.getItemTypeAccounts = function (params) {
        var ts = this;
        return ts.api.get("/products/groups/getItemTypeAccounts", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsTypeService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/groups/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsTypeService.prototype.getType = function (params) {
        var ts = this;
        return ts.api.get("/accounttypes", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsTypeService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/groups/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsTypeService.ɵfac = function ItemsTypeService_Factory(t) { return new (t || ItemsTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ItemsTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsTypeService, factory: ItemsTypeService.ɵfac, providedIn: 'root' });
    return ItemsTypeService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "C2cg":
/*!****************************************************!*\
  !*** ./src/app/services/products/terms.service.ts ***!
  \****************************************************/
/*! exports provided: TermsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsService", function() { return TermsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var TermsService = /** @class */ (function () {
    function TermsService(api) {
        this.api = api;
    }
    TermsService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/terms/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TermsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/terms/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TermsService.ɵfac = function TermsService_Factory(t) { return new (t || TermsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    TermsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermsService, factory: TermsService.ɵfac, providedIn: 'root' });
    return TermsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "Du65":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/forms/form-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSpinnerComponent", function() { return FormSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/index */ "YMfE");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.component */ "TK7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");





// Services

// Base component








var FormSpinnerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormSpinnerComponent, _super);
    function FormSpinnerComponent(fb, msg, api, router, translate, aRouter, spinner) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        return _this;
    }
    FormSpinnerComponent.prototype.showSpinner = function (mask) {
        if (mask === void 0) { mask = ''; }
        this.maskSpinner = mask;
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
    };
    FormSpinnerComponent.prototype.hideSpinner = function () {
        this.spinner.hide();
    };
    FormSpinnerComponent.prototype.fullLoad = function () {
        this.spinner.hide();
    };
    FormSpinnerComponent.ɵfac = function FormSpinnerComponent_Factory(t) { return new (t || FormSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_index__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_index__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
    FormSpinnerComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormSpinnerComponent, factory: FormSpinnerComponent.ɵfac });
    return FormSpinnerComponent;
}(_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _utils_index__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils_index__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "NrHn":
/*!*********************************************************!*\
  !*** ./src/app/services/accounting/accounts.service.ts ***!
  \*********************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "C6Ca");





var AccountsService = /** @class */ (function () {
    function AccountsService(api) {
        this.api = api;
        this.data = [];
    }
    AccountsService.prototype.getMasterAccounts = function (params) {
        var ts = this;
        return ts.api.get("/accounting/accounts/read/masteraccounts", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AccountsService.prototype.getsubAccounts = function (params) {
        var ts = this;
        return ts.api.get("/accounting/accounts/read/subaccounts", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AccountsService.prototype.getDataAll = function (params) {
        var ts = this;
        return ts.api.get("/accounting/accounts/read/subaccounts", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AccountsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/accounting/accounts/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountsService, factory: AccountsService.ɵfac, providedIn: 'root' });
    return AccountsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "Schs":
/*!************************************************************!*\
  !*** ./node_modules/ngx-currency/fesm2015/ngx-currency.js ***!
  \************************************************************/
/*! exports provided: CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, CurrencyMaskDirective, CurrencyMaskInputMode, NgxCurrencyModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR", function() { return CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskDirective", function() { return CurrencyMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskInputMode", function() { return CurrencyMaskInputMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCurrencyModule", function() { return NgxCurrencyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CURRENCY_MASK_CONFIG; });
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






var CurrencyMaskInputMode;

(function (CurrencyMaskInputMode) {
  CurrencyMaskInputMode[CurrencyMaskInputMode["FINANCIAL"] = 0] = "FINANCIAL";
  CurrencyMaskInputMode[CurrencyMaskInputMode["NATURAL"] = 1] = "NATURAL";
})(CurrencyMaskInputMode || (CurrencyMaskInputMode = {}));

var CURRENCY_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]("currency.mask.config");

var InputManager = /*#__PURE__*/function () {
  function InputManager(htmlInputElement) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputManager);

    this.htmlInputElement = htmlInputElement;
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputManager, [{
    key: "setCursorAt",
    value: function setCursorAt(position) {
      if (this.htmlInputElement.setSelectionRange) {
        this.htmlInputElement.focus();
        this.htmlInputElement.setSelectionRange(position, position);
      } else if (this.htmlInputElement.createTextRange) {
        var textRange = this.htmlInputElement.createTextRange();
        textRange.collapse(true);
        textRange.moveEnd("character", position);
        textRange.moveStart("character", position);
        textRange.select();
      }
    }
  }, {
    key: "updateValueAndCursor",
    value: function updateValueAndCursor(newRawValue, oldLength, selectionStart) {
      this.rawValue = newRawValue;
      var newLength = newRawValue.length;
      selectionStart = selectionStart - (oldLength - newLength);
      this.setCursorAt(selectionStart);
    }
  }, {
    key: "canInputMoreNumbers",
    get: function get() {
      var onlyNumbers = this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, "");
      var haventReachedMaxLength = !(onlyNumbers.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
      var selectionStart = this.inputSelection.selectionStart;
      var selectionEnd = this.inputSelection.selectionEnd;
      var haveNumberSelected = !!(selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/));
      var startWithZero = this.htmlInputElement.value.substring(0, 1) == "0";
      return haventReachedMaxLength || haveNumberSelected || startWithZero;
    }
  }, {
    key: "inputSelection",
    get: function get() {
      var selectionStart = 0;
      var selectionEnd = 0;

      if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
        selectionStart = this.htmlInputElement.selectionStart;
        selectionEnd = this.htmlInputElement.selectionEnd;
      } else {
        var range = document.selection.createRange();

        if (range && range.parentElement() == this.htmlInputElement) {
          var lenght = this.htmlInputElement.value.length;
          var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
          var startRange = this.htmlInputElement.createTextRange();
          startRange.moveToBookmark(range.getBookmark());
          var endRange = this.htmlInputElement.createTextRange();
          endRange.collapse(false);

          if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
            selectionStart = selectionEnd = lenght;
          } else {
            selectionStart = -startRange.moveStart("character", -lenght);
            selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;

            if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
              selectionEnd = lenght;
            } else {
              selectionEnd = -startRange.moveEnd("character", -lenght);
              selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
            }
          }
        }
      }

      return {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      };
    }
  }, {
    key: "rawValue",
    get: function get() {
      return this.htmlInputElement && this.htmlInputElement.value;
    },
    set: function set(value) {
      this._storedRawValue = value;

      if (this.htmlInputElement) {
        this.htmlInputElement.value = value;
      }
    }
  }, {
    key: "storedRawValue",
    get: function get() {
      return this._storedRawValue || '';
    }
  }]);

  return InputManager;
}();

var InputService = /*#__PURE__*/function () {
  function InputService(htmlInputElement, options) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputService);

    this.htmlInputElement = htmlInputElement;
    this.options = options;
    this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/);
    this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g);
    this.PER_AR_NUMBER = new Map();
    this.inputManager = new InputManager(htmlInputElement);
    this.initialize();
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputService, [{
    key: "initialize",
    value: function initialize() {
      this.PER_AR_NUMBER.set("\u06F0", "0");
      this.PER_AR_NUMBER.set("\u06F1", "1");
      this.PER_AR_NUMBER.set("\u06F2", "2");
      this.PER_AR_NUMBER.set("\u06F3", "3");
      this.PER_AR_NUMBER.set("\u06F4", "4");
      this.PER_AR_NUMBER.set("\u06F5", "5");
      this.PER_AR_NUMBER.set("\u06F6", "6");
      this.PER_AR_NUMBER.set("\u06F7", "7");
      this.PER_AR_NUMBER.set("\u06F8", "8");
      this.PER_AR_NUMBER.set("\u06F9", "9");
      this.PER_AR_NUMBER.set("\u0660", "0");
      this.PER_AR_NUMBER.set("\u0661", "1");
      this.PER_AR_NUMBER.set("\u0662", "2");
      this.PER_AR_NUMBER.set("\u0663", "3");
      this.PER_AR_NUMBER.set("\u0664", "4");
      this.PER_AR_NUMBER.set("\u0665", "5");
      this.PER_AR_NUMBER.set("\u0666", "6");
      this.PER_AR_NUMBER.set("\u0667", "7");
      this.PER_AR_NUMBER.set("\u0668", "8");
      this.PER_AR_NUMBER.set("\u0669", "9");
    }
  }, {
    key: "addNumber",
    value: function addNumber(keyCode) {
      var _this$options = this.options,
          decimal = _this$options.decimal,
          precision = _this$options.precision,
          inputMode = _this$options.inputMode;
      var keyChar = String.fromCharCode(keyCode);
      var isDecimalChar = keyChar === this.options.decimal;

      if (!this.rawValue) {
        this.rawValue = this.applyMask(false, keyChar);
        var selectionStart = undefined;

        if (inputMode === CurrencyMaskInputMode.NATURAL && precision > 0) {
          selectionStart = this.rawValue.indexOf(decimal);

          if (isDecimalChar) {
            selectionStart++;
          }
        }

        this.updateFieldValue(selectionStart);
      } else {
        var _selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        var rawValueStart = this.rawValue.substring(0, _selectionStart);
        var rawValueEnd = this.rawValue.substring(selectionEnd, this.rawValue.length); // In natural mode, replace decimals instead of shifting them.

        var inDecimalPortion = rawValueStart.indexOf(decimal) !== -1;

        if (inputMode === CurrencyMaskInputMode.NATURAL && inDecimalPortion && _selectionStart === selectionEnd) {
          rawValueEnd = rawValueEnd.substring(1);
        }

        var newValue = rawValueStart + keyChar + rawValueEnd;
        var nextSelectionStart = _selectionStart + 1;
        var isDecimalOrThousands = isDecimalChar || keyChar === this.options.thousands;

        if (isDecimalOrThousands && keyChar === rawValueEnd[0]) {
          // If the cursor is just before the decimal or thousands separator and the user types the
          // decimal or thousands separator, move the cursor past it.
          nextSelectionStart++;
        } else if (!this.SINGLE_DIGIT_REGEX.test(keyChar)) {
          // Ignore other non-numbers.
          return;
        }

        this.rawValue = newValue;
        this.updateFieldValue(nextSelectionStart);
      }
    }
  }, {
    key: "applyMask",
    value: function applyMask(isNumber, rawValue) {
      var disablePadAndTrim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$options2 = this.options,
          allowNegative = _this$options2.allowNegative,
          decimal = _this$options2.decimal,
          precision = _this$options2.precision,
          prefix = _this$options2.prefix,
          suffix = _this$options2.suffix,
          thousands = _this$options2.thousands,
          min = _this$options2.min,
          max = _this$options2.max,
          inputMode = _this$options2.inputMode;
      rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
      var onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");

      if (!onlyNumbers && rawValue !== decimal) {
        return "";
      }

      if (inputMode === CurrencyMaskInputMode.NATURAL && !isNumber && !disablePadAndTrim) {
        rawValue = this.padOrTrimPrecision(rawValue);
        onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
      }

      var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^\u0660*/g, "").replace(/^\u06F0*/g, "").replace(/^0*/g, "");

      if (integerPart == "") {
        integerPart = "0";
      }

      var integerValue = parseInt(integerPart);
      integerPart = integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g, thousands);

      if (thousands && integerPart.startsWith(thousands)) {
        integerPart = integerPart.substring(1);
      }

      var newRawValue = integerPart;
      var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
      var decimalValue = parseInt(decimalPart) || 0;
      var isNegative = rawValue.indexOf("-") > -1; // Ensure max is at least as large as min.

      max = this.isNullOrUndefined(max) || this.isNullOrUndefined(min) ? max : Math.max(max, min); // Restrict to the min and max values.

      var newValue = integerValue + decimalValue / 100;
      newValue = isNegative ? -newValue : newValue;

      if (!this.isNullOrUndefined(max) && newValue > max) {
        return this.applyMask(true, max + '');
      } else if (!this.isNullOrUndefined(min) && newValue < min) {
        return this.applyMask(true, min + '');
      }

      if (precision > 0) {
        if (newRawValue == "0" && decimalPart.length < precision) {
          newRawValue += decimal + "0".repeat(precision - 1) + decimalPart;
        } else {
          newRawValue += decimal + decimalPart;
        }
      }

      var isZero = newValue == 0;
      var operator = isNegative && allowNegative && !isZero ? "-" : "";
      return operator + prefix + newRawValue + suffix;
    }
  }, {
    key: "padOrTrimPrecision",
    value: function padOrTrimPrecision(rawValue) {
      var _this$options3 = this.options,
          decimal = _this$options3.decimal,
          precision = _this$options3.precision;
      var decimalIndex = rawValue.lastIndexOf(decimal);

      if (decimalIndex === -1) {
        decimalIndex = rawValue.length;
        rawValue += decimal;
      }

      var decimalPortion = rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX, "");
      var actualPrecision = decimalPortion.length;

      if (actualPrecision < precision) {
        for (var i = actualPrecision; i < precision; i++) {
          decimalPortion += '0';
        }
      } else if (actualPrecision > precision) {
        decimalPortion = decimalPortion.substring(0, decimalPortion.length + precision - actualPrecision);
      }

      return rawValue.substring(0, decimalIndex) + decimal + decimalPortion;
    }
  }, {
    key: "clearMask",
    value: function clearMask(rawValue) {
      if (this.isNullable() && rawValue === "") return null;
      var value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");

      if (this.options.thousands) {
        value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
      }

      if (this.options.decimal) {
        value = value.replace(this.options.decimal, ".");
      }

      this.PER_AR_NUMBER.forEach(function (val, key) {
        var re = new RegExp(key, "g");
        value = value.replace(re, val);
      });
      return parseFloat(value);
    }
  }, {
    key: "changeToNegative",
    value: function changeToNegative() {
      if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
        // Apply the mask to ensure the min and max values are enforced.
        this.rawValue = this.applyMask(false, "-" + this.rawValue);
      }
    }
  }, {
    key: "changeToPositive",
    value: function changeToPositive() {
      // Apply the mask to ensure the min and max values are enforced.
      this.rawValue = this.applyMask(false, this.rawValue.replace("-", ""));
    }
  }, {
    key: "removeNumber",
    value: function removeNumber(keyCode) {
      var _this$options4 = this.options,
          decimal = _this$options4.decimal,
          thousands = _this$options4.thousands,
          prefix = _this$options4.prefix,
          suffix = _this$options4.suffix,
          inputMode = _this$options4.inputMode;

      if (this.isNullable() && this.value == 0) {
        this.rawValue = null;
        return;
      }

      var selectionEnd = this.inputSelection.selectionEnd;
      var selectionStart = this.inputSelection.selectionStart;
      var suffixStart = this.rawValue.length - suffix.length;
      selectionEnd = Math.min(suffixStart, Math.max(selectionEnd, prefix.length));
      selectionStart = Math.min(suffixStart, Math.max(selectionStart, prefix.length)); // Check if selection was entirely in the prefix or suffix. 

      if (selectionStart === selectionEnd && this.inputSelection.selectionStart !== this.inputSelection.selectionEnd) {
        this.updateFieldValue(selectionStart);
        return;
      }

      var decimalIndex = this.rawValue.indexOf(decimal);

      if (decimalIndex === -1) {
        decimalIndex = this.rawValue.length;
      }

      var shiftSelection = 0;
      var insertChars = '';
      var isCursorInDecimals = decimalIndex < selectionEnd;
      var isCursorImmediatelyAfterDecimalPoint = decimalIndex + 1 === selectionEnd;

      if (selectionEnd === selectionStart) {
        if (keyCode == 8) {
          if (selectionStart <= prefix.length) {
            return;
          }

          selectionStart--; // If previous char isn't a number, go back one more.

          if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
            selectionStart--;
          } // In natural mode, jump backwards when in decimal portion of number.


          if (inputMode === CurrencyMaskInputMode.NATURAL && isCursorInDecimals) {
            shiftSelection = -1; // when removing a single whole number, replace it with 0

            if (isCursorImmediatelyAfterDecimalPoint && this.value < 10 && this.value > -10) {
              insertChars += '0';
            }
          }
        } else if (keyCode == 46 || keyCode == 63272) {
          if (selectionStart === suffixStart) {
            return;
          }

          selectionEnd++; // If next char isn't a number, go one more.

          if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
            selectionStart++;
            selectionEnd++;
          }
        }
      } // In natural mode, replace decimals with 0s.


      if (inputMode === CurrencyMaskInputMode.NATURAL && selectionStart > decimalIndex) {
        var replacedDecimalCount = selectionEnd - selectionStart;

        for (var i = 0; i < replacedDecimalCount; i++) {
          insertChars += '0';
        }
      }

      var selectionFromEnd = this.rawValue.length - selectionEnd;
      this.rawValue = this.rawValue.substring(0, selectionStart) + insertChars + this.rawValue.substring(selectionEnd); // Remove leading thousand separator from raw value.

      var startChar = this.rawValue.substr(prefix.length, 1);

      if (startChar === thousands) {
        this.rawValue = this.rawValue.substring(0, prefix.length) + this.rawValue.substring(prefix.length + 1);
        selectionFromEnd = Math.min(selectionFromEnd, this.rawValue.length - prefix.length);
      }

      this.updateFieldValue(this.rawValue.length - selectionFromEnd + shiftSelection, true);
    }
  }, {
    key: "updateFieldValue",
    value: function updateFieldValue(selectionStart) {
      var disablePadAndTrim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var newRawValue = this.applyMask(false, this.rawValue || "", disablePadAndTrim);
      selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
      selectionStart = Math.max(this.options.prefix.length, Math.min(selectionStart, this.rawValue.length - this.options.suffix.length));
      this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(options) {
      var value = this.value;
      this.options = options;
      this.value = value;
    }
  }, {
    key: "prefixLength",
    value: function prefixLength() {
      return this.options.prefix.length;
    }
  }, {
    key: "suffixLength",
    value: function suffixLength() {
      return this.options.suffix.length;
    }
  }, {
    key: "isNullable",
    value: function isNullable() {
      return this.options.nullable;
    }
  }, {
    key: "isNullOrUndefined",
    value: function isNullOrUndefined(value) {
      return value === null || value === undefined;
    }
  }, {
    key: "canInputMoreNumbers",
    get: function get() {
      return this.inputManager.canInputMoreNumbers;
    }
  }, {
    key: "inputSelection",
    get: function get() {
      return this.inputManager.inputSelection;
    }
  }, {
    key: "rawValue",
    get: function get() {
      return this.inputManager.rawValue;
    },
    set: function set(value) {
      this.inputManager.rawValue = value;
    }
  }, {
    key: "storedRawValue",
    get: function get() {
      return this.inputManager.storedRawValue;
    }
  }, {
    key: "value",
    get: function get() {
      return this.clearMask(this.rawValue);
    },
    set: function set(value) {
      this.rawValue = this.applyMask(true, "" + value);
    }
  }]);

  return InputService;
}();

var InputHandler = /*#__PURE__*/function () {
  function InputHandler(htmlInputElement, options) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputHandler);

    this.inputService = new InputService(htmlInputElement, options);
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputHandler, [{
    key: "handleCut",
    value: function handleCut(event) {
      var _this = this;

      setTimeout(function () {
        _this.inputService.updateFieldValue();

        _this.setValue(_this.inputService.value);

        _this.onModelChange(_this.inputService.value);
      }, 0);
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var _this2 = this;

      var selectionStart = this.inputService.inputSelection.selectionStart;
      var keyCode = this.inputService.rawValue.charCodeAt(selectionStart - 1);
      var rawValueLength = this.inputService.rawValue.length;
      var storedRawValueLength = this.inputService.storedRawValue.length;

      if (Math.abs(rawValueLength - storedRawValueLength) != 1) {
        this.inputService.updateFieldValue(selectionStart);
        this.onModelChange(this.inputService.value);
        return;
      } // Restore the old value.


      this.inputService.rawValue = this.inputService.storedRawValue;

      if (rawValueLength < storedRawValueLength) {
        // Chrome Android seems to move the cursor in response to a backspace AFTER processing the
        // input event, so we need to wrap this in a timeout.
        this.timer(function () {
          // Move the cursor to just after the deleted value.
          _this2.inputService.updateFieldValue(selectionStart + 1); // Then backspace it.


          _this2.inputService.removeNumber(8);

          _this2.onModelChange(_this2.inputService.value);
        }, 0);
      }

      if (rawValueLength > storedRawValueLength) {
        // Move the cursor to just before the new value.
        this.inputService.updateFieldValue(selectionStart - 1); // Process the character like a keypress.

        this.handleKeypressImpl(keyCode);
      }
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      var keyCode = event.which || event.charCode || event.keyCode;

      if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
        event.preventDefault();

        if (this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() && this.inputService.inputSelection.selectionEnd >= this.inputService.rawValue.length - this.inputService.suffixLength()) {
          this.clearValue();
        } else {
          this.inputService.removeNumber(keyCode);
          this.onModelChange(this.inputService.value);
        }
      }
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      this.setValue(this.inputService.isNullable() ? null : 0);
      this.onModelChange(this.inputService.value);
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(event) {
      var keyCode = event.which || event.charCode || event.keyCode;
      event.preventDefault();

      if (keyCode === 97 && event.ctrlKey) {
        return;
      }

      this.handleKeypressImpl(keyCode);
    }
  }, {
    key: "handleKeypressImpl",
    value: function handleKeypressImpl(keyCode) {
      switch (keyCode) {
        case undefined:
        case 9:
        case 13:
          return;

        case 43:
          this.inputService.changeToPositive();
          break;

        case 45:
          this.inputService.changeToNegative();
          break;

        default:
          if (this.inputService.canInputMoreNumbers) {
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);

            if (selectionRangeLength == this.inputService.rawValue.length) {
              this.setValue(null);
            }

            this.inputService.addNumber(keyCode);
          }

          break;
      }

      this.onModelChange(this.inputService.value);
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(event) {
      var _this3 = this;

      setTimeout(function () {
        _this3.inputService.updateFieldValue();

        _this3.setValue(_this3.inputService.value);

        _this3.onModelChange(_this3.inputService.value);
      }, 1);
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(options) {
      this.inputService.updateOptions(options);
    }
  }, {
    key: "getOnModelChange",
    value: function getOnModelChange() {
      return this.onModelChange;
    }
  }, {
    key: "setOnModelChange",
    value: function setOnModelChange(callbackFunction) {
      this.onModelChange = callbackFunction;
    }
  }, {
    key: "getOnModelTouched",
    value: function getOnModelTouched() {
      return this.onModelTouched;
    }
  }, {
    key: "setOnModelTouched",
    value: function setOnModelTouched(callbackFunction) {
      this.onModelTouched = callbackFunction;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.inputService.value = value;
    }
    /**
     * Passthrough to setTimeout that can be stubbed out in tests.
     */

  }, {
    key: "timer",
    value: function timer(callback, delayMillis) {
      setTimeout(callback, delayMillis);
    }
  }]);

  return InputHandler;
}();

var CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
    return CurrencyMaskDirective;
  }),
  multi: true
};

var CurrencyMaskDirective = /*#__PURE__*/function () {
  function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CurrencyMaskDirective);

    this.currencyMaskConfig = currencyMaskConfig;
    this.elementRef = elementRef;
    this.keyValueDiffers = keyValueDiffers;
    this.options = {};
    this.optionsTemplate = {
      align: "right",
      allowNegative: true,
      allowZero: true,
      decimal: ".",
      precision: 2,
      prefix: "$ ",
      suffix: "",
      thousands: ",",
      nullable: false,
      inputMode: CurrencyMaskInputMode.FINANCIAL
    };

    if (currencyMaskConfig) {
      this.optionsTemplate = currencyMaskConfig;
    }

    this.keyValueDiffer = keyValueDiffers.find({}).create();
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CurrencyMaskDirective, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.elementRef.nativeElement.style.textAlign = this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.keyValueDiffer.diff(this.options)) {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
        this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.inputHandler = new InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.inputHandler.getOnModelTouched().apply(event);
    }
  }, {
    key: "handleCut",
    value: function handleCut(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleCut(event);
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      if (this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleInput(event);
      }
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleKeydown(event);
      }
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleKeypress(event);
      }
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handlePaste(event);
      }
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      if (!this.isChromeAndroid()) {
        event.preventDefault();
      }
    }
  }, {
    key: "isChromeAndroid",
    value: function isChromeAndroid() {
      return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.elementRef.nativeElement.hasAttribute('readonly');
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(callbackFunction) {
      this.inputHandler.setOnModelChange(callbackFunction);
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(callbackFunction) {
      this.inputHandler.setOnModelTouched(callbackFunction);
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState(value) {
      this.elementRef.nativeElement.disabled = value;
    }
  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.inputHandler.setValue(value);
    }
  }]);

  return CurrencyMaskDirective;
}();

CurrencyMaskDirective.ɵfac = function CurrencyMaskDirective_Factory(t) {
  return new (t || CurrencyMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CURRENCY_MASK_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]));
};

CurrencyMaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: CurrencyMaskDirective,
  selectors: [["", "currencyMask", ""]],
  hostBindings: function CurrencyMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function CurrencyMaskDirective_blur_HostBindingHandler($event) {
        return ctx.handleBlur($event);
      })("cut", function CurrencyMaskDirective_cut_HostBindingHandler($event) {
        return ctx.handleCut($event);
      })("input", function CurrencyMaskDirective_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      })("keydown", function CurrencyMaskDirective_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("keypress", function CurrencyMaskDirective_keypress_HostBindingHandler($event) {
        return ctx.handleKeypress($event);
      })("paste", function CurrencyMaskDirective_paste_HostBindingHandler($event) {
        return ctx.handlePaste($event);
      })("drop", function CurrencyMaskDirective_drop_HostBindingHandler($event) {
        return ctx.handleDrop($event);
      });
    }
  },
  inputs: {
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR])]
});

CurrencyMaskDirective.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [CURRENCY_MASK_CONFIG]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
  }];
};

CurrencyMaskDirective.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [CURRENCY_MASK_CONFIG]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
  }];
};

CurrencyMaskDirective.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  handleBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["blur", ["$event"]]
  }],
  handleCut: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["cut", ["$event"]]
  }],
  handleInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["input", ["$event"]]
  }],
  handleKeydown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["keydown", ["$event"]]
  }],
  handleKeypress: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["keypress", ["$event"]]
  }],
  handlePaste: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["paste", ["$event"]]
  }],
  handleDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ["drop", ["$event"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CurrencyMaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: "[currencyMask]",
      providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [CURRENCY_MASK_CONFIG]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    handleBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["blur", ["$event"]]
    }],
    handleCut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["cut", ["$event"]]
    }],
    handleInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["input", ["$event"]]
    }],
    handleKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["keydown", ["$event"]]
    }],
    handleKeypress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["keypress", ["$event"]]
    }],
    handlePaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["paste", ["$event"]]
    }],
    handleDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ["drop", ["$event"]]
    }]
  });
})();

var NgxCurrencyModule = /*#__PURE__*/function () {
  function NgxCurrencyModule() {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NgxCurrencyModule);
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NgxCurrencyModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: NgxCurrencyModule,
        providers: [{
          provide: CURRENCY_MASK_CONFIG,
          useValue: config
        }]
      };
    }
  }]);

  return NgxCurrencyModule;
}();

NgxCurrencyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NgxCurrencyModule
});
NgxCurrencyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function NgxCurrencyModule_Factory(t) {
    return new (t || NgxCurrencyModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxCurrencyModule, {
    declarations: function declarations() {
      return [CurrencyMaskDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
    },
    exports: function exports() {
      return [CurrencyMaskDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxCurrencyModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      declarations: [CurrencyMaskDirective],
      exports: [CurrencyMaskDirective]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "UX58":
/*!********************************************************************!*\
  !*** ./src/app/services/accounting/class-of-accounting.service.ts ***!
  \********************************************************************/
/*! exports provided: ClassOfAccountingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOfAccountingService", function() { return ClassOfAccountingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "C6Ca");





var ClassOfAccountingService = /** @class */ (function () {
    function ClassOfAccountingService(api) {
        this.api = api;
        this.data = [];
    }
    ClassOfAccountingService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/accounting/clasofaccounts/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ClassOfAccountingService.ɵfac = function ClassOfAccountingService_Factory(t) { return new (t || ClassOfAccountingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ClassOfAccountingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassOfAccountingService, factory: ClassOfAccountingService.ɵfac, providedIn: 'root' });
    return ClassOfAccountingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassOfAccountingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "UnFQ":
/*!********************************************!*\
  !*** ./src/app/services/products/index.ts ***!
  \********************************************/
/*! exports provided: BrandsService, CategoriesService, AttributesService, TermsService, ItemsService, ClassOfProductsService, MeasurementUnitsService, ItemsTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brands_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands.service */ "Z3gq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return _brands_service__WEBPACK_IMPORTED_MODULE_0__["BrandsService"]; });

/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "+qta");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return _categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]; });

/* harmony import */ var _attributes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes.service */ "lJ4t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributesService", function() { return _attributes_service__WEBPACK_IMPORTED_MODULE_2__["AttributesService"]; });

/* harmony import */ var _terms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.service */ "C2cg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsService", function() { return _terms_service__WEBPACK_IMPORTED_MODULE_3__["TermsService"]; });

/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items.service */ "YvhW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return _items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]; });

/* harmony import */ var _class_of_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-of-products.service */ "xcN5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassOfProductsService", function() { return _class_of_products_service__WEBPACK_IMPORTED_MODULE_5__["ClassOfProductsService"]; });

/* harmony import */ var _measurement_units_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./measurement-units.service */ "7q1N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasurementUnitsService", function() { return _measurement_units_service__WEBPACK_IMPORTED_MODULE_6__["MeasurementUnitsService"]; });

/* harmony import */ var _items_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items-type.service */ "8qLP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsTypeService", function() { return _items_type_service__WEBPACK_IMPORTED_MODULE_7__["ItemsTypeService"]; });











/***/ }),

/***/ "YvhW":
/*!****************************************************!*\
  !*** ./src/app/services/products/items.service.ts ***!
  \****************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ItemsService = /** @class */ (function () {
    function ItemsService(api) {
        this.api = api;
    }
    ItemsService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/items/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsService.prototype.getDataSales = function (params) {
        var ts = this;
        return ts.api.get("/products/items/read/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/items/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
    return ItemsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "Z3gq":
/*!*****************************************************!*\
  !*** ./src/app/services/products/brands.service.ts ***!
  \*****************************************************/
/*! exports provided: BrandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return BrandsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var BrandsService = /** @class */ (function () {
    function BrandsService(api) {
        this.api = api;
    }
    BrandsService.prototype.getAll = function () {
        var ts = this;
        return ts.api.get("/products/brands/read/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    BrandsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/brands/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    BrandsService.ɵfac = function BrandsService_Factory(t) { return new (t || BrandsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    BrandsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrandsService, factory: BrandsService.ɵfac, providedIn: 'root' });
    return BrandsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "dKyG":
/*!**********************************************!*\
  !*** ./src/app/services/accounting/index.ts ***!
  \**********************************************/
/*! exports provided: ClassOfAccountingService, AccountsService, AccountingGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_of_accounting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-of-accounting.service */ "UX58");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassOfAccountingService", function() { return _class_of_accounting_service__WEBPACK_IMPORTED_MODULE_0__["ClassOfAccountingService"]; });

/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.service */ "NrHn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return _accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]; });

/* harmony import */ var _accounting_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounting-groups.service */ "fFJT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountingGroupsService", function() { return _accounting_groups_service__WEBPACK_IMPORTED_MODULE_2__["AccountingGroupsService"]; });






/***/ }),

/***/ "fFJT":
/*!******************************************************************!*\
  !*** ./src/app/services/accounting/accounting-groups.service.ts ***!
  \******************************************************************/
/*! exports provided: AccountingGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingGroupsService", function() { return AccountingGroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/api-server.service */ "C6Ca");





var AccountingGroupsService = /** @class */ (function () {
    function AccountingGroupsService(api) {
        this.api = api;
        this.data = [];
    }
    AccountingGroupsService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/accounting/accountinggroups/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AccountingGroupsService.ɵfac = function AccountingGroupsService_Factory(t) { return new (t || AccountingGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    AccountingGroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountingGroupsService, factory: AccountingGroupsService.ɵfac, providedIn: 'root' });
    return AccountingGroupsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountingGroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "lJ4t":
/*!*********************************************************!*\
  !*** ./src/app/services/products/attributes.service.ts ***!
  \*********************************************************/
/*! exports provided: AttributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesService", function() { return AttributesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var AttributesService = /** @class */ (function () {
    function AttributesService(api) {
        this.api = api;
    }
    AttributesService.prototype.getAll = function (params) {
        var ts = this;
        return ts.api.get("/products/attributes/all", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AttributesService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get("/products/attributes/read", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    AttributesService.ɵfac = function AttributesService_Factory(t) { return new (t || AttributesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    AttributesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttributesService, factory: AttributesService.ɵfac, providedIn: 'root' });
    return AttributesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "xcN5":
/*!****************************************************************!*\
  !*** ./src/app/services/products/class-of-products.service.ts ***!
  \****************************************************************/
/*! exports provided: ClassOfProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOfProductsService", function() { return ClassOfProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var ClassOfProductsService = /** @class */ (function () {
    function ClassOfProductsService(api) {
        this.api = api;
    }
    ClassOfProductsService.prototype.getData = function () {
        var ts = this;
        return ts.api.get("/products/class")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    ClassOfProductsService.ɵfac = function ClassOfProductsService_Factory(t) { return new (t || ClassOfProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    ClassOfProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassOfProductsService, factory: ClassOfProductsService.ɵfac, providedIn: 'root' });
    return ClassOfProductsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassOfProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "xg8E":
/*!************************************************!*\
  !*** ./src/app/core/components/forms/index.ts ***!
  \************************************************/
/*! exports provided: FormComponent, FormSpinnerComponent, FooterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ "TK7J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return _form_component__WEBPACK_IMPORTED_MODULE_0__["FormComponent"]; });

/* harmony import */ var _form_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-spinner.component */ "Du65");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSpinnerComponent", function() { return _form_spinner_component__WEBPACK_IMPORTED_MODULE_1__["FormSpinnerComponent"]; });

/* harmony import */ var _footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-form/footer-form.component */ "uHPU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterFormComponent", function() { return _footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_2__["FooterFormComponent"]; });






/***/ }),

/***/ "zC4a":
/*!*******************************************************!*\
  !*** ./src/app/services/general/tax-rates.service.ts ***!
  \*******************************************************/
/*! exports provided: TaxRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxRatesService", function() { return TaxRatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "C6Ca");





var TaxRatesService = /** @class */ (function () {
    function TaxRatesService(api) {
        this.api = api;
        this.data = [];
    }
    TaxRatesService.prototype.getData = function (params) {
        var ts = this;
        return ts.api.get('/general/taxerates/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.records;
        }));
    };
    TaxRatesService.ɵfac = function TaxRatesService_Factory(t) { return new (t || TaxRatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
    TaxRatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxRatesService, factory: TaxRatesService.ɵfac, providedIn: 'root' });
    return TaxRatesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxRatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~products-products-module~sales-sales-module~shopping-shopping-module.js.map