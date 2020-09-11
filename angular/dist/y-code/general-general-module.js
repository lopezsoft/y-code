(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-general-module"],{

/***/ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxcombobox.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxcombobox.js ***!
  \*************************************************************************************/
/*! exports provided: jqxComboBoxComponent, jqxComboBoxModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxComboBoxComponent", function() { return jqxComboBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxComboBoxModule", function() { return jqxComboBoxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jqwidgets/jqxcore */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxcore.js");
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jqwidgets/jqxdata */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxdata.js");
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jqwidgets/jqxbuttons */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxbuttons.js");
/* harmony import */ var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jqwidgets/jqxscrollbar */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxscrollbar.js");
/* harmony import */ var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jqwidgets/jqxlistbox */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxlistbox.js");
/* harmony import */ var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jqwidgets/jqxcombobox */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/jqwidgets/jqxcombobox.js");
/* harmony import */ var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










/// <reference path="../../jqwidgets.d.ts" />


const _c0 = ["*"];
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(() => jqxComboBoxComponent),
    multi: true
};
let jqxComboBoxComponent = class jqxComboBoxComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'height', 'itemHeight', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'source', 'scrollBarSize', 'template', 'theme', 'validateSelection', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComboBoxComponent events
        this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('li');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            let result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    }
    ;
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                let result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxComboBox({ source: result.items });
            }
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxComboBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxComboBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxComboBox(this.properties[i])) {
                        this.host.jqxComboBox(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComboBox', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxComboBox('setOptions', options);
    }
    // jqxComboBoxComponent properties
    animationType(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('animationType', arg);
        }
        else {
            return this.host.jqxComboBox('animationType');
        }
    }
    autoComplete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoComplete', arg);
        }
        else {
            return this.host.jqxComboBox('autoComplete');
        }
    }
    autoOpen(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoOpen', arg);
        }
        else {
            return this.host.jqxComboBox('autoOpen');
        }
    }
    autoItemsHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoItemsHeight', arg);
        }
        else {
            return this.host.jqxComboBox('autoItemsHeight');
        }
    }
    autoDropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('autoDropDownHeight', arg);
        }
        else {
            return this.host.jqxComboBox('autoDropDownHeight');
        }
    }
    closeDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('closeDelay', arg);
        }
        else {
            return this.host.jqxComboBox('closeDelay');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('checkboxes', arg);
        }
        else {
            return this.host.jqxComboBox('checkboxes');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('disabled', arg);
        }
        else {
            return this.host.jqxComboBox('disabled');
        }
    }
    displayMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('displayMember', arg);
        }
        else {
            return this.host.jqxComboBox('displayMember');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownVerticalAlignment');
        }
    }
    dropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownHeight', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownHeight');
        }
    }
    dropDownWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('dropDownWidth', arg);
        }
        else {
            return this.host.jqxComboBox('dropDownWidth');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableHover', arg);
        }
        else {
            return this.host.jqxComboBox('enableHover');
        }
    }
    enableSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableSelection', arg);
        }
        else {
            return this.host.jqxComboBox('enableSelection');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxComboBox('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('height', arg);
        }
        else {
            return this.host.jqxComboBox('height');
        }
    }
    itemHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('itemHeight', arg);
        }
        else {
            return this.host.jqxComboBox('itemHeight');
        }
    }
    multiSelect(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('multiSelect', arg);
        }
        else {
            return this.host.jqxComboBox('multiSelect');
        }
    }
    minLength(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('minLength', arg);
        }
        else {
            return this.host.jqxComboBox('minLength');
        }
    }
    openDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('openDelay', arg);
        }
        else {
            return this.host.jqxComboBox('openDelay');
        }
    }
    popupZIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('popupZIndex', arg);
        }
        else {
            return this.host.jqxComboBox('popupZIndex');
        }
    }
    placeHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('placeHolder', arg);
        }
        else {
            return this.host.jqxComboBox('placeHolder');
        }
    }
    remoteAutoComplete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('remoteAutoComplete', arg);
        }
        else {
            return this.host.jqxComboBox('remoteAutoComplete');
        }
    }
    remoteAutoCompleteDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('remoteAutoCompleteDelay', arg);
        }
        else {
            return this.host.jqxComboBox('remoteAutoCompleteDelay');
        }
    }
    renderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('renderer', arg);
        }
        else {
            return this.host.jqxComboBox('renderer');
        }
    }
    renderSelectedItem(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('renderSelectedItem', arg);
        }
        else {
            return this.host.jqxComboBox('renderSelectedItem');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('rtl', arg);
        }
        else {
            return this.host.jqxComboBox('rtl');
        }
    }
    selectedIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxComboBox('selectedIndex');
        }
    }
    showArrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('showArrow', arg);
        }
        else {
            return this.host.jqxComboBox('showArrow');
        }
    }
    showCloseButtons(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('showCloseButtons', arg);
        }
        else {
            return this.host.jqxComboBox('showCloseButtons');
        }
    }
    searchMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('searchMode', arg);
        }
        else {
            return this.host.jqxComboBox('searchMode');
        }
    }
    search(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('search', arg);
        }
        else {
            return this.host.jqxComboBox('search');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('source', arg);
        }
        else {
            return this.host.jqxComboBox('source');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxComboBox('scrollBarSize');
        }
    }
    template(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('template', arg);
        }
        else {
            return this.host.jqxComboBox('template');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('theme', arg);
        }
        else {
            return this.host.jqxComboBox('theme');
        }
    }
    validateSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('validateSelection', arg);
        }
        else {
            return this.host.jqxComboBox('validateSelection');
        }
    }
    valueMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('valueMember', arg);
        }
        else {
            return this.host.jqxComboBox('valueMember');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxComboBox('width', arg);
        }
        else {
            return this.host.jqxComboBox('width');
        }
    }
    // jqxComboBoxComponent functions
    addItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('addItem', item);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('clearSelection');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('clear');
    }
    close() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('close');
    }
    checkIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkIndex', index);
    }
    checkItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkItem', item);
    }
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('checkAll');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('destroy');
    }
    disableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('disableItem', item);
    }
    disableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('disableAt', index);
    }
    enableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('enableItem', item);
    }
    enableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('enableAt', index);
    }
    ensureVisible(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('ensureVisible', index);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('focus');
    }
    getItem(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItem', index);
    }
    getItemByValue(value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItemByValue', value);
    }
    getVisibleItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getVisibleItems');
    }
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getItems');
    }
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getCheckedItems');
    }
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedItem');
    }
    getSelectedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedItems');
    }
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('getSelectedIndex');
    }
    insertAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('insertAt', item, index);
    }
    isOpened() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('isOpened');
    }
    indeterminateIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('indeterminateIndex', index);
    }
    indeterminateItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('indeterminateItem', item);
    }
    loadFromSelect(selectTagId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('loadFromSelect', selectTagId);
    }
    open() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('open');
    }
    removeItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('removeItem', item);
    }
    removeAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('removeAt', index);
    }
    selectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('selectIndex', index);
    }
    selectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('selectItem', item);
    }
    searchString() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxComboBox('searchString');
    }
    updateItem(item, itemValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('updateItem', item, itemValue);
    }
    updateAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('updateAt', item, index);
    }
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('unselectIndex', index);
    }
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('unselectItem', item);
    }
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckIndex', index);
    }
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckItem', item);
    }
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxComboBox('uncheckAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxComboBox('val', value);
        }
        else {
            return this.host.jqxComboBox('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            if (eventData.args.item !== null)
                this.onChangeCallback(eventData.args.item.value); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
};
jqxComboBoxComponent.ɵfac = function jqxComboBoxComponent_Factory(t) { return new (t || jqxComboBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"])); };
jqxComboBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: jqxComboBoxComponent, selectors: [["jqxComboBox"]], inputs: { autoCreate: ["auto-create", "autoCreate"], attrAnimationType: ["animationType", "attrAnimationType"], attrAutoComplete: ["autoComplete", "attrAutoComplete"], attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAutoItemsHeight: ["autoItemsHeight", "attrAutoItemsHeight"], attrAutoDropDownHeight: ["autoDropDownHeight", "attrAutoDropDownHeight"], attrCloseDelay: ["closeDelay", "attrCloseDelay"], attrCheckboxes: ["checkboxes", "attrCheckboxes"], attrDisabled: ["disabled", "attrDisabled"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrDropDownHorizontalAlignment: ["dropDownHorizontalAlignment", "attrDropDownHorizontalAlignment"], attrDropDownVerticalAlignment: ["dropDownVerticalAlignment", "attrDropDownVerticalAlignment"], attrDropDownHeight: ["dropDownHeight", "attrDropDownHeight"], attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEnableSelection: ["enableSelection", "attrEnableSelection"], attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"], attrItemHeight: ["itemHeight", "attrItemHeight"], attrMultiSelect: ["multiSelect", "attrMultiSelect"], attrMinLength: ["minLength", "attrMinLength"], attrOpenDelay: ["openDelay", "attrOpenDelay"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrRemoteAutoComplete: ["remoteAutoComplete", "attrRemoteAutoComplete"], attrRemoteAutoCompleteDelay: ["remoteAutoCompleteDelay", "attrRemoteAutoCompleteDelay"], attrRenderer: ["renderer", "attrRenderer"], attrRenderSelectedItem: ["renderSelectedItem", "attrRenderSelectedItem"], attrRtl: ["rtl", "attrRtl"], attrSelectedIndex: ["selectedIndex", "attrSelectedIndex"], attrShowArrow: ["showArrow", "attrShowArrow"], attrShowCloseButtons: ["showCloseButtons", "attrShowCloseButtons"], attrSearchMode: ["searchMode", "attrSearchMode"], attrSearch: ["search", "attrSearch"], attrSource: ["source", "attrSource"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrValidateSelection: ["validateSelection", "attrValidateSelection"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"] }, outputs: { onBindingComplete: "onBindingComplete", onCheckChange: "onCheckChange", onClose: "onClose", onChange: "onChange", onOpen: "onOpen", onSelect: "onSelect", onUnselect: "onUnselect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function jqxComboBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 }); //jqxComboBoxComponent
jqxComboBoxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('animationType'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrAnimationType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoComplete'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoOpen'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoItemsHeight'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoItemsHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoDropDownHeight'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrAutoDropDownHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('closeDelay'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrCloseDelay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('checkboxes'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrCheckboxes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('disabled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('displayMember'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrDisplayMember", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHorizontalAlignment'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownVerticalAlignment'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrDropDownVerticalAlignment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHeight'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrDropDownHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownWidth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrDropDownWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableHover'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableHover", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableSelection'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableSelection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableBrowserBoundsDetection'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('itemHeight'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrItemHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('multiSelect'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrMultiSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('minLength'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrMinLength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('openDelay'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrOpenDelay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('popupZIndex'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrPopupZIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('placeHolder'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrPlaceHolder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('remoteAutoComplete'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrRemoteAutoComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('remoteAutoCompleteDelay'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrRemoteAutoCompleteDelay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('renderer'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)
], jqxComboBoxComponent.prototype, "attrRenderer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('renderSelectedItem'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)
], jqxComboBoxComponent.prototype, "attrRenderSelectedItem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('rtl'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrRtl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectedIndex'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)
], jqxComboBoxComponent.prototype, "attrSelectedIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('showArrow'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrShowArrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('showCloseButtons'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "attrShowCloseButtons", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('searchMode'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrSearchMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('search'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)
], jqxComboBoxComponent.prototype, "attrSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('source'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrSource", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('scrollBarSize'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrScrollBarSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('template'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('theme'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrTheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('validateSelection'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)
], jqxComboBoxComponent.prototype, "attrValidateSelection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('valueMember'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)
], jqxComboBoxComponent.prototype, "attrValueMember", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('width'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('height'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "attrHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('auto-create'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)
], jqxComboBoxComponent.prototype, "autoCreate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onBindingComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onCheckChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onClose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], jqxComboBoxComponent.prototype, "onUnselect", void 0);
jqxComboBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]])
], jqxComboBoxComponent);

let jqxComboBoxModule = class jqxComboBoxModule {
};
jqxComboBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: jqxComboBoxModule });
jqxComboBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function jqxComboBoxModule_Factory(t) { return new (t || jqxComboBoxModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](jqxComboBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
        args: [{
                selector: 'jqxComboBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"] }]; }, { autoCreate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['auto-create']
        }], onBindingComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onCheckChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], onUnselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
        }], attrAnimationType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['animationType']
        }], attrAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['autoComplete']
        }], attrAutoOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['autoOpen']
        }], attrAutoItemsHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['autoItemsHeight']
        }], attrAutoDropDownHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['autoDropDownHeight']
        }], attrCloseDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['closeDelay']
        }], attrCheckboxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['checkboxes']
        }], attrDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['disabled']
        }], attrDisplayMember: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['displayMember']
        }], attrDropDownHorizontalAlignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['dropDownHorizontalAlignment']
        }], attrDropDownVerticalAlignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['dropDownVerticalAlignment']
        }], attrDropDownHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['dropDownHeight']
        }], attrDropDownWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['dropDownWidth']
        }], attrEnableHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['enableHover']
        }], attrEnableSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['enableSelection']
        }], attrEnableBrowserBoundsDetection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['enableBrowserBoundsDetection']
        }], attrItemHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['itemHeight']
        }], attrMultiSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['multiSelect']
        }], attrMinLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['minLength']
        }], attrOpenDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['openDelay']
        }], attrPopupZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['popupZIndex']
        }], attrPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['placeHolder']
        }], attrRemoteAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['remoteAutoComplete']
        }], attrRemoteAutoCompleteDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['remoteAutoCompleteDelay']
        }], attrRenderer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['renderer']
        }], attrRenderSelectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['renderSelectedItem']
        }], attrRtl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['rtl']
        }], attrSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['selectedIndex']
        }], attrShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['showArrow']
        }], attrShowCloseButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['showCloseButtons']
        }], attrSearchMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['searchMode']
        }], attrSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['search']
        }], attrSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['source']
        }], attrScrollBarSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['scrollBarSize']
        }], attrTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['template']
        }], attrTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['theme']
        }], attrValidateSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['validateSelection']
        }], attrValueMember: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['valueMember']
        }], attrWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['width']
        }], attrHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
            args: ['height']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](jqxComboBoxModule, { declarations: function () { return [jqxComboBoxComponent]; }, imports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]; }, exports: function () { return [jqxComboBoxComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](jqxComboBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                declarations: [jqxComboBoxComponent],
                exports: [jqxComboBoxComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF3aWRnZXRzLW5nLWpxeGNvbWJvYm94LmpzIiwic291cmNlcyI6WyJqcXdpZGdldHMtbmctanF4Y29tYm9ib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O2lEQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBT0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3NCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vanF3aWRnZXRzL2pxeGNvcmUnO1xuaW1wb3J0ICcuLi9qcXdpZGdldHMvanF4ZGF0YSc7XG5pbXBvcnQgJy4uL2pxd2lkZ2V0cy9qcXhidXR0b25zJztcbmltcG9ydCAnLi4vanF3aWRnZXRzL2pxeHNjcm9sbGJhcic7XG5pbXBvcnQgJy4uL2pxd2lkZ2V0cy9qcXhsaXN0Ym94JztcbmltcG9ydCAnLi4vanF3aWRnZXRzL2pxeGNvbWJvYm94JztcbmltcG9ydCB7IF9fZGVjb3JhdGUsIF9fbWV0YWRhdGEgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XHJcbmNvbnN0IMm1MCA9IG5vb3A7XHJcbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhDb21ib0JveENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5sZXQganF4Q29tYm9Cb3hDb21wb25lbnQgPSBjbGFzcyBqcXhDb21ib0JveENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5hdXRvQ3JlYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBbJ2FuaW1hdGlvblR5cGUnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9PcGVuJywgJ2F1dG9JdGVtc0hlaWdodCcsICdhdXRvRHJvcERvd25IZWlnaHQnLCAnY2xvc2VEZWxheScsICdjaGVja2JveGVzJywgJ2Rpc2FibGVkJywgJ2Rpc3BsYXlNZW1iZXInLCAnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JywgJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnLCAnZHJvcERvd25IZWlnaHQnLCAnZHJvcERvd25XaWR0aCcsICdlbmFibGVIb3ZlcicsICdlbmFibGVTZWxlY3Rpb24nLCAnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicsICdoZWlnaHQnLCAnaXRlbUhlaWdodCcsICdtdWx0aVNlbGVjdCcsICdtaW5MZW5ndGgnLCAnb3BlbkRlbGF5JywgJ3BvcHVwWkluZGV4JywgJ3BsYWNlSG9sZGVyJywgJ3JlbW90ZUF1dG9Db21wbGV0ZScsICdyZW1vdGVBdXRvQ29tcGxldGVEZWxheScsICdyZW5kZXJlcicsICdyZW5kZXJTZWxlY3RlZEl0ZW0nLCAncnRsJywgJ3NlbGVjdGVkSW5kZXgnLCAnc2hvd0Fycm93JywgJ3Nob3dDbG9zZUJ1dHRvbnMnLCAnc2VhcmNoTW9kZScsICdzZWFyY2gnLCAnc291cmNlJywgJ3Njcm9sbEJhclNpemUnLCAndGVtcGxhdGUnLCAndGhlbWUnLCAndmFsaWRhdGVTZWxlY3Rpb24nLCAndmFsdWVNZW1iZXInLCAnd2lkdGgnXTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gbm9vcDtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBub29wO1xyXG4gICAgICAgIC8vIGpxeENvbWJvQm94Q29tcG9uZW50IGV2ZW50c1xyXG4gICAgICAgIHRoaXMub25CaW5kaW5nQ29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMub25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMub25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5vblVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICAgIDtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKS5maW5kKCdsaScpO1xyXG4gICAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBodG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gaHRtbDtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGFpbmVyLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goeyBzb3VyY2U6IHJlc3VsdC5pdGVtcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyZUVxdWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhDb21ib0JveCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3godGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhDb21ib0JveCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnJheXNFcXVhbChhdHRyVmFsdWUsIGhvc3RWYWx1ZSkge1xyXG4gICAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBtYW5hZ2VBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgbW92ZUNsYXNzZXMocGFyZW50RWwsIGNoaWxkRWwpIHtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHBhcmVudEVsLmNsYXNzTGlzdDtcclxuICAgICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgICBtb3ZlU3R5bGVzKHBhcmVudEVsLCBjaGlsZEVsKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcclxuICAgICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcclxuICAgICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb21wb25lbnQob3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcclxuICAgICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XHJcbiAgICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeENvbWJvQm94Jywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVXaWRnZXQob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgX191cGRhdGVSZWN0X18oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9zdClcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XHJcbiAgICB9XHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2lkZ2V0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmhvc3QudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBqcXhDb21ib0JveENvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICBhbmltYXRpb25UeXBlKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhbmltYXRpb25UeXBlJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2FuaW1hdGlvblR5cGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvQ29tcGxldGUoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2F1dG9Db21wbGV0ZScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhdXRvQ29tcGxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvT3BlbihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b09wZW4nLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnYXV0b09wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvSXRlbXNIZWlnaHQoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2F1dG9JdGVtc0hlaWdodCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhdXRvSXRlbXNIZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvRHJvcERvd25IZWlnaHQoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2F1dG9Ecm9wRG93bkhlaWdodCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhdXRvRHJvcERvd25IZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbG9zZURlbGF5KGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjbG9zZURlbGF5JywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Nsb3NlRGVsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja2JveGVzKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjaGVja2JveGVzJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2NoZWNrYm94ZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlZChhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzYWJsZWQnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5TWVtYmVyKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkaXNwbGF5TWVtYmVyJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Rpc3BsYXlNZW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50KGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcm9wRG93bkhlaWdodChhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25IZWlnaHQnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZHJvcERvd25IZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcm9wRG93bldpZHRoKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkcm9wRG93bldpZHRoJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Ryb3BEb3duV2lkdGgnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmFibGVIb3ZlcihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlSG92ZXInLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlSG92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmFibGVTZWxlY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2VuYWJsZVNlbGVjdGlvbicsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdlbmFibGVTZWxlY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoZWlnaHQoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2hlaWdodCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdoZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpdGVtSGVpZ2h0KGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdpdGVtSGVpZ2h0JywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2l0ZW1IZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtdWx0aVNlbGVjdChhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnbXVsdGlTZWxlY3QnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnbXVsdGlTZWxlY3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtaW5MZW5ndGgoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ21pbkxlbmd0aCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdtaW5MZW5ndGgnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuRGVsYXkoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ29wZW5EZWxheScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdvcGVuRGVsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3B1cFpJbmRleChhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncG9wdXBaSW5kZXgnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncG9wdXBaSW5kZXgnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwbGFjZUhvbGRlcihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncGxhY2VIb2xkZXInLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncGxhY2VIb2xkZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdGVBdXRvQ29tcGxldGUoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbW90ZUF1dG9Db21wbGV0ZScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdyZW1vdGVBdXRvQ29tcGxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdGVBdXRvQ29tcGxldGVEZWxheShhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVtb3RlQXV0b0NvbXBsZXRlRGVsYXknLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVtb3RlQXV0b0NvbXBsZXRlRGVsYXknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJlcihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVuZGVyZXInLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgncmVuZGVyZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJTZWxlY3RlZEl0ZW0oYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbmRlclNlbGVjdGVkSXRlbScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdyZW5kZXJTZWxlY3RlZEl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBydGwoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3J0bCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdydGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZEluZGV4KGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWxlY3RlZEluZGV4JywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlbGVjdGVkSW5kZXgnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93QXJyb3coYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3Nob3dBcnJvdycsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzaG93QXJyb3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93Q2xvc2VCdXR0b25zKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzaG93Q2xvc2VCdXR0b25zJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3Nob3dDbG9zZUJ1dHRvbnMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWFyY2hNb2RlKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWFyY2hNb2RlJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlYXJjaE1vZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWFyY2goYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlYXJjaCcsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWFyY2gnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzb3VyY2UoYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NvdXJjZScsIGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzb3VyY2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY3JvbGxCYXJTaXplKGFyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzY3JvbGxCYXJTaXplJywgYXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3Njcm9sbEJhclNpemUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZShhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndGVtcGxhdGUnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndGVtcGxhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGVtZShhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndGhlbWUnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndGhlbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVNlbGVjdGlvbihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndmFsaWRhdGVTZWxlY3Rpb24nLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndmFsaWRhdGVTZWxlY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWx1ZU1lbWJlcihhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndmFsdWVNZW1iZXInLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgndmFsdWVNZW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aWR0aChhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnd2lkdGgnLCBhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnd2lkdGgnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBqcXhDb21ib0JveENvbXBvbmVudCBmdW5jdGlvbnNcclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdhZGRJdGVtJywgaXRlbSk7XHJcbiAgICB9XHJcbiAgICBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjbGVhclNlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2xlYXInKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Nsb3NlJyk7XHJcbiAgICB9XHJcbiAgICBjaGVja0luZGV4KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2hlY2tJbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuICAgIGNoZWNrSXRlbShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnY2hlY2tJdGVtJywgaXRlbSk7XHJcbiAgICB9XHJcbiAgICBjaGVja0FsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdjaGVja0FsbCcpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdkZXN0cm95Jyk7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlSXRlbShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZGlzYWJsZUl0ZW0nLCBpdGVtKTtcclxuICAgIH1cclxuICAgIGRpc2FibGVBdChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2Rpc2FibGVBdCcsIGluZGV4KTtcclxuICAgIH1cclxuICAgIGVuYWJsZUl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2VuYWJsZUl0ZW0nLCBpdGVtKTtcclxuICAgIH1cclxuICAgIGVuYWJsZUF0KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5hYmxlQXQnLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgICBlbnN1cmVWaXNpYmxlKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZW5zdXJlVmlzaWJsZScsIGluZGV4KTtcclxuICAgIH1cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgICBnZXRJdGVtKGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2dldEl0ZW0nLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgICBnZXRJdGVtQnlWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCdnZXRJdGVtQnlWYWx1ZScsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGdldFZpc2libGVJdGVtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0VmlzaWJsZUl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBnZXRJdGVtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0SXRlbXMnKTtcclxuICAgIH1cclxuICAgIGdldENoZWNrZWRJdGVtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0Q2hlY2tlZEl0ZW1zJyk7XHJcbiAgICB9XHJcbiAgICBnZXRTZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2dldFNlbGVjdGVkSXRlbScpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VsZWN0ZWRJdGVtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0U2VsZWN0ZWRJdGVtcycpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VsZWN0ZWRJbmRleCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnZ2V0U2VsZWN0ZWRJbmRleCcpO1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0QXQoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnaW5zZXJ0QXQnLCBpdGVtLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgICBpc09wZW5lZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnaXNPcGVuZWQnKTtcclxuICAgIH1cclxuICAgIGluZGV0ZXJtaW5hdGVJbmRleChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ2luZGV0ZXJtaW5hdGVJbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuICAgIGluZGV0ZXJtaW5hdGVJdGVtKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdpbmRldGVybWluYXRlSXRlbScsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgbG9hZEZyb21TZWxlY3Qoc2VsZWN0VGFnSWQpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdsb2FkRnJvbVNlbGVjdCcsIHNlbGVjdFRhZ0lkKTtcclxuICAgIH1cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnb3BlbicpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlSXRlbShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbW92ZUl0ZW0nLCBpdGVtKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUF0KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3JlbW92ZUF0JywgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0SW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCdzZWxlY3RJbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuICAgIHNlbGVjdEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3NlbGVjdEl0ZW0nLCBpdGVtKTtcclxuICAgIH1cclxuICAgIHNlYXJjaFN0cmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDb21ib0JveCgnc2VhcmNoU3RyaW5nJyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJdGVtKGl0ZW0sIGl0ZW1WYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3VwZGF0ZUl0ZW0nLCBpdGVtLCBpdGVtVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQXQoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1cGRhdGVBdCcsIGl0ZW0sIGluZGV4KTtcclxuICAgIH1cclxuICAgIHVuc2VsZWN0SW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bnNlbGVjdEluZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3RJdGVtKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bnNlbGVjdEl0ZW0nLCBpdGVtKTtcclxuICAgIH1cclxuICAgIHVuY2hlY2tJbmRleChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvc3QuanF4Q29tYm9Cb3goJ3VuY2hlY2tJbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuICAgIHVuY2hlY2tJdGVtKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bmNoZWNrSXRlbScsIGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdW5jaGVja0FsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ob3N0LmpxeENvbWJvQm94KCd1bmNoZWNrQWxsJyk7XHJcbiAgICB9XHJcbiAgICB2YWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCd2YWwnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENvbWJvQm94KCd2YWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfX3dpcmVFdmVudHNfXygpIHtcclxuICAgICAgICB0aGlzLmhvc3Qub24oJ2JpbmRpbmdDb21wbGV0ZScsIChldmVudERhdGEpID0+IHsgdGhpcy5vbkJpbmRpbmdDb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xyXG4gICAgICAgIHRoaXMuaG9zdC5vbignY2hlY2tDaGFuZ2UnLCAoZXZlbnREYXRhKSA9PiB7IHRoaXMub25DaGVja0NoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xyXG4gICAgICAgIHRoaXMuaG9zdC5vbignY2xvc2UnLCAoZXZlbnREYXRhKSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xyXG4gICAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgaWYgKGV2ZW50RGF0YS5hcmdzKVxyXG4gICAgICAgICAgICBpZiAoZXZlbnREYXRhLmFyZ3MuaXRlbSAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhldmVudERhdGEuYXJncy5pdGVtLnZhbHVlKTsgfSk7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm9uKCdvcGVuJywgKGV2ZW50RGF0YSkgPT4geyB0aGlzLm9uT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xyXG4gICAgICAgIHRoaXMuaG9zdC5vbignc2VsZWN0JywgKGV2ZW50RGF0YSkgPT4geyB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XHJcbiAgICAgICAgdGhpcy5ob3N0Lm9uKCd1bnNlbGVjdCcsIChldmVudERhdGEpID0+IHsgdGhpcy5vblVuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XHJcbiAgICB9XHJcbn07IC8vanF4Q29tYm9Cb3hDb21wb25lbnRcclxuanF4Q29tYm9Cb3hDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXHJcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYgfVxyXG5dO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdhbmltYXRpb25UeXBlJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckFuaW1hdGlvblR5cGVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYXV0b0NvbXBsZXRlJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJBdXRvQ29tcGxldGVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnYXV0b09wZW4nKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckF1dG9PcGVuXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG9JdGVtc0hlaWdodCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b0l0ZW1zSGVpZ2h0XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG9Ecm9wRG93bkhlaWdodCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQXV0b0Ryb3BEb3duSGVpZ2h0XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2Nsb3NlRGVsYXknKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyQ2xvc2VEZWxheVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdjaGVja2JveGVzJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJDaGVja2JveGVzXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2Rpc2FibGVkJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJEaXNhYmxlZFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdkaXNwbGF5TWVtYmVyJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckRpc3BsYXlNZW1iZXJcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckRyb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckRyb3BEb3duVmVydGljYWxBbGlnbm1lbnRcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnZHJvcERvd25IZWlnaHQnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyRHJvcERvd25IZWlnaHRcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnZHJvcERvd25XaWR0aCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJEcm9wRG93bldpZHRoXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2VuYWJsZUhvdmVyJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJFbmFibGVIb3ZlclwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdlbmFibGVTZWxlY3Rpb24nKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ckVuYWJsZVNlbGVjdGlvblwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJFbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2l0ZW1IZWlnaHQnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRySXRlbUhlaWdodFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdtdWx0aVNlbGVjdCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyTXVsdGlTZWxlY3RcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnbWluTGVuZ3RoJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0ck1pbkxlbmd0aFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdvcGVuRGVsYXknKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyT3BlbkRlbGF5XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3BvcHVwWkluZGV4JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clBvcHVwWkluZGV4XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3BsYWNlSG9sZGVyJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clBsYWNlSG9sZGVyXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3JlbW90ZUF1dG9Db21wbGV0ZScpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyUmVtb3RlQXV0b0NvbXBsZXRlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3JlbW90ZUF1dG9Db21wbGV0ZURlbGF5JyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clJlbW90ZUF1dG9Db21wbGV0ZURlbGF5XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3JlbmRlcmVyJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyUmVuZGVyZXJcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgncmVuZGVyU2VsZWN0ZWRJdGVtJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyUmVuZGVyU2VsZWN0ZWRJdGVtXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3J0bCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyUnRsXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3NlbGVjdGVkSW5kZXgnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyU2VsZWN0ZWRJbmRleFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdzaG93QXJyb3cnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clNob3dBcnJvd1wiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdzaG93Q2xvc2VCdXR0b25zJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJTaG93Q2xvc2VCdXR0b25zXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ3NlYXJjaE1vZGUnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyU2VhcmNoTW9kZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdzZWFyY2gnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJTZWFyY2hcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgnc291cmNlJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clNvdXJjZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdzY3JvbGxCYXJTaXplJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwiYXR0clNjcm9sbEJhclNpemVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgndGVtcGxhdGUnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyVGVtcGxhdGVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgndGhlbWUnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRyVGhlbWVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBJbnB1dCgndmFsaWRhdGVTZWxlY3Rpb24nKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJWYWxpZGF0ZVNlbGVjdGlvblwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCd2YWx1ZU1lbWJlcicpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJWYWx1ZU1lbWJlclwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCd3aWR0aCcpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF0dHJXaWR0aFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIElucHV0KCdoZWlnaHQnKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhdHRySGVpZ2h0XCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgSW5wdXQoJ2F1dG8tY3JlYXRlJyksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcImF1dG9DcmVhdGVcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBPdXRwdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvbkJpbmRpbmdDb21wbGV0ZVwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIE91dHB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcIm9uQ2hlY2tDaGFuZ2VcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBPdXRwdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvbkNsb3NlXCIsIHZvaWQgMCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgT3V0cHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudC5wcm90b3R5cGUsIFwib25DaGFuZ2VcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBPdXRwdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvbk9wZW5cIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBPdXRwdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXHJcbl0sIGpxeENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvblNlbGVjdFwiLCB2b2lkIDApO1xyXG5fX2RlY29yYXRlKFtcclxuICAgIE91dHB1dCgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwganF4Q29tYm9Cb3hDb21wb25lbnQucHJvdG90eXBlLCBcIm9uVW5zZWxlY3RcIiwgdm9pZCAwKTtcclxuanF4Q29tYm9Cb3hDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdqcXhDb21ib0JveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxyXG4gICAgICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0VsZW1lbnRSZWZdKVxyXG5dLCBqcXhDb21ib0JveENvbXBvbmVudCk7XG5cbmxldCBqcXhDb21ib0JveE1vZHVsZSA9IGNsYXNzIGpxeENvbWJvQm94TW9kdWxlIHtcclxufTtcclxuanF4Q29tYm9Cb3hNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIE5nTW9kdWxlKHtcclxuICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgIEZvcm1zTW9kdWxlXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtqcXhDb21ib0JveENvbXBvbmVudF0sXHJcbiAgICAgICAgZXhwb3J0czogW2pxeENvbWJvQm94Q29tcG9uZW50XVxyXG4gICAgfSlcclxuXSwganF4Q29tYm9Cb3hNb2R1bGUpO1xuXG4vKipcclxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXHJcbiAqL1xuXG5leHBvcnQgeyBqcXhDb21ib0JveENvbXBvbmVudCwganF4Q29tYm9Cb3hNb2R1bGUsIMm1MCB9O1xuIl19

/***/ }),

/***/ "./src/app/pages/general/currency/currency.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/general/currency/currency.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class CurrencyComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Monedas';
        this.translate.setDefaultLang(this.activeLang);
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('currency.title');
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
        ts.crudApi = {
            create: '/general/currency/create',
            read: '/general/currency/read',
            update: '/general/currency/update/',
            delete: '/general/currency/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'CurrencyName', type: 'string' },
            { name: 'CurrencyISO', type: 'string' },
            { name: 'plural_name', type: 'string' },
            { name: 'singular_name', type: 'string' },
            { name: 'denomination', type: 'string' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('currency.name') || 'Moneda', align: 'center', datafield: 'CurrencyName', minWidth: 150 },
                { text: lang.instant('currency.pluralName') || 'Nombre plural', align: 'center', datafield: 'plural_name' },
                { text: lang.instant('currency.singularName') || 'Nombre singular', align: 'center', datafield: 'singular_name' },
                { text: lang.instant('currency.denomination') || 'Denominación', align: 'center', datafield: 'denomination' },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        const lang = this.translate;
        super.createData();
        ts.goRoute('pages/general/currency/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/general/currency/edit/${data.id}`);
    }
}
CurrencyComponent.ɵfac = function CurrencyComponent_Factory(t) { return new (t || CurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyComponent, selectors: [["app-currency"]], viewQuery: function CurrencyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function CurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function CurrencyComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CurrencyComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function CurrencyComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CurrencyComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/currency/edit-currency/edit-currency.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/general/currency/edit-currency/edit-currency.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCurrencyComponent", function() { return EditCurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_general_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general/currency.service */ "./src/app/services/general/currency.service.ts");
/* harmony import */ var src_app_services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/general/currency-sys.service */ "./src/app/services/general/currency-sys.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["focusElement"];
const _c1 = ["exchangeRateValue"];
function EditCurrencyComponent_ng_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cur_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cur_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/flags/" + cur_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", cur_r3.CurrencyISO, " - ", cur_r3.CurrencyName, " ");
} }
const _c2 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditCurrencyComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, curr, currSys) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.curr = curr;
        this.currSys = currSys;
        this.currency = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            exchange_rate_value: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            national_currency: [false],
            plural_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            singular_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            denomination: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
    }
    get invalidCurrencyId() {
        return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
    }
    get invalidExchangeRateValue() {
        return this.customForm.get('exchange_rate_value').invalid && this.customForm.get('exchange_rate_value').touched;
    }
    get invalidNationalCurrency() {
        return this.customForm.get('national_currency').invalid && this.customForm.get('national_currency').touched;
    }
    get invalidPluralName() {
        return this.customForm.get('plural_name').invalid && this.customForm.get('plural_name').touched;
    }
    get invalidSingularName() {
        return this.customForm.get('singular_name').invalid && this.customForm.get('singular_name').touched;
    }
    get invalidDenomination() {
        return this.customForm.get('denomination').invalid && this.customForm.get('denomination').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.title = `${lang.instant('general.createEdit')} ${lang.instant('currency.title')}`;
        ts.PutURL = '/general/currency/update/';
        ts.PostURL = '/general/currency/create';
        ts.curr.getData({}).subscribe((resp) => {
            ts.currency = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            const lang = ts.translate;
            ts.editing = true;
            ts.currSys.getData({ uid: id }).subscribe((resp) => {
                ts.customForm.setValue({
                    currency_id: resp[0].currency_id,
                    exchange_rate_value: resp[0].exchange_rate_value,
                    national_currency: resp[0].national_currency,
                    plural_name: resp[0].plural_name,
                    singular_name: resp[0].singular_name,
                    denomination: resp[0].denomination,
                });
            });
        });
    }
    onCurrencyChange(id) {
        const ts = this;
        if (id) {
            const curr = ts.currency.find(currency => currency.id === id);
            const local = ts.customForm.get('national_currency').value;
            if (!local) {
                ts.activeLoading();
                ts.currSys.getChangeLocal({ source: curr.CurrencyISO }).
                    subscribe((resp) => {
                    ts.disabledLoading();
                    ts.exchangeRateValue.nativeElement.value = resp[0].value;
                });
            }
        }
    }
}
EditCurrencyComponent.ɵfac = function EditCurrencyComponent_Factory(t) { return new (t || EditCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"])); };
EditCurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditCurrencyComponent, selectors: [["app-edit-currency"]], viewQuery: function EditCurrencyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.exchangeRateValue = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 67, vars: 68, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", "", 3, "loading", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "number", "step", "any", "fullWidth", "", "nbinput", "", "name", "exchange_rate_value", "formControlName", "exchange_rate_value", "autofocus", "", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["exchangeRateValue", "", "focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "plural_name", "formControlName", "plural_name", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "text", "step", "any", "fullWidth", "", "nbinput", "", "name", "singular_name", "formControlName", "singular_name", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "text", "fullWidth", "", "nbinput", "", "name", "denomination", "formControlName", "denomination", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "checkbox", "formControlName", "national_currency", "name", "national_currency", "id", "national_currency", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", 2, "margin-right", "2%"], ["for", "national_currency"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function EditCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ng-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditCurrencyComponent_Template_ng_select_change_13_listener($event) { return ctx.onCurrencyChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditCurrencyComponent_ng_option_14_Template, 3, 4, "ng-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCurrencyComponent_Template_button_click_52_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCurrencyComponent_Template_button_click_58_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCurrencyComponent_Template_button_click_63_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 42, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 44, "currency.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrencyId)("status-danger", ctx.invalidCurrencyId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.currency.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 46, "currency.exchangeRateValue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidExchangeRateValue)("is-invalid", ctx.invalidExchangeRateValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 48, "currency.pluralName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidPluralName)("is-invalid", ctx.invalidPluralName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 50, "currency.singularName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidSingularName)("is-invalid", ctx.invalidSingularName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 52, "currency.denomination"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidDenomination)("is-invalid", ctx.invalidDenomination);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidNationalCurrency)("is-invalid", ctx.invalidNationalCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 54, "currency.nationalCurrency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 56, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](62, _c2, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 58, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](65, _c2, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 60, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditCurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-currency',
                templateUrl: './edit-currency.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_general_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"] }, { type: src_app_services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }], exchangeRateValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['exchangeRateValue']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/general-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/general/general-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.component */ "./src/app/pages/general/general.component.ts");
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxes/taxes.component */ "./src/app/pages/general/taxes/taxes.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/pages/general/currency/currency.component.ts");
/* harmony import */ var _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxes/edit-taxes/edit-taxes.component */ "./src/app/pages/general/taxes/edit-taxes/edit-taxes.component.ts");
/* harmony import */ var _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency/edit-currency/edit-currency.component */ "./src/app/pages/general/currency/edit-currency/edit-currency.component.ts");
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "./src/app/pages/general/tax-rates/tax-rates.component.ts");
/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "./src/app/pages/general/identity-documents/identity-documents.component.ts");
/* harmony import */ var _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./identity-documents/edit-identitydocs/edit-identitydocs.component */ "./src/app/pages/general/identity-documents/edit-identitydocs/edit-identitydocs.component.ts");
/* harmony import */ var _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tax-rates/edit-taxrates/edit-taxrates.component */ "./src/app/pages/general/tax-rates/edit-taxrates/edit-taxrates.component.ts");













