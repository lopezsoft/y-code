(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-general-module"],{

/***/ "01f3":
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
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jqwidgets/jqxcore */ "aif6");
/* harmony import */ var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jqwidgets/jqxdata */ "8/F6");
/* harmony import */ var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jqwidgets/jqxbuttons */ "o6h3");
/* harmony import */ var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jqwidgets/jqxscrollbar */ "m8ln");
/* harmony import */ var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jqwidgets/jqxlistbox */ "HhK0");
/* harmony import */ var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jqwidgets/jqxcombobox */ "MqFM");
/* harmony import */ var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");











 /// <reference path="../../jqwidgets.d.ts" />


var _c0 = ["*"];

var noop = function noop() {};

var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["forwardRef"])(function () {
    return jqxComboBoxComponent;
  }),
  multi: true
};

var jqxComboBoxComponent = /*#__PURE__*/function () {
  function jqxComboBoxComponent(containerElement) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, jqxComboBoxComponent);

    this.autoCreate = true;
    this.properties = ['animationType', 'autoComplete', 'autoOpen', 'autoItemsHeight', 'autoDropDownHeight', 'closeDelay', 'checkboxes', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableHover', 'enableSelection', 'enableBrowserBoundsDetection', 'height', 'itemHeight', 'multiSelect', 'minLength', 'openDelay', 'popupZIndex', 'placeHolder', 'remoteAutoComplete', 'remoteAutoCompleteDelay', 'renderer', 'renderSelectedItem', 'rtl', 'selectedIndex', 'showArrow', 'showCloseButtons', 'searchMode', 'search', 'source', 'scrollBarSize', 'template', 'theme', 'validateSelection', 'valueMember', 'width'];
    this.onTouchedCallback = noop;
    this.onChangeCallback = noop; // jqxComboBoxComponent events

    this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    this.elementRef = containerElement;
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(jqxComboBoxComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var children = JQXLite(this.elementRef.nativeElement.children).find('li');
      var html = '';
      var options = {};

      if (children.length > 0) {
        this.container = document.createElement('div');
        html = this.elementRef.nativeElement.innerHTML;
        this.container.appendChild(this.elementRef.nativeElement.firstChild);
        this.elementRef.nativeElement.innerHTML = html;
        this.content = html;
        var result = JQXLite.jqx.parseSourceTag(this.container);
        options['source'] = result.items;
      }

      if (this.autoCreate) {
        this.createComponent(options);
      }
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.container) {
        if (this.content !== this.container.innerHTML) {
          this.content = this.container.innerHTML;
          var result = JQXLite.jqx.parseSourceTag(this.container);
          this.host.jqxComboBox({
            source: result.items
          });
        }
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.host) {
        for (var i = 0; i < this.properties.length; i++) {
          var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
          var areEqual = false;

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
  }, {
    key: "arraysEqual",
    value: function arraysEqual(attrValue, hostValue) {
      if (attrValue && !hostValue || !attrValue && hostValue) {
        return false;
      }

      if (attrValue.length != hostValue.length) {
        return false;
      }

      for (var i = 0; i < attrValue.length; i++) {
        if (attrValue[i] !== hostValue[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "manageAttributes",
    value: function manageAttributes() {
      var options = {};

      for (var i = 0; i < this.properties.length; i++) {
        var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);

        if (this[attrName] !== undefined) {
          options[this.properties[i]] = this[attrName];
        }
      }

      return options;
    }
  }, {
    key: "moveClasses",
    value: function moveClasses(parentEl, childEl) {
      var classes = parentEl.classList;

      if (classes.length > 0) {
        var _childEl$classList;

        (_childEl$classList = childEl.classList).add.apply(_childEl$classList, Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classes));
      }

      parentEl.className = '';
    }
  }, {
    key: "moveStyles",
    value: function moveStyles(parentEl, childEl) {
      var style = parentEl.style.cssText;
      childEl.style.cssText = style;
      parentEl.style.cssText = '';
    }
  }, {
    key: "createComponent",
    value: function createComponent(options) {
      if (this.host) {
        return;
      }

      if (options) {
        JQXLite.extend(options, this.manageAttributes());
      } else {
        options = this.manageAttributes();
      }

      this.host = JQXLite(this.elementRef.nativeElement.firstChild);
      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();

      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComboBox', options);
    }
  }, {
    key: "createWidget",
    value: function createWidget(options) {
      this.createComponent(options);
    }
  }, {
    key: "__updateRect__",
    value: function __updateRect__() {
      if (this.host) this.host.css({
        width: this.attrWidth,
        height: this.attrHeight
      });
    }
  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (this.widgetObject) {
        this.onChangeCallback(this.host.val());
        this.widgetObject.clearSelection();

        if (value) {
          this.widgetObject.selectItem(this.widgetObject.getItemByValue(value));
        }
      }

      if (this.host && (value === null || value === undefined)) {
        this.host.jqxComboBox('val', '');
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChangeCallback = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouchedCallback = fn;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.host.jqxComboBox('setOptions', options);
    } // jqxComboBoxComponent properties

  }, {
    key: "animationType",
    value: function animationType(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('animationType', arg);
      } else {
        return this.host.jqxComboBox('animationType');
      }
    }
  }, {
    key: "autoComplete",
    value: function autoComplete(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('autoComplete', arg);
      } else {
        return this.host.jqxComboBox('autoComplete');
      }
    }
  }, {
    key: "autoOpen",
    value: function autoOpen(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('autoOpen', arg);
      } else {
        return this.host.jqxComboBox('autoOpen');
      }
    }
  }, {
    key: "autoItemsHeight",
    value: function autoItemsHeight(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('autoItemsHeight', arg);
      } else {
        return this.host.jqxComboBox('autoItemsHeight');
      }
    }
  }, {
    key: "autoDropDownHeight",
    value: function autoDropDownHeight(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('autoDropDownHeight', arg);
      } else {
        return this.host.jqxComboBox('autoDropDownHeight');
      }
    }
  }, {
    key: "closeDelay",
    value: function closeDelay(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('closeDelay', arg);
      } else {
        return this.host.jqxComboBox('closeDelay');
      }
    }
  }, {
    key: "checkboxes",
    value: function checkboxes(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('checkboxes', arg);
      } else {
        return this.host.jqxComboBox('checkboxes');
      }
    }
  }, {
    key: "disabled",
    value: function disabled(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('disabled', arg);
      } else {
        return this.host.jqxComboBox('disabled');
      }
    }
  }, {
    key: "displayMember",
    value: function displayMember(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('displayMember', arg);
      } else {
        return this.host.jqxComboBox('displayMember');
      }
    }
  }, {
    key: "dropDownHorizontalAlignment",
    value: function dropDownHorizontalAlignment(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('dropDownHorizontalAlignment', arg);
      } else {
        return this.host.jqxComboBox('dropDownHorizontalAlignment');
      }
    }
  }, {
    key: "dropDownVerticalAlignment",
    value: function dropDownVerticalAlignment(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('dropDownVerticalAlignment', arg);
      } else {
        return this.host.jqxComboBox('dropDownVerticalAlignment');
      }
    }
  }, {
    key: "dropDownHeight",
    value: function dropDownHeight(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('dropDownHeight', arg);
      } else {
        return this.host.jqxComboBox('dropDownHeight');
      }
    }
  }, {
    key: "dropDownWidth",
    value: function dropDownWidth(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('dropDownWidth', arg);
      } else {
        return this.host.jqxComboBox('dropDownWidth');
      }
    }
  }, {
    key: "enableHover",
    value: function enableHover(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('enableHover', arg);
      } else {
        return this.host.jqxComboBox('enableHover');
      }
    }
  }, {
    key: "enableSelection",
    value: function enableSelection(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('enableSelection', arg);
      } else {
        return this.host.jqxComboBox('enableSelection');
      }
    }
  }, {
    key: "enableBrowserBoundsDetection",
    value: function enableBrowserBoundsDetection(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('enableBrowserBoundsDetection', arg);
      } else {
        return this.host.jqxComboBox('enableBrowserBoundsDetection');
      }
    }
  }, {
    key: "height",
    value: function height(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('height', arg);
      } else {
        return this.host.jqxComboBox('height');
      }
    }
  }, {
    key: "itemHeight",
    value: function itemHeight(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('itemHeight', arg);
      } else {
        return this.host.jqxComboBox('itemHeight');
      }
    }
  }, {
    key: "multiSelect",
    value: function multiSelect(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('multiSelect', arg);
      } else {
        return this.host.jqxComboBox('multiSelect');
      }
    }
  }, {
    key: "minLength",
    value: function minLength(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('minLength', arg);
      } else {
        return this.host.jqxComboBox('minLength');
      }
    }
  }, {
    key: "openDelay",
    value: function openDelay(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('openDelay', arg);
      } else {
        return this.host.jqxComboBox('openDelay');
      }
    }
  }, {
    key: "popupZIndex",
    value: function popupZIndex(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('popupZIndex', arg);
      } else {
        return this.host.jqxComboBox('popupZIndex');
      }
    }
  }, {
    key: "placeHolder",
    value: function placeHolder(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('placeHolder', arg);
      } else {
        return this.host.jqxComboBox('placeHolder');
      }
    }
  }, {
    key: "remoteAutoComplete",
    value: function remoteAutoComplete(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('remoteAutoComplete', arg);
      } else {
        return this.host.jqxComboBox('remoteAutoComplete');
      }
    }
  }, {
    key: "remoteAutoCompleteDelay",
    value: function remoteAutoCompleteDelay(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('remoteAutoCompleteDelay', arg);
      } else {
        return this.host.jqxComboBox('remoteAutoCompleteDelay');
      }
    }
  }, {
    key: "renderer",
    value: function renderer(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('renderer', arg);
      } else {
        return this.host.jqxComboBox('renderer');
      }
    }
  }, {
    key: "renderSelectedItem",
    value: function renderSelectedItem(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('renderSelectedItem', arg);
      } else {
        return this.host.jqxComboBox('renderSelectedItem');
      }
    }
  }, {
    key: "rtl",
    value: function rtl(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('rtl', arg);
      } else {
        return this.host.jqxComboBox('rtl');
      }
    }
  }, {
    key: "selectedIndex",
    value: function selectedIndex(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('selectedIndex', arg);
      } else {
        return this.host.jqxComboBox('selectedIndex');
      }
    }
  }, {
    key: "showArrow",
    value: function showArrow(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('showArrow', arg);
      } else {
        return this.host.jqxComboBox('showArrow');
      }
    }
  }, {
    key: "showCloseButtons",
    value: function showCloseButtons(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('showCloseButtons', arg);
      } else {
        return this.host.jqxComboBox('showCloseButtons');
      }
    }
  }, {
    key: "searchMode",
    value: function searchMode(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('searchMode', arg);
      } else {
        return this.host.jqxComboBox('searchMode');
      }
    }
  }, {
    key: "search",
    value: function search(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('search', arg);
      } else {
        return this.host.jqxComboBox('search');
      }
    }
  }, {
    key: "source",
    value: function source(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('source', arg);
      } else {
        return this.host.jqxComboBox('source');
      }
    }
  }, {
    key: "scrollBarSize",
    value: function scrollBarSize(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('scrollBarSize', arg);
      } else {
        return this.host.jqxComboBox('scrollBarSize');
      }
    }
  }, {
    key: "template",
    value: function template(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('template', arg);
      } else {
        return this.host.jqxComboBox('template');
      }
    }
  }, {
    key: "theme",
    value: function theme(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('theme', arg);
      } else {
        return this.host.jqxComboBox('theme');
      }
    }
  }, {
    key: "validateSelection",
    value: function validateSelection(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('validateSelection', arg);
      } else {
        return this.host.jqxComboBox('validateSelection');
      }
    }
  }, {
    key: "valueMember",
    value: function valueMember(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('valueMember', arg);
      } else {
        return this.host.jqxComboBox('valueMember');
      }
    }
  }, {
    key: "width",
    value: function width(arg) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      if (arg !== undefined) {
        this.host.jqxComboBox('width', arg);
      } else {
        return this.host.jqxComboBox('width');
      }
    } // jqxComboBoxComponent functions

  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('addItem', item);
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('clearSelection');
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('clear');
    }
  }, {
    key: "close",
    value: function close() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('close');
    }
  }, {
    key: "checkIndex",
    value: function checkIndex(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('checkIndex', index);
    }
  }, {
    key: "checkItem",
    value: function checkItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('checkItem', item);
    }
  }, {
    key: "checkAll",
    value: function checkAll() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('checkAll');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('destroy');
    }
  }, {
    key: "disableItem",
    value: function disableItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('disableItem', item);
    }
  }, {
    key: "disableAt",
    value: function disableAt(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('disableAt', index);
    }
  }, {
    key: "enableItem",
    value: function enableItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('enableItem', item);
    }
  }, {
    key: "enableAt",
    value: function enableAt(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('enableAt', index);
    }
  }, {
    key: "ensureVisible",
    value: function ensureVisible(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('ensureVisible', index);
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('focus');
    }
  }, {
    key: "getItem",
    value: function getItem(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getItem', index);
    }
  }, {
    key: "getItemByValue",
    value: function getItemByValue(value) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getItemByValue', value);
    }
  }, {
    key: "getVisibleItems",
    value: function getVisibleItems() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getVisibleItems');
    }
  }, {
    key: "getItems",
    value: function getItems() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getItems');
    }
  }, {
    key: "getCheckedItems",
    value: function getCheckedItems() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getCheckedItems');
    }
  }, {
    key: "getSelectedItem",
    value: function getSelectedItem() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getSelectedItem');
    }
  }, {
    key: "getSelectedItems",
    value: function getSelectedItems() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getSelectedItems');
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('getSelectedIndex');
    }
  }, {
    key: "insertAt",
    value: function insertAt(item, index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('insertAt', item, index);
    }
  }, {
    key: "isOpened",
    value: function isOpened() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('isOpened');
    }
  }, {
    key: "indeterminateIndex",
    value: function indeterminateIndex(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('indeterminateIndex', index);
    }
  }, {
    key: "indeterminateItem",
    value: function indeterminateItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('indeterminateItem', item);
    }
  }, {
    key: "loadFromSelect",
    value: function loadFromSelect(selectTagId) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('loadFromSelect', selectTagId);
    }
  }, {
    key: "open",
    value: function open() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('open');
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('removeItem', item);
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('removeAt', index);
    }
  }, {
    key: "selectIndex",
    value: function selectIndex(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('selectIndex', index);
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('selectItem', item);
    }
  }, {
    key: "searchString",
    value: function searchString() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      return this.host.jqxComboBox('searchString');
    }
  }, {
    key: "updateItem",
    value: function updateItem(item, itemValue) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('updateItem', item, itemValue);
    }
  }, {
    key: "updateAt",
    value: function updateAt(item, index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('updateAt', item, index);
    }
  }, {
    key: "unselectIndex",
    value: function unselectIndex(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('unselectIndex', index);
    }
  }, {
    key: "unselectItem",
    value: function unselectItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('unselectItem', item);
    }
  }, {
    key: "uncheckIndex",
    value: function uncheckIndex(index) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('uncheckIndex', index);
    }
  }, {
    key: "uncheckItem",
    value: function uncheckItem(item) {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('uncheckItem', item);
    }
  }, {
    key: "uncheckAll",
    value: function uncheckAll() {
      if (this.autoCreate && !this.host) {
        this.createComponent();
      }

      this.host.jqxComboBox('uncheckAll');
    }
  }, {
    key: "val",
    value: function val(value) {
      if (value !== undefined) {
        return this.host.jqxComboBox('val', value);
      } else {
        return this.host.jqxComboBox('val');
      }
    }
  }, {
    key: "__wireEvents__",
    value: function __wireEvents__() {
      var _this = this;

      this.host.on('bindingComplete', function (eventData) {
        _this.onBindingComplete.emit(eventData);
      });
      this.host.on('checkChange', function (eventData) {
        _this.onCheckChange.emit(eventData);
      });
      this.host.on('close', function (eventData) {
        _this.onClose.emit(eventData);
      });
      this.host.on('change', function (eventData) {
        _this.onChange.emit(eventData);

        if (eventData.args) if (eventData.args.item !== null) _this.onChangeCallback(eventData.args.item.value);
      });
      this.host.on('open', function (eventData) {
        _this.onOpen.emit(eventData);
      });
      this.host.on('select', function (eventData) {
        _this.onSelect.emit(eventData);
      });
      this.host.on('unselect', function (eventData) {
        _this.onUnselect.emit(eventData);
      });
    }
  }]);

  return jqxComboBoxComponent;
}();

