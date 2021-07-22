"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var item = function item(props) {
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: props.className
  }, props.children);
};

var menu = function menu(props) {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: props.className
  }, props.children);
};

menu.Item = item;
var _default = menu;
exports["default"] = _default;