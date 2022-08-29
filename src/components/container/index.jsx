import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export function Container({ children }) {
  return <SC.Container>{children}</SC.Container>;
}

Container.propTypes = {
  children: PropTypes.any,
};

Container.defaultProps = {
  children: [],
};

export default Container;
