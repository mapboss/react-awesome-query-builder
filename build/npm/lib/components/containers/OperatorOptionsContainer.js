"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _configUtils = require("../../utils/configUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(OperatorOptions) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(OperatorOptionsContainer, _PureComponent);

    function OperatorOptionsContainer() {
      _classCallCheck(this, OperatorOptionsContainer);

      return _possibleConstructorReturn(this, _getPrototypeOf(OperatorOptionsContainer).apply(this, arguments));
    }

    _createClass(OperatorOptionsContainer, [{
      key: "render",
      value: function render() {
        if (!this.props.selectedOperator) return null;
        var operatorDefinitions = (0, _configUtils.getOperatorConfig)(this.props.config, this.props.selectedOperator, this.props.selectedField);

        if (typeof operatorDefinitions.options === 'undefined') {
          return null;
        }

        var _operatorDefinitions$ = operatorDefinitions.options,
            optionsFactory = _operatorDefinitions$.factory,
            optionsProps = _objectWithoutProperties(_operatorDefinitions$, ["factory"]);

        return _react.default.createElement(OperatorOptions, {
          name: this.props.selectedOperator,
          config: this.props.config
        }, optionsFactory(Object.assign({}, optionsProps, {
          config: this.props.config,
          field: this.props.selectedField,
          operator: this.props.selectedOperator,
          options: this.props.operatorOptions,
          setOption: this.props.setOperatorOption
        })));
      }
    }]);

    return OperatorOptionsContainer;
  }(_react.PureComponent), _defineProperty(_class, "propTypes", {
    config: _propTypes.default.object.isRequired,
    operatorOptions: _propTypes.default.instanceOf(_immutable.default.Map).isRequired,
    selectedField: _propTypes.default.string.isRequired,
    selectedOperator: _propTypes.default.string.isRequired,
    //actions
    setOperatorOption: _propTypes.default.func.isRequired
  }), _temp;
};

exports.default = _default;