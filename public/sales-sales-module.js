(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"],{

/***/ "4o6l":
/*!**************************************************************!*\
  !*** ./src/app/pages/sales/customers/customers.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");




// Services










var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function CustomersComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var CustomersComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomersComponent, _super);
    function CustomersComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Clientes';
        return _this;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    CustomersComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        ts.crudApi = {
            create: '/persons/create',
            read: '/persons/customers',
            update: '/persons/update/',
            delete: '/persons/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'company_name', type: 'string' },
            { name: 'dni', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'full_name', type: 'string' },
        ];
        ts.sourceColumns =
            [
                { text: 'Mostrar nombre como', datafield: 'full_name', align: 'center' },
                { text: 'DNI', datafield: 'dni', align: 'center', minWidth: 100, cellsalign: 'right' },
                { text: 'Empresa', datafield: 'company_name', align: 'center' },
            ];
        this.prepareGrid();
    };
    CustomersComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/sales/customers/create');
    };
    CustomersComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/sales/customers/edit/" + data.id);
    };
    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], viewQuery: function CustomersComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function CustomersComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CustomersComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomersComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function CustomersComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CustomersComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 22, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 26, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 28, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 30, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 32, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 34, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 36, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return CustomersComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_3__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "Bz/z":
/*!************************************************************!*\
  !*** ./src/app/pages/sales/check-in/check-in.component.ts ***!
  \************************************************************/
/*! exports provided: CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return CheckInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jqwidgets-ng/jqxdatatable */ "3HhI");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/global/reports.service */ "PU63");
/* harmony import */ var _services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/global/documents.service */ "4IXu");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../services/general/index */ "PcHl");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../services/products/index */ "UnFQ");
/* harmony import */ var _core_components_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../core/components/forms */ "xg8E");
/* harmony import */ var _services_companies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../services/companies */ "mm0L");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-currency */ "Schs");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-doc-viewer */ "w4ga");











// Services


























