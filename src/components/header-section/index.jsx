import React from 'react';
import PropTypes from 'prop-types';

import SC from './styled';

export function HeaderSection({ title, subTitle }) {
  return (
    <SC.HeaderSection>
      <SC.Container>
        <SC.Title>{title}</SC.Title>
        <SC.Subtitle>{subTitle}</SC.Subtitle>
      </SC.Container>
    </SC.HeaderSection>
  );
}

HeaderSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

HeaderSection.defaultProps = {
  title: "Kan datasettet deles?",
  subTitle: "Juridisk veileder for deling av data"
};

export default HeaderSection;
