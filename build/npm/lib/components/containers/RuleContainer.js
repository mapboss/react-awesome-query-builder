"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _size = _interopRequireDefault(require("lodash/size"));

var _configUtils = require("../../utils/configUtils");

var _immutable = _interopRequireDefault(require("immutable"));

var _reactRedux = require("react-redux");

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

var _default = function _default(Rule) {
  var RuleContainer =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RuleContainer, _Component);

    function RuleContainer(props) {
      var _this;

      _classCallCheck(this, RuleContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RuleContainer).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dummyFn", function () {});

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeSelf", function () {
        _this.props.actions.removeRule(_this.props.path);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setField", function (field) {
        _this.props.actions.setField(_this.props.path, field);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOperator", function (operator) {
        _this.props.actions.setOperator(_this.props.path, operator);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOperatorOption", function (name, value) {
        _this.props.actions.setOperatorOption(_this.props.path, name, value);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (delta, value, type) {
        _this.props.actions.setValue(_this.props.path, delta, value, type);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValueSrc", function (delta, srcKey) {
        _this.props.actions.setValueSrc(_this.props.path, delta, srcKey);
      });

      _this.componentWillReceiveProps(props);

      return _this;
    }

    _createClass(RuleContainer, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {}
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var prevProps = this.props;
        var prevState = this.state;
        var should = nextProps != prevProps || prevState != nextState;

        if (prevState == nextState && prevProps != nextProps) {
          var chs = [];

          for (var k in nextProps) {
            var changed = nextProps[k] != prevProps[k];

            if (k == 'dragging' && (nextProps.dragging.id || prevProps.dragging.id) != nextProps.id) {
              changed = false; //dragging another item -> ignore
            }

            if (changed) {
              chs.push(k);
            }
          }

          should = Boolean(chs.length);
        }

        return should;
      }
    }, {
      key: "render",
      value: function render() {
        var fieldConfig = (0, _configUtils.getFieldConfig)(this.props.field, this.props.config);
        var isGroup = fieldConfig && fieldConfig.type == '!struct';
        return _react.default.createElement("div", {
          className: 'group-or-rule-container rule-container',
          "data-id": this.props.id
        }, [_react.default.createElement(Rule, {
          key: "dragging",
          isForDrag: true,
          id: this.props.id,
          setField: this.dummyFn,
          setOperator: this.dummyFn,
          setOperatorOption: this.dummyFn,
          removeSelf: this.dummyFn,
          selectedField: this.props.field || null,
          selectedOperator: this.props.operator || null,
          value: this.props.value || null,
          valueSrc: this.props.valueSrc || null,
          operatorOptions: this.props.operatorOptions,
          config: this.props.config,
          treeNodesCnt: this.props.treeNodesCnt,
          dragging: this.props.dragging
        }), _react.default.createElement(Rule, {
          key: this.props.id,
          id: this.props.id,
          removeSelf: this.removeSelf,
          setField: this.setField,
          setOperator: this.setOperator,
          setOperatorOption: this.setOperatorOption,
          setValue: this.setValue,
          setValueSrc: this.setValueSrc,
          selectedField: this.props.field || null,
          selectedOperator: this.props.operator || null,
          value: this.props.value || null,
          valueSrc: this.props.valueSrc || null,
          operatorOptions: this.props.operatorOptions,
          config: this.props.config,
          treeNodesCnt: this.props.treeNodesCnt,
          onDragStart: this.props.onDragStart,
          dragging: this.props.dragging
        })]);
      }
    }]);

    return RuleContainer;
  }(_react.Component);

  _defineProperty(RuleContainer, "propTypes", {
    id: _propTypes.default.string.isRequired,
    config: _propTypes.default.object.isRequired,
    path: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    operator: _propTypes.default.string,
    field: _propTypes.default.string,
    actions: _propTypes.default.object.isRequired,
    //{removeRule: Funciton, setField, setOperator, setOperatorOption, setValue, setValueSrc, ...}
    onDragStart: _propTypes.default.func,
    value: _propTypes.default.any,
    //depends on widget
    valueSrc: _propTypes.default.any,
    operatorOptions: _propTypes.default.object,
    treeNodesCnt: _propTypes.default.number //connected:
    //dragging: PropTypes.object, //{id, x, y, w, h}

  });

  ;
  var ConnectedRuleContainer = (0, _reactRedux.connect)(function (state) {
    return {
      dragging: state.dragging
    };
  })(RuleContainer);
  return ConnectedRuleContainer;
};

exports.default = _default;