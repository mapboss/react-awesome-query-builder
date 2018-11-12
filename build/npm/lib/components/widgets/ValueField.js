"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _configUtils = require("../../utils/configUtils");

var _stuff = require("../../utils/stuff");

var _antd = require("antd");

var _map = _interopRequireDefault(require("lodash/map"));

var _last = _interopRequireDefault(require("lodash/last"));

var _keys = _interopRequireDefault(require("lodash/keys"));

var _clone = _interopRequireDefault(require("clone"));

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

var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;
var SubMenu = _antd.Menu.SubMenu;
var MenuItem = _antd.Menu.Item;
var DropdownButton = _antd.Dropdown.Button;

//tip: this.props.value - right value, this.props.field - left value
var ValueField =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ValueField, _PureComponent);

  function ValueField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ValueField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ValueField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldMenuSelect", function (_ref) {
      var key = _ref.key,
          keyPath = _ref.keyPath;

      _this.props.setValue(key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldSelect", function (key) {
      _this.props.setValue(key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterOption", function (input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    });

    return _this;
  }

  _createClass(ValueField, [{
    key: "curFieldOpts",
    value: function curFieldOpts() {
      return Object.assign({}, {
        label: this.props.value
      }, (0, _configUtils.getFieldConfig)(this.props.value, this.props.config) || {});
    }
  }, {
    key: "filterFields",
    //tip: empty groups are ok for antd
    value: function filterFields(config, fields, leftFieldFullkey, operator) {
      fields = (0, _clone.default)(fields);
      var fieldSeparator = config.settings.fieldSeparator;
      var leftFieldConfig = (0, _configUtils.getFieldConfig)(leftFieldFullkey, config);
      var expectedType;
      var widget = (0, _configUtils.getWidgetForFieldOp)(config, leftFieldFullkey, operator, 'value');

      if (widget) {
        var widgetConfig = config.widgets[widget];
        var widgetType = widgetConfig.type; //expectedType = leftFieldConfig.type;

        expectedType = widgetType;
      } else {
        expectedType = leftFieldConfig.type;
      }

      function _filter(list, path) {
        for (var rightFieldKey in list) {
          var subfields = list[rightFieldKey].subfields;
          var subpath = (path ? path : []).concat(rightFieldKey);
          var rightFieldFullkey = subpath.join(fieldSeparator);
          var rightFieldConfig = (0, _configUtils.getFieldConfig)(rightFieldFullkey, config);

          if (rightFieldConfig.type == "!struct") {
            _filter(subfields, subpath);
          } else {
            var canUse = rightFieldConfig.type == expectedType && rightFieldFullkey != leftFieldFullkey;
            var fn = config.settings.canCompareFieldWithField;
            if (fn) canUse = canUse && fn(leftFieldFullkey, leftFieldConfig, rightFieldFullkey, rightFieldConfig);
            if (!canUse) delete list[rightFieldKey];
          }
        }
      }

      _filter(fields, []);

      return fields;
    }
  }, {
    key: "buildMenuItems",
    value: function buildMenuItems(fields) {
      var _this2 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fieldSeparator = this.props.config.settings.fieldSeparator;
      var maxLabelsLength = this.props.config.settings.maxLabelsLength || 100;
      if (!fields) return null;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : '';
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];
        var label = field.label || (0, _last.default)(fieldKey.split(fieldSeparator));
        label = (0, _stuff.truncateString)(label, maxLabelsLength);

        if (field.type == "!struct") {
          var subpath = (path ? path : []).concat(fieldKey);
          return _react.default.createElement(SubMenu, {
            key: prefix + fieldKey,
            title: _react.default.createElement("span", null, label, " \xA0\xA0\xA0\xA0")
          }, _this2.buildMenuItems(field.subfields, subpath));
        } else {
          return _react.default.createElement(MenuItem, {
            key: prefix + fieldKey
          }, label);
        }
      });
    }
  }, {
    key: "buildSelectItems",
    value: function buildSelectItems(fields) {
      var _this3 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fieldSeparator = this.props.config.settings.fieldSeparator;
      var maxLabelsLength = this.props.config.settings.maxLabelsLength || 100;
      if (!fields) return null;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : '';
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];
        var label = field.label || (0, _last.default)(fieldKey.split(fieldSeparator));
        label = (0, _stuff.truncateString)(label, maxLabelsLength);

        if (field.type == "!struct") {
          var subpath = (path ? path : []).concat(fieldKey);
          return _react.default.createElement(OptGroup, {
            key: prefix + fieldKey,
            label: label
          }, _this3.buildSelectItems(field.subfields, subpath));
        } else {
          return _react.default.createElement(Option, {
            key: prefix + fieldKey,
            value: prefix + fieldKey
          }, label);
        }
      });
    }
  }, {
    key: "buildMenuToggler",
    value: function buildMenuToggler(label, fullLabel, customLabel) {
      var toggler = _react.default.createElement(_antd.Button, {
        size: this.props.config.settings.renderSize || "small"
      }, customLabel ? customLabel : label, " ", _react.default.createElement(_antd.Icon, {
        type: "down"
      }));

      if (fullLabel && fullLabel != label) {
        toggler = _react.default.createElement(_antd.Tooltip, {
          placement: "top",
          title: fullLabel
        }, toggler);
      }

      return toggler;
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
      var fieldOptions = this.filterFields(this.props.config, this.props.config.fields, this.props.field, this.props.operator);
      var placeholder = this.curFieldOpts().label || this.props.config.settings.fieldPlaceholder;
      var placeholderWidth = (0, _stuff.calcTextWidth)(placeholder, '12px');
      var fieldSelectItems = this.buildSelectItems(fieldOptions);
      var customProps = this.props.customProps || {};

      var fieldSelect = _react.default.createElement(_antd.Select, _extends({
        dropdownAlign: dropdownPlacement ? _stuff.BUILT_IN_PLACEMENTS[dropdownPlacement] : undefined,
        dropdownMatchSelectWidth: false,
        style: {
          width: this.props.value ? null : placeholderWidth + 36
        },
        ref: "field",
        placeholder: placeholder,
        size: this.props.config.settings.renderSize || "small",
        onChange: this.handleFieldSelect,
        value: this.props.value || undefined,
        filterOption: this.filterOption
      }, customProps), fieldSelectItems);

      return fieldSelect;
    }
  }, {
    key: "renderAsDropdown",
    value: function renderAsDropdown() {
      var fieldOptions = this.filterFields(this.props.config, this.props.config.fields, this.props.field, this.props.operator);
      var selectedFieldKeys = (0, _configUtils.getFieldPath)(this.props.value, this.props.config);
      var selectedFieldPartsLabels = (0, _configUtils.getFieldPathLabels)(this.props.value, this.props.config);
      var selectedFieldFullLabel = selectedFieldPartsLabels ? selectedFieldPartsLabels.join(this.props.config.settings.fieldSeparatorDisplay) : null;
      var placeholder = this.curFieldOpts().label || this.props.config.settings.fieldPlaceholder;
      var customProps = this.props.customProps || {};
      var fieldMenuItems = this.buildMenuItems(fieldOptions);

      var fieldMenu = _react.default.createElement(_antd.Menu //size={this.props.config.settings.renderSize || "small"}
      , _extends({
        selectedKeys: selectedFieldKeys,
        onClick: this.handleFieldMenuSelect
      }, customProps), fieldMenuItems);

      var fieldToggler = this.buildMenuToggler(placeholder, selectedFieldFullLabel, this.curFieldOpts().label2);
      return _react.default.createElement(_antd.Dropdown, {
        overlay: fieldMenu,
        trigger: ['click'],
        placement: this.props.config.settings.dropdownPlacement
      }, fieldToggler);
    }
  }]);

  return ValueField;
}(_react.PureComponent);

exports.default = ValueField;

_defineProperty(ValueField, "propTypes", {
  setValue: _propTypes.default.func.isRequired,
  renderAsDropdown: _propTypes.default.bool,
  config: _propTypes.default.object.isRequired,
  field: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  operator: _propTypes.default.string,
  customProps: _propTypes.default.object
});