import React from 'react';
import PropTypes from 'prop-types';

const View = ({title }) => (
  <div>
    
  </div>
);

View.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.bool,
  onValidSubmit:  PropTypes.func,
};

View.defaultProps = {
  title: 'Authentication',
  footer: false,
};

export default View;
