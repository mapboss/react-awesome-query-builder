"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveItem = exports.removeGroup = exports.addGroup = exports.removeRule = exports.addRule = exports.setTree = void 0;

var _uuid = _interopRequireDefault(require("../utils/uuid"));

var _treeUtils = require("../utils/treeUtils");

var _defaultUtils = require("../utils/defaultUtils");

var constants = _interopRequireWildcard(require("../constants"));

var _immutable = _interopRequireDefault(require("immutable"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasChildren = function hasChildren(tree, path) {
  return tree.getIn((0, _treeUtils.expandTreePath)(path, 'children1')).size > 0;
};
/**
 * @param {object} config
 * @param {Immutable.Map} tree
 */


var setTree = function setTree(config, tree) {
  return {
    type: constants.SET_TREE,
    tree: tree
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {object} properties
 */


exports.setTree = setTree;

var addRule = function addRule(config, path, properties) {
  return {
    type: constants.ADD_RULE,
    path: path,
    id: (0, _uuid.default)(),
    properties: (0, _defaultUtils.defaultRuleProperties)(config).merge(properties || {})
  };
}; // /**
//  * @param {object} config
//  * @param {Immutable.List} path
//  */
// export const removeRuleOld = (config, path) => {
//   return (dispatch, getState) => {
//     dispatch({
//       type: constants.REMOVE_RULE,
//       path: path,
//       config: config
//     });
//     const { tree } = getState();
//     const parentPath = path.slice(0, -1);
//     if (!hasChildren(tree, parentPath)) {
//       dispatch(addRule(config, parentPath));
//     }
//   };
// };

/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.addRule = addRule;

var removeRule = function removeRule(config, path) {
  return {
    type: constants.REMOVE_RULE,
    path: path,
    config: config
  };
}; // /**
//  * @param {object} config
//  * @param {Immutable.List} path
//  * @param {object} properties
//  */
// export const addGroupOld = (config, path, properties) => {
//   return (dispatch) => {
//     const groupUuid = uuid();
//     dispatch({
//       type: constants.ADD_GROUP,
//       path: path,
//       id: groupUuid,
//       properties: defaultGroupProperties(config).merge(properties || {}),
//       config: config
//     });
//     const groupPath = path.push(groupUuid);
//     dispatch(addRule(config, groupPath));
//     dispatch(addRule(config, groupPath));
//   };
// };

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {object} properties
 */


exports.removeRule = removeRule;

var addGroup = function addGroup(config, path, properties) {
  return {
    type: constants.ADD_NEW_GROUP,
    path: path,
    properties: (0, _defaultUtils.defaultGroupProperties)(config).merge(properties || {}),
    config: config
  };
}; // /**
//  * @param {object} config
//  * @param {Immutable.List} path
//  */
// export const removeGroupOld = (config, path) => {
//   return (dispatch, getState) => {
//     dispatch({
//       type: constants.REMOVE_GROUP,
//       path: path,
//       config: config
//     });
//     const { tree } = getState();
//     const parentPath = path.slice(0, -1);
//     if (!hasChildren(tree, parentPath)) {
//       dispatch(addRule(config, parentPath));
//     }
//   };
// };

/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.addGroup = addGroup;

var removeGroup = function removeGroup(config, path) {
  return {
    type: constants.REMOVE_GROUP,
    path: path,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Array} fromPath
 * @param {Array} toPath
 * @param {String} placement, see constants PLACEMENT_*
 */


exports.removeGroup = removeGroup;

var moveItem = function moveItem(config, fromPath, toPath, placement) {
  return {
    type: constants.MOVE_ITEM,
    fromPath: new _immutable.default.List(fromPath),
    toPath: new _immutable.default.List(toPath),
    placement: placement,
    config: config
  };
};

exports.moveItem = moveItem;