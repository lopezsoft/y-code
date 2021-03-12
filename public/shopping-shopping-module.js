(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-shopping-module"],{

/***/ "5I/j":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shopping/providers/providers.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return ProvidersComponent; });
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
function ProvidersComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var ProvidersComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProvidersComponent, _super);
    function ProvidersComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Proveedores';
        return _this;
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    ProvidersComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        ts.crudApi = {
            create: '/persons/create/provider',
            read: '/persons/providers',
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
    ProvidersComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/shopping/providers/create');
    };
    ProvidersComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/shopping/providers/edit/" + data.id);
    };
    ProvidersComponent.ɵfac = function ProvidersComponent_Factory(t) { return new (t || ProvidersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    ProvidersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProvidersComponent, selectors: [["app-providers"]], viewQuery: function ProvidersComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function ProvidersComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function ProvidersComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ProvidersComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ProvidersComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function ProvidersComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function ProvidersComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
    return ProvidersComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_3__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProvidersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-providers',
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

/***/ "6twU":
/*!***********************************************************!*\
  !*** ./src/app/pages/shopping/shopping-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ShoppingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingRoutingModule", function() { return ShoppingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.component */ "CZ9L");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "cfHo");






var routes = [{
        path: '',
        component: _shopping_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingComponent"],
        children: [
            {
                path: 'invoices',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["InvoicesComponent"],
            },
            {
                path: 'invoices/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ShoppingCreateComponent"],
            },
            {
                path: 'invoices/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["InvoicesFormComponent"],
            },
            {
                path: 'invoices/create/detail/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ShoppingCreateComponent"],
            },
            {
                path: 'invoices/detail/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["DetailEditComponent"],
            },
            {
                path: 'providers',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ProvidersComponent"],
            },
            {
                path: 'providers/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ProviderFormComponent"]
            },
            {
                path: 'providers/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ProviderFormComponent"]
            },
        ],
    }];
var ShoppingRoutingModule = /** @class */ (function () {
    function ShoppingRoutingModule() {
    }
    ShoppingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShoppingRoutingModule });
    ShoppingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShoppingRoutingModule_Factory(t) { return new (t || ShoppingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ShoppingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShoppingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "CZ9L":
/*!******************************************************!*\
  !*** ./src/app/pages/shopping/shopping.component.ts ***!
  \******************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent() {
    }
    ShoppingComponent.ɵfac = function ShoppingComponent_Factory(t) { return new (t || ShoppingComponent)(); };
    ShoppingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingComponent, selectors: [["app-shopping"]], decls: 1, vars: 0, template: function ShoppingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return ShoppingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "PQxg":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shopping/providers/provider-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProviderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderFormComponent", function() { return ProviderFormComponent; });
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
function ProviderFormComponent_ng_template_13_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var typeOrg_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", typeOrg_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", typeOrg_r8.description, " ");
} }
function ProviderFormComponent_ng_template_13_ng_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var curre_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", curre_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + curre_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curre_r9.CurrencyName, " ");
} }
function ProviderFormComponent_ng_template_13_ng_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + country_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r10.country_name, " ");
} }
function ProviderFormComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProviderFormComponent_ng_template_13_ng_option_10_Template, 2, 2, "ng-option", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProviderFormComponent_ng_template_13_ng_option_30_Template, 3, 3, "ng-option", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProviderFormComponent_ng_template_13_ng_option_40_Template, 3, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Titulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Nombre de la empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Correo electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 25, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 27, "companies.type_organization"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidOrganization);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.typeOrg);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 29, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidFullName)("status-danger", ctx_r1.invalidFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 31, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 33, "companies.currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidCurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 35, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 37, "companies.country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.invalidCountry)("status-danger", ctx_r1.invalidCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
} }
function ProviderFormComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Direcci\u00F3n principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Direcci\u00F3n postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ciudad/Distrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Estado/Provincia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "C\u00F3digo postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Movil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Fijo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProviderFormComponent_ng_template_21_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tax_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tax_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", tax_r15.name_taxe, " - ", tax_r15.rate_name, " ");
} }
function ProviderFormComponent_ng_template_21_ng_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var account_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", account_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", account_r16.account_number, " - ", account_r16.account_name, " ");
} }
function ProviderFormComponent_ng_template_21_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", payment_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", payment_r17.payment_method, " ");
} }
function ProviderFormComponent_ng_template_21_ng_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var timel_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", timel_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", timel_r18.term_name, " ");
} }
function ProviderFormComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ng-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProviderFormComponent_ng_template_21_ng_option_9_Template, 2, 3, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cuenta contable");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ng-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProviderFormComponent_ng_template_21_ng_option_17_Template, 2, 3, "ng-option", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ng-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProviderFormComponent_ng_template_21_ng_option_26_Template, 2, 2, "ng-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Condiciones de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ng-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProviderFormComponent_ng_template_21_ng_option_34_Template, 2, 2, "ng-option", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "A partir de la fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "general.tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.payments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.timelimits);
} }
var ProviderFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProviderFormComponent, _super);
    function ProviderFormComponent(fb, msg, api, router, translate, aRouter, termsSer, attrSer, spinner, docs, cnt, curr, tor, taxSer, accountSer, custSer) {
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
        _this.title = 'Proveedor';
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
            initial_date: [new Date().toISOString().split('T')[0]],
            full_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
        });
        return _this;
    }
    Object.defineProperty(ProviderFormComponent.prototype, "invalidFullName", {
        // VALIDATION
        get: function () {
            return this.customForm.get('full_name').invalid && this.customForm.get('full_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProviderFormComponent.prototype, "invalidPersonType", {
        get: function () {
            return (this.customForm.get('person_type_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProviderFormComponent.prototype, "invalidCountry", {
        get: function () {
            return (this.customForm.get('country_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProviderFormComponent.prototype, "invalidCurrency", {
        get: function () {
            return (this.customForm.get('currency_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProviderFormComponent.prototype, "invalidOrganization", {
        get: function () {
            return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    ProviderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.PutURL = '/persons/update/';
        ts.PostURL = '/persons/create/provider';
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
    };
    ProviderFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.custSer.getCustomers({ uid: id }).
            subscribe(function (resp) {
            var _a, _b, _c, _d, _e, _f;
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
                person_type_id: resp[0].person_type_id,
                type_organization_id: resp[0].type_organization_id,
                tax_rate_id: (_a = resp[0].tax_rate_id) !== null && _a !== void 0 ? _a : '0',
                means_payment_id: (_b = resp[0].means_payment_id) !== null && _b !== void 0 ? _b : '0',
                sales_term: (_c = resp[0].sales_term) !== null && _c !== void 0 ? _c : '0',
                accounting_account_id: (_d = resp[0].accounting_account_id) !== null && _d !== void 0 ? _d : '0',
                initial_balance: (_e = resp[0].initial_balance) !== null && _e !== void 0 ? _e : 0,
                initial_date: (_f = resp[0].initial_date) !== null && _f !== void 0 ? _f : new Date().toISOString().split('T')[0],
                phone: resp[0].phone,
                postal_code: resp[0].postal_code,
                state_name: resp[0].state_name,
                title: resp[0].title,
                web: resp[0].web,
            });
        });
    };
    ProviderFormComponent.ɵfac = function ProviderFormComponent_Factory(t) { return new (t || ProviderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_8__["TermsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_8__["AttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["IdentityDocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_index__WEBPACK_IMPORTED_MODULE_9__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies__WEBPACK_IMPORTED_MODULE_11__["TypeOrganizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_accounting__WEBPACK_IMPORTED_MODULE_12__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["PersonsService"])); };
    ProviderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProviderFormComponent, selectors: [["app-customer-form"]], viewQuery: function ProviderFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 18, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "display-none"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["formControlName", "type_organization_id", "required", "", "name", "type_organization_id", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "full_name", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["formControlName", "currency_id", "name", "currency_id", "required", "", 3, "virtualScroll"], ["formControlName", "country_id", "required", "", 3, "virtualScroll"], [1, "col-md-2"], ["type", "text", "formControlName", "title", "name", "title", 1, "form-control"], [1, "col-md-5"], ["type", "text", "formControlName", "names", 1, "form-control"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "text", "formControlName", "dni", 1, "form-control"], ["type", "text", "formControlName", "company_name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "web", 1, "form-control"], [3, "value"], ["height", "15", "width", "15", 3, "src"], ["formControlName", "address", "rows", "2", 1, "form-control"], ["formControlName", "location", "rows", "2", 1, "form-control"], ["type", "text", "formControlName", "city_name", 1, "form-control"], ["type", "text", "formControlName", "state_name", 1, "form-control"], ["type", "text", "formControlName", "postal_code", 1, "form-control"], ["type", "text", "formControlName", "mobile", 1, "form-control"], ["type", "text", "formControlName", "phone", 1, "form-control"], ["formControlName", "tax_rate_id"], ["value", "0"], ["formControlName", "accounting_account_id", 3, "virtualScroll"], ["formControlName", "means_payment_id", 3, "virtualScroll"], ["formControlName", "sales_term", 3, "virtualScroll"], ["currencyMask", "", "name", "initial_balance", "formControlName", "initial_balance", 1, "form-control"], ["type", "date", "name", "initial_date", "formControlName", "initial_date", 1, "form-control"]], template: function ProviderFormComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function ProviderFormComponent_Template_ul_activeIdChange_8_listener($event) { return ctx.active = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "General");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProviderFormComponent_ng_template_13_Template, 79, 39, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Ubicaci\u00F3n/Direcci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProviderFormComponent_ng_template_17_Template, 37, 0, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Pago y facturaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProviderFormComponent_ng_template_21_Template, 46, 10, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "app-footer-form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function ProviderFormComponent_Template_app_footer_form_closeEvent_24_listener() { return ctx.cancel(); })("saveAndCreateEvent", function ProviderFormComponent_Template_app_footer_form_saveAndCreateEvent_24_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function ProviderFormComponent_Template_app_footer_form_saveAndCloseEvent_24_listener() { return ctx.saveAndClose(); });
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
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbNavOutlet"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_14__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"], ngx_currency__WEBPACK_IMPORTED_MODULE_17__["CurrencyMaskDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtDQUNGOztBQUdBO0VBQ0UsUUFBQTtDQUFGOztBQUdBO0VBQ0UsMEJBQUE7Q0FBRjs7QUFHQTtFQUNFLGtCQUFBO0NBQUYiLCJmaWxlIjoiZm9ybS1sYXlvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
    return ProviderFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProviderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-customer-form',
                templateUrl: './provider-form.component.html',
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

/***/ "YvbY":
/*!**********************************************************************!*\
  !*** ./src/app/pages/shopping/shopping/shopping-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShoppingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCreateComponent", function() { return ShoppingCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxdatatable */ "3HhI");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ././../../../services/general/index */ "PcHl");
