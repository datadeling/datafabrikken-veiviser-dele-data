import React from 'react';
import PropTypes from 'prop-types';

export function Trigger({ children }) {
  return <div>{children}</div>;
}

Trigger.propTypes = {
  children: PropTypes.element,
};

Trigger.defaultProps = {
  children: [],
};

export default Trigger;