var _c0 = ["customGrid"];
var _c1 = ["myDataTable"];
var _c2 = ["searchField"];
var _c3 = ["cashele"];
var _c4 = ["searchbar"];
var _c5 = ["myTabs"];
function CheckInComponent_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var doc_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", doc_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", doc_r14.code, " - ", doc_r14.voucher_name, " ");
} }
function CheckInComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var customer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", customer_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", customer_r15.dni, " - ", customer_r15.full_name, " - ", customer_r15.company_name, " ");
} }
function CheckInComponent_ng_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cur_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cur_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/flags/" + cur_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cur_r16.CurrencyName, " ");
} }
function CheckInComponent_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var point_of_sale_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", point_of_sale_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", point_of_sale_r17.branch_name, " ");
} }
function CheckInComponent_div_74_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var itemres_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", itemres_r18.unit_name, " - ", itemres_r18.abbre_unit, "");
} }
function CheckInComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_div_74_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); var itemres_r18 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.onClickItem(itemres_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h6", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CheckInComponent_div_74_p_14_Template, 2, 2, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var itemres_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](itemres_r18.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", itemres_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 6, itemres_r18.sale_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", itemres_r18.product_name, " - ", itemres_r18.abbre_unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", itemres_r18.unit_name.length > 0);
} }
function CheckInComponent_ng_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var doc_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", doc_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", doc_r23.code, " - ", doc_r23.voucher_name, " ");
} }
function CheckInComponent_ng_template_154_ng_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", payment_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", payment_r31.code, " - ", payment_r31.payment_method, " ");
} }
function CheckInComponent_ng_template_154_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mean_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", mean_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", mean_r32.code, " - ", mean_r32.payment_method, " ");
} }
function CheckInComponent_ng_template_154_ng_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var timel_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", timel_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", timel_r33.term_name, " ");
} }
function CheckInComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Guardar documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_ng_template_154_Template_button_click_3_listener() { var modal_r24 = ctx.$implicit; return modal_r24.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Forma de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ng-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckInComponent_ng_template_154_Template_ng_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r35.onPaymenMethods($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CheckInComponent_ng_template_154_ng_option_13_Template, 2, 3, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Medio de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ng-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CheckInComponent_ng_template_154_ng_option_20_Template, 2, 3, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Fecha de emisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckInComponent_ng_template_154_Template_input_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r37.onDate(_r27.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Plazo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ng-select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckInComponent_ng_template_154_Template_ng_select_change_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.onTimeLimits($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CheckInComponent_ng_template_154_ng_option_34_Template, 2, 2, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Fecha de vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "input", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckInComponent_ng_template_154_Template_input_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.onExpirationDate(_r29.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Efectivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "input", 102, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function CheckInComponent_ng_template_154_Template_input_keyup_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](54); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r40.onChaneCash(_r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_ng_template_154_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](157); return ctx_r41.onSave(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_ng_template_154_Template_button_click_66_listener() { var modal_r24 = ctx.$implicit; return modal_r24.close("Cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.paymentMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.meansPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx_r11.isCounted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.timeLimits);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r11.customForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](65, 7, "buttons.save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](70, 9, "buttons.cancel"), " ");
} }
function CheckInComponent_ng_template_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Visor de documentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_ng_template_156_Template_button_click_3_listener() { var modal_r43 = ctx.$implicit; return modal_r43.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngx-doc-viewer", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r13.pathfile);
} }
var CheckInComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckInComponent, _super);
    function CheckInComponent(fb, msg, api, router, translate, aRouter, resSer, perSer, currSer, reporstSer, itemsSer, spinner, documents, branch, modalService) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.resSer = resSer;
        _this.perSer = perSer;
        _this.currSer = currSer;
        _this.reporstSer = reporstSer;
        _this.itemsSer = itemsSer;
        _this.spinner = spinner;
        _this.documents = documents;
        _this.branch = branch;
        _this.modalService = modalService;
        _this.title = 'Productos/Servicios';
        _this.aDocuments = [];
        _this.customers = [];
        _this.currency = [];
        _this.items = [];
        _this.itemsResult = [];
        _this.lines = [];
        _this.timeLimits = [];
        _this.paymentMethods = [];
        _this.meansPayment = [];
        _this.points_of_sale = [];
        _this.selectedRow = false;
        _this.isCounted = true;
        _this.rowIndex = -1;
        _this.pathfile = "";
        _this.source = {
            localdata: _this.lines,
            datatype: "array",
            datafields: [
                { name: 'product_class_name', type: 'string' },
                { name: 'sku', type: ' string' },
                { name: 'image', type: ' string' },
                { name: 'unit_name', type: ' string' },
                { name: 'unit_description', type: ' string' },
                { name: 'abbre_unit', type: ' string' },
                { name: 'qr_code', type: 'string' },
                { name: 'product_name', type: 'string' },
                { name: 'notes', type: 'string' },
                { name: 'description_sales', type: 'string' },
                { name: 'shopping_description', type: 'string' },
                { name: 'barcode', type: 'string' },
                { name: 'rate_name', type: 'string' },
                { name: 'internal_code', type: 'string' },
                { name: 'state', type: 'number' },
                { name: 'quantity', type: 'number' },
                { name: 'total', type: 'number' },
                { name: 'discount', type: 'number' },
                { name: 'sale_price', type: 'number' },
                { name: 'purchase_cost', type: 'number' },
                { name: 'tax_sales', type: 'number' },
                { name: 'tax_amount', type: 'number' },
                { name: 'tax_bill', type: 'number' },
                { name: 'tax_bill_rate', type: 'number' },
                { name: 'tax_sale_rate', type: 'number' },
                { name: 'stock_min', type: 'number' },
                { name: 'stock_max', type: 'number' },
                { name: 'tax_sales_id', type: 'number' },
                { name: 'brand_id', type: ' number' },
                { name: 'stock', type: ' number' },
                { name: 'category_id', type: ' number' },
                { name: 'product_unit_id', type: ' number' },
                { name: 'factor', type: ' number' },
                { name: 'sub_category_id', type: ' number' },
                { name: 'percentage_gain', type: 'number' },
                { name: 'tax_bill_id', type: 'number' },
                { name: 'item_type_id', type: 'number' },
                { name: 'unit_id', type: 'number' },
                { name: 'base_factor', type: 'number' },
                { name: 'class_id', type: 'number' },
                { name: 'average_cost', type: 'number' },
                { name: 'recipe', type: 'boolean' },
                { name: 'vat_included', type: 'boolean' },
                { name: 'selling_out_of_inventory', type: 'boolean' },
                { name: 'perishable', type: 'boolean' },
                { name: 'id', type: 'number' },
            ]
        };
        _this.dataAdapter = new jqx.dataAdapter(_this.source);
        _this.columns = [
            { text: 'Detalle', dataField: 'product_name', minWidth: 200, align: 'center', cellsAlign: 'center', editable: false },
            { text: 'Cant', dataField: 'quantity', width: 60, align: 'center', cellsAlign: 'right' },
            { text: 'U.M', dataField: 'abbre_unit', minWidth: 40, width: 40, align: 'center', cellsAlign: 'center', editable: false },
            { text: 'Precio', dataField: 'sale_price', width: 100, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'IVA', editable: false, dataField: 'tax_sales', width: 50, align: 'center', cellsAlign: 'right' },
            { text: 'Vr. IVA', editable: false, dataField: 'tax_amount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Descuento', dataField: 'discount', width: 120, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Motivo Dtco', dataField: 'reason', width: 150, align: 'right', cellsAlign: 'right' },
            { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2', editable: false },
        ];
        _this.editSettings = {
            saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true,
            saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
        };
        _this.theme = 'bootstrap';
        _this.source2 = {
            localdata: [],
            datafields: [
                { name: 'CurrencyISO', type: 'string' },
                { name: 'Money', type: 'string' },
                { name: 'active', type: 'number' },
                { name: 'address', type: 'string' },
                { name: 'apply_notes', type: 'boolean' },
                { name: 'cash', type: 'number' },
                { name: 'code_ad', type: 'string' },
                { name: 'company_id', type: 'number' },
                { name: 'company_name', type: 'string' },
                { name: 'cufe', type: 'string' },
                { name: 'currency_id', type: 'number' },
                { name: 'customer_id', type: 'number' },
                { name: 'denomination', type: 'string' },
                { name: 'discount', type: 'number' },
                { name: 'dni', type: 'string' },
                { name: 'document_name', type: 'string' },
                { name: 'dv', type: 'string' },
                { name: 'electronic', type: 'boolean' },
                { name: 'email', type: 'string' },
                { name: 'expiration_date', type: 'string' },
                { name: 'id', type: 'number' },
                { name: 'image', type: 'string' },
                { name: 'invoice_date', type: 'string' },
                { name: 'invoice_name', type: 'string' },
                { name: 'invoice_nro', type: 'string' },
                { name: 'invoice_time', type: 'string' },
                { name: 'invoice_type_id', type: 'number' },
                { name: 'location', type: 'string' },
                { name: 'means_name', type: 'string' },
                { name: 'means_payment_id', type: 'number' },
                { name: 'merchant_registration', type: 'string' },
                { name: 'mobile', type: 'string' },
                { name: 'months', type: 'number' },
                { name: 'name_city', type: 'string' },
                { name: 'name_department', type: 'string' },
                { name: 'notes', type: 'string' },
                { name: 'path_report', type: 'string' },
                { name: 'payment_change', type: 'string' },
                { name: 'payment_method', type: 'string' },
                { name: 'payment_method_id', type: 'number' },
                { name: 'phone', type: 'string' },
                { name: 'plural_name', type: 'string' },
                { name: 'postal_code', type: 'string' },
                { name: 'prefix', type: 'string' },
                { name: 'prefix_doc', type: 'string' },
                { name: 'qrcode', type: 'string' },
                { name: 'singular_name', type: 'string' },
                { name: 'status', type: 'number' },
                { name: 'subtotal', type: 'number' },
                { name: 'tax_value', type: 'number' },
                { name: 'tax_amount', type: 'number' },
                { name: 'tax_sale_rate', type: 'number' },
                { name: 'taxlevel', type: 'string' },
                { name: 'taxregime', type: 'string' },
                { name: 'term_value', type: 'number' },
                { name: 'time_limit', type: 'string' },
                { name: 'total', type: 'number' },
                { name: 'stock', type: 'number' },
                { name: 'total_allowance', type: 'number' },
                { name: 'total_charges', type: 'number' },
                { name: 'typeorganization', type: 'string' },
                { name: 'username', type: 'string' },
                { name: 'voucher_name', type: 'string' },
                { name: 'zipkey', type: 'string' }
            ],
            datatype: 'array'
        };
        _this.dataAdapter2 = new jqx.dataAdapter(_this.source2);
        _this.cellClass = function (row, columnfield, value) {
            var rec = _this.customGrid.getrowdata(row);
            console.log(rec);
            if (rec.status == 1) {
                return 'fas-fa-ok-thumbs fa-cursor';
            }
            else if (rec.status == 2) {
                return 'fas-fa-error fa-cursor';
            }
            else if (rec.electronic == 0) {
                return 'fas-fa-ok fa-cursor';
            }
            else {
                return 'fas-fa-warning fa-cursor';
            }
        };
        _this.columns2 = [
            {
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#mail_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    return '<span><i class="fas fa-envelope-open-text fa-cursor fas-fa-mail"></span>';
                },
            },
            {
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#pdf_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    return '<span><i class="fas fa-file-pdf fa-cursor fas-fa-pdf"></i></span>';
                },
            },
            {
                columngroup: 'Actions',
                text: '', filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#cancel_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    var rec = _this.customGrid.getrowdata(row);
                    if (rec.active == 1) {
                        return '<i class="fas fa-check-double fas-fa-ok fa-cursor">';
                    }
                    else {
                        return '<i class="fas fa-ban fas-fa-delete fa-cursor"></i>';
                    }
                },
            },
            { text: 'Factura Nº.', dataField: 'invoice_nro', width: 80, cellsalign: 'right' },
            { text: 'Pref', dataField: 'prefix', width: 50 },
            { text: 'Adquiriente', dataField: 'company_name', minwidth: 350 },
            { text: 'Documento', dataField: 'dni', width: 90, cellsalign: 'right' },
            { text: 'Total', dataField: 'total', cellsalign: 'right', width: 120, cellsformat: 'c2' },
            { text: 'Moneda', dataField: 'Money', width: 90 },
            { text: 'Fecha', dataField: 'invoice_date', width: 90 },
            { text: 'Estado', dataField: 'active', width: 90, cellsrenderer: function (riw, column, value) {
                    switch (value) {
                        case 1:
                            return '<p class="active-green">Activa</p>';
                            break;
                        default:
                            return '<p class="active-red">Anulada</p>';
                            break;
                    }
                }
            },
        ];
        _this.customForm = _this.fb.group({
            invoice_date: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            expiration_date: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            invoice_type_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            currency_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customer_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            point_of_sale_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            discount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            cash: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            payment_change: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            vat: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subtotal: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            means_payment_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            payment_method_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            time_limit_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        var fecha = new Date();
        fecha.setDate(fecha.getDate() - 60);
        _this.modalForm = _this.fb.group({
            date_from: [fecha.toISOString().split('T')[0]],
            date_up: [new Date().toISOString().split('T')[0]],
            invoice_type_id: [''],
        });
        return _this;
    }
    CheckInComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var frm = ts.customForm;
        ts.showSpinner();
        var param = {
            where: JSON.stringify({ "category_id": "1", "active": "1" })
        };
        ts.resSer.getAccountingDocuments(param).subscribe(function (resp) {
            ts.aDocuments = resp;
            frm.get('invoice_type_id').setValue(resp[0].id);
            _this.modalForm.get('invoice_type_id').setValue(resp[0].id);
        });
        ts.currSer.getData({}).subscribe(function (resp) {
            ts.currency = resp;
            if (resp.length > 0) {
                var nal = resp.find(function (ele) { return ele.national_currency == 1; });
                if (nal) {
                    frm.get('currency_id').setValue(nal.id);
                }
                else {
                    frm.get('currency_id').setValue(resp[0].id);
                }
            }
        });
        ts.documents.getPaymentMethods({}).subscribe(function (resp) {
            ts.paymentMethods = resp;
        });
        ts.documents.getMeansPayment({}).subscribe(function (resp) {
            ts.meansPayment = resp;
            frm.get('means_payment_id').setValue(resp[0].id);
        });
        ts.documents.getTimeLimits({}).subscribe(function (resp) {
            ts.timeLimits = resp;
        });
        ts.perSer.getCustomersAll().subscribe(function (resp) {
            ts.customers = resp;
            ts.hideSpinner();
        });
        ts.branch.getPointsOfSale({}).subscribe(function (resp) {
            ts.points_of_sale = resp;
            if (resp.length > 0) {
                ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
                ts.onRefresh();
            }
        });
    };
    CheckInComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
    };
    CheckInComponent.prototype.onChanegCustomer = function (e) {
        console.log(e);
    };
    CheckInComponent.prototype.onClickItem = function (i) {
        var ts = this;
        var line = i;
        var grid = ts.myDataTable;
        var rows = grid.getRows();
        // console.log(i);
        if (rows.length > 0) {
            var index_1 = -1;
            var filter = rows.find(function (item, i) {
                index_1 = i;
                return (item.id === line.id && item.product_unit_id === line.product_unit_id);
            });
            if (filter) {
                var quantity = filter.quantity + 1;
                grid.setCellValue(index_1, 'quantity', quantity);
                grid.clearSelection();
                grid.selectRow(index_1);
                // ts.msg.toastMessage('Aumentar cantidad', 'Se ha aumentado la cantidad.');
                ts.onLineTotal(filter, index_1);
            }
            else {
                line.discount = 0;
                line.total = 0;
                line.quantity = 1;
                grid.addRow(null, line, 'last');
                grid.clearSelection();
                grid.selectRow(rows.length - 1);
                ts.onLineTotal(line, rows.length - 1);
            }
        }
        else {
            line.discount = 0;
            line.total = 0;
            line.quantity = 1;
            grid.addRow(null, line, 'last');
            grid.clearSelection();
            grid.selectRow(rows.length - 1);
            ts.onLineTotal(line, 0);
        }
    };
    CheckInComponent.prototype.onRowSelect = function (event) {
        this.selectedRow = true;
        this.rowIndex = event.args.index;
    };
    ;
    CheckInComponent.prototype.onRowUnselect = function (event) {
        this.selectedRow = false;
        this.rowIndex = -1;
    };
    ;
    CheckInComponent.prototype.onCellEndEdit = function (e) {
        if (e.args.dataField != "reason") {
            if (e.args.displayValue == "") {
                this.myDataTable.setCellValue(e.args.index, e.args.dataField, 0);
            }
            var row = e.args.row;
            this.onLineTotal(row, e.args.index);
        }
    };
    CheckInComponent.prototype.onClearFilter = function () {
        var ts = this;
        ts.searchbar.nativeElement.value = '';
        ts.itemsResult = ts.items;
        ts.searchbar.nativeElement.focus;
    };
    CheckInComponent.prototype.onRefresh = function () {
        var ts = this;
        ts.showSpinner('Cargando listado de productos.');
        var point_of_sale_id = ts.customForm.get('point_of_sale_id').value;
        ts.itemsSer.getDataSales({ point_of_sale_id: point_of_sale_id }).subscribe(function (resp) {
            ts.items = resp;
            ts.hideSpinner();
            ts.itemsResult = ts.items;
        });
    };
    CheckInComponent.prototype.onSearchProducts = function (query) {
        var ts = this;
        ts.showSpinner();
        if (ts.items.length === 0 && query.length > 0) {
            ts.itemsSer.getDataSales({}).subscribe(function (resp) {
                ts.items = resp;
                ts.hideSpinner();
                ts.itemsResult = ts.items.filter(function (ele) { return ele.product_name.toLowerCase().indexOf(query.toLowerCase()) >= 0; });
            });
        }
        else {
            if (query.length > 0) {
                ts.itemsResult = ts.items.filter(function (ele) { return ele.product_name.toLowerCase().indexOf(query.toLowerCase()) >= 0; });
                ts.hideSpinner();
            }
            else {
                ts.itemsResult = ts.items;
                ts.hideSpinner();
            }
        }
    };
    CheckInComponent.prototype.onAdd = function () {
        var ts = this;
        var grid = ts.myDataTable;
        var row = grid.getSelection()[0];
        if (ts.rowIndex >= 0 && row) {
            var quantity = parseFloat(row.quantity.toString()) + 1;
            grid.setCellValue(ts.rowIndex, 'quantity', quantity);
            // ts.msg.toastMessage('Aumentar cantidad', 'Se ha aumentado la cantidad.');
            ts.onLineTotal(row, ts.rowIndex);
        }
        else {
            ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
        }
    };
    CheckInComponent.prototype.onDelete = function () {
        var ts = this;
        var grid = ts.myDataTable;
        if (ts.rowIndex >= 0) {
            grid.deleteRow(ts.rowIndex);
            ts.msg.toastMessage('Quitar cantidad', 'Se ha quitado una linea de venta.');
            ts.onSum();
        }
    };
    CheckInComponent.prototype.onMinus = function () {
        var ts = this;
        var grid = ts.myDataTable;
        var row = grid.getSelection()[0];
        if (ts.rowIndex < 0 && !row) {
            ts.msg.toastMessage('Seleccionar', 'Debe seleccionar una línea.', 4);
            return;
        }
        var quantity = parseFloat(row.quantity.toString()) - 1;
        if (quantity <= 0) {
            ts.msg.toastMessage('Quitar cantidad', 'No se puede dejar la cantidad en cero.', 3);
            return;
        }
        grid.setCellValue(ts.rowIndex, 'quantity', quantity);
        // ts.msg.toastMessage('Disminuir cantidad', 'Se ha disminuido la cantidad.');
        ts.onLineTotal(row, ts.rowIndex);
    };
    CheckInComponent.prototype.onCancel = function () {
        this.myDataTable.clear();
        this.onSum();
    };
    CheckInComponent.prototype.onCash = function (content) {
        var ts = this;
        var frm = ts.customForm;
        // const values  = frm.getRawValue();
        // if( parseFloat(values.customer_id) <= 0 && parseFloat(values.invoice_type_id) != 13 ){
        //   ts.msg.toastMessage('','Debe seleccionar un cliente',3);
        //   return;
        // }
        this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modal.result.then(function (result) {
            // console.log(result);
        }, function (reason) {
            console.log(reason);
        });
    };
    CheckInComponent.prototype.onLineTotal = function (ele, i) {
        var ts = this;
        var grid = ts.myDataTable;
        var tax = parseFloat(ele.tax_sale_rate.toString());
        var discount = parseFloat(ele.discount.toString());
        var unitCost = parseFloat(ele.sale_price.toString());
        var quantity = parseFloat(ele.quantity.toString());
        var total = (unitCost * quantity) - discount;
        var tax_value = total - (total / tax);
        grid.setCellValue(i, 'total', total);
        grid.setCellValue(i, 'tax_amount', tax_value);
        ts.onSum();
    };
    CheckInComponent.prototype.onSum = function () {
        var ts = this;
        var grid = ts.myDataTable;
        var subtotal = 0;
        var total = 0;
        var taxTotal = 0;
        var discount = 0;
        var frm = ts.customForm;
        var rows = grid.getRows();
        if (rows.length > 0) {
            rows.map(function (ele, i) {
                var subt = (ele.quantity * ele.sale_price);
                discount += ele.discount;
                subtotal += subt;
                total += ele.total;
                taxTotal += ele.tax_amount;
            });
        }
        frm.get('discount').setValue(discount);
        frm.get('subtotal').setValue(subtotal - taxTotal);
        frm.get('vat').setValue(taxTotal);
        frm.get('total').setValue(total);
        frm.get('cash').setValue(total);
        frm.get('payment_change').setValue(0);
    };
    CheckInComponent.prototype.onSave = function (content) {
        var _this = this;
        var ts = this;
        var frm = ts.customForm;
        var grid = ts.myDataTable;
        var rows = grid.getRows();
        if (rows.length == 0) {
            ts.msg.toastMessage('', 'No hay items para generar el documento.', 4);
            return;
        }
        var contin = true;
        rows.map(function (ele) {
            if (ele.quantity == 0) {
                ts.msg.toastMessage('', 'Hay un error en una de las lineas del documento.', 4);
                contin = false;
                return false;
            }
        });
        if (!contin) {
            return;
        }
        ;
        // console.log(frm.getRawValue());
        if (frm.invalid) {
            ts.msg.toastMessage('', 'El formulario contiene campos sin llenar.', 4);
            return;
        }
        var lines_detail = rows;
        var values = frm.getRawValue();
        values.lines = lines_detail;
        // console.log(values);
        var data = {
            records: JSON.stringify(values)
        };
        ts.showSpinner('Guardando el documento.');
        ts.modal.close();
        ts.api.post('/sales/create', data).subscribe(function (resp) {
            var ts = _this;
            ts.hideSpinner();
            if (resp.success) {
                ts.msg.toastMessage('', resp.message);
                ts.myDataTable.clear();
                ts.onSum();
                var path = "" + ts.api.getAppUrl() + resp.report.pathFile;
                ts.pathfile = path;
                ts.onViewDocs(content);
            }
            else {
                ts.msg.toastMessage('', resp.message, 4);
            }
            // console.log(resp.report);
        }, function (resp) {
            ts.msg.toastMessage('', resp.error.message, 4);
            ts.hideSpinner();
        });
    };
    CheckInComponent.prototype.onDate = function (e) {
        this.AddDays();
    };
    CheckInComponent.prototype.onChaneCash = function (e) {
        var ts = this;
        var frm = ts.customForm;
        var cashValue = parseFloat(frm.get('cash').value);
        var totlValue = parseFloat(frm.get('total').value);
        frm.get('payment_change').setValue(cashValue - totlValue);
    };
    CheckInComponent.prototype.onExpirationDate = function (e) {
        console.log(e);
    };
    CheckInComponent.prototype.onPaymenMethods = function (e) {
        var ts = this;
        ts.isCounted = (e === 1);
        if (ts.isCounted) {
            ts.customForm.get('time_limit_id').setValue(ts.timeLimits[0].id);
            ts.AddDays();
        }
    };
    CheckInComponent.prototype.onTimeLimits = function (e) {
        var ts = this;
        ts.AddDays();
    };
    CheckInComponent.prototype.AddDays = function () {
        var ts = this;
        var frm = ts.customForm;
        var sDate = frm.get('invoice_date').value;
        var adate = new Date(sDate);
        var select = ts.timeLimits.find(function (ele) { return ele.id === frm.get('time_limit_id').value; });
        if (select) {
            var days = select.months * select.term_value;
            adate.setDate(adate.getDate() + days);
            var dateStr = adate.toISOString().split('T')[0];
            frm.get('expiration_date').setValue(dateStr);
        }
    };
    CheckInComponent.prototype.onSearch = function () {
        var _this = this;
        var ts = this;
        var frm = ts.modalForm;
        var values = frm.getRawValue();
        ts.showSpinner();
        ts.customGrid.clear();
        ts.reporstSer.getSales({
            initDate: values.date_from,
            finalDate: values.date_up,
            typeId: values.invoice_type_id,
        }).subscribe(function (resp) {
            ts.hideSpinner();
            _this.source2.localdata = resp;
            _this.customGrid.updatebounddata('cells');
        }, function (err) {
            ts.hideSpinner();
            console.log(err);
        });
    };
    CheckInComponent.prototype.getWidth = function () {
        return '100%';
    };
    CheckInComponent.prototype.cellClick = function (event, content) {
        var ts = this;
        var data = event.args;
        var row = this.customGrid.getrowdata(data.rowindex);
        if (data.datafield === '#pdf_#') {
            if ((row.path_report && row.status == 1) || (row.path_report && !row.electronic)) {
                var path = "" + ts.api.getAppUrl() + row.path_report;
                ts.pathfile = path;
                ts.onViewDocs(content);
            }
            else {
                ts.showSpinner('Generando archivo...');
                ts.reporstSer.onInvoice(row)
                    .subscribe(function (resp) {
                    // console.log(resp);
                    var path = "" + ts.api.getAppUrl() + resp.pathFile;
                    ts.pathfile = path;
                    ts.hideSpinner();
                    ts.onSearch();
                    ts.onViewDocs(content);
                }, function () { return ts.hideSpinner(); });
            }
        }
        else if (data.datafield === '#send_#') {
            ts.sendDocument(row);
        }
        else if (data.datafield === '#mail_#') {
            ts.showSpinner('Enviando correo al cliente...');
            ts.reporstSer.onSendMail(row)
                .subscribe(function () { return ts.hideSpinner(); }, function () { return ts.hideSpinner(); });
        }
        else if (data.datafield === '#cancel_#') {
            ts.onCancelInvoice(row);
        }
    };
    CheckInComponent.prototype.onViewDocs = function (content) {
        if (this.cashele) {
            this.cashele.nativeElement.focus();
        }
        this.modal = this.modalService.open(content, { windowClass: 'fullscreen-modal', backdrop: false });
    };
    CheckInComponent.prototype.sendDocument = function (ele) {
        var ts = this;
        if (!ele.electronic) {
            ts.msg.toastMessage('', 'El documento documento no requiere validación por la DIAN.');
            return null;
        }
        if (ele.status === 1) {
            ts.msg.toastMessage('', 'El documento ya fue enviado y validado por la DIAN.');
            return null;
        }
        ts.showSpinner('Enviando documento a la DIAN...');
        ts.api.post("/sendInvoice/" + ele.id)
            .subscribe(function (resp) {
            // console.log(resp);
            if (resp.success) {
                ts.msg.toastMessage('', resp.message);
            }
            else {
                ts.msg.toastMessage('', resp.message, 4);
            }
            ts.onSearch();
            ts.hideSpinner();
        }, function () { return ts.hideSpinner(); });
    };
    /**
   * Genera informe de ventas
   */
    CheckInComponent.prototype.onReport = function (content) {
        var ts = this;
        var frm = ts.modalForm;
        var values = frm.getRawValue();
        ts.showSpinner('Generando informe de ventas');
        ts.reporstSer.getSalesReport({
            initDate: values.date_from,
            finalDate: values.date_up,
            typeId: values.invoice_type_id,
            typeReport: 1,
        }).subscribe(function (resp) {
            ts.hideSpinner();
            var path = "" + ts.api.getAppUrl() + resp.pathFile;
            ts.pathfile = path;
            ts.onViewDocs(content);
        }, function (err) {
            ts.hideSpinner();
            console.log(err);
        });
    };
    /** Anula o activa una factura */
    CheckInComponent.prototype.onCancelInvoice = function (ele) {
        var ts = this;
        var lang = ts.translate;
        if (ele.invoice_type_id == 4 || ele.invoice_type_id == 5) {
            ts.msg.toastMessage('', 'No se puede anular una nota contable.', 2);
            return false;
        }
        // if(ele.electronic && ele.status != 1) {
        //   ts.msg.toastMessage('', 'No se puede anular un documento sin validación por la DIAN.',2);
        //   return false;
        // }
        if (ele.active == 1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Anular factura',
                text: '¿Seguro que desea anular el documento?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: lang.instant('buttons.yes'),
                cancelButtonText: lang.instant('buttons.not')
            }).then(function (result) {
                if (result.value) {
                    ts.showSpinner('Procesando petición.');
                    ts.api.post("/sales/cancel/" + ele.id)
                        .subscribe(function (resp) {
                        ts.hideSpinner();
                        ts.onSearch();
                        ts.msg.toastMessage('', 'El documento se ha anulado.');
                    }, function (err) {
                        ts.msg.errorMessage('', err.error.message);
                    });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Activar factura anulada.',
                text: '¿Seguro que desea activar el documento anulado?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: lang.instant('buttons.yes'),
                cancelButtonText: lang.instant('buttons.not')
            }).then(function (result) {
                if (result.value) {
                    ts.showSpinner('Procesando petición.');
                    ts.api.post("/sales/activate/" + ele.id)
                        .subscribe(function (resp) {
                        ts.hideSpinner();
                        ts.onSearch();
                        ts.msg.toastMessage('', 'El documento se ha activado.');
                    }, function (err) {
                        ts.msg.errorMessage('', err.error.message);
                    });
                }
            });
        }
    };
    CheckInComponent.prototype.onCreateProduct = function () {
        localStorage.setItem('oldRoute', this.router.url);
        this.goRoute('pages/products/items/create');
    };
    CheckInComponent.ɵfac = function CheckInComponent_Factory(t) { return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_13__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_13__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_14__["ResolutionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_14__["PersonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_14__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_15__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_companies__WEBPACK_IMPORTED_MODULE_17__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"])); };
    CheckInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CheckInComponent, selectors: [["app-check-in"]], viewQuery: function CheckInComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c5, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.myDataTable = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.cashele = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchbar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.myTabs = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 161, vars: 63, consts: [[3, "formGroup"], [1, "search-custom", 3, "width", "height", "position", "animationType", "selectionTracker", "theme"], ["myTabs", ""], [2, "margin-left", "30px"], [1, "container-fluid", "padding-top-bottom"], [1, "row"], [1, "col-md-4"], [1, "form-group"], [1, "asterisk"], ["formControlName", "invoice_type_id", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["formControlName", "customer_id", "required", "", 3, "virtualScroll", "change"], ["value", "0"], [1, "col-md-6"], ["formControlName", "currency_id", "required", ""], ["fullWidth", "", "formControlName", "point_of_sale_id", "required", ""], [1, "col-md-5"], [1, "col"], [1, "page-search-input", "form-group"], [1, "input-group"], ["type", "search", "id", "searchbar", "placeholder", "B\u00FAsqueda", 1, "form-control", "rounded-right", "form-control-lg", "shadow", "pl-2", 3, "keyup.enter"], ["searchbar", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "search-btn", "rounded", "space-right", 3, "click"], [1, "d-none", "d-sm-block"], [1, "fas", "fa-search"], ["type", "button", "ngbTooltip", "Crear nuevo producto", 1, "btn", "btn-success", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-plus", "fas-fa-22"], ["type", "button", "ngbTooltip", "Refrescar", 1, "btn", "btn-info", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-sync", "fas-fa-22"], ["type", "button", "ngbTooltip", "Limpiar", 1, "btn", "btn-danger", "radius-button", 3, "click"], [1, "fas", "fa-broom", "fas-fa-22"], [1, "col", "card-col"], [1, "card-columns"], ["class", "card card-sales", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-7", "card-col"], [1, "col-sm-12", "col-md-12", "padding-top-bottom"], ["type", "button", 1, "btn", "radius-button", "btn-primary", "space-right", "radius-button", 3, "disabled", "click"], [1, "fas", "fa-trash-alt", "fas-fa-22"], ["type", "button", 1, "btn", "radius-button", "btn-success", "space-right", "radius-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "radius-button", "btn-danger", "space-right", 3, "disabled", "click"], [1, "fas", "fa-minus", "fas-fa-22"], ["type", "button", 1, "btn", "radius-button", "btn-info", "space-right", "radius-button", 3, "disabled", "click"], [1, "fas", "fa-money-bill", "fas-fa-22", "space-right"], ["type", "button", 1, "btn", "radius-button", "btn-danger", "radius-button", 3, "disabled", "click"], [1, "fas", "fa-broom", "fas-fa-22", "space-right"], ["currencyMask", "", "formControlName", "total", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "radius-button", "small", "total-bg"], [3, "source", "columns", "theme", "columnsResize", "editSettings", "altRows", "editable", "height", "width", "onRowSelect", "onRowUnselect", "onCellEndEdit"], ["myDataTable", ""], ["currencyMask", "", "formControlName", "subtotal", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "radius-button", "small", "total"], ["currencyMask", "", "formControlName", "discount", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "radius-button", "small", "discounts"], ["currencyMask", "", "formControlName", "vat", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "radius-button", "small", "vat"], ["currencyMask", "", "formControlName", "total", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "radius-button", "small", "total"], [1, "col-md-2"], ["for", ""], ["type", "date", "formControlName", "date_from", "aria-describedby", "helpId", 1, "form-control"], ["type", "date", "formControlName", "date_up", "aria-describedby", "helpId", 1, "form-control"], [1, "col-md-3", "padding-top-bottom"], ["role", "group", 1, "btn-group", "btn-group-md"], ["type", "button", 1, "btn", "btn-info", "mb-2", "mb-md-0", 3, "click"], [1, "fas", "fa-search", "fas-fa-22", "space-right"], ["type", "button", 1, "btn", "btn-success", "mb-2", "mb-md-0", 3, "click"], [1, "fas", "fa-newspaper", "fas-fa-22", "space-right"], [3, "width", "height", "source", "columns", "theme", "selectionmode", "columnsresize", "sortable", "filterable", "onCellselect"], ["customGrid", ""], ["content", ""], ["class", "fullscreen-modal"], ["contentpdf", ""], [2, "color", "white"], [3, "value"], ["height", "15", "width", "15", 3, "src"], [1, "card", "card-sales", 3, "click"], [1, "card-body"], [1, "stock"], [1, "span"], [1, "img-top"], ["fallimg", "product", 1, "img-product", "card-img-top", 3, "src"], [1, "price"], [1, "product-name"], ["class", "unit-name", 4, "ngIf"], [1, "unit-name"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row", "align-items-center"], [1, "col-lg-5", "col-6"], [1, "col-lg-7", "col-6"], ["formControlName", "payment_method_id", "ngbAutofocus", "", "autofocus", "", 3, "change"], ["formControlName", "means_payment_id"], ["type", "date", "formControlName", "invoice_date", 1, "form-control", 3, "change"], ["invoicedate", ""], [1, "col-lg-5", "col-3"], [1, "col-lg-7", "col-9"], ["formControlName", "time_limit_id", 3, "readonly", "change"], ["type", "date", "formControlName", "expiration_date", "readonly", "", 1, "form-control", 3, "change"], ["expirationdate", ""], [1, "col-lg-2", "col-3"], [1, "col-lg-10", "col-9"], ["currencyMask", "", "formControlName", "total", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "total-bg"], ["currencyMask", "", "type", "text", "formControlName", "cash", "aria-describedby", "helpId", "ngbAutofocus", "", "autofocus", "", 1, "form-control", "total-bg", 3, "keyup"], ["cashele", ""], ["currencyMask", "", "formControlName", "payment_change", "aria-describedby", "helpId", "readonly", "", 1, "form-control", "total-bg"], [1, "modal-footer"], ["type", "button", 1, "btn", "radius-button", "btn-sm", "btn-primary", "space-right", 3, "disabled", "click"], [1, "fas", "fa-save", "fas-fa-22", "space-right"], [1, "btn", "radius-button", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], ["viewer", "url", 2, "width", "100%", "height", "100vh", 3, "url"]], template: function CheckInComponent_Template(rf, ctx) { if (rf & 1) {
            var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "jqxTabs", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "FACTURACI\u00D3N");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "DOCUMENTOS GENERADOS");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Tipo de documento");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ng-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CheckInComponent_ng_option_18_Template, 2, 3, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Cliente");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CheckInComponent_Template_ng_select_change_26_listener($event) { return ctx.onChanegCustomer($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "222222222222 - Consumidor final");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CheckInComponent_ng_option_29_Template, 2, 4, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ng-select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CheckInComponent_ng_option_40_Template, 3, 3, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Punto de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ng-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Seleccionar punto de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, CheckInComponent_ng_option_51_Template, 2, 2, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "input", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function CheckInComponent_Template_input_keyup_enter_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60); return ctx.onSearchProducts(_r5.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60); return ctx.onSearchProducts(_r5.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_65_listener() { return ctx.onCreateProduct(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_67_listener() { return ctx.onRefresh(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_69_listener() { return ctx.onClearFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, CheckInComponent_div_74_Template, 15, 8, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_78_listener() { return ctx.onDelete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_80_listener() { return ctx.onAdd(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_82_listener() { return ctx.onMinus(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](155); return ctx.onCash(_r10); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Cobrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_87_listener() { return ctx.onCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Cancelar");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "input", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "jqxDataTable", 48, 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onRowSelect", function CheckInComponent_Template_jqxDataTable_onRowSelect_94_listener($event) { return ctx.onRowSelect($event); })("onRowUnselect", function CheckInComponent_Template_jqxDataTable_onRowUnselect_94_listener($event) { return ctx.onRowUnselect($event); })("onCellEndEdit", function CheckInComponent_Template_jqxDataTable_onCellEndEdit_94_listener($event) { return ctx.onCellEndEdit($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, " Subtotal");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Descuento");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "input", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, " IVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "input", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, " Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](117, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Fecha desde");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "input", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Fecha hasta");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](130, "input", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](136, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Tipo de documento");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "ng-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, CheckInComponent_ng_option_139_Template, 2, 3, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "button", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_142_listener() { return ctx.onSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](143, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](145, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckInComponent_Template_button_click_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](157); return ctx.onReport(_r12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](147, "i", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](149, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "jqxGrid", 64, 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onCellselect", function CheckInComponent_Template_jqxGrid_onCellselect_152_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](157); return ctx.cellClick($event, _r12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, CheckInComponent_ng_template_154_Template, 71, 11, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, CheckInComponent_ng_template_156_Template, 8, 1, "ng-template", 67, 68, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "100%")("height", 900)("position", "top")("animationType", "fade")("selectionTracker", false)("theme", ctx.theme);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 47, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.aDocuments);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 49, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.customers);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 51, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 53, "general.currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 55, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.points_of_sale);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemsResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedRow);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedRow);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedRow);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedRow);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.selectedRow);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("source", ctx.dataAdapter)("columns", ctx.columns)("theme", ctx.theme)("columnsResize", true)("editSettings", ctx.editSettings)("altRows", true)("editable", true)("height", 300)("width", ctx.getWidth());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.modalForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](136, 57, "general.asterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.aDocuments);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](145, 59, "buttons.search"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](149, 61, "buttons.report"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", ctx.getWidth())("height", 550)("source", ctx.dataAdapter2)("columns", ctx.columns2)("theme", ctx.theme)("selectionmode", "singlecell")("columnsresize", true)("sortable", true)("filterable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.maskSpinner, " ");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_9__["jqxTabsComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["ɵr"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_20__["CurrencyMaskDirective"], jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_8__["jqxDataTableComponent"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_21__["NgxDocViewerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["CurrencyPipe"]], styles: [".create-customer[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  background-color: #a50721 !important;\n  color: #ffffff !important;\n}\n\n.search-custom[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 10px;\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.322);\n  padding-bottom: 5px !important;\n}\n\n.card-col[_ngcontent-%COMP%] {\n  max-height: 770px;\n  min-height: 200px;\n  overflow: auto;\n}\n\n.card-col-product[_ngcontent-%COMP%] {\n  max-height: 200px;\n  min-height: 100px;\n  overflow: auto;\n}\n\n.discounts[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n\n.total[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.total-bg[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.vat[_ngcontent-%COMP%] {\n  color: blue;\n  font-weight: bold;\n}\n\n.padding-card[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.padding-2[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.card-sales[_ngcontent-%COMP%] {\n  margin: 5px !important;\n  min-height: 120px !important;\n  box-shadow: 0px 2px 6px 0px rgba(50, 50, 50, 0.322);\n  border: 2px solid rgba(255, 255, 255, 0.247);\n}\n\n.card-sales[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: right;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .stock[_ngcontent-%COMP%] {\n  background-color: #173afdcb;\n  text-align: right;\n  padding: 4px;\n  width: 67%;\n  max-width: 120px;\n  margin-left: auto;\n  z-index: 2;\n  height: 24px;\n  border-radius: 10px 0px 10px 0px;\n  position: absolute;\n}\n\n.card-sales[_ngcontent-%COMP%]   .stock[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0px !important;\n}\n\n.card-sales[_ngcontent-%COMP%]   .unit-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0px !important;\n  color: white;\n  background-color: #470147;\n  padding: 2px;\n  border-radius: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%] {\n  max-width: 62px;\n  display: block;\n  margin: auto;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.75);\n  border-radius: 10px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 2px solid #173afd1f;\n}\n\n.card-sales[_ngcontent-%COMP%]::-moz-selection {\n  border: blueviolet 2px solid;\n}\n\n.card-sales[_ngcontent-%COMP%]::selection {\n  border: blueviolet 2px solid;\n}\n\n\n\n[_nghost-%COMP%]     .switchery-primary .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-primary .switch.checked {\n  background: #975AFF;\n}\n\n[_nghost-%COMP%]     .switchery-info .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-info .switch.checked {\n  background: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .switchery-success .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-success .switch.checked {\n  background: #40C057;\n}\n\n[_nghost-%COMP%]     .switchery-warning .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-warning .switch.checked {\n  background: #F77E17;\n}\n\n[_nghost-%COMP%]     .switchery-danger .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-danger .switch.checked {\n  background: #F55252;\n}\n\n[_nghost-%COMP%]     .switchery-secondary .switch {\n  background: #fff;\n}\n\n[_nghost-%COMP%]     .switchery-secondary .switch.checked {\n  background: #616D89;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlY2staW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7Q0FBRjs7QUFHQTtFQUNFLCtCQUFBO0VBQ0Esb0JBQUE7RUFHQSxvREFBQTtFQUNBLCtCQUFBO0NBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtDQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7Q0FBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtDQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0NBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0NBQ0Y7O0FBRUE7RUFDRSxhQUFBO0NBQ0Y7O0FBRUE7RUFDRSxhQUFBO0NBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBR0Esb0RBQUE7RUFDQSw2Q0FBQTtDQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NBRUo7O0FBQUU7RUFDRSxhQUFBO0NBRUo7O0FBT0U7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0NBTEo7O0FBTUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtDQUpOOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtDQUxKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtDQUxKOztBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtDQUxKOztBQU1JO0VBR0UsbURBQUE7RUFDQSxvQkFBQTtDQUpOOztBQU9FO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7Q0FMSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7Q0FMSjs7QUFPRTtFQUNFLDZCQUFBO0NBTEo7O0FBSUU7RUFDRSw2QkFBQTtDQUxKOztBQWdCQSxvQkFBQTs7QUFHRTtFQUNFLGlCQUFBO0NBZko7O0FBZ0JJO0VBQ0Usb0JBQUE7Q0FkTjs7QUFvQkU7RUFDRSxpQkFBQTtDQWpCSjs7QUFrQkk7RUFDRSxvQkFBQTtDQWhCTjs7QUFzQkU7RUFDRSxpQkFBQTtDQW5CSjs7QUFvQkk7RUFDRSxvQkFBQTtDQWxCTjs7QUF3QkU7RUFDRSxpQkFBQTtDQXJCSjs7QUFzQkk7RUFDRSxvQkFBQTtDQXBCTjs7QUEwQkU7RUFDRSxpQkFBQTtDQXZCSjs7QUF3Qkk7RUFDRSxvQkFBQTtDQXRCTjs7QUE0QkU7RUFDRSxpQkFBQTtDQXpCSjs7QUEwQkk7RUFDRSxvQkFBQTtDQXhCTiIsImZpbGUiOiJjaGVjay1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3JlYXRlLWN1c3RvbWVyIHtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDcsIDMzKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICBib3gtc2hhZG93OiAgICAgICAgIDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbCAge1xyXG4gIG1heC1oZWlnaHQ6IDc3MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1jb2wtcHJvZHVjdCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kaXNjb3VudHMgIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3RhbCAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvdGFsLWJnICB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZhdCAge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucGFkZGluZy1jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTIge1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmNhcmQtc2FsZXMge1xyXG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNnB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAycHggNnB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICBib3gtc2hhZG93OiAgICAgICAgIDBweCAycHggNnB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMzIyKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQ3KTtcclxuICAucHJpY2UgIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIC8vICY6aG92ZXIge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvLyAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vICAgLnByaWNlIHtcclxuICAgIC8vICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbiAgLnN0b2NrICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczYWZkY2I7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHdpZHRoOiA2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAuc3BhbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2R1Y3QtbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudW5pdC1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMSwgNzEpO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuaW1nLXByb2R1Y3Qge1xyXG4gICAgbWF4LXdpZHRoOiA2MnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgICBib3gtc2hhZG93OiAgICAgICAgIDBweCAycHggOHB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE3M2FmZDFmO1xyXG4gIH1cclxuICAmOjpzZWxlY3Rpb257XHJcbiAgICBib3JkZXI6IGJsdWV2aW9sZXQgMnB4IHNvbGlkO1xyXG4gIH1cclxuICAvLyAuY2FyZC1jb250ZW50IHtcclxuICAvLyAgICY6aG92ZXJ7XHJcbiAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzNhZmQ7XHJcbiAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcblxyXG4vKioqKiBzd2l0Y2ggKioqKioqL1xyXG5cclxuOmhvc3QgIDo6bmctZGVlcCAuc3dpdGNoZXJ5LXByaW1hcnkge1xyXG4gIC5zd2l0Y2gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICYuY2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5NzVBRkY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCAgOjpuZy1kZWVwIC5zd2l0Y2hlcnktaW5mbyB7XHJcbiAgLnN3aXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgJi5jaGVja2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzJGOEJFNjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoZXJ5LXN1Y2Nlc3Mge1xyXG4gIC5zd2l0Y2gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICYuY2hlY2tlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0MEMwNTc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaGVyeS13YXJuaW5nIHtcclxuICAuc3dpdGNoIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAmLmNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjc3RTE3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2hlcnktZGFuZ2VyIHtcclxuICAuc3dpdGNoIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAmLmNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjU1MjUyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2hlcnktc2Vjb25kYXJ5IHtcclxuICAuc3dpdGNoIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAmLmNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjE2RDg5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
    return CheckInComponent;
}(_core_components_forms__WEBPACK_IMPORTED_MODULE_16__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CheckInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'app-check-in',
                templateUrl: './check-in.component.html',
                styleUrls: ['./check-in.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_13__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_13__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_14__["ResolutionsService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_14__["PersonsService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_14__["CurrencySysService"] }, { type: _services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_15__["ItemsService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"] }, { type: _services_companies__WEBPACK_IMPORTED_MODULE_17__["BranchOfficeService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], myDataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['myDataTable', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['searchField']
        }], cashele: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['cashele']
        }], searchbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['searchbar']
        }], myTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['myTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "QANN":
/*!*****************************************************!*\
  !*** ./src/app/pages/sales/sales-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function() { return SalesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales.component */ "TVXh");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "pjNq");






var routes = [{
        path: '',
        component: _sales_component__WEBPACK_IMPORTED_MODULE_2__["SalesComponent"],
        children: [
            {
                path: 'pos',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CheckInComponent"],
            },
            {
                path: 'customers',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
            },
            {
                path: 'customers/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]
            },
            {
                path: 'customers/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CustomerFormComponent"]
            },
        ],
    }];
var SalesRoutingModule = /** @class */ (function () {
    function SalesRoutingModule() {
    }
    SalesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SalesRoutingModule });
    SalesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SalesRoutingModule_Factory(t) { return new (t || SalesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SalesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TVXh":
/*!************************************************!*\
  !*** ./src/app/pages/sales/sales.component.ts ***!
  \************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var SalesComponent = /** @class */ (function () {
    function SalesComponent() {
    }
    SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(); };
    SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 1, vars: 0, template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return SalesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "U1Ny":
/*!*********************************************!*\
  !*** ./src/app/pages/sales/sales.module.ts ***!
  \*********************************************/
/*! exports provided: customCurrencyMaskConfig, SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customCurrencyMaskConfig", function() { return customCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxdatatable */ "3HhI");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-currency */ "Schs");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-doc-viewer */ "w4ga");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../core/core.module */ "pKmL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sales-routing.module */ "QANN");
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sales.component */ "TVXh");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index */ "pjNq");













