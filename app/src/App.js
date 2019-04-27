import React from 'react';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
      list: ['a', 'b', 'c'],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <CssBaseline />
          <Header appState={this.state}/>
          <main>
            <Router>
              <Route path="/" component={Home} exact={true}/>
              <Route exact={true} path="/entrar" render={() => (
                <h1>Entrar</h1>
              )}/>
              <Route path="/cadastro" component={Cadastro}/>
              <Route path="/login"  render={()=> <Login parentState={this.state} />} />
            </Router>
          </main>
          <Footer/> 
        </div>
      </React.Fragment>
      );
  }
}

export default App;
