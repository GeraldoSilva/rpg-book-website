import React from 'react';
import PropTypes from 'prop-types';
import MenuAppBar from './MenuAppBar';

const Header = ({appState }) => (
  <MenuAppBar appState={appState}/>
);

Header.propTypes = {
  logged: PropTypes.bool
};


export default Header;