const routes = [{
        path: '',
        component: _general_component__WEBPACK_IMPORTED_MODULE_2__["GeneralComponent"],
        children: [
            {
                path: 'taxes',
                component: _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_3__["TaxesComponent"],
            },
            {
                path: 'taxes/edit/:id',
                component: _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_5__["EditTaxesComponent"]
            },
            {
                path: 'taxes/create',
                component: _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_5__["EditTaxesComponent"]
            },
            {
                path: 'currency',
                component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_4__["CurrencyComponent"]
            },
            {
                path: 'currency/edit/:id',
                component: _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_6__["EditCurrencyComponent"]
            },
            {
                path: 'currency/create',
                component: _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_6__["EditCurrencyComponent"]
            },
            {
                path: 'taxrates',
                component: _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_7__["TaxRatesComponent"]
            },
            {
                path: 'taxrates/edit/:id',
                component: _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_10__["EditTaxratesComponent"]
            },
            {
                path: 'taxrates/create',
                component: _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_10__["EditTaxratesComponent"]
            },
            {
                path: 'identitydocuments',
                component: _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_8__["IdentityDocumentsComponent"]
            },
            {
                path: 'identitydocuments/edit/:id',
                component: _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_9__["EditIdentitydocsComponent"]
            },
            {
                path: 'identitydocuments/create',
                component: _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_9__["EditIdentitydocsComponent"]
            },
        ],
    }];
