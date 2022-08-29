import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export function InfoBox({ children }) {
  return (
<SC.InfoBoxContainer>
    <SC.InfoBox>{children}</SC.InfoBox>
</SC.InfoBoxContainer>
  );
}

InfoBox.propTypes = {
  children: PropTypes.any,
};

InfoBox.defaultProps = {
  children: [],
};

export default InfoBox;
