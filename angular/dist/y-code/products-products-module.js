(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js ***!
  \*************************************************************************/
/*! exports provided: CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, CurrencyMaskDirective, CurrencyMaskInputMode, NgxCurrencyModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR", function() { return CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskDirective", function() { return CurrencyMaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaskInputMode", function() { return CurrencyMaskInputMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCurrencyModule", function() { return NgxCurrencyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CURRENCY_MASK_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var CurrencyMaskInputMode;
(function (CurrencyMaskInputMode) {
    CurrencyMaskInputMode[CurrencyMaskInputMode["FINANCIAL"] = 0] = "FINANCIAL";
    CurrencyMaskInputMode[CurrencyMaskInputMode["NATURAL"] = 1] = "NATURAL";
})(CurrencyMaskInputMode || (CurrencyMaskInputMode = {}));
let CURRENCY_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("currency.mask.config");

class InputManager {
    constructor(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    setCursorAt(position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            let textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    }
    updateValueAndCursor(newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        let newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    }
    get canInputMoreNumbers() {
        let onlyNumbers = this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, "");
        let haventReachedMaxLength = !(onlyNumbers.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
        let selectionStart = this.inputSelection.selectionStart;
        let selectionEnd = this.inputSelection.selectionEnd;
        let haveNumberSelected = !!(selectionStart != selectionEnd &&
            this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/));
        let startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
        return haventReachedMaxLength || haveNumberSelected || startWithZero;
    }
    get inputSelection() {
        let selectionStart = 0;
        let selectionEnd = 0;
        if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
            selectionStart = this.htmlInputElement.selectionStart;
            selectionEnd = this.htmlInputElement.selectionEnd;
        }
        else {
            let range = document.selection.createRange();
            if (range && range.parentElement() == this.htmlInputElement) {
                let lenght = this.htmlInputElement.value.length;
                let normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                let startRange = this.htmlInputElement.createTextRange();
                startRange.moveToBookmark(range.getBookmark());
                let endRange = this.htmlInputElement.createTextRange();
                endRange.collapse(false);
                if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                    selectionStart = selectionEnd = lenght;
                }
                else {
                    selectionStart = -startRange.moveStart("character", -lenght);
                    selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                    if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                        selectionEnd = lenght;
                    }
                    else {
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
    get rawValue() {
        return this.htmlInputElement && this.htmlInputElement.value;
    }
    set rawValue(value) {
        this._storedRawValue = value;
        if (this.htmlInputElement) {
            this.htmlInputElement.value = value;
        }
    }
    get storedRawValue() {
        return this._storedRawValue || '';
    }
}

class InputService {
    constructor(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/);
        this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g);
        this.PER_AR_NUMBER = new Map();
        this.inputManager = new InputManager(htmlInputElement);
        this.initialize();
    }
    initialize() {
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
    addNumber(keyCode) {
        const { decimal, precision, inputMode } = this.options;
        let keyChar = String.fromCharCode(keyCode);
        const isDecimalChar = keyChar === this.options.decimal;
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, keyChar);
            let selectionStart = undefined;
            if (inputMode === CurrencyMaskInputMode.NATURAL && precision > 0) {
                selectionStart = this.rawValue.indexOf(decimal);
                if (isDecimalChar) {
                    selectionStart++;
                }
            }
            this.updateFieldValue(selectionStart);
        }
        else {
            let selectionStart = this.inputSelection.selectionStart;
            let selectionEnd = this.inputSelection.selectionEnd;
            const rawValueStart = this.rawValue.substring(0, selectionStart);
            let rawValueEnd = this.rawValue.substring(selectionEnd, this.rawValue.length);
            // In natural mode, replace decimals instead of shifting them.
            const inDecimalPortion = rawValueStart.indexOf(decimal) !== -1;
            if (inputMode === CurrencyMaskInputMode.NATURAL && inDecimalPortion && selectionStart === selectionEnd) {
                rawValueEnd = rawValueEnd.substring(1);
            }
            const newValue = rawValueStart + keyChar + rawValueEnd;
            let nextSelectionStart = selectionStart + 1;
            const isDecimalOrThousands = isDecimalChar || keyChar === this.options.thousands;
            if (isDecimalOrThousands && keyChar === rawValueEnd[0]) {
                // If the cursor is just before the decimal or thousands separator and the user types the
                // decimal or thousands separator, move the cursor past it.
                nextSelectionStart++;
            }
            else if (!this.SINGLE_DIGIT_REGEX.test(keyChar)) {
                // Ignore other non-numbers.
                return;
            }
            this.rawValue = newValue;
            this.updateFieldValue(nextSelectionStart);
        }
    }
    applyMask(isNumber, rawValue, disablePadAndTrim = false) {
        let { allowNegative, decimal, precision, prefix, suffix, thousands, min, max, inputMode } = this.options;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        let onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
        if (!onlyNumbers && rawValue !== decimal) {
            return "";
        }
        if (inputMode === CurrencyMaskInputMode.NATURAL && !isNumber && !disablePadAndTrim) {
            rawValue = this.padOrTrimPrecision(rawValue);
            onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
        }
        let integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision)
            .replace(/^\u0660*/g, "")
            .replace(/^\u06F0*/g, "")
            .replace(/^0*/g, "");
        if (integerPart == "") {
            integerPart = "0";
        }
        let integerValue = parseInt(integerPart);
        integerPart = integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g, thousands);
        if (thousands && integerPart.startsWith(thousands)) {
            integerPart = integerPart.substring(1);
        }
        let newRawValue = integerPart;
        let decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        let decimalValue = parseInt(decimalPart) || 0;
        let isNegative = rawValue.indexOf("-") > -1;
        // Ensure max is at least as large as min.
        max = (this.isNullOrUndefined(max) || this.isNullOrUndefined(min)) ? max : Math.max(max, min);
        // Restrict to the min and max values.
        let newValue = integerValue + (decimalValue / 100);
        newValue = isNegative ? -newValue : newValue;
        if (!this.isNullOrUndefined(max) && newValue > max) {
            return this.applyMask(true, max + '');
        }
        else if (!this.isNullOrUndefined(min) && newValue < min) {
            return this.applyMask(true, min + '');
        }
        if (precision > 0) {
            if (newRawValue == "0" && decimalPart.length < precision) {
                newRawValue += decimal + "0".repeat(precision - 1) + decimalPart;
            }
            else {
                newRawValue += decimal + decimalPart;
            }
        }
        let isZero = newValue == 0;
        let operator = (isNegative && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    }
    padOrTrimPrecision(rawValue) {
        let { decimal, precision } = this.options;
        let decimalIndex = rawValue.lastIndexOf(decimal);
        if (decimalIndex === -1) {
            decimalIndex = rawValue.length;
            rawValue += decimal;
        }
        let decimalPortion = rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX, "");
        const actualPrecision = decimalPortion.length;
        if (actualPrecision < precision) {
            for (let i = actualPrecision; i < precision; i++) {
                decimalPortion += '0';
            }
        }
        else if (actualPrecision > precision) {
            decimalPortion = decimalPortion.substring(0, decimalPortion.length + precision - actualPrecision);
        }
        return rawValue.substring(0, decimalIndex) + decimal + decimalPortion;
    }
    clearMask(rawValue) {
        if (this.isNullable() && rawValue === "")
            return null;
        let value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        this.PER_AR_NUMBER.forEach((val, key) => {
            const re = new RegExp(key, "g");
            value = value.replace(re, val);
        });
        return parseFloat(value);
    }
    changeToNegative() {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            // Apply the mask to ensure the min and max values are enforced.
            this.rawValue = this.applyMask(false, "-" + this.rawValue);
        }
    }
    changeToPositive() {
        // Apply the mask to ensure the min and max values are enforced.
        this.rawValue = this.applyMask(false, this.rawValue.replace("-", ""));
    }
    removeNumber(keyCode) {
        let { decimal, thousands, prefix, suffix, inputMode } = this.options;
        if (this.isNullable() && this.value == 0) {
            this.rawValue = null;
            return;
        }
        let selectionEnd = this.inputSelection.selectionEnd;
        let selectionStart = this.inputSelection.selectionStart;
        const suffixStart = this.rawValue.length - suffix.length;
        selectionEnd = Math.min(suffixStart, Math.max(selectionEnd, prefix.length));
        selectionStart = Math.min(suffixStart, Math.max(selectionStart, prefix.length));
        // Check if selection was entirely in the prefix or suffix. 
        if (selectionStart === selectionEnd &&
            this.inputSelection.selectionStart !== this.inputSelection.selectionEnd) {
            this.updateFieldValue(selectionStart);
            return;
        }
        let decimalIndex = this.rawValue.indexOf(decimal);
        if (decimalIndex === -1) {
            decimalIndex = this.rawValue.length;
        }
        let shiftSelection = 0;
        let insertChars = '';
        if (selectionEnd === selectionStart) {
            if (keyCode == 8) {
                if (selectionStart <= prefix.length) {
                    return;
                }
                selectionStart--;
                // If previous char isn't a number, go back one more.
                if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                    selectionStart--;
                }
                // In natural mode, jump backwards when in decimal portion of number.
                if (inputMode === CurrencyMaskInputMode.NATURAL && decimalIndex < selectionEnd) {
                    shiftSelection = -1;
                }
            }
            else if (keyCode == 46 || keyCode == 63272) {
                if (selectionStart === suffixStart) {
                    return;
                }
                selectionEnd++;
                // If next char isn't a number, go one more.
                if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
                    selectionStart++;
                    selectionEnd++;
                }
            }
        }
        // In natural mode, replace decimals with 0s.
        if (inputMode === CurrencyMaskInputMode.NATURAL && selectionStart > decimalIndex) {
            const replacedDecimalCount = selectionEnd - selectionStart;
            for (let i = 0; i < replacedDecimalCount; i++) {
                insertChars += '0';
            }
        }
        let selectionFromEnd = this.rawValue.length - selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + insertChars + this.rawValue.substring(selectionEnd);
        // Remove leading thousand separator from raw value.
        const startChar = this.rawValue.substr(prefix.length, 1);
        if (startChar === thousands) {
            this.rawValue = this.rawValue.substring(0, prefix.length) + this.rawValue.substring(prefix.length + 1);
            selectionFromEnd = Math.min(selectionFromEnd, this.rawValue.length - prefix.length);
        }
        this.updateFieldValue(this.rawValue.length - selectionFromEnd + shiftSelection, true);
    }
    updateFieldValue(selectionStart, disablePadAndTrim = false) {
        let newRawValue = this.applyMask(false, this.rawValue || "", disablePadAndTrim);
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        selectionStart = Math.max(this.options.prefix.length, Math.min(selectionStart, this.rawValue.length - this.options.suffix.length));
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    }
    updateOptions(options) {
        let value = this.value;
        this.options = options;
        this.value = value;
    }
    prefixLength() {
        return this.options.prefix.length;
    }
    suffixLength() {
        return this.options.suffix.length;
    }
    isNullable() {
        return this.options.nullable;
    }
    get canInputMoreNumbers() {
        return this.inputManager.canInputMoreNumbers;
    }
    get inputSelection() {
        return this.inputManager.inputSelection;
    }
    get rawValue() {
        return this.inputManager.rawValue;
    }
    set rawValue(value) {
        this.inputManager.rawValue = value;
    }
    get storedRawValue() {
        return this.inputManager.storedRawValue;
    }
    get value() {
        return this.clearMask(this.rawValue);
    }
    set value(value) {
        this.rawValue = this.applyMask(true, "" + value);
    }
    isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
}

