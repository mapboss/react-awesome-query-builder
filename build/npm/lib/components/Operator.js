"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _configUtils = require("../utils/configUtils");

var _stuff = require("../utils/stuff");

var _antd = require("antd");

var _map = _interopRequireDefault(require("lodash/map"));

var _last = _interopRequireDefault(require("lodash/last"));

var _keys = _interopRequireDefault(require("lodash/keys"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

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

var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;
var SubMenu = _antd.Menu.SubMenu;
var MenuItem = _antd.Menu.Item;
var DropdownButton = _antd.Dropdown.Button;

var Operator =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Operator, _PureComponent);

  function Operator(props) {
    var _this;

    _classCallCheck(this, Operator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Operator).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOperatorMenuSelect", function (_ref) {
      var key = _ref.key,
          keyPath = _ref.keyPath;

      _this.props.setOperator(key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOperatorSelect", function (key) {
      _this.props.setOperator(key);
    });

    _this.onPropsChanged(props);

    return _this;
  }

  _createClass(Operator, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.onPropsChanged(props);
    }
  }, {
    key: "onPropsChanged",
    value: function onPropsChanged(props) {
      var fieldConfig = (0, _configUtils.getFieldConfig)(props.selectedField, props.config);
      this.operatorOptions = (0, _mapValues.default)((0, _pickBy.default)(props.config.operators, function (item, key) {
        return fieldConfig && fieldConfig.operators && fieldConfig.operators.indexOf(key) !== -1;
      }));
    }
  }, {
    key: "curOpOpts",
    value: function curOpOpts() {
      return Object.assign({}, {
        label: this.props.selectedOperator
      }, this.operatorOptions[this.props.selectedOperator] || {});
    }
  }, {
    key: "buildMenuItems",
    value: function buildMenuItems(fields) {
      if (!fields) return null;
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];
        return _react.default.createElement(MenuItem, {
          key: fieldKey
        }, field.label);
      });
    }
  }, {
    key: "buildMenuToggler",
    value: function buildMenuToggler(label) {
      var toggler = _react.default.createElement(_antd.Button, {
        size: this.props.config.settings.renderSize || "small"
      }, label, " ", _react.default.createElement(_antd.Icon, {
        type: "down"
      }));

      return toggler;
    }
  }, {
    key: "buildSelectItems",
    value: function buildSelectItems(fields) {
      if (!fields) return null;
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];
        return _react.default.createElement(Option, {
          key: fieldKey,
          value: fieldKey
        }, field.label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.renderAsDropdown) return this.renderAsDropdown();else return this.renderAsSelect();
    }
  }, {
    key: "renderAsSelect",
    value: function renderAsSelect() {
      var dropdownPlacement = this.props.config.settings.dropdownPlacement;
      var selectedOpKey = this.props.selectedOperator;
      var opMenuItems = this.buildMenuItems(this.operatorOptions);
      var placeholder = this.curOpOpts().label || this.props.config.settings.operatorPlaceholder;
      var placeholderWidth = (0, _stuff.calcTextWidth)(placeholder, '12px');
      var fieldSelectItems = this.buildSelectItems(this.operatorOptions);

      var opSelect = _react.default.createElement(_antd.Select, {
        dropdownAlign: dropdownPlacement ? _stuff.BUILT_IN_PLACEMENTS[dropdownPlacement] : undefined,
        dropdownMatchSelectWidth: false,
        style: {
          width: this.props.selectedOperator ? null : placeholderWidth + 36
        },
        ref: "field",
        placeholder: placeholder,
        size: this.props.config.settings.renderSize || "small",
        onChange: this.handleOperatorSelect,
        value: this.props.selectedOperator || undefined
      }, fieldSelectItems);

      return opSelect;
    }
  }, {
    key: "renderAsDropdown",
    value: function renderAsDropdown() {
      var selectedOpKey = this.props.selectedOperator;
      var placeholder = this.curOpOpts().label || this.props.config.settings.operatorPlaceholder;
      var opMenuItems = this.buildMenuItems(this.operatorOptions);

      var opMenu = _react.default.createElement(_antd.Menu //size={this.props.config.settings.renderSize || "small"}
      , {
        selectedKeys: [selectedOpKey],
        onClick: this.handleOperatorMenuSelect
      }, opMenuItems);

      var opToggler = this.buildMenuToggler(placeholder);
      return _react.default.createElement(_antd.Dropdown, {
        overlay: opMenu,
        trigger: ['click'],
        placement: this.props.config.settings.dropdownPlacement
      }, opToggler);
    }
  }]);

  return Operator;
}(_react.PureComponent);

exports.default = Operator;

_defineProperty(Operator, "propTypes", {
  config: _propTypes.default.object.isRequired,
  selectedField: _propTypes.default.string,
  selectedOperator: _propTypes.default.string,
  renderAsDropdown: _propTypes.default.bool,
  //actions
  setOperator: _propTypes.default.func.isRequired
});