(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounting-accounting-module~auth-auth-module~companies-companies-module~general-general-mod~7a7197d2"],{

/***/ "TK7J":
/*!*********************************************************!*\
  !*** ./src/app/core/components/forms/form.component.ts ***!
  \*********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../utils/index */ "YMfE");
/* harmony import */ var _core_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/components/base/base.component */ "c4Hh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");





// Services

// Base component








var FormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormComponent, _super);
    function FormComponent(fb, msg, api, router, translate, aRouter, spinner) {
        var _this = _super.call(this, api, router, translate) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.title = 'Titulo del formulario';
        _this.saveAClose = false;
        _this.saveACreate = false;
        _this.changeImage = false;
        _this.toClose = false;
        _this.editing = false;
        _this.uid = 0;
        _this.PostURL = '';
        _this.PutURL = '';
        _this.imgData = '';
        _this.imgname = '';
        _this.active = 1;
        return _this;
    }
    // tslint:disable-next-line: contextual-lifecycle
    FormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.uid = ts.aRouter.snapshot.paramMap.get('id');
        if (ts.uid) {
            ts.loadData(ts.uid);
        }
    };
    // tslint:disable-next-line: contextual-lifecycle
    FormComponent.prototype.ngAfterViewInit = function () {
        if (this.focusElement) {
            this.focusElement.nativeElement.focus();
        }
    };
    FormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        // Implements
        this.showSpinner();
    };
    /**
     * Valida los controles de un formulario
     */
    FormComponent.prototype.onValidateForm = function (form) {
        // Object.values(form.controls).forEach(ele => {
        //   ele.markAllAsTouched();
        // });
    };
    /**
     * Limpia los objetos de un formulario
     */
    FormComponent.prototype.onResetForm = function (form) {
        form.reset();
    };
    FormComponent.prototype.activeLoading = function () {
        this.loading = true;
    };
    FormComponent.prototype.disabledLoading = function () {
        this.loading = false;
        this.saveAClose = false;
        this.saveACreate = false;
        this.hideSpinner();
    };
    FormComponent.prototype.cancel = function () {
        this.close();
    };
    FormComponent.prototype.close = function () {
        this.onResetForm(this.customForm);
        var oldRoute = localStorage.getItem('oldRoute');
        if (oldRoute) {
            localStorage.removeItem('oldRoute');
            this.goRoute(oldRoute);
        }
    };
    FormComponent.prototype.validateForm = function () {
        var me = this.customForm;
        var ts = this;
        var lang = this.translate;
        ts.activeLoading();
        if (me.invalid) {
            ts.onValidateForm(me);
            ts.msg.toastMessage(lang.instant('titleMessages.emptyFields'), lang.instant('bodyMessages.emptyFields'), 4);
            ts.disabledLoading();
        }
    };
    FormComponent.prototype.saveAndCreate = function () {
        // Implements
        this.saveACreate = true;
        this.validateForm();
        this.toClose = false;
        this.saveData();
    };
    FormComponent.prototype.saveAndClose = function () {
        // Implements
        this.saveAClose = true;
        this.validateForm();
        this.toClose = true;
        this.saveData();
    };
    FormComponent.prototype.saveData = function () {
        var ts = this;
        var frm = ts.customForm;
        var lang = ts.translate;
        var values = {};
        if (!frm.invalid) {
            ts.showSpinner('Procesando petición...');
            values = frm.value;
            if (ts.changeImage) {
                values.imgdata = ts.imgData;
                values.imgname = ts.imgname;
            }
            if (ts.editing) {
                var data = {
                    records: JSON.stringify(values)
                };
                ts.api.put("" + ts.PutURL + ts.uid, data)
                    .subscribe(function (resp) {
                    ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
                    ts.editing = false;
                    if (ts.toClose) {
                        ts.close();
                    }
                    else {
                        ts.onResetForm(frm);
                        if (ts.focusElement) {
                            ts.focusElement.nativeElement.focus();
                        }
                    }
                    ts.disabledLoading();
                }, function (err) {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                    ts.disabledLoading();
                });
            }
            else {
                ts.api.post(ts.PostURL, values)
                    .subscribe(function (resp) {
                    ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
                    if (ts.toClose) {
                        ts.close();
                    }
                    else {
                        ts.onResetForm(frm);
                        if (ts.focusElement) {
                            ts.focusElement.nativeElement.focus();
                        }
                    }
                    ts.disabledLoading();
                }, function (err) {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                    ts.disabledLoading();
                });
            }
        }
    };
    FormComponent.prototype.uploadImage = function (e) {
        var ts = this;
        var file = e.target.files[0];
        var size = 0;
        if (file) {
            size = (parseInt(file.size) / 1024);
            ts.imgData = 'assets/avatars/no-image.png';
            if (parseInt(file.size) > 512000) {
                ts.msg.toastMessage('Archivo muy grande.', "El tama\u00F1o del archivo no debe ser mayor a 512 kb. Peso del archivo actual: " + size.toFixed(3), 3);
                ts.uploadFile.nativeElement.value = '';
                return;
            }
            if (file.type == "image/jpeg" || file.type == "image/png") {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    ts.imgData = reader.result;
                    ts.changeImage = true;
                    ts.imgname = file.name;
                };
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                    ts.msg.toastMessage('Error', error, 4);
                };
            }
            else {
                ts.uploadFile.nativeElement.value = '';
                ts.msg.toastMessage('Formato no soportado.', 'Solo se permiten archivos en formato PNG/JPG', 4);
            }
        }
    };
    FormComponent.prototype.showSpinner = function (mask) {
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
    FormComponent.prototype.hideSpinner = function () {
        this.spinner.hide();
    };
    FormComponent.prototype.fullLoad = function () {
        this.spinner.hide();
    };
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_index__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_index__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
    FormComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormComponent, factory: FormComponent.ɵfac });
    return FormComponent;
}(_core_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _utils_index__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils_index__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "c4Hh":
/*!********************************************************!*\
  !*** ./src/app/core/components/base/base.component.ts ***!
  \********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../utils/api-server.service */ "C6Ca");








var BaseComponent = /** @class */ (function () {
    function BaseComponent(api, router, translate) {
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.activeLang = 'es';
        this.maskSpinner = '';
        this.translate.setDefaultLang(this.activeLang);
        this.translate.use(this.activeLang);
    }
    // tslint:disable-next-line: contextual-lifecycle
    BaseComponent.prototype.ngOnInit = function () {
        // this.changeLanguage(this.activeLang);
    };
    BaseComponent.prototype.changeLanguage = function (lang) {
        this.activeLang = lang;
        this.translate.use(lang);
    };
    BaseComponent.prototype.removeLoading = function () {
        var ele = document.getElementById('nb-global-spinner');
        // Ocultando la animación
        if (ele) {
            ele.classList.remove('spinner');
        }
    };
    /**
     * Redirigir a la ruta de inicio de la aplicación.
     */
    BaseComponent.prototype.goHome = function () {
        if (this.api.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    };
    /**
     * Redirigir a la ruta indicada.
     * @name : Nombre de la ruta
     */
    BaseComponent.prototype.goRoute = function (name) {
        if (this.api.isAuthenticated()) {
            this.router.navigate(["/" + name]);
        }
    };
    BaseComponent.prototype.activeLoading = function () {
        this.loading = true;
    };
    BaseComponent.prototype.disabledLoading = function () {
        this.loading = false;
    };
    BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    BaseComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseComponent, factory: BaseComponent.ɵfac });
    return BaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~accounting-accounting-module~auth-auth-module~companies-companies-module~general-general-mod~7a7197d2.js.map