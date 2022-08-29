import React from 'react';
import PropTypes from 'prop-types';

export function Menu({ children }) {
  return <div>{children}</div>;
}

Menu.propTypes = {
  children: PropTypes.element,
};

Menu.defaultProps = {
  children: [],
};

export default Menu;