/* harmony import */ var _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ././../../../services/global/shopping.service */ "Cx/d");
/* harmony import */ var _services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/global/reports.service */ "PU63");
/* harmony import */ var _services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/global/documents.service */ "4IXu");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../services/products/index */ "UnFQ");
/* harmony import */ var _core_components_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ././../../../core/components/forms */ "xg8E");
/* harmony import */ var app_services_companies__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/companies */ "mm0L");
/* harmony import */ var _services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ././../../../services/companies/wineries.service */ "K56k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-currency */ "Schs");









// Services




























var _c0 = ["customGrid"];
var _c1 = ["myDataTable"];
var _c2 = ["searchField"];
var _c3 = ["focusElement"];
var _c4 = ["amountElement"];
var _c5 = ["cashele"];
var _c6 = ["searchbar"];
var _c7 = ["myTabs"];
function ShoppingCreateComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "N\u00BA. de la factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "general.asterisk"), "");
} }
function ShoppingCreateComponent_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "general.asterisk"), "");
} }
function ShoppingCreateComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var provider_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", provider_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", provider_r22.dni, " - ", provider_r22.full_name, " ", provider_r22.company_name, " ");
} }
function ShoppingCreateComponent_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Punto de venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "general.asterisk"), "");
} }
function ShoppingCreateComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var point_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", point_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", point_r23.branch_name, " ");
} }
function ShoppingCreateComponent_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bodega");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShoppingCreateComponent_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var w_house_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", w_house_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", w_house_r24.winery_name, " ");
} }
function ShoppingCreateComponent_div_36_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", payment_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r26.payment_method, " ");
} }
function ShoppingCreateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Forma de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ng-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ShoppingCreateComponent_div_36_ng_option_9_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Fecha de emisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Fecha de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "general.asterisk"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.payments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, "general.asterisk"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r8.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 10, "general.asterisk"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r8.editing);
} }
function ShoppingCreateComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Descuento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, "general.asterisk"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r9.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r9.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r9.editing);
} }
function ShoppingCreateComponent_label_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cargo/Seguro/Flete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShoppingCreateComponent_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Retefuente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShoppingCreateComponent_label_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "general.asterisk"), "");
} }
function ShoppingCreateComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Notas");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "textarea", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx_r13.editing);
} }
function ShoppingCreateComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_div_81_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); var itemres_r27 = ctx.$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.onClickItem(itemres_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var itemres_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", itemres_r27.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, itemres_r27.sale_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](itemres_r27.product_name);
} }
function ShoppingCreateComponent_ng_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var taxB_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taxB_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", taxB_r30.name_taxe, " - ", taxB_r30.rate_value, " % ");
} }
function ShoppingCreateComponent_ng_option_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var taxS_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taxS_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", taxS_r31.name_taxe, " - ", taxS_r31.rate_value, " % ");
} }
function ShoppingCreateComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Lote #");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r19.perishable);
} }
function ShoppingCreateComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Fecha de fabricaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r20.perishable);
} }
function ShoppingCreateComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Fecha de vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r21.perishable);
} }
var ShoppingCreateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShoppingCreateComponent, _super);
    function ShoppingCreateComponent(fb, msg, api, router, translate, aRouter, branchSer, perSer, currSer, reporstSer, itemsSer, spinner, documents, shopSer, taxSer, docsSer, wareHouseServ) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.branchSer = branchSer;
        _this.perSer = perSer;
        _this.currSer = currSer;
        _this.reporstSer = reporstSer;
        _this.itemsSer = itemsSer;
        _this.spinner = spinner;
        _this.documents = documents;
        _this.shopSer = shopSer;
        _this.taxSer = taxSer;
        _this.docsSer = docsSer;
        _this.wareHouseServ = wareHouseServ;
        _this.title = 'Productos/Servicios';
        _this.aDocuments = [];
        _this.ware_house = [];
        _this.providers = [];
        _this.currency = [];
        _this.items = [];
        _this.itemsResult = [];
        _this.lines = [];
        _this.timeLimits = [];
        _this.paymentMethods = [];
        _this.payments = [];
        _this.meansPayment = [];
        _this.taxBill = [];
        _this.taxSales = [];
        _this.pointsOfSale = [];
        _this.selectedRow = false;
        _this.isCounted = true;
        _this.perishable = false;
        _this.rowIndex = -1;
        _this.pathfile = "";
        _this.itemName = "";
        _this.source = {
            localdata: _this.lines,
            datatype: "array",
            datafields: [
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'discount', type: 'number' },
                { name: 'vat', type: 'number' },
                { name: 'total', type: 'number' },
                { name: 'product_class_name', type: 'string' },
                { name: 'reason', type: 'string' },
                { name: 'sku', type: 'string' },
                { name: 'image', type: 'string' },
                { name: 'qr_code', type: 'string' },
                { name: 'product_name', type: 'string' },
                { name: 'notes', type: 'string' },
                { name: 'description_sales', type: 'string' },
                { name: 'shopping_description', type: 'string' },
                { name: 'barcode', type: 'string' },
                { name: 'rate_name', type: 'string' },
                { name: 'internal_code', type: 'string' },
                { name: 'state', type: 'number' },
                { name: 'sale_price', type: 'number' },
                { name: 'purchase_cost', type: 'number' },
                { name: 'tax_sales', type: 'number' },
                { name: 'tax_bill', type: 'number' },
                { name: 'stock_min', type: 'number' },
                { name: 'stock_max', type: 'number' },
                { name: 'tax_sales_id', type: 'number' },
                { name: 'brand_id', type: 'number' },
                { name: 'category_id', type: 'number' },
                { name: 'sub_category_id', type: 'number' },
                { name: 'percentage_gain', type: 'number' },
                { name: 'tax_bill_id', type: 'number' },
                { name: 'item_type_id', type: 'number' },
                { name: 'class_id', type: 'number' },
                { name: 'average_cost', type: 'number' },
                { name: 'recipe', type: 'boolean' },
                { name: 'perishable', type: 'boolean' },
                { name: 'id', type: 'number' },
            ]
        };
        _this.dataAdapter = new jqx.dataAdapter(_this.source);
        _this.columns = [
            { text: 'Cant', dataField: 'quantity', width: 60, align: 'center', cellsAlign: 'right' },
            { text: 'Detalle', dataField: 'product_name', minWidth: 200, align: 'center', cellsAlign: 'center', editable: false },
            { text: 'Precio', dataField: 'sale_price', width: 100, align: 'center', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'IVA', editable: false, dataField: 'tax_sales', width: 50, align: 'center', cellsAlign: 'right' },
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
                { name: 'taxlevel', type: 'string' },
                { name: 'taxregime', type: 'string' },
                { name: 'term_value', type: 'number' },
                { name: 'time_limit', type: 'string' },
                { name: 'total', type: 'number' },
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
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#send_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    var rec = _this.customGrid.getrowdata(row);
                    if (rec.status == 1) {
                        return '<i class="fas fa-thumbs-up fas-fa-ok-thumbs fa-cursor"></i>';
                    }
                    else if (rec.status == 2) {
                        return '<i class="fas fa-bug fas-fa-error fa-cursor"></i>';
                    }
                    else if (!rec.electronic) {
                        return '<i class="fas fa-check fas-fa-ok fa-cursor"></i>';
                    }
                    else {
                        return '<i class="fas fa-exclamation-circle fas-fa-warning fa-cursor">';
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
                        case 2:
                            return '<p class="active-red">Anulada</p>';
                            break;
                        default:
                            return '<p class="active-orange">Inactiva</p>';
                            break;
                    }
                }
            },
        ];
        return _this;
    }
    Object.defineProperty(ShoppingCreateComponent.prototype, "invalidName", {
        get: function () {
            return this.customForm.get('invoice_nro').invalid && this.customForm.get('invoice_nro').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingCreateComponent.prototype, "invalidBranch", {
        get: function () {
            return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCreateComponent.prototype.ngOnInit = function () {
        var ts = this;
        ts.uid = ts.aRouter.snapshot.paramMap.get('id');
        ts.showSpinner();
        if (ts.uid) {
            ts.customForm = this.fb.group({
                provider_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '0', disabled: true }),
                warehouse_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '0', disabled: true }),
                point_of_sale_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '0', disabled: true }),
                payment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '0', disabled: true }),
                invoice_nro: ['0'],
                discount: [0],
                vat: [0],
                total: [0],
                admission_date: [''],
                freight: [0],
                rfte: [0],
                notes: [''],
                pay_day: [''],
                tax_sale_id: [0],
                tax_bill_id: [0],
                product_id: [0],
                invoice_id: [0],
                gain: [0],
                batch: [''],
                fabrication_date: [''],
                expiration_date: [''],
                percentage_gain: ['0'],
                vat_included: [false],
                amount: [0],
                unit_cost: [0],
                unit_price: [0],
                total_cost: [0],
                sale_price: [0],
                quantity: [0],
                sub_total: [0],
            });
        }
        else {
            ts.customForm = this.fb.group({
                admission_date: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                discount: [0],
                freight: [0],
                rfte: [0],
                invoice_nro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
                vat: [0],
                notes: [''],
                pay_day: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                payment_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                warehouse_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                point_of_sale_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                provider_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                sub_total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                tax_sale_id: [0],
                tax_bill_id: [0],
                product_id: [0],
                invoice_id: [0],
                gain: [0],
                batch: [''],
                fabrication_date: [''],
                expiration_date: [''],
                percentage_gain: ['0'],
                vat_included: [false],
                amount: [0],
                unit_cost: [0],
                unit_price: [0],
                total_cost: [0],
                sale_price: [0],
                quantity: [0],
            });
            ts.onRefresh();
        }
        var frm = ts.customForm;
        ts.wareHouseServ.getData({}).subscribe(function (resp) {
            ts.ware_house = resp;
        });
        ts.docsSer.getPaymentMethods({}).subscribe(function (resp) {
            ts.payments = resp;
            if (resp.length > 0) {
                ts.customForm.get('payment_id').setValue(resp[0].id);
            }
        });
        ts.branchSer.getPointsOfSale({}).subscribe(function (resp) {
            ts.pointsOfSale = resp;
            if (resp.length > 0) {
                ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
            }
        });
        ts.perSer.getProviders({}).subscribe(function (resp) {
            ts.providers = resp;
        });
        ts.taxSer.getData({ isVat: true }).subscribe(function (resp) {
            ts.taxBill = resp;
            ts.taxSales = resp;
            if (resp.length > 0) {
                frm.get('tax_bill_id').setValue(resp[0].id);
                frm.get('tax_sale_id').setValue(resp[0].id);
                ts.taxBillSelect = resp[0];
                ts.taxSaleSelect = resp[0];
            }
        });
        _super.prototype.ngOnInit.call(this);
    };
    ShoppingCreateComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
    };
    ShoppingCreateComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.shopSer.getData({ uid: id }).subscribe(function (resp) {
            frm.get('invoice_nro').setValue(resp[0].invoice_nro);
            frm.get('total').setValue(resp[0].total);
            frm.get('provider_id').setValue(resp[0].provider_id);
            frm.get('admission_date').setValue(resp[0].admission_date);
            frm.get('discount').setValue(resp[0].discount);
            frm.get('freight').setValue(resp[0].freight);
            frm.get('rfte').setValue(resp[0].rfte);
            frm.get('vat').setValue(resp[0].vat);
            frm.get('notes').setValue(resp[0].notes);
            frm.get('pay_day').setValue(resp[0].pay_day);
            frm.get('payment_id').setValue(resp[0].payment_id);
            frm.get('warehouse_id').setValue(resp[0].warehouse_id);
            frm.get('point_of_sale_id').setValue(resp[0].point_of_sale_id);
            frm.get('sub_total').setValue(resp[0].sub_total);
            ts.searchField.nativeElement.focus;
            ts.onRefresh();
        });
    };
    /**
     * Cuando se cambia el precio de compra
     */
    ShoppingCreateComponent.prototype.onChangeUnitPrice = function () {
        this.onPurchaseData();
    };
    /**
     * Cuando se cambia el precio de venta
     */
    ShoppingCreateComponent.prototype.onChangeSalePrice = function () {
        this.onSalesData();
    };
    /**
     * Cuando se selecciona un item de la lista de productos
     */
    ShoppingCreateComponent.prototype.onClickItem = function (i) {
        var ts = this;
        var frm = ts.customForm;
        var line = i;
        if (line.class_id !== 2) {
            ts.perishable = line.perishable;
            var purchase_cost = parseFloat(line.purchase_cost.toString()) / parseFloat(line.tax_bill_rate.toString());
            frm.get('amount').setValue(1);
            frm.get('unit_price').setValue(purchase_cost);
            frm.get('tax_bill_id').setValue(line.tax_bill_id);
            frm.get('tax_sale_id').setValue(line.tax_sales_id);
            var sale_price = parseFloat(((purchase_cost * line.percentage_gain) / 100).toString()) + purchase_cost;
            if (line.sale_price > sale_price) {
                sale_price = line.sale_price;
            }
            frm.get('sale_price').setValue(sale_price);
            ts.amountElement.nativeElement.focus;
            ts.itemSelect = line;
            ts.itemName = line.product_name;
            ts.onChageTaxBill(line.tax_bill_id);
            ts.onChangeTaxSale(line.tax_sales_id);
        }
        else {
            ts.msg.toastMessage('', 'El item seleccionado no maneja inventarios.', 4);
            ts.onClearForm();
        }
    };
    /**
     * Quita filtro activo
     */
    ShoppingCreateComponent.prototype.onClearFilter = function () {
        var ts = this;
        ts.onClearForm();
        ts.focusElement.nativeElement.value = '';
        ts.itemsResult = ts.items;
        ts.focusElement.nativeElement.focus;
    };
    /**
     * Actualiza listado de productos
     */
    ShoppingCreateComponent.prototype.onRefresh = function () {
        var ts = this;
        ts.showSpinner('Cargando listado de productos.');
        ts.itemsSer.getDataSales({}).subscribe(function (resp) {
            ts.items = resp;
            ts.hideSpinner();
            ts.itemsResult = ts.items;
            ts.focusElement.nativeElement.focus;
        }, function () { return ts.hideSpinner(); });
        ts.onClearForm();
    };
    /**
     * Búsqueda de productos
     */
    ShoppingCreateComponent.prototype.onSearchProducts = function (query) {
        var ts = this;
        ts.showSpinner();
        ts.onClearForm();
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
    /**
     * Limpia el formulario
     */
    ShoppingCreateComponent.prototype.onClearForm = function () {
        var ts = this;
        var frm = ts.customForm;
        ts.itemSelect = null;
        ts.itemName = '';
        frm.get('amount').setValue(0);
        frm.get('unit_cost').setValue(0);
        frm.get('unit_price').setValue(0);
        frm.get('total_cost').setValue(0);
        frm.get('sale_price').setValue(0);
        frm.get('gain').setValue(0);
        frm.get('expiration_date').setValue('');
        frm.get('fabrication_date').setValue('');
        if (ts.taxBill.length > 0) {
            frm.get('tax_bill_id').setValue(ts.taxBill[0].id);
            frm.get('tax_sale_id').setValue(ts.taxSales[0].id);
            ts.onChageTaxBill(ts.taxBill[0].id);
            ts.onChangeTaxSale(ts.taxSales[0].id);
        }
    };
    /**
     * Cuando se selecciona un nuevo impuesto de compra
     */
    ShoppingCreateComponent.prototype.onChageTaxBill = function (val) {
        var ts = this;
        ts.taxBillSelect = ts.taxBill.find(function (tax) { return tax.id === val; });
        ts.onPurchaseData();
    };
    /**
     * Cuando se cambia la cantidad
     */
    ShoppingCreateComponent.prototype.onChageAmount = function (e) {
        this.onPurchaseData();
    };
    /**
     * Cuando se cambia el impuesto incluido
     */
    ShoppingCreateComponent.prototype.onChageIncluded = function (e) {
        this.onPurchaseData();
    };
    /**
     * Cuando se selecciona un nuevo impuesto de venta
     */
    ShoppingCreateComponent.prototype.onChangeTaxSale = function (val) {
        var ts = this;
        ts.taxSaleSelect = ts.taxSales.find(function (tax) { return tax.id === val; });
        ts.onSalesData();
    };
    /**
     * Calcula los valores de venta
     */
    ShoppingCreateComponent.prototype.onSalesData = function () {
        var ts = this;
        var frm = ts.customForm;
        var unit_price = parseFloat(frm.get('unit_price').value);
        var sale_price = parseFloat(frm.get('sale_price').value);
        var vat = parseFloat(ts.taxBillSelect.decimal_rate.toString());
        var vatSale = parseFloat(ts.taxSaleSelect.decimal_rate.toString());
        var included = frm.get('vat_included').value;
        var realPrice = 0;
        var realCost = 0;
        var gain = 0;
        var percGain = 0;
        if (included == true) { // Impuesto incluido en el precio de compra
            realCost = (unit_price / vat);
        }
        else {
            realCost = unit_price;
        }
        realPrice = (sale_price / vatSale);
        gain = realPrice - realCost;
        percGain = (gain / realPrice) * 100;
        frm.get('gain').setValue(gain);
        frm.get('percentage_gain').setValue(percGain.toFixed(2) + " %");
    };
    /**
     *
     * Calcula los valores de compra
     */
    ShoppingCreateComponent.prototype.onPurchaseData = function () {
        var ts = this;
        var frm = ts.customForm;
        var amount = parseFloat(frm.get('amount').value);
        var unit_price = parseFloat(frm.get('unit_price').value);
        var vat = parseFloat(ts.taxBillSelect.decimal_rate.toString());
        var included = frm.get('vat_included').value;
        var unit_cost = (vat > 0) ? (unit_price * vat) : unit_price;
        var total = unit_cost * amount;
        if (included == true) { // Impuesto incluido en el precio de compra
            frm.get('unit_cost').setValue(unit_price);
            frm.get('total_cost').setValue(unit_price * amount);
        }
        else {
            frm.get('unit_cost').setValue(unit_cost);
            frm.get('total_cost').setValue(total);
        }
        if (amount > 0) {
            ts.onSalesData();
        }
    };
    /**
     * Guarda la factura y el detalle
     */
    ShoppingCreateComponent.prototype.onSave = function (content) {
        if (content === void 0) { content = {}; }
        var ts = this;
        var frm = ts.customForm;
        var uid = ts.uid;
        var product = ts.itemSelect;
        var values = frm.getRawValue();
        if (!product) {
            ts.msg.toastMessage('', 'No ha seleccionado un producto.', 4);
            return false;
        }
        if (parseFloat(values.amount) <= 0 || parseFloat(values.sale_price) <= 0 || parseFloat(values.unit_cost) <= 0) {
            ts.msg.toastMessage('', 'Hay un error en las cantidades.', 4);
            return false;
        }
        if (frm.invalid) {
            ts.msg.toastMessage('', 'Hay campos sin llenar.', 4);
            return false;
        }
        if (uid) {
            values.invoice_id = uid;
            values.product_id = product.id;
            ts.onSaveDetail(values);
        }
        else {
            values.product_id = product.id;
            ts.showSpinner('Guardando factura');
            ts.api.post('/shopping/create', values).subscribe(function (resp) {
                ts.hideSpinner();
                if (resp.success) {
                    var shoppin = resp.records;
                    ts.uid = shoppin.id;
                    ts.editing = true;
                    values.invoice_id = shoppin.id;
                    ts.onSaveDetail(values);
                }
                else {
                    ts.msg.toastMessage('', resp.message, 4);
                }
            }, function (resp) {
                ts.hideSpinner();
            });
        }
    };
    ShoppingCreateComponent.prototype.onSaveDetail = function (values) {
        var ts = this;
        ts.showSpinner('Guardando detalle');
        if (!ts.itemSelect.perishable) {
            values.batch = null;
            values.fabrication_date = null;
            values.expiration_date = null;
        }
        var data = {
            records: JSON.stringify(values)
        };
        ts.api.post('/shopping/create/detail', data).subscribe(function (resp) {
            if (resp.success) {
                ts.msg.toastMessage('', 'Se ha guardado correctamente el producto en el inventario.');
                ts.onClearForm();
            }
            else {
                ts.msg.toastMessage('', resp.message, 4);
            }
            ts.searchField.nativeElement.focus;
            ts.hideSpinner();
        }, function (resp) {
            ts.hideSpinner();
        });
    };
    ShoppingCreateComponent.prototype.getWidth = function () {
        return '100%';
    };
    ShoppingCreateComponent.prototype.onClose = function () {
        this.goRoute("pages/shopping/invoices");
    };
    ShoppingCreateComponent.ɵfac = function ShoppingCreateComponent_Factory(t) { return new (t || ShoppingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_13__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_13__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_services_companies__WEBPACK_IMPORTED_MODULE_16__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_9__["PersonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_9__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_14__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_shopping_service__WEBPACK_IMPORTED_MODULE_10__["ShoppingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_9__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_17__["WineriesService"])); };
    ShoppingCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ShoppingCreateComponent, selectors: [["app-shopping"]], viewQuery: function ShoppingCreateComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myDataTable = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.amountElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cashele = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchbar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myTabs = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 154, vars: 39, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "container-fluid", "padding-top-bottom"], [1, "row"], [1, "col-md-4"], [1, "form-group"], [4, "ngIf"], ["type", "text", "nbinput", "", "fullWidth", "", "formControlName", "invoice_nro", "required", "", "autofocus", "", "placement", "bottom", "ngbTooltip", "N\u00BA. de la factura", 1, "form-control", 3, "readOnly"], ["focusElement", ""], [1, "col-md-8"], ["fullWidth", "", "formControlName", "provider_id", "required", "", "placement", "bottom", "ngbTooltip", "Proveedor"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["fullWidth", "", "formControlName", "point_of_sale_id", "required", "", "placement", "bottom", "ngbTooltip", "Punto de venta"], ["fullWidth", "", "formControlName", "warehouse_id", "required", "", "placement", "bottom", "ngbTooltip", "Bodega"], ["class", "row", 4, "ngIf"], ["currencyMask", "", "formControlName", "freight", "nbinput", "", "fullWidth", "", 1, "form-control", 3, "readOnly"], ["currencyMask", "", "formControlName", "rfte", "nbinput", "", "fullWidth", "", 1, "form-control", 3, "readOnly"], ["currencyMask", "", "formControlName", "total", "nbinput", "", "fullWidth", "", "required", "", "ngbTooltip", "Total", 1, "form-control", 3, "readOnly"], [1, "col-md-7"], [1, "col"], [1, "page-search-input", "form-group"], [1, "input-group"], ["type", "search", "id", "searchbar", "placeholder", "B\u00FAsqueda", "autofocus", "", 1, "form-control", "rounded-right", "form-control-lg", "shadow", "pl-2", 3, "keyup.enter"], ["searchField", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "search-btn", "rounded", "space-right", 3, "click"], [1, "d-none", "d-sm-block"], [1, "fas", "fa-search"], ["type", "button", "ngbTooltip", "Crear nuevo producto", 1, "btn", "btn-success", "space-right", "radius-button"], [1, "fas", "fa-plus", "fas-fa-22"], ["type", "button", "ngbTooltip", "Refrescar", 1, "btn", "btn-info", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-sync", "fas-fa-22"], ["type", "button", "ngbTooltip", "Limpiar", 1, "btn", "btn-danger", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-broom", "fas-fa-22"], ["type", "button", "ngbTooltip", "Cerrar", 1, "btn", "btn-danger", "radius-button", 3, "click"], [1, "fas", "fa-times", "fas-fa-22"], [1, "col", "product-name-header"], [1, "col", "card-col"], [1, "card-columns"], ["class", "card card-sales", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "card-col"], [1, "form-group", "row"], ["for", "inputQuantity", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "number", "id", "inputQuantity", "placeholder", "Cantidad", "formControlName", "amount", 1, "form-control", 3, "change"], ["amountElement", ""], ["for", "selectBill", 1, "col-sm-3", "col-form-label"], ["id", "selectBill", "formControlName", "tax_bill_id", 3, "change"], [1, "form-check"], ["type", "checkbox", "id", "ckInclude", "formControlName", "vat_included", 1, "form-check-input", 3, "change"], ["for", "ckInclude", 1, "form-check-label"], ["for", "inputAmount1", 1, "col-sm-3", "col-form-label"], ["formControlName", "unit_price", "currencyMask", "", "type", "text", "id", "inputAmount1", "ngbTooltip", "Costo unitario sin impuesto", "placeholder", "Costo unitario", 1, "form-control", 3, "keyup"], [1, "col-sm-6"], ["formControlName", "unit_cost", "currencyMask", "", "type", "text", "id", "inputAmount", "ngbTooltip", "Costo unitario con impuesto", "placeholder", "Costo unitario", "readonly", "", 1, "form-control", "radius-button", "total"], ["formControlName", "total_cost", "type", "text", "currencyMask", "", "placeholder", "Total", "readonly", "", 1, "form-control", "radius-button", "total"], ["for", "selectSale", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["id", "selectSale", "formControlName", "tax_sale_id", 3, "change"], ["for", "salePrice", 1, "col-sm-4", "col-form-label"], ["formControlName", "sale_price", "currencyMask", "", "type", "text", "id", "salePrice", "placement", "bottom", "ngbTooltip", "Precio de venta con impuesto incluido", "placeholder", "Precio de venta", 1, "form-control", 3, "keyup"], [1, "col-sm-4", "col-form-label"], ["readonly", "", "formControlName", "gain", "currencyMask", "", "type", "text", "placement", "bottom", "ngbTooltip", "Ganancia posible", "placeholder", "Ganancia posible", 1, "form-control"], ["readonly", "", "formControlName", "percentage_gain", "type", "text", "placement", "bottom", "ngbTooltip", "Procentaje Ganancia posible", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], ["type", "button", 1, "btn", "radius-button", "btn-primary", "space-right", "radius-button", "btn-block", 3, "disabled", "click"], [1, "fas", "fa-save", "fas-fa-22"], [2, "color", "white"], [1, "asterisk"], [3, "value"], ["fullWidth", "", "formControlName", "payment_id", "required", ""], ["type", "date", "formControlName", "admission_date", "nbinput", "", "fullWidth", "", "required", "", 1, "form-control", 3, "readOnly"], ["type", "date", "formControlName", "pay_day", "nbinput", "", "fullWidth", "", "required", "", 1, "form-control", 3, "readOnly"], ["currencyMask", "", "formControlName", "sub_total", "nbinput", "", "fullWidth", "", "required", "", 1, "form-control", 3, "readOnly"], ["currencyMask", "", "formControlName", "discount", "nbinput", "", "fullWidth", "", 1, "form-control", 3, "readOnly"], ["currencyMask", "", "formControlName", "vat", "nbinput", "", "fullWidth", "", 1, "form-control", 3, "readOnly"], ["formControlName", "notes", "nbinput", "", "fullWidth", "", 1, "form-control", 3, "readOnly"], [1, "card", "card-sales", 3, "click"], ["fallimg", "product", 1, "img-product", "card-img-top", 3, "src"], [1, "price"], [1, "product-name"], [1, "col-sm-5", "col-form-label"], [1, "col-sm-7"], ["formControlName", "batch", "type", "text", 1, "form-control", 3, "readonly"], ["formControlName", "fabrication_date", "type", "date", 1, "form-control", 3, "readonly"], ["formControlName", "expiration_date", "type", "date", 1, "form-control", 3, "readonly"]], template: function ShoppingCreateComponent_Template(rf, ctx) { if (rf & 1) {
            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ShoppingCreateComponent_label_11_Template, 5, 3, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ShoppingCreateComponent_label_16_Template, 5, 3, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Seleccionar proveedor");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ShoppingCreateComponent_ng_option_20_Template, 2, 4, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ShoppingCreateComponent_label_24_Template, 5, 3, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ng-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Seleccionar punto de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ShoppingCreateComponent_ng_option_28_Template, 2, 2, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ShoppingCreateComponent_label_31_Template, 2, 0, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ng-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Seleccionar una bodega");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ShoppingCreateComponent_ng_option_35_Template, 2, 2, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ShoppingCreateComponent_div_36_Template, 26, 12, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ShoppingCreateComponent_div_37_Template, 19, 6, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ShoppingCreateComponent_label_41_Template, 2, 0, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ShoppingCreateComponent_label_45_Template, 2, 0, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ShoppingCreateComponent_label_49_Template, 5, 3, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ShoppingCreateComponent_div_51_Template, 6, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function ShoppingCreateComponent_Template_input_keyup_enter_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60); return ctx.onSearchProducts(_r14.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60); return ctx.onSearchProducts(_r14.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_Template_button_click_67_listener() { return ctx.onRefresh(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "i", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_Template_button_click_69_listener() { return ctx.onClearFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_Template_button_click_71_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, ShoppingCreateComponent_div_81_Template, 8, 5, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, " Datos de compra ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "label", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Cantidad");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "input", 48, 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShoppingCreateComponent_Template_input_change_93_listener($event) { return ctx.onChageAmount($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "label", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Impuesto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "ng-select", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShoppingCreateComponent_Template_ng_select_change_99_listener($event) { return ctx.onChageTaxBill($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ShoppingCreateComponent_ng_option_100_Template, 2, 3, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShoppingCreateComponent_Template_input_change_103_listener($event) { return ctx.onChageIncluded($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "label", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " Incluido ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Costo U.");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "input", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ShoppingCreateComponent_Template_input_keyup_110_listener() { return ctx.onChangeUnitPrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, " Datos de venta ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "label", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Impuesto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "ng-select", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShoppingCreateComponent_Template_ng_select_change_126_listener($event) { return ctx.onChangeTaxSale($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, ShoppingCreateComponent_ng_option_127_Template, 2, 3, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "label", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Precio de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "input", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ShoppingCreateComponent_Template_input_keyup_132_listener() { return ctx.onChangeSalePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Ganancia posible");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](137, "input", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "% Ganancia");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](143, ShoppingCreateComponent_div_143_Template, 5, 1, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](144, ShoppingCreateComponent_div_144_Template, 5, 1, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, ShoppingCreateComponent_div_145_Template, 5, 1, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "button", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShoppingCreateComponent_Template_button_click_147_listener() { return ctx.onSave(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](150, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "p", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 33, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 35, "general.createEdit")), " DETALLE DE LA FACTURA ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.providers);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pointsOfSale);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ware_house);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.itemName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.itemsResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taxBill);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taxSales);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.customForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](150, 37, "buttons.save"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.maskSpinner, " ");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbTooltip"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], ngx_currency__WEBPACK_IMPORTED_MODULE_21__["CurrencyMaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]], styles: [".create-customer[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  background-color: #a50721 !important;\n  color: #ffffff !important;\n}\n\n.search-custom[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 10px;\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.322);\n  padding-bottom: 5px !important;\n}\n\n.card-col[_ngcontent-%COMP%] {\n  max-height: 870px;\n  min-height: 200px;\n  overflow: auto;\n}\n\n.discounts[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n\n.total[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.total-bg[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.vat[_ngcontent-%COMP%] {\n  color: blue;\n  font-weight: bold;\n}\n\n.card-sales[_ngcontent-%COMP%] {\n  margin: 5px !important;\n  min-height: 138px !important;\n  box-shadow: 0px 2px 6px 0px rgba(50, 50, 50, 0.322);\n  border: 2px solid rgba(255, 255, 255, 0.247);\n}\n\n.card-sales[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 16px;\n  text-align: right;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.card-sales[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0px !important;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%] {\n  max-width: 62px;\n  display: block;\n  margin: auto;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.75);\n  border-radius: 10px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 2px solid #173afd1f;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:hover {\n  background-color: #173afd;\n  color: white;\n}\n\n.product-name-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #ffffff;\n  background-color: rebeccapurple;\n  text-align: center;\n  word-break: break-all;\n  height: 32px;\n  padding: 4px;\n  border-radius: 25px;\n  border: 2px #ffffff83 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0NBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBR0Esb0RBQUE7RUFDQSwrQkFBQTtDQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7Q0FBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtDQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0NBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0NBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBR0Esb0RBQUE7RUFDQSw2Q0FBQTtDQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NBRUo7O0FBQUU7RUFDRSxhQUFBO0NBRUo7O0FBREk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7Q0FHTjs7QUFGTTtFQUNFLGFBQUE7Q0FJUjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7Q0FFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7Q0FFSjs7QUFESTtFQUdFLG1EQUFBO0VBQ0Esb0JBQUE7Q0FHTjs7QUFBRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0NBRUo7O0FBQ0k7RUFDRSwwQkFBQTtFQUNBLGFBQUE7Q0FDTjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0NBRkYiLCJmaWxlIjoic2hvcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jcmVhdGUtY3VzdG9tZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgNywgMzMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29sICB7XHJcbiAgbWF4LWhlaWdodDogODcwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kaXNjb3VudHMgIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3RhbCAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvdGFsLWJnICB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZhdCAge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC1zYWxlcyB7XHJcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxMzhweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDcpO1xyXG4gIC5wcmljZSAge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZHVjdC1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctcHJvZHVjdCB7XHJcbiAgICBtYXgtd2lkdGg6IDYycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTczYWZkMWY7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3M2FmZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wcm9kdWN0LW5hbWUtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDJweCAjZmZmZmZmODMgc29saWQ7XHJcbn1cclxuIl19 */"] });
    return ShoppingCreateComponent;
}(_core_components_forms__WEBPACK_IMPORTED_MODULE_15__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ShoppingCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-shopping',
                templateUrl: './shopping-create.component.html',
                styleUrls: ['./shopping-create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_13__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_13__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_services_companies__WEBPACK_IMPORTED_MODULE_16__["BranchOfficeService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_9__["PersonsService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_9__["CurrencySysService"] }, { type: _services_global_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_14__["ItemsService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"] }, { type: _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_10__["ShoppingService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_9__["TaxRatesService"] }, { type: _services_global_documents_service__WEBPACK_IMPORTED_MODULE_12__["DocumentsService"] }, { type: _services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_17__["WineriesService"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], myDataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['myDataTable', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['searchField']
        }], focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['focusElement']
        }], amountElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['amountElement']
        }], cashele: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['cashele']
        }], searchbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['searchbar']
        }], myTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['myTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "cfHo":
/*!*****************************************!*\
  !*** ./src/app/pages/shopping/index.ts ***!
  \*****************************************/
/*! exports provided: ProvidersComponent, ProviderFormComponent, InvoicesComponent, InvoicesFormComponent, ShoppingCreateComponent, DetailEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/providers.component */ "5I/j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return _providers_providers_component__WEBPACK_IMPORTED_MODULE_0__["ProvidersComponent"]; });

/* harmony import */ var _providers_provider_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/provider-form.component */ "PQxg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderFormComponent", function() { return _providers_provider_form_component__WEBPACK_IMPORTED_MODULE_1__["ProviderFormComponent"]; });