class InputHandler {
    constructor(htmlInputElement, options) {
        this.inputService = new InputService(htmlInputElement, options);
    }
    handleCut(event) {
        setTimeout(() => {
            this.inputService.updateFieldValue();
            this.setValue(this.inputService.value);
            this.onModelChange(this.inputService.value);
        }, 0);
    }
    handleInput(event) {
        let selectionStart = this.inputService.inputSelection.selectionStart;
        let keyCode = this.inputService.rawValue.charCodeAt(selectionStart - 1);
        let rawValueLength = this.inputService.rawValue.length;
        let storedRawValueLength = this.inputService.storedRawValue.length;
        if (Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.inputService.updateFieldValue(selectionStart);
            this.onModelChange(this.inputService.value);
            return;
        }
        // Restore the old value.
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength < storedRawValueLength) {
            // Chrome Android seems to move the cursor in response to a backspace AFTER processing the
            // input event, so we need to wrap this in a timeout.
            this.timer(() => {
                // Move the cursor to just after the deleted value.
                this.inputService.updateFieldValue(selectionStart + 1);
                // Then backspace it.
                this.inputService.removeNumber(8);
                this.onModelChange(this.inputService.value);
            }, 0);
        }
        if (rawValueLength > storedRawValueLength) {
            // Move the cursor to just before the new value.
            this.inputService.updateFieldValue(selectionStart - 1);
            // Process the character like a keypress.
            this.handleKeypressImpl(keyCode);
        }
    }
    handleKeydown(event) {
        let keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            if (this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() &&
                this.inputService.inputSelection.selectionEnd >= this.inputService.rawValue.length - this.inputService.suffixLength()) {
                this.clearValue();
            }
            else {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    }
    clearValue() {
        this.setValue(this.inputService.isNullable() ? null : 0);
        this.onModelChange(this.inputService.value);
    }
    handleKeypress(event) {
        let keyCode = event.which || event.charCode || event.keyCode;
        event.preventDefault();
        if (keyCode === 97 && event.ctrlKey) {
            return;
        }
        this.handleKeypressImpl(keyCode);
    }
    handleKeypressImpl(keyCode) {
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
                    let selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                    if (selectionRangeLength == this.inputService.rawValue.length) {
                        this.setValue(null);
                    }
                    this.inputService.addNumber(keyCode);
                }
                break;
        }
        this.onModelChange(this.inputService.value);
    }
    handlePaste(event) {
        setTimeout(() => {
            this.inputService.updateFieldValue();
            this.setValue(this.inputService.value);
            this.onModelChange(this.inputService.value);
        }, 1);
    }
    updateOptions(options) {
        this.inputService.updateOptions(options);
    }
    getOnModelChange() {
        return this.onModelChange;
    }
    setOnModelChange(callbackFunction) {
        this.onModelChange = callbackFunction;
    }
    getOnModelTouched() {
        return this.onModelTouched;
    }
    setOnModelTouched(callbackFunction) {
        this.onModelTouched = callbackFunction;
    }
    setValue(value) {
        this.inputService.value = value;
    }
    /**
     * Passthrough to setTimeout that can be stubbed out in tests.
     */
    timer(callback, delayMillis) {
        setTimeout(callback, delayMillis);
    }
}

