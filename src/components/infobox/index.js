import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export const InfoBox = ({ children }) => (
  <SC.InfoBox>{children}</SC.InfoBox>
  );

InfoBox.propTypes = {
  children: PropTypes.array,
};

InfoBox.defaultProps = {
  children: [],
};

export default InfoBox;
