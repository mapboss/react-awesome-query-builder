"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _range = _interopRequireDefault(require("lodash/range"));

var _map = _interopRequireDefault(require("lodash/map"));

var _configUtils = require("../../utils/configUtils");

var _stuff = require("../../utils/stuff");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;

var _default = function _default(Widget) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(WidgetContainer, _PureComponent);

    function WidgetContainer(props) {
      var _this;

      _classCallCheck(this, WidgetContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WidgetContainer).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getSetValueHandler", function (delta, widgetType) {
        var k = '' + widgetType + '#' + delta;
        var h = _this._setValueHandlers[k];

        if (!h) {
          h = _this._setValue.bind(_assertThisInitialized(_assertThisInitialized(_this)), delta, widgetType);
          _this._setValueHandlers[k] = h;
        }

        return h;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getSetValueSrcHandler", function (delta) {
        var k = '' + delta;
        var h = _this._setValueSrcHandlers[k];

        if (!h) {
          h = _this._onChangeValueSrc.bind(_assertThisInitialized(_assertThisInitialized(_this)), delta);
          _this._setValueSrcHandlers[k] = h;
        }

        return h;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_setValue", function (delta, widgetType, value) {
        _this.props.setValue(delta, value, widgetType);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onChangeValueSrc", function (delta, e) {
        var srcKey = e.target.value;

        _this.props.setValueSrc(delta, srcKey);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderWidget", function (delta, valueSrc, widget) {
        var fieldDefinition = (0, _configUtils.getFieldConfig)(_this.props.field, _this.props.config);
        var widgetDefinition = (0, _configUtils.getFieldWidgetConfig)(_this.props.config, _this.props.field, _this.props.operator, widget, valueSrc);
        var valueLabel = (0, _configUtils.getValueLabel)(_this.props.config, _this.props.field, _this.props.operator, delta);

        var widgetFactory = widgetDefinition.factory,
            fieldWidgetProps = _objectWithoutProperties(widgetDefinition, ["factory"]);

        var widgetType = widgetDefinition.type;
        if (!widgetFactory) return '?';
        var widgetProps = Object.assign({}, fieldWidgetProps, {
          config: _this.props.config,
          field: _this.props.field,
          operator: _this.props.operator,
          delta: delta,
          value: _this.props.value.get(delta),
          label: valueLabel.label,
          placeholder: valueLabel.placeholder,
          setValue: _this._getSetValueHandler(delta, widgetType)
        });

        if (widget == 'field') {//
        }

        return widgetFactory(widgetProps);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderValueSorces", function (delta, valueSources, valueSrc) {
        var fieldDefinition = (0, _configUtils.getFieldConfig)(_this.props.field, _this.props.config);
        var valueSourcesInfo = _this.props.config.settings.valueSourcesInfo;
        var valueSourcesPopupTitle = _this.props.config.settings.valueSourcesPopupTitle; //let valueSources = fieldDefinition.valueSources;
        //let valueSources = getValueSourcesForFieldOp(this.props.config, this.props.field, this.props.operator);

        if (!valueSources || Object.keys(valueSources).length == 1) return null;

        var content = _react.default.createElement(RadioGroup, {
          key: 'valuesrc-' + delta,
          value: valueSrc || "value",
          size: _this.props.config.settings.renderSize || "small",
          onChange: _this._getSetValueSrcHandler(delta)
        }, valueSources.map(function (srcKey) {
          return _react.default.createElement(RadioButton, {
            key: srcKey,
            value: srcKey //checked={item.checked}

          }, valueSourcesInfo[srcKey].label);
        }));

        return _react.default.createElement("span", null, _react.default.createElement(_antd.Popover, {
          content: content,
          title: valueSourcesPopupTitle
        }, _react.default.createElement(_antd.Icon, {
          type: "ellipsis"
        })));
      });

      _this._setValueHandlers = {};
      _this._setValueSrcHandlers = {};
      return _this;
    }

    _createClass(WidgetContainer, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var settings = this.props.config.settings;
        var defaultWidget = (0, _configUtils.getWidgetForFieldOp)(this.props.config, this.props.field, this.props.operator);
        var widgets = (0, _configUtils.getWidgetsForFieldOp)(this.props.config, this.props.field, this.props.operator);
        var fieldDefinition = (0, _configUtils.getFieldConfig)(this.props.field, this.props.config);
        var operatorDefinition = (0, _configUtils.getOperatorConfig)(this.props.config, this.props.operator, this.props.field);

        if (typeof fieldDefinition === 'undefined' || typeof operatorDefinition === 'undefined') {
          return null;
        }

        var cardinality = (0, _stuff.defaultValue)(operatorDefinition.cardinality, 1);

        if (cardinality === 0) {
          return null;
        }

        return _react.default.createElement(Widget, {
          name: defaultWidget,
          config: this.props.config
        }, (0, _range.default)(0, cardinality).map(function (delta) {
          var valueSources = (0, _configUtils.getValueSourcesForFieldOp)(_this2.props.config, _this2.props.field, _this2.props.operator);
          var valueSrc = _this2.props.valueSrc.get(delta) || null; //if (!valueSrc && valueSources.length == 1) {
          //    this.props.setValueSrc(delta, valueSources[0]);
          //}

          var widget = (0, _configUtils.getWidgetForFieldOp)(_this2.props.config, _this2.props.field, _this2.props.operator, valueSrc);
          var widgetDefinition = (0, _configUtils.getFieldWidgetConfig)(_this2.props.config, _this2.props.field, _this2.props.operator, widget, valueSrc);
          var valueLabel = (0, _configUtils.getValueLabel)(_this2.props.config, _this2.props.field, _this2.props.operator, delta, valueSrc);
          var parts = [];

          if (operatorDefinition.textSeparators) {
            var sep = operatorDefinition.textSeparators[delta];

            if (sep) {
              parts.push(_react.default.createElement("div", {
                key: "widget-separators-" + delta,
                className: "widget--sep"
              }, settings.showLabels ? _react.default.createElement("label", null, "\xA0") : null, _react.default.createElement("span", null, sep)));
            }
          }

          if (valueSources.length > 1) parts.push(_react.default.createElement("div", {
            key: "valuesrc-" + _this2.props.field + "-" + delta,
            className: "widget--valuesrc"
          }, settings.showLabels ? _react.default.createElement("label", null, "\xA0") : null, _this2.renderValueSorces(delta, valueSources, valueSrc)));
          parts.push(_react.default.createElement("div", {
            key: "widget-" + _this2.props.field + "-" + delta,
            className: "widget--widget"
          }, settings.showLabels ? _react.default.createElement("label", null, valueLabel.label) : null, _this2.renderWidget(delta, valueSrc, widget)));
          return parts;
        }));
      }
    }]);

    return WidgetContainer;
  }(_react.PureComponent), _defineProperty(_class, "propTypes", {
    config: _propTypes.default.object.isRequired,
    value: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    valueSrc: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    field: _propTypes.default.string.isRequired,
    operator: _propTypes.default.string.isRequired,
    //actions
    setValue: _propTypes.default.func,
    setValueSrc: _propTypes.default.func
  }), _temp;
};

exports.default = _default;