const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CurrencyMaskDirective),
    multi: true,
};
class CurrencyMaskDirective {
    constructor(currencyMaskConfig, elementRef, keyValueDiffers) {
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
    ngAfterViewInit() {
        this.elementRef.nativeElement.style.textAlign = this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
    }
    ngDoCheck() {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    }
    ngOnInit() {
        this.inputHandler = new InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    }
    handleBlur(event) {
        this.inputHandler.getOnModelTouched().apply(event);
    }
    handleCut(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleCut(event);
        }
    }
    handleInput(event) {
        if (this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleInput(event);
        }
    }
    handleKeydown(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeydown(event);
        }
    }
    handleKeypress(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handleKeypress(event);
        }
    }
    handlePaste(event) {
        if (!this.isChromeAndroid()) {
            !this.isReadOnly() && this.inputHandler.handlePaste(event);
        }
    }
    handleDrop(event) {
        if (!this.isChromeAndroid()) {
            event.preventDefault();
        }
    }
    isChromeAndroid() {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }
    isReadOnly() {
        return this.elementRef.nativeElement.hasAttribute('readonly');
    }
    registerOnChange(callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    }
    registerOnTouched(callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    }
    setDisabledState(value) {
        this.elementRef.nativeElement.disabled = value;
    }
    writeValue(value) {
        this.inputHandler.setValue(value);
    }
}
CurrencyMaskDirective.ɵfac = function CurrencyMaskDirective_Factory(t) { return new (t || CurrencyMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CURRENCY_MASK_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"])); };
CurrencyMaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CurrencyMaskDirective, selectors: [["", "currencyMask", ""]], hostBindings: function CurrencyMaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CurrencyMaskDirective_blur_HostBindingHandler($event) { return ctx.handleBlur($event); })("cut", function CurrencyMaskDirective_cut_HostBindingHandler($event) { return ctx.handleCut($event); })("input", function CurrencyMaskDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function CurrencyMaskDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); })("keypress", function CurrencyMaskDirective_keypress_HostBindingHandler($event) { return ctx.handleKeypress($event); })("paste", function CurrencyMaskDirective_paste_HostBindingHandler($event) { return ctx.handlePaste($event); })("drop", function CurrencyMaskDirective_drop_HostBindingHandler($event) { return ctx.handleDrop($event); });
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR])] });
CurrencyMaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CURRENCY_MASK_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
CurrencyMaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CURRENCY_MASK_CONFIG,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
CurrencyMaskDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    handleBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["blur", ["$event"],] }],
    handleCut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["cut", ["$event"],] }],
    handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["input", ["$event"],] }],
    handleKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["keydown", ["$event"],] }],
    handleKeypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["keypress", ["$event"],] }],
    handlePaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["paste", ["$event"],] }],
    handleDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["drop", ["$event"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyMaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[currencyMask]",
                providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CURRENCY_MASK_CONFIG]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["blur", ["$event"]]
        }], handleCut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["cut", ["$event"]]
        }], handleInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["input", ["$event"]]
        }], handleKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
        }], handleKeypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keypress", ["$event"]]
        }], handlePaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["paste", ["$event"]]
        }], handleDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["drop", ["$event"]]
        }] }); })();

