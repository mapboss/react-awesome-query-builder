import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import queryString from '../utils/queryString';
import Immutable from 'immutable';
var stringify = require('json-stringify-safe');

export default class Preview extends PureComponent {
  static propTypes = {
    config: PropTypes.object.isRequired,
    tree: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  

  render() {
    return this.props.children(queryString(this.props.tree, this.props.config));
  }
}