/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoices/invoices.component */ "fb9e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_2__["InvoicesComponent"]; });

/* harmony import */ var _invoices_invoices_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoices/invoices-form.component */ "iTkM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoicesFormComponent", function() { return _invoices_invoices_form_component__WEBPACK_IMPORTED_MODULE_3__["InvoicesFormComponent"]; });

/* harmony import */ var _shopping_shopping_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping/shopping-create.component */ "YvbY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShoppingCreateComponent", function() { return _shopping_shopping_create_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCreateComponent"]; });

/* harmony import */ var _shopping_detail_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping/detail-edit.component */ "u/3g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailEditComponent", function() { return _shopping_detail_edit_component__WEBPACK_IMPORTED_MODULE_5__["DetailEditComponent"]; });









/***/ }),

/***/ "fb9e":
/*!***************************************************************!*\
  !*** ./src/app/pages/shopping/invoices/invoices.component.ts ***!
  \***************************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/global */ "Absx");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");





// Services














var _c0 = ["customGrid"];
var _c1 = ["detailGrid"];
var _c2 = ["searchField"];
var _c3 = ["myTabs"];
function InvoicesComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoicesComponent_div_74_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.importData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "buttons.import"), " ");
} }
var InvoicesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvoicesComponent, _super);
    function InvoicesComponent(msg, api, router, translate, aRouter, shopSer) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.shopSer = shopSer;
        _this.title = 'Registro de compras';
        _this.invoiceName = '';
        _this.source2 = {
            localdata: [],
            datafields: [
                { name: 'active', type: 'boolean' },
                { name: 'admission_date', type: 'string' },
                { name: 'amount', type: 'number' },
                { name: 'barcode', type: 'string' },
                { name: 'batch', type: 'string' },
                { name: 'expiration_date', type: 'string' },
                { name: 'fabrication_date', type: 'string' },
                { name: 'freight', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'internal_code', type: 'string' },
                { name: 'invoice_id', type: 'number' },
                { name: 'perishable', type: 'boolean' },
                { name: 'product_id', type: 'number' },
                { name: 'product_name', type: 'string' },
                { name: 'sale_price', type: 'number' },
                { name: 'state', type: 'number' },
                { name: 'tax_bill', type: 'number' },
                { name: 'tax_bill_id', type: 'number' },
                { name: 'tax_sale', type: 'number' },
                { name: 'tax_sale_id', type: 'number' },
                { name: 'total_cost', type: 'number' },
                { name: 'unit_cost', type: 'number' },
                { name: 'vat_included', type: 'boolean' },
            ],
            datatype: 'array'
        };
        _this.dataAdapter2 = new jqx.dataAdapter(_this.source2);
        _this.columnsDet = [
            {
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#edit_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    return '<span><i class="fas fa-pen fas-fa-edit fa-cursor"></i></span>';
                },
            },
            {
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#delete_#', columntype: 'text', width: 32,
                cellsrenderer: function (row, column, value) {
                    return '<span><i class="fas fa-trash-alt fas-fa-delete fa-cursor"></i></span>';
                },
            },
            { text: 'Cantidad', datafield: 'amount', align: 'center', width: 80, cellsalign: 'right' },
            { text: 'Producto', datafield: 'product_name', align: 'center', minWidth: 250 },
            { text: 'Precio unitario', datafield: 'unit_cost', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120 },
            { text: 'Precio de venta', datafield: 'sale_price', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120 },
            { text: 'Total', datafield: 'total_cost', align: 'center', cellsalign: 'right', cellsformat: 'c2', width: 120 },
        ];
        return _this;
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    InvoicesComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        ts.crudApi = {
            create: '/shopping/create',
            read: '/shopping/read',
            update: '/shopping/update/',
            delete: '/shopping/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'invoice_nro', type: 'string' },
            { name: 'total', type: 'number' },
            { name: 'branch_name', type: 'string' },
            { name: 'full_name', type: 'string' },
            { name: 'winery_name', type: 'string' },
        ];
        ts.sourceColumns =
            [
                {
                    columngroup: 'Actions',
                    text: '', sortable: false, filterable: false, editable: false, align: 'center',
                    groupable: false, draggable: false, resizable: false,
                    datafield: '#edit_shopping_#', columntype: 'text', width: 32,
                    cellsrenderer: function (row, column, value) {
                        return '<span><i class="fas fa-shopping-cart fas-fa-edit fa-cursor"></i></span>';
                    },
                },
                { text: 'Nº. Factura', datafield: 'invoice_nro', align: 'center', minwidth: 80, width: 100 },
                { text: 'Proveedor', datafield: 'full_name', align: 'center', minwidth: 100 },
                { text: 'Bodega', datafield: 'branch_name', align: 'center', minwidth: 100 },
                { text: 'Total', datafield: 'total', align: 'center', cellsalign: 'right', cellsformat: 'c2', minwidth: 100 },
            ];
        this.prepareGrid();
    };
    /**
     * Click en una celda del detalle de la factura
     */
    InvoicesComponent.prototype.cellDetailClick = function (event) {
        var data = event.args;
        var row = this.detailGrid.getrowdata(data.rowindex);
        var ts = this;
        if (data.datafield === '#edit_#') {
            this.goRoute("pages/shopping/invoices/detail/edit/" + row.id);
        }
        else if (data.datafield === '#delete_#') {
            ts.deleteDetail(row);
        }
    };
    /**
     * Click en una celda de la factura
     */
    InvoicesComponent.prototype.cellClick = function (event) {
        var data = event.args;
        var row = this.customGrid.getrowdata(data.rowindex);
        var ts = this;
        ts.invoiceName = row.invoice_nro;
        if (data.datafield === '#edit_shopping_#') {
            ts.goRoute("pages/shopping/invoices/create/detail/" + row.id);
        }
        else {
            if (data.datafield === '#edit_#') {
                ts.editData(row);
            }
            else if (data.datafield === '#delete_#') {
                ts.deleteData(row);
            }
            else {
                ts.refreshDetail(row.id);
            }
        }
    };
    /**
     * Quita un item del detalle de la factura
     */
    InvoicesComponent.prototype.deleteDetail = function (data) {
        var ts = this;
        var lang = ts.translate;
        // Implements
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: lang.instant('titleMessages.delete'),
            text: lang.instant('bodyMessages.delete'),
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: lang.instant('buttons.yes'),
            cancelButtonText: lang.instant('buttons.not')
        }).then(function (result) {
            if (result.value) {
                ts.api.delete("/shopping/delete/detail/" + data.id)
                    .subscribe(function (resp) {
                    ts.refreshDetail(data.invoice_id);
                }, function (err) {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                });
            }
        });
    };
    /**
     * Refresca los datos del detale de la factura
     */
    InvoicesComponent.prototype.refreshDetail = function (id) {
        var ts = this;
        ts.source2.localdata = [];
        ts.detailGrid.updatebounddata('cells');
        ts.detailGrid.showloadelement();
        ts.shopSer.getDetail(id)
            .subscribe(function (resp) {
            ts.source2.localdata = resp;
            ts.detailGrid.updatebounddata('cells');
            ts.detailGrid.hideloadelement();
        }, function () { return ts.detailGrid.hideloadelement(); });
    };
    InvoicesComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/shopping/invoices/create');
    };
    InvoicesComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/shopping/invoices/edit/" + data.id);
    };
    InvoicesComponent.ɵfac = function InvoicesComponent_Factory(t) { return new (t || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global__WEBPACK_IMPORTED_MODULE_8__["ShoppingService"])); };
    InvoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InvoicesComponent, selectors: [["app-invoices"]], viewQuery: function InvoicesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.detailGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myTabs = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 93, vars: 56, consts: [[3, "width", "height", "position", "animationType", "selectionTracker", "theme"], ["myTabs", ""], [2, "margin-left", "30px"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "example-items-col"], ["width", "100%", 3, "source", "columns", "theme", "disabled", "selectionmode", "columnsresize", "sortable", "filterable", "showfilterrow", "onCellselect"], ["detailGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function InvoicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jqxTabs", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Facturas");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Detalle de la factura");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoicesComponent_Template_button_click_16_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "jqxMenu", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function InvoicesComponent_Template_jqxMenu_onItemclick_19_listener($event) { return ctx.itemclick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoicesComponent_Template_button_click_70_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, InvoicesComponent_div_74_Template, 5, 4, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function InvoicesComponent_Template_input_keyup_78_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoicesComponent_Template_button_click_81_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "jqxGrid", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function InvoicesComponent_Template_jqxGrid_onCellselect_83_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function InvoicesComponent_Template_jqxGrid_onBindingcomplete_83_listener($event) { return ctx.Bindingcomplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "jqxGrid", 37, 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function InvoicesComponent_Template_jqxGrid_onCellselect_91_listener($event) { return ctx.cellDetailClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "100%")("height", 600)("position", "top")("animationType", "fade")("selectionTracker", false)("theme", ctx.theme);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 34, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 36, "export.excel"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 38, "export.csv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 40, "export.xml"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 42, "export.pdf"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 44, "export.html"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 46, "export.json"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 48, "export.tsv"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 50, "export.print"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 52, "buttons.new"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.useImport);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FACTURA N\u00BA: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 54, ctx.invoiceName), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx.dataAdapter2)("columns", ctx.columnsDet)("theme", ctx.theme)("disabled", ctx.loading)("selectionmode", "singlecell")("columnsresize", true)("sortable", true)("filterable", true)("showfilterrow", true);
        } }, directives: [jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_3__["jqxTabsComponent"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_10__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });
    return InvoicesComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_9__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvoicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-invoices',
                templateUrl: './invoices.component.html'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _services_global__WEBPACK_IMPORTED_MODULE_8__["ShoppingService"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], detailGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['detailGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchField']
        }], myTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "iTkM":