class NgxCurrencyModule {
    static forRoot(config) {
        return {
            ngModule: NgxCurrencyModule,
            providers: [{
                    provide: CURRENCY_MASK_CONFIG,
                    useValue: config,
                }]
        };
    }
}
NgxCurrencyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxCurrencyModule });
NgxCurrencyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxCurrencyModule_Factory(t) { return new (t || NgxCurrencyModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxCurrencyModule, { declarations: function () { return [CurrencyMaskDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [CurrencyMaskDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCurrencyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                declarations: [CurrencyMaskDirective],
                exports: [CurrencyMaskDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-currency.js.map

/***/ }),

/***/ "./src/app/pages/products/attributes/attributes-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/products/attributes/attributes-form.component.ts ***!
  \************************************************************************/
/*! exports provided: AttributesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesFormComponent", function() { return AttributesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/products/index */ "./src/app/services/products/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["focusElement"];
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class AttributesFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, atSer) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.atSer = atSer;
        this.attributes = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            attribute_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
        });
    }
    get invalidName() {
        return this.customForm.get('attribute_name').invalid && this.customForm.get('attribute_name').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.PutURL = '/products/attributes/update/';
        ts.PostURL = '/products/attributes/create';
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.atSer.getData({ uid: id }).
            subscribe((resp) => {
            frm.setValue({
                attribute_name: resp[0].attribute_name,
            });
        });
    }
}
AttributesFormComponent.ɵfac = function AttributesFormComponent_Factory(t) { return new (t || AttributesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"])); };
AttributesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributesFormComponent, selectors: [["app-attributes-form"]], viewQuery: function AttributesFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 33, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "name", "attribute_name", "formControlName", "attribute_name", "required", "", "autofocus", ""], ["focusElement", ""], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"]], template: function AttributesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Nombre del atributo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesFormComponent_Template_button_click_22_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesFormComponent_Template_button_click_28_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesFormComponent_Template_button_click_33_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 17, "general.createEdit")), " ATRIBUTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 23, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 25, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attributes-form',
                templateUrl: './attributes-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/attributes/attributes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/attributes/attributes.component.ts ***!
  \*******************************************************************/
/*! exports provided: AttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesComponent", function() { return AttributesComponent; });
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
class AttributesComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Atributos';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        ts.crudApi = {
            create: '/products/attributes/create',
            read: '/products/attributes/read',
            update: '/products/attributes/update/',
            delete: '/products/attributes/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'attribute_name', type: 'string' },
        ];
        ts.sourceColumns =
            [
                { text: 'Nombre', datafield: 'attribute_name', align: 'center' },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/products/attributes/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/products/attributes/edit/${data.id}`);
    }
}
AttributesComponent.ɵfac = function AttributesComponent_Factory(t) { return new (t || AttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributesComponent, selectors: [["app-attributes"]], viewQuery: function AttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "search", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function AttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function AttributesComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AttributesComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function AttributesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function AttributesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attributes',
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

/***/ "./src/app/pages/products/brands/brands-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/products/brands/brands-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BrandsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsFormComponent", function() { return BrandsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/products/index */ "./src/app/services/products/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["focusElement"];
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class BrandsFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, brands) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.brands = brands;
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            brand_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
        });
    }
    get invalidName() {
        return this.customForm.get('brand_name').invalid && this.customForm.get('brand_name').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.title = 'Crear/Editar marca';
        ts.PutURL = '/products/brands/update/';
        ts.PostURL = '/products/brands/create';
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.brands.getData({ uid: id }).
            subscribe((resp) => {
            frm.setValue({
                brand_name: resp[0].brand_name,
            });
        });
    }
}
BrandsFormComponent.ɵfac = function BrandsFormComponent_Factory(t) { return new (t || BrandsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["BrandsService"])); };
BrandsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsFormComponent, selectors: [["app-brands-form"]], viewQuery: function BrandsFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 33, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "name", "brand_name", "formControlName", "brand_name", "required", "", "autofocus", ""], ["focusElement", ""], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"]], template: function BrandsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Nombre de la marca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsFormComponent_Template_button_click_22_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsFormComponent_Template_button_click_28_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsFormComponent_Template_button_click_33_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 17, "general.createEdit")), " MARCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 23, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 25, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brands-form',
                templateUrl: './brands-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["BrandsService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/brands/brands.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/brands/brands.component.ts ***!
  \***********************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
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
class BrandsComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Marcas';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        ts.crudApi = {
            create: '/products/brands/create',
            read: '/products/brands/read',
            update: '/products/brands/update/',
            delete: '/products/brands/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'brand_name', type: 'string' },
        ];
        ts.sourceColumns =
            [
                { text: 'Nombre de la marca', datafield: 'brand_name', align: 'center' },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        const lang = this.translate;
        super.createData();
        ts.goRoute('pages/products/brands/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/products/brands/edit/${data.id}`);
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], viewQuery: function BrandsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "search", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function BrandsComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BrandsComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function BrandsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function BrandsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brands',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/categories/categories-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/products/categories/categories-form.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoriesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFormComponent", function() { return CategoriesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/products/index */ "./src/app/services/products/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["focusElement"];
function CategoriesFormComponent_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cate_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cate_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cate_r2.category_name, " ");
} }
const _c1 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class CategoriesFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, catSer) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.catSer = catSer;
        this.categories = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            category_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            parent_id: [''],
        });
    }
    get invalidName() {
        return this.customForm.get('category_name').invalid && this.customForm.get('category_name').touched;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.title = 'Crear/Editar categoria';
        ts.PutURL = '/products/categories/update/';
        ts.PostURL = '/products/categories/create';
        ts.catSer.getAll({}).subscribe((resp) => {
            ts.categories = resp;
        });
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.catSer.getData({ uid: id }).
            subscribe((resp) => {
            frm.setValue({
                parent_id: resp[0].parent_id || 0,
                // image             : resp[0].imagen,
                category_name: resp[0].category_name,
            });
        });
    }
}
CategoriesFormComponent.ɵfac = function CategoriesFormComponent_Factory(t) { return new (t || CategoriesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"])); };
CategoriesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesFormComponent, selectors: [["app-categories-form"]], viewQuery: function CategoriesFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 35, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "name", "category_name", "formControlName", "category_name", "required", "", "autofocus", ""], ["focusElement", ""], ["fullWidth", "", "name", "parent_id", "formControlName", "parent_id", 3, "loading"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function CategoriesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Nombre de la categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Categoria padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Ninguna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CategoriesFormComponent_ng_option_26_Template, 2, 2, "ng-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_button_click_30_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_button_click_36_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_button_click_41_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, "general.createEdit")), " CATEGORIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 21, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.categories.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 23, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c1, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 25, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 27, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories-form',
                templateUrl: './categories-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/categories/categories.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/categories/categories.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
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
class CategoriesComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Categorias';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        ts.crudApi = {
            create: '/products/categories/create',
            read: '/products/categories/read',
            update: '/products/categories/update/',
            delete: '/products/categories/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'category_name', type: 'string' },
            { name: 'parent_name', type: 'string' },
            { name: 'image', type: 'string' },
        ];
        ts.sourceColumns =
            [
                { text: 'Nombre de la categoria', datafield: 'category_name', align: 'center' },
                { text: 'Categoria padre', datafield: 'parent_name', align: 'center' },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/products/categories/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/products/categories/edit/${data.id}`);
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], viewQuery: function CategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "search", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function CategoriesComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CategoriesComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function CategoriesComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function CategoriesComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/products/index.ts ***!
  \*****************************************/
/*! exports provided: ItemsComponent, ItemsFormComponent, AttributesComponent, AttributesFormComponent, CategoriesComponent, CategoriesFormComponent, BrandsComponent, BrandsFormComponent, TermsComponent, TermsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/items.component */ "./src/app/pages/products/items/items.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return _items_items_component__WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"]; });

/* harmony import */ var _items_items_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/items-form.component */ "./src/app/pages/products/items/items-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsFormComponent", function() { return _items_items_form_component__WEBPACK_IMPORTED_MODULE_1__["ItemsFormComponent"]; });

/* harmony import */ var _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes/attributes.component */ "./src/app/pages/products/attributes/attributes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributesComponent", function() { return _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_2__["AttributesComponent"]; });

/* harmony import */ var _attributes_attributes_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/attributes-form.component */ "./src/app/pages/products/attributes/attributes-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributesFormComponent", function() { return _attributes_attributes_form_component__WEBPACK_IMPORTED_MODULE_3__["AttributesFormComponent"]; });

/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/pages/products/categories/categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]; });

/* harmony import */ var _categories_categories_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories-form.component */ "./src/app/pages/products/categories/categories-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesFormComponent", function() { return _categories_categories_form_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesFormComponent"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/pages/products/brands/brands.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return _brands_brands_component__WEBPACK_IMPORTED_MODULE_6__["BrandsComponent"]; });

/* harmony import */ var _brands_brands_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands/brands-form.component */ "./src/app/pages/products/brands/brands-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandsFormComponent", function() { return _brands_brands_form_component__WEBPACK_IMPORTED_MODULE_7__["BrandsFormComponent"]; });

/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/pages/products/terms/terms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__["TermsComponent"]; });

/* harmony import */ var _terms_terms_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms/terms-form.component */ "./src/app/pages/products/terms/terms-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsFormComponent", function() { return _terms_terms_form_component__WEBPACK_IMPORTED_MODULE_9__["TermsFormComponent"]; });














/***/ }),

/***/ "./src/app/pages/products/items/items-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/products/items/items-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsFormComponent", function() { return ItemsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/products/index */ "./src/app/services/products/index.ts");
/* harmony import */ var _services_general_tax_rates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/general/tax-rates.service */ "./src/app/services/general/tax-rates.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js");















const _c0 = ["focusElement"];
const _c1 = ["subCatElement"];
const _c2 = ["uploadFile"];
const _c3 = ["imgUp"];
function ItemsFormComponent_ng_template_14_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", class_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", class_r13.product_class_name, " ");
} }
function ItemsFormComponent_ng_template_14_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taxb_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", taxb_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", taxb_r14.name_taxe, " - ", taxb_r14.rate_name, " ");
} }
function ItemsFormComponent_ng_template_14_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taxs_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", taxs_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", taxs_r15.name_taxe, " - ", taxs_r15.rate_name, " ");
} }
function ItemsFormComponent_ng_template_14_ng_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", brand_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", brand_r16.brand_name, " ");
} }
function ItemsFormComponent_ng_template_14_ng_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r17.category_name, " ");
} }
function ItemsFormComponent_ng_template_14_ng_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcateg_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subcateg_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subcateg_r18.category_name, " ");
} }
function ItemsFormComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nombre del item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Clase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ItemsFormComponent_ng_template_14_Template_ng_select_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.classChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ItemsFormComponent_ng_template_14_ng_option_18_Template, 2, 2, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Impuesto en compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ItemsFormComponent_ng_template_14_ng_option_28_Template, 2, 3, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Impuesto en ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ItemsFormComponent_ng_template_14_ng_option_37_Template, 2, 3, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Descripci\u00F3n para compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Descripci\u00F3n para ventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ItemsFormComponent_ng_template_14_ng_option_55_Template, 2, 2, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ng-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ItemsFormComponent_ng_template_14_Template_ng_select_change_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.categoryChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ItemsFormComponent_ng_template_14_ng_option_61_Template, 2, 2, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sub categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ng-select", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ItemsFormComponent_ng_template_14_ng_option_69_Template, 2, 2, "ng-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Costo unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Precio de venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.classof.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.classof);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.taxBill.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.taxBill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 21, "general.asterisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.taxSale.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.taxSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.brands.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.brands);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.categories.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.subCateg);
} }
function ItemsFormComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 38, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C\u00F3digo de barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 39, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "C\u00F3digo QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 40, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsFormComponent_ng_template_22_Template(rf, ctx) { }
function ItemsFormComponent_ng_template_26_Template(rf, ctx) { }
const _c4 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class ItemsFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, termsSer, itemsSer, classSer, brandSer, cateSer, taxSer, attrSer) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.termsSer = termsSer;
        this.itemsSer = itemsSer;
        this.classSer = classSer;
        this.brandSer = brandSer;
        this.cateSer = cateSer;
        this.taxSer = taxSer;
        this.attrSer = attrSer;
        this.attributes = [];
        this.classof = [];
        this.brands = [];
        this.categories = [];
        this.subCateg = [];
        this.taxSale = [];
        this.taxBill = [];
        this.active = 1;
        this.disabled = true;
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            sku: [''],
            qr_code: [''],
            product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            // notes                 : [''],
            shopping_description: [''],
            description_sales: [''],
            barcode: [''],
            // rate_name             : [''],
            // internal_code         : [''],
            // state                 : [''],
            sale_price: [''],
            purchase_cost: [''],
            // tax_sales             : [''],
            // tax_bill              : [''],
            // stock_min             : [''],
            // stock_max             : [''],
            tax_sales_id: [''],
            // percentage_gain       : [''],
            tax_bill_id: [''],
            // item_type_id          : [''],
            class_id: [''],
            brand_id: [''],
            category_id: [''],
            sub_category_id: [''],
        });
    }
    get invalidName() {
        return this.customForm.get('term_name').invalid && this.customForm.get('term_name').touched;
    }
    get invalidAttributeId() {
        return (this.customForm.get('attribute_id').value === 0) ? true : false;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.PutURL = '/products/items/update/';
        ts.PostURL = '/products/items/create';
        ts.attrSer.getAll({}).subscribe((resp) => {
            ts.attributes = resp;
        });
        ts.classSer.getData().subscribe((resp) => {
            ts.classof = resp;
        });
        ts.brandSer.getAll().subscribe((resp) => {
            ts.brands = resp;
        });
        ts.cateSer.getParents({}).subscribe((resp) => {
            ts.categories = resp;
        });
        // ts.cateSer.getChids({}).subscribe((resp) => {
        //   ts.subCateg = resp;
        // });
        ts.taxSer.getData({ isVat: 1 }).subscribe((resp) => {
            ts.taxBill = resp;
        });
        ts.taxSer.getData({ isVat: 1 }).subscribe((resp) => {
            ts.taxSale = resp;
        });
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.itemsSer.getData({ uid: id }).
            subscribe((resp) => {
            frm.setValue({
                sku: resp[0].sku,
                qr_code: resp[0].qr_code,
                product_name: resp[0].product_name,
                // notes                 : resp[0].notes,
                shopping_description: resp[0].shopping_description,
                description_sales: resp[0].description_sales,
                barcode: resp[0].barcode,
                // rate_name             : resp[0].rate_name,
                // internal_code         : resp[0].internal_code,
                // state                 : resp[0].state,
                sale_price: resp[0].sale_price,
                purchase_cost: resp[0].purchase_cost,
                // tax_sales             : resp[0].tax_sales,
                // tax_bill              : resp[0].tax_bill,
                // stock_min             : resp[0].stock_min,
                // stock_max             : resp[0].stock_max,
                tax_sales_id: resp[0].tax_sales_id,
                // percentage_gain       : resp[0].percentage_gain,
                tax_bill_id: resp[0].tax_bill_id,
                // item_type_id          : resp[0].item_type_id,
                class_id: resp[0].class_id,
                brand_id: resp[0].brand_id ? resp[0].brand_id : '',
                sub_category_id: resp[0].sub_category_id ? resp[0].sub_category_id : '',
                category_id: resp[0].category_id ? resp[0].category_id : '',
            });
            const id = resp[0].category_id ? resp[0].category_id : 0;
            ts.categoryChange(id);
        });
    }
    classChange(e) {
        this.disabled = (e === 2) ? true : false;
    }
    categoryChange(e) {
        const ts = this;
        ts.subCateg = [];
        ts.customForm.get('sub_category_id').setValue('');
        ts.cateSer.getChids({ uid: e }).subscribe((resp) => {
            ts.subCateg = resp;
        });
    }
}
ItemsFormComponent.ɵfac = function ItemsFormComponent_Factory(t) { return new (t || ItemsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["TermsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["ClassOfProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["BrandsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_tax_rates_service__WEBPACK_IMPORTED_MODULE_7__["TaxRatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"])); };
ItemsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsFormComponent, selectors: [["app-items-form"]], viewQuery: function ItemsFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subCatElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadFile = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 46, vars: 33, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "display-none"], ["ngbNavContent", ""], [3, "ngbNavItem", "disabled"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["autofocus", "", "nbInput", "", "fullWidth", "", "type", "text", "name", "product_name", "formControlName", "product_name", 1, "form-control"], ["focusElement", ""], ["name", "class_id", "formControlName", "class_id", 3, "loading", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "tax_bill_id", "formControlName", "tax_bill_id", 3, "loading"], ["name", "tax_sales_id", "formControlName", "tax_sales_id", 3, "loading"], ["nbInput", "", "fullWidth", "", "type", "text", "name", "shopping_description", "formControlName", "shopping_description", 1, "form-control"], ["nbInput", "", "fullWidth", "", "type", "text", "name", "description_sales", "formControlName", "description_sales", 1, "form-control"], ["name", "brand_id", "formControlName", "brand_id", 3, "loading"], ["name", "category_id", "formControlName", "category_id", 3, "loading", "change"], ["name", "sub_category_id", "formControlName", "sub_category_id"], ["subCatElement", ""], ["nbInput", "", "fullWidth", "", "currencyMask", "", "name", "purchase_cost", "formControlName", "purchase_cost", 1, "form-control"], ["nbInput", "", "fullWidth", "", "currencyMask", "", "name", "sale_price", "formControlName", "sale_price", 1, "form-control"], [3, "value"], ["autofocus", "", "nbInput", "", "fullWidth", "", "type", "text", "name", "sku", "formControlName", "sku", 1, "form-control"], ["autofocus", "", "nbInput", "", "fullWidth", "", "type", "text", "name", "barcode", "formControlName", "barcode", 1, "form-control"], ["autofocus", "", "nbInput", "", "fullWidth", "", "type", "text", "name", "qr_code", "formControlName", "qr_code", 1, "form-control"]], template: function ItemsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function ItemsFormComponent_Template_ul_activeIdChange_9_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemsFormComponent_ng_template_14_Template, 81, 23, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Adicionales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ItemsFormComponent_ng_template_18_Template, 20, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ItemsFormComponent_ng_template_22_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ItemsFormComponent_ng_template_26_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsFormComponent_Template_button_click_31_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsFormComponent_Template_button_click_37_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsFormComponent_Template_button_click_42_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, "general.createEdit")), " TERMINO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 4)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 21, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c4, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 23, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c4, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 25, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_currency__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items-form',
                templateUrl: './items-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["TermsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["ItemsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["ClassOfProductsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["BrandsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] }, { type: _services_general_tax_rates_service__WEBPACK_IMPORTED_MODULE_7__["TaxRatesService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }], subCatElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subCatElement']
        }], uploadFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadFile']
        }], imgUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgUp']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/items/items.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/products/items/items.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
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
class ItemsComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Productos o Servicios';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        ts.crudApi = {
            create: '/products/items/create',
            read: '/products/items/read',
            update: '/products/items/update/',
            delete: '/products/items/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'sku', type: 'string' },
            { name: 'qr_code', type: 'string' },
            { name: 'product_name', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'notes', type: 'string' },
            { name: 'description_sales', type: 'string' },
            { name: 'shopping_description', type: 'string' },
            { name: 'barcode', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'rate_name', type: 'string' },
            { name: 'internal_code', type: 'string' },
            { name: 'state', type: 'number' },
            { name: 'initial_date', type: 'date' },
            { name: 'sale_price', type: 'float' },
            { name: 'purchase_cost', type: 'float' },
            { name: 'tax_sales', type: 'number' },
            { name: 'tax_bill', type: 'number' },
            { name: 'stock_min', type: 'number' },
            { name: 'stock_max', type: 'number' },
            { name: 'tax_sales_id', type: 'number' },
            { name: 'percentage_gain', type: 'number' },
            { name: 'tax_bill_id', type: 'number' },
            { name: 'tax_rate_id', type: 'number' },
            { name: 'item_type_id', type: 'number' },
            { name: 'class_id', type: 'number' },
            { name: 'average_cost', type: 'float' },
            { name: 'recipe', type: 'bool' },
            { name: 'perishable', type: 'bool' },
            { name: 'id', type: 'number' }
        ];
        ts.sourceColumns =
            [
                { text: 'Código', datafield: 'internal_code', align: 'center', cellsalign: 'left', width: 120 },
                { text: 'Clase', align: 'center', datafield: 'product_class_name', minWidth: 50, width: 120 },
                { text: 'Nombre del item', align: 'center', datafield: 'product_name', minWidth: 250 },
                { text: 'Precio', align: 'center', datafield: 'sale_price', minWidth: 60, width: 150, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Impuesto', align: 'center', datafield: 'tax_sales', minWidth: 60, width: 100, cellsalign: 'right' },
                { text: 'Descripción', align: 'center', datafield: 'product_description', minWidth: 100, width: 250 },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/products/items/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/products/items/edit/${data.id}`);
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], viewQuery: function ItemsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "search", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function ItemsComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ItemsComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function ItemsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function ItemsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items',
                templateUrl: './../../global/global-grid.component.html',
            }]
    }], function () { return [{ type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { customGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customGrid', { static: false }]
        }], searchField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchField']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/pages/products/index.ts");






const routes = [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        children: [
            {
                path: 'items',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"],
            },
            {
                path: 'items/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ItemsFormComponent"]
            },
            {
                path: 'items/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["ItemsFormComponent"]
            },
            {
                path: 'categories',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
            },
            {
                path: 'categories/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CategoriesFormComponent"]
            },
            {
                path: 'categories/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["CategoriesFormComponent"]
            },
            {
                path: 'brands',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"]
            },
            {
                path: 'brands/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["BrandsFormComponent"]
            },
            {
                path: 'brands/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["BrandsFormComponent"]
            },
            {
                path: 'attributes',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["AttributesComponent"]
            },
            {
                path: 'attributes/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["AttributesFormComponent"]
            },
            {
                path: 'attributes/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["AttributesFormComponent"]
            },
            {
                path: 'terms',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"]
            },
            {
                path: 'terms/create',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["TermsFormComponent"]
            },
            {
                path: 'terms/edit/:id',
                component: _index__WEBPACK_IMPORTED_MODULE_3__["TermsFormComponent"]
            }
        ],
    }];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProductsComponent {
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 1, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: customCurrencyMaskConfig, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customCurrencyMaskConfig", function() { return customCurrencyMaskConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-ng/jqxmenu */ "./node_modules/jqwidgets-ng/__ivy_ngcc__/fesm2015/jqwidgets-ng-jqxmenu.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng_fallimg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-fallimg */ "./node_modules/ng-fallimg/__ivy_ngcc__/fesm2015/ng-fallimg.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index */ "./src/app/pages/products/index.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _brands_brands_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brands/brands-form.component */ "./src/app/pages/products/brands/brands-form.component.ts");
/* harmony import */ var _categories_categories_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/categories-form.component */ "./src/app/pages/products/categories/categories-form.component.ts");
/* harmony import */ var _attributes_attributes_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./attributes/attributes-form.component */ "./src/app/pages/products/attributes/attributes-form.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/pages/products/terms/terms.component.ts");
/* harmony import */ var _terms_terms_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terms/terms-form.component */ "./src/app/pages/products/terms/terms-form.component.ts");
/* harmony import */ var _items_items_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./items/items-form.component */ "./src/app/pages/products/items/items-form.component.ts");











