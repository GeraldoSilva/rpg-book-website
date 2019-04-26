import React from 'react';
import Cadastro from './pages/Cadastro';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Link to="/entrar">entrar</Link>
       <Link to="/cadastro">cadastro</Link>
       <Route exact={true} path="/entrar" render={() => (
          <h1>Entrar</h1>
        )}/>
       <Route path="/cadastro" component={Cadastro}/>
      </div>
    </Router>
  );
}

export default App;
