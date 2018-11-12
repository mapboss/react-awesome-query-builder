"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eqArrSet = exports.eqSet = exports.BUILT_IN_PLACEMENTS = exports.truncateString = exports.calcTextWidth = exports.bindActionCreators = exports.defaultValue = void 0;

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RegExp.quote = function (str) {
//     return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
// };
var defaultValue = function defaultValue(value, _default) {
  return typeof value === "undefined" ? _default || undefined : value;
};

exports.defaultValue = defaultValue;

var bindActionCreators = function bindActionCreators(actionCreators, config, dispatch) {
  return (0, _mapValues.default)(actionCreators, function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return dispatch(actionCreator.apply(void 0, [config].concat(args)));
    };
  });
};

exports.bindActionCreators = bindActionCreators;

var calcTextWidth = function calcTextWidth(str, font) {
  var f = font || '12px';
  var div = document.createElement("div");
  div.innerHTML = str;
  var css = {
    'position': 'absolute',
    'float': 'left',
    'white-space': 'nowrap',
    'visibility': 'hidden',
    'font': f
  };

  for (var k in css) {
    div.style[k] = css[k];
  }

  div = document.body.appendChild(div);
  var w = div.offsetWidth;
  document.body.removeChild(div);
  return w;
};

exports.calcTextWidth = calcTextWidth;

var truncateString = function truncateString(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }

  var subString = str.substr(0, n - 1);
  return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "...";
};

exports.truncateString = truncateString;
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
}; //Do sets have same values?

exports.BUILT_IN_PLACEMENTS = BUILT_IN_PLACEMENTS;

var eqSet = function eqSet(as, bs) {
  if (as.size !== bs.size) return false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = as[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var a = _step.value;
      if (!bs.has(a)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}; //Do arrays have same values?


exports.eqSet = eqSet;

var eqArrSet = function eqArrSet(arr1, arr2) {
  return eqSet(new Set(arr1), new Set(arr2));
};

exports.eqArrSet = eqArrSet;