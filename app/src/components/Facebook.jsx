import React,{Component} from 'react';
// import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
// import Button from '@material-ui/core/Button';
// import { FacebookLoginButton } from "react-social-login-buttons";

class Facebook extends Component {

  state ={
    isLoggedIn : false,
    userId:'',
    name:'',
    email:'',
    picture: '',
    accessToken: '',
    data_access_expiration_time: 0,
    expiresIn: 0,
    reauthorize_required_in: 0,
    signedRequest: ''

  }

  responseFacebook = (response) => {
    if (response.status !== undefined) {
      this.setState({
        isLoggedIn:true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        accessToken: response.accessToken,
        data_access_expiration_time: response.data_access_expiration_time,
        expiresIn: response.expiresIn,
        reauthorize_required_in: response.reauthorize_required_in,
        signedRequest: response.signedRequest
      })
    }
  }

  componentClicked = () => {
    console.log('click');
  }

  render() {
    let fbContent = '';

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} title={this.state.name} alt={this.state.name}/>
          <h2>Bem vindo {this.state.name}!</h2>
          <h2>Email: {this.state.email}!</h2>
          <h2>Id: {this.state.userID}!</h2>
          {this.state}
        </div>
      )
    } else {
      fbContent = (<FacebookLogin
        appId="423811118180758"
        autoLoad={true}
        fields="name,email,picture"
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

export default (Facebook);