/*
  * Translation
*/






var customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "$ ",
    suffix: "",
    thousands: ",",
    nullable: true
};
var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SalesModule });
    SalesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SalesModule_Factory(t) { return new (t || SalesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sales_routing_module__WEBPACK_IMPORTED_MODULE_14__["SalesRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxDocViewerModule"],
                ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
                jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_6__["jqxTabsModule"],
                jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_5__["jqxDataTableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            ]] });
    return SalesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalesModule, { declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_15__["SalesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_16__["CustomersComponent"],
        _index__WEBPACK_IMPORTED_MODULE_16__["CustomerFormComponent"],
        _index__WEBPACK_IMPORTED_MODULE_16__["CheckInComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sales_routing_module__WEBPACK_IMPORTED_MODULE_14__["SalesRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxDocViewerModule"], ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
        jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_6__["jqxTabsModule"],
        jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_5__["jqxDataTableModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _sales_component__WEBPACK_IMPORTED_MODULE_15__["SalesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_16__["CustomersComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_16__["CustomerFormComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_16__["CheckInComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sales_routing_module__WEBPACK_IMPORTED_MODULE_14__["SalesRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
                    ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxDocViewerModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                    jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_6__["jqxTabsModule"],
                    jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_5__["jqxDataTableModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pjNq":
/*!**************************************!*\
  !*** ./src/app/pages/sales/index.ts ***!
  \**************************************/
/*! exports provided: CustomersComponent, CustomerFormComponent, CheckInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers/customers.component */ "4o6l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return _customers_customers_component__WEBPACK_IMPORTED_MODULE_0__["CustomersComponent"]; });

/* harmony import */ var _customers_customer_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/customer-form.component */ "vXGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return _customers_customer_form_component__WEBPACK_IMPORTED_MODULE_1__["CustomerFormComponent"]; });

/* harmony import */ var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-in/check-in.component */ "Bz/z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckInComponent", function() { return _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_2__["CheckInComponent"]; });






/***/ }),

/***/ "vXGT":
/*!******************************************************************!*\
  !*** ./src/app/pages/sales/customers/customer-form.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/products/index */ "UnFQ");
/* harmony import */ var _services_global_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/global/index */ "Absx");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/general/index */ "PcHl");
/* harmony import */ var _services_companies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/companies */ "mm0L");
/* harmony import */ var _services_accounting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/accounting */ "dKyG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-currency */ "Schs");





























var _c0 = ["focusElement"];
var _c1 = ["uploadFile"];
var _c2 = ["imgUp"];
function CustomerFormComponent_ng_template_13_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var typeOrg_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", typeOrg_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", typeOrg_r9.description, " ");
} }
function CustomerFormComponent_ng_template_13_ng_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var curre_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", curre_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + curre_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curre_r10.CurrencyName, " ");
} }
function CustomerFormComponent_ng_template_13_ng_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + country_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r11.country_name, " ");
} }
function CustomerFormComponent_ng_template_13_div_50_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var person_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", person_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", person_r13.full_name, " ");
} }
function CustomerFormComponent_ng_template_13_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cliente principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ng-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomerFormComponent_ng_template_13_div_50_ng_option_7_Template, 2, 2, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.persons);
} }
function CustomerFormComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ng-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CustomerFormComponent_ng_template_13_ng_option_10_Template, 2, 2, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Mostrar nombre como");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ng-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CustomerFormComponent_ng_template_13_ng_option_30_Template, 3, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CustomerFormComponent_ng_template_13_ng_option_40_Template, 3, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomerFormComponent_ng_template_13_Template_input_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onChageSeconday($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " \u00BFEs un cliente secundario? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CustomerFormComponent_ng_template_13_div_50_Template, 8, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Titulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Nombre de la empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Correo electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 26, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 28, "companies.type_organization"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidOrganization);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.typeOrg);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 30, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidFullName)("status-danger", ctx_r1.invalidFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 32, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 34, "companies.currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 36, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 38, "companies.country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidCountry)("status-danger", ctx_r1.invalidCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.is_secondary);
} }
function CustomerFormComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Direcci\u00F3n principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Direcci\u00F3n postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ciudad/Distrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Estado/Provincia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "C\u00F3digo postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Movil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Fijo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomerFormComponent_ng_template_21_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tax_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tax_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", tax_r20.name_taxe, " - ", tax_r20.rate_name, " ");
} }
function CustomerFormComponent_ng_template_21_ng_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var account_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", account_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", account_r21.account_number, " - ", account_r21.account_name, " ");
} }
function CustomerFormComponent_ng_template_21_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", payment_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", payment_r22.payment_method, " ");
} }
function CustomerFormComponent_ng_template_21_ng_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var timel_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", timel_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", timel_r23.term_name, " ");
} }
function CustomerFormComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ng-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CustomerFormComponent_ng_template_21_ng_option_9_Template, 2, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cuenta contable");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ninguna");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CustomerFormComponent_ng_template_21_ng_option_17_Template, 2, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Metodo de pago preferido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ng-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CustomerFormComponent_ng_template_21_ng_option_26_Template, 2, 2, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Condiciones de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ng-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Ninguna");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ng-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CustomerFormComponent_ng_template_21_ng_option_34_Template, 2, 2, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Saldo inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "A partir de la fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, "general.tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.payments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.timelimits);
} }
var CustomerFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomerFormComponent, _super);
    function CustomerFormComponent(fb, msg, api, router, translate, aRouter, termsSer, attrSer, spinner, docs, cnt, curr, tor, taxSer, accountSer, custSer) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.termsSer = termsSer;
        _this.attrSer = attrSer;
        _this.spinner = spinner;
        _this.docs = docs;
        _this.cnt = cnt;
        _this.curr = curr;
        _this.tor = tor;
        _this.taxSer = taxSer;
        _this.accountSer = accountSer;
        _this.custSer = custSer;
        // @ViewChild('imgData') imgData: ElementRef;
        _this.typepersons = [];
        _this.identityDocs = [];
        _this.typeOrg = [];
        _this.countries = [];
        _this.currency = [];
        _this.tax = [];
        _this.persons = [];
        _this.accounts = [];
        _this.payments = [];
        _this.timelimits = [];
        _this.active = 1;
        _this.title = 'Cliente';
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            address: [''],
            city_name: [''],
            company_name: [''],
            description: [''],
            dni: [''],
            email: [''],
            last_name: [''],
            location: [''],
            mobile: [''],
            names: [''],
            phone: [''],
            postal_code: [''],
            state_name: [''],
            title: [''],
            web: [''],
            currency_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country_id: [113, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type_organization_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            person_type_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tax_rate_id: ['0'],
            means_payment_id: ['0'],
            sales_term: ['0'],
            accounting_account_id: ['0'],
            initial_balance: [''],
            initial_date: [''],
            parent_id: ['0'],
            is_secondary: [false],
            full_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
        });
        return _this;
    }
    Object.defineProperty(CustomerFormComponent.prototype, "invalidFullName", {
        // VALIDATION
        get: function () {
            return this.customForm.get('full_name').invalid && this.customForm.get('full_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFormComponent.prototype, "invalidPersonType", {
        get: function () {
            return (this.customForm.get('person_type_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFormComponent.prototype, "invalidCountry", {
        get: function () {
            return (this.customForm.get('country_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFormComponent.prototype, "invalidCurrency", {
        get: function () {
            return (this.customForm.get('currency_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFormComponent.prototype, "invalidOrganization", {
        get: function () {
            return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.PutURL = '/persons/update/';
        ts.PostURL = '/persons/create';
        ts.docs.getData({}).subscribe(function (resp) {
            ts.identityDocs = resp;
        });
        ts.cnt.getData().subscribe(function (resp) {
            ts.countries = resp;
        });
        ts.curr.getData().subscribe(function (resp) {
            ts.currency = resp;
            if (resp.length > 0) {
                if (resp.length > 1) {
                    resp.map(function (val) {
                        if (val.national_currency) {
                            ts.customForm.get('currency_id').setValue(val.id);
                            return false;
                        }
                    });
                }
                else {
                    ts.customForm.get('currency_id').setValue(resp[0].id);
                }
            }
        });
        this.tor.getData({}).subscribe(function (resp) {
            _this.typeOrg = resp;
        });
        ts.taxSer.getData({ isVat: 1 }).subscribe(function (resp) {
            ts.tax = resp;
        });
        ts.accountSer.getsubAccounts({}).subscribe(function (resp) {
            ts.accounts = resp;
        });
        ts.custSer.getMeansPayment({}).subscribe(function (resp) {
            ts.payments = resp;
        });
        ts.custSer.getTimeLimit({}).subscribe(function (resp) {
            ts.timelimits = resp;
        });
        ts.custSer.getCustomersAll().subscribe(function (resp) {
            ts.persons = resp;
        });
    };
    CustomerFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.custSer.getCustomers({ uid: id }).
            subscribe(function (resp) {
            var _a, _b, _c, _d, _e, _f, _g;
            frm.setValue({
                address: resp[0].address,
                city_name: resp[0].city_name,
                company_name: resp[0].company_name,
                country_id: resp[0].country_id,
                currency_id: resp[0].currency_id,
                description: resp[0].description,
                dni: resp[0].dni,
                email: resp[0].email,
                full_name: resp[0].full_name,
                last_name: resp[0].last_name,
                location: resp[0].location,
                mobile: resp[0].mobile,
                names: resp[0].names,
                is_secondary: resp[0].is_secondary,
                person_type_id: resp[0].person_type_id,
                type_organization_id: resp[0].type_organization_id,
                tax_rate_id: (_a = resp[0].tax_rate_id) !== null && _a !== void 0 ? _a : '0',
                means_payment_id: (_b = resp[0].means_payment_id) !== null && _b !== void 0 ? _b : '0',
                sales_term: (_c = resp[0].sales_term) !== null && _c !== void 0 ? _c : '0',
                accounting_account_id: (_d = resp[0].accounting_account_id) !== null && _d !== void 0 ? _d : '0',
                initial_balance: (_e = resp[0].initial_balance) !== null && _e !== void 0 ? _e : '0',
                parent_id: (_f = resp[0].parent_id) !== null && _f !== void 0 ? _f : '0',
                initial_date: (_g = resp[0].initial_date) !== null && _g !== void 0 ? _g : '',
                phone: resp[0].phone,
                postal_code: resp[0].postal_code,
                state_name: resp[0].state_name,
                title: resp[0].title,
                web: resp[0].web,
            });
        });
    };
    CustomerFormComponent.prototype.onChageSeconday = function (e) {
        this.is_secondary = e.currentTarget.checked;
    };
    CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) { return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_8__["TermsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_8__["AttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["IdentityDocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies__WEBPACK_IMPORTED_MODULE_11__["TypeOrganizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_accounting__WEBPACK_IMPORTED_MODULE_12__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["PersonsService"])); };
    CustomerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerFormComponent, selectors: [["app-customer-form"]], viewQuery: function CustomerFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 18, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "display-none"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["formControlName", "type_organization_id", "required", "", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "full_name", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["formControlName", "currency_id", "required", "", 3, "virtualScroll"], ["formControlName", "country_id", "required", "", 3, "virtualScroll"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "is_secondary", 1, "form-check-input", 3, "change"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-2"], ["type", "text", "formControlName", "title", "name", "title", 1, "form-control"], [1, "col-md-5"], ["type", "text", "formControlName", "names", 1, "form-control"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "text", "formControlName", "dni", 1, "form-control"], ["type", "text", "formControlName", "company_name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "web", 1, "form-control"], [3, "value"], ["height", "15", "width", "15", 3, "src"], ["formControlName", "parent_id", 3, "virtualScroll"], ["value", "0"], ["formControlName", "address", "rows", "2", 1, "form-control"], ["formControlName", "location", "rows", "2", 1, "form-control"], ["type", "text", "formControlName", "city_name", 1, "form-control"], ["type", "text", "formControlName", "state_name", 1, "form-control"], ["type", "text", "formControlName", "postal_code", 1, "form-control"], ["type", "text", "formControlName", "mobile", 1, "form-control"], ["type", "text", "formControlName", "phone", 1, "form-control"], ["formControlName", "tax_rate_id"], ["formControlName", "accounting_account_id", 3, "virtualScroll"], ["formControlName", "means_payment_id"], ["formControlName", "sales_term", 3, "virtualScroll"], ["currencyMask", "", "name", "initial_balance", "formControlName", "initial_balance", 1, "form-control"], ["type", "date", "name", "initial_date", "formControlName", "initial_date", 1, "form-control"]], template: function CustomerFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function CustomerFormComponent_Template_ul_activeIdChange_8_listener($event) { return ctx.active = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "General");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CustomerFormComponent_ng_template_13_Template, 89, 40, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Ubicaci\u00F3n/Direcci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CustomerFormComponent_ng_template_17_Template, 37, 0, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Pago y facturaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CustomerFormComponent_ng_template_21_Template, 46, 9, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "app-footer-form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function CustomerFormComponent_Template_app_footer_form_closeEvent_24_listener() { return ctx.cancel(); })("saveAndCreateEvent", function CustomerFormComponent_Template_app_footer_form_saveAndCreateEvent_24_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function CustomerFormComponent_Template_app_footer_form_saveAndCloseEvent_24_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 14, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 16, ctx.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavOutlet"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_14__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"], ngx_currency__WEBPACK_IMPORTED_MODULE_17__["CurrencyMaskDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtDQUNGOztBQUdBO0VBQ0UsUUFBQTtDQUFGOztBQUdBO0VBQ0UsMEJBQUE7Q0FBRjs7QUFHQTtFQUNFLGtCQUFBO0NBQUYiLCJmaWxlIjoiZm9ybS1sYXlvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
    return CustomerFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-customer-form',
                templateUrl: './customer-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_8__["TermsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_8__["AttributesService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_9__["IdentityDocumentsService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_9__["CountriesService"] }, { type: _services_global_index__WEBPACK_IMPORTED_MODULE_9__["CurrencySysService"] }, { type: _services_companies__WEBPACK_IMPORTED_MODULE_11__["TypeOrganizationService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_10__["TaxRatesService"] }, { type: _services_accounting__WEBPACK_IMPORTED_MODULE_12__["AccountsService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_10__["PersonsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }], uploadFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['uploadFile']
        }], imgUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['imgUp']
        }] }); })();


/***/ }),

/***/ "w4ga":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-doc-viewer/__ivy_ngcc__/fesm2015/ngx-doc-viewer.js ***!
  \*****************************************************************************/
/*! exports provided: NgxDocViewerComponent, NgxDocViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDocViewerComponent", function() { return NgxDocViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDocViewerModule", function() { return NgxDocViewerModule; });
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");












var _c0 = ["iframe"];

function NgxDocViewerComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 3);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r2.docHtml, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}

function NgxDocViewerComponent_ng_container_0_object_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "object", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Your browser does not support PDFs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Download the PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r3.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r3.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function NgxDocViewerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NgxDocViewerComponent_ng_container_0_div_1_Template, 1, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NgxDocViewerComponent_ng_container_0_object_2_Template, 6, 2, "object", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.configuredViewer !== "pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.fullUrl && ctx_r0.configuredViewer === "pdf");
  }
}

function NgxDocViewerComponent_ng_container_1_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "iframe", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function NgxDocViewerComponent_ng_container_1_iframe_1_Template_iframe_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r7.iframeLoaded();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
  }
}

function NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "iframe", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template_iframe_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r11.iframeLoaded();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r9.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
  }
}

function NgxDocViewerComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template, 2, 1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r5.disableContent === "popout-hide" ? "#fff" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("overlay-full", ctx_r5.disableContent === "all")("overlay-popout-google", ctx_r5.configuredViewer === "google" && (ctx_r5.disableContent === "popout" || ctx_r5.disableContent === "popout-hide"))("overlay-popout-office", ctx_r5.configuredViewer === "office" && (ctx_r5.disableContent === "popout" || ctx_r5.disableContent === "popout-hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.fullUrl);
  }
}

function NgxDocViewerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NgxDocViewerComponent_ng_container_1_iframe_1_Template, 2, 1, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NgxDocViewerComponent_ng_container_1_div_2_Template, 3, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.fullUrl && ctx_r1.disableContent === "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.disableContent !== "none");
  }
}

var NgxDocViewerComponent = /*#__PURE__*/function () {
  function NgxDocViewerComponent(domSanitizer, ngZone) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxDocViewerComponent);

    this.domSanitizer = domSanitizer;
    this.ngZone = ngZone;
    this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.url = '';
    this.queryParams = '';
    this.viewerUrl = '';
    this.googleCheckInterval = 3000;
    this.disableContent = 'none';
    this.googleCheckContentLoaded = true;
    this.fullUrl = null;
    this.externalViewer = false;
    this.docHtml = '';
    this.configuredViewer = 'google';
    this.checkIFrameSubscription = null;
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NgxDocViewerComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.checkIFrameSubscription) {
        this.checkIFrameSubscription.unsubscribe();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var u, url, start;
        return D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (changes && changes.viewer && (changes.viewer.isFirstChange || changes.viewer.currentValue !== changes.viewer.previousValue)) {
                  if (this.viewer !== 'google' && this.viewer !== 'office' && this.viewer !== 'mammoth' && this.viewer !== 'pdf' && this.viewer !== 'url') {
                    console.error("Unsupported viewer: '".concat(this.viewer, "'. Supported viewers: google, office, mammoth and pdf"));
                  }

                  if (this.viewer === 'mammoth') {
                    if (mammoth === null) {
                      console.error('please install mammoth when using local viewer');
                    }
                  }

                  this.configuredViewer = this.viewer;
                }

                if (this.disableContent !== 'none' && this.viewer !== 'google') {}

                if (!(changes.url && changes.url.currentValue !== changes.url.previousValue || changes.viewer && changes.viewer.currentValue !== changes.viewer.previousValue || changes.viewerUrl && changes.viewerUrl.currentValue !== changes.viewerUrl.previousValue)) {
                  _context.next = 33;
                  break;
                }

                if (!changes.viewerUrl) {
                  this.viewerUrl = null;
                }

                _context.t0 = this.configuredViewer;
                _context.next = _context.t0 === 'google' ? 7 : _context.t0 === 'office' ? 9 : _context.t0 === 'pdf' ? 11 : 13;
                break;

              case 7:
                this.viewerUrl = "https://docs.google.com/gview?url=%URL%&embedded=true";
                return _context.abrupt("break", 13);

              case 9:
                this.viewerUrl = "https://view.officeapps.live.com/op/embed.aspx?src=%URL%";
                return _context.abrupt("break", 13);

              case 11:
                this.viewerUrl = null;
                return _context.abrupt("break", 13);

              case 13:
                this.docHtml = '';
                this.externalViewer = this.configuredViewer === 'google' || this.configuredViewer === 'office' || this.configuredViewer === 'url';

                if (this.checkIFrameSubscription) {
                  this.checkIFrameSubscription.unsubscribe();
                }

                if (this.url) {
                  _context.next = 20;
                  break;
                }

                this.fullUrl = null;
                _context.next = 33;
                break;

              case 20:
                if (!(this.configuredViewer === 'office' || this.configuredViewer === 'google' || this.configuredViewer === 'pdf' || this.configuredViewer === 'url')) {
                  _context.next = 28;
                  break;
                }

                u = this.url.indexOf('/') ? encodeURIComponent(this.url) : this.url;
                url = this.viewerUrl ? this.viewerUrl.replace('%URL%', u) : this.url;

                if (!!this.queryParams && this.configuredViewer !== 'pdf') {
                  start = this.queryParams.startsWith('&') ? '' : '&';
                  url = "".concat(url).concat(start).concat(this.queryParams);
                }

                this.fullUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url); // see:
                // https://stackoverflow.com/questions/40414039/google-docs-viewer-returning-204-responses-no-longer-working-alternatives
                // hack to reload iframe if it's not loaded.
                // would maybe be better to use view.officeapps.live.com but seems not to work with sas token.

                if (this.configuredViewer === 'google' && this.googleCheckContentLoaded) {
                  this.ngZone.runOutsideAngular(function () {
                    // if it's not loaded after the googleIntervalCheck, then open load again.
                    _this.checkIFrameSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(100, _this.googleCheckInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(Math.round(_this.googleCheckInterval === 0 ? 0 : 20000 / _this.googleCheckInterval))).subscribe(function () {
                      var _a, _b;

                      var iframe = (_b = (_a = _this.iframes) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement;

                      _this.reloadIFrame(iframe);
                    });
                  });
                }

                _context.next = 33;
                break;

              case 28:
                if (!(this.configuredViewer === 'mammoth')) {
                  _context.next = 33;
                  break;
                }

                if (!mammoth) {
                  console.error('Please install mammoth and make sure mammoth.browser.min.js is loaded.');
                }

                _context.next = 32;
                return this.getDocxToHtml(this.url);

              case 32:
                this.docHtml = _context.sent;

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "iframeLoaded",
    value: function iframeLoaded() {
      this.loaded.emit(null);

      if (this.checkIFrameSubscription) {
        this.checkIFrameSubscription.unsubscribe();
      }
    }
  }, {
    key: "reloadIFrame",
    value: function reloadIFrame(iframe) {
      if (iframe) {
        console.log('reloading..');
        iframe.src = iframe.src;
      }
    }
  }, {
    key: "getDocxToHtml",
    value: function getDocxToHtml(url) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var arrayBuffer, resultObject;
        return D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fileToArray(url);

              case 2:
                arrayBuffer = _context2.sent;
                _context2.next = 5;
                return mammoth.convertToHtml({
                  arrayBuffer: arrayBuffer
                });

              case 5:
                resultObject = _context2.sent;
                return _context2.abrupt("return", resultObject.value);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "fileToArray",
    value: function fileToArray(url) {
      return new Promise(function (resolve, reject) {
        try {
          var request = new XMLHttpRequest();
          request.open('GET', url, true);
          request.responseType = 'blob';

          request.onload = function () {
            var reader = new FileReader();
            reader.readAsArrayBuffer(request.response);

            reader.onloadend = function (e) {
              resolve(reader.result);
            };
          };

          request.send();
        } catch (_a) {
          reject("error while retrieving file ".concat(url, "."));
        }
      });
    }
  }]);

  return NgxDocViewerComponent;
}();

