import React from 'react';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlerLogged = this.handlerLogged.bind(this);

    this.state = {
      // user: {
      //   userID:0,
      //   name:'',
      //   data_access_expiration_time:0,
      //   email:'',
      //   picture:''
      // },
      toggle: true,
      list: ['a', 'b', 'c'],
    };
  }

  state = {
    isLoggedIn: false,
    user:{}
  };

  handlerLogged(data) {
    let user = Object.assign({}, this.state.user);    //creating copy of object
    user.accessToken = data.accessToken;
    user.data_access_expiration_time = data.data_access_expiration_time;
    user.email = data.email;
    user.userID = data.userID;
    user.picture = data.picture.data.url;
    // expiresIn: 5816
    // id: "10156631200097885"
    // name: "Geraldo Aps"
    // picture: { data: { … } }
    // reauthorize_required_in: 7776000
    // signedRequest: "mHGZvqjfwqziabLOZOnUS_D9SerpFyeIYpefcg-49wE.eyJ1c2VyX2lkIjoiMTAxNTY2MzEyMDAwOTc4ODUiLCJjb2RlIjoiQVFBMUtFR3JveVBJb1BKb0RQTlhCWlJnSHRpQ0hHcnpvLWV3NG5pRHI4NEEwTWZTZl9oYzhtUkpuRFFEVWktelk2STZSc2tOV2dLc1BGUUVGVEFiNVVUWFB2eG9WTXdLWjZMTDFEejQ2a1JGN1l1RzhWbTVCejVUQnljMjE5SDVXdXFZaGJVZVVialZzNDF5blRBempETGVlV2xBd2Fxc1ZSSUpFUnc1UW5MQ1FXclAtek5GWEpPUEM1S0hpRHFUQWs4R0NxYVFlUkJJbmR4ODV1Y0lfTDlkZ1VyR0ZzMHJJYm1ZaHVIRl9PWU1XbTBOd1hoTzBKUTV0MDFyZDZTZXdkS2xwc1ZkMGZpSEZXMmpFNzR3NFZOQkVGNHM1NGpJZl9KRUFBQ0tWR1NGLW9oVzJaU292RjFlWUZDQVgxbDhHUjl0VWV1ZnYwaG93c3BjZHpPUFdTbXoiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU1NzAzMDE4NH0"
    
    this.setState({ user: data });
    this.setState({ isLoggedIn: true });
    
    window.location.href = '/';

  }
  
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
            <Route path="/" exact={true} render={() => <Home appState={this.state} handlerLogged={this.handlerLogged} />} />/>
            <Route path="/cadastro" exact={true} render={() => <Cadastro appState={this.state} handlerLogged={this.handlerLogged}/>} />
            <Route path="/login" exact={true} render={() => <Login appState={this.state} handlerLogged={this.handlerLogged}/>} />
          </BrowserRouter>
      </React.Fragment>
      );
  }
}

export default App;