jqxComboBoxComponent.ɵfac = function jqxComboBoxComponent_Factory(t) {
  return new (t || jqxComboBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]));
};

jqxComboBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: jqxComboBoxComponent,
  selectors: [["jqxComboBox"]],
  inputs: {
    autoCreate: ["auto-create", "autoCreate"],
    attrAnimationType: ["animationType", "attrAnimationType"],
    attrAutoComplete: ["autoComplete", "attrAutoComplete"],
    attrAutoOpen: ["autoOpen", "attrAutoOpen"],
    attrAutoItemsHeight: ["autoItemsHeight", "attrAutoItemsHeight"],
    attrAutoDropDownHeight: ["autoDropDownHeight", "attrAutoDropDownHeight"],
    attrCloseDelay: ["closeDelay", "attrCloseDelay"],
    attrCheckboxes: ["checkboxes", "attrCheckboxes"],
    attrDisabled: ["disabled", "attrDisabled"],
    attrDisplayMember: ["displayMember", "attrDisplayMember"],
    attrDropDownHorizontalAlignment: ["dropDownHorizontalAlignment", "attrDropDownHorizontalAlignment"],
    attrDropDownVerticalAlignment: ["dropDownVerticalAlignment", "attrDropDownVerticalAlignment"],
    attrDropDownHeight: ["dropDownHeight", "attrDropDownHeight"],
    attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"],
    attrEnableHover: ["enableHover", "attrEnableHover"],
    attrEnableSelection: ["enableSelection", "attrEnableSelection"],
    attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"],
    attrItemHeight: ["itemHeight", "attrItemHeight"],
    attrMultiSelect: ["multiSelect", "attrMultiSelect"],
    attrMinLength: ["minLength", "attrMinLength"],
    attrOpenDelay: ["openDelay", "attrOpenDelay"],
    attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"],
    attrPlaceHolder: ["placeHolder", "attrPlaceHolder"],
    attrRemoteAutoComplete: ["remoteAutoComplete", "attrRemoteAutoComplete"],
    attrRemoteAutoCompleteDelay: ["remoteAutoCompleteDelay", "attrRemoteAutoCompleteDelay"],
    attrRenderer: ["renderer", "attrRenderer"],
    attrRenderSelectedItem: ["renderSelectedItem", "attrRenderSelectedItem"],
    attrRtl: ["rtl", "attrRtl"],
    attrSelectedIndex: ["selectedIndex", "attrSelectedIndex"],
    attrShowArrow: ["showArrow", "attrShowArrow"],
    attrShowCloseButtons: ["showCloseButtons", "attrShowCloseButtons"],
    attrSearchMode: ["searchMode", "attrSearchMode"],
    attrSearch: ["search", "attrSearch"],
    attrSource: ["source", "attrSource"],
    attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"],
    attrTemplate: ["template", "attrTemplate"],
    attrTheme: ["theme", "attrTheme"],
    attrValidateSelection: ["validateSelection", "attrValidateSelection"],
    attrValueMember: ["valueMember", "attrValueMember"],
    attrWidth: ["width", "attrWidth"],
    attrHeight: ["height", "attrHeight"]
  },
  outputs: {
    onBindingComplete: "onBindingComplete",
    onCheckChange: "onCheckChange",
    onClose: "onClose",
    onChange: "onChange",
    onOpen: "onOpen",
    onSelect: "onSelect",
    onUnselect: "onUnselect"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  template: function jqxComboBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
}); //jqxComboBoxComponent

jqxComboBoxComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]
  }];
};

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('animationType'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrAnimationType", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('autoComplete'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrAutoComplete", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('autoOpen'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrAutoOpen", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('autoItemsHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrAutoItemsHeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('autoDropDownHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrAutoDropDownHeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('closeDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrCloseDelay", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('checkboxes'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrCheckboxes", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('disabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrDisabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('displayMember'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrDisplayMember", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('dropDownHorizontalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrDropDownHorizontalAlignment", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('dropDownVerticalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrDropDownVerticalAlignment", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('dropDownHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrDropDownHeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('dropDownWidth'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrDropDownWidth", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('enableHover'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrEnableHover", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('enableSelection'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrEnableSelection", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('enableBrowserBoundsDetection'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('itemHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrItemHeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('multiSelect'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrMultiSelect", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('minLength'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrMinLength", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('openDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrOpenDelay", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('popupZIndex'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrPopupZIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('placeHolder'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrPlaceHolder", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('remoteAutoComplete'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrRemoteAutoComplete", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('remoteAutoCompleteDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrRemoteAutoCompleteDelay", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('renderer'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Function)], jqxComboBoxComponent.prototype, "attrRenderer", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('renderSelectedItem'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Function)], jqxComboBoxComponent.prototype, "attrRenderSelectedItem", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('rtl'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrRtl", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('selectedIndex'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Number)], jqxComboBoxComponent.prototype, "attrSelectedIndex", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('showArrow'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrShowArrow", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('showCloseButtons'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "attrShowCloseButtons", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('searchMode'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrSearchMode", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('search'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Function)], jqxComboBoxComponent.prototype, "attrSearch", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('source'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrSource", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('scrollBarSize'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrScrollBarSize", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('template'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrTemplate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('theme'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrTheme", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('validateSelection'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Function)], jqxComboBoxComponent.prototype, "attrValidateSelection", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('valueMember'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", String)], jqxComboBoxComponent.prototype, "attrValueMember", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('width'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrWidth", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('height'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "attrHeight", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"])('auto-create'), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], jqxComboBoxComponent.prototype, "autoCreate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onBindingComplete", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onCheckChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onClose", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onOpen", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onSelect", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], jqxComboBoxComponent.prototype, "onUnselect", void 0);

jqxComboBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]])], jqxComboBoxComponent);

var jqxComboBoxModule = function jqxComboBoxModule() {
  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, jqxComboBoxModule);
};

jqxComboBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: jqxComboBoxModule
});
jqxComboBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  factory: function jqxComboBoxModule_Factory(t) {
    return new (t || jqxComboBoxModule)();
  },
  imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](jqxComboBoxComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"],
    args: [{
      selector: 'jqxComboBox',
      template: '<div><ng-content></ng-content></div>',
      providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]
    }];
  }, {
    autoCreate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['auto-create']
    }],
    onBindingComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onCheckChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    onUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
    }],
    attrAnimationType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['animationType']
    }],
    attrAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['autoComplete']
    }],
    attrAutoOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['autoOpen']
    }],
    attrAutoItemsHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['autoItemsHeight']
    }],
    attrAutoDropDownHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['autoDropDownHeight']
    }],
    attrCloseDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['closeDelay']
    }],
    attrCheckboxes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['checkboxes']
    }],
    attrDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['disabled']
    }],
    attrDisplayMember: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['displayMember']
    }],
    attrDropDownHorizontalAlignment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['dropDownHorizontalAlignment']
    }],
    attrDropDownVerticalAlignment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['dropDownVerticalAlignment']
    }],
    attrDropDownHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['dropDownHeight']
    }],
    attrDropDownWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['dropDownWidth']
    }],
    attrEnableHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['enableHover']
    }],
    attrEnableSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['enableSelection']
    }],
    attrEnableBrowserBoundsDetection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['enableBrowserBoundsDetection']
    }],
    attrItemHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['itemHeight']
    }],
    attrMultiSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['multiSelect']
    }],
    attrMinLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['minLength']
    }],
    attrOpenDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['openDelay']
    }],
    attrPopupZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['popupZIndex']
    }],
    attrPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['placeHolder']
    }],
    attrRemoteAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['remoteAutoComplete']
    }],
    attrRemoteAutoCompleteDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['remoteAutoCompleteDelay']
    }],
    attrRenderer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['renderer']
    }],
    attrRenderSelectedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['renderSelectedItem']
    }],
    attrRtl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['rtl']
    }],
    attrSelectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['selectedIndex']
    }],
    attrShowArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['showArrow']
    }],
    attrShowCloseButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['showCloseButtons']
    }],
    attrSearchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['searchMode']
    }],
    attrSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['search']
    }],
    attrSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['source']
    }],
    attrScrollBarSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['scrollBarSize']
    }],
    attrTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['template']
    }],
    attrTheme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['theme']
    }],
    attrValidateSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['validateSelection']
    }],
    attrValueMember: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['valueMember']
    }],
    attrWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['width']
    }],
    attrHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
      args: ['height']
    }]
  });
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](jqxComboBoxModule, {
    declarations: function declarations() {
      return [jqxComboBoxComponent];
    },
    imports: function imports() {
      return [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]];
    },
    exports: function exports() {
      return [jqxComboBoxComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](jqxComboBoxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
    args: [{
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      declarations: [jqxComboBoxComponent],
      exports: [jqxComboBoxComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "CxRc":
/*!************************************************************************!*\
  !*** ./src/app/pages/general/resolutions/resolution-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ResolutionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionFormComponent", function() { return ResolutionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/general/currency-sys.service */ "yPNe");
/* harmony import */ var _services_general_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/general/currency.service */ "fTWp");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/general/index */ "PcHl");
/* harmony import */ var app_services_companies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/companies */ "mm0L");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");



























var _c0 = ["focusElement"];
var _c1 = ["exchangeRateValue"];
function ResolutionFormComponent_ng_template_15_ng_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var point_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", point_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", point_r6.branch_name, " ");
} }
function ResolutionFormComponent_ng_template_15_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var doc_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", doc_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", doc_r7.code, " - ", doc_r7.voucher_name, " ");
} }
function ResolutionFormComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "quill-editor", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "quill-editor", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Punto de venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ng-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ResolutionFormComponent_ng_template_15_ng_option_17_Template, 2, 2, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Tipo de documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ResolutionFormComponent_ng_template_15_ng_option_26_Template, 2, 3, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Nombre del documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "N\u00BA. Resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Prefijo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "N\u00FAmero inicial de folio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Numeraci\u00F3n desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Numeraci\u00F3n hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Fecha desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Fecha hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.pointsOfSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 12, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.aDocuments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 14, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 16, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 18, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 20, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 22, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 24, "general.asterisk"));
} }
function ResolutionFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "quill-editor", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "quill-editor", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "quill-editor", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "quill-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var ResolutionFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ResolutionFormComponent, _super);
    function ResolutionFormComponent(fb, msg, api, router, translate, aRouter, curr, currSys, resSer, pointOfSer, spinner) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.curr = curr;
        _this.currSys = currSys;
        _this.resSer = resSer;
        _this.pointOfSer = pointOfSer;
        _this.spinner = spinner;
        _this.currency = [];
        _this.aDocuments = [];
        _this.pointsOfSale = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            date_from: ['2019-01-19', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            date_up: ['2030-01-19', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            footline1: ['<div style="text-align: center;">Resolución Nº. 18764001112603 de 22 de julio de 2020, Sin Prefijo, Factura ELECTRÓNICA autorizada desde 7.001 a 30.000</div>'],
            footline2: [''],
            footline3: [''],
            footline4: [''],
            headerline1: ['<div style="text-align: center;"><b style=""><font size="3"><font color="#3366ff" style="">LOPEZ</font><font color="#ff9900" style="">SOFT</font> S.A.S.&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); text-align: center;"><b style=""><font size="2">N.I.T. 901.091.403-2&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;">CRA 15 #57-38 Santa Teresita, Dosquebradas - Risaralda.&nbsp;</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>CEL</b>: 310 843 5431 - <b>Fijo</b>: (036) 342 3070</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>Correo</b>: gerencia@lopezsoft.net.co -<b>Sitio web</b>: <a href="https://lopezsoft.net.co/">https://lopezsoft.net.co/</a></div>'],
            headerline2: ['<div style="font-size: 13px; text-align: center;"><b>RÉGIMEN SIMPLE DE TRIBUTACIÓN - SIMPLE</b>&nbsp;</div><div style="text-align: center;"><font size="1">NO SOMOS GRANDES CONTRIBUYENTES - NO SOMOS AUTO RETENEDORES&nbsp;</font></div><div style="text-align: center;"><font size="1">SOMOS AGENTES RETENEDORES DEL IMPUESTO SOBRE LAS VENTAS (IVA)&nbsp;</font></div><div style="font-size: 13px; text-align: center;"><b>CIIU: 6201</b></div>'],
            initial_number: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            invoice_name: ['FACTURA DE VENTA', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            prefix: ['FE'],
            range_from: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            range_up: [1000, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            resolution_number: ['18760000001'],
            type_document_id: [7, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            point_of_sale_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        return _this;
    }
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidCurrencyId", {
        get: function () {
            return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidExchangeRateValue", {
        get: function () {
            return this.customForm.get('exchange_rate_value').invalid && this.customForm.get('exchange_rate_value').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidNationalCurrency", {
        get: function () {
            return this.customForm.get('national_currency').invalid && this.customForm.get('national_currency').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidPluralName", {
        get: function () {
            return this.customForm.get('plural_name').invalid && this.customForm.get('plural_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidSingularName", {
        get: function () {
            return this.customForm.get('singular_name').invalid && this.customForm.get('singular_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResolutionFormComponent.prototype, "invalidDenomination", {
        get: function () {
            return this.customForm.get('denomination').invalid && this.customForm.get('denomination').touched;
        },
        enumerable: false,
        configurable: true
    });
    ResolutionFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var frm = ts.customForm;
        ts.PutURL = '/general/resolutions/update/';
        ts.PostURL = '/general/resolutions/create';
        // ts.curr.getData({}).subscribe((resp) => {
        //   ts.currency  = resp;
        // });
        ts.resSer.getAccountingDocuments({}).subscribe(function (resp) {
            ts.aDocuments = resp;
            if (resp.length > 0) {
                frm.get('type_document_id').setValue(resp[0].id);
            }
        });
        ts.pointOfSer.getPointsOfSale({}).subscribe(function (resp) {
            ts.pointsOfSale = resp;
            if (resp.length > 0) {
                frm.get('point_of_sale_id').setValue(resp[0].id);
            }
        });
    };
    ResolutionFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        _super.prototype.loadData.call(this);
        var ts = this;
        var frm = ts.customForm;
        ts.editing = true;
        ts.resSer.getData({ uid: id }).subscribe(function (resp) {
            frm.setValue({
                date_from: resp[0].date_from,
                date_up: resp[0].date_up,
                footline1: resp[0].footline1,
                footline2: resp[0].footline2,
                footline3: resp[0].footline3,
                footline4: resp[0].footline4,
                headerline1: resp[0].headerline1,
                headerline2: resp[0].headerline2,
                initial_number: resp[0].initial_number,
                invoice_name: resp[0].invoice_name,
                prefix: resp[0].prefix,
                range_from: resp[0].range_from,
                range_up: resp[0].range_up,
                resolution_number: resp[0].resolution_number,
                type_document_id: resp[0].type_document_id,
                point_of_sale_id: resp[0].point_of_sale_id,
            });
            ts.fullLoad();
        });
    };
    ResolutionFormComponent.prototype.onResetForm = function (form) {
        _super.prototype.onResetForm.call(this, form);
        this.customForm.setValue({
            date_from: '2019-01-19',
            date_up: '2030-01-19',
            footline1: '<div style="text-align: center;">Resolución Nº. 18764001112603 de 22 de julio de 2020, Sin Prefijo, Factura ELECTRÓNICA autorizada desde 7.001 a 30.000</div>',
            footline2: '',
            footline3: '',
            footline4: '',
            headerline1: '<div style="text-align: center;"><b style=""><font size="3"><font color="#3366ff" style="">LOPEZ</font><font color="#ff9900" style="">SOFT</font> S.A.S.&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); text-align: center;"><b style=""><font size="2">N.I.T. 901.091.403-2&nbsp;</font></b></div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;">CRA 15 #57-38 Santa Teresita, Dosquebradas - Risaralda.&nbsp;</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>CEL</b>: 310 843 5431 - <b>Fijo</b>: (036) 342 3070</div><div style="color: rgb(0, 0, 0); font-size: 13px; text-align: center;"><b>Correo</b>: gerencia@lopezsoft.net.co -<b>Sitio web</b>: <a href="https://lopezsoft.net.co/">https://lopezsoft.net.co/</a></div>',
            headerline2: '<div style="font-size: 13px; text-align: center;"><b>RÉGIMEN SIMPLE DE TRIBUTACIÓN - SIMPLE</b>&nbsp;</div><div style="text-align: center;"><font size="1">NO SOMOS GRANDES CONTRIBUYENTES - NO SOMOS AUTO RETENEDORES&nbsp;</font></div><div style="text-align: center;"><font size="1">SOMOS AGENTES RETENEDORES DEL IMPUESTO SOBRE LAS VENTAS (IVA)&nbsp;</font></div><div style="font-size: 13px; text-align: center;"><b>CIIU: 6201</b></div>',
            initial_number: '1',
            invoice_name: 'FACTURA DE VENTA',
            prefix: 'FE',
            range_from: '1',
            range_up: 1000,
            resolution_number: '18760000001',
            type_document_id: this.aDocuments[0].id,
            point_of_sale_id: this.pointsOfSale[0].id,
        });
    };
    ResolutionFormComponent.prototype.onCurrencyChange = function (id) {
        var ts = this;
        if (id) {
            var curr = ts.currency.find(function (currency) { return currency.id === id; });
            var local = ts.customForm.get('national_currency').value;
            if (!local) {
                ts.activeLoading();
                ts.currSys.getChangeLocal({ source: curr.CurrencyISO }).
                    subscribe(function (resp) {
                    ts.disabledLoading();
                    ts.exchangeRateValue.nativeElement.value = resp[0].value;
                });
            }
        }
    };
    ResolutionFormComponent.ɵfac = function ResolutionFormComponent_Factory(t) { return new (t || ResolutionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_7__["CurrencySysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_9__["ResolutionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_companies__WEBPACK_IMPORTED_MODULE_10__["BranchOfficeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
    ResolutionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResolutionFormComponent, selectors: [["app-resolution-form"]], viewQuery: function ResolutionFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.exchangeRateValue = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [1, "col"], [1, "form-group"], ["formControlName", "headerline1"], ["formControlName", "headerline2"], [1, "col-md-6"], [1, "asterisk"], ["formControlName", "point_of_sale_id", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "type_document_id", "required", ""], ["type", "text", "formControlName", "invoice_name", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["type", "text", "formControlName", "resolution_number", 1, "form-control"], ["type", "text", "formControlName", "prefix", 1, "form-control"], ["type", "text", "formControlName", "initial_number", 1, "form-control"], ["type", "text", "formControlName", "range_from", 1, "form-control"], ["type", "text", "formControlName", "range_up", 1, "form-control"], ["type", "date", "formControlName", "date_from", 1, "form-control"], ["type", "date", "formControlName", "date_up", 1, "form-control"], [3, "value"], ["formControlName", "footline1"], ["formControlName", "footline2"], ["formControlName", "footline3"], ["formControlName", "footline4"]], template: function ResolutionFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function ResolutionFormComponent_Template_ul_activeIdChange_10_listener($event) { return ctx.active = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Encabezado");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ResolutionFormComponent_ng_template_15_Template, 90, 26, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Pie de p\u00E1gina");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ResolutionFormComponent_ng_template_19_Template, 16, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "app-footer-form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function ResolutionFormComponent_Template_app_footer_form_closeEvent_22_listener() { return ctx.cancel(); })("saveAndCreateEvent", function ResolutionFormComponent_Template_app_footer_form_saveAndCreateEvent_22_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function ResolutionFormComponent_Template_app_footer_form_saveAndCloseEvent_22_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 13, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 15, "Resoluci\u00F3n de facturaci\u00F3n"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavOutlet"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__["FooterFormComponent"], ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["quill-editor[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px dashed red;\n}\n\n@media (max-width: 576px) {\n  [_nghost-%COMP%]     .ql-container {\n    height: 130px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVzb2x1dGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtDQUNGOztBQUNBO0VBQ0UsdUJBQUE7Q0FFRjs7QUFBQTtFQUNBO0lBQ0UseUJBQUE7R0FHQTtDQUNGIiwiZmlsZSI6InJlc29sdXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInF1aWxsLWVkaXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm5nLWludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbjpob3N0IDo6bmctZGVlcCAucWwtY29udGFpbmVye1xyXG4gIGhlaWdodDogMTMwcHggIWltcG9ydGFudDtcclxufVxyXG59XHJcbiJdfQ== */"] });
    return ResolutionFormComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResolutionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-resolution-form',
                templateUrl: './resolution-form.component.html',
                styleUrls: ['./resolution-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_general_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"] }, { type: _services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_7__["CurrencySysService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_9__["ResolutionsService"] }, { type: app_services_companies__WEBPACK_IMPORTED_MODULE_10__["BranchOfficeService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }], exchangeRateValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['exchangeRateValue']
        }] }); })();


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

/***/ "Iq2V":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/general/identity-documents/edit-identitydocs/edit-identitydocs.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditIdentitydocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIdentitydocsComponent", function() { return EditIdentitydocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/global */ "Absx");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");


















var _c0 = ["focusElement"];
var EditIdentitydocsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditIdentitydocsComponent, _super);
    function EditIdentitydocsComponent(fb, msg, api, router, translate, aRouter, spinner, identDocs) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.identDocs = identDocs;
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            code: [''],
            document_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            abbrev: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]],
            active: [false],
        });
        return _this;
    }
    Object.defineProperty(EditIdentitydocsComponent.prototype, "invalidDocumentName", {
        get: function () {
            return this.customForm.get('document_name').invalid && this.customForm.get('document_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditIdentitydocsComponent.prototype, "invalidAbbrev", {
        get: function () {
            return this.customForm.get('abbrev').invalid && this.customForm.get('abbrev').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditIdentitydocsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        ts.title = lang.instant('general.createEdit') + " " + lang.instant('identityDocuments.title');
        ts.PutURL = '/general/identitydocs/update/';
        ts.PostURL = '/general/identitydocs/create';
    };
    EditIdentitydocsComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.identDocs.getData({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        abbrev: resp[0].abbrev,
                        active: resp[0].active,
                        code: resp[0].code,
                        document_name: resp[0].document_name,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditIdentitydocsComponent.ɵfac = function EditIdentitydocsComponent_Factory(t) { return new (t || EditIdentitydocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global__WEBPACK_IMPORTED_MODULE_8__["IdentityDocumentsService"])); };
    EditIdentitydocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditIdentitydocsComponent, selectors: [["app-edit-identitydocs"]], viewQuery: function EditIdentitydocsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 27, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "inline-form-card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "fullWidth", "", "nbinput", "", "name", "code", "formControlName", "code", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "document_name", "formControlName", "document_name", "required", "", 1, "form-control"], ["type", "text", "step", "any", "fullWidth", "", "nbinput", "", "name", "abbrev", "formControlName", "abbrev", "required", "", 1, "form-control"], [1, "checkbox"], ["type", "checkbox", "formControlName", "active", "id", "active", 1, "form-control", 2, "margin-right", "2%"], ["for", "active"], [1, "card-footer"], [3, "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"]], template: function EditIdentitydocsComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "app-footer-form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditIdentitydocsComponent_Template_app_footer_form_closeEvent_37_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditIdentitydocsComponent_Template_app_footer_form_saveAndCreateEvent_37_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditIdentitydocsComponent_Template_app_footer_form_saveAndCloseEvent_37_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 19, "identityDocuments.code"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 21, "identityDocuments.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidDocumentName)("is-invalid", ctx.invalidDocumentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 23, "identityDocuments.abbrev"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidAbbrev)("is-invalid", ctx.invalidAbbrev);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 25, "identityDocuments.active"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__["FooterFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });
    return EditIdentitydocsComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditIdentitydocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-identitydocs',
                templateUrl: './edit-identitydocs.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_global__WEBPACK_IMPORTED_MODULE_8__["IdentityDocumentsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "L1EC":
/*!****************************************************************!*\
  !*** ./src/app/pages/general/tax-rates/tax-rates.component.ts ***!
  \****************************************************************/
/*! exports provided: TaxRatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxRatesComponent", function() { return TaxRatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function TaxRatesComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxRatesComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var TaxRatesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TaxRatesComponent, _super);
    function TaxRatesComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Impuestos';
        return _this;
    }
    TaxRatesComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.rate.title');
    };
    TaxRatesComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
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
    };
    TaxRatesComponent.prototype.createData = function () {
        var ts = this;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/general/taxrates/create');
    };
    TaxRatesComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/taxrates/edit/" + data.id);
    };
    TaxRatesComponent.ɵfac = function TaxRatesComponent_Factory(t) { return new (t || TaxRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    TaxRatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaxRatesComponent, selectors: [["app-taxrates"]], viewQuery: function TaxRatesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function TaxRatesComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function TaxRatesComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, TaxRatesComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TaxRatesComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxRatesComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function TaxRatesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function TaxRatesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
    return TaxRatesComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_4__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaxRatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-taxrates',
                templateUrl: './../../global/global-grid.component.html'
            }]
    }], function () { return [{ type: _utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchField']
        }] }); })();


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

/***/ "Oykw":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/general/reports-header/reports-header-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReportsHeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderFormComponent", function() { return ReportsHeaderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _core_components_forms_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/components/forms/index */ "xg8E");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/general/index */ "PcHl");
/* harmony import */ var app_services_companies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/companies */ "mm0L");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var ng_fallimg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-fallimg */ "Nn4G");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/components/forms/footer-form/footer-form.component */ "uHPU");























