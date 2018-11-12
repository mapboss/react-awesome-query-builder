"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

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

var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;

var DateWidget =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateWidget, _PureComponent);

  function DateWidget(props) {
    var _this;

    _classCallCheck(this, DateWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateWidget).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (_value) {
      var _this$props = _this.props,
          setValue = _this$props.setValue,
          valueFormat = _this$props.valueFormat;
      var value = _value && _value.isValid() ? _value.format(valueFormat) : null;
      if (value || _value === null) setValue(value);
    });

    var _valueFormat = props.valueFormat,
        _value2 = props.value,
        _setValue = props.setValue;
    var mValue = _value2 ? (0, _moment.default)(_value2, _valueFormat) : null;

    if (mValue && !mValue.isValid()) {
      _setValue(null);
    }

    _moment.default.locale(_this.props.config.settings.locale.short);

    return _this;
  }

  _createClass(DateWidget, [{
    key: "render",
    value: function render() {
      var customProps = this.props.customProps || {};
      var _this$props2 = this.props,
          dateFormat = _this$props2.dateFormat,
          valueFormat = _this$props2.valueFormat,
          value = _this$props2.value;
      var dateValue = value ? (0, _moment.default)(value, valueFormat) : null;
      return _react.default.createElement(_antd.DatePicker, _extends({
        key: "widget-date",
        placeholder: this.props.placeholder,
        size: this.props.config.settings.renderSize || "small",
        format: dateFormat,
        value: dateValue,
        onChange: this.handleChange,
        ref: "datetime"
      }, customProps));
    }
  }]);

  return DateWidget;
}(_react.PureComponent);

exports.default = DateWidget;

_defineProperty(DateWidget, "propTypes", {
  setValue: _propTypes.default.func.isRequired,
  dateFormat: _propTypes.default.string,
  valueFormat: _propTypes.default.string,
  value: _propTypes.default.string,
  //in valueFormat
  field: _propTypes.default.string.isRequired,
  config: _propTypes.default.object.isRequired,
  placeholder: _propTypes.default.string,
  customProps: _propTypes.default.object
});

_defineProperty(DateWidget, "defaultProps", {
  dateFormat: 'YYYY-MM-DD',
  valueFormat: 'YYYY-MM-DD'
});