"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_space_index_js"],{

/***/ "./node_modules/@mui/icons-material/esm/Delete.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Delete.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@mui/material/utils/createSvgIcon.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n  d: \"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"\n}), 'Delete'));\n\n//# sourceURL=webpack://@teatak/ui/./node_modules/@mui/icons-material/esm/Delete.js?");

/***/ }),

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n      inline = _ref.inline,\n      className = _ref.className,\n      children = _ref.children,\n      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/space/index.js":
/*!***********************************!*\
  !*** ./site/pages/space/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ \"./site/pages/space/index.css\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/Delete.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    query = _useState2[0],\n    setQuery = _useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Space\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, \"Text\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, null, \"Button\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    color: \"primary\"\n  }, \"Filled\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    color: \"primary\"\n  }, \"Outlined\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    rounded: true,\n    color: \"danger\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: \"\\n```javascript\\nimport React from \\\"react\\\";\\nimport {Space,Row,Col} from \\\"@teatak/ui\\\";\\n\\nexport default () => <div className=\\\"page\\\">\\n    <h1>Space</h1>\\n    <div className=\\\"examples\\\">\\n        <Space>\\n            Text\\n            <Button>Button</Button>\\n            <Button type=\\\"filled\\\" color=\\\"primary\\\">Filled</Button>\\n            <Button type=\\\"outlined\\\" color=\\\"primary\\\">Outlined</Button>\\n            <Button type=\\\"filled\\\" rounded color=\\\"danger\\\"><Delete /></Button>\\n        </Space>\\n    </div>\\n</div> \\n```\\n        \"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, {\n    direction: \"vertical\"\n  }, \"Text\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, null, \"Button\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    color: \"primary\"\n  }, \"Filled\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    color: \"primary\"\n  }, \"Outlined\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    rounded: true,\n    color: \"danger\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: \"\\n## API\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n| direction | direction | PropTypes.oneOf(['horizontal', 'vertical']) | horizontal |\\n\\n        \"\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/space/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./site/pages/space/index.css":
/*!************************************!*\
  !*** ./site/pages/space/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/space/index.css?");

/***/ }),

/***/ "./src/space/style/index.less":
/*!************************************!*\
  !*** ./src/space/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.less?");

/***/ })

}]);