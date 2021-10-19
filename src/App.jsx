import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';
import MenuCabecera from './components/MenuCabecera';
import MenuLateral from './components/MenuLateral';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Inicio from './pages/Inicio';
import Refugio from './pages/Refugio';

function App() {  
  return (
    <div className="App">      
      <Router>
        <MenuCabecera />
        <MenuLateral />        
        <Switch>
          <Route exact path="/login"><Login layoutPosition="main"/></Route>
          <Route exact path="/signup"><Registro layoutPosition="main"></Registro></Route>
          <Route exact path="/refugio"><Refugio layoutPosition="main"></Refugio></Route>
          <Route exact path="/" component={Inicio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