NgxDocViewerComponent.ɵfac = function NgxDocViewerComponent_Factory(t) {
  return new (t || NgxDocViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
};

NgxDocViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NgxDocViewerComponent,
  selectors: [["ngx-doc-viewer"]],
  viewQuery: function NgxDocViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iframes = _t);
    }
  },
  inputs: {
    url: "url",
    queryParams: "queryParams",
    viewerUrl: "viewerUrl",
    googleCheckInterval: "googleCheckInterval",
    disableContent: "disableContent",
    googleCheckContentLoaded: "googleCheckContentLoaded",
    viewer: "viewer"
  },
  outputs: {
    loaded: "loaded"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "innerHtml", 4, "ngIf"], ["type", "application/pdf", "width", "100%", "height", "100%", 3, "data", 4, "ngIf"], [3, "innerHtml"], ["type", "application/pdf", "width", "100%", "height", "100%", 3, "data"], [3, "href"], ["id", "iframe", "frameBorder", "0", 3, "src", "load", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["id", "iframe", "frameBorder", "0", 3, "src", "load"], ["iframe", ""], [1, "container"]],
  template: function NgxDocViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NgxDocViewerComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NgxDocViewerComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.externalViewer);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.externalViewer);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
  styles: ["[_nghost-%COMP%] {\n        display: block;\n    }\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: relative;\n    }\n    .overlay-popout-google[_ngcontent-%COMP%] {\n        width: 40px;\n        height: 40px;\n        right: 26px;\n        top: 11.5px;\n        position: absolute;\n        z-index: 1000;\n    }\n    .overlay-popout-office[_ngcontent-%COMP%] {\n        width: 100px;\n        height: 20px;\n        right: 0;\n        bottom: 0;\n        position: absolute;\n        z-index: 1000;\n    }\n    .overlay-full[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        right: 0;\n        top: 0;\n        position: absolute;\n        z-index: 1000;\n    }\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }"]
});

NgxDocViewerComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }];
};

NgxDocViewerComponent.propDecorators = {
  loaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  url: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  queryParams: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  viewerUrl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  googleCheckInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  disableContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  googleCheckContentLoaded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  viewer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  iframes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
    args: ['iframe']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NgxDocViewerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: 'ngx-doc-viewer',
      template: "<ng-container *ngIf=\"!externalViewer\">\r\n    <div *ngIf=\"configuredViewer !== 'pdf'\" [innerHtml]=\"docHtml\"></div>\r\n    <object *ngIf=\"fullUrl && configuredViewer === 'pdf'\" [data]=\"fullUrl\"\r\n        type=\"application/pdf\" width=\"100%\" height=\"100%\">\r\n        <p>Your browser does not support PDFs.\r\n            <a [href]=\"fullUrl\">Download the PDF</a>.</p>\r\n    </object>\r\n</ng-container>\r\n<ng-container *ngIf=\"externalViewer\">\r\n    <iframe (load)=\"iframeLoaded()\" *ngIf=\"fullUrl && disableContent === 'none'\" #iframe id=\"iframe\" frameBorder=\"0\" [src]=\"fullUrl\"></iframe>\r\n    <div class=\"container\" *ngIf=\"disableContent !== 'none'\">\r\n        <div [class.overlay-full]=\"disableContent === 'all'\"\r\n            [class.overlay-popout-google]=\"configuredViewer ==='google' && (disableContent === 'popout' || disableContent === 'popout-hide')\"\r\n            [class.overlay-popout-office]=\"configuredViewer ==='office' && (disableContent === 'popout' || disableContent === 'popout-hide')\"\r\n            [style.background-color]=\"disableContent === 'popout-hide' ? '#fff': 'transparent'\">\r\n        </div>\r\n        <iframe (load)=\"iframeLoaded()\" *ngIf=\"fullUrl\" #iframe id=\"iframe\" frameBorder=\"0\" [src]=\"fullUrl\"></iframe>\r\n    </div>\r\n</ng-container>",
      styles: [":host {\n        display: block;\n    }\n    .container {\n        width: 100%;\n        height: 100%;\n        position: relative;\n    }\n    .overlay-popout-google {\n        width: 40px;\n        height: 40px;\n        right: 26px;\n        top: 11.5px;\n        position: absolute;\n        z-index: 1000;\n    }\n    .overlay-popout-office {\n        width: 100px;\n        height: 20px;\n        right: 0;\n        bottom: 0;\n        position: absolute;\n        z-index: 1000;\n    }\n    .overlay-full {\n        width: 100%;\n        height: 100%;\n        right: 0;\n        top: 0;\n        position: absolute;\n        z-index: 1000;\n    }\n    iframe {\n        width: 100%;\n        height: 100%;\n    }\n    "]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }];
  }, {
    loaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    queryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    viewerUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    googleCheckInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    disableContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    googleCheckContentLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    viewer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    iframes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
      args: ['iframe']
    }]
  });
})();

var NgxDocViewerModule = function NgxDocViewerModule() {
  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxDocViewerModule);
};

NgxDocViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: NgxDocViewerModule
});
NgxDocViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function NgxDocViewerModule_Factory(t) {
    return new (t || NgxDocViewerModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgxDocViewerModule, {
    declarations: function declarations() {
      return [NgxDocViewerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]];
    },
    exports: function exports() {
      return [NgxDocViewerComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NgxDocViewerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
      declarations: [NgxDocViewerComponent],
      exports: [NgxDocViewerComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=sales-sales-module.js.map