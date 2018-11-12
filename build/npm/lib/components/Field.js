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

var Field =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Field, _PureComponent);

  function Field(props) {
    var _this;

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldMenuSelect", function (_ref) {
      var key = _ref.key,
          keyPath = _ref.keyPath;

      _this.props.setField(key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFieldSelect", function (key) {
      _this.props.setField(key);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterOption", function (input, option) {
      var isInChildren = option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      var isInValue = option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      var isInGroupLabel = false;

      if (option.props.groupLabel) {
        isInGroupLabel = option.props.groupLabel.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }

      return isInChildren || isInValue || isInGroupLabel;
    });

    return _this;
  }

  _createClass(Field, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {//let prevProps = this.props;
    }
  }, {
    key: "curField",
    value: function curField() {
      return this.props.selectedField ? (0, _configUtils.getFieldConfig)(this.props.selectedField, this.props.config) : null;
    }
  }, {
    key: "curFieldOpts",
    value: function curFieldOpts() {
      return Object.assign({}, {
        label: this.props.selectedField
      }, this.curField() || {});
    }
  }, {
    key: "getFieldDisplayLabel",
    value: function getFieldDisplayLabel(field, fieldKey) {
      var fieldSeparator = this.props.config.settings.fieldSeparator;
      var maxLabelsLength = this.props.config.settings.maxLabelsLength || 100;
      var label = field.label || (0, _last.default)(fieldKey.split(fieldSeparator));
      label = (0, _stuff.truncateString)(label, maxLabelsLength);
      return label;
    }
  }, {
    key: "buildMenuItems",
    value: function buildMenuItems(fields) {
      var _this2 = this;

      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fieldSeparator = this.props.config.settings.fieldSeparator;
      if (!fields) return null;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : '';
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];

        var label = _this2.getFieldDisplayLabel(field, fieldKey);

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
      var optGroupLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var fieldSeparator = this.props.config.settings.fieldSeparator;
      if (!fields) return null;
      var prefix = path ? path.join(fieldSeparator) + fieldSeparator : '';
      return (0, _keys.default)(fields).map(function (fieldKey) {
        var field = fields[fieldKey];

        var label = _this3.getFieldDisplayLabel(field, fieldKey);

        if (field.type == "!struct") {
          var subpath = (path ? path : []).concat(fieldKey);
          return _react.default.createElement(OptGroup, {
            key: prefix + fieldKey,
            label: label
          }, _this3.buildSelectItems(field.subfields, subpath, label));
        } else {
          return _react.default.createElement(Option, {
            key: prefix + fieldKey,
            value: prefix + fieldKey,
            groupLabel: optGroupLabel
          }, label);
        }
      });
    }
  }, {
    key: "buildMenuToggler",
    value: function buildMenuToggler(label, fullLabel, customLabel) {
      var btnLabel = customLabel ? customLabel : label;
      var maxLabelsLength = this.props.config.settings.maxLabelsLength || 100;
      btnLabel = (0, _stuff.truncateString)(btnLabel, maxLabelsLength);

      var toggler = _react.default.createElement(_antd.Button, {
        size: this.props.config.settings.renderSize || "small"
      }, btnLabel, " ", _react.default.createElement(_antd.Icon, {
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
      var isFieldSelected = !!this.props.selectedField;
      var dropdownPlacement = this.props.config.settings.dropdownPlacement;
      var maxLabelsLength = this.props.config.settings.maxLabelsLength || 100;
      var fieldOptions = this.props.config.fields;
      var selectedFieldPartsLabels = (0, _configUtils.getFieldPathLabels)(this.props.selectedField, this.props.config);
      var selectedFieldFullLabel = selectedFieldPartsLabels ? selectedFieldPartsLabels.join(this.props.config.settings.fieldSeparatorDisplay) : null;
      var placeholder = !isFieldSelected ? this.props.config.settings.fieldPlaceholder : null;
      var fieldDisplayLabel = isFieldSelected ? this.getFieldDisplayLabel(this.curField(), this.props.selectedField) : null;
      var selectText = isFieldSelected ? fieldDisplayLabel : placeholder;
      selectText = (0, _stuff.truncateString)(selectText, maxLabelsLength);
      var selectWidth = (0, _stuff.calcTextWidth)(selectText, '12px'); //let tooltip = this.curFieldOpts().label2 || selectedFieldFullLabel || this.curFieldOpts().label;

      var fieldSelectItems = this.buildSelectItems(fieldOptions);
      var customProps = this.props.customProps || {};

      var fieldSelect = _react.default.createElement(_antd.Select, _extends({
        dropdownAlign: dropdownPlacement ? _stuff.BUILT_IN_PLACEMENTS[dropdownPlacement] : undefined,
        dropdownMatchSelectWidth: false,
        style: {
          width: isFieldSelected && !customProps.showSearch ? null : selectWidth + 36
        },
        ref: "field",
        placeholder: placeholder,
        size: this.props.config.settings.renderSize || "small",
        onChange: this.handleFieldSelect,
        value: this.props.selectedField || undefined,
        filterOption: this.filterOption
      }, customProps), fieldSelectItems);

      return fieldSelect;
    }
  }, {
    key: "renderAsDropdown",
    value: function renderAsDropdown() {
      var fieldOptions = this.props.config.fields;
      var selectedFieldKeys = (0, _configUtils.getFieldPath)(this.props.selectedField, this.props.config);
      var selectedFieldPartsLabels = (0, _configUtils.getFieldPathLabels)(this.props.selectedField, this.props.config);
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

  return Field;
}(_react.PureComponent);

exports.default = Field;

_defineProperty(Field, "propTypes", {
  config: _propTypes.default.object.isRequired,
  selectedField: _propTypes.default.string,
  renderAsDropdown: _propTypes.default.bool,
  customProps: _propTypes.default.object,
  //actions
  setField: _propTypes.default.func.isRequired
});