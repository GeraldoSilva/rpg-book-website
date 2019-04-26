import React from 'react';
import PropTypes from 'prop-types';

const Cadastro = ({title }) => (
  <div>
    Cadastro
  </div>
);

Cadastro.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.bool,
  onValidSubmit:  PropTypes.func,
};

Cadastro.defaultProps = {
  title: 'Authentication',
  footer: false,
};

export default Cadastro;
