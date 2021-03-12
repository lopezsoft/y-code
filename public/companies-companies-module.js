(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "8zK+":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/companies/branch-office/edit-branch-office/edit-branch-office.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditBranchOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBranchOfficeComponent", function() { return EditBranchOfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/companies/branch-office.service */ "vDid");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/global */ "Absx");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");





















var _c0 = ["focusElement"];
function EditBranchOfficeComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cur_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cur_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + cur_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cur_r3.CurrencyName, " ");
} }
function EditBranchOfficeComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var coun_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", coun_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + coun_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", coun_r4.country_name, " ");
} }
var EditBranchOfficeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditBranchOfficeComponent, _super);
    function EditBranchOfficeComponent(fb, msg, api, router, translate, aRouter, spinner, branch, coun, curr) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.branch = branch;
        _this.coun = coun;
        _this.curr = curr;
        _this.countries = [];
        _this.currency = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            country_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            branch_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            postal_code: [''],
            address: [''],
            address2: [''],
            location: [''],
            email: [''],
            mobile: [''],
            phone: [''],
            web: [''],
            is_point_of_sale: [false]
        });
        return _this;
    }
    Object.defineProperty(EditBranchOfficeComponent.prototype, "invalidCountry", {
        get: function () {
            return (this.customForm.get('country_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditBranchOfficeComponent.prototype, "invalidCurrency", {
        get: function () {
            return (this.customForm.get('currency_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditBranchOfficeComponent.prototype, "invalidBranchName", {
        get: function () {
            return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditBranchOfficeComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        ts.PutURL = '/companies/branchoffice/update/';
        ts.PostURL = '/companies/branchoffice/create';
        ts.coun.getData().subscribe(function (resp) {
            ts.countries = resp;
        });
        ts.curr.getData().subscribe(function (resp) {
            ts.currency = resp;
        });
    };
    EditBranchOfficeComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.branch.getData({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        currency_id: resp[0].currency_id,
                        country_id: resp[0].country_id,
                        branch_name: resp[0].branch_name,
                        postal_code: resp[0].postal_code,
                        address: resp[0].address,
                        address2: resp[0].address2,
                        location: resp[0].location,
                        email: resp[0].email,
                        mobile: resp[0].mobile,
                        phone: resp[0].phone,
                        web: resp[0].web,
                        is_point_of_sale: resp[0].is_point_of_sale,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditBranchOfficeComponent.ɵfac = function EditBranchOfficeComponent_Factory(t) { return new (t || EditBranchOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"])); };
    EditBranchOfficeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditBranchOfficeComponent, selectors: [["app-edit-branch-office"]], viewQuery: function EditBranchOfficeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 106, vars: 76, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "autofocus", "", "required", "", "formControlName", "branch_name", "name", "branch_name", 1, "form-control", "form-control"], ["focusElement", ""], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", "", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "country_id", "name", "country_id", "required", "", 3, "virtualScroll"], ["type", "text", "nbinput", "", "formControlName", "postal_code", "name", "postal_code", 1, "form-control"], ["nbinput", "", "formControlName", "address", "name", "address", 1, "form-control"], ["nbinput", "", "formControlName", "address2", "name", "address2", 1, "form-control"], ["type", "text", "nbinput", "", "formControlName", "location", "name", "location", 1, "form-control"], ["type", "email", "nbinput", "", "formControlName", "email", "name", "email", 1, "form-control"], ["type", "text", "maxlength", "12", "nbinput", "", "formControlName", "mobile", "name", "mobile", 1, "form-control"], ["type", "text", "nbinput", "", "formControlName", "phone", "name", "phone", 1, "form-control"], ["type", "text", "maxlength", "12", "nbinput", "", "formControlName", "web", "name", "web", 1, "form-control"], ["type", "checkbox", "formControlName", "is_point_of_sale", "id", "is_point_of_sale", "name", "is_point_of_sale", 1, "checkbox", 2, "margin-right", "2%"], ["for", "is_point_of_sale"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function EditBranchOfficeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ng-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, EditBranchOfficeComponent_ng_option_31_Template, 3, 3, "ng-option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ng-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, EditBranchOfficeComponent_ng_option_42_Template, 3, 3, "ng-option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "textarea", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "textarea", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](103, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "app-footer-form", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditBranchOfficeComponent_Template_app_footer_form_closeEvent_105_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditBranchOfficeComponent_Template_app_footer_form_saveAndCreateEvent_105_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditBranchOfficeComponent_Template_app_footer_form_saveAndCloseEvent_105_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 38, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 40, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 42, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 44, "branchs.title")), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 46, "general.asterisk"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 48, "branchs.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchName)("status-danger", ctx.invalidBranchName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 50, "general.asterisk"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 52, "general.currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrency)("status-danger", ctx.invalidCurrency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 54, "general.asterisk"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 56, "general.country"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidCountry)("status-danger", ctx.invalidCountry);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 58, "branchs.postalCode"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 60, "branchs.address"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 62, "branchs.address2"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 64, "branchs.location"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 66, "branchs.email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 68, "branchs.mobile"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 70, "branchs.phone"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](95, 72, "branchs.web"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](103, 74, "branchs.isPointOfSale"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return EditBranchOfficeComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditBranchOfficeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-branch-office',
                templateUrl: './edit-branch-office.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }, { type: _services_global__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }, { type: _services_global__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "AMIW":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditWineriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWineriesComponent", function() { return EditWineriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/companies/wineries.service */ "K56k");
/* harmony import */ var _services_companies_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/companies/index */ "mm0L");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");





















var _c0 = ["focusElement"];
function EditWineriesComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var branch_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branch_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", branch_r3.branch_name, " ");
} }
function EditWineriesComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var depart_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", depart_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", depart_r4.department_name, " ");
} }
var EditWineriesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditWineriesComponent, _super);
    function EditWineriesComponent(fb, msg, api, router, translate, aRouter, spinner, winerSer, branch, depart) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.winerSer = winerSer;
        _this.branch = branch;
        _this.depart = depart;
        _this.branch_office = [];
        _this.departments = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            winery_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            department_id: ['']
        });
        return _this;
    }
    Object.defineProperty(EditWineriesComponent.prototype, "invalidName", {
        get: function () {
            return this.customForm.get('winery_name').invalid && this.customForm.get('winery_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditWineriesComponent.prototype, "invalidBranch", {
        get: function () {
            return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditWineriesComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.title = 'Crear/Editar bodegas';
        ts.PutURL = '/companies/wineries/update/';
        ts.PostURL = '/companies/wineries/create';
        ts.branch.getData({}).subscribe(function (resp) {
            ts.branch_office = resp;
        });
        ts.depart.getData({}).subscribe(function (resp) {
            ts.departments = resp;
        });
    };
    EditWineriesComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.winerSer.getData({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        branch_id: resp[0].branch_id,
                        department_id: resp[0].department_id,
                        winery_name: resp[0].winery_name,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditWineriesComponent.ɵfac = function EditWineriesComponent_Factory(t) { return new (t || EditWineriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_9__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__["WineriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"])); };
    EditWineriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditWineriesComponent, selectors: [["app-edit-wineries"]], viewQuery: function EditWineriesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 38, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "asterisk"], ["type", "text", "formControlName", "winery_name", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["formControlName", "branch_id", "name", "branch_id", "required", "", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "overflow-box"], ["formControlName", "department_id", "name", "department_id", 3, "virtualScroll"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function EditWineriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ng-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, EditWineriesComponent_ng_option_29_Template, 2, 2, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ng-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, EditWineriesComponent_ng_option_37_Template, 2, 2, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "app-footer-form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditWineriesComponent_Template_app_footer_form_closeEvent_39_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditWineriesComponent_Template_app_footer_form_saveAndCreateEvent_39_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditWineriesComponent_Template_app_footer_form_saveAndCloseEvent_39_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 22, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 26, "wineries.title")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 28, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 30, "wineries.name"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 32, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 34, "wineries.branch"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidBranch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.branch_office);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 36, "wineries.department"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.departments);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
    return EditWineriesComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditWineriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-wineries',
                templateUrl: './edit-wineries.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_9__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_9__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__["WineriesService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "FV8i":
/*!********************************************************!*\
  !*** ./src/app/pages/companies/companies.component.ts ***!
  \********************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(); };
    CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], decls: 1, vars: 0, template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return CompaniesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hhcw":
/*!****************************************************************************!*\
  !*** ./src/app/pages/companies/points-of-sale/points-of-sale.component.ts ***!
  \****************************************************************************/
/*! exports provided: PointsOfSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleComponent", function() { return PointsOfSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services









var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function PointsOfSaleComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsOfSaleComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var PointsOfSaleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PointsOfSaleComponent, _super);
    function PointsOfSaleComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Puntos de venta';
        return _this;
    }
    PointsOfSaleComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    PointsOfSaleComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/companies/branchoffice/create/pointofsale',
            read: '/companies/branchoffice/read/pointofsale',
            update: '/companies/branchoffice/update/pointofsale/',
            delete: '/companies/branchoffice/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'currency_id', type: 'number' },
            { name: 'branch_id', type: 'number' },
            { name: 'country_id', type: 'number' },
            { name: 'postal_code', type: 'string' },
            { name: 'branch_name', type: 'string' },
            { name: 'branch', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'address2', type: 'string' },
            { name: 'currencyname', type: 'string' },
            { name: 'country_name', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'mobile', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'web', type: 'string' },
            { name: 'is_point_of_sale', type: 'bool' },
            { name: 'state', type: 'number' }
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('pointsofsale.name'), align: 'center', datafield: 'branch_name', minWidth: 150 },
                { text: lang.instant('pointsofsale.branch_name'), align: 'center', datafield: 'branch', minWidth: 150 },
                { text: lang.instant('general.currency'), align: 'center', datafield: 'currencyname', minWidth: 100, width: 150 },
                { text: lang.instant('general.country'), align: 'center', datafield: 'country_name', minWidth: 100 },
                { text: lang.instant('pointsofsale.address'), align: 'center', datafield: 'address', minWidth: 100 },
            ];
        this.prepareGrid();
        ts.title = lang.instant('pointsofsale.title');
    };
    PointsOfSaleComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/companies/pointofsale/create');
    };
    PointsOfSaleComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/companies/pointofsale/edit/" + data.id);
    };
    PointsOfSaleComponent.ɵfac = function PointsOfSaleComponent_Factory(t) { return new (t || PointsOfSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    PointsOfSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PointsOfSaleComponent, selectors: [["app-points-of-sale"]], viewQuery: function PointsOfSaleComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function PointsOfSaleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemclick", function PointsOfSaleComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, PointsOfSaleComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function PointsOfSaleComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellselect", function PointsOfSaleComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function PointsOfSaleComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return PointsOfSaleComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PointsOfSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-points-of-sale',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['searchField']
        }] }); })();


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

/***/ "N4Rd":
/*!******************************************!*\
  !*** ./src/app/pages/companies/index.ts ***!
  \******************************************/
/*! exports provided: CompanyComponent, BranchOfficeComponent, PointsOfSaleComponent, PointsOfSaleFormComponent, CompanyTypeComponent, CompanyTypeFormComponent, DepartmentsComponent, WineriesComponent, EditBranchOfficeComponent, EditWineriesComponent, EditDepartmensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/company.component */ "QlZh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return _company_company_component__WEBPACK_IMPORTED_MODULE_0__["CompanyComponent"]; });

/* harmony import */ var _branch_office_branch_office_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-office/branch-office.component */ "Zp2Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeComponent", function() { return _branch_office_branch_office_component__WEBPACK_IMPORTED_MODULE_1__["BranchOfficeComponent"]; });

/* harmony import */ var _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points-of-sale/points-of-sale.component */ "Hhcw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleComponent", function() { return _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_2__["PointsOfSaleComponent"]; });

/* harmony import */ var _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points-of-sale/points-of-sale-form.component */ "Q8/N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleFormComponent", function() { return _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_3__["PointsOfSaleFormComponent"]; });

/* harmony import */ var _company_type_company_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-type/company-type.component */ "wdGu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeComponent", function() { return _company_type_company_type_component__WEBPACK_IMPORTED_MODULE_4__["CompanyTypeComponent"]; });

/* harmony import */ var _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-type/company-type-form.component */ "rJ/c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeFormComponent", function() { return _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_5__["CompanyTypeFormComponent"]; });

/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments/departments.component */ "tZwr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"]; });