var _c0 = ["uploadFile"];
var _c1 = ["imgUp"];
var _c2 = ["focusElement"];
function ReportsHeaderFormComponent_ng_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var branch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branch_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", branch_r2.branch_name, " ");
} }
var ReportsHeaderFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReportsHeaderFormComponent, _super);
    function ReportsHeaderFormComponent(fb, msg, api, router, translate, aRouter, reportSer, spinner, branch) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.reportSer = reportSer;
        _this.spinner = spinner;
        _this.branch = branch;
        _this.branchs = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            branch_office_id: [0],
            line1: [''],
            line2: [''],
            foot: [''],
        });
        return _this;
    }
    ReportsHeaderFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var frm = ts.customForm;
        ts.PutURL = '/general/reports/update/';
        ts.PostURL = '/general/reports/create';
        ts.branch.getData({}).subscribe(function (resp) {
            ts.branchs = resp;
            if (resp.length > 0) {
                frm.get('branch_office_id').setValue(resp[0].id);
            }
        });
        ts.loadData();
    };
    ReportsHeaderFormComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        ts.reportSer.getData({ uid: id }).subscribe(function (resp) {
            ts.hideSpinner();
            if (resp.length > 0) {
                ts.editing = true;
                ts.uid = resp[0].id;
                frm.setValue({
                    branch_office_id: resp[0].branch_office_id,
                    line1: resp[0].line1,
                    line2: resp[0].line2,
                    foot: resp[0].foot,
                });
                ts.imgData = resp[0].image ? resp[0].image : '';
            }
        }, function () { return ts.hideSpinner(); });
    };
    ReportsHeaderFormComponent.ɵfac = function ReportsHeaderFormComponent_Factory(t) { return new (t || ReportsHeaderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_8__["ReportsHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_companies__WEBPACK_IMPORTED_MODULE_9__["BranchOfficeService"])); };
    ReportsHeaderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReportsHeaderFormComponent, selectors: [["app-reports-header-form"]], viewQuery: function ReportsHeaderFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFile = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 16, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col"], [1, "form-group"], ["formControlName", "branch_office_id", 3, "virtualScroll"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "line1"], ["formControlName", "line2"], ["formControlName", "foot"], ["div", "", 1, "col-md-6"], ["for", "file"], ["type", "file", "id", "file", 1, "form-control-file", 3, "change"], ["uploadFile", ""], ["width", "128px", "fallimg", "", 1, "img-thumbnail", 3, "src"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function ReportsHeaderFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sede/Sucursal");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ng-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ReportsHeaderFormComponent_ng_option_16_Template, 2, 2, "ng-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "quill-editor", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "quill-editor", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "quill-editor", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Seleccionar imagen");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ReportsHeaderFormComponent_Template_input_change_34_listener($event) { return ctx.uploadImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "app-footer-form", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function ReportsHeaderFormComponent_Template_app_footer_form_closeEvent_39_listener() { return ctx.cancel(); })("saveAndCreateEvent", function ReportsHeaderFormComponent_Template_app_footer_form_saveAndCreateEvent_39_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function ReportsHeaderFormComponent_Template_app_footer_form_saveAndCloseEvent_39_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "general.createEdit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, "Encabezado de informes"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.branchs);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgData, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_quill__WEBPACK_IMPORTED_MODULE_12__["QuillEditorComponent"], ng_fallimg__WEBPACK_IMPORTED_MODULE_13__["ɵa"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_14__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["quill-editor[_ngcontent-%COMP%] {\n  min-height: 100px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwb3J0cy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7Q0FDRiIsImZpbGUiOiJyZXBvcnRzLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInF1aWxsLWVkaXRvciB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });
    return ReportsHeaderFormComponent;
}(_core_components_forms_index__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ReportsHeaderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-reports-header-form',
                templateUrl: './reports-header.component.html',
                styleUrls: ['./reports-header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_6__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_8__["ReportsHeaderService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: app_services_companies__WEBPACK_IMPORTED_MODULE_9__["BranchOfficeService"] }]; }, { uploadFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['uploadFile']
        }], imgUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['imgUp']
        }], focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "R7qX":
/*!*********************************************************!*\
  !*** ./src/app/pages/general/general-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.component */ "THQA");
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxes/taxes.component */ "k/3F");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currency/currency.component */ "US/E");
/* harmony import */ var _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxes/edit-taxes/edit-taxes.component */ "VxdL");
/* harmony import */ var _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency/edit-currency/edit-currency.component */ "iUvZ");
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "L1EC");
/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "rHjq");
/* harmony import */ var _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./identity-documents/edit-identitydocs/edit-identitydocs.component */ "Iq2V");
/* harmony import */ var _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tax-rates/edit-taxrates/edit-taxrates.component */ "hV/3");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index */ "oF3Q");














var routes = [{
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
            {
                path: 'resolutions',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ResolutionsComponent"]
            },
            {
                path: 'resolutions/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ResolutionFormComponent"]
            },
            {
                path: 'resolutions/create',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ResolutionFormComponent"]
            },
            {
                path: 'reports',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ReportsHeaderComponent"]
            },
            {
                path: 'reports/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ReportsHeaderFormComponent"]
            },
            {
                path: 'reports/create',
                component: _index__WEBPACK_IMPORTED_MODULE_11__["ReportsHeaderFormComponent"]
            },
        ],
    }];
