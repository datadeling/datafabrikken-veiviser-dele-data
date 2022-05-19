import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export const Container = ({ width, children }) => (
  <SC.Container $width={width}>{children}</SC.Container>
  );

Container.propTypes = {
  width: PropTypes.any,
  children: PropTypes.array,
};

Container.defaultProps = {
  width: 700,
  children: [],
};

export default Container;
