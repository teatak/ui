/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_color_index_js"],{

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n        inline = _ref.inline,\n        className = _ref.className,\n        children = _ref.children,\n        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__.default,\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/color/index.js":
/*!***********************************!*\
  !*** ./site/pages/color/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _src_row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/row/style */ \"./src/row/style/index.js\");\n/* harmony import */ var _src_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/col/style */ \"./src/col/style/index.js\");\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ \"./site/pages/color/index.less\");\n\n\n\n\n\n\n\n\n\nvar Color = function Color(props) {\n  var name = props.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"colors\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-1))\")\n    }\n  }, name, \"-1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-2))\")\n    }\n  }, name, \"-2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-3))\")\n    }\n  }, name, \"-3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-4))\")\n    }\n  }, name, \"-4\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-5))\")\n    }\n  }, name, \"-5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-6))\"),\n      color: \"var(--color-bg-2)\"\n    }\n  }, name, \"-6\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reverse\",\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-7))\"),\n      color: \"var(--color-bg-2)\"\n    }\n  }, name, \"-7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reverse\",\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-8))\"),\n      color: \"var(--color-bg-2)\"\n    }\n  }, name, \"-8\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reverse\",\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-9))\"),\n      color: \"var(--color-bg-2)\"\n    }\n  }, name, \"-9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reverse\",\n    style: {\n      background: \"rgb(var(--\".concat(name, \"-10))\"),\n      color: \"var(--color-bg-2)\"\n    }\n  }, name, \"-10\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Color\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Foreground:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      color: \"var(--color-fg-1)\"\n    }\n  }, \"foreground1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      color: \"var(--color-fg-2)\"\n    }\n  }, \"foreground2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      color: \"var(--color-fg-3)\"\n    }\n  }, \"foreground3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      color: \"var(--color-fg-4)\"\n    }\n  }, \"foreground4\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Color:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Row, {\n    gap: \"16px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"red\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"pink\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"purple\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"deeppurple\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"blue\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"cyan\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"lime\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"yellow\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"amber\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"orange\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"deeporange\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.Col, {\n    xs: \"24\",\n    sm: \"12\",\n    lg: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Color, {\n    name: \"grey\"\n  }))));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/color/index.js?");

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

/***/ "./site/pages/color/index.less":
/*!*************************************!*\
  !*** ./site/pages/color/index.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/color/index.less?");

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