/*
  * Translation
*/












const customCurrencyMaskConfig = {
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
class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_10__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProductsRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
            jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
            ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["ItemsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["BrandsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_13__["AttributesComponent"],
        _brands_brands_form_component__WEBPACK_IMPORTED_MODULE_15__["BrandsFormComponent"],
        _categories_categories_form_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesFormComponent"],
        _attributes_attributes_form_component__WEBPACK_IMPORTED_MODULE_17__["AttributesFormComponent"],
        _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"],
        _terms_terms_form_component__WEBPACK_IMPORTED_MODULE_19__["TermsFormComponent"],
        _items_items_form_component__WEBPACK_IMPORTED_MODULE_20__["ItemsFormComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], ngx_currency__WEBPACK_IMPORTED_MODULE_10__["NgxCurrencyModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProductsRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
        ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_10__["NgxCurrencyModule"].forRoot(customCurrencyMaskConfig),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    jqwidgets_ng_jqxmenu__WEBPACK_IMPORTED_MODULE_6__["jqxMenuModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProductsRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                    ng_fallimg__WEBPACK_IMPORTED_MODULE_8__["NgFallimgModule"]
                ],
                declarations: [
                    _products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["ItemsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["BrandsComponent"],
                    _index__WEBPACK_IMPORTED_MODULE_13__["AttributesComponent"],
                    _brands_brands_form_component__WEBPACK_IMPORTED_MODULE_15__["BrandsFormComponent"],
                    _categories_categories_form_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesFormComponent"],
                    _attributes_attributes_form_component__WEBPACK_IMPORTED_MODULE_17__["AttributesFormComponent"],
                    _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"],
                    _terms_terms_form_component__WEBPACK_IMPORTED_MODULE_19__["TermsFormComponent"],
                    _items_items_form_component__WEBPACK_IMPORTED_MODULE_20__["ItemsFormComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/terms/terms-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/products/terms/terms-form.component.ts ***!
  \**************************************************************/
/*! exports provided: TermsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsFormComponent", function() { return TermsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/components/forms/form.component */ "./src/app/core/components/forms/form.component.ts");
/* harmony import */ var src_app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_products_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/products/index */ "./src/app/services/products/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_fallimg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-fallimg */ "./node_modules/ng-fallimg/__ivy_ngcc__/fesm2015/ng-fallimg.js");













const _c0 = ["focusElement"];
const _c1 = ["uploadFile"];
const _c2 = ["imgUp"];
function TermsFormComponent_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", attr_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r3.attribute_name, " ");
} }
const _c3 = function (a0, a1) { return { "fa-save": a0, "fa-spinner fa-spin": a1 }; };
class TermsFormComponent extends src_app_core_components_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(fb, msg, api, router, translate, aRouter, termsSer, attrSer) {
        super(fb, msg, api, router, translate, aRouter);
        this.fb = fb;
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.termsSer = termsSer;
        this.attrSer = attrSer;
        // @ViewChild('imgData') imgData: ElementRef;
        this.attributes = [];
        this.translate.setDefaultLang(this.activeLang);
        this.customForm = this.fb.group({
            attribute_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            term_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]],
            term_description: [''],
            term_color: [''],
            term_img: [''],
        });
    }
    get invalidName() {
        return this.customForm.get('term_name').invalid && this.customForm.get('term_name').touched;
    }
    get invalidAttributeId() {
        return (this.customForm.get('attribute_id').value === 0) ? true : false;
    }
    ngOnInit() {
        super.ngOnInit();
        const ts = this;
        ts.PutURL = '/products/terms/update/';
        ts.PostURL = '/products/terms/create';
        ts.attrSer.getAll({}).subscribe((resp) => {
            ts.attributes = resp;
        });
    }
    loadData(id = 0) {
        const ts = this;
        const frm = ts.customForm;
        ts.editing = true;
        ts.termsSer.getData({ uid: id }).
            subscribe((resp) => {
            frm.setValue({
                attribute_id: resp[0].attribute_id,
                term_name: resp[0].term_name,
                term_description: resp[0].term_description,
                term_color: resp[0].term_color,
                term_img: resp[0].term_img,
            });
            ts.imgData = resp[0].term_img ? resp[0].term_img : '';
        });
    }
}
TermsFormComponent.ɵfac = function TermsFormComponent_Factory(t) { return new (t || TermsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["TermsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"])); };
TermsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsFormComponent, selectors: [["app-terms-form"]], viewQuery: function TermsFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadFile = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgUp = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 43, consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [3, "formGroup"], [1, "col-md-6"], [1, "form-group"], [1, "asterisk"], ["type", "text", "nbInput", "", "fullWidth", "", "name", "term_name", "formControlName", "term_name", "required", "", "autofocus", ""], ["focusElement", ""], ["fullWidth", "", "name", "attribute_id", "formControlName", "attribute_id", "required", "", 3, "loading"], [3, "value", 4, "ngFor", "ngForOf"], ["div", "", 1, "col-md-6"], ["type", "color", "fullWidth", "", "name", "term_color", "formControlName", "term_color", 1, "form-control"], ["nbinput", "", "fullWidth", "", "name", "term_description", "formControlName", "term_description", 1, "input-full-width", "size-medium", "status-basic", "shape-rectangle", "nb-transition"], ["for", "file"], ["type", "file", "id", "file", 1, "form-control-file", 3, "change"], ["uploadFile", ""], ["width", "128px", "fallimg", "", 1, "img-thumbnail", 3, "src"], [1, "row", "flex"], [1, "space-right", "float-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], [1, "fas", "fa-undo", "fas-fa-22", "space-right"], [1, "space-right", "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], [1, "fas-fa-22", "space-right", "fas", 3, "ngClass"], [1, "padding-top-bottom"], ["nbSuffix", "", "nbButton", "", "status", "primary", 1, "radius-button", 3, "disabled", "click"], [3, "value"]], template: function TermsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Nombre del termino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Atributo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TermsFormComponent_ng_option_27_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Seleccionar imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermsFormComponent_Template_input_change_43_listener($event) { return ctx.uploadImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsFormComponent_Template_button_click_50_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsFormComponent_Template_button_click_56_listener() { return ctx.saveAndCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsFormComponent_Template_button_click_61_listener() { return ctx.saveAndClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 25, "general.createEdit")), " TERMINO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 27, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidName)("is-invalid", ctx.invalidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 29, "general.asterisk"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("status-danger", ctx.invalidAttributeId)("is-invalid", ctx.invalidAttributeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.attributes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 31, "buttons.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c3, !ctx.saveACreate, ctx.saveACreate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 33, "buttons.saveAndCreate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c3, !ctx.saveAClose, ctx.saveAClose));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 35, "buttons.saveAndClose"), " ");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_fallimg__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkL2Zvcm0tbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb3JtLWxheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgPiAqIHtcclxuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-form',
                templateUrl: './terms-form.component.html',
                styleUrls: ['./../../shared/form-layouts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }, { type: src_app_utils__WEBPACK_IMPORTED_MODULE_3__["ApiServerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["TermsService"] }, { type: _services_products_index__WEBPACK_IMPORTED_MODULE_6__["AttributesService"] }]; }, { focusElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusElement']
        }], uploadFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadFile']
        }], imgUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgUp']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/products/terms/terms.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/products/terms/terms.component.ts ***!
  \*********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
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
class TermsComponent extends src_app_core_data_custom_grid_jqx_custom_grid_component__WEBPACK_IMPORTED_MODULE_1__["JqxCustomGridComponent"] {
    constructor(msg, api, router, translate, aRouter) {
        super(msg, api, router, translate, aRouter);
        this.msg = msg;
        this.api = api;
        this.router = router;
        this.translate = translate;
        this.aRouter = aRouter;
        this.title = 'Terminos de atributos';
    }
    ngOnInit() {
        this.changeLanguage(this.activeLang);
    }
    ngAfterViewInit() {
        const ts = this;
        ts.crudApi = {
            create: '/products/terms/create',
            read: '/products/terms/read',
            update: '/products/terms/update/',
            delete: '/products/terms/delete/'
        };
        ts.showActions = true;
        ts.showRowNumber = true;
        ts.pagesize = 10;
        ts.datafields = [
            { name: 'id', type: 'number' },
            { name: 'attribute_id', type: 'number' },
            { name: 'term_name', type: 'string' },
            { name: 'term_description', type: 'string' },
            { name: 'attribute_name', type: 'string' },
            { name: 'term_color', type: 'string' },
            { name: 'term_img', type: 'string' },
        ];
        ts.sourceColumns =
            [
                { text: 'Atributo', datafield: 'attribute_name', align: 'center' },
                { text: 'Nombre del termino', datafield: 'term_name', align: 'center' },
                { text: 'Descripción', datafield: 'term_description', align: 'center' },
            ];
        this.prepareGrid();
    }
    createData() {
        const ts = this;
        super.createData();
        ts.goRoute('pages/products/terms/create');
    }
    editData(data) {
        super.editData(data);
        this.goRoute(`pages/products/terms/edit/${data.id}`);
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], viewQuery: function TermsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 41, consts: [[1, "example-items-col"], [1, "menuExport"], [1, "space-right"], ["nbSuffix", "", "nbButton", "", "status", "danger", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "sync", "pack", "fas", 1, "fas-fa-22"], [1, "myMenu", "space-right"], [1, "clearColor", 3, "height", "onItemclick"], ["myMenu", ""], ["id", "Exports"], [1, "fas", "fa-cog", "fas-fa-22", "fas-fa-red"], ["href", "javascript:void(0)"], [2, "width", "200px"], [1, "fas", "fa-file-excel", "fas-fa-xls"], [1, "fas", "fa-file-csv", "fas-fa-xls"], ["type", "separator"], [1, "fas", "fa-file-pdf", "fas-fa-pdf"], [1, "fas", "fa-file-code", "fas-fa-code"], [1, "fas", "fa-print", "fas-fa-print"], [1, "margin-left", "space-right"], ["nbSuffix", "", "nbButton", "", "status", "success", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "plus", "pack", "fas", 1, "fas-fa-22"], ["nbSuffix", "", "nbButton", "", "status", "info", 1, "radius-button", 3, "disabled", "click"], ["nbPrefix", "", "icon", "upload", "pack", "fas", 1, "fas-fa-22"], ["type", "text", "nbInput", "", "fullWidth", "", "fieldSize", "medium", "autofocus", "", 3, "placeholder", "keyup"], ["searchField", ""], ["nbSuffix", "", "nbButton", "", "ghost", "", "status", "danger", 3, "disabled", "click"], ["nbPrefix", "", "icon", "search", "pack", "fas"], ["width", "100%", 3, "disabled", "auto-create", "onCellselect", "onBindingcomplete"], ["customGrid", ""]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_7_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jqxMenu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemclick", function TermsComponent_Template_jqxMenu_onItemclick_10_listener($event) { return ctx.itemclick($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_61_listener() { return ctx.createData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_66_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TermsComponent_Template_input_keyup_71_listener($event) { return ctx.inputKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_73_listener() { return ctx.searchQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nb-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "jqxGrid", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCellselect", function TermsComponent_Template_jqxGrid_onCellselect_75_listener($event) { return ctx.cellClick($event); })("onBindingcomplete", function TermsComponent_Template_jqxGrid_onBindingcomplete_75_listener($event) { return ctx.Bindingcomplete($event); });
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
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

/***/ "./src/app/services/products/attributes.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/products/attributes.service.ts ***!
  \*********************************************************/
/*! exports provided: AttributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesService", function() { return AttributesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class AttributesService {
    constructor(api) {
        this.api = api;
    }
    getAll(params) {
        const ts = this;
        return ts.api.get(`/products/attributes/all`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/products/attributes/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
AttributesService.ɵfac = function AttributesService_Factory(t) { return new (t || AttributesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
AttributesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttributesService, factory: AttributesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/brands.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/products/brands.service.ts ***!
  \*****************************************************/
/*! exports provided: BrandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return BrandsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class BrandsService {
    constructor(api) {
        this.api = api;
    }
    getAll() {
        const ts = this;
        return ts.api.get(`/products/brands/read/all`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/products/brands/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
BrandsService.ɵfac = function BrandsService_Factory(t) { return new (t || BrandsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
BrandsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrandsService, factory: BrandsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/categories.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/products/categories.service.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class CategoriesService {
    constructor(api) {
        this.api = api;
    }
    getAll(params) {
        const ts = this;
        return ts.api.get(`/products/categories/read/all`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getChids(params) {
        const ts = this;
        return ts.api.get(`/products/categories/childs`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getParents(params) {
        const ts = this;
        return ts.api.get(`/products/categories/parents`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/products/categories/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/class-of-products.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/products/class-of-products.service.ts ***!
  \****************************************************************/
/*! exports provided: ClassOfProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOfProductsService", function() { return ClassOfProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class ClassOfProductsService {
    constructor(api) {
        this.api = api;
    }
    getData() {
        const ts = this;
        return ts.api.get(`/products/class`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
ClassOfProductsService.ɵfac = function ClassOfProductsService_Factory(t) { return new (t || ClassOfProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
ClassOfProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassOfProductsService, factory: ClassOfProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassOfProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/index.ts":
/*!********************************************!*\
  !*** ./src/app/services/products/index.ts ***!
  \********************************************/
/*! exports provided: BrandsService, CategoriesService, AttributesService, TermsService, ItemsService, ClassOfProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brands_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands.service */ "./src/app/services/products/brands.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return _brands_service__WEBPACK_IMPORTED_MODULE_0__["BrandsService"]; });

/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "./src/app/services/products/categories.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return _categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]; });

/* harmony import */ var _attributes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes.service */ "./src/app/services/products/attributes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributesService", function() { return _attributes_service__WEBPACK_IMPORTED_MODULE_2__["AttributesService"]; });

