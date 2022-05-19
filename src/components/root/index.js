import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export const Root = ({ children }) => (
  <SC.Root>{children}</SC.Root>
  );

Root.propTypes = {
  children: PropTypes.array,
};

Root.defaultProps = {
  children: [],
};

export default Root;
