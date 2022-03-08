/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_form_index_js"],{

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n        inline = _ref.inline,\n        className = _ref.className,\n        children = _ref.children,\n        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__.default,\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/form/index.js":
/*!**********************************!*\
  !*** ./site/pages/form/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/input/style */ \"./src/input/style/index.js\");\n/* harmony import */ var _src_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/select/style */ \"./src/select/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _src_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/form/style */ \"./src/form/style/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ \"./site/pages/form/index.css\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var onSubmit = function onSubmit(e, errors, values) {\n    console.log(errors, values);\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\"),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),\n      layout = _useState4[0],\n      setLayout = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"medium\"),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),\n      size = _useState6[0],\n      setSize = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),\n      tip = _useState8[0],\n      setTip = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),\n      hasError = _useState10[0],\n      setHasError = _useState10[1];\n\n  function randomString(length) {\n    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\n    var result = '';\n\n    for (var i = length; i > 0; --i) {\n      result += str[Math.floor(Math.random() * str.length)];\n    }\n\n    return result;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, \"Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form, {\n    layout: layout,\n    size: size,\n    onSubmit: onSubmit,\n    requiredSymbol: false,\n    style: {\n      maxWidth: 600\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    label: \"Layout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    onClick: function onClick() {\n      setLayout(\"horizontal\");\n    },\n    disabled: layout === \"horizontal\"\n  }, \"horizontal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    onClick: function onClick() {\n      setLayout(\"vertical\");\n    },\n    disabled: layout === \"vertical\"\n  }, \"vertical\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    onClick: function onClick() {\n      setLayout(\"inline\");\n    },\n    disabled: layout === \"inline\"\n  }, \"inline\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    label: \"Name\",\n    field: \"name\",\n    rules: [{\n      required: true,\n      message: '请输入用户名!'\n    }, {\n      type: 'string',\n      message: '请输入5-20位有效的用户名!',\n      pattern: /^.{5,20}$/\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    defaultValue: value,\n    style: {\n      width: \"100%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    label: \"Password\",\n    field: \"password\",\n    rules: [{\n      required: true,\n      message: '请输入密码!'\n    }, {\n      type: 'string',\n      message: '请输入密码5-20位!',\n      pattern: /^.{5,20}$/\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    type: \"password\",\n    style: {\n      width: \"100%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    label: \"City\",\n    htmlFor: \"city\",\n    tip: tip,\n    hasError: hasError\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    noStyle: true,\n    field: \"city\",\n    rules: [{\n      required: true,\n      message: '请输入城市!'\n    }],\n    showErrorTip: function showErrorTip(hasError, tip) {\n      setHasError(hasError);\n      setTip(tip);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Select, {\n    defaultValue: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {\n    value: \"beijing\"\n  }, \"Beijing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {\n    value: \"shanghai\"\n  }, \"Shanghai\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n    noStyle: true,\n    field: \"cityName\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Input, {\n    defaultValue: value,\n    style: {\n      width: \"100%\"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"primary\",\n    type: \"filled\",\n    htmlType: \"submit\"\n  }, \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"primary\",\n    type: \"outlined\",\n    onClick: function onClick() {\n      setValue(randomString(5));\n    }\n  }, \"Fill\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_8__.default, {\n    children: \"\\n> color: primary,danger\\n```javascript\\nimport React from \\\"react\\\";\\nimport {Button} from \\\"@teatak/ui\\\";\\nimport {\\n    Delete,\\n    PhotoCamera,\\n    AddCircle\\n} from '@material-ui/icons';\\n\\nexport default () => <div className=\\\"examples\\\">\\n    <div>default:</div>\\n</div>    \\n```\\n        \"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_8__.default, {\n    children: \"\\n## API\\n\\n### Form\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n| layout    | PropTypes.oneOf(['horizontal', 'vertical', 'inline']) | string | horizontal |\\n| size      | PropTypes.oneOf(['large', 'medium', 'small', 'tiny']) | string | medium |\\n| labelAlign | PropTypes.oneOf(['left', 'right', 'center']) | string | right |\\n| requiredSymbol | show * | boolean | true |\\n| labelCol   | label col config   | object | { span: 5 } |\\n| wrapperCol | wrapper col config | object | { span: 19 } |\\n\\n### Form.Item\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n| label | label name | string | - |\\n| field | field | string | - |\\n| showErrorTip | showErrorTip={(hasError, tip)} | (event) => void | - |\\n| htmlFor | html for | string | - |\\n| noStyle | no style | boolean | false |\\n| onChange | showErrorTip={(e, newValue)} | (event) => void | - |\\n\\n        \"\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/form/index.js?");

/***/ }),

/***/ "./src/button/style/index.js":
/*!***********************************!*\
  !*** ./src/button/style/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/button/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.js?");

/***/ }),

/***/ "./src/form/style/index.js":
/*!*********************************!*\
  !*** ./src/form/style/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/form/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/form/style/index.js?");

/***/ }),

/***/ "./src/input/style/index.js":
/*!**********************************!*\
  !*** ./src/input/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/input/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/input/style/index.js?");

/***/ }),

/***/ "./src/select/style/index.js":
/*!***********************************!*\
  !*** ./src/select/style/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/select/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/select/style/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./site/pages/form/index.css":
/*!***********************************!*\
  !*** ./site/pages/form/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/form/index.css?");

/***/ }),

/***/ "./src/button/style/index.less":
/*!*************************************!*\
  !*** ./src/button/style/index.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.less?");

/***/ }),

/***/ "./src/form/style/index.less":
/*!***********************************!*\
  !*** ./src/form/style/index.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/form/style/index.less?");

/***/ }),

/***/ "./src/input/style/index.less":
/*!************************************!*\
  !*** ./src/input/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/input/style/index.less?");

/***/ }),

/***/ "./src/select/style/index.less":
/*!*************************************!*\
  !*** ./src/select/style/index.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/select/style/index.less?");

/***/ }),

/***/ "./src/space/style/index.less":
/*!************************************!*\
  !*** ./src/space/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.less?");

/***/ })

}]);