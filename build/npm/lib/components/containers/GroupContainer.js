"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

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

var stringify = require('json-stringify-safe');

var _default = function _default(Group) {
  var GroupContainer =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GroupContainer, _Component);

    function GroupContainer(props) {
      var _this;

      _classCallCheck(this, GroupContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupContainer).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setConjunction", function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var conj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!conj && e) {
          //for RadioGroup
          conj = e.target.value;
        }

        _this.props.actions.setConjunction(_this.props.path, conj);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dummyFn", function () {});

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeSelf", function (event) {
        _this.props.actions.removeGroup(_this.props.path);

        event.preventDefault();
        return false;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addGroup", function (event) {
        _this.props.actions.addGroup(_this.props.path);

        event.preventDefault();
        return false;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addRule", function (event) {
        _this.props.actions.addRule(_this.props.path);

        event.preventDefault();
        return false;
      });

      _this.conjunctionOptions = _this._getConjunctionOptions(props);
      return _this;
    }

    _createClass(GroupContainer, [{
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
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var config = nextProps.config,
            id = nextProps.id,
            conjunction = nextProps.conjunction;
        var oldConfig = this.props.config;
        var oldConjunction = this.props.conjunction;

        if (oldConfig != config || oldConjunction != conjunction) {
          this.conjunctionOptions = this._getConjunctionOptions(nextProps);
        }
      }
    }, {
      key: "_getConjunctionOptions",
      value: function _getConjunctionOptions(props) {
        return (0, _mapValues.default)(props.config.conjunctions, function (item, index) {
          return {
            id: "conjunction-".concat(props.id, "-").concat(index),
            name: "conjunction[".concat(props.id, "]"),
            key: index,
            label: item.label,
            checked: index === props.conjunction
          };
        });
      }
    }, {
      key: "setNot",
      value: function setNot() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var not = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.props.actions.setNot(this.props.path, not);
      }
    }, {
      key: "render",
      value: function render() {
        var currentNesting = this.props.path.size;
        var maxNesting = this.props.config.settings.maxNesting; // Don't allow nesting further than the maximum configured depth and don't
        // allow removal of the root group.

        var allowFurtherNesting = typeof maxNesting === 'undefined' || currentNesting < maxNesting;
        var isRoot = currentNesting == 1;
        return _react.default.createElement("div", {
          className: 'group-or-rule-container group-container',
          "data-id": this.props.id
        }, [_react.default.createElement(Group, {
          key: "dragging",
          isForDrag: true,
          id: this.props.id,
          isRoot: isRoot,
          allowFurtherNesting: allowFurtherNesting,
          conjunctionOptions: this.conjunctionOptions,
          not: this.props.not,
          selectedConjunction: this.props.conjunction,
          setConjunction: this.dummyFn,
          setNot: this.dummyFn,
          removeSelf: this.dummyFn,
          addGroup: this.dummyFn,
          addRule: this.dummyFn,
          config: this.props.config,
          children1: this.props.children1,
          actions: this.props.actions //tree={this.props.tree}
          ,
          treeNodesCnt: this.props.treeNodesCnt,
          dragging: this.props.dragging
        }), _react.default.createElement(Group, {
          key: this.props.id,
          id: this.props.id,
          isRoot: isRoot,
          allowFurtherNesting: allowFurtherNesting,
          conjunctionOptions: this.conjunctionOptions,
          not: this.props.not,
          selectedConjunction: this.props.conjunction,
          setConjunction: this.setConjunction,
          setNot: this.setNot.bind(this),
          removeSelf: this.removeSelf,
          addGroup: this.addGroup,
          addRule: this.addRule,
          config: this.props.config,
          children1: this.props.children1,
          actions: this.props.actions //tree={this.props.tree}
          ,
          treeNodesCnt: this.props.treeNodesCnt,
          onDragStart: this.props.onDragStart,
          dragging: this.props.dragging
        })]);
      }
    }]);

    return GroupContainer;
  }(_react.Component);

  _defineProperty(GroupContainer, "propTypes", {
    //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
    config: _propTypes.default.object.isRequired,
    actions: _propTypes.default.object.isRequired,
    //{setConjunction: Funciton, removeGroup, addGroup, addRule, ...}
    path: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    id: _propTypes.default.string.isRequired,
    not: _propTypes.default.bool,
    conjunction: _propTypes.default.string,
    children1: _propTypes.default.instanceOf(_immutable.default.OrderedMap),
    onDragStart: _propTypes.default.func,
    treeNodesCnt: _propTypes.default.number
  });

  ;
  var ConnectedGroupContainer = (0, _reactRedux.connect)(function (state) {
    return {
      dragging: state.dragging
    };
  })(GroupContainer);
  return ConnectedGroupContainer;
};

exports.default = _default;