/*!********************************************************************!*\
  !*** ./src/app/pages/shopping/invoices/invoices-form.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoicesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesFormComponent", function() { return InvoicesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _services_companies_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/companies/index */ "mm0L");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_global_documents_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/global/documents.service */ "4IXu");
/* harmony import */ var _services_general_persons_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/general/persons.service */ "52YP");
/* harmony import */ var _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/global/shopping.service */ "Cx/d");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-currency */ "Schs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");





























var _c0 = ["focusElement"];
function InvoicesFormComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var provider_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", provider_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", provider_r5.dni, " - ", provider_r5.company_name, " ", provider_r5.full_name, " ");
} }
function InvoicesFormComponent_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", point_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", point_r6.branch_name, " ");
} }
function InvoicesFormComponent_ng_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wa_house_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", wa_house_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", wa_house_r7.winery_name, " ");
} }
function InvoicesFormComponent_ng_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var payment_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", payment_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", payment_r8.payment_method, " ");
} }
var InvoicesFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvoicesFormComponent, _super);
    function InvoicesFormComponent(fb, msg, api, router, translate, aRouter, provSer, docsSer, shopSer, branchSer, wareHouseServ, spinner) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.provSer = provSer;
        _this.docsSer = docsSer;
        _this.shopSer = shopSer;
        _this.branchSer = branchSer;
        _this.wareHouseServ = wareHouseServ;
        _this.spinner = spinner;
        _this.providers = [];
        _this.payments = [];
        _this.ware_house = [];
        _this.pointsOfSale = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            admission_date: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            discount: [0],
            freight: [0],
            rfte: [0],
            invoice_nro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            vat: [0],
            notes: [''],
            pay_day: [new Date().toISOString().split('T')[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            payment_method_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            point_of_sale_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            warehouse_id: ['0'],
            provider_id: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sub_total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        return _this;
    }
    Object.defineProperty(InvoicesFormComponent.prototype, "invalidName", {
        get: function () {
            return this.customForm.get('invoice_nro').invalid && this.customForm.get('invoice_nro').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoicesFormComponent.prototype, "invalidBranch", {
        get: function () {
            return this.customForm.get('point_of_sale_id').invalid && this.customForm.get('point_of_sale_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    InvoicesFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        ts.title = 'Crear/Editar factura de compra';
        ts.PutURL = '/shopping/update/';
        ts.PostURL = '/shopping/create';
        ts.wareHouseServ.getData({}).subscribe(function (resp) {
            ts.ware_house = resp;
        });
        ts.provSer.getProviders({}).subscribe(function (resp) {
            ts.providers = resp;
        });
        ts.docsSer.getPaymentMethods({}).subscribe(function (resp) {
            ts.payments = resp;
            if (resp.length > 0) {
                ts.customForm.get('payment_method_id').setValue(resp[0].id);
            }
        });
        ts.branchSer.getPointsOfSale({}).subscribe(function (resp) {
            ts.pointsOfSale = resp;
            if (resp.length > 0) {
                ts.customForm.get('point_of_sale_id').setValue(resp[0].id);
            }
        });
    };
    InvoicesFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.shopSer.getData({ uid: id }).subscribe(function (resp) {
            var _a;
            frm.setValue({
                admission_date: resp[0].admission_date,
                discount: resp[0].discount,
                freight: resp[0].freight,
                invoice_nro: resp[0].invoice_nro,
                vat: resp[0].vat,
                rfte: resp[0].rfte,
                notes: resp[0].notes,
                pay_day: resp[0].pay_day,
                warehouse_id: (_a = resp[0].warehouse_id) !== null && _a !== void 0 ? _a : '0',
                payment_method_id: resp[0].payment_method_id,
                point_of_sale_id: resp[0].point_of_sale_id,
                provider_id: resp[0].provider_id,
                sub_total: resp[0].sub_total,
                total: resp[0].total,
            });
        });
    };
    InvoicesFormComponent.ɵfac = function InvoicesFormComponent_Factory(t) { return new (t || InvoicesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_8__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_8__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_persons_service__WEBPACK_IMPORTED_MODULE_10__["PersonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_documents_service__WEBPACK_IMPORTED_MODULE_9__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["WineriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
    InvoicesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvoicesFormComponent, selectors: [["app-invoices-form"]], viewQuery: function InvoicesFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 122, vars: 41, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-4"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "formControlName", "invoice_nro", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], [1, "col-md-8"], ["formControlName", "provider_id", "required", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["formControlName", "point_of_sale_id", "required", ""], ["formControlName", "warehouse_id"], ["formControlName", "payment_method_id", "required", ""], ["type", "date", "formControlName", "admission_date", "nbinput", "", "required", "", 1, "form-control"], ["type", "date", "formControlName", "pay_day", "nbinput", "", "required", "", 1, "form-control"], ["currencyMask", "", "formControlName", "sub_total", "nbinput", "", "required", "", 1, "form-control"], ["currencyMask", "", "formControlName", "discount", "nbinput", "", 1, "form-control"], ["currencyMask", "", "formControlName", "vat", "nbinput", "", 1, "form-control"], ["currencyMask", "", "formControlName", "freight", "nbinput", "", 1, "form-control"], ["currencyMask", "", "formControlName", "rfte", "nbinput", "", 1, "form-control"], ["currencyMask", "", "formControlName", "total", "ngbTooltip", "Total", "nbinput", "", "required", "", 1, "form-control"], [1, "col"], ["formControlName", "notes", "nbinput", "", 1, "form-control"], [1, "card-footer"], [3, "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function InvoicesFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "N\u00BA. de la factura");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Proveedor");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Seleccionar proveedor");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, InvoicesFormComponent_ng_option_29_Template, 2, 4, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Punto de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ng-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Seleccionar punto de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, InvoicesFormComponent_ng_option_41_Template, 2, 2, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Bodega");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ng-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ng-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Seleccionar bopdega");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, InvoicesFormComponent_ng_option_49_Template, 2, 2, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Forma de pago");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "ng-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, InvoicesFormComponent_ng_option_59_Template, 2, 2, "ng-option", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Fecha de emisi\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Fecha de pago");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Subtotal");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Descuento");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "IVA");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Cargo/Seguro/Flete");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Retefuente");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](111, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Notas");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "textarea", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "app-footer-form", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function InvoicesFormComponent_Template_app_footer_form_closeEvent_121_listener() { return ctx.cancel(); })("saveAndCreateEvent", function InvoicesFormComponent_Template_app_footer_form_saveAndCreateEvent_121_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function InvoicesFormComponent_Template_app_footer_form_saveAndCloseEvent_121_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 23, "general.createEdit")), " FACTURA DE COMPRA ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 25, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 27, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.providers);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 29, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pointsOfSale);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ware_house);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 31, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.payments);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 33, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](73, 35, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 37, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](111, 39, "general.asterisk"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showAaveACreate", false)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ngx_currency__WEBPACK_IMPORTED_MODULE_14__["CurrencyMaskDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTooltip"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_16__["FooterFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtDQUNGOztBQUdBO0VBQ0UsUUFBQTtDQUFGOztBQUdBO0VBQ0UsMEJBQUE7Q0FBRjs7QUFHQTtFQUNFLGtCQUFBO0NBQUYiLCJmaWxlIjoiZm9ybS1sYXlvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2hlY2tib3gge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSA+ICoge1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbiJdfQ== */"] });
    return InvoicesFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InvoicesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-invoices-form',
                templateUrl: './invoices-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_8__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_8__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_general_persons_service__WEBPACK_IMPORTED_MODULE_10__["PersonsService"] }, { type: _services_global_documents_service__WEBPACK_IMPORTED_MODULE_9__["DocumentsService"] }, { type: _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }, { type: _services_companies_index__WEBPACK_IMPORTED_MODULE_7__["WineriesService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "u/3g":
/*!******************************************************************!*\
  !*** ./src/app/pages/shopping/shopping/detail-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEditComponent", function() { return DetailEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxdatatable */ "3HhI");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../services/general/index */ "PcHl");
/* harmony import */ var _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../services/global/shopping.service */ "Cx/d");
/* harmony import */ var _services_global_reports_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../services/global/reports.service */ "PU63");
/* harmony import */ var _services_global_documents_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../services/global/documents.service */ "4IXu");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../services/products/index */ "UnFQ");
/* harmony import */ var _core_components_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../core/components/forms */ "xg8E");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-currency */ "Schs");










// Services
























var _c0 = ["customGrid"];
var _c1 = ["myDataTable"];
var _c2 = ["searchField"];
var _c3 = ["focusElement"];
var _c4 = ["amountElement"];
var _c5 = ["cashele"];
var _c6 = ["searchbar"];
var _c7 = ["myTabs"];
function DetailEditComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_div_41_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); var itemres_r8 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.onClickItem(itemres_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var itemres_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", itemres_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, itemres_r8.sale_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](itemres_r8.product_name);
} }
function DetailEditComponent_ng_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var taxB_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taxB_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", taxB_r11.name_taxe, " - ", taxB_r11.rate_value, " % ");
} }
function DetailEditComponent_ng_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var taxS_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", taxS_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", taxS_r12.name_taxe, " - ", taxS_r12.rate_value, " % ");
} }
function DetailEditComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Lote #");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r5.perishable);
} }
function DetailEditComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Fecha de fabricaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r6.perishable);
} }
function DetailEditComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Fecha de vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r7.perishable);
} }
var DetailEditComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DetailEditComponent, _super);
    function DetailEditComponent(fb, msg, api, router, translate, aRouter, currSer, reporstSer, itemsSer, spinner, documents, shopSer, taxSer) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.currSer = currSer;
        _this.reporstSer = reporstSer;
        _this.itemsSer = itemsSer;
        _this.spinner = spinner;
        _this.documents = documents;
        _this.shopSer = shopSer;
        _this.taxSer = taxSer;
        _this.title = 'Productos/Servicios';
        _this.items = [];
        _this.itemsResult = [];
        _this.lines = [];
        _this.taxBill = [];
        _this.taxSales = [];
        _this.perishable = false;
        _this.itemName = "";
        _this.oldItem = [];
        _this.customForm = _this.fb.group({
            amount: [''],
            batch: [''],
            expiration_date: [''],
            fabrication_date: [''],
            product_name: [''],
            sale_price: [''],
            tax_bill_id: [''],
            tax_sale_id: [''],
            total_cost: [''],
            unit_cost: [''],
            unit_price: [''],
            gain: [''],
            percentage_gain: [''],
            vat_included: [''],
        });
        return _this;
    }
    DetailEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ts = this;
        var frm = ts.customForm;
        ts.showSpinner();
        ts.taxSer.getData({ isVat: true }).subscribe(function (resp) {
            ts.taxBill = resp;
            ts.taxSales = resp;
            _super.prototype.ngOnInit.call(_this);
        });
    };
    DetailEditComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
    };
    DetailEditComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.shopSer.getDetailID(id).subscribe(function (resp) {
            ts.oldItem = resp;
            ts.onClearForm();
            ts.onRefresh();
        });
    };
    /**
     * Cuando se cambia el precio de compra
     */
    DetailEditComponent.prototype.onChangeUnitPrice = function () {
        this.onPurchaseData();
    };
    /**
     * Cuando se cambia el precio de venta
     */
    DetailEditComponent.prototype.onChangeSalePrice = function () {
        this.onSalesData();
    };
    /**
     * Cuando se selecciona un item de la lista de productos
     */
    DetailEditComponent.prototype.onClickItem = function (i) {
        var ts = this;
        var frm = ts.customForm;
        var line = i;
        var lang = ts.translate;
        if (line.class_id !== 2) {
            // Implements
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                title: 'Cambiar item',
                text: 'Está a punto de cambiar el ITEM, ¿Desea continuar.?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: lang.instant('buttons.yes'),
                cancelButtonText: lang.instant('buttons.not')
            }).then(function (result) {
                if (result.value) {
                    ts.perishable = line.perishable;
                    var purchase_cost = parseFloat(line.purchase_cost.toString()) / parseFloat(line.tax_bill_rate.toString());
                    frm.get('amount').setValue(1);
                    frm.get('unit_price').setValue(purchase_cost);
                    frm.get('tax_bill_id').setValue(line.tax_bill_id);
                    frm.get('tax_sale_id').setValue(line.tax_sales_id);
                    var sale_price = parseFloat(((purchase_cost * line.percentage_gain) / 100).toString()) + purchase_cost;
                    if (line.sale_price > sale_price) {
                        sale_price = line.sale_price;
                    }
                    frm.get('sale_price').setValue(sale_price);
                    ts.amountElement.nativeElement.focus;
                    ts.itemSelect = line;
                    ts.itemName = line.product_name;
                    ts.onChageTaxBill(line.tax_bill_id);
                    ts.onChangeTaxSale(line.tax_sales_id);
                }
            });
        }
        else {
            ts.msg.toastMessage('', 'El item seleccionado no maneja inventarios.', 4);
            ts.onClearForm();
        }
    };
    /**
     * Quita filtro activo
     */
    DetailEditComponent.prototype.onClearFilter = function () {
        var ts = this;
        ts.onClearForm();
        ts.searchField.nativeElement.value = '';
        ts.itemsResult = ts.items;
        ts.searchField.nativeElement.focus;
    };
    /**
     * Actualiza listado de productos
     */
    DetailEditComponent.prototype.onRefresh = function () {
        var ts = this;
        ts.showSpinner('Cargando listado de productos.');
        ts.itemsSer.getDataSales({}).subscribe(function (resp) {
            ts.items = resp;
            ts.hideSpinner();
            ts.itemsResult = ts.items;
            ts.searchField.nativeElement.focus;
        }, function () { return ts.hideSpinner(); });
    };
    /**
     * Búsqueda de productos
     */
    DetailEditComponent.prototype.onSearchProducts = function (query) {
        var ts = this;
        ts.showSpinner();
        ts.onClearForm();
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
    /**
     * Limpia el formulario
     */
    DetailEditComponent.prototype.onClearForm = function () {
        var ts = this;
        var frm = ts.customForm;
        var resp = ts.oldItem;
        ts.itemSelect = null;
        ts.itemName = '';
        ts.taxBillSelect = ts.taxBill.find(function (tax) { return tax.id === resp[0].tax_bill_id; });
        var unitCost = resp[0].unit_cost;
        /**
         * Si no tiene iva Incluido, se resta para dejar el precio unitario correcto
         */
        if (!resp[0].vat_included) {
            unitCost = parseFloat(resp[0].unit_cost.toString()) / parseFloat(ts.taxBillSelect.decimal_rate.toString());
        }
        frm.setValue({
            amount: resp[0].amount,
            batch: resp[0].batch,
            expiration_date: resp[0].expiration_date,
            fabrication_date: resp[0].fabrication_date,
            product_name: resp[0].product_name,
            sale_price: resp[0].sale_price,
            tax_bill_id: resp[0].tax_bill_id,
            tax_sale_id: resp[0].tax_sale_id,
            total_cost: resp[0].total_cost,
            unit_cost: resp[0].unit_cost,
            unit_price: unitCost,
            gain: 0,
            percentage_gain: 0,
            vat_included: resp[0].vat_included,
        });
        ts.perishable = resp[0].perishable;
        ts.searchField.nativeElement.focus;
        ts.onChageTaxBill(resp[0].tax_bill_id);
        ts.onChangeTaxSale(resp[0].tax_sale_id);
        ts.onPurchaseData();
    };
    /**
     * Cuando se selecciona un nuevo impuesto de compra
     */
    DetailEditComponent.prototype.onChageTaxBill = function (val) {
        var ts = this;
        ts.taxBillSelect = ts.taxBill.find(function (tax) { return tax.id === val; });
        ts.onPurchaseData();
    };
    /**
     * Cuando se cambia la cantidad
     */
    DetailEditComponent.prototype.onChageAmount = function (e) {
        this.onPurchaseData();
    };
    /**
     * Cuando se cambia el impuesto incluido
     */
    DetailEditComponent.prototype.onChageIncluded = function (e) {
        this.onPurchaseData();
    };
    /**
     * Cuando se selecciona un nuevo impuesto de venta
     */
    DetailEditComponent.prototype.onChangeTaxSale = function (val) {
        var ts = this;
        ts.taxSaleSelect = ts.taxSales.find(function (tax) { return tax.id === val; });
        ts.onSalesData();
    };
    /**
     * Calcula los valores de venta
     */
    DetailEditComponent.prototype.onSalesData = function () {
        var ts = this;
        if (ts.taxSaleSelect) {
            var frm = ts.customForm;
            var unit_price = parseFloat(frm.get('unit_price').value);
            var sale_price = parseFloat(frm.get('sale_price').value);
            var vat = parseFloat(ts.taxBillSelect.decimal_rate.toString());
            var vatSale = parseFloat(ts.taxSaleSelect.decimal_rate.toString());
            var included = frm.get('vat_included').value;
            var realPrice = 0;
            var realCost = 0;
            var gain = 0;
            var percGain = 0;
            if (included == true) { // Impuesto incluido en el precio de compra
                realCost = (unit_price / vat);
            }
            else {
                realCost = unit_price;
            }
            realPrice = (sale_price / vatSale);
            gain = realPrice - realCost;
            percGain = (gain / realPrice) * 100;
            frm.get('gain').setValue(gain);
            frm.get('percentage_gain').setValue(percGain.toFixed(2) + " %");
        }
    };
    /**
     *
     * Calcula los valores de compra
     */
    DetailEditComponent.prototype.onPurchaseData = function () {
        var ts = this;
        if (ts.taxBillSelect) {
            var frm = ts.customForm;
            var amount = parseFloat(frm.get('amount').value);
            var unit_price = parseFloat(frm.get('unit_price').value);
            var vat = parseFloat(ts.taxBillSelect.decimal_rate.toString());
            var included = frm.get('vat_included').value;
            var unit_cost = (vat > 0) ? (unit_price * vat) : unit_price;
            var total = unit_cost * amount;
            if (included == true) { // Impuesto incluido en el precio de compra
                frm.get('unit_cost').setValue(unit_price);
                frm.get('total_cost').setValue(unit_price * amount);
            }
            else {
                frm.get('unit_cost').setValue(unit_cost);
                frm.get('total_cost').setValue(total);
            }
            if (amount > 0) {
                ts.onSalesData();
            }
        }
    };
    /**
     * Guarda la factura y el detalle
     */
    DetailEditComponent.prototype.onSave = function (content) {
        if (content === void 0) { content = {}; }
        var ts = this;
        var frm = ts.customForm;
        var uid = ts.uid;
        var values = frm.getRawValue();
        if (parseFloat(values.amount) <= 0 || parseFloat(values.sale_price) <= 0 || parseFloat(values.unit_cost) <= 0) {
            ts.msg.toastMessage('', 'Hay un error en las cantidades.', 4);
            return false;
        }
        if (frm.invalid) {
            ts.msg.toastMessage('', 'Hay campos sin llenar.', 4);
            return false;
        }
        if (uid) {
            ts.onSaveDetail(values);
        }
        else {
            ts.msg.toastMessage('Error', 'Error en la aplicación');
        }
    };
    DetailEditComponent.prototype.onSaveDetail = function (values) {
        var ts = this;
        ts.showSpinner('Guardando cambios');
        if (ts.itemSelect) {
            if (!ts.itemSelect.perishable) {
                values.batch = null;
                values.fabrication_date = null;
                values.expiration_date = null;
            }
            values.product_id = ts.itemSelect.id;
        }
        else if (!ts.oldItem[0].perishable) {
            values.batch = null;
            values.fabrication_date = null;
            values.expiration_date = null;
        }
        var data = {
            records: JSON.stringify(values)
        };
        ts.api.put("/shopping/update/detail/" + ts.uid, data).subscribe(function (resp) {
            if (resp.success) {
                ts.msg.toastMessage('', 'Los cambios se han guardado correctamente.');
                ts.onClose();
            }
            else {
                ts.msg.toastMessage('', resp.message, 4);
            }
            ts.searchField.nativeElement.focus;
            ts.hideSpinner();
        }, function (resp) {
            ts.hideSpinner();
        });
    };
    DetailEditComponent.prototype.onClose = function () {
        this.goRoute("pages/shopping/invoices");
    };
    DetailEditComponent.ɵfac = function DetailEditComponent_Factory(t) { return new (t || DetailEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_14__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_14__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_reports_service__WEBPACK_IMPORTED_MODULE_12__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_15__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_documents_service__WEBPACK_IMPORTED_MODULE_13__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_10__["TaxRatesService"])); };
    DetailEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DetailEditComponent, selectors: [["app-detail-edit"]], viewQuery: function DetailEditComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myDataTable = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.amountElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cashele = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchbar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.myTabs = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 114, vars: 14, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "container-fluid", "padding-top-bottom"], [1, "row"], [1, "col"], [1, "form-group"], ["type", "text", "nbinput", "", "fullWidth", "", "formControlName", "product_name", 1, "form-control", 3, "readOnly"], [1, "col-md-7"], [1, "page-search-input", "form-group"], [1, "input-group"], ["type", "search", "id", "searchbar", "placeholder", "B\u00FAsqueda", "autofocus", "", 1, "form-control", "rounded-right", "form-control-lg", "shadow", "pl-2", 3, "keyup.enter"], ["searchField", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "search-btn", "rounded", "space-right", 3, "click"], [1, "d-none", "d-sm-block"], [1, "fas", "fa-search"], ["type", "button", "ngbTooltip", "Crear nuevo producto", 1, "btn", "btn-success", "space-right", "radius-button"], [1, "fas", "fa-plus", "fas-fa-22"], ["type", "button", "ngbTooltip", "Refrescar", 1, "btn", "btn-info", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-sync", "fas-fa-22"], ["type", "button", "ngbTooltip", "Limpiar", 1, "btn", "btn-danger", "space-right", "radius-button", 3, "click"], [1, "fas", "fa-broom", "fas-fa-22"], ["type", "button", "ngbTooltip", "Cerrar", 1, "btn", "btn-danger", "radius-button", 3, "click"], [1, "fas", "fa-times", "fas-fa-22"], [1, "col", "product-name-header"], [1, "col", "card-col"], [1, "card-columns"], ["class", "card card-sales", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "card-col"], [1, "form-group", "row"], ["for", "inputQuantity", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "number", "id", "inputQuantity", "placeholder", "Cantidad", "formControlName", "amount", 1, "form-control", 3, "change"], ["amountElement", ""], ["for", "selectBill", 1, "col-sm-3", "col-form-label"], ["id", "selectBill", "formControlName", "tax_bill_id", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "id", "ckInclude", "formControlName", "vat_included", 1, "form-check-input", 3, "change"], ["for", "ckInclude", 1, "form-check-label"], ["for", "inputAmount1", 1, "col-sm-3", "col-form-label"], ["formControlName", "unit_price", "currencyMask", "", "type", "text", "id", "inputAmount1", "ngbTooltip", "Costo unitario sin impuesto", "placeholder", "Costo unitario", 1, "form-control", 3, "keyup"], [1, "col-sm-6"], ["formControlName", "unit_cost", "currencyMask", "", "type", "text", "id", "inputAmount", "ngbTooltip", "Costo unitario con impuesto", "placeholder", "Costo unitario", "readonly", "", 1, "form-control", "radius-button", "total"], ["formControlName", "total_cost", "type", "text", "currencyMask", "", "placeholder", "Total", "readonly", "", 1, "form-control", "radius-button", "total"], ["for", "selectSale", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["id", "selectSale", "formControlName", "tax_sale_id", 3, "change"], ["for", "salePrice", 1, "col-sm-4", "col-form-label"], ["formControlName", "sale_price", "currencyMask", "", "type", "text", "id", "salePrice", "placement", "bottom", "ngbTooltip", "Precio de venta con impuesto incluido", "placeholder", "Precio de venta", 1, "form-control", 3, "keyup"], [1, "col-sm-4", "col-form-label"], ["readonly", "", "formControlName", "gain", "currencyMask", "", "type", "text", "placement", "bottom", "ngbTooltip", "Ganancia posible", "placeholder", "Ganancia posible", 1, "form-control"], ["readonly", "", "formControlName", "percentage_gain", "type", "text", "placement", "bottom", "ngbTooltip", "Procentaje Ganancia posible", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], ["type", "button", 1, "btn", "radius-button", "btn-primary", "space-right", "radius-button", "btn-block", 3, "disabled", "click"], [1, "fas", "fa-save", "fas-fa-22"], [2, "color", "white"], [1, "card", "card-sales", 3, "click"], ["fallimg", "product", 1, "img-product", "card-img-top", 3, "src"], [1, "price"], [1, "product-name"], [3, "value"], [1, "col-sm-5", "col-form-label"], [1, "col-sm-7"], ["formControlName", "batch", "type", "text", 1, "form-control", 3, "readonly"], ["formControlName", "fabrication_date", "type", "date", 1, "form-control", 3, "readonly"], ["formControlName", "expiration_date", "type", "date", 1, "form-control", 3, "readonly"]], template: function DetailEditComponent_Template(rf, ctx) { if (rf & 1) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " EDITAR DETALLE DEL ITEM ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre del producto.");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function DetailEditComponent_Template_input_keyup_enter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20); return ctx.onSearchProducts(_r0.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20); return ctx.onSearchProducts(_r0.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_Template_button_click_27_listener() { return ctx.onRefresh(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_Template_button_click_29_listener() { return ctx.onClearFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_Template_button_click_31_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, DetailEditComponent_div_41_Template, 8, 5, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Datos de compra ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Cantidad");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DetailEditComponent_Template_input_change_53_listener($event) { return ctx.onChageAmount($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Impuesto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ng-select", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DetailEditComponent_Template_ng_select_change_59_listener($event) { return ctx.onChageTaxBill($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, DetailEditComponent_ng_option_60_Template, 2, 3, "ng-option", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DetailEditComponent_Template_input_change_63_listener($event) { return ctx.onChageIncluded($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Incluido ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "label", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Costo U.");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "input", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function DetailEditComponent_Template_input_keyup_70_listener() { return ctx.onChangeUnitPrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Datos de venta ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Impuesto");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "ng-select", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DetailEditComponent_Template_ng_select_change_86_listener($event) { return ctx.onChangeTaxSale($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, DetailEditComponent_ng_option_87_Template, 2, 3, "ng-option", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "label", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Precio de venta");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "input", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function DetailEditComponent_Template_input_keyup_92_listener() { return ctx.onChangeSalePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "label", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Ganancia posible");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "label", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "% Ganancia");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "input", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, DetailEditComponent_div_103_Template, 5, 1, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, DetailEditComponent_div_104_Template, 5, 1, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, DetailEditComponent_div_105_Template, 5, 1, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "button", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailEditComponent_Template_button_click_107_listener() { return ctx.onSave(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "p", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.editing);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.itemName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.itemsResult);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taxBill);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taxSales);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.perishable);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.customForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 12, "buttons.save"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.maskSpinner, " ");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_20__["CurrencyMaskDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵr"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]], styles: [".create-customer[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  background-color: #a50721 !important;\n  color: #ffffff !important;\n}\n\n.search-custom[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 10px;\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.322);\n  padding-bottom: 5px !important;\n}\n\n.card-col[_ngcontent-%COMP%] {\n  max-height: 870px;\n  min-height: 200px;\n  overflow: auto;\n}\n\n.discounts[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n\n.total[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.total-bg[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.vat[_ngcontent-%COMP%] {\n  color: blue;\n  font-weight: bold;\n}\n\n.card-sales[_ngcontent-%COMP%] {\n  margin: 5px !important;\n  min-height: 138px !important;\n  box-shadow: 0px 2px 6px 0px rgba(50, 50, 50, 0.322);\n  border: 2px solid rgba(255, 255, 255, 0.247);\n}\n\n.card-sales[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 16px;\n  text-align: right;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: white;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover   .price[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.card-sales[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0px !important;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%] {\n  max-width: 62px;\n  display: block;\n  margin: auto;\n}\n\n.card-sales[_ngcontent-%COMP%]   .img-product[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.75);\n  border-radius: 10px;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.card-sales[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 2px solid #173afd1f;\n}\n\n.card-sales[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]:hover {\n  background-color: #173afd;\n  color: white;\n}\n\n.product-name-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #ffffff;\n  background-color: rebeccapurple;\n  text-align: center;\n  word-break: break-all;\n  height: 32px;\n  padding: 4px;\n  border-radius: 25px;\n  border: 2px #ffffff83 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0NBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBR0Esb0RBQUE7RUFDQSwrQkFBQTtDQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7Q0FBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtDQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0NBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0NBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0VBR0Esb0RBQUE7RUFDQSw2Q0FBQTtDQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NBRUo7O0FBQUU7RUFDRSxhQUFBO0NBRUo7O0FBREk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7Q0FHTjs7QUFGTTtFQUNFLGFBQUE7Q0FJUjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7Q0FFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7Q0FFSjs7QUFESTtFQUdFLG1EQUFBO0VBQ0Esb0JBQUE7Q0FHTjs7QUFBRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NBRUo7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0NBRUo7O0FBQ0k7RUFDRSwwQkFBQTtFQUNBLGFBQUE7Q0FDTjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0NBRkYiLCJmaWxlIjoic2hvcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jcmVhdGUtY3VzdG9tZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgNywgMzMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY29sICB7XHJcbiAgbWF4LWhlaWdodDogODcwcHg7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kaXNjb3VudHMgIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3RhbCAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRvdGFsLWJnICB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZhdCAge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC1zYWxlcyB7XHJcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxMzhweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA2cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC4zMjIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDcpO1xyXG4gIC5wcmljZSAge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZHVjdC1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctcHJvZHVjdCB7XHJcbiAgICBtYXgtd2lkdGg6IDYycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDJweCA4cHggMHB4IHJnYmEoNTAsIDUwLCA1MCwgMC43NSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTczYWZkMWY7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3M2FmZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wcm9kdWN0LW5hbWUtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDJweCAjZmZmZmZmODMgc29saWQ7XHJcbn1cclxuIl19 */"] });
    return DetailEditComponent;
}(_core_components_forms__WEBPACK_IMPORTED_MODULE_16__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DetailEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-detail-edit',
                templateUrl: './detail-edit.component.html',
                styleUrls: ['./shopping-create.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_14__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_14__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_10__["CurrencySysService"] }, { type: _services_global_reports_service__WEBPACK_IMPORTED_MODULE_12__["ReportsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_15__["ItemsService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _services_global_documents_service__WEBPACK_IMPORTED_MODULE_13__["DocumentsService"] }, { type: _services_global_shopping_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_10__["TaxRatesService"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], myDataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['myDataTable', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['searchField']
        }], focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['focusElement']
        }], amountElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['amountElement']
        }], cashele: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['cashele']
        }], searchbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['searchbar']
        }], myTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['myTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "xldJ":
/*!***************************************************!*\
  !*** ./src/app/pages/shopping/shopping.module.ts ***!
  \***************************************************/
/*! exports provided: customCurrencyMaskConfig, ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customCurrencyMaskConfig", function() { return customCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxtabs */ "Z1v9");
/* harmony import */ var jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxdatatable */ "3HhI");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-currency */ "Schs");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../core/core.module */ "pKmL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _shopping_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-routing.module */ "6twU");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../shopping/shopping.component */ "CZ9L");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index */ "cfHo");
/* harmony import */ var _invoices_invoices_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoices/invoices-form.component */ "iTkM");












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
var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShoppingModule });
    ShoppingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShoppingModule_Factory(t) { return new (t || ShoppingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_6__["jqxDataTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
                ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
                jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_5__["jqxTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                _shopping_routing_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingRoutingModule"]
            ]] });
    return ShoppingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShoppingModule, { declarations: [_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ProvidersComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ProviderFormComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["InvoicesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ShoppingCreateComponent"],
        _invoices_invoices_form_component__WEBPACK_IMPORTED_MODULE_16__["InvoicesFormComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["DetailEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
        jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_6__["jqxDataTableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"], ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
        jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_5__["jqxTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
        _shopping_routing_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ProvidersComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ProviderFormComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["InvoicesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ShoppingCreateComponent"],
                    _invoices_invoices_form_component__WEBPACK_IMPORTED_MODULE_16__["InvoicesFormComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["DetailEditComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                    jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_6__["jqxDataTableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_4__["jqxMenuModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridModule"],
                    jqwidgets_ng_jqxtabs__WEBPACK_IMPORTED_MODULE_5__["jqxTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                    _shopping_routing_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shopping-shopping-module.js.map