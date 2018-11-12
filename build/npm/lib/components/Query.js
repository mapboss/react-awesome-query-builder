"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tree = _interopRequireDefault(require("../stores/tree"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../actions"));

var _configUtils = require("../utils/configUtils");

var _treeUtils = require("../utils/treeUtils");

var _stuff = require("../utils/stuff");

var _validation = require("../utils/validation");

var _queryString = require("../utils/queryString");

var _defaultUtils = require("../utils/defaultUtils");

var _immutable = _interopRequireDefault(require("immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConnectedQuery =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ConnectedQuery, _PureComponent);

  function ConnectedQuery(props) {
    var _this;

    _classCallCheck(this, ConnectedQuery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectedQuery).call(this, props));

    _this._updateActions(props);

    _this.validatedTree = _this.validateTree(props, props.config, props.tree);

    if (props.tree !== _this.validatedTree) {
      props.onChange && props.onChange(_this.validatedTree);
    }

    return _this;
  }

  _createClass(ConnectedQuery, [{
    key: "validateTree",
    value: function validateTree(props, oldConfig, oldTree) {
      var tree = (0, _validation.validateTree)(props.tree, oldTree, props.config, oldConfig, true, true);
      tree = (0, _treeUtils.fixPathsInTree)(tree);
      return tree;
    }
  }, {
    key: "_updateActions",
    value: function _updateActions(props) {
      var config = props.config,
          dispatch = props.dispatch;
      this.actions = (0, _stuff.bindActionCreators)(_objectSpread({}, actions.tree, actions.group, actions.rule), config, dispatch);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var tree = nextProps.tree,
          onChange = nextProps.onChange;
      var oldTree = this.props.tree;
      var oldConfig = this.props.config;
      var newTree = nextProps.tree;
      var newConfig = this.props.config;
      var oldValidatedTree = this.validatedTree;

      if (oldConfig != newConfig) {
        this._updateActions(nextProps);
      }

      this.validatedTree = this.validateTree(nextProps, oldConfig, oldTree);
      var validatedTreeChanged = oldValidatedTree !== this.validatedTree && JSON.stringify(oldValidatedTree) != JSON.stringify(this.validatedTree);

      if (validatedTreeChanged) {
        onChange && onChange(this.validatedTree);
        this.setState({
          treeChanged: true
        });
      } else {
        this.setState({
          treeChanged: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          config = _this$props.config,
          tree = _this$props.tree,
          children = _this$props.children,
          dispatch = _this$props.dispatch,
          props = _objectWithoutProperties(_this$props, ["config", "tree", "children", "dispatch"]);

      var validatedTree = this.validatedTree;
      return children({
        tree: this.validatedTree,
        actions: this.actions,
        config: config,
        dispatch: dispatch
      });
    }
  }]);

  return ConnectedQuery;
}(_react.PureComponent);

_defineProperty(ConnectedQuery, "propTypes", {
  config: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func,
  children: _propTypes.default.func,
  tree: _propTypes.default.instanceOf(_immutable.default.Map) //dispatch: PropTypes.func.isRequired,

});

var QueryContainer = (0, _reactRedux.connect)(function (state) {
  return {
    tree: state.tree
  };
})(ConnectedQuery);

var Query =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(Query, _PureComponent2);

  function Query(props, context) {
    var _this2;

    _classCallCheck(this, Query);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this, props, context));
    var config = {
      conjunctions: props.conjunctions,
      fields: props.fields,
      types: props.types,
      operators: props.operators,
      widgets: props.widgets,
      settings: props.settings,
      tree: props.value
    };
    var store = (0, _tree.default)(config);
    _this2.state = {
      store: (0, _redux.createStore)(store)
    };
    return _this2;
  } // handle case when value property changes


  _createClass(Query, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.dontDispatchOnNewProps) return;

      var getQueryStringForProps = function getQueryStringForProps(props) {
        return props.value != null ? (0, _queryString.queryString)(props.value, props) : '';
      };

      var previousQueryString = getQueryStringForProps(this.props);
      var nextQueryString = getQueryStringForProps(nextProps); // compare stringified trees

      if (previousQueryString !== nextQueryString) {
        var nextTree = nextProps.value || (0, _defaultUtils.defaultRoot)(_objectSpread({}, nextProps, {
          tree: null
        }));
        this.state.store.dispatch(actions.tree.setTree(nextProps, nextTree));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          conjunctions = _this$props2.conjunctions,
          fields = _this$props2.fields,
          types = _this$props2.types,
          operators = _this$props2.operators,
          widgets = _this$props2.widgets,
          settings = _this$props2.settings,
          children = _this$props2.children,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          tree = _this$props2.tree,
          props = _objectWithoutProperties(_this$props2, ["conjunctions", "fields", "types", "operators", "widgets", "settings", "children", "onChange", "value", "tree"]);

      var config = {
        conjunctions: conjunctions,
        fields: fields,
        types: types,
        operators: operators,
        widgets: widgets,
        settings: settings
      };
      config = (0, _configUtils.extendConfig)(config);
      return _react.default.createElement(_reactRedux.Provider, {
        store: this.state.store
      }, _react.default.createElement(QueryContainer, {
        store: this.state.store,
        config: config,
        onChange: onChange,
        children: children
      }));
    }
  }]);

  return Query;
}(_react.PureComponent);

exports.default = Query;

_defineProperty(Query, "propTypes", {
  //config
  conjunctions: _propTypes.default.object.isRequired,
  fields: _propTypes.default.object.isRequired,
  types: _propTypes.default.object.isRequired,
  operators: _propTypes.default.object.isRequired,
  widgets: _propTypes.default.object.isRequired,
  settings: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func,
  children: _propTypes.default.func,
  value: _propTypes.default.instanceOf(_immutable.default.Map)
});