/* harmony import */ var _wineries_wineries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wineries/wineries.component */ "wSep");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WineriesComponent", function() { return _wineries_wineries_component__WEBPACK_IMPORTED_MODULE_7__["WineriesComponent"]; });

/* harmony import */ var _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch-office/edit-branch-office/edit-branch-office.component */ "8zK+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditBranchOfficeComponent", function() { return _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_8__["EditBranchOfficeComponent"]; });

/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "AMIW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditWineriesComponent", function() { return _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_9__["EditWineriesComponent"]; });

/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "zrha");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditDepartmensComponent", function() { return _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_10__["EditDepartmensComponent"]; });














/***/ }),

/***/ "Q8/N":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/companies/points-of-sale/points-of-sale-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PointsOfSaleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleFormComponent", function() { return PointsOfSaleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/companies/branch-office.service */ "vDid");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");



















var _c0 = ["focusElement"];
function PointsOfSaleFormComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cur_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cur_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cur_r2.branch_name, " ");
} }
var PointsOfSaleFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PointsOfSaleFormComponent, _super);
    function PointsOfSaleFormComponent(fb, msg, api, router, translate, aRouter, spinner, branch) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.branch = branch;
        _this.branchs = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            branch_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            address: [''],
            mobile: [''],
            phone: [''],
        });
        return _this;
    }
    Object.defineProperty(PointsOfSaleFormComponent.prototype, "invalidBranchId", {
        get: function () {
            return (this.customForm.get('branch_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointsOfSaleFormComponent.prototype, "invalidBranchName", {
        get: function () {
            return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    PointsOfSaleFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        ts.title = lang.instant('general.createEdit') + " " + lang.instant('pointsofsale.title');
        ts.PutURL = '/companies/branchoffice/update/pointofsale/';
        ts.PostURL = '/companies/branchoffice/create/pointofsale';
        ts.branch.getData({}).subscribe(function (resp) {
            ts.branchs = resp;
        });
    };
    PointsOfSaleFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.branch.getPointsOfSale({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        branch_id: resp[0].branch_id,
                        branch_name: resp[0].branch_name,
                        address: resp[0].address,
                        mobile: resp[0].mobile,
                        phone: resp[0].phone,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    PointsOfSaleFormComponent.ɵfac = function PointsOfSaleFormComponent_Factory(t) { return new (t || PointsOfSaleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"])); };
    PointsOfSaleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PointsOfSaleFormComponent, selectors: [["app-points-of-sale-form"]], viewQuery: function PointsOfSaleFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 35, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "autofocus", "", "required", "", "formControlName", "branch_name", 1, "form-control"], ["focusElement", ""], ["fullWidth", "", "formControlName", "branch_id", "required", "", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col"], ["formControlName", "address", 1, "form-control"], ["type", "text", "minlength", "7", "formControlName", "mobile", 1, "form-control"], ["type", "text", "formControlName", "phone", "name", "phone", 1, "form-control"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function PointsOfSaleFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ng-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PointsOfSaleFormComponent_ng_option_28_Template, 2, 2, "ng-option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "app-footer-form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function PointsOfSaleFormComponent_Template_app_footer_form_closeEvent_51_listener() { return ctx.cancel(); })("saveAndCreateEvent", function PointsOfSaleFormComponent_Template_app_footer_form_saveAndCreateEvent_51_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function PointsOfSaleFormComponent_Template_app_footer_form_saveAndCloseEvent_51_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 19, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 21, "general.asterisk"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, "pointsofsale.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 25, "general.asterisk"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 27, "pointsofsale.branch_name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.branchs);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 29, "pointsofsale.address"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 31, "pointsofsale.phone"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 33, "pointsofsale.mobile"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_11__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return PointsOfSaleFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PointsOfSaleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-points-of-sale-form',
                templateUrl: './points-of-sale-form.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "QlZh":
/*!**************************************************************!*\
  !*** ./src/app/pages/companies/company/company.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/companies/type-organization.service */ "bLyg");
/* harmony import */ var _services_global_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/global/index */ "Absx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _services_companies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/companies */ "mm0L");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");























var _c0 = ["companyName"];
var _c1 = ["imgUp"];
function CompanyComponent_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var typeOrg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", typeOrg_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", typeOrg_r6.description, " ");
} }
function CompanyComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var docs_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", docs_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", docs_r7.document_name, " ");
} }
function CompanyComponent_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var curre_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", curre_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + curre_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curre_r8.CurrencyName, " ");
} }
function CompanyComponent_ng_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + country_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r9.country_name, " ");
} }
var CompanyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompanyComponent, _super);
    function CompanyComponent(fb, api, msg, router, spinner, translate, aRouter, tor, docs, cnt, curr, company) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.api = api;
        _this.msg = msg;
        _this.router = router;
        _this.spinner = spinner;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.tor = tor;
        _this.docs = docs;
        _this.cnt = cnt;
        _this.curr = curr;
        _this.company = company;
        _this.typeOrg = [];
        _this.identityDocs = [];
        _this.countries = [];
        _this.currency = [];
        _this.customForm = _this.fb.group({
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            identity_document_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type_organization_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            number_employees: [0],
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            dni: [''],
            address: [''],
            location: [''],
            postal_code: [''],
            mobile: [''],
            phone: [''],
            web: [''],
            email: ['']
        });
        return _this;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var ts = this;
        this.changeLanguage(this.activeLang);
        this.title = 'Datos de la compañia';
        ts.PutURL = '/company/update/';
        ts.PostURL = '/company/create';
        this.loadData();
    };
    CompanyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.companyName.nativeElement.focus();
        var ts = this;
        ts.docs.getData({}).subscribe(function (resp) {
            ts.identityDocs = resp;
        });
        ts.cnt.getData().subscribe(function (resp) {
            ts.countries = resp;
        });
        ts.curr.getData().subscribe(function (resp) {
            ts.currency = resp;
        });
        this.tor.getData({}).subscribe(function (resp) {
            _this.typeOrg = resp;
        });
    };
    CompanyComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                this.company.getData({}).subscribe(function (resp) {
                    if (resp.length > 0) {
                        ts.editing = true;
                        ts.uid = resp[0].id;
                        frm.setValue({
                            address: resp[0].address,
                            company_name: resp[0].company_name,
                            country_id: resp[0].country_id,
                            currency_id: resp[0].currency_id,
                            dni: resp[0].dni,
                            email: resp[0].email,
                            identity_document_id: resp[0].identity_document_id,
                            location: resp[0].location,
                            mobile: resp[0].mobile,
                            phone: resp[0].phone,
                            postal_code: resp[0].postal_code,
                            number_employees: resp[0].number_employees,
                            type_organization_id: resp[0].type_organization_id,
                            web: resp[0].web
                        });
                        ts.imgData = resp[0].image ? resp[0].image : '';
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(CompanyComponent.prototype, "invalidCompanyName", {
        // VALIDATION
        get: function () {
            return this.customForm.get('company_name').invalid && this.customForm.get('company_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "invalidEmail", {
        get: function () {
            return this.customForm.get('email').invalid && this.customForm.get('email').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "invalidOrganization", {
        get: function () {
            return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "invalidIdentity", {
        get: function () {
            return (this.customForm.get('identity_document_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "invalidCountry", {
        get: function () {
            return (this.customForm.get('country_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "invalidCurrency", {
        get: function () {
            return (this.customForm.get('currency_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderCompanyName", {
        // GET PLACEHOLDERS
        get: function () {
            return this.translate.instant('companies.company_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderDni", {
        get: function () {
            return this.translate.instant('companies.dni');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderDv", {
        get: function () {
            return this.translate.instant('companies.dv');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderAddress", {
        get: function () {
            return this.translate.instant('companies.address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderLocation", {
        get: function () {
            return this.translate.instant('companies.location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderPostalCode", {
        get: function () {
            return this.translate.instant('companies.postal_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderMobile", {
        get: function () {
            return this.translate.instant('companies.mobile');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderPhone", {
        get: function () {
            return this.translate.instant('companies.phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderEmail", {
        get: function () {
            return this.translate.instant('companies.email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyComponent.prototype, "placeholderWeb", {
        get: function () {
            return this.translate.instant('companies.web');
        },
        enumerable: false,
        configurable: true
    });
    CompanyComponent.prototype.close = function () {
        this.goRoute('/dashboard');
    };
    CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_8__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_8__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__["TypeOrganizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_7__["IdentityDocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_7__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_7__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies__WEBPACK_IMPORTED_MODULE_10__["CompanyService"])); };
    CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], viewQuery: function CompanyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.companyName = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 127, vars: 96, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "formControlName", "company_name", "required", "", "autofocus", "", "name", "company_name", 1, "form-control"], ["companyName", ""], ["fullWidth", "", "formControlName", "type_organization_id", "required", "", "name", "type_organization_id"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "identity_document_id", "required", "", "name", "identity_document_id"], ["type", "text", "name", "dni", "formControlName", "dni", 1, "form-control"], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", ""], ["fullWidth", "", "formControlName", "country_id", "required", "", "name", "country_id"], ["type", "text", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "location", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "postal_code", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "mobile", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "web", 1, "form-control", 3, "placeholder"], ["type", "number", "min", "0", "formControlName", "number_employees", 1, "form-control", 3, "placeholder"], ["div", "", 1, "col-md-6"], ["for", "file"], ["type", "file", "id", "file", 1, "form-control-file", 3, "change"], ["uploadFile", ""], ["width", "128px", "fallimg", "", 1, "img-thumbnail", 3, "src"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ng-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CompanyComponent_ng_option_26_Template, 2, 2, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CompanyComponent_ng_option_37_Template, 2, 2, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ng-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, CompanyComponent_ng_option_54_Template, 3, 3, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "ng-select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CompanyComponent_ng_option_64_Template, 3, 3, "ng-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](101, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](108, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](114, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Seleccionar imagen");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CompanyComponent_Template_input_change_121_listener($event) { return ctx.uploadImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "app-footer-form", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function CompanyComponent_Template_app_footer_form_closeEvent_126_listener() { return ctx.cancel(); })("saveAndCreateEvent", function CompanyComponent_Template_app_footer_form_saveAndCreateEvent_126_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function CompanyComponent_Template_app_footer_form_saveAndCloseEvent_126_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 56, ctx.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 58, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 60, "companies.company_name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidCompanyName)("is-invalid", ctx.invalidCompanyName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 62, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 64, "companies.type_organization"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidOrganization);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.typeOrg);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 66, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 68, "companies.identity_document"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidIdentity)("status-danger", ctx.invalidIdentity);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.identityDocs);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 70, "companies.dni"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 72, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 74, "companies.currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrency)("status-danger", ctx.invalidCurrency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 76, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 78, "companies.country"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidCountry)("status-danger", ctx.invalidCountry);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 80, "companies.address"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderAddress);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 82, "companies.location"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderLocation);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](83, 84, "companies.postal_code"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderPostalCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 86, "companies.mobile"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderMobile);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](95, 88, "companies.phone"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderPhone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](101, 90, "companies.email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](108, 92, "companies.web"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderWeb);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](114, 94, "companies.number_employees"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderWeb);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgData, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", false)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
    return CompanyComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_8__["ApiServerService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_8__["MessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__["TypeOrganizationService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_7__["IdentityDocumentsService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_7__["CountriesService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_7__["CurrencySysService"] }, { type: _services_companies__WEBPACK_IMPORTED_MODULE_10__["CompanyService"] }]; }, { companyName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['companyName']
        }], imgUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['imgUp']
        }] }); })();


/***/ }),

/***/ "Zp2Q":
/*!**************************************************************************!*\
  !*** ./src/app/pages/companies/branch-office/branch-office.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeComponent", function() { return BranchOfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services









var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function BranchOfficeComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchOfficeComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var BranchOfficeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BranchOfficeComponent, _super);
    function BranchOfficeComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Sucursales';
        return _this;
    }
    BranchOfficeComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    BranchOfficeComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/companies/branchoffice/create',
            read: '/companies/branchoffice/read',
            update: '/companies/branchoffice/update/',
            delete: '/companies/branchoffice/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'currency_id', type: 'number' },
            { name: 'country_id', type: 'number' },
            { name: 'postal_code', type: 'string' },
            { name: 'branch_name', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'address2', type: 'string' },
            { name: 'currencyname', type: 'string' },
            { name: 'country_name', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'mobile', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'web', type: 'string' },
            { name: 'is_point_of_sale', type: 'bool' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('branchs.name'), align: 'center', datafield: 'branch_name', minWidth: 150 },
                { text: lang.instant('general.currency'), align: 'center', datafield: 'currencyname', minWidth: 100, width: 150 },
                { text: lang.instant('general.country'), align: 'center', datafield: 'country_name', minWidth: 100 },
                { text: lang.instant('branchs.address'), align: 'center', datafield: 'address', minWidth: 100 },
                { text: lang.instant('branchs.isPointOfSale'), align: 'center', datafield: 'is_point_of_sale', columntype: 'checkbox',
                    threestatecheckbox: true, width: 110 }
            ];
        this.prepareGrid();
        ts.title = lang.instant('branchs.title');
    };
    BranchOfficeComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/companies/branchoffice/create');
    };
    BranchOfficeComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/companies/branchoffice/edit/" + data.id);
    };
    BranchOfficeComponent.ɵfac = function BranchOfficeComponent_Factory(t) { return new (t || BranchOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    BranchOfficeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BranchOfficeComponent, selectors: [["app-branch-office"]], viewQuery: function BranchOfficeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function BranchOfficeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemclick", function BranchOfficeComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, BranchOfficeComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function BranchOfficeComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellselect", function BranchOfficeComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function BranchOfficeComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return BranchOfficeComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BranchOfficeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-branch-office',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['searchField']
        }] }); })();


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

/***/ "in5t":
/*!*************************************************************!*\
  !*** ./src/app/pages/companies/companies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ "FV8i");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "N4Rd");
/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "AMIW");
/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "zrha");








var routes = [{
        path: '',
        component: _companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"],
        children: [
            {
                path: 'company',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"],
            },
            {
                path: 'branchoffice',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["BranchOfficeComponent"]
            },
            {
                path: 'branchoffice/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["EditBranchOfficeComponent"]
            },
            {
                path: 'branchoffice/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["EditBranchOfficeComponent"]
            },
            {
                path: 'pointofsale',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["PointsOfSaleComponent"]
            },
            {
                path: 'pointofsale/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["PointsOfSaleFormComponent"]
            },
            {
                path: 'pointofsale/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["PointsOfSaleFormComponent"]
            },
            {
                path: 'departaments',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"]
            },
            {
                path: 'departments/edit/:id',
                component: _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_5__["EditDepartmensComponent"]
            },
            {
                path: 'departments/create',
                component: _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_5__["EditDepartmensComponent"]
            },
            {
                path: 'wineries',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["WineriesComponent"]
            },
            {
                path: 'wineries/edit/:id',
                component: _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_4__["EditWineriesComponent"]
            },
            {
                path: 'wineries/create',
                component: _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_4__["EditWineriesComponent"]
            },
            {
                path: 'companytype',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CompanyTypeComponent"]
            },
            {
                path: 'companytype/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CompanyTypeFormComponent"]
            },
            {
                path: 'companytype/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CompanyTypeFormComponent"]
            }
        ],
    }];
var CompaniesRoutingModule = /** @class */ (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesRoutingModule });
    CompaniesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesRoutingModule_Factory(t) { return new (t || CompaniesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CompaniesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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

/***/ "rJ/c":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/companies/company-type/company-type-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeFormComponent", function() { return CompanyTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/companies/type-organization.service */ "bLyg");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");


















var _c0 = ["focusElement"];
var CompanyTypeFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompanyTypeFormComponent, _super);
    function CompanyTypeFormComponent(fb, msg, api, router, translate, aRouter, spinner, types) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.types = types;
        _this.customForm = _this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]]
        });
        return _this;
    }
    Object.defineProperty(CompanyTypeFormComponent.prototype, "invalidName", {
        get: function () {
            return this.customForm.get('description').invalid && this.customForm.get('description').touched;
        },
        enumerable: false,
        configurable: true
    });
    CompanyTypeFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.title = 'Crear/Editar tipo de compañia';
        ts.PutURL = '/companies/companytype/update/';
        ts.PostURL = '/companies/companytype/create';
    };
    CompanyTypeFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.types.getData({ uid: id }).subscribe(function (resp) {
            frm.setValue({
                description: resp[0].description
            });
        });
    };
    CompanyTypeFormComponent.ɵfac = function CompanyTypeFormComponent_Factory(t) { return new (t || CompanyTypeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_7__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_8__["TypeOrganizationService"])); };
    CompanyTypeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyTypeFormComponent, selectors: [["app-company-type-form"]], viewQuery: function CompanyTypeFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 25, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-12"], [1, "form-group"], [1, "asterisk"], ["type", "text", "formControlName", "description", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"]], template: function CompanyTypeFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "app-footer-form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function CompanyTypeFormComponent_Template_app_footer_form_closeEvent_23_listener() { return ctx.cancel(); })("saveAndCreateEvent", function CompanyTypeFormComponent_Template_app_footer_form_saveAndCreateEvent_23_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function CompanyTypeFormComponent_Template_app_footer_form_saveAndCloseEvent_23_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 15, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 19, "typeOrganization.title")), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 21, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 23, "typeOrganization.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__["FooterFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtDQUNGOztBQUdBO0VBQ0UsUUFBQTtDQUFGOztBQUdBO0VBQ0UsMEJBQUE7Q0FBRjs7QUFHQTtFQUNFLGtCQUFBO0NBQUYiLCJmaWxlIjoiZm9ybS1sYXlvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
    return CompanyTypeFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyTypeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-type-form',
                templateUrl: './company-type-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_7__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_8__["TypeOrganizationService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


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

/***/ "tZwr":
/*!**********************************************************************!*\
  !*** ./src/app/pages/companies/departments/departments.component.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services









var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function DepartmentsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentsComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var DepartmentsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DepartmentsComponent, _super);
    function DepartmentsComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Departamentos';
        return _this;
    }
    DepartmentsComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/companies/departments/create',
            read: '/companies/departments/read',
            update: '/companies/departments/update/',
            delete: '/companies/departments/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'branch_office_id', type: 'number' },
            { name: 'branch_name', type: 'string' },
            { name: 'department_name', type: 'string' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('departments.name') || 'Nombre del departamento', align: 'center', datafield: 'department_name' },
                { text: lang.instant('departments.branch') || 'Sucursal', align: 'center', datafield: 'branch_name' },
            ];
        this.prepareGrid();
        ts.title = lang.instant('departments.title');
    };
    DepartmentsComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/companies/departments/create');
    };
    DepartmentsComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/companies/departments/edit/" + data.id);
    };
    DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-departaments"]], viewQuery: function DepartmentsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemclick", function DepartmentsComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, DepartmentsComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function DepartmentsComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellselect", function DepartmentsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function DepartmentsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return DepartmentsComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-departaments',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['searchField']
        }] }); })();


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

/***/ "wSep":
/*!****************************************************************!*\
  !*** ./src/app/pages/companies/wineries/wineries.component.ts ***!
  \****************************************************************/
/*! exports provided: WineriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineriesComponent", function() { return WineriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services









var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function WineriesComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WineriesComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var WineriesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WineriesComponent, _super);
    function WineriesComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Bodegas';
        return _this;
    }
    WineriesComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    WineriesComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/companies/wineries/create',
            read: '/companies/wineries/read',
            update: '/companies/wineries/update/',
            delete: '/companies/wineries/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.title = lang.instant('wineries.title');
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'branch_id', type: 'number' },
            { name: 'branch_name', type: 'string' },
            { name: 'winery_name', type: 'string' },
            { name: 'department_name', type: 'string' },
            { name: 'date_time', type: 'date' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('wineries.name') || 'Nombre de la bodega', align: 'center', datafield: 'winery_name' },
                { text: lang.instant('wineries.branch') || 'Sucursal', align: 'center', datafield: 'branch_name' },
                { text: lang.instant('wineries.department') || 'Departamento', align: 'center', datafield: 'department_name' },
            ];
        this.prepareGrid();
    };
    WineriesComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/companies/wineries/create');
    };
    WineriesComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/companies/wineries/edit/" + data.id);
    };
    WineriesComponent.ɵfac = function WineriesComponent_Factory(t) { return new (t || WineriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    WineriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WineriesComponent, selectors: [["app-wineries"]], viewQuery: function WineriesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function WineriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemclick", function WineriesComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, WineriesComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function WineriesComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellselect", function WineriesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function WineriesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return WineriesComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WineriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-wineries',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "wdGu":
/*!************************************************************************!*\
  !*** ./src/app/pages/companies/company-type/company-type.component.ts ***!
  \************************************************************************/
/*! exports provided: CompanyTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeComponent", function() { return CompanyTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services









var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function CompanyTypeComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyTypeComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var CompanyTypeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CompanyTypeComponent, _super);
    function CompanyTypeComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Tipos de compañia';
        return _this;
    }
    CompanyTypeComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    CompanyTypeComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/companies/companytype/create',
            read: '/companies/companytype/read',
            update: '/companies/companytype/update/',
            delete: '/companies/companytype/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'description', type: 'string' },
            { name: 'code', type: 'number' },
            { name: 'id', type: 'number' }
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('typeOrganization.name'), align: 'center', datafield: 'description' }
            ];
        ts.prepareGrid();
        ts.title = lang.instant('typeOrganization.title');
    };
    CompanyTypeComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/companies/companytype/create');
    };
    CompanyTypeComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/companies/companytype/edit/" + data.id);
    };
    CompanyTypeComponent.ɵfac = function CompanyTypeComponent_Factory(t) { return new (t || CompanyTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    CompanyTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyTypeComponent, selectors: [["app-company-type"]], viewQuery: function CompanyTypeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function CompanyTypeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemclick", function CompanyTypeComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CompanyTypeComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CompanyTypeComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellselect", function CompanyTypeComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CompanyTypeComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return CompanyTypeComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-type',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "xMYf":
/*!*****************************************************!*\
  !*** ./src/app/pages/companies/companies.module.ts ***!
  \*****************************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/core.module */ "pKmL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./companies-routing.module */ "in5t");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index */ "N4Rd");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./companies.component */ "FV8i");
/* harmony import */ var _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./branch-office/edit-branch-office/edit-branch-office.component */ "8zK+");
/* harmony import */ var _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-type/company-type-form.component */ "rJ/c");
/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "AMIW");
/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "zrha");
/* harmony import */ var _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./points-of-sale/points-of-sale.component */ "Hhcw");
/* harmony import */ var _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./points-of-sale/points-of-sale-form.component */ "Q8/N");







/*
  * Translation
*/














var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompaniesModule });
    CompaniesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CompaniesModule_Factory(t) { return new (t || CompaniesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _companies_routing_module__WEBPACK_IMPORTED_MODULE_10__["CompaniesRoutingModule"],
                jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: function (http) {
                            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
                        },
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
            ]] });
    return CompaniesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompaniesModule, { declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["BranchOfficeComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["CompanyTypeComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["DepartmentsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["WineriesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
        _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_13__["EditBranchOfficeComponent"],
        _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_14__["CompanyTypeFormComponent"],
        _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_15__["EditWineriesComponent"],
        _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_16__["EditDepartmensComponent"],
        _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_17__["PointsOfSaleComponent"],
        _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_18__["PointsOfSaleFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _companies_routing_module__WEBPACK_IMPORTED_MODULE_10__["CompaniesRoutingModule"],
        jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompaniesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _companies_routing_module__WEBPACK_IMPORTED_MODULE_10__["CompaniesRoutingModule"],
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: function (http) {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                ],
                declarations: [
                    _companies_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["BranchOfficeComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["CompanyTypeComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["DepartmentsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["WineriesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
                    _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_13__["EditBranchOfficeComponent"],
                    _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_14__["CompanyTypeFormComponent"],
                    _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_15__["EditWineriesComponent"],
                    _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_16__["EditDepartmensComponent"],
                    _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_17__["PointsOfSaleComponent"],
                    _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_18__["PointsOfSaleFormComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zrha":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditDepartmensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDepartmensComponent", function() { return EditDepartmensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _services_companies_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/companies/index */ "mm0L");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");



















var _c0 = ["focusElement"];
function EditDepartmensComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var branch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branch_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", branch_r2.branch_name, " ");
} }
var EditDepartmensComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditDepartmensComponent, _super);
    function EditDepartmensComponent(fb, msg, api, router, translate, aRouter, spinner, types, branch) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.types = types;
        _this.branch = branch;
        _this.branch_office = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            department_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            branch_office_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]]
        });
        return _this;
    }
    Object.defineProperty(EditDepartmensComponent.prototype, "invalidName", {
        get: function () {
            return this.customForm.get('department_name').invalid && this.customForm.get('department_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditDepartmensComponent.prototype, "invalidBranch", {
        get: function () {
            return (this.customForm.get('branch_office_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    EditDepartmensComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.title = 'Crear/Editar departamentos';
        ts.PutURL = '/companies/departments/update/';
        ts.PostURL = '/companies/departments/create';
        ts.branch.getData({}).subscribe(function (resp) {
            ts.branch_office = resp;
        });
    };
    EditDepartmensComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.types.getData({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        branch_office_id: resp[0].branch_office_id,
                        department_name: resp[0].department_name,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditDepartmensComponent.ɵfac = function EditDepartmensComponent_Factory(t) { return new (t || EditDepartmensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_7__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_7__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"])); };
    EditDepartmensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditDepartmensComponent, selectors: [["app-edit-departmens"]], viewQuery: function EditDepartmensComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 33, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "formControlName", "department_name", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["formControlName", "branch_office_id", "required", "", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function EditDepartmensComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ng-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, EditDepartmensComponent_ng_option_31_Template, 2, 2, "ng-option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "app-footer-form", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditDepartmensComponent_Template_app_footer_form_closeEvent_33_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditDepartmensComponent_Template_app_footer_form_saveAndCreateEvent_33_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditDepartmensComponent_Template_app_footer_form_saveAndCloseEvent_33_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 19, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 23, "departments.title")), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 25, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 27, "departments.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 29, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 31, "departments.branch"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidBranch);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.branch_office);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_11__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
    return EditDepartmensComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditDepartmensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-departmens',
                templateUrl: './edit-departmens.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_7__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_7__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=companies-companies-module.js.map