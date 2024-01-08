"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_demo_index_js"],{

/***/ "./site/pages/demo/index.js":
/*!**********************************!*\
  !*** ./site/pages/demo/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_check_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/check/style */ \"./src/check/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _src_row_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/row/style */ \"./src/row/style/index.js\");\n/* harmony import */ var _src_col_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/col/style */ \"./src/col/style/index.js\");\n/* harmony import */ var _src_notification_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/notification/style */ \"./src/notification/style/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar CheckGroup = _src__WEBPACK_IMPORTED_MODULE_2__.Check.Group;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    checked = _useState2[0],\n    setChecked = _useState2[1];\n  var _useNotification = (0,_src__WEBPACK_IMPORTED_MODULE_2__.useNotification)(),\n    _useNotification2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useNotification, 1),\n    notification = _useNotification2[0];\n  var options = [{\n    label: 'Option 1',\n    value: '1'\n  }, {\n    label: 'Option 2',\n    value: '2',\n    disabled: true\n  }, {\n    label: 'Option 3',\n    value: '3'\n  }, {\n    label: 'Option 4',\n    value: '4'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Demo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Row, {\n    gap: [8, 16]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: \"24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick() {\n      notification.info({\n        position: 'top',\n        content: 'This is an info message!',\n        closeable: true\n      });\n    },\n    type: \"filled\"\n  }, \"top\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"warning\",\n    onClick: function onClick() {\n      notification.warning({\n        position: 'bottom',\n        content: 'This is an info message!'\n      });\n    },\n    type: \"filled\"\n  }, \"bottom\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"success\",\n    onClick: function onClick() {\n      notification.success({\n        position: 'topLeft',\n        content: 'This is an info message!'\n      });\n    },\n    type: \"filled\"\n  }, \"top left\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"error\",\n    onClick: function onClick() {\n      notification.error({\n        position: 'topRight',\n        content: 'This is an info message!'\n      });\n    },\n    type: \"filled\"\n  }, \"top right\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick() {\n      notification.info({\n        closeable: true,\n        duration: 0,\n        showIcon: false,\n        position: 'bottomLeft',\n        content: 'This is an info message!'\n      });\n    },\n    type: \"filled\"\n  }, \"bottom left\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick() {\n      notification.info({\n        position: 'bottomRight',\n        content: 'This is an info message!',\n        actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          size: \"tiny\",\n          onClick: function onClick(e) {\n            console.log(\"clicked\");\n          }\n        }, \"click me\"))\n      });\n    },\n    type: \"filled\"\n  }, \"bottom right\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: \"24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    onClick: function onClick(e) {\n      setChecked(!checked);\n    },\n    type: \"outlined\"\n  }, \"\\u70B9\\u51FB\\u9009\\u62E9\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: \"24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Check, {\n    indeterminate: true\n  }, \"\\u9009\\u62E9\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: \"24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CheckGroup\n  // direction=\"vertical\"\n  , {\n    options: options,\n    onChange: function onChange(newValue) {\n      console.log(newValue);\n    },\n    defaultValue: [\"1\"]\n  })))));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/demo/index.js?");

/***/ }),

/***/ "./src/check/style/index.js":
/*!**********************************!*\
  !*** ./src/check/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/check/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/check/style/index.js?");

/***/ }),

/***/ "./src/col/style/index.js":
/*!********************************!*\
  !*** ./src/col/style/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/style/index.less */ \"./src/grid/style/index.less\");\n\n\n//# sourceURL=webpack://@teatak/ui/./src/col/style/index.js?");

/***/ }),

/***/ "./src/notification/style/index.js":
/*!*****************************************!*\
  !*** ./src/notification/style/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/notification/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/notification/style/index.js?");

/***/ }),

/***/ "./src/row/style/index.js":
/*!********************************!*\
  !*** ./src/row/style/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/style/index.less */ \"./src/grid/style/index.less\");\n\n\n//# sourceURL=webpack://@teatak/ui/./src/row/style/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./src/check/style/index.less":
/*!************************************!*\
  !*** ./src/check/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/check/style/index.less?");

/***/ }),

/***/ "./src/grid/style/index.less":
/*!***********************************!*\
  !*** ./src/grid/style/index.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/grid/style/index.less?");

/***/ }),

/***/ "./src/notification/style/index.less":
/*!*******************************************!*\
  !*** ./src/notification/style/index.less ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/notification/style/index.less?");

/***/ }),

/***/ "./src/space/style/index.less":
/*!************************************!*\
  !*** ./src/space/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.less?");

/***/ })

}]);