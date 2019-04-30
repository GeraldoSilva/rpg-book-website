import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Footer.propTypes = {
  logged: PropTypes.bool
};

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '10px',
height: '40px',
width: '100%',
}

function Footer({ children }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
              { children }
              <Typography>All right reserved rpg-book</Typography>
          </div>
         
      </div>
  )
}

export default Footer;
