import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export function Root({ children }) {
  return <SC.Root>{children}</SC.Root>;
}

Root.propTypes = {
  children: PropTypes.array,
};

Root.defaultProps = {
  children: [],
};

export default Root;