var GeneralRoutingModule = /** @class */ (function () {
    function GeneralRoutingModule() {
    }
    GeneralRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRoutingModule });
    GeneralRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRoutingModule_Factory(t) { return new (t || GeneralRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GeneralRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "THQA":
/*!****************************************************!*\
  !*** ./src/app/pages/general/general.component.ts ***!
  \****************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



var GeneralComponent = /** @class */ (function () {
    function GeneralComponent() {
    }
    GeneralComponent.prototype.ngOnInit = function () {
    };
    GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
    GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 1, vars: 0, template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return GeneralComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "US/E":
/*!**************************************************************!*\
  !*** ./src/app/pages/general/currency/currency.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function CurrencyComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrencyComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var CurrencyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CurrencyComponent, _super);
    function CurrencyComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Monedas';
        _this.translate.setDefaultLang(_this.activeLang);
        return _this;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('currency.title');
    };
    CurrencyComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
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
    };
    CurrencyComponent.prototype.createData = function () {
        var ts = this;
        var lang = this.translate;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/general/currency/create');
    };
    CurrencyComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/currency/edit/" + data.id);
    };
    CurrencyComponent.ɵfac = function CurrencyComponent_Factory(t) { return new (t || CurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    CurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrencyComponent, selectors: [["app-currency"]], viewQuery: function CurrencyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function CurrencyComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function CurrencyComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CurrencyComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CurrencyComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrencyComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function CurrencyComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CurrencyComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return CurrencyComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-currency',
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

/***/ "VxdL":
/*!************************************************************************!*\
  !*** ./src/app/pages/general/taxes/edit-taxes/edit-taxes.component.ts ***!
  \************************************************************************/
/*! exports provided: EditTaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaxesComponent", function() { return EditTaxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_general_taxes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/general/taxes.service */ "M3Vx");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");


















var _c0 = ["focusElement"];
var EditTaxesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditTaxesComponent, _super);
    function EditTaxesComponent(fb, msg, api, router, translate, aRouter, spinner, types) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.types = types;
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            name_taxe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            is_vat: [false],
        });
        return _this;
    }
    Object.defineProperty(EditTaxesComponent.prototype, "invalidNameTaxe", {
        get: function () {
            return this.customForm.get('name_taxe').invalid && this.customForm.get('name_taxe').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTaxesComponent.prototype, "invalidDescription", {
        get: function () {
            return this.customForm.get('description').invalid && this.customForm.get('description').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditTaxesComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        ts.title = lang.instant('general.createEdit') + " " + lang.instant('taxes.title');
        ts.PutURL = '/general/taxes/update/';
        ts.PostURL = '/general/taxes/create';
    };
    EditTaxesComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                ts.editing = true;
                ts.types.getData({ uid: id }).subscribe(function (resp) {
                    _this.customForm.setValue({
                        name_taxe: resp[0].name_taxe,
                        description: resp[0].description,
                        is_vat: resp[0].is_vat,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditTaxesComponent.ɵfac = function EditTaxesComponent_Factory(t) { return new (t || EditTaxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_taxes_service__WEBPACK_IMPORTED_MODULE_8__["TaxesService"])); };
    EditTaxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditTaxesComponent, selectors: [["app-edit-taxes"]], viewQuery: function EditTaxesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 30, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "aterisk"], ["type", "text", "nbinput", "", "fullWidth", "", "name", "name_taxe", "formControlName", "name_taxe", "required", "", "autofocus", "", 1, "form-control"], ["focusElement", ""], ["type", "text", "fullWidth", "", "nbinput", "", "name", "description", "formControlName", "description", "required", "", "autofocus", "", 1, "form-control"], [1, "checkbox"], ["type", "checkbox", "formControlName", "is_vat", 1, "form-control", 2, "margin-right", "2%"], [1, "card-footer"], [3, "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"]], template: function EditTaxesComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 11, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "app-footer-form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditTaxesComponent_Template_app_footer_form_closeEvent_37_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditTaxesComponent_Template_app_footer_form_saveAndCreateEvent_37_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditTaxesComponent_Template_app_footer_form_saveAndCloseEvent_37_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 18, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 20, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 22, "taxes.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidNameTaxe)("is-invalid", ctx.invalidNameTaxe);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 24, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 26, "taxes.description"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidDescription)("is-invalid", ctx.invalidDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 28, "taxes.is_vat"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_9__["FooterFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });
    return EditTaxesComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditTaxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-taxes',
                templateUrl: './edit-taxes.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_general_taxes_service__WEBPACK_IMPORTED_MODULE_8__["TaxesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "aCim":
/*!********************************************************************!*\
  !*** ./src/app/pages/general/resolutions/resolutions.component.ts ***!
  \********************************************************************/
/*! exports provided: ResolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionsComponent", function() { return ResolutionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function ResolutionsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResolutionsComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var ResolutionsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ResolutionsComponent, _super);
    function ResolutionsComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Numeraciones de facturación.';
        _this.translate.setDefaultLang(_this.activeLang);
        return _this;
    }
    ResolutionsComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    ResolutionsComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/general/resolutions/create',
            read: '/general/resolutions/read',
            update: '/general/resolutions/update/',
            delete: '/general/resolutions/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'resolution_number', type: 'string' },
            { name: 'prefix', type: 'string' },
            { name: 'plural_name', type: 'string' },
            { name: 'range_from', type: 'string' },
            { name: 'range_up', type: 'string' },
            { name: 'branch_name', type: 'string' },
            { name: 'voucher_name', type: 'string' },
            { name: 'initial_number', type: 'number' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: 'Punto de venta', align: 'center', datafield: 'branch_name' },
                { text: 'Documento', align: 'center', datafield: 'voucher_name' },
                { text: 'Nº. Resolución', align: 'center', datafield: 'resolution_number', width: 120, cellsalign: 'right' },
                { text: 'Prefijo', align: 'center', datafield: 'prefix', width: 110 },
                { text: 'Iniciar desde', align: 'center', datafield: 'initial_number', width: 110, cellsalign: 'right' },
                { text: 'Rango desde', align: 'center', datafield: 'range_from', width: 110, cellsalign: 'right' },
                { text: 'Rango hasta', align: 'center', datafield: 'range_up', width: 110, cellsalign: 'right' },
            ];
        this.prepareGrid();
    };
    ResolutionsComponent.prototype.createData = function () {
        var ts = this;
        var lang = this.translate;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/general/resolutions/create');
    };
    ResolutionsComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/resolutions/edit/" + data.id);
    };
    ResolutionsComponent.ɵfac = function ResolutionsComponent_Factory(t) { return new (t || ResolutionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    ResolutionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResolutionsComponent, selectors: [["app-resolutions"]], viewQuery: function ResolutionsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function ResolutionsComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResolutionsComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function ResolutionsComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResolutionsComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ResolutionsComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ResolutionsComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResolutionsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function ResolutionsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function ResolutionsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return ResolutionsComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResolutionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resolutions',
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

/***/ "alHs":
/*!******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
  \******************************************************/
/*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function() { return QUILL_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function() { return QuillEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return QuillEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillModule", function() { return QuillModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillService", function() { return QuillService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function() { return QuillViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function() { return QuillViewHTMLComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModules", function() { return defaultModules; });
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");














var _c0 = [[["", "quill-editor-toolbar", ""]]];
var _c1 = ["[quill-editor-toolbar]"];
var defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

var getFormat = function getFormat(format, configFormat) {
  var passedFormat = format || configFormat;
  return passedFormat || 'html';
};

var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('config');

var QuillService = /*#__PURE__*/function () {
  function QuillService(config) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillService);

    this.config = config;
    this.count = 0;

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillService, [{
    key: "getQuill",
    value: function getQuill() {
      var _this = this;

      this.count++;

      if (!this.Quill && this.count === 1) {
        this.$importPromise = new Promise(function (resolve) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
            var _this2 = this;

            var _a, _b, quillImport;

            return D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return __webpack_require__.e(/*! import() | quill */ "quill").then(__webpack_require__.t.bind(null, /*! quill */ "kzlf", 7));

                  case 2:
                    quillImport = _context.sent;
                    this.Quill = quillImport.default ? quillImport.default : quillImport; // Only register custom options and modules once

                    (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                      var newCustomOption = _this2.Quill.import(customOption.import);

                      newCustomOption.whitelist = customOption.whitelist;

                      _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                    });
                    (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                      var implementation = _ref.implementation,
                          path = _ref.path;

                      _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                    });
                    resolve(this.Quill);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
      }

      return this.$importPromise;
    }
  }]);

  return QuillService;
}();

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](QUILL_CONFIG_TOKEN));
};

QuillService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  factory: function QuillService_Factory() {
    return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"])(QUILL_CONFIG_TOKEN));
  },
  token: QuillService,
  providedIn: "root"
});

QuillService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [QUILL_CONFIG_TOKEN]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


