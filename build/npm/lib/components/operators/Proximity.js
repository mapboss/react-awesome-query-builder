"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _range = _interopRequireDefault(require("lodash/range"));

var _antd = require("antd");

var _immutable = _interopRequireDefault(require("immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Proximity =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Proximity, _PureComponent);

  function Proximity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Proximity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Proximity)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.props.setOption('proximity', value);
    });

    return _this;
  }

  _createClass(Proximity, [{
    key: "render",
    value: function render() {
      var selectedProximity = this.props.options.get('proximity', this.props.defaults.proximity);
      return _react.default.createElement("div", {
        className: "operator--PROXIMITY"
      }, _react.default.createElement("div", {
        className: "operator--options"
      }, this.props.config.settings.showLabels && _react.default.createElement("label", null, this.props.optionLabel || "Words between"), !this.props.config.settings.showLabels && this.props.optionTextBefore && _react.default.createElement("div", {
        className: "operator--options--sep"
      }, _react.default.createElement("span", null, this.props.optionTextBefore)), _react.default.createElement(_antd.Select, {
        dropdownMatchSelectWidth: false,
        size: this.props.config.settings.renderSize || "small",
        ref: "proximity",
        placeholder: this.props.optionPlaceholder || "Select words between",
        value: selectedProximity != null ? "" + selectedProximity : "",
        onChange: this.handleChange
      }, (0, _range.default)(this.props.minProximity || 2, (this.props.maxProximity || 10) + 1).map(function (item) {
        return _react.default.createElement(Option, {
          key: "" + item,
          value: "" + item
        }, item);
      }))), _react.default.createElement("div", {
        className: "operator--widgets"
      }, this.props.children));
    }
  }]);

  return Proximity;
}(_react.PureComponent);

exports.default = Proximity;

_defineProperty(Proximity, "propTypes", {
  config: _propTypes.default.object.isRequired,
  setOption: _propTypes.default.func.isRequired,
  defaults: _propTypes.default.object.isRequired,
  options: _propTypes.default.instanceOf(_immutable.default.Map).isRequired,
  minProximity: _propTypes.default.number,
  maxProximity: _propTypes.default.number,
  optionPlaceholder: _propTypes.default.string,
  optionTextBefore: _propTypes.default.string,
  optionLabel: _propTypes.default.string //children

});