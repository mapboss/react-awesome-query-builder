"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _map = _interopRequireDefault(require("lodash/map"));

var _configUtils = require("../../utils/configUtils");

var _stuff = require("../../utils/stuff");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _antd.Select.Option;

var SelectWidget =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectWidget, _PureComponent);

  function SelectWidget() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (val) {
      _this.props.setValue(val);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterOption", function (input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    });

    return _this;
  }

  _createClass(SelectWidget, [{
    key: "render",
    value: function render() {
      var size = this.props.config.settings.renderSize || "small";
      var placeholder = this.props.placeholder || "Select option";
      var fieldDefinition = (0, _configUtils.getFieldConfig)(this.props.field, this.props.config);
      var options = (0, _map.default)(fieldDefinition.listValues, function (label, value) {
        return _react.default.createElement(Option, {
          key: value,
          value: value
        }, label);
      });
      var placeholderWidth = (0, _stuff.calcTextWidth)(placeholder, '12px');
      var customProps = this.props.customProps || {};
      return _react.default.createElement(_antd.Select, _extends({
        style: {
          width: this.props.value ? null : placeholderWidth + 36
        },
        key: "widget-select",
        dropdownMatchSelectWidth: false,
        ref: "val",
        placeholder: placeholder,
        size: size,
        value: this.props.value || undefined //note: (bug?) null forces placeholder to hide
        ,
        onChange: this.handleChange,
        filterOption: this.filterOption
      }, customProps), options);
    }
  }]);

  return SelectWidget;
}(_react.PureComponent);

exports.default = SelectWidget;

_defineProperty(SelectWidget, "propTypes", {
  setValue: _propTypes.default.func.isRequired,
  config: _propTypes.default.object.isRequired,
  field: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  //key in listValues
  customProps: _propTypes.default.object
});