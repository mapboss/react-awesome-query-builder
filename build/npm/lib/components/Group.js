"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.groupActionsPositionList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _map = _interopRequireDefault(require("lodash/map"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _GroupContainer = _interopRequireDefault(require("./containers/GroupContainer"));

var _antd = require("antd");

var _immutable = _interopRequireDefault(require("immutable"));

var _reactRedux = require("react-redux");

var _Item = _interopRequireDefault(require("./Item"));

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

var ButtonGroup = _antd.Button.Group;
var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;

var classNames = require('classnames');

var groupActionsPositionList = {
  topLeft: 'group--actions--tl',
  topCenter: 'group--actions--tc',
  topRight: 'group--actions--tr',
  bottomLeft: 'group--actions--bl',
  bottomCenter: 'group--actions--bc',
  bottomRight: 'group--actions--br'
};
exports.groupActionsPositionList = groupActionsPositionList;
var defaultPosition = 'topRight';

var Group = (0, _GroupContainer.default)(_class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Group, _PureComponent);

  function Group(_props) {
    var _this;

    _classCallCheck(this, Group);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getSetConjunctionHandler", function () {
      var itemKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var k = '' + itemKey;
      var h = _this._setConjunctionHandlers[k];

      if (!h) {
        h = _this._setConjunction.bind(_assertThisInitialized(_assertThisInitialized(_this)), itemKey);
        _this._setConjunctionHandlers[k] = h;
      }

      return h;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_setConjunction", function (itemKey, e) {
      _this.props.setConjunction(e, itemKey);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDraggerMouseDown", function (e) {
      var nodeId = _this.props.id;
      var dom = _this.refs.group;

      if (_this.props.onDragStart) {
        _this.props.onDragStart(nodeId, dom, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getGroupPositionClass", function () {
      var groupActionsPosition = _this.props.config.settings.groupActionsPosition;
      return groupActionsPositionList[groupActionsPosition] || groupActionsPositionList[defaultPosition];
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isGroupTopPosition", function () {
      return (0, _startsWith.default)(_this.props.config.settings.groupActionsPosition || defaultPosition, 'top');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderGroup", function (position) {
      return _react.default.createElement("div", {
        className: "group--actions ".concat(position)
      }, _react.default.createElement(ButtonGroup, {
        size: _this.props.config.settings.renderSize || "small"
      }, !_this.props.config.settings.readonlyMode && _react.default.createElement(_antd.Button, {
        icon: "plus",
        className: "action action--ADD-RULE",
        onClick: _this.props.addRule
      }, _this.props.config.settings.addRuleLabel || "Add rule"), !_this.props.config.settings.readonlyMode && _this.props.allowFurtherNesting ? _react.default.createElement(_antd.Button, {
        className: "action action--ADD-GROUP",
        icon: "plus-circle-o",
        onClick: _this.props.addGroup
      }, _this.props.config.settings.addGroupLabel || "Add group") : null, !_this.props.config.settings.readonlyMode && !_this.props.isRoot ? _react.default.createElement(_antd.Button, {
        type: "danger",
        icon: "delete",
        className: "action action--ADD-DELETE",
        onClick: _this.props.removeSelf
      }, _this.props.config.settings.delGroupLabel !== undefined ? _this.props.config.settings.delGroupLabel : "Delete") : null));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChildren", function () {
      var props = _this.props;
      return props.children1 ? props.children1.map(function (item) {
        return _react.default.createElement(_Item.default, {
          key: item.get('id'),
          id: item.get('id') //path={props.path.push(item.get('id'))}
          ,
          path: item.get('path'),
          type: item.get('type'),
          properties: item.get('properties'),
          config: props.config,
          actions: props.actions,
          children1: item.get('children1') //tree={props.tree}
          ,
          treeNodesCnt: props.treeNodesCnt,
          onDragStart: props.onDragStart
        });
      }).toList() : null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHeader", function () {
      var renderConjsAsRadios = false;
      return _react.default.createElement("div", {
        className: classNames("group--conjunctions" // this.props.children1.size < 2 && this.props.config.settings.hideConjForOne ? 'hide--conj' : ''
        )
      }, _this.props.config.settings.renderConjsAsRadios ? _react.default.createElement(RadioGroup, {
        disabled: _this.props.children1.size < 2,
        value: _this.props.selectedConjunction,
        size: _this.props.config.settings.renderSize || "small",
        onChange: _this.props.setConjunction
      }, (0, _map.default)(_this.props.conjunctionOptions, function (item, index) {
        return _react.default.createElement(RadioButton, {
          key: item.id,
          value: item.key //checked={item.checked}

        }, item.label);
      })) : _react.default.createElement(ButtonGroup, {
        size: _this.props.config.settings.renderSize || "small",
        disabled: _this.props.children1.size < 2
      }, _this.props.config.settings.showNot && _react.default.createElement(_antd.Button, {
        onClick: function onClick(ev) {
          return _this.props.setNot(ev, !_this.props.not);
        },
        type: _this.props.not ? "primary" : null
      }, _this.props.config.settings.notLabel), (0, _map.default)(_this.props.conjunctionOptions, function (item, index) {
        return _react.default.createElement(_antd.Button, {
          disabled: _this.props.children1.size < 2,
          key: item.id,
          type: item.checked ? "primary" : null,
          onClick: _this._getSetConjunctionHandler(item.key)
        }, item.label);
      })), _this.props.config.settings.canReorder && _this.props.treeNodesCnt > 2 && !_this.props.isRoot && _react.default.createElement("span", {
        className: "qb-drag-handler",
        onMouseDown: _this.handleDraggerMouseDown
      }, " ", _react.default.createElement(_antd.Icon, {
        type: "bars"
      }), " "));
    });

    _this._setConjunctionHandlers = {};
    return _this;
  }

  _createClass(Group, [{
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
      var styles = {};

      if (renderType == 'dragging') {
        styles = {
          top: this.props.dragging.y,
          left: this.props.dragging.x,
          width: this.props.dragging.w
        };
      }

      return _react.default.createElement("div", {
        className: classNames("group", "group-or-rule", renderType == 'placeholder' ? 'qb-placeholder' : null, renderType == 'dragging' ? 'qb-draggable' : null),
        style: styles,
        ref: "group",
        "data-id": this.props.id
      }, _react.default.createElement("div", {
        className: "group--header"
      }, this.renderHeader(), this.isGroupTopPosition() && this.renderGroup(this.getGroupPositionClass())), this.props.children1 ? _react.default.createElement("div", {
        className: classNames("group--children", this.props.children1.size < 2 && this.props.config.settings.hideConjForOne ? 'hide--line' : '')
      }, this.renderChildren()) : null, !this.isGroupTopPosition() && _react.default.createElement("div", {
        className: "group--footer"
      }, this.renderGroup(this.getGroupPositionClass())));
    }
  }]);

  return Group;
}(_react.PureComponent)) || _class;

_defineProperty(Group, "propTypes", {
  isForDrag: _propTypes.default.bool,
  //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
  treeNodesCnt: _propTypes.default.number,
  conjunctionOptions: _propTypes.default.object.isRequired,
  allowFurtherNesting: _propTypes.default.bool.isRequired,
  isRoot: _propTypes.default.bool.isRequired,
  not: _propTypes.default.bool,
  selectedConjunction: _propTypes.default.string,
  config: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  path: _propTypes.default.instanceOf(_immutable.default.List),
  onDragStart: _propTypes.default.func,
  children1: _propTypes.default.instanceOf(_immutable.default.OrderedMap),
  //actions
  addRule: _propTypes.default.func.isRequired,
  addGroup: _propTypes.default.func.isRequired,
  removeSelf: _propTypes.default.func.isRequired,
  setConjunction: _propTypes.default.func.isRequired,
  setNot: _propTypes.default.func.isRequired,
  actions: _propTypes.default.object.isRequired,
  //connected:
  dragging: _propTypes.default.object //{id, x, y, w, h}

});

var _default = Group;
exports.default = _default;