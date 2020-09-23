(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounting-accounting-module~companies-companies-module~general-general-module~products-prod~a4a7109c"],{

/***/ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js ***!
  \*********************************************************************************/
/*! exports provided: jqxMenuComponent, jqxMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxMenuComponent", function() { return jqxMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxMenuModule", function() { return jqxMenuModule; });
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jqwidgets/jqxcore */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxcore.js");
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jqwidgets/jqxdata */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxdata.js");
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqwidgets_jqxmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jqwidgets/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxmenu.js");
/* harmony import */ var _jqwidgets_jqxmenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxmenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






/// <reference path="../../jqwidgets.d.ts" />


const _c0 = ["*"];
let jqxMenuComponent = class jqxMenuComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onItemclick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxMenu('setOptions', options);
    }
    // jqxMenuComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    }
    autoCloseInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    }
    autoSizeMainItems(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    }
    autoCloseOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    }
    autoOpenPopup(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    }
    autoCloseOnMouseLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    }
    clickToOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    }
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    }
    showTopLevelArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    }
    // jqxMenuComponent functions
    closeItem(itemID) {
        this.host.jqxMenu('closeItem', itemID);
    }
    close() {
        this.host.jqxMenu('close');
    }
    disable(itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    }
    destroy() {
        this.host.jqxMenu('destroy');
    }
    focus() {
        this.host.jqxMenu('focus');
    }
    minimize() {
        this.host.jqxMenu('minimize');
    }
    open(left, top) {
        this.host.jqxMenu('open', left, top);
    }
    openItem(itemID) {
        this.host.jqxMenu('openItem', itemID);
    }
    restore() {
        this.host.jqxMenu('restore');
    }
    setItemOpenDirection(item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    }
    __wireEvents__() {
        this.host.on('closed', (eventData) => { this.onClosed.emit(eventData); });
        this.host.on('itemclick', (eventData) => { this.onItemclick.emit(eventData); });
        this.host.on('shown', (eventData) => { this.onShown.emit(eventData); });
    }
};
jqxMenuComponent.ɵfac = function jqxMenuComponent_Factory(t) { return new (t || jqxMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
jqxMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: jqxMenuComponent, selectors: [["jqxMenu"]], inputs: { autoCreate: ["auto-create", "autoCreate"], attrAnimationShowDuration: ["animationShowDuration", "attrAnimationShowDuration"], attrAnimationHideDuration: ["animationHideDuration", "attrAnimationHideDuration"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAutoCloseInterval: ["autoCloseInterval", "attrAutoCloseInterval"], attrAutoSizeMainItems: ["autoSizeMainItems", "attrAutoSizeMainItems"], attrAutoCloseOnClick: ["autoCloseOnClick", "attrAutoCloseOnClick"], attrAutoOpenPopup: ["autoOpenPopup", "attrAutoOpenPopup"], attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAutoCloseOnMouseLeave: ["autoCloseOnMouseLeave", "attrAutoCloseOnMouseLeave"], attrClickToOpen: ["clickToOpen", "attrClickToOpen"], attrDisabled: ["disabled", "attrDisabled"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEasing: ["easing", "attrEasing"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrMinimizeWidth: ["minimizeWidth", "attrMinimizeWidth"], attrMode: ["mode", "attrMode"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrRtl: ["rtl", "attrRtl"], attrShowTopLevelArrows: ["showTopLevelArrows", "attrShowTopLevelArrows"], attrSource: ["source", "attrSource"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"] }, outputs: { onClosed: "onClosed", onItemclick: "onItemclick", onShown: "onShown" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function jqxMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, encapsulation: 2 }); //jqxMenuComponent
jqxMenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('animationShowDuration'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationShowDuration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('animationHideDuration'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationHideDuration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('animationHideDelay'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationHideDelay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('animationShowDelay'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationShowDelay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoCloseInterval'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], jqxMenuComponent.prototype, "attrAutoCloseInterval", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoSizeMainItems'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoSizeMainItems", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoCloseOnClick'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoCloseOnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoOpenPopup'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoOpenPopup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoOpen'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoCloseOnMouseLeave'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoCloseOnMouseLeave", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('clickToOpen'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrClickToOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('enableHover'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrEnableHover", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('easing'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)
], jqxMenuComponent.prototype, "attrEasing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('keyboardNavigation'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrKeyboardNavigation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('minimizeWidth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "attrMinimizeWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('mode'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)
], jqxMenuComponent.prototype, "attrMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('popupZIndex'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "attrPopupZIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('rtl'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrRtl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('showTopLevelArrows'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "attrShowTopLevelArrows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('source'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "attrSource", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('theme'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)
], jqxMenuComponent.prototype, "attrTheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('width'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "attrWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('height'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "attrHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('auto-create'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], jqxMenuComponent.prototype, "autoCreate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "onClosed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "onItemclick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], jqxMenuComponent.prototype, "onShown", void 0);
jqxMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]])
], jqxMenuComponent);

let jqxMenuModule = class jqxMenuModule {
};
jqxMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: jqxMenuModule });
jqxMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function jqxMenuModule_Factory(t) { return new (t || jqxMenuModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](jqxMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'jqxMenu',
                template: '<div><ng-content></ng-content></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }]; }, { autoCreate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['auto-create']
        }], onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], onItemclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], attrAnimationShowDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['animationShowDuration']
        }], attrAnimationHideDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['animationHideDuration']
        }], attrAnimationHideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['animationHideDelay']
        }], attrAnimationShowDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['animationShowDelay']
        }], attrAutoCloseInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoCloseInterval']
        }], attrAutoSizeMainItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoSizeMainItems']
        }], attrAutoCloseOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoCloseOnClick']
        }], attrAutoOpenPopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoOpenPopup']
        }], attrAutoOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoOpen']
        }], attrAutoCloseOnMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['autoCloseOnMouseLeave']
        }], attrClickToOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['clickToOpen']
        }], attrDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['disabled']
        }], attrEnableHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['enableHover']
        }], attrEasing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['easing']
        }], attrKeyboardNavigation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['keyboardNavigation']
        }], attrMinimizeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['minimizeWidth']
        }], attrMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['mode']
        }], attrPopupZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['popupZIndex']
        }], attrRtl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['rtl']
        }], attrShowTopLevelArrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['showTopLevelArrows']
        }], attrSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['source']
        }], attrTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['theme']
        }], attrWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['width']
        }], attrHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['height']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](jqxMenuModule, { declarations: [jqxMenuComponent], exports: [jqxMenuComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](jqxMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [],
                declarations: [jqxMenuComponent],
                exports: [jqxMenuComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF3aWRnZXRzLW5nLWpxeG1lbnUuanMiLCJzb3VyY2VzIjpbImpxd2lkZ2V0cy1uZy1qcXhtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7NkJBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUtHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9qcXdpZGdldHMvanF4Y29yZSc7XG5pbXBvcnQgJy4uL2pxd2lkZ2V0cy9qcXhkYXRhJztcbmltcG9ydCAnLi4vanF3aWRnZXRzL2pxeG1lbnUnO1xuaW1wb3J0IHsgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgQ29tcG9uZW50LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxyXG5sZXQganF4TWVudUNvbXBvbmVudCA9IGNsYXNzIGpxeE1lbnVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYXV0b0NyZWF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gWydhbmltYXRpb25TaG93RHVyYXRpb24nLCAnYW5pbWF0aW9uSGlkZUR1cmF0aW9uJywgJ2FuaW1hdGlvbkhpZGVEZWxheScsICdhbmltYXRpb25TaG93RGVsYXknLCAnYXV0b0Nsb3NlSW50ZXJ2YWwnLCAnYXV0b1NpemVNYWluSXRlbXMnLCAnYXV0b0Nsb3NlT25DbGljaycsICdhdXRvT3BlblBvcHVwJywgJ2F1dG9PcGVuJywgJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScsICdjbGlja1RvT3BlbicsICdkaXNhYmxlZCcsICdlbmFibGVIb3ZlcicsICdlYXNpbmcnLCAnaGVpZ2h0JywgJ2tleWJvYXJkTmF2aWdhdGlvbicsICdtaW5pbWl6ZVdpZHRoJywgJ21vZGUnLCAncG9wdXBaSW5kZXgnLCAncnRsJywgJ3Nob3dUb3BMZXZlbEFycm93cycsICdzb3VyY2UnLCAndGhlbWUnLCAnd2lkdGgnXTtcclxuICAgICAgICAvLyBqcXhNZW51Q29tcG9uZW50IGV2ZW50c1xyXG4gICAgICAgIHRoaXMub25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5vbkl0ZW1jbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLm9uU2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcmVFcXVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4TWVudSh0aGlzLnByb3BlcnRpZXNbaV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeE1lbnUodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnJheXNFcXVhbChhdHRyVmFsdWUsIGhvc3RWYWx1ZSkge1xyXG4gICAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBtYW5hZ2VBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgbW92ZUNsYXNzZXMocGFyZW50RWwsIGNoaWxkRWwpIHtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHBhcmVudEVsLmNsYXNzTGlzdDtcclxuICAgICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgICBtb3ZlU3R5bGVzKHBhcmVudEVsLCBjaGlsZEVsKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcclxuICAgICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcclxuICAgICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb21wb25lbnQob3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcclxuICAgICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XHJcbiAgICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeE1lbnUnLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVdpZGdldChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBfX3VwZGF0ZVJlY3RfXygpIHtcclxuICAgICAgICBpZiAodGhpcy5ob3N0KVxyXG4gICAgICAgICAgICB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcclxuICAgIH1cclxuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBqcXhNZW51Q29tcG9uZW50IHByb3BlcnRpZXNcclxuICAgIGFuaW1hdGlvblNob3dEdXJhdGlvbihhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEdXJhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGlvbkhpZGVEdXJhdGlvbihhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGlvbkhpZGVEZWxheShhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEZWxheScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvbkhpZGVEZWxheScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGlvblNob3dEZWxheShhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEZWxheScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2FuaW1hdGlvblNob3dEZWxheScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9DbG9zZUludGVydmFsKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlSW50ZXJ2YWwnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VJbnRlcnZhbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9TaXplTWFpbkl0ZW1zKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYXV0b1NpemVNYWluSXRlbXMnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvU2l6ZU1haW5JdGVtcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9DbG9zZU9uQ2xpY2soYXJnKSB7XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvQ2xvc2VPbkNsaWNrJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b0Nsb3NlT25DbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9PcGVuUG9wdXAoYXJnKSB7XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlblBvcHVwJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnYXV0b09wZW5Qb3B1cCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9PcGVuKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnYXV0b09wZW4nLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdhdXRvT3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9DbG9zZU9uTW91c2VMZWF2ZShhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2F1dG9DbG9zZU9uTW91c2VMZWF2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrVG9PcGVuKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnY2xpY2tUb09wZW4nLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdjbGlja1RvT3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpc2FibGVkKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnZGlzYWJsZWQnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVuYWJsZUhvdmVyKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnZW5hYmxlSG92ZXInLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdlbmFibGVIb3ZlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVhc2luZyhhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Vhc2luZycsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2Vhc2luZycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhlaWdodChhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2hlaWdodCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2hlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleWJvYXJkTmF2aWdhdGlvbihhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2tleWJvYXJkTmF2aWdhdGlvbicsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1pbmltaXplV2lkdGgoYXJnKSB7XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdtaW5pbWl6ZVdpZHRoJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnbWluaW1pemVXaWR0aCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vZGUoYXJnKSB7XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdtb2RlJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4TWVudSgnbW9kZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvcHVwWkluZGV4KGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgncG9wdXBaSW5kZXgnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCdwb3B1cFpJbmRleCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJ0bChhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3J0bCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3J0bCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dUb3BMZXZlbEFycm93cyhhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3Nob3dUb3BMZXZlbEFycm93cycsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3Nob3dUb3BMZXZlbEFycm93cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNvdXJjZShhcmcpIHtcclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ3NvdXJjZScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeE1lbnUoJ3NvdXJjZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoZW1lKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgndGhlbWUnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCd0aGVtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpZHRoKGFyZykge1xyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnd2lkdGgnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhNZW51KCd3aWR0aCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGpxeE1lbnVDb21wb25lbnQgZnVuY3Rpb25zXHJcbiAgICBjbG9zZUl0ZW0oaXRlbUlEKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeE1lbnUoJ2Nsb3NlSXRlbScsIGl0ZW1JRCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnY2xvc2UnKTtcclxuICAgIH1cclxuICAgIGRpc2FibGUoaXRlbUlELCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdkaXNhYmxlJywgaXRlbUlELCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdkZXN0cm95Jyk7XHJcbiAgICB9XHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnZm9jdXMnKTtcclxuICAgIH1cclxuICAgIG1pbmltaXplKCkge1xyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhNZW51KCdtaW5pbWl6ZScpO1xyXG4gICAgfVxyXG4gICAgb3BlbihsZWZ0LCB0b3ApIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnb3BlbicsIGxlZnQsIHRvcCk7XHJcbiAgICB9XHJcbiAgICBvcGVuSXRlbShpdGVtSUQpIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnb3Blbkl0ZW0nLCBpdGVtSUQpO1xyXG4gICAgfVxyXG4gICAgcmVzdG9yZSgpIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgncmVzdG9yZScpO1xyXG4gICAgfVxyXG4gICAgc2V0SXRlbU9wZW5EaXJlY3Rpb24oaXRlbSwgaG9yaXpvbnRhbGRpcmVjdGlvbiwgdmVydGljYWxkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmhvc3QuanF4TWVudSgnc2V0SXRlbU9wZW5EaXJlY3Rpb24nLCBpdGVtLCBob3Jpem9udGFsZGlyZWN0aW9uLCB2ZXJ0aWNhbGRpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgICBfX3dpcmVFdmVudHNfXygpIHtcclxuICAgICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlZCcsIChldmVudERhdGEpID0+IHsgdGhpcy5vbkNsb3NlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xyXG4gICAgICAgIHRoaXMuaG9zdC5vbignaXRlbWNsaWNrJywgKGV2ZW50RGF0YSkgPT4geyB0aGlzLm9uSXRlbWNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm9uKCdzaG93bicsIChldmVudERhdGEpID0+IHsgdGhpcy5vblNob3duLmVtaXQoZXZlbnREYXRhKTsgfSk7XHJcbiAgICB9XHJcbn07IC8vanF4TWVudUNvbXBvbmVudFxyXG5qcXhNZW51Q29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xyXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmIH1cclxuXTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYW5pbWF0aW9uU2hvd0R1cmF0aW9uJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQW5pbWF0aW9uU2hvd0R1cmF0aW9uXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2FuaW1hdGlvbkhpZGVEdXJhdGlvbicpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckFuaW1hdGlvbkhpZGVEdXJhdGlvblwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdhbmltYXRpb25IaWRlRGVsYXknKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJBbmltYXRpb25IaWRlRGVsYXlcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYW5pbWF0aW9uU2hvd0RlbGF5JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQW5pbWF0aW9uU2hvd0RlbGF5XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG9DbG9zZUludGVydmFsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b0Nsb3NlSW50ZXJ2YWxcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYXV0b1NpemVNYWluSXRlbXMnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b1NpemVNYWluSXRlbXNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYXV0b0Nsb3NlT25DbGljaycpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJBdXRvQ2xvc2VPbkNsaWNrXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG9PcGVuUG9wdXAnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b09wZW5Qb3B1cFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdhdXRvT3BlbicpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJBdXRvT3BlblwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdhdXRvQ2xvc2VPbk1vdXNlTGVhdmUnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b0Nsb3NlT25Nb3VzZUxlYXZlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2NsaWNrVG9PcGVuJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckNsaWNrVG9PcGVuXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2Rpc2FibGVkJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckRpc2FibGVkXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2VuYWJsZUhvdmVyJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckVuYWJsZUhvdmVyXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2Vhc2luZycpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckVhc2luZ1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdrZXlib2FyZE5hdmlnYXRpb24nKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyS2V5Ym9hcmROYXZpZ2F0aW9uXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ21pbmltaXplV2lkdGgnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJNaW5pbWl6ZVdpZHRoXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ21vZGUnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJNb2RlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3BvcHVwWkluZGV4JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyUG9wdXBaSW5kZXhcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgncnRsJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clJ0bFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdzaG93VG9wTGV2ZWxBcnJvd3MnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyU2hvd1RvcExldmVsQXJyb3dzXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3NvdXJjZScpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clNvdXJjZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCd0aGVtZScpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clRoZW1lXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3dpZHRoJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyV2lkdGhcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnaGVpZ2h0JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRySGVpZ2h0XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG8tY3JlYXRlJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0NyZWF0ZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIE91dHB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4TWVudUNvbXBvbmVudC5wcm90b3R5cGUsIFwib25DbG9zZWRcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBPdXRwdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeE1lbnVDb21wb25lbnQucHJvdG90eXBlLCBcIm9uSXRlbWNsaWNrXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgT3V0cHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhNZW51Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblNob3duXCIsIHZvaWQgMCk7XHJcbmpxeE1lbnVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdqcXhNZW51JyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PidcclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtFbGVtZW50UmVmXSlcclxuXSwganF4TWVudUNvbXBvbmVudCk7XG5cbmxldCBqcXhNZW51TW9kdWxlID0gY2xhc3MganF4TWVudU1vZHVsZSB7XHJcbn07XHJcbmpxeE1lbnVNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIE5nTW9kdWxlKHtcclxuICAgICAgICBpbXBvcnRzOiBbXSxcclxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtqcXhNZW51Q29tcG9uZW50XSxcclxuICAgICAgICBleHBvcnRzOiBbanF4TWVudUNvbXBvbmVudF1cclxuICAgIH0pXHJcbl0sIGpxeE1lbnVNb2R1bGUpO1xuXG4vKipcclxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXHJcbiAqL1xuXG5leHBvcnQgeyBqcXhNZW51Q29tcG9uZW50LCBqcXhNZW51TW9kdWxlIH07XG4iXX0=

/***/ }),

/***/ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/data/custom-grid/jqx-custom-grid.component.ts ***!
  \********************************************************************/
/*! exports provided: JqxCustomGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JqxCustomGridComponent", function() { return JqxCustomGridComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base/base.component */ "./src/app/core/components/base/base.component.ts");

// Base component

class JqxCustomGridComponent extends _components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(api, router, translate);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.pagenum = 0;
        this.pagesize = 10;
        this.minChar = 4;
        this.sourceId = 'id';
        this.sourceColumns = [];
        this.sourceColumnGroups = [];
        this.showActions = false;
        this.showRowNumber = false;
        this.searchString = '';
        this.title = 'Encabezado del grid';
        this.source = {};
        this.columngroups = [];
        this.columns = [];
        this.localizationobj = {};
        this.editable = false;
        this.rendergridrows = (params) => {
            return params.data;
        };
        const ts = this;
    }
    onLocalization() {
        const ts = this;
        ts.localizationobj.percentsymbol = '%';
        ts.localizationobj.currencysymbol = '$';
        ts.localizationobj.currencysymbolposition = 'anterior';
        ts.localizationobj.decimalseparator = '.';
        ts.localizationobj.thousandsseparator = ',';
        ts.localizationobj.pagergotopagestring = 'Ir a la pag';
        ts.localizationobj.pagershowrowsstring = 'Mostrar filas';
        ts.localizationobj.pagerrangestring = ' de ';
        ts.localizationobj.pagerpreviousbuttonstring = 'previo';
        ts.localizationobj.pagernextbuttonstring = 'siguiente';
        ts.localizationobj.groupsheaderstring = 'Arrastre una columna para que se agrupe por ella';
        ts.localizationobj.sortascendingstring = 'Ordenar Acs';
        ts.localizationobj.sortdescendingstring = 'Ordenar Des';
        ts.localizationobj.sortremovestring = 'Quitar orden';
        ts.localizationobj.groupbystring = 'Agrupar por esta columna';
        ts.localizationobj.groupremovestring = 'Quitar de grupos';
        ts.localizationobj.filterclearstring = 'Limpiar';
        ts.localizationobj.filterstring = 'Filtro';
        ts.localizationobj.filtershowrowstring = 'Mostrar filas donde';
        ts.localizationobj.filtershowrowdatestring = 'Mostrar filas donde fecha';
        ts.localizationobj.filterorconditionstring = 'O';
        ts.localizationobj.filterandconditionstring = 'Y';
        ts.localizationobj.filterselectallstring = '(Seleccionar Todo)';
        ts.localizationobj.filterchoosestring = 'Por favor seleccione:';
        ts.localizationobj.filterstringcomparisonoperators = ['vacio', 'no vacio', 'contenga', 'contenga(coicidir Mayusculas/Minusculas)',
            'no contenga', 'no contenga(coincidir Mayusculas/Minusculas)', 'inicia con', 'inicia con(coicidir Mayusculas/Minusculas)',
            'termina con', 'termina con(coicidir Mayusculas/Minusculas)', 'igual', 'igual(coicidir Mayusculas/Minusculas)', 'null', 'no null'
        ];
        ts.localizationobj.filternumericcomparisonoperators = ['=', '!=', '<', '<=', '>', '>=', 'null', 'no null'];
        ts.localizationobj.filterdatecomparisonoperators = ['=', '!=', '<', '<=', '>', '>=', 'null', 'no null'];
        ts.localizationobj.filterbooleancomparisonoperators = ['=', '!='];
        ts.localizationobj.validationstring = 'Valor no valido';
        ts.localizationobj.emptydatastring = 'No hay registros que mostrar';
        ts.localizationobj.filterselectstring = 'Seleccione un Filtro';
        ts.localizationobj.loadtext = 'Cargando...';
        ts.localizationobj.clearstring = 'Limpiar';
        ts.localizationobj.todaystring = 'hoy';
        const days = {
            // full day names
            names: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
            // abbreviated day names
            namesAbbr: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            // shortest day names
            namesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
        };
        ts.localizationobj.days = days;
        const months = {
            // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
            names: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ''],
            // abbreviated month names
            namesAbbr: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', '']
        };
        ts.localizationobj.months = months;
    }
    prepareMenu() {
        this.myMenu.setItemOpenDirection('Exports', 'right', 'down');
    }
    prepareGrid() {
        const ts = this;
        ts.source = {
            localdata: null,
            datatype: 'json',
            datafields: ts.datafields,
            pagenum: ts.pagenum,
            pagesize: ts.pagesize,
            root: 'records',
            cache: false,
            url: `${ts.api.getUrl()}${ts.crudApi.read}`,
            processdata: (data) => {
                data.limit = data.recordendindex;
                data.start = data.recordstartindex;
                data.page = data.pagenum + 1;
                data.query = ts.searchString;
            },
            beforeprocessing: (data) => {
                ts.source.totalrecords = data.total;
                if (ts.loading) {
                    ts.disabledLoading();
                }
            },
            id: `${ts.sourceId}`,
        };
        let aColumns = [];
        if (ts.showRowNumber) {
            aColumns = [
                {
                    text: '#', sortable: false, filterable: false, editable: false, align: 'center',
                    groupable: false, draggable: false, resizable: false,
                    datafield: '', columntype: 'number', width: 50,
                    cellsrenderer: (row, column, value) => {
                        return '<div style="margin: 4px; text-align: right">' + (value + 1) + '</div>';
                    }
                },
            ];
        }
        if (ts.showActions) {
            ts.sourceColumnGroups.push({ text: 'Actions', align: 'center', name: 'Actions' });
            aColumns.push({
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#edit_#', columntype: 'text', width: 32,
                cellsrenderer: (row, column, value) => {
                    return '<span><i class="fas fa-pen fas-fa-edit fa-cursor"></i></span>';
                },
            }, {
                columngroup: 'Actions',
                text: '', sortable: false, filterable: false, editable: false, align: 'center',
                groupable: false, draggable: false, resizable: false,
                datafield: '#delete_#', columntype: 'text', width: 32,
                cellsrenderer: (row, column, value) => {
                    return '<span><i class="fas fa-trash-alt fas-fa-delete fa-cursor"></i></span>';
                },
            });
        }
        if (ts.sourceColumnGroups.length > 0) {
            if (!ts.columngroups) {
                ts.columngroups = [];
            }
            ts.sourceColumnGroups.map((data) => {
                ts.columngroups.push(data);
            });
        }
        if (ts.sourceColumns.length > 0) {
            ts.sourceColumns.map((data) => {
                aColumns.push(data);
            });
        }
        ts.dataAdapter = new jqx.dataAdapter(ts.source, {
            beforeSend: (jqXHR) => {
                const token = ts.api.getToken();
                const stringToken = `${token.token_type} ${token.access_token}`;
                jqXHR.setRequestHeader('Authorization', stringToken);
            }
        });
        ts.columns = aColumns;
        const settings = {
            // width: 850,
            source: ts.dataAdapter,
            columnsresize: true,
            autoheight: true,
            sortable: true,
            filterable: true,
            showfilterrow: ts.showfilterrow,
            editable: ts.editable,
            enabletooltips: true,
            altrows: true,
            virtualmode: true,
            autoshowloadelement: true,
            pageable: true,
            pagesizeoptions: ['5', '10', '15', '20', '30', '50', '100'],
            selectionmode: 'multiplecellsadvanced',
            theme: 'light',
            rendergridrows: ts.rendergridrows,
            columns: aColumns
        };
        ts.customGrid.createComponent(settings);
    }
    clearFilter() {
        const ts = this;
        if (ts.searchString.length > 0) {
            ts.searchField.nativeElement.value = '';
            ts.searchField.nativeElement.focus();
            ts.searchString = '';
            ts.searchQuery();
        }
    }
    searchQuery() {
        this.customGrid.updatebounddata();
        this.activeLoading();
    }
    inputKey(event) {
        const ts = this;
        if (!ts.loading) {
            ts.searchString = ts.searchField.nativeElement.value;
            // if (ts.searchString.length >= ts.minChar ){
            if (event.keyCode === 13) {
                ts.searchQuery();
            }
            else if (ts.searchString.length === 0) {
                ts.searchQuery();
            }
        }
    }
    Bindingcomplete(event) {
        const ts = this;
        ts.onLocalization();
        ts.customGrid.localizestrings(ts.localizationobj);
        ts.disabledLoading();
    }
    cellClick(event) {
        const data = event.args;
        const row = this.customGrid.getrowdata(data.rowindex);
        if (data.datafield === '#edit_#') {
            this.editData(row);
        }
        else if (data.datafield === '#delete_#') {
            this.deleteData(row);
        }
    }
    editData(data) {
        // Implements
        this.saveRoute();
    }
    deleteData(data) {
        const ts = this;
        const lang = ts.translate;
        // Implements
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: lang.instant('titleMessages.delete'),
            text: lang.instant('bodyMessages.delete'),
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: lang.instant('buttons.yes'),
            cancelButtonText: lang.instant('buttons.not')
        }).then((result) => {
            if (result.value) {
                ts.customGrid.showloadelement();
                ts.api.delete(`${ts.crudApi.delete}${data.uid}`)
                    .subscribe((resp) => {
                    const selectedrowindex = this.customGrid.getselectedrowindex();
                    const rowscount = this.customGrid.getdatainformation().rowscount;
                    if (selectedrowindex >= 0 && selectedrowindex < parseFloat(rowscount)) {
                        const id = this.customGrid.getrowid(selectedrowindex);
                        this.customGrid.deleterow(id);
                    }
                    ts.customGrid.hideloadelement();
                    ts.searchQuery();
                }, (err) => {
                    ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
                });
            }
        });
    }
    get placeholderSearch() {
        return this.translate.instant('placeholder.search');
    }
    exportData(fmt) {
        this.customGrid.exportdata(fmt, this.title);
    }
    itemclick(event) {
        const format = event.args.innerText;
        const ts = this;
        switch (format) {
            case this.translate.instant('export.excel'):
                ts.exportData('xls');
                break;
            case this.translate.instant('export.csv'):
                ts.exportData('csv');
                break;
            case this.translate.instant('export.xml'):
                ts.exportData('xml');
                break;
            case this.translate.instant('export.pdf'):
                ts.exportData('pdf');
                break;
            case this.translate.instant('export.json'):
                ts.exportData('json');
                break;
            case this.translate.instant('export.tsv'):
                ts.exportData('tsv');
                break;
            case this.translate.instant('export.html'):
                ts.exportData('html');
                break;
            case this.translate.instant('export.print'):
                ts.printData();
                break;
        }
    }
    printData() {
        const gridContent = this.customGrid.exportdata('html');
        const newWindow = window.open('', '', 'width=800, height=500');
        const document = newWindow.document.open();
        const pageContent = '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<meta charset="utf-8" />\n' +
            '<title>' + this.title + '</title>\n' +
            '</head>\n' +
            '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    }
    createData() {
        // Implements
        this.saveRoute();
    }
    importData() {
        // Implements
        console.log('importr');
    }
    saveRoute() {
        localStorage.setItem('oldRoute', this.router.url);
    }
}


/***/ })

}]);
//# sourceMappingURL=default~accounting-accounting-module~companies-companies-module~general-general-module~products-prod~a4a7109c.js.map