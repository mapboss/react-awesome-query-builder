"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _RuleContainer = _interopRequireDefault(require("./containers/RuleContainer"));

var _Field = _interopRequireDefault(require("./Field"));

var _Operator = _interopRequireDefault(require("./Operator"));

var _Widget = _interopRequireDefault(require("./Widget"));

var _OperatorOptions = _interopRequireDefault(require("./OperatorOptions"));

var _antd = require("antd");

var _configUtils = require("../utils/configUtils");

var _size = _interopRequireDefault(require("lodash/size"));

var _reactRedux = require("react-redux");

var _class;

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

var SubMenu = _antd.Menu.SubMenu;
var MenuItem = _antd.Menu.Item;
var DropdownButton = _antd.Dropdown.Button;

var stringify = require('json-stringify-safe');

var classNames = require('classnames');

var Rule = (0, _RuleContainer.default)(_class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Rule, _PureComponent);

  function Rule(props) {
    var _this;

    _classCallCheck(this, Rule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rule).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDraggerMouseDown", function (e) {
      var nodeId = _this.props.id;
      var dom = _this.refs.rule;

      if (_this.props.onDragStart) {
        _this.props.onDragStart(nodeId, dom, e);
      }
    });

    return _this;
  }

  _createClass(Rule, [{
    key: "getRenderType",
    value: function getRenderType(props) {
      var renderType;

      if (props.dragging && props.dragging.id == props.id) {
        renderType = props.isForDrag ? 'dragging' : 'placeholder';
      } else {
        renderType = props.isForDrag ? null : 'normal';
      }

      return renderType;
    }
  }, {
    key: "render",
    value: function render() {
      var renderType = this.getRenderType(this.props);
      if (!renderType) return null;
      var selectedFieldPartsLabels = (0, _configUtils.getFieldPathLabels)(this.props.selectedField, this.props.config);
      var selectedFieldConfig = (0, _configUtils.getFieldConfig)(this.props.selectedField, this.props.config);
      var isSelectedGroup = selectedFieldConfig && selectedFieldConfig.type == '!struct';
      var isFieldAndOpSelected = this.props.selectedField && this.props.selectedOperator && !isSelectedGroup;
      var selectedOperatorConfig = (0, _configUtils.getOperatorConfig)(this.props.config, this.props.selectedOperator, this.props.selectedField);
      var selectedOperatorHasOptions = selectedOperatorConfig && selectedOperatorConfig.options != null;
      var selectedFieldWidgetConfig = (0, _configUtils.getFieldWidgetConfig)(this.props.config, this.props.selectedField, this.props.selectedOperator) || {};
      var styles = {};

      if (renderType == 'dragging') {
        styles = {
          top: this.props.dragging.y,
          left: this.props.dragging.x,
          width: this.props.dragging.w
        };
      }

      return _react.default.createElement("div", {
        className: classNames("rule", "group-or-rule", renderType == 'placeholder' ? 'qb-placeholder' : null, renderType == 'dragging' ? 'qb-draggable' : null),
        style: styles,
        ref: "rule",
        "data-id": this.props.id
      }, _react.default.createElement("div", {
        className: "rule--header"
      }, !this.props.config.settings.readonlyMode && _react.default.createElement(_antd.Button, {
        type: "danger",
        icon: "delete",
        onClick: this.props.removeSelf,
        size: this.props.config.settings.renderSize || "small"
      }, this.props.config.settings.deleteLabel !== undefined ? this.props.config.settings.deleteLabel : "Delete")), this.props.config.settings.canReorder && this.props.treeNodesCnt > 2 && _react.default.createElement("span", {
        className: "qb-drag-handler",
        onMouseDown: this.handleDraggerMouseDown
      }, _react.default.createElement(_antd.Icon, {
        type: "bars"
      }), " "), true ? _react.default.createElement(_antd.Col, {
        key: "fields",
        className: "rule--field"
      }, this.props.config.settings.showLabels && _react.default.createElement("label", null, this.props.config.settings.fieldLabel || "Field"), _react.default.createElement(_Field.default, {
        key: "field",
        config: this.props.config,
        selectedField: this.props.selectedField,
        setField: this.props.setField,
        renderAsDropdown: this.props.config.settings.renderFieldAndOpAsDropdown,
        customProps: this.props.config.settings.customFieldSelectProps
      })) : null, this.props.selectedField && !selectedFieldWidgetConfig.hideOperator && _react.default.createElement(_antd.Col, {
        key: "operators-for-" + (selectedFieldPartsLabels || []).join("_"),
        className: "rule--operator"
      }, this.props.config.settings.showLabels && _react.default.createElement("label", null, this.props.config.settings.operatorLabel || "Operator"), _react.default.createElement(_Operator.default, {
        key: "operator",
        config: this.props.config,
        selectedField: this.props.selectedField,
        selectedOperator: this.props.selectedOperator,
        setOperator: this.props.setOperator,
        renderAsDropdown: this.props.config.settings.renderFieldAndOpAsDropdown
      })), this.props.selectedField && selectedFieldWidgetConfig.hideOperator && selectedFieldWidgetConfig.operatorInlineLabel && _react.default.createElement(_antd.Col, {
        key: "operators-for-" + (selectedFieldPartsLabels || []).join("_"),
        className: "rule--operator"
      }, _react.default.createElement("div", {
        className: "rule--operator"
      }, this.props.config.settings.showLabels ? _react.default.createElement("label", null, "\xA0") : null, _react.default.createElement("span", null, selectedFieldWidgetConfig.operatorInlineLabel))), isFieldAndOpSelected && _react.default.createElement(_antd.Col, {
        key: "widget-for-" + this.props.selectedOperator,
        className: "rule--value"
      }, _react.default.createElement(_Widget.default, {
        key: "values",
        field: this.props.selectedField,
        operator: this.props.selectedOperator,
        value: this.props.value,
        valueSrc: this.props.valueSrc,
        config: this.props.config,
        setValue: this.props.setValue,
        setValueSrc: this.props.setValueSrc
      })), isFieldAndOpSelected && selectedOperatorHasOptions && _react.default.createElement(_antd.Col, {
        key: "op-options-for-" + this.props.selectedOperator,
        className: "rule--operator-options"
      }, _react.default.createElement(_OperatorOptions.default, {
        key: "operatorOptions",
        selectedField: this.props.selectedField,
        selectedOperator: this.props.selectedOperator,
        operatorOptions: this.props.operatorOptions,
        setOperatorOption: this.props.setOperatorOption,
        config: this.props.config
      })));
    }
  }]);

  return Rule;
}(_react.PureComponent)) || _class;

_defineProperty(Rule, "propTypes", {
  isForDrag: _propTypes.default.bool,
  selectedField: _propTypes.default.string,
  selectedOperator: _propTypes.default.string,
  operatorOptions: _propTypes.default.object,
  config: _propTypes.default.object.isRequired,
  onDragStart: _propTypes.default.func,
  renderType: _propTypes.default.string,
  //'dragging', 'placeholder', null
  value: _propTypes.default.any,
  //depends on widget
  valueSrc: _propTypes.default.any,
  //path: PropTypes.instanceOf(Immutable.List),
  //actions
  setField: _propTypes.default.func,
  setOperator: _propTypes.default.func,
  setOperatorOption: _propTypes.default.func,
  removeSelf: _propTypes.default.func,
  setValue: _propTypes.default.func,
  setValueSrc: _propTypes.default.func,
  treeNodesCnt: _propTypes.default.number,
  //connected:
  dragging: _propTypes.default.object //{id, x, y, w, h}

});

var _default = Rule;
exports.default = _default;