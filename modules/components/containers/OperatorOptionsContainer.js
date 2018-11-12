import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import {getOperatorConfig} from "../../utils/configUtils";

export default (OperatorOptions) => {
  return class OperatorOptionsContainer extends PureComponent {
    static propTypes = {
      config: PropTypes.object.isRequired,
      operatorOptions: PropTypes.instanceOf(Immutable.Map).isRequired,
      selectedField: PropTypes.string.isRequired,
      selectedOperator: PropTypes.string.isRequired,
      //actions
      setOperatorOption: PropTypes.func.isRequired,
    };

    

    render() {
      if (!this.props.selectedOperator)
        return null;
      const operatorDefinitions = getOperatorConfig(this.props.config, this.props.selectedOperator, this.props.selectedField);
      if (typeof operatorDefinitions.options === 'undefined') {
        return null;
      }

      const { factory: optionsFactory, ...optionsProps } = operatorDefinitions.options;

      return (
        <OperatorOptions
            name={this.props.selectedOperator}
            config={this.props.config}
        >
          {optionsFactory(Object.assign({}, optionsProps, {
            config: this.props.config,
            field: this.props.selectedField,
            operator: this.props.selectedOperator,
            options: this.props.operatorOptions,
            setOption: this.props.setOperatorOption,
          }))}
        </OperatorOptions>
      );
    }
  };
};
