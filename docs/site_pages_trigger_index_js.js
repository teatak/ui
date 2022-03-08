/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_trigger_index_js"],{

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n        inline = _ref.inline,\n        className = _ref.className,\n        children = _ref.children,\n        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__.default,\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/trigger/index.js":
/*!*************************************!*\
  !*** ./site/pages/trigger/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_trigger_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/trigger/style */ \"./src/trigger/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ \"./site/pages/trigger/index.css\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      visible = _useState2[0],\n      setVisible = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, \"Trigger\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"visible onVisibleChange\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    onClick: function onClick(e) {\n      e.stopPropagation();\n      setVisible(!visible);\n    }\n  }, \"click to trigger\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Trigger, {\n    visible: visible,\n    position: \"topLeft\",\n    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, \"content\"),\n    onVisibleChange: function onVisibleChange(v) {\n      setVisible(v);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    rounded: true,\n    type: \"outlined\"\n  }, \"click\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: \"\\n```javascript\\nexport default () => {\\n    const [visible, setVisible] = useState(false)\\n    return <div className=\\\"page\\\">\\n        <h1>Trigger</h1>\\n        <div className=\\\"examples\\\">\\n            <Space>\\n                <Button type=\\\"outlined\\\" onClick={(e) => {\\n                    e.stopPropagation()\\n                    setVisible(!visible)\\n                }}>click to trigger</Button>\\n                <Trigger\\n                    visible={visible}\\n                    content={<div>content</div>}\\n                    onVisibleChange={(v) => {\\n                        setVisible(v)\\n                    }}\\n                >\\n                    <Button type=\\\"outlined\\\">click</Button>\\n                </Trigger>\\n            </Space>\\n        </div>\\n    </div>\\n}\\n```\\n\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"tooltip\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Trigger, {\n    tooltip: true,\n    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, \"tooltip content on hover\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\"\n  }, \"hover\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: \"\\n## API\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n| action           | PropTypes.oneOf(['click', 'hover']) | string | click |\\n| position         | PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']) | string | bottom |\\n| autoFit          | auto fit | boolean | true |\\n| arrow            | show arrow | boolean | true |\\n| tooltip          | tooltip style | boolean | false |\\n| visible          | visible | boolean | false |\\n| defaultVisible   | defaultVisible | boolean | false |\\n| content          | pop content | element | - |\\n| transitionClass  | transition class suffix | string | fade |\\n| onVisibleChange  | call back | (visible: boolean) => void | - |\\n\\n\"\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/trigger/index.js?");

/***/ }),

/***/ "./src/button/style/index.js":
/*!***********************************!*\
  !*** ./src/button/style/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/button/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./src/trigger/style/index.js":
/*!************************************!*\
  !*** ./src/trigger/style/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/trigger/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/trigger/style/index.js?");

/***/ }),

/***/ "./site/pages/trigger/index.css":
/*!**************************************!*\
  !*** ./site/pages/trigger/index.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/trigger/index.css?");

/***/ }),

/***/ "./src/button/style/index.less":
/*!*************************************!*\
  !*** ./src/button/style/index.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.less?");

/***/ }),

/***/ "./src/space/style/index.less":
/*!************************************!*\
  !*** ./src/space/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.less?");

/***/ }),

/***/ "./src/trigger/style/index.less":
/*!**************************************!*\
  !*** ./src/trigger/style/index.less ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/trigger/style/index.less?");

/***/ })

}]);