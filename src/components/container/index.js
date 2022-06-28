import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export const Container = ({ children }) => (
  <SC.Container>{children}</SC.Container>
  );

Container.propTypes = {
  children: PropTypes.array,
};

Container.defaultProps = {
  children: [],
};

export default Container;
