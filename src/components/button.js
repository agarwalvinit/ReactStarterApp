/**
*
* Button
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        id={this.props.id}
        value={this.props.value}
      >
        { React.Children.toArray(this.props.children) }
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  id: PropTypes.string,
};

export default Button;
