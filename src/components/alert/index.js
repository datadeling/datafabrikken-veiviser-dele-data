import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export const Alert = ({ children }) => (
  <SC.Alert>{children}</SC.Alert>
  );

Alert.propTypes = {
  children: PropTypes.array,
};

Alert.defaultProps = {
  children: [],
};

export default Alert;
