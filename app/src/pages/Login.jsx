import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Facebook from '../components/Facebook';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width:360,
    height:450,
    margin: `auto`,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  background: {
    background: 'linear-gradient(180deg, rgba(164,226,255,1) 0%, rgba(0,183,255,0.8813900560224089) 100%)',
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
  },
  cardLogin: {
    position: 'absolute',
    top: '50%',
    height: '30%',
    marginTop: '-25%',
    display: 'flex', 
    flexFlow: 'row wrap', 
    justifyContent: 'space-between'
  }
});


class Login extends Component {
  constructor(props) {
    super(props);

    this.appState = this.props.appState;
  }

  handlerLogged(user) {
    this.props.handlerLogged(user)
  }
  
  state = {
    spacing: '16',
  };

  // componentDidMount() {
  //   //document.body.style = 'background: red;';
  // }

  // componentWillUnmount() {
  //   //document.body.style = 'background: blue;';
  // }


  render() {
    const { classes } = this.props;
    const { appState } = this.props;

    return (
      <div className={classes.background}>
        <Grid container className={classes.cardLogin} spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.root} spacing={16}> 
              <Facebook title="Entrar com Facebook" appState={appState} handlerLogged={this.handlerLogged.bind(this)}/> 
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  handlerLogged: PropTypes.func,
};


export default withStyles(styles)(Login);