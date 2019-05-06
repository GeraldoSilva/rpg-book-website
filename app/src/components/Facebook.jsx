import React,{Component} from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux'
import userActions from '../store/userActions'

class Facebook extends Component {
  
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.appState = this.props.appState;

  }

  responseFacebook = (response) => {

    if (response.userID !== undefined) {
      this.props.dispatch(userActions.setIsLogged(true));
      this.props.dispatch(userActions.setUser(response));
      this.props.handlerLogged(response)
    }
  }

  componentClicked = () => {
    console.log('click');
  }

  
  render() {
    let fbContent = '';
    const { appState } = this.props;
    
    if (appState.isLoggedIn) {
      
      fbContent = (
        <div>
          <img src={appState.user.picture} title={appState.user.name} alt={appState.user.name}/>
          <h2>Bem vindo {appState.user.name}!</h2>
        </div>
      )
    } else {
      fbContent = (<FacebookLogin
        appId="423811118180758"
        autoLoad={true}
        fields="name,email,picture"
        textButton={this.title}
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        //scope="public_profile,user_friends"
      />);
    }

    return (
      <React.Fragment>{fbContent}</React.Fragment>
    );
  }
}

Facebook.propTypes = {
  appState: PropTypes.object.isRequired,
  handlerLogged: PropTypes.func,
};

export default connect(store => ({ isLogged: store.isLogged, user: store.user }))(Facebook);