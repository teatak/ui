const opt = Object.prototype.toString;

export function isArray(obj) {
    return opt.call(obj) === '[object Array]';
}

export function isObject(obj) {
    return opt.call(obj) === '[object Object]';
}

export function isString(obj) {
    return opt.call(obj) === '[object String]';
}

export function isNumber(obj) {
    return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isRegExp(obj) {
    return opt.call(obj) === '[object RegExp]';
}

export function isFile(obj) {
    return opt.call(obj) === '[object File]';
}

export function isBlob(obj) {
    return opt.call(obj) === '[object Blob]';
}

function isHex(color) {
    return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color) {
    return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color) {
    return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}
export function isColor(color) {
    return isHex(color) || isRgb(color) || isRgba(color);
}
export function isUndefined(obj) {
    return obj === undefined;
}

export function isFunction(obj) {
    return typeof obj === 'function';
}

export function isEmptyObject(obj) {
    return isObject(obj) && Object.keys(obj).length === 0;
}

export function isExist(obj) {
    return obj || obj === 0;
}

export function isWindow(el) {
    return el === window;
}