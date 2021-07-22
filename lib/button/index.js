"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["style", "htmlType", "type", "size", "className", "prefixClass", "color", "startIcon", "endIcon", "rounded"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Button = function Button(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var handleClick = function handleClick(e) {
    setClicked(true);
    setTimeout(function () {
      setClicked(false);
    }, 200);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  var style = props.style,
      htmlType = props.htmlType,
      type = props.type,
      size = props.size,
      className = props.className,
      prefixClass = props.prefixClass,
      color = props.color,
      startIcon = props.startIcon,
      endIcon = props.endIcon,
      rounded = props.rounded,
      rest = _objectWithoutProperties(props, _excluded);

  var classes = prefixClass;

  if (className) {
    classes += " " + className;
  }

  if (size && size !== "default") {
    classes += " " + prefixClass + "-size-" + size;
  }

  if (type) {
    classes += " " + prefixClass + "-" + type;
  }

  if (color && color !== "default") {
    classes += " " + prefixClass + "-color-" + color;
  }

  if (rounded) {
    classes += " " + prefixClass + "-rounded";
  }

  if (clicked) {
    classes += " clicked";
  }

  return /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    onClick: handleClick,
    type: htmlType || 'button',
    className: classes,
    style: style
  }), startIcon ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "start-icon"
  }, startIcon) : null, props.children, endIcon ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "end-icon"
  }, endIcon) : null);
};

Button.propTypes = {
  type: _propTypes["default"].oneOf(['filled', 'outlined', 'default']),
  rounded: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(['primary', 'default', 'danger']),
  size: _propTypes["default"].oneOf(['large', 'default', 'small']),
  htmlType: _propTypes["default"].oneOf(['submit', 'button', 'reset'])
};
Button.defaultProps = {
  prefixClass: "teatak-button",
  type: "default"
};
var _default = Button;
exports["default"] = _default;