var QuillEditorBase = /*#__PURE__*/function () {
  function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
    var _this3 = this;

    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorBase);

    this.elementRef = elementRef;
    this.domSanitizer = domSanitizer;
    this.doc = doc;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.sanitize = false;
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    this.disabled = false; // used to store initial value before ViewInit

    this.valueGetter = function (quillEditor, editorElement) {
      var html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = null;
      }

      var modelValue = html;
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this3.format, _this3.service.config.format);

      if (format === 'html') {
        if (_this3.sanitize) {
          value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_7__["SecurityContext"].HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = function (range, oldRange, source) {
      var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

      if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      _this3.zone.run(function () {
        if (range === null) {
          _this3.onBlur.emit({
            editor: _this3.quillEditor,
            source: source
          });
        } else if (oldRange === null) {
          _this3.onFocus.emit({
            editor: _this3.quillEditor,
            source: source
          });
        }

        _this3.onSelectionChanged.emit({
          editor: _this3.quillEditor,
          oldRange: oldRange,
          range: range,
          source: source
        });

        if (shouldTriggerOnModelTouched) {
          _this3.onModelTouched();
        }
      });
    };

    this.textChangeHandler = function (delta, oldDelta, source) {
      // only emit changes emitted by user interactions
      var text = _this3.quillEditor.getText();

      var content = _this3.quillEditor.getContents();

      var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = null;
      }

      var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
      var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

      if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      _this3.zone.run(function () {
        if (shouldTriggerOnModelChange) {
          _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
        }

        _this3.onContentChanged.emit({
          content: content,
          delta: delta,
          editor: _this3.quillEditor,
          html: html,
          oldDelta: oldDelta,
          source: source,
          text: text
        });
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = function (event, current, old, source) {
      // only emit changes when there's any listener
      if (!_this3.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        var text = _this3.quillEditor.getText();

        var content = _this3.quillEditor.getContents();

        var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = null;
        }

        _this3.zone.run(function () {
          _this3.onEditorChanged.emit({
            content: content,
            delta: current,
            editor: _this3.quillEditor,
            event: event,
            html: html,
            oldDelta: old,
            source: source,
            text: text
          });
        });
      } else {
        _this3.onEditorChanged.emit({
          editor: _this3.quillEditor,
          event: event,
          oldRange: old,
          range: current,
          source: source
        });
      }
    };
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillEditorBase, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var _this4 = this;

        var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, contents;
        return D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(this.platformId)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context2.sent;
                this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                modules = Object.assign({}, this.modules || this.service.config.modules);

                if (toolbarElem) {
                  modules.toolbar = toolbarElem;
                } else if (modules.toolbar === undefined) {
                  modules.toolbar = defaultModules.toolbar;
                }

                placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                if (placeholder === undefined) {
                  placeholder = 'Insert text here ...';
                }

                if (this.styles) {
                  Object.keys(this.styles).forEach(function (key) {
                    _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                  });
                }

                if (this.classes) {
                  this.addClasses(this.classes);
                }

                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref2) {
                  var implementation = _ref2.implementation,
                      path = _ref2.path;
                  Quill.register(path, implementation);
                });
                bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                if (!bounds) {
                  bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                }

                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                readOnly = this.readOnly;

                if (!readOnly && this.readOnly !== false) {
                  readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                }

                scrollingContainer = this.scrollingContainer;

                if (!scrollingContainer && this.scrollingContainer !== null) {
                  scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                this.zone.runOutsideAngular(function () {
                  _this4.quillEditor = new Quill(_this4.editorElem, {
                    bounds: bounds,
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    placeholder: placeholder,
                    readOnly: readOnly,
                    scrollingContainer: scrollingContainer,
                    strict: _this4.strict,
                    theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                  });
                });

                if (this.content) {
                  format = getFormat(this.format, this.service.config.format);

                  if (format === 'object') {
                    this.quillEditor.setContents(this.content, 'silent');
                  } else if (format === 'text') {
                    this.quillEditor.setText(this.content, 'silent');
                  } else if (format === 'json') {
                    try {
                      this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                    } catch (e) {
                      this.quillEditor.setText(this.content, 'silent');
                    }
                  } else {
                    if (this.sanitize) {
                      this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_7__["SecurityContext"].HTML, this.content);
                    }

                    contents = this.quillEditor.clipboard.convert(this.content);
                    this.quillEditor.setContents(contents, 'silent');
                  }

                  this.quillEditor.getModule('history').clear();
                } // initialize disabled status based on this.disabled as default value


                this.setDisabledState(); // triggered if selection or text changed

                this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                // if you are using the editor api in created output to change the editor content

                setTimeout(function () {
                  if (_this4.onValidatorChanged) {
                    _this4.onValidatorChanged();
                  }

                  _this4.onEditorCreated.emit(_this4.quillEditor);
                });

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.quillEditor) {
        this.quillEditor.off('selection-change', this.selectionChangeHandler);
        this.quillEditor.off('text-change', this.textChangeHandler);
        this.quillEditor.off('editor-change', this.editorChangeHandler);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this5 = this;

      if (!this.quillEditor) {
        return;
      }
      /* eslint-disable @typescript-eslint/dot-notation */


      if (changes.readOnly) {
        this.quillEditor.enable(!changes.readOnly.currentValue);
      }

      if (changes.placeholder) {
        this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
      }

      if (changes.styles) {
        var currentStyling = changes.styles.currentValue;
        var previousStyling = changes.styles.previousValue;

        if (previousStyling) {
          Object.keys(previousStyling).forEach(function (key) {
            _this5.renderer.removeStyle(_this5.editorElem, key);
          });
        }

        if (currentStyling) {
          Object.keys(currentStyling).forEach(function (key) {
            _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
          });
        }
      }

      if (changes.classes) {
        var currentClasses = changes.classes.currentValue;
        var previousClasses = changes.classes.previousValue;

        if (previousClasses) {
          this.removeClasses(previousClasses);
        }

        if (currentClasses) {
          this.addClasses(currentClasses);
        }
      }
      /* eslint-enable @typescript-eslint/dot-notation */

    }
  }, {
    key: "addClasses",
    value: function addClasses(classList) {
      var _this6 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this6.renderer.addClass(_this6.editorElem, c);
      });
    }
  }, {
    key: "removeClasses",
    value: function removeClasses(classList) {
      var _this7 = this;

      QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
        _this7.renderer.removeClass(_this7.editorElem, c);
      });
    }
  }, {
    key: "writeValue",
    value: function writeValue(currentValue) {
      this.content = currentValue;
      var format = getFormat(this.format, this.service.config.format);

      if (this.quillEditor) {
        if (currentValue) {
          if (format === 'text') {
            this.quillEditor.setText(currentValue);
          } else {
            this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
          }

          return;
        }

        this.quillEditor.setText('');
      }
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState() {
      var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
      // store initial value to set appropriate disabled status after ViewInit
      this.disabled = isDisabled;

      if (this.quillEditor) {
        if (isDisabled) {
          this.quillEditor.disable();
          this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
        } else {
          if (!this.readOnly) {
            this.quillEditor.enable();
          }

          this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
        }
      }
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onModelChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this.onValidatorChanged = fn;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.quillEditor) {
        return null;
      }

      var err = {};
      var valid = true;
      var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

      var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

      if (this.minLength && textLength && textLength < this.minLength) {
        err.minLengthError = {
          given: textLength,
          minLength: this.minLength
        };
        valid = false;
      }

      if (this.maxLength && textLength > this.maxLength) {
        err.maxLengthError = {
          given: textLength,
          maxLength: this.maxLength
        };
        valid = false;
      }

      if (this.required && !textLength) {
        err.requiredError = {
          empty: true
        };
        valid = false;
      }

      return valid ? null : err;
    }
  }], [{
    key: "normalizeClassNames",
    value: function normalizeClassNames(classes) {
      var classList = classes.trim().split(' ');
      return classList.reduce(function (prev, cur) {
        var trimmed = cur.trim();

        if (trimmed) {
          prev.push(trimmed);
        }

        return prev;
      }, []);
    }
  }]);

  return QuillEditorBase;
}();

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    required: "required",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    customOptions: "customOptions",
    customModules: "customModules",
    preserveWhitespace: "preserveWhitespace",
    trimOnValidation: "trimOnValidation",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    formats: "formats",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    trackChanges: "trackChanges",
    classes: "classes"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

QuillEditorBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: QuillService
  }];
};

QuillEditorBase.propDecorators = {
  format: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  modules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  debug: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  readOnly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  maxLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  minLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  formats: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  customToolbarPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  sanitize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  styles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  strict: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  scrollingContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  bounds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  customOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  customModules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  trackChanges: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  preserveWhitespace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  classes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  trimOnValidation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  onEditorCreated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onEditorChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onContentChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onSelectionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  valueGetter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  valueSetter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: QuillService
    }];
  }, {
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();

var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(QuillEditorComponent, _QuillEditorBase);

  var _super = Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(QuillEditorComponent);

  function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillEditorComponent);

    return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
  }

  return QuillEditorComponent;
}(QuillEditorBase);

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
      return QuillEditorComponent;
    })
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALIDATORS"],
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
      return QuillEditorComponent;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

QuillEditorComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]]
    }]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]]
    }]
  }, {
    type: QuillService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [QuillService]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return QuillEditorComponent;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALIDATORS"],
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return QuillEditorComponent;
        })
      }],
      selector: 'quill-editor',
      template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [QuillService]
      }]
    }];
  }, null);
})();

var QuillViewHTMLComponent = /*#__PURE__*/function () {
  function QuillViewHTMLComponent(sanitizer, service) {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewHTMLComponent);

    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewHTMLComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.theme) {
        var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
        this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
      } else if (!this.theme) {
        var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

        this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
      }

      if (changes.content) {
        this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
      }
    }
  }]);

  return QuillViewHTMLComponent;
}();

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
  styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
  encapsulation: 2
});

QuillViewHTMLComponent.ctorParameters = function () {
  return [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]
    }]
  }, {
    type: QuillService
  }];
};

QuillViewHTMLComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      selector: 'quill-view-html',
      template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();

var QuillViewComponent = /*#__PURE__*/function () {
  function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
    var _this8 = this;

    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillViewComponent);

    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.sanitize = false;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;

    this.valueSetter = function (quillEditor, value) {
      var format = getFormat(_this8.format, _this8.service.config.format);
      var content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          if (_this8.sanitize) {
            value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_7__["SecurityContext"].HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillViewComponent, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (!this.quillEditor) {
        return;
      }

      if (changes.content) {
        this.valueSetter(this.quillEditor, changes.content.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var _this9 = this;

        var Quill, modules, debug, formats, theme;
        return D_wamp64_www_y_code_full_version_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(this.platformId)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.service.getQuill();

              case 4:
                Quill = _context3.sent;
                modules = Object.assign({}, this.modules || this.service.config.modules);
                modules.toolbar = false;
                this.customOptions.forEach(function (customOption) {
                  var newCustomOption = Quill.import(customOption.import);
                  newCustomOption.whitelist = customOption.whitelist;
                  Quill.register(newCustomOption, true);
                });
                this.customModules.forEach(function (_ref3) {
                  var implementation = _ref3.implementation,
                      path = _ref3.path;
                  Quill.register(path, implementation);
                });
                debug = this.debug;

                if (!debug && debug !== false && this.service.config.debug) {
                  debug = this.service.config.debug;
                }

                formats = this.formats;

                if (!formats && formats === undefined) {
                  formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                }

                theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                this.zone.runOutsideAngular(function () {
                  _this9.quillEditor = new Quill(_this9.editorElem, {
                    debug: debug,
                    formats: formats,
                    modules: modules,
                    readOnly: true,
                    strict: _this9.strict,
                    theme: theme
                  });
                });
                this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                if (this.content) {
                  this.valueSetter(this.quillEditor, this.content);
                }

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return QuillViewComponent;
}();

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]));
};

QuillViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    sanitize: "sanitize",
    strict: "strict",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace",
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    content: "content"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function QuillViewComponent_Template(rf, ctx) {},
  styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
  encapsulation: 2
});

QuillViewComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: QuillService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
    }]
  }];
};

QuillViewComponent.propDecorators = {
  format: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  theme: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  modules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  debug: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  formats: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  sanitize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  strict: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  customModules: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  customOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  preserveWhitespace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      selector: 'quill-view',
      template: "\n",
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"]]
      }]
    }];
  }, {
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();

var QuillModule = /*#__PURE__*/function () {
  function QuillModule() {
    Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, QuillModule);
  }

  Object(D_wamp64_www_y_code_full_version_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(QuillModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: QuillModule,
        providers: [{
          provide: QUILL_CONFIG_TOKEN,
          useValue: config
        }]
      };
    }
  }]);

  return QuillModule;
}();

QuillModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function QuillModule_Factory(t) {
    return new (t || QuillModule)();
  },
  providers: [QuillService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](QuillModule, {
    declarations: function declarations() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
    },
    exports: function exports() {
      return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
      providers: [QuillService]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




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

/***/ "hV/3":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general/tax-rates/edit-taxrates/edit-taxrates.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditTaxratesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaxratesComponent", function() { return EditTaxratesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxcombobox */ "01f3");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _services_general_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/general/index */ "PcHl");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _services_accounting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../services/accounting */ "dKyG");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");






















var _c0 = ["focusElement"];
var _c1 = ["cbAccountingAccount"];
function EditTaxratesComponent_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tax_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tax_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tax_r4.name_taxe, " ");
} }
function EditTaxratesComponent_ng_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var taxF_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", taxF_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taxF_r5.name, " ");
} }
function EditTaxratesComponent_ng_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var acco_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", acco_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", acco_r6.account_number, " ", acco_r6.account_name, " ");
} }
var EditTaxratesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditTaxratesComponent, _super);
    function EditTaxratesComponent(fb, msg, api, router, translate, aRouter, spinner, types, tax, taxFrec, accountsSer) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.types = types;
        _this.tax = tax;
        _this.taxFrec = taxFrec;
        _this.accountsSer = accountsSer;
        _this.taxGroup = [];
        _this.taxAccount = [];
        _this.taxFrecuency = [];
        _this.accounts = [];
        var ts = _this;
        ts.translate.setDefaultLang(_this.activeLang);
        ts.customForm = _this.fb.group({
            tax_gruop_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            account_id: ['0'],
            shipping_frequency_id: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rate_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            rate_abbre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            rate_value: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            decimal_rate: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            is_exempt: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        return _this;
    }
    Object.defineProperty(EditTaxratesComponent.prototype, "invalidTaxGroupId", {
        get: function () {
            return (this.customForm.get('tax_gruop_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTaxratesComponent.prototype, "invalidShippingFrequencyId", {
        get: function () {
            return (this.customForm.get('shipping_frequency_id').value === 0) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTaxratesComponent.prototype, "invalidRateName", {
        get: function () {
            return this.customForm.get('rate_name').invalid && this.customForm.get('rate_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTaxratesComponent.prototype, "invalidRateAbbre", {
        get: function () {
            return this.customForm.get('rate_abbre').invalid && this.customForm.get('rate_abbre').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditTaxratesComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        ts.title = 'Crear/Editar rango de impuesto';
        ts.title = lang.instant('general.createEdit') + " " + lang.instant('taxes.rate.title');
        ts.PutURL = '/general/taxerates/update/';
        ts.PostURL = '/general/taxerates/create';
    };
    EditTaxratesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        var ts = this;
        ts.tax.getData({}).subscribe(function (resp) {
            _this.taxGroup = resp;
        });
        ts.taxFrec.getData({}).subscribe(function (resp) {
            _this.taxFrecuency = resp;
        });
        ts.accountsSer.getDataAll({}).subscribe(function (resp) {
            _this.accounts = resp;
        });
    };
    EditTaxratesComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ts, frm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                ts = this;
                frm = ts.customForm;
                ts.editing = true;
                ts.types.getData({ uid: id }).subscribe(function (resp) {
                    frm.setValue({
                        account_id: (resp[0].account_id == 0) ? '0' : resp[0].account_id,
                        shipping_frequency_id: resp[0].shipping_frequency_id,
                        decimal_rate: resp[0].decimal_rate,
                        rate_abbre: resp[0].rate_abbre,
                        rate_name: resp[0].rate_name,
                        rate_value: resp[0].rate_value,
                        tax_gruop_id: resp[0].tax_gruop_id,
                        is_exempt: resp[0].is_exempt
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditTaxratesComponent.ɵfac = function EditTaxratesComponent_Factory(t) { return new (t || EditTaxratesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_9__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_8__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_8__["TaxesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_index__WEBPACK_IMPORTED_MODULE_8__["ShippingFrequencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_accounting__WEBPACK_IMPORTED_MODULE_10__["AccountsService"])); };
    EditTaxratesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditTaxratesComponent, selectors: [["app-edit-taxrates"]], viewQuery: function EditTaxratesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cbAccountingAccount = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 87, vars: 69, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "aterisk"], ["fullWidth", "", "formControlName", "tax_gruop_id", "name", "tax_gruop_id", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "rate_name", "autofocus", "", "required", "", 1, "form-control"], ["focusElement", ""], ["type", "text", "formControlName", "rate_abbre", "required", "", 1, "form-control"], ["type", "number", "step", "any", "formControlName", "rate_value", 1, "form-control"], ["type", "number", "step", "any", "formControlName", "decimal_rate", 1, "form-control"], ["fullWidth", "", "formControlName", "shipping_frequency_id", "name", "shipping_frequency_id", "required", ""], [1, "col"], ["fullWidth", "", "formControlName", "account_id", "name", "account_id", 3, "virtualScroll"], ["value", "0"], [1, "checkbox"], ["type", "checkbox", "formControlName", "is_exempt", "id", "is_exempt", 1, "form-control", 2, "margin-right", "2%"], ["for", "is_exempt"], [1, "card-footer"], [3, "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"]], template: function EditTaxratesComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ng-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditTaxratesComponent_ng_option_18_Template, 2, 2, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ng-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, EditTaxratesComponent_ng_option_67_Template, 2, 2, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "ng-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ng-option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Seleccionar cuenta");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, EditTaxratesComponent_ng_option_77_Template, 2, 3, "ng-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "app-footer-form", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditTaxratesComponent_Template_app_footer_form_closeEvent_86_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditTaxratesComponent_Template_app_footer_form_saveAndCreateEvent_86_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditTaxratesComponent_Template_app_footer_form_saveAndCloseEvent_86_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 39, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 41, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 43, "taxes.rate.group"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidTaxGroupId)("status-danger", ctx.invalidTaxGroupId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.taxGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 45, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 47, "taxes.rate.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidRateName)("is-invalid", ctx.invalidRateName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 49, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 51, "taxes.rate.abbre"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidRateAbbre)("is-invalid", ctx.invalidRateAbbre);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 53, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 55, "taxes.rate.value"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 57, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 59, "taxes.rate.decimal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 61, "general.aterisk"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 63, "taxes.rate.frecuency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidShippingFrequencyId)("status-danger", ctx.invalidShippingFrequencyId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.taxFrecuency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](73, 65, "taxes.rate.accountName"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("virtualScroll", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accounts);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](84, 67, "taxes.rate.is_exempt"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_13__["FooterFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], encapsulation: 2 });
    return EditTaxratesComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditTaxratesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-taxrates',
                templateUrl: './edit-taxrates.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_9__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_9__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_8__["TaxRatesService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_8__["TaxesService"] }, { type: _services_general_index__WEBPACK_IMPORTED_MODULE_8__["ShippingFrequencyService"] }, { type: _services_accounting__WEBPACK_IMPORTED_MODULE_10__["AccountsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }], cbAccountingAccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['cbAccountingAccount', { static: false }]
        }] }); })();


/***/ }),

/***/ "iUvZ":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/general/currency/edit-currency/edit-currency.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCurrencyComponent", function() { return EditCurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/components/forms/form.component */ "TK7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/general/currency-sys.service */ "yPNe");
/* harmony import */ var _services_general_currency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/general/currency.service */ "fTWp");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/components/forms/footer-form/footer-form.component */ "uHPU");





















var _c0 = ["focusElement"];
var _c1 = ["exchangeRateValue"];
function EditCurrencyComponent_ng_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var cur_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cur_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/flags/" + cur_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", cur_r3.CurrencyISO, " - ", cur_r3.CurrencyName, " ");
} }
var EditCurrencyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditCurrencyComponent, _super);
    function EditCurrencyComponent(fb, msg, api, router, translate, aRouter, spinner, curr, currSys) {
        var _this = _super.call(this, fb, msg, api, router, translate, aRouter, spinner) || this;
        _this.fb = fb;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.spinner = spinner;
        _this.curr = curr;
        _this.currSys = currSys;
        _this.currency = [];
        _this.translate.setDefaultLang(_this.activeLang);
        _this.customForm = _this.fb.group({
            currency_id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            exchange_rate_value: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            national_currency: [false],
            plural_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            singular_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            denomination: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
        });
        return _this;
    }
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidCurrencyId", {
        get: function () {
            return this.customForm.get('currency_id').invalid && this.customForm.get('currency_id').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidExchangeRateValue", {
        get: function () {
            return this.customForm.get('exchange_rate_value').invalid && this.customForm.get('exchange_rate_value').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidNationalCurrency", {
        get: function () {
            return this.customForm.get('national_currency').invalid && this.customForm.get('national_currency').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidPluralName", {
        get: function () {
            return this.customForm.get('plural_name').invalid && this.customForm.get('plural_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidSingularName", {
        get: function () {
            return this.customForm.get('singular_name').invalid && this.customForm.get('singular_name').touched;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCurrencyComponent.prototype, "invalidDenomination", {
        get: function () {
            return this.customForm.get('denomination').invalid && this.customForm.get('denomination').touched;
        },
        enumerable: false,
        configurable: true
    });
    EditCurrencyComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        var ts = this;
        var lang = ts.translate;
        var frm = ts.customForm;
        ts.title = lang.instant('general.createEdit') + " " + lang.instant('currency.title');
        ts.PutURL = '/general/currency/update/';
        ts.PostURL = '/general/currency/create';
        ts.curr.getData({}).subscribe(function (resp) {
            ts.currency = resp;
            if (resp.length > 0) {
                frm.get('currency_id').setValue(resp[0].id);
            }
        });
    };
    EditCurrencyComponent.prototype.loadData = function (id) {
        if (id === void 0) { id = 0; }
        var ts = this;
        var frm = ts.customForm;
        var lang = ts.translate;
        ts.editing = true;
        ts.currSys.getData({ uid: id }).subscribe(function (resp) {
            ts.customForm.setValue({
                currency_id: resp[0].currency_id,
                exchange_rate_value: resp[0].exchange_rate_value,
                national_currency: resp[0].national_currency,
                plural_name: resp[0].plural_name,
                singular_name: resp[0].singular_name,
                denomination: resp[0].denomination,
            });
        });
    };
    EditCurrencyComponent.prototype.onCurrencyChange = function (id) {
        var ts = this;
        if (id) {
            var curr = ts.currency.find(function (currency) { return currency.id === id; });
            var local = ts.customForm.get('national_currency').value;
            if (!local) {
                ts.activeLoading();
                ts.currSys.getChangeLocal({ source: curr.CurrencyISO }).
                    subscribe(function (resp) {
                    ts.disabledLoading();
                    ts.exchangeRateValue.nativeElement.value = resp[0].value;
                });
            }
        }
    };
    EditCurrencyComponent.ɵfac = function EditCurrencyComponent_Factory(t) { return new (t || EditCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_currency_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"])); };
    EditCurrencyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCurrencyComponent, selectors: [["app-edit-currency"]], viewQuery: function EditCurrencyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.exchangeRateValue = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 51, consts: [[1, "row"], [1, "col-md-12"], [1, "card", "inline-form-card"], [1, "card-header"], [1, "card-body"], [3, "formGroup"], [1, "col-md-6"], ["fullWidth", "", "formControlName", "currency_id", "name", "currency_id", "required", "", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "number", "step", "any", "name", "exchange_rate_value", "formControlName", "exchange_rate_value", "autofocus", "", "required", "", "autofocus", "", 1, "form-control"], ["exchangeRateValue", "", "focusElement", ""], ["type", "text", "name", "plural_name", "formControlName", "plural_name", "required", "", "autofocus", "", 1, "form-control"], ["type", "text", "step", "any", "name", "singular_name", "formControlName", "singular_name", "required", "", "autofocus", "", 1, "form-control"], ["type", "text", "name", "denomination", "formControlName", "denomination", "required", "", "autofocus", "", 1, "form-control"], [1, "checkbox"], ["type", "checkbox", "formControlName", "national_currency", "id", "national_currency", 1, "form-control", 2, "margin-right", "2%"], ["for", "national_currency"], [1, "card-footer"], [3, "loading", "showAaveACreate", "saveAClose", "closeEvent", "saveAndCreateEvent", "saveAndCloseEvent"], [3, "value"], ["height", "15", "width", "15", 3, "src"]], template: function EditCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ng-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditCurrencyComponent_Template_ng_select_change_13_listener($event) { return ctx.onCurrencyChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EditCurrencyComponent_ng_option_14_Template, 3, 4, "ng-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "app-footer-form", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function EditCurrencyComponent_Template_app_footer_form_closeEvent_50_listener() { return ctx.cancel(); })("saveAndCreateEvent", function EditCurrencyComponent_Template_app_footer_form_saveAndCreateEvent_50_listener() { return ctx.saveAndCreate(); })("saveAndCloseEvent", function EditCurrencyComponent_Template_app_footer_form_saveAndCloseEvent_50_listener() { return ctx.saveAndClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 37, ctx.title));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 39, "currency.name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.invalidCurrencyId)("status-danger", ctx.invalidCurrencyId);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 41, "currency.exchangeRateValue"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidExchangeRateValue)("is-invalid", ctx.invalidExchangeRateValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 43, "currency.pluralName"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidPluralName)("is-invalid", ctx.invalidPluralName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 45, "currency.singularName"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidSingularName)("is-invalid", ctx.invalidSingularName);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 47, "currency.denomination"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidDenomination)("is-invalid", ctx.invalidDenomination);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("status-danger", ctx.invalidNationalCurrency)("is-invalid", ctx.invalidNationalCurrency);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 49, "currency.nationalCurrency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading)("showAaveACreate", true)("saveAClose", ctx.saveAClose)("saveAClose", ctx.saveAClose);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _core_components_forms_footer_form_footer_form_component__WEBPACK_IMPORTED_MODULE_12__["FooterFormComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });
    return EditCurrencyComponent;
}(_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditCurrencyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-currency',
                templateUrl: './edit-currency.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] }, { type: _utils__WEBPACK_IMPORTED_MODULE_5__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _services_general_currency_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyService"] }, { type: _services_general_currency_sys_service__WEBPACK_IMPORTED_MODULE_8__["CurrencySysService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['focusElement']
        }], exchangeRateValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['exchangeRateValue']
        }] }); })();


