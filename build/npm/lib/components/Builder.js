"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _Item = _interopRequireDefault(require("../components/Item"));

var _SortableContainer = _interopRequireDefault(require("./containers/SortableContainer"));

var _treeUtils = require("../utils/treeUtils");

var _class, _temp, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Builder = (_temp = _class = (0, _SortableContainer.default)(_class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Builder, _PureComponent);

  function Builder(props) {
    var _this;

    _classCallCheck(this, Builder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Builder).call(this, props));

    _this._updPath(props);

    return _this;
  } // componentWillReceiveProps (props) {
  //   let prevProps = this.props;
  //   this._updPath(props);
  // }


  _createClass(Builder, [{
    key: "_updPath",
    value: function _updPath(props) {
      var id = props.tree.get('id');
      this.path = _immutable.default.List.of(id);
    }
  }, {
    key: "render",
    value: function render() {
      var treeNodesCnt = (0, _treeUtils.getTotalNodesCountInTree)(this.props.tree);
      var id = this.props.tree.get('id');
      return _react.default.createElement(_Item.default, {
        key: id,
        id: id,
        path: this.path,
        type: this.props.tree.get('type'),
        properties: this.props.tree.get('properties'),
        config: this.props.config,
        actions: this.props.actions,
        children1: this.props.tree.get('children1') //tree={this.props.tree}
        ,
        treeNodesCnt: treeNodesCnt,
        onDragStart: this.props.onDragStart
      });
    }
  }]);

  return Builder;
}(_react.PureComponent)) || _class2, _defineProperty(_class, "propTypes", {
  tree: _propTypes.default.instanceOf(_immutable.default.Map).isRequired,
  config: _propTypes.default.object.isRequired,
  actions: _propTypes.default.object.isRequired,
  onDragStart: _propTypes.default.func
}), _temp);
exports.default = Builder;