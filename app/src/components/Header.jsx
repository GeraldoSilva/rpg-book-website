import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuAppBar from './MenuAppBar';



class Header extends Component {

    render() {
      const { appState } = this.props;
      return (
        <MenuAppBar appState={appState} />
      );
    }

}

Header.propTypes = {
  appState: PropTypes.object.isRequired
};


export default Header;