/***/ }),

/***/ "k/3F":
/*!********************************************************!*\
  !*** ./src/app/pages/general/taxes/taxes.component.ts ***!
  \********************************************************/
/*! exports provided: TaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return TaxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function TaxesComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxesComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var TaxesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TaxesComponent, _super);
    function TaxesComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        return _this;
    }
    TaxesComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.title');
    };
    TaxesComponent.prototype.ngAfterViewInit = function () {
        this.changeLanguage(this.activeLang);
        this.title = this.translate.instant('taxes.title');
        var ts = this;
        var lang = ts.translate;
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
    };
    TaxesComponent.prototype.createData = function () {
        _super.prototype.createData.call(this);
        this.goRoute('pages/general/taxes/create');
    };
    TaxesComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/taxes/edit/" + data.id);
    };
    TaxesComponent.ɵfac = function TaxesComponent_Factory(t) { return new (t || TaxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    TaxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaxesComponent, selectors: [["app-taxes"]], viewQuery: function TaxesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function TaxesComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function TaxesComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, TaxesComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TaxesComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaxesComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function TaxesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function TaxesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
    return TaxesComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_3__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-taxes',
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

/***/ "oF3Q":
/*!****************************************!*\
  !*** ./src/app/pages/general/index.ts ***!
  \****************************************/
/*! exports provided: TaxesComponent, CurrencyComponent, TaxRatesComponent, IdentityDocumentsComponent, ResolutionsComponent, ResolutionFormComponent, ReportsHeaderFormComponent, ReportsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxes/taxes.component */ "k/3F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_0__["TaxesComponent"]; });

/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency/currency.component */ "US/E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyComponent"]; });

/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "L1EC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaxRatesComponent", function() { return _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_2__["TaxRatesComponent"]; });

/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "rHjq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityDocumentsComponent", function() { return _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_3__["IdentityDocumentsComponent"]; });

/* harmony import */ var _resolutions_resolutions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolutions/resolutions.component */ "aCim");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolutionsComponent", function() { return _resolutions_resolutions_component__WEBPACK_IMPORTED_MODULE_4__["ResolutionsComponent"]; });

/* harmony import */ var _resolutions_resolution_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolutions/resolution-form.component */ "CxRc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolutionFormComponent", function() { return _resolutions_resolution_form_component__WEBPACK_IMPORTED_MODULE_5__["ResolutionFormComponent"]; });

/* harmony import */ var _reports_header_reports_header_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-header/reports-header-form.component */ "Oykw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderFormComponent", function() { return _reports_header_reports_header_form_component__WEBPACK_IMPORTED_MODULE_6__["ReportsHeaderFormComponent"]; });

/* harmony import */ var _reports_header_reports_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports-header/reports-header.component */ "syvn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderComponent", function() { return _reports_header_reports_header_component__WEBPACK_IMPORTED_MODULE_7__["ReportsHeaderComponent"]; });











/***/ }),

/***/ "rHjq":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general/identity-documents/identity-documents.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IdentityDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityDocumentsComponent", function() { return IdentityDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function IdentityDocumentsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdentityDocumentsComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var IdentityDocumentsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IdentityDocumentsComponent, _super);
    function IdentityDocumentsComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Impuestos';
        return _this;
    }
    IdentityDocumentsComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    IdentityDocumentsComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
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
    };
    IdentityDocumentsComponent.prototype.createData = function () {
        var ts = this;
        var lang = this.translate;
        _super.prototype.createData.call(this);
        ts.goRoute('pages/general/identitydocuments/create');
    };
    IdentityDocumentsComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/identitydocuments/edit/" + data.id);
    };
    IdentityDocumentsComponent.ɵfac = function IdentityDocumentsComponent_Factory(t) { return new (t || IdentityDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    IdentityDocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IdentityDocumentsComponent, selectors: [["app-identitydocuments"]], viewQuery: function IdentityDocumentsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function IdentityDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function IdentityDocumentsComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, IdentityDocumentsComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function IdentityDocumentsComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdentityDocumentsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function IdentityDocumentsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function IdentityDocumentsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return IdentityDocumentsComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IdentityDocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-identitydocuments',
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

/***/ "syvn":
/*!**************************************************************************!*\
  !*** ./src/app/pages/general/reports-header/reports-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReportsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsHeaderComponent", function() { return ReportsHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/data/custom-grid/jqx-custom-grid.component */ "py8Q");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "YMfE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");














var _c0 = ["customGrid"];
var _c1 = ["searchField"];
function ReportsHeaderComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsHeaderComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.importData(); });
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
var ReportsHeaderComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReportsHeaderComponent, _super);
    function ReportsHeaderComponent(msg, api, router, translate, aRouter) {
        var _this = _super.call(this, msg, api, router, translate, aRouter) || this;
        _this.msg = msg;
        _this.api = api;
        _this.router = router;
        _this.translate = translate;
        _this.aRouter = aRouter;
        _this.title = 'Encabezado de reportes';
        _this.translate.setDefaultLang(_this.activeLang);
        return _this;
    }
    ReportsHeaderComponent.prototype.ngOnInit = function () {
        this.changeLanguage(this.activeLang);
    };
    ReportsHeaderComponent.prototype.ngAfterViewInit = function () {
        var ts = this;
        var lang = ts.translate;
        ts.crudApi = {
            create: '/general/reports/create',
            read: '/general/reports/read',
            update: '/general/reports/update/',
            delete: '/general/reports/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'branch_name', type: 'string' },
            { name: 'line1', type: 'string' },
            { name: 'line2', type: 'string' },
            { name: 'foot', type: 'string' },
            { name: 'state', type: 'number' },
        ];
        ts.sourceColumns =
            [
                { text: 'Sede/Sucursal', align: 'center', datafield: 'branch_name' },
            ];
        this.prepareGrid();
    };
    ReportsHeaderComponent.prototype.createData = function () {
        _super.prototype.createData.call(this);
        this.goRoute('pages/general/reports/create');
    };
    ReportsHeaderComponent.prototype.editData = function (data) {
        _super.prototype.editData.call(this, data);
        this.goRoute("pages/general/reports/edit/" + data.id);
    };
    ReportsHeaderComponent.ɵfac = function ReportsHeaderComponent_Factory(t) { return new (t || ReportsHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils__WEBPACK_IMPORTED_MODULE_4__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    ReportsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportsHeaderComponent, selectors: [["app-reports-header"]], viewQuery: function ReportsHeaderComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 38, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "menuExport"], [1, "space-right"], [1, "btn", "btn-danger", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-sync", "mr-1", "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], [1, "btn", "btn-success", "round", "mr-1", "mb-1", 3, "disabled", "click"], [1, "fa", "fa-plus", "mr-1", "fas-fa-22"], [4, "ngIf"], [1, "container-fluid"], [1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "keyup"], ["searchField", ""], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""], [1, "fa", "fa-upload", "mr-1", "fas-fa-22"]], template: function ReportsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsHeaderComponent_Template_button_click_8_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "jqxMenu", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemclick", function ReportsHeaderComponent_Template_jqxMenu_onItemclick_11_listener($event) { return ctx.itemclick($event); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsHeaderComponent_Template_button_click_62_listener() { return ctx.createData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ReportsHeaderComponent_div_66_Template, 5, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "fieldset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ReportsHeaderComponent_Template_input_keyup_70_listener($event) { return ctx.inputKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportsHeaderComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "jqxGrid", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onCellselect", function ReportsHeaderComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function ReportsHeaderComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
        } }, directives: [jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_7__["jqxMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
    return ReportsHeaderComponent;
}(_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_2__["JqxCustomGridComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reports-header',
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

/***/ "yebe":
/*!*************************************************!*\
  !*** ./src/app/pages/general/general.module.ts ***!
  \*************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "7M0M");
/* harmony import */ var jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxcombobox */ "01f3");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/core.module */ "pKmL");
/* harmony import */ var ng_fallimg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-fallimg */ "Nn4G");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ "alHs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _general_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-routing.module */ "R7qX");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index */ "oF3Q");
/* harmony import */ var _general_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general.component */ "THQA");
/* harmony import */ var _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./taxes/edit-taxes/edit-taxes.component */ "VxdL");
/* harmony import */ var _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./currency/edit-currency/edit-currency.component */ "iUvZ");
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ "L1EC");
/* harmony import */ var _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./identity-documents/identity-documents.component */ "rHjq");
/* harmony import */ var _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./identity-documents/edit-identitydocs/edit-identitydocs.component */ "Iq2V");
/* harmony import */ var _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tax-rates/edit-taxrates/edit-taxrates.component */ "hV/3");











/*
  * Translation
*/
















var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GeneralModule });
    GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _general_routing_module__WEBPACK_IMPORTED_MODULE_14__["GeneralRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
                jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
                jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_6__["jqxComboBoxModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"].forRoot(),
                ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: function (http) {
                            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
                        },
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                    }
                }),
            ]] });
    return GeneralModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_general_component__WEBPACK_IMPORTED_MODULE_16__["GeneralComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ResolutionsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ReportsHeaderFormComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ResolutionFormComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["ReportsHeaderComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["CurrencyComponent"],
        _index__WEBPACK_IMPORTED_MODULE_15__["TaxesComponent"],
        _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_17__["EditTaxesComponent"],
        _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_18__["EditCurrencyComponent"],
        _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_19__["TaxRatesComponent"],
        _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_20__["IdentityDocumentsComponent"],
        _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_21__["EditIdentitydocsComponent"],
        _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_22__["EditTaxratesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _general_routing_module__WEBPACK_IMPORTED_MODULE_14__["GeneralRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
        jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_6__["jqxComboBoxModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"], ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _general_routing_module__WEBPACK_IMPORTED_MODULE_14__["GeneralRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_5__["jqxMenuModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridModule"],
                    jqwidgets_ng_jqxcombobox__WEBPACK_IMPORTED_MODULE_6__["jqxComboBoxModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"].forRoot(),
                    ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useFactory: function (http) {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                        }
                    }),
                ],
                declarations: [
                    _general_component__WEBPACK_IMPORTED_MODULE_16__["GeneralComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ResolutionsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ReportsHeaderFormComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ResolutionFormComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["ReportsHeaderComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["CurrencyComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_15__["TaxesComponent"],
                    _taxes_edit_taxes_edit_taxes_component__WEBPACK_IMPORTED_MODULE_17__["EditTaxesComponent"],
                    _currency_edit_currency_edit_currency_component__WEBPACK_IMPORTED_MODULE_18__["EditCurrencyComponent"],
                    _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_19__["TaxRatesComponent"],
                    _identity_documents_identity_documents_component__WEBPACK_IMPORTED_MODULE_20__["IdentityDocumentsComponent"],
                    _identity_documents_edit_identitydocs_edit_identitydocs_component__WEBPACK_IMPORTED_MODULE_21__["EditIdentitydocsComponent"],
                    _tax_rates_edit_taxrates_edit_taxrates_component__WEBPACK_IMPORTED_MODULE_22__["EditTaxratesComponent"]
                ],
            }]
    }], null, null); })();


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
//# sourceMappingURL=general-general-module.js.map