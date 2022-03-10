/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_teatak_ui"] = self["webpackChunk_teatak_ui"] || []).push([["site_pages_modal_index_js"],{

/***/ "./site/components/markdown/index.js":
/*!*******************************************!*\
  !*** ./site/components/markdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js\");\n\n\nvar _excluded = [\"node\", \"inline\", \"className\", \"children\"];\n\n\n\n\n/* Use `…/dist/cjs/…` if you’re not in ESM! */\n\n\nvar components = {\n  code: function code(_ref) {\n    var node = _ref.node,\n        inline = _ref.inline,\n        className = _ref.className,\n        children = _ref.children,\n        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n    var match = /language-(\\w+)/.exec(className || '');\n    return !inline && match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_6__.default,\n      language: match[1],\n      PreTag: \"div\",\n      children: String(children).replace(/\\n$/, '')\n    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"code\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      className: className\n    }, props), children);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"markdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n    components: components,\n    children: props.children,\n    remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default())]\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/components/markdown/index.js?");

/***/ }),

/***/ "./site/pages/modal/index.js":
/*!***********************************!*\
  !*** ./site/pages/modal/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _src_modal_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/modal/style */ \"./src/modal/style/index.js\");\n/* harmony import */ var _src_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/button/style */ \"./src/button/style/index.js\");\n/* harmony import */ var _src_space_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/space/style */ \"./src/space/style/index.js\");\n/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/markdown */ \"./site/components/markdown/index.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ \"./site/pages/modal/index.css\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      isModalVisible = _useState2[0],\n      setIsModalVisible = _useState2[1];\n\n  var showModal = function showModal() {\n    setIsModalVisible(true);\n  };\n\n  var handleClose = function handleClose() {\n    setIsModalVisible(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, \"Modal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    onClick: showModal\n  }, \"Open Modal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    visible: isModalVisible,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, null, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {\n    dividers: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Some contents...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Some contents...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Some contents...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Modal.Actions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"outlined\",\n    color: \"primary\",\n    onClick: handleClose\n  }, \"Return\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    color: \"primary\"\n  }, \"Submit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    type: \"filled\",\n    color: \"secondary\"\n  }, \"Click\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: \"\\n```javascript\\nexport default () => <div className=\\\"page\\\">\\n  <h1>Modal</h1>\\n  <div className=\\\"examples\\\">\\n    <Button type=\\\"outlined\\\" onClick={showModal}>Open Modal</Button>\\n    <Modal\\n      visible={isModalVisible}\\n      onClose={handleClose}\\n    >\\n      <Modal.Title>\\n        Title\\n      </Modal.Title>\\n      <Modal.Content dividers>\\n        <p>Some contents...</p>\\n        <p>Some contents...</p>\\n        <p>Some contents...</p>\\n      </Modal.Content>\\n      <Modal.Actions>\\n        <Space>\\n          <Button type=\\\"outlined\\\" color=\\\"primary\\\" onClick={handleClose}>\\n            Return\\n          </Button>\\n          <Button type=\\\"filled\\\" color=\\\"primary\\\">\\n            Submit\\n          </Button>\\n          <Button\\n            type=\\\"filled\\\"\\n            color=\\\"secondary\\\"\\n          >\\n            Click\\n          </Button>\\n        </Space>\\n      </Modal.Actions>\\n    </Modal>\\n  </div>    \\n</div>\\n```\\n        \"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: \"\\n## API\\n\\n| Property  | Description | Type | Default |\\n| --------- | ------- | ------- | ------- |\\n\\n        \"\n  }));\n});\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/modal/index.js?");

/***/ }),

/***/ "./src/button/style/index.js":
/*!***********************************!*\
  !*** ./src/button/style/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/button/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.js?");

/***/ }),

/***/ "./src/modal/style/index.js":
/*!**********************************!*\
  !*** ./src/modal/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/modal/style/index.less\");\n/**\n * Created by yanggang on 2018/12/11.\n */\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/modal/style/index.js?");

/***/ }),

/***/ "./src/space/style/index.js":
/*!**********************************!*\
  !*** ./src/space/style/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ \"./src/space/style/index.less\");\n\n\n\n//# sourceURL=webpack://@teatak/ui/./src/space/style/index.js?");

/***/ }),

/***/ "./site/pages/modal/index.css":
/*!************************************!*\
  !*** ./site/pages/modal/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./site/pages/modal/index.css?");

/***/ }),

/***/ "./src/button/style/index.less":
/*!*************************************!*\
  !*** ./src/button/style/index.less ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/button/style/index.less?");

/***/ }),

/***/ "./src/modal/style/index.less":
/*!************************************!*\
  !*** ./src/modal/style/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@teatak/ui/./src/modal/style/index.less?");

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