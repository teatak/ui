/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_alert_index_js"],{

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n        inline = _ref.inline,\n        className = _ref.className,\n        children = _ref.children,\n        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__.default,\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/alert/index.js":
/*!***********************************!*\
  !*** ./site/pages/alert/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_alert_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/alert/style */ \"./src/alert/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _src_row_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/row/style */ \"./src/row/style/index.js\");\n/* harmony import */ var _src_col_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/col/style */ \"./src/col/style/index.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Alert\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Standard\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Row, {\n    gap: [8, 8]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert.Title, null, \"Title\"), \"Content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    color: \"error\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    color: \"warning\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    color: \"success\"\n  }, \"content\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: \"\\n```javascript\\nexport default () => {\\n    return <Row gap={[8, 8]}>\\n        <Col span={12}>\\n            <Alert closeable >\\n                <Alert.Title>Title</Alert.Title>\\n                Content\\n            </Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable color=\\\"error\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable color=\\\"warning\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable color=\\\"success\\\">content</Alert>\\n        </Col>\\n    </Row>  \\n}  \\n```\\n\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Filled\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Row, {\n    gap: [8, 8]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"filled\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert.Title, null, \"Title\"), \"Content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"filled\",\n    color: \"error\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"filled\",\n    color: \"warning\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"filled\",\n    color: \"success\"\n  }, \"content\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: \"\\n```javascript\\nexport default () => {\\n    return <Row gap={[8, 8]}>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"filled\\\" >\\n                <Alert.Title>Title</Alert.Title>\\n                Content\\n            </Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"filled\\\" color=\\\"error\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"filled\\\" color=\\\"warning\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"filled\\\" color=\\\"success\\\">content</Alert>\\n        </Col>\\n    </Row>\\n}  \\n```\\n\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Outlined\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Row, {\n    gap: [8, 8]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"outlined\",\n    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Action\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert.Title, null, \"Title\"), \"Content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"outlined\",\n    color: \"error\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"outlined\",\n    color: \"warning\"\n  }, \"content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Col, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n    closeable: true,\n    type: \"outlined\",\n    color: \"success\"\n  }, \"content\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: \"\\n```javascript\\nexport default () => {\\n    return <Row gap={[8, 8]}>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"outlined\\\" actions={<div>aaa</div>} >\\n                <Alert.Title>Title</Alert.Title>\\n                Content\\n            </Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"outlined\\\" color=\\\"error\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"outlined\\\" color=\\\"warning\\\">content</Alert>\\n        </Col>\\n        <Col span={12}>\\n            <Alert closeable type=\\\"outlined\\\" color=\\\"success\\\">content</Alert>\\n        </Col>\\n    </Row>\\n}  \\n```\\n\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: \"\\n## API\\n\\n### Alert\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n| icon   | icon | element | - |\\n| showIcon   | showIcon | bool | - |\\n| onClose   | onClose | void | - |\\n| afterClose   | afterClose | void | - |\\n| closeable   | closeable | bool | - |\\n| closeElement   | closeElement | element | - |\\n| color | PropTypes.oneOf(['success', 'error', 'info', 'warning']) | string | info |\\n| type | PropTypes.oneOf(['filled', 'outlined', 'standard']) | string | standard |\\n        \"\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/alert/index.js?");

/***/ }),

/***/ "./src/alert/style/index.js":
/*!**********************************!*\
  !*** ./src/alert/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/alert/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/alert/style/index.js?");

/***/ }),

/***/ "./src/col/style/index.js":
/*!********************************!*\
  !*** ./src/col/style/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/style/index.less */ \"./src/grid/style/index.less\");\n\n\n//# sourceURL=webpack://@teatak/ui/./src/col/style/index.js?");

/***/ }),

/***/ "./src/row/style/index.js":
/*!********************************!*\
  !*** ./src/row/style/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grid/style/index.less */ \"./src/grid/style/index.less\");\n\n\n//# sourceURL=webpack://@teatak/ui/./src/row/style/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./src/alert/style/index.less":
/*!************************************!*\
  !*** ./src/alert/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/alert/style/index.less?");

/***/ }),

/***/ "./src/grid/style/index.less":
/*!***********************************!*\
  !*** ./src/grid/style/index.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/grid/style/index.less?");

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