class GeneralRoutingModule {
}
GeneralRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRoutingModule });
GeneralRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRoutingModule_Factory(t) { return new (t || GeneralRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/general/general.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/general/general.component.ts ***!
  \****************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GeneralComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 1, vars: 0, template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/general/general.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/general/general.module.ts ***!
  \*************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxcombobox */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxcombobox.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _general_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-routing.module */ "./src/app/pages/general/general-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index */ "./src/app/pages/general/index.ts");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general.component */ "./src/app/pages/general/general.component.ts");
/* harmony import */ var _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./taxes/edit-taxes/edit-taxes.component */ "./src/app/pages/general/taxes/edit-taxes/edit-taxes.component.ts");
/* harmony import */ var _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./currency/edit-currency/edit-currency.component */ "./src/app/pages/general/currency/edit-currency/edit-currency.component.ts");
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "./src/app/pages/general/tax-rates/tax-rates.component.ts");
/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "./src/app/pages/general/identity-documents/identity-documents.component.ts");
/* harmony import */ var _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./identity-documents/edit-identitydocs/edit-identitydocs.component */ "./src/app/pages/general/identity-documents/edit-identitydocs/edit-identitydocs.component.ts");
/* harmony import */ var _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tax-rates/edit-taxrates/edit-taxrates.component */ "./src/app/pages/general/tax-rates/edit-taxrates/edit-taxrates.component.ts");