/* harmony import */ var _terms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.service */ "./src/app/services/products/terms.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsService", function() { return _terms_service__WEBPACK_IMPORTED_MODULE_3__["TermsService"]; });

/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items.service */ "./src/app/services/products/items.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return _items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]; });

/* harmony import */ var _class_of_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class-of-products.service */ "./src/app/services/products/class-of-products.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassOfProductsService", function() { return _class_of_products_service__WEBPACK_IMPORTED_MODULE_5__["ClassOfProductsService"]; });









/***/ }),

/***/ "./src/app/services/products/items.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/products/items.service.ts ***!
  \****************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class ItemsService {
    constructor(api) {
        this.api = api;
    }
    getAll(params) {
        const ts = this;
        return ts.api.get(`/products/items/all`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/products/items/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products/terms.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/products/terms.service.ts ***!
  \****************************************************/
/*! exports provided: TermsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsService", function() { return TermsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api-server.service */ "./src/app/utils/api-server.service.ts");




class TermsService {
    constructor(api) {
        this.api = api;
    }
    getAll(params) {
        const ts = this;
        return ts.api.get(`/products/terms/all`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
    getData(params) {
        const ts = this;
        return ts.api.get(`/products/terms/read`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => {
            return resp.records;
        }));
    }
}
TermsService.ɵfac = function TermsService_Factory(t) { return new (t || TermsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"])); };
TermsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermsService, factory: TermsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_api_server_service__WEBPACK_IMPORTED_MODULE_2__["ApiServerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map