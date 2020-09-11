(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./src/app/pages/companies/branch-office/branch-office.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/companies/branch-office/branch-office.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeComponent", function() { return BranchOfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class BranchOfficeComponent extends _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Sucursales';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
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
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/companies/branchoffice/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/companies/branchoffice/edit/${data.id}`);
    }
}
BranchOfficeComponent.ɵfac = function BranchOfficeComponent_Factory(t) { return new (t || BranchOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
BranchOfficeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BranchOfficeComponent, selectors: [["app-branch-office"]], viewQuery: function BranchOfficeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function BranchOfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function BranchOfficeComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BranchOfficeComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchOfficeComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function BranchOfficeComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function BranchOfficeComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "export.excel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "export.csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "export.xml"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "export.pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 29, "export.html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 31, "export.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "export.tsv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 35, "export.print"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 37, "buttons.new"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 39, "buttons.import"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchOfficeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-branch-office',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/branch-office/edit-branch-office/edit-branch-office.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/companies/branch-office/edit-branch-office/edit-branch-office.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditBranchOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBranchOfficeComponent", function() { return EditBranchOfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/companies/branch-office.service */ "./src/app/services/companies/branch-office.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["focusElement"];
function EditBranchOfficeComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cur_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cur_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/flags/" + cur_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cur_r3.CurrencyName, " ");
} }
function EditBranchOfficeComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coun_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", coun_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/flags/" + coun_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", coun_r4.country_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditBranchOfficeComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, branch, coun, curr) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.branch = branch;
        this.coun = coun;
        this.curr = curr;
        this.countries = [];
        this.currency = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            country_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            branch_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
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
    }
    get invalidCountry() {
        return (this.customForm.get('country_id').value === 0) ? true : false;
    }
    get invalidCurrency() {
        return (this.customForm.get('currency_id').value === 0) ? true : false;
    }
    get invalidBranchName() {
        return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.PutURL = '/companies/branchoffice/update/';
        ts.PostURL = '/companies/branchoffice/create';
        ts.coun.getData().subscribe((resp) => {
            ts.countries = resp;
        });
        ts.curr.getData().subscribe((resp) => {
            ts.currency = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.branch.getData({ uid: id }).subscribe((resp) => {
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
        });
    }
}
EditBranchOfficeComponent.ɵfac = function EditBranchOfficeComponent_Factory(t) { return new (t || EditBranchOfficeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"])); };
EditBranchOfficeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditBranchOfficeComponent, selectors: [["app-edit-branch-office"]], viewQuery: function EditBranchOfficeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 123, vars: 92, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "autofocus", "", "required", "", "formControlName", "branch_name", "name", "branch_name", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", "form-control"], ["focusElement", ""], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "country_id", "name", "country_id", "required", "", 3, "loading"], ["type", "text", "nbinput", "", "formControlName", "postal_code", "name", "postal_code", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["nbinput", "", "formControlName", "address", "name", "address", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["nbinput", "", "formControlName", "address2", "name", "address2", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "nbinput", "", "formControlName", "location", "name", "location", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "email", "nbinput", "", "formControlName", "email", "name", "email", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "maxlength", "12", "nbinput", "", "formControlName", "mobile", "name", "mobile", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "nbinput", "", "formControlName", "phone", "name", "phone", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "maxlength", "12", "nbinput", "", "formControlName", "web", "name", "web", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "checkbox", "formControlName", "is_point_of_sale", "id", "is_point_of_sale", "name", "is_point_of_sale", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", 2, "margin-right", "2%"], ["for", "is_point_of_sale"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function EditBranchOfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EditBranchOfficeComponent_ng_option_31_Template, 3, 3, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, EditBranchOfficeComponent_ng_option_42_Template, 3, 3, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditBranchOfficeComponent_Template_button_click_108_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditBranchOfficeComponent_Template_button_click_114_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditBranchOfficeComponent_Template_button_click_119_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 44, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 46, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 48, "branchs.title")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 50, "general.asterisk"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 52, "branchs.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchName)("status-danger", ctx.invalidBranchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 54, "general.asterisk"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 56, "general.currency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrency)("status-danger", ctx.invalidCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.currency.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 58, "general.asterisk"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 60, "general.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidCountry)("status-danger", ctx.invalidCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.countries.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 62, "branchs.postalCode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 64, "branchs.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 66, "branchs.address2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 68, "branchs.location"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 70, "branchs.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 72, "branchs.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 74, "branchs.phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 76, "branchs.web"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](104, 78, "branchs.isPointOfSale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 80, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](86, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](117, 82, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](89, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](122, 84, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditBranchOfficeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-branch-office',
                templateUrl: './edit-branch-office.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }, { type: src_app_services_global__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }, { type: src_app_services_global__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/companies-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/companies/companies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.component */ "./src/app/pages/companies/companies.component.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/pages/companies/index.ts");
/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts");
/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts");








const routes = [{
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
class CompaniesRoutingModule {
}
CompaniesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesRoutingModule });
CompaniesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesRoutingModule_Factory(t) { return new (t || CompaniesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/companies/companies.component.ts ***!
  \********************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CompaniesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(); };
CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], decls: 1, vars: 0, template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/companies/companies.module.ts ***!
  \*****************************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/pages/companies/companies-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./src/app/pages/companies/index.ts");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./companies.component */ "./src/app/pages/companies/companies.component.ts");
/* harmony import */ var _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./branch-office/edit-branch-office/edit-branch-office.component */ "./src/app/pages/companies/branch-office/edit-branch-office/edit-branch-office.component.ts");
/* harmony import */ var _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-type/company-type-form.component */ "./src/app/pages/companies/company-type/company-type-form.component.ts");
/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts");
/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts");
/* harmony import */ var _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./points-of-sale/points-of-sale.component */ "./src/app/pages/companies/points-of-sale/points-of-sale.component.ts");
/* harmony import */ var _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./points-of-sale/points-of-sale-form.component */ "./src/app/pages/companies/points-of-sale/points-of-sale-form.component.ts");







/*
  * Translation
*/















class CompaniesModule {
}
CompaniesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesModule });
CompaniesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesModule_Factory(t) { return new (t || CompaniesModule)(); }, imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _companies_routing_module__WEBPACK_IMPORTED_MODULE_11__["CompaniesRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
            jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesModule, { declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_13__["CompaniesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["BranchOfficeComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["CompanyTypeComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["DepartmentsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["WineriesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
        _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_14__["EditBranchOfficeComponent"],
        _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_15__["CompanyTypeFormComponent"],
        _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_16__["EditWineriesComponent"],
        _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_17__["EditDepartmensComponent"],
        _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_18__["PointsOfSaleComponent"],
        _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_19__["PointsOfSaleFormComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _companies_routing_module__WEBPACK_IMPORTED_MODULE_11__["CompaniesRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _companies_routing_module__WEBPACK_IMPORTED_MODULE_11__["CompaniesRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: (http) => {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                ],
                declarations: [
                    _companies_component__WEBPACK_IMPORTED_MODULE_13__["CompaniesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["BranchOfficeComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["CompanyTypeComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["DepartmentsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["WineriesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
                    _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_14__["EditBranchOfficeComponent"],
                    _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_15__["CompanyTypeFormComponent"],
                    _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_16__["EditWineriesComponent"],
                    _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_17__["EditDepartmensComponent"],
                    _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_18__["PointsOfSaleComponent"],
                    _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_19__["PointsOfSaleFormComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/company-type/company-type-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/companies/company-type/company-type-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeFormComponent", function() { return CompanyTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/companies/type-organization.service */ "./src/app/services/companies/type-organization.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["focusElement"];
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class CompanyTypeFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, types) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.types = types;
        this.customForm = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]]
        });
    }
    get invalidName() {
        return this.customForm.get('description').invalid && this.customForm.get('description').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.title = 'Crear/Editar tipo de compañia';
        ts.PutURL = '/companies/companytype/update/';
        ts.PostURL = '/companies/companytype/create';
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.types.getData({ uid: id }).subscribe((resp) => {
            frm.setValue({
                description: resp[0].description
            });
        });
    }
}
CompanyTypeFormComponent.ɵfac = function CompanyTypeFormComponent_Factory(t) { return new (t || CompanyTypeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__["TypeOrganizationService"])); };
CompanyTypeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyTypeFormComponent, selectors: [["app-company-type-form"]], viewQuery: function CompanyTypeFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 41, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-12"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "name", "description", "formControlName", "description", "required", "", "autofocus", ""], ["focusElement", ""], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"]], template: function CompanyTypeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeFormComponent_Template_button_click_25_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeFormComponent_Template_button_click_31_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeFormComponent_Template_button_click_36_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 23, "typeOrganization.title")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 25, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 27, "typeOrganization.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 29, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 31, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 33, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyTypeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-type-form',
                templateUrl: './company-type-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_6__["TypeOrganizationService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/company-type/company-type.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/companies/company-type/company-type.component.ts ***!
  \************************************************************************/
/*! exports provided: CompanyTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeComponent", function() { return CompanyTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class CompanyTypeComponent extends _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Tipos de compañia';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
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
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/companies/companytype/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/companies/companytype/edit/${data.id}`);
    }
}
CompanyTypeComponent.ɵfac = function CompanyTypeComponent_Factory(t) { return new (t || CompanyTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CompanyTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyTypeComponent, selectors: [["app-company-type"]], viewQuery: function CompanyTypeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function CompanyTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function CompanyTypeComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CompanyTypeComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTypeComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function CompanyTypeComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CompanyTypeComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "export.excel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "export.csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "export.xml"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "export.pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 29, "export.html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 31, "export.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "export.tsv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 35, "export.print"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 37, "buttons.new"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 39, "buttons.import"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-type',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/company/company.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/companies/company/company.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/companies/type-organization.service */ "./src/app/services/companies/type-organization.service.ts");
/* harmony import */ var src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global/index */ "./src/app/services/global/index.ts");
/* harmony import */ var src_app_services_companies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/companies */ "./src/app/services/companies/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = ["companyName"];
function CompanyComponent_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typeOrg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", typeOrg_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", typeOrg_r5.description, " ");
} }
function CompanyComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const docs_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", docs_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", docs_r6.document_name, " ");
} }
function CompanyComponent_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", curre_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/flags/" + curre_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", curre_r7.CurrencyName, " ");
} }
function CompanyComponent_ng_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/flags/" + country_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r8.country_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class CompanyComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, api, msg, router, translate, aRouter, tor, docs, cnt, curr, company) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.api = api;
        this.msg = msg;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.tor = tor;
        this.docs = docs;
        this.cnt = cnt;
        this.curr = curr;
        this.company = company;
        this.typeOrg = [];
        this.identityDocs = [];
        this.countries = [];
        this.currency = [];
        this.customForm = this.fb.group({
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identity_document_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type_organization_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            number_employees: [0],
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            dni: [''],
            address: [''],
            location: [''],
            postal_code: [''],
            mobile: [''],
            phone: [''],
            web: [''],
            email: ['']
        });
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
        this.title = 'Datos de la compañia';
        this.loadData();
    }
    ngAfterViewInit() {
        this.companyName.nativeElement.focus();
        const ts = this;
        ts.docs.getData({}).subscribe((resp) => {
            ts.identityDocs = resp;
        });
        ts.cnt.getData().subscribe((resp) => {
            ts.countries = resp;
        });
        ts.curr.getData().subscribe((resp) => {
            ts.currency = resp;
        });
        this.tor.getData({}).subscribe((resp) => {
            this.typeOrg = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            this.company.getData({}).subscribe((resp) => {
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
            });
        });
    }
    // VALIDATION
    get invalidCompanyName() {
        return this.customForm.get('company_name').invalid && this.customForm.get('company_name').touched;
    }
    get invalidEmail() {
        return this.customForm.get('email').invalid && this.customForm.get('email').touched;
    }
    get invalidOrganization() {
        return (this.customForm.get('type_organization_id').value <= 0) ? true : false;
    }
    get invalidIdentity() {
        return (this.customForm.get('identity_document_id').value <= 0) ? true : false;
    }
    get invalidCountry() {
        return (this.customForm.get('country_id').value <= 0) ? true : false;
    }
    get invalidCurrency() {
        return (this.customForm.get('currency_id').value <= 0) ? true : false;
    }
    // GET PLACEHOLDERS
    get placeholderCompanyName() {
        return this.translate.instant('companies.company_name');
    }
    get placeholderDni() {
        return this.translate.instant('companies.dni');
    }
    get placeholderDv() {
        return this.translate.instant('companies.dv');
    }
    get placeholderAddress() {
        return this.translate.instant('companies.address');
    }
    get placeholderLocation() {
        return this.translate.instant('companies.location');
    }
    get placeholderPostalCode() {
        return this.translate.instant('companies.postal_code');
    }
    get placeholderMobile() {
        return this.translate.instant('companies.mobile');
    }
    get placeholderPhone() {
        return this.translate.instant('companies.phone');
    }
    get placeholderEmail() {
        return this.translate.instant('companies.email');
    }
    get placeholderWeb() {
        return this.translate.instant('companies.web');
    }
    saveAndClose() {
        super.saveAndClose();
        this.toClose = true;
        this.saveData();
    }
    saveData() {
        const ts = this;
        const frm = ts.customForm;
        const lang = ts.translate;
        if (!frm.invalid) {
            if (ts.editing) {
                const data = {
                    records: JSON.stringify(frm.value)
                };
                ts.api.put(`/company/update/${ts.uid}`, data)
                    .subscribe((resp) => {
                    ts.msg.toastMessage(lang.instant('general.savedSuccessfully'), resp.message, 0);
                    ts.editing = false;
                    ts.close();
                    ts.disabledLoading();
                }, (err) => {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                    ts.disabledLoading();
                });
            }
            else {
                ts.api.post('/company/create', frm.value)
                    .subscribe((resp) => {
                    ts.msg.toastMessage(lang.instant('general.successfullyCreated'), resp.message, 0);
                    ts.close();
                    ts.disabledLoading();
                }, (err) => {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                    ts.disabledLoading();
                });
            }
        }
    }
    close() {
        this.goRoute('/');
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_7__["TypeOrganizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["IdentityDocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies__WEBPACK_IMPORTED_MODULE_9__["CompanyService"])); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], viewQuery: function CompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.companyName = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 129, vars: 107, consts: [[3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "company_name", "required", "", "autofocus", "", "name", "company_name", 1, "form-control"], ["companyName", ""], ["fullWidth", "", "formControlName", "type_organization_id", "required", "", "name", "type_organization_id", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], ["fullWidth", "", "formControlName", "identity_document_id", "required", "", "name", "identity_document_id", 3, "loading"], ["type", "text", "name", "dni", "nbInput", "", "fullWidth", "", "formControlName", "dni"], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", "", 3, "loading"], ["fullWidth", "", "formControlName", "country_id", "required", "", "name", "country_id", 3, "loading"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "address", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "location", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "postal_code", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "mobile", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "phone", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "email", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "web", 3, "placeholder"], ["type", "number", "min", "0", "nbInput", "", "fullWidth", "", "formControlName", "number_employees", 3, "placeholder"], [1, "row", "flex"], [1, "space-right", "float-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ng-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CompanyComponent_ng_option_26_Template, 2, 2, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CompanyComponent_ng_option_37_Template, 2, 2, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CompanyComponent_ng_option_54_Template, 3, 3, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CompanyComponent_ng_option_64_Template, 3, 3, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_119_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyComponent_Template_button_click_125_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 60, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 62, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 64, "companies.company_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidCompanyName)("is-invalid", ctx.invalidCompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 66, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 68, "companies.type_organization"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidOrganization);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.typeOrg.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 70, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 72, "companies.identity_document"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidIdentity)("status-danger", ctx.invalidIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.identityDocs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.identityDocs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 74, "companies.dni"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 76, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 78, "companies.currency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrency)("status-danger", ctx.invalidCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.currency.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 80, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 82, "companies.country"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidCountry)("status-danger", ctx.invalidCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.countries.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 84, "companies.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 86, "companies.location"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 88, "companies.postal_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderPostalCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 90, "companies.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 92, "companies.phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](101, 94, "companies.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 96, "companies.web"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderWeb);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 98, "companies.number_employees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholderWeb);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](123, 100, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](104, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](128, 102, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_companies_type_organization_service__WEBPACK_IMPORTED_MODULE_7__["TypeOrganizationService"] }, { type: src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["IdentityDocumentsService"] }, { type: src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] }, { type: src_app_services_global_index__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"] }, { type: src_app_services_companies__WEBPACK_IMPORTED_MODULE_9__["CompanyService"] }]; }, { companyName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['companyName']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/departments/departments.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/companies/departments/departments.component.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class DepartmentsComponent extends _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Departamentos';
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
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
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/companies/departments/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/companies/departments/edit/${data.id}`);
    }
}
DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-departaments"]], viewQuery: function DepartmentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function DepartmentsComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DepartmentsComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function DepartmentsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function DepartmentsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "export.excel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "export.csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "export.xml"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "export.pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 29, "export.html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 31, "export.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "export.tsv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 35, "export.print"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 37, "buttons.new"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 39, "buttons.import"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-departaments',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditDepartmensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDepartmensComponent", function() { return EditDepartmensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/companies/index */ "./src/app/services/companies/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = ["focusElement"];
function EditDepartmensComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", branch_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r2.branch_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditDepartmensComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, types, branch) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.types = types;
        this.branch = branch;
        this.branch_office = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            department_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            branch_office_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]]
        });
    }
    get invalidName() {
        return this.customForm.get('department_name').invalid && this.customForm.get('department_name').touched;
    }
    get invalidBranch() {
        return (this.customForm.get('branch_office_id').value === 0) ? true : false;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.title = 'Crear/Editar departamentos';
        ts.PutURL = '/companies/departments/update/';
        ts.PostURL = '/companies/departments/create';
        ts.branch.getData({}).subscribe((resp) => {
            ts.branch_office = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.types.getData({ uid: id }).subscribe((resp) => {
                frm.setValue({
                    branch_office_id: resp[0].branch_office_id,
                    department_name: resp[0].department_name,
                });
            });
        });
    }
}
EditDepartmensComponent.ɵfac = function EditDepartmensComponent_Factory(t) { return new (t || EditDepartmensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["DepartmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"])); };
EditDepartmensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditDepartmensComponent, selectors: [["app-edit-departmens"]], viewQuery: function EditDepartmensComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 53, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "fullWidth", "", "placeholder", "Descripci\u00F3n *", "name", "department_name", "formControlName", "department_name", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["focusElement", ""], ["fullWidth", "", "formControlName", "branch_office_id", "name", "branch_office_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function EditDepartmensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EditDepartmensComponent_ng_option_31_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDepartmensComponent_Template_button_click_35_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDepartmensComponent_Template_button_click_41_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDepartmensComponent_Template_button_click_46_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 27, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 31, "departments.title")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 33, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 35, "departments.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 37, "general.asterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 39, "departments.branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidBranch)("status-danger", ctx.invalidBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.branch_office.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branch_office);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 41, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](47, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 43, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](50, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 45, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditDepartmensComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-departmens',
                templateUrl: './edit-departmens.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["DepartmentsService"] }, { type: src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/companies/index.ts ***!
  \******************************************/
/*! exports provided: CompanyComponent, BranchOfficeComponent, PointsOfSaleComponent, PointsOfSaleFormComponent, CompanyTypeComponent, CompanyTypeFormComponent, DepartmentsComponent, WineriesComponent, EditBranchOfficeComponent, EditWineriesComponent, EditDepartmensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/company.component */ "./src/app/pages/companies/company/company.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return _company_company_component__WEBPACK_IMPORTED_MODULE_0__["CompanyComponent"]; });

/* harmony import */ var _branch_office_branch_office_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-office/branch-office.component */ "./src/app/pages/companies/branch-office/branch-office.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeComponent", function() { return _branch_office_branch_office_component__WEBPACK_IMPORTED_MODULE_1__["BranchOfficeComponent"]; });

/* harmony import */ var _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points-of-sale/points-of-sale.component */ "./src/app/pages/companies/points-of-sale/points-of-sale.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleComponent", function() { return _points_of_sale_points_of_sale_component__WEBPACK_IMPORTED_MODULE_2__["PointsOfSaleComponent"]; });

/* harmony import */ var _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points-of-sale/points-of-sale-form.component */ "./src/app/pages/companies/points-of-sale/points-of-sale-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleFormComponent", function() { return _points_of_sale_points_of_sale_form_component__WEBPACK_IMPORTED_MODULE_3__["PointsOfSaleFormComponent"]; });

/* harmony import */ var _company_type_company_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-type/company-type.component */ "./src/app/pages/companies/company-type/company-type.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeComponent", function() { return _company_type_company_type_component__WEBPACK_IMPORTED_MODULE_4__["CompanyTypeComponent"]; });

/* harmony import */ var _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-type/company-type-form.component */ "./src/app/pages/companies/company-type/company-type-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyTypeFormComponent", function() { return _company_type_company_type_form_component__WEBPACK_IMPORTED_MODULE_5__["CompanyTypeFormComponent"]; });

/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/pages/companies/departments/departments.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"]; });

/* harmony import */ var _wineries_wineries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wineries/wineries.component */ "./src/app/pages/companies/wineries/wineries.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WineriesComponent", function() { return _wineries_wineries_component__WEBPACK_IMPORTED_MODULE_7__["WineriesComponent"]; });

/* harmony import */ var _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch-office/edit-branch-office/edit-branch-office.component */ "./src/app/pages/companies/branch-office/edit-branch-office/edit-branch-office.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditBranchOfficeComponent", function() { return _branch_office_edit_branch_office_edit_branch_office_component__WEBPACK_IMPORTED_MODULE_8__["EditBranchOfficeComponent"]; });

/* harmony import */ var _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wineries/edit-wineries/edit-wineries.component */ "./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditWineriesComponent", function() { return _wineries_edit_wineries_edit_wineries_component__WEBPACK_IMPORTED_MODULE_9__["EditWineriesComponent"]; });

/* harmony import */ var _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./departments/edit-departmens/edit-departmens.component */ "./src/app/pages/companies/departments/edit-departmens/edit-departmens.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditDepartmensComponent", function() { return _departments_edit_departmens_edit_departmens_component__WEBPACK_IMPORTED_MODULE_10__["EditDepartmensComponent"]; });














/***/ }),

/***/ "./src/app/pages/companies/points-of-sale/points-of-sale-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/companies/points-of-sale/points-of-sale-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PointsOfSaleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleFormComponent", function() { return PointsOfSaleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/companies/branch-office.service */ "./src/app/services/companies/branch-office.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = ["focusElement"];
function PointsOfSaleFormComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cur_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cur_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cur_r2.branch_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class PointsOfSaleFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, branch) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.branch = branch;
        this.branchs = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            branch_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            address: [''],
            mobile: [''],
            phone: [''],
        });
    }
    get invalidBranchId() {
        return (this.customForm.get('branch_id').value === 0) ? true : false;
    }
    get invalidBranchName() {
        return this.customForm.get('branch_name').invalid && this.customForm.get('branch_name').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.title = `${lang.instant('general.createEdit')} ${lang.instant('pointsofsale.title')}`;
        ts.PutURL = '/companies/branchoffice/update/pointofsale/';
        ts.PostURL = '/companies/branchoffice/create/pointofsale';
        ts.branch.getData({}).subscribe((resp) => {
            ts.branchs = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.branch.getPointsOfSale({ uid: id }).subscribe((resp) => {
                frm.setValue({
                    branch_id: resp[0].branch_id,
                    branch_name: resp[0].branch_name,
                    address: resp[0].address,
                    mobile: resp[0].mobile,
                    phone: resp[0].phone,
                });
            });
        });
    }
}
PointsOfSaleFormComponent.ɵfac = function PointsOfSaleFormComponent_Factory(t) { return new (t || PointsOfSaleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"])); };
PointsOfSaleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PointsOfSaleFormComponent, selectors: [["app-points-of-sale-form"]], viewQuery: function PointsOfSaleFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 68, vars: 55, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbinput", "", "autofocus", "", "required", "", "formControlName", "branch_name", "name", "branch_name", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", "form-control"], ["focusElement", ""], ["fullWidth", "", "formControlName", "branch_id", "name", "branch_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col"], ["nbinput", "", "formControlName", "address", "name", "address", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "maxlength", "12", "nbinput", "", "formControlName", "mobile", "name", "mobile", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["type", "text", "nbinput", "", "formControlName", "phone", "name", "phone", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function PointsOfSaleFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PointsOfSaleFormComponent_ng_option_28_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PointsOfSaleFormComponent_Template_button_click_53_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PointsOfSaleFormComponent_Template_button_click_59_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PointsOfSaleFormComponent_Template_button_click_64_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 27, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 29, "general.asterisk"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 31, "pointsofsale.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchName)("status-danger", ctx.invalidBranchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 33, "general.asterisk"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 35, "pointsofsale.branch_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidBranchId)("status-danger", ctx.invalidBranchId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.branchs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branchs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 37, "pointsofsale.address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 39, "pointsofsale.phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 41, "pointsofsale.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 43, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](49, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 45, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](52, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 47, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PointsOfSaleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-points-of-sale-form',
                templateUrl: './points-of-sale-form.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_companies_branch_office_service__WEBPACK_IMPORTED_MODULE_7__["BranchOfficeService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/points-of-sale/points-of-sale.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/companies/points-of-sale/points-of-sale.component.ts ***!
  \****************************************************************************/
/*! exports provided: PointsOfSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsOfSaleComponent", function() { return PointsOfSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class PointsOfSaleComponent extends _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Puntos de venta';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
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
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/companies/pointofsale/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/companies/pointofsale/edit/${data.id}`);
    }
}
PointsOfSaleComponent.ɵfac = function PointsOfSaleComponent_Factory(t) { return new (t || PointsOfSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PointsOfSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PointsOfSaleComponent, selectors: [["app-points-of-sale"]], viewQuery: function PointsOfSaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function PointsOfSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function PointsOfSaleComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PointsOfSaleComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointsOfSaleComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function PointsOfSaleComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function PointsOfSaleComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "export.excel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "export.csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "export.xml"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "export.pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 29, "export.html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 31, "export.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "export.tsv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 35, "export.print"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 37, "buttons.new"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 39, "buttons.import"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointsOfSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-points-of-sale',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/companies/wineries/edit-wineries/edit-wineries.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditWineriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWineriesComponent", function() { return EditWineriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/companies/wineries.service */ "./src/app/services/companies/wineries.service.ts");
/* harmony import */ var src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/companies/index */ "./src/app/services/companies/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["focusElement"];
function EditWineriesComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", branch_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r3.branch_name, " ");
} }
function EditWineriesComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const depart_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", depart_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", depart_r4.department_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditWineriesComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, winerSer, branch, depart) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.winerSer = winerSer;
        this.branch = branch;
        this.depart = depart;
        this.branch_office = [];
        this.departments = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            winery_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            department_id: ['']
        });
    }
    get invalidName() {
        return this.customForm.get('winery_name').invalid && this.customForm.get('winery_name').touched;
    }
    get invalidBranch() {
        return this.customForm.get('branch_id').invalid && this.customForm.get('branch_id').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.title = 'Crear/Editar bodegas';
        ts.PutURL = '/companies/wineries/update/';
        ts.PostURL = '/companies/wineries/create';
        ts.branch.getData({}).subscribe((resp) => {
            ts.branch_office = resp;
        });
        ts.depart.getData({}).subscribe((resp) => {
            ts.departments = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.winerSer.getData({ uid: id }).subscribe((resp) => {
                frm.setValue({
                    branch_id: resp[0].branch_id,
                    department_id: resp[0].department_id,
                    winery_name: resp[0].winery_name,
                });
            });
        });
    }
}
EditWineriesComponent.ɵfac = function EditWineriesComponent_Factory(t) { return new (t || EditWineriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__["WineriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"])); };
EditWineriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditWineriesComponent, selectors: [["app-edit-wineries"]], viewQuery: function EditWineriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 56, vars: 58, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "asterisk"], ["type", "text", "nbinput", "", "fullWidth", "", "name", "winery_name", "formControlName", "winery_name", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["focusElement", ""], ["fullWidth", "", "formControlName", "branch_id", "name", "branch_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "overflow-box"], ["fullWidth", "", "formControlName", "department_id", "name", "department_id", "appendTo", "body", 3, "loading"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function EditWineriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditWineriesComponent_ng_option_29_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EditWineriesComponent_ng_option_37_Template, 2, 2, "ng-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditWineriesComponent_Template_button_click_41_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditWineriesComponent_Template_button_click_47_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditWineriesComponent_Template_button_click_52_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 30, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 34, "wineries.title")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 36, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 38, "wineries.name"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 40, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 42, "wineries.branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidBranch)("status-danger", ctx.invalidBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.branch_office.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branch_office);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 44, "wineries.department"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.departments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 46, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](52, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 48, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](55, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 50, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditWineriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-wineries',
                templateUrl: './edit-wineries.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_companies_wineries_service__WEBPACK_IMPORTED_MODULE_7__["WineriesService"] }, { type: src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["BranchOfficeService"] }, { type: src_app_services_companies_index__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/companies/wineries/wineries.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/companies/wineries/wineries.component.ts ***!
  \****************************************************************/
/*! exports provided: WineriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineriesComponent", function() { return WineriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class WineriesComponent extends _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Bodegas';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
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
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/companies/wineries/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/companies/wineries/edit/${data.id}`);
    }
}
WineriesComponent.ɵfac = function WineriesComponent_Factory(t) { return new (t || WineriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
WineriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WineriesComponent, selectors: [["app-wineries"]], viewQuery: function WineriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function WineriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function WineriesComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function WineriesComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WineriesComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function WineriesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function WineriesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 19, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "export.excel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "export.csv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "export.xml"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 27, "export.pdf"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 29, "export.html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 31, "export.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 33, "export.tsv"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 35, "export.print"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 37, "buttons.new"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 39, "buttons.import"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading)("auto-create", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WineriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wineries',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/services/companies/branch-office.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/companies/branch-office.service.ts ***!
  \*************************************************************/
/*! exports provided: BranchOfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeService", function() { return BranchOfficeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class BranchOfficeService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/companies/branchoffice/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getPointsOfSale(params) {
        const ts = this;
        return ts.api.get('/companies/branchoffice/read/pointofsale', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
BranchOfficeService.ɵfac = function BranchOfficeService_Factory(t) { return new (t || BranchOfficeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
BranchOfficeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchOfficeService, factory: BranchOfficeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchOfficeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/companies/company.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/companies/company.service.ts ***!
  \*******************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");




class CompanyService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/company/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/companies/departments.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/companies/departments.service.ts ***!
  \***********************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class DepartmentsService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/companies/departments/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
DepartmentsService.ɵfac = function DepartmentsService_Factory(t) { return new (t || DepartmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
DepartmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentsService, factory: DepartmentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/companies/index.ts":
/*!*********************************************!*\
  !*** ./src/app/services/companies/index.ts ***!
  \*********************************************/
/*! exports provided: TypeOrganizationService, WineriesService, CompanyService, DepartmentsService, BranchOfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-organization.service */ "./src/app/services/companies/type-organization.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationService", function() { return _type_organization_service__WEBPACK_IMPORTED_MODULE_0__["TypeOrganizationService"]; });

/* harmony import */ var _wineries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wineries.service */ "./src/app/services/companies/wineries.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WineriesService", function() { return _wineries_service__WEBPACK_IMPORTED_MODULE_1__["WineriesService"]; });

/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.service */ "./src/app/services/companies/company.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]; });

/* harmony import */ var _departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments.service */ "./src/app/services/companies/departments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return _departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentsService"]; });

/* harmony import */ var _branch_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-office.service */ "./src/app/services/companies/branch-office.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchOfficeService", function() { return _branch_office_service__WEBPACK_IMPORTED_MODULE_4__["BranchOfficeService"]; });








/***/ }),

/***/ "./src/app/services/companies/type-organization.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/companies/type-organization.service.ts ***!
  \*****************************************************************/
/*! exports provided: TypeOrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationService", function() { return TypeOrganizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class TypeOrganizationService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/typeorganization', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
TypeOrganizationService.ɵfac = function TypeOrganizationService_Factory(t) { return new (t || TypeOrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
TypeOrganizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypeOrganizationService, factory: TypeOrganizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeOrganizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/companies/wineries.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/companies/wineries.service.ts ***!
  \********************************************************/
/*! exports provided: WineriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineriesService", function() { return WineriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class WineriesService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    getData(params) {
        const ts = this;
        return ts.api.get('/companies/wineries/read', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
WineriesService.ɵfac = function WineriesService_Factory(t) { return new (t || WineriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
WineriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WineriesService, factory: WineriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WineriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=companies-companies-module.js.map