/*
  * Translation
*/















class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _general_routing_module__WEBPACK_IMPORTED_MODULE_12__["GeneralRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
            jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
            jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_7__["jqxComboBoxModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_general_component__WEBPACK_IMPORTED_MODULE_14__["GeneralComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["CurrencyComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["TaxesComponent"],
        _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_15__["EditTaxesComponent"],
        _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_16__["EditCurrencyComponent"],
        _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_17__["TaxRatesComponent"],
        _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_18__["IdentityDocumentsComponent"],
        _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_19__["EditIdentitydocsComponent"],
        _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_20__["EditTaxratesComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _general_routing_module__WEBPACK_IMPORTED_MODULE_12__["GeneralRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
        jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_7__["jqxComboBoxModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _general_routing_module__WEBPACK_IMPORTED_MODULE_12__["GeneralRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
                    jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_7__["jqxComboBoxModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useFactory: (http) => {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                        }
                    }),
                ],
                declarations: [
                    _general_component__WEBPACK_IMPORTED_MODULE_14__["GeneralComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["CurrencyComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["TaxesComponent"],
                    _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_15__["EditTaxesComponent"],
                    _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_16__["EditCurrencyComponent"],
                    _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_17__["TaxRatesComponent"],
                    _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_18__["IdentityDocumentsComponent"],
                    _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_19__["EditIdentitydocsComponent"],
                    _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_20__["EditTaxratesComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/general/identity-documents/edit-identitydocs/edit-identitydocs.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/general/identity-documents/edit-identitydocs/edit-identitydocs.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditIdentitydocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIdentitydocsComponent", function() { return EditIdentitydocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["focusElement"];
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditIdentitydocsComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, identDocs) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.identDocs = identDocs;
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            code: [''],
            document_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            abbrev: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            active: [false],
        });
    }
    get invalidDocumentName() {
        return this.customForm.get('document_name').invalid && this.customForm.get('document_name').touched;
    }
    get invalidAbbrev() {
        return this.customForm.get('abbrev').invalid && this.customForm.get('abbrev').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.title = `${lang.instant('general.createEdit')} ${lang.instant('identityDocuments.title')}`;
        ts.PutURL = '/general/identitydocs/update/';
        ts.PostURL = '/general/identitydocs/create';
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.identDocs.getData({ uid: id }).subscribe((resp) => {
                frm.setValue({
                    abbrev: resp[0].abbrev,
                    active: resp[0].active,
                    code: resp[0].code,
                    document_name: resp[0].document_name,
                });
            });
        });
    }
}
EditIdentitydocsComponent.ɵfac = function EditIdentitydocsComponent_Factory(t) { return new (t || EditIdentitydocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global__WEBPACK_IMPORTED_MODULE_7__["IdentityDocumentsService"])); };
EditIdentitydocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditIdentitydocsComponent, selectors: [["app-edit-identitydocs"]], viewQuery: function EditIdentitydocsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 54, vars: 44, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "fullWidth", "", "nbinput", "", "name", "code", "formControlName", "code", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition"], ["focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "document_name", "formControlName", "document_name", "required", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "text", "step", "any", "fullWidth", "", "nbinput", "", "name", "abbrev", "formControlName", "abbrev", "required", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "checkbox", "formControlName", "active", "id", "active", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", 2, "margin-right", "2%"], ["for", "active"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"]], template: function EditIdentitydocsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditIdentitydocsComponent_Template_button_click_39_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditIdentitydocsComponent_Template_button_click_45_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditIdentitydocsComponent_Template_button_click_50_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 22, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 24, "identityDocuments.code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 26, "identityDocuments.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidDocumentName)("is-invalid", ctx.invalidDocumentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 28, "identityDocuments.abbrev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidAbbrev)("is-invalid", ctx.invalidAbbrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 30, "identityDocuments.active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 32, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](38, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 34, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](41, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 36, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditIdentitydocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-identitydocs',
                templateUrl: './edit-identitydocs.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_global__WEBPACK_IMPORTED_MODULE_7__["IdentityDocumentsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/identity-documents/identity-documents.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general/identity-documents/identity-documents.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IdentityDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityDocumentsComponent", function() { return IdentityDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class IdentityDocumentsComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Impuestos';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
        ts.title = lang.instant('identityDocuments.title');
        ts.crudApi = {
            create: '/general/identitydocs/create',
            read: '/general/identitydocs/read',
            update: '/general/identitydocs/update/',
            delete: '/general/identitydocs/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'code', type: 'number' },
            { name: 'document_name', type: 'string' },
            { name: 'abbrev', type: 'string' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('identityDocuments.code'), align: 'center', datafield: 'code', width: 65 },
                { text: lang.instant('identityDocuments.name'), align: 'center', datafield: 'document_name', minWidth: 120 },
                { text: lang.instant('identityDocuments.abbrev'), align: 'center', datafield: 'abbrev', width: 80 },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        const lang = this.translate;
        super.createData();
        ts.goRoute('pages/general/identitydocuments/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/general/identitydocuments/edit/${data.id}`);
    }
}
IdentityDocumentsComponent.ɵfac = function IdentityDocumentsComponent_Factory(t) { return new (t || IdentityDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
IdentityDocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdentityDocumentsComponent, selectors: [["app-identitydocuments"]], viewQuery: function IdentityDocumentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function IdentityDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function IdentityDocumentsComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IdentityDocumentsComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function IdentityDocumentsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function IdentityDocumentsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentityDocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-identitydocuments',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/index.ts":
/*!****************************************!*\
  !*** ./src/app/pages/general/index.ts ***!
  \****************************************/
/*! exports provided: TaxesComponent, CurrencyComponent, TaxRatesComponent, IdentityDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxes/taxes.component */ "./src/app/pages/general/taxes/taxes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_0__["TaxesComponent"]; });

/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/pages/general/currency/currency.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyComponent"]; });

/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "./src/app/pages/general/tax-rates/tax-rates.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxRatesComponent", function() { return _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_2__["TaxRatesComponent"]; });

/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "./src/app/pages/general/identity-documents/identity-documents.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityDocumentsComponent", function() { return _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_3__["IdentityDocumentsComponent"]; });







/***/ }),

/***/ "./src/app/pages/general/tax-rates/edit-taxrates/edit-taxrates.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general/tax-rates/edit-taxrates/edit-taxrates.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditTaxratesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaxratesComponent", function() { return EditTaxratesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general/index */ "./src/app/services/general/index.ts");
/* harmony import */ var src_app_services_accounting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/accounting */ "./src/app/services/accounting/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["focusElement"];
const _c1 = ["cbAccountingAccount"];
function EditTaxratesComponent_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tax_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tax_r4.name_taxe, " ");
} }
function EditTaxratesComponent_ng_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taxF_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", taxF_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", taxF_r5.name, " ");
} }
function EditTaxratesComponent_ng_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acco_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", acco_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", acco_r6.account_number, " ", acco_r6.account_name, " ");
} }
const _c2 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditTaxratesComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, types, tax, taxFrec, accountsSer) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.types = types;
        this.tax = tax;
        this.taxFrec = taxFrec;
        this.accountsSer = accountsSer;
        this.taxGroup = [];
        this.taxAccount = [];
        this.taxFrecuency = [];
        this.accounts = [];
        const ts = this;
        ts.translate.setDefaultLang(this.activeLang);
        ts.customForm = this.fb.group({
            tax_gruop_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            account_id: [''],
            shipping_frequency_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rate_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            rate_abbre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            rate_value: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            decimal_rate: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            is_exempt: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    get invalidTaxGroupId() {
        return (this.customForm.get('tax_gruop_id').value === 0) ? true : false;
    }
    get invalidShippingFrequencyId() {
        return (this.customForm.get('shipping_frequency_id').value === 0) ? true : false;
    }
    get invalidRateName() {
        return this.customForm.get('rate_name').invalid && this.customForm.get('rate_name').touched;
    }
    get invalidRateAbbre() {
        return this.customForm.get('rate_abbre').invalid && this.customForm.get('rate_abbre').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.title = 'Crear/Editar rango de impuesto';
        ts.title = `${lang.instant('general.createEdit')} ${lang.instant('taxes.rate.title')}`;
        ts.PutURL = '/general/taxerates/update/';
        ts.PostURL = '/general/taxerates/create';
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        const ts = this;
        ts.tax.getData({}).subscribe((resp) => {
            this.taxGroup = resp;
        });
        ts.taxFrec.getData({}).subscribe((resp) => {
            this.taxFrecuency = resp;
        });
        ts.accountsSer.getDataAll({}).subscribe((resp) => {
            this.accounts = resp;
        });
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            const frm = ts.customForm;
            ts.editing = true;
            ts.types.getData({ uid: id }).subscribe((resp) => {
                frm.setValue({
                    account_id: resp[0].account_id,
                    shipping_frequency_id: resp[0].shipping_frequency_id,
                    decimal_rate: resp[0].decimal_rate,
                    rate_abbre: resp[0].rate_abbre,
                    rate_name: resp[0].rate_name,
                    rate_value: resp[0].rate_value,
                    tax_gruop_id: resp[0].tax_gruop_id,
                    is_exempt: resp[0].is_exempt
                });
            });
        });
    }
}
EditTaxratesComponent.ɵfac = function EditTaxratesComponent_Factory(t) { return new (t || EditTaxratesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["TaxesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["ShippingFrequencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_accounting__WEBPACK_IMPORTED_MODULE_8__["AccountsService"])); };
EditTaxratesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditTaxratesComponent, selectors: [["app-edit-taxrates"]], viewQuery: function EditTaxratesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cbAccountingAccount = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 101, vars: 88, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "aterisk"], ["fullWidth", "", "formControlName", "tax_gruop_id", "name", "tax_gruop_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbinput", "", "name", "rate_name", "formControlName", "rate_name", "autofocus", "", "required", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "rate_abbre", "formControlName", "rate_abbre", "required", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "number", "step", "any", "fullWidth", "", "nbinput", "", "name", "rate_value", "formControlName", "rate_value", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition"], ["type", "number", "step", "any", "fullWidth", "", "nbinput", "", "name", "decimal_rate", "formControlName", "decimal_rate", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition"], ["fullWidth", "", "formControlName", "shipping_frequency_id", "name", "shipping_frequency_id", "required", "", 3, "loading"], [1, "col"], ["fullWidth", "", "formControlName", "account_id", "name", "account_id", 3, "loading"], ["type", "checkbox", "formControlName", "is_exempt", "name", "is_exempt", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", 2, "margin-right", "2%"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function EditTaxratesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ng-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditTaxratesComponent_ng_option_18_Template, 2, 2, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, EditTaxratesComponent_ng_option_67_Template, 2, 2, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, EditTaxratesComponent_ng_option_75_Template, 2, 3, "ng-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxratesComponent_Template_button_click_86_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxratesComponent_Template_button_click_92_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxratesComponent_Template_button_click_97_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 46, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 48, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 50, "taxes.rate.group"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidTaxGroupId)("status-danger", ctx.invalidTaxGroupId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.taxGroup.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taxGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 52, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 54, "taxes.rate.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidRateName)("is-invalid", ctx.invalidRateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 56, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 58, "taxes.rate.abbre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidRateAbbre)("is-invalid", ctx.invalidRateAbbre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 60, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 62, "taxes.rate.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 64, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 66, "taxes.rate.decimal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 68, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 70, "taxes.rate.frecuency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.invalidShippingFrequencyId)("status-danger", ctx.invalidShippingFrequencyId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.taxFrecuency.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taxFrecuency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 72, "taxes.rate.accountName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.accounts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 74, "taxes.rate.is_exempt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 76, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](82, _c2, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 78, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](85, _c2, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 80, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditTaxratesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-taxrates',
                templateUrl: './edit-taxrates.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["TaxRatesService"] }, { type: src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["TaxesService"] }, { type: src_app_services_general_index__WEBPACK_IMPORTED_MODULE_7__["ShippingFrequencyService"] }, { type: src_app_services_accounting__WEBPACK_IMPORTED_MODULE_8__["AccountsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }], cbAccountingAccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cbAccountingAccount', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/tax-rates/tax-rates.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/general/tax-rates/tax-rates.component.ts ***!
  \****************************************************************/
/*! exports provided: TaxRatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxRatesComponent", function() { return TaxRatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class TaxRatesComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Impuestos';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.rate.title');
    }
    ngAfterViewInit() {
        const ts = this;
        const lang = ts.translate;
        ts.crudApi = {
            create: '/general/taxerates/create',
            read: '/general/taxerates/read',
            update: '/general/taxerates/update/',
            delete: '/general/taxerates/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'name_taxe', type: 'number' },
            { name: 'rate_name', type: 'string' },
            { name: 'fecuency_name', type: 'string' },
            { name: 'account_name', type: 'string' },
            { name: 'rate_abbre', type: 'number' },
            { name: 'rate_value', type: 'number' },
            { name: 'decimal_rate', type: 'number' },
            { name: 'is_exempt', type: 'bool' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('taxes.rate.group'), align: 'center', datafield: 'name_taxe', minWidth: 60 },
                { text: lang.instant('taxes.rate.name'), align: 'center', datafield: 'rate_name', width: '40%' },
                { text: lang.instant('taxes.rate.abbre'), align: 'center', datafield: 'rate_abbre', minWidth: 45 },
                { text: lang.instant('taxes.rate.value'), align: 'center', datafield: 'rate_value', minWidth: 45 },
                { text: lang.instant('taxes.rate.decimal'), align: 'center', datafield: 'decimal_rate', minWidth: 45 },
                { text: lang.instant('taxes.rate.is_exempt'), align: 'center', datafield: 'is_exempt', columntype: 'checkbox', threestatecheckbox: true, width: 80 },
                { text: lang.instant('taxes.rate.frecuency'), align: 'center', datafield: 'fecuency_name', minWidth: 80 },
                { text: lang.instant('taxes.rate.accountName'), align: 'center', datafield: 'account_name', minWidth: 120 },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/general/taxrates/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/general/taxrates/edit/${data.id}`);
    }
}
TaxRatesComponent.ɵfac = function TaxRatesComponent_Factory(t) { return new (t || TaxRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TaxRatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxRatesComponent, selectors: [["app-taxrates"]], viewQuery: function TaxRatesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function TaxRatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function TaxRatesComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TaxRatesComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function TaxRatesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function TaxRatesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxRatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-taxrates',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/taxes/edit-taxes/edit-taxes.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/general/taxes/edit-taxes/edit-taxes.component.ts ***!
  \************************************************************************/
/*! exports provided: EditTaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaxesComponent", function() { return EditTaxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_general_taxes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general/taxes.service */ "./src/app/services/general/taxes.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["focusElement"];
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class EditTaxesComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, types) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.types = types;
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            name_taxe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            is_vat: [false],
        });
    }
    get invalidNameTaxe() {
        return this.customForm.get('name_taxe').invalid && this.customForm.get('name_taxe').touched;
    }
    get invalidDescription() {
        return this.customForm.get('description').invalid && this.customForm.get('description').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        const lang = ts.translate;
        ts.title = `${lang.instant('general.createEdit')} ${lang.instant('taxes.title')}`;
        ts.PutURL = '/general/taxes/update/';
        ts.PostURL = '/general/taxes/create';
    }
    loadData(id = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ts = this;
            ts.editing = true;
            ts.types.getData({ uid: id }).subscribe((resp) => {
                this.customForm.setValue({
                    name_taxe: resp[0].name_taxe,
                    description: resp[0].description,
                    is_vat: resp[0].is_vat,
                });
            });
        });
    }
}
EditTaxesComponent.ɵfac = function EditTaxesComponent_Factory(t) { return new (t || EditTaxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_taxes_service__WEBPACK_IMPORTED_MODULE_7__["TaxesService"])); };
EditTaxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditTaxesComponent, selectors: [["app-edit-taxes"]], viewQuery: function EditTaxesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 54, vars: 47, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "aterisk"], ["type", "text", "nbinput", "", "fullWidth", "", "name", "name_taxe", "formControlName", "name_taxe", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "description", "formControlName", "description", "required", "", "autofocus", "", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "ng-pristine", "ng-touched", "nb-transition", "ng-valid"], ["type", "checkbox", "formControlName", "is_vat", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition", 2, "margin-right", "2%"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"]], template: function EditTaxesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxesComponent_Template_button_click_39_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxesComponent_Template_button_click_45_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditTaxesComponent_Template_button_click_50_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 23, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 25, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 27, "taxes.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidNameTaxe)("is-invalid", ctx.invalidNameTaxe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 29, "general.aterisk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 31, "taxes.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("status-danger", ctx.invalidDescription)("is-invalid", ctx.invalidDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 33, "taxes.is_vat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 35, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](41, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 37, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](44, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 39, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditTaxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-taxes',
                templateUrl: './edit-taxes.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_general_taxes_service__WEBPACK_IMPORTED_MODULE_7__["TaxesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/general/taxes/taxes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/general/taxes/taxes.component.ts ***!
  \********************************************************/
/*! exports provided: TaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return TaxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data/custom-grid/jqx-custom-grid.component */ "./src/app/core/data/custom-grid/jqx-custom-grid.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = ["customGrid"];
const _c1 = ["searchField"];
class TaxesComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.title');
    }
    ngAfterViewInit() {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.title');
        const ts = this;
        const lang = ts.translate;
        ts.crudApi = {
            create: '/general/taxes/create',
            read: '/general/taxes/read',
            update: '/general/taxes/update/',
            delete: '/general/taxes/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'name_taxe', type: 'number' },
            { name: 'description', type: 'string' },
            { name: 'state', type: 'number' },
            { name: 'is_vat', type: 'bool' },
        ];
        ts.sourceColumns =
            [
                { text: lang.instant('taxes.name'), align: 'center', datafield: 'name_taxe', minWidth: 120 },
                { text: lang.instant('taxes.description'), align: 'center', datafield: 'description', minWidth: 150 },
                { text: lang.instant('taxes.is_vat'), align: 'center', datafield: 'is_vat', columntype: 'checkbox', threestatecheckbox: true, width: 80 },
            ];
        ts.prepareGrid();
    }
    createData() {
        super.createData();
        this.goRoute('pages/general/taxes/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/general/taxes/edit/${data.id}`);
    }
}
TaxesComponent.ɵfac = function TaxesComponent_Factory(t) { return new (t || TaxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TaxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxesComponent, selectors: [["app-taxes"]], viewQuery: function TaxesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "backspace", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function TaxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function TaxesComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TaxesComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_73_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function TaxesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function TaxesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-taxes',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


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
/*! exports provided: CurrencySysService, CurrencyService, TaxAccountingAccountService, TaxRatesService, TaxesService, ShippingFrequencyService */
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

/* harmony import */ var _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-frequency.service */ "./src/app/services/general/shipping-frequency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShippingFrequencyService", function() { return _shipping_frequency_service__WEBPACK_IMPORTED_MODULE_5__["ShippingFrequencyService"]; });









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
//# sourceMappingURL=general-general-module.js.map