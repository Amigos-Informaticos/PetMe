import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';
import MenuCabecera from './components/MenuCabecera';
import MenuLateral from './components/MenuLateral';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Inicio from './pages/Inicio';
import RegistroRefugio from './pages/RegistroRefugio';
import { AuthProvider } from './context/AuthContext';
import RutaPrivada from './components/RutaPrivada';
import NotFound from './pages/NotFound';
import InicioRefugios from './pages/InicioRefugios';
import Perfil from './pages/Perfil/Perfil';
import DetallesRefugio from './pages/DetallesRefugio/DetallesRefugio';
import InicioMascotas from './pages/InicioMascotas/InicioMascotas';
import FormularioMascotaRegistro from './components/FormularioMascotaRegistro/FormularioMascotaRegistro';
import RegistroAdoptable from './pages/RegistroAdoptable/RegistroAdoptable';

function App() {
  const [menuLateral, setMenuLateral] = useState(false);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MenuCabecera setMenuLateral={setMenuLateral} menuLateral={menuLateral}/>
          {/*TODO corregir desmontado y montado de MenuLateral para que compruebe el id*/}
          {menuLateral && <MenuLateral />}
          <Switch>
            <Route exact path="/login"><Login layoutPosition="main"/></Route>
            <Route exact path="/signup"><Registro layoutPosition="main"></Registro></Route>
            <Route exact path="/refugios"><InicioRefugios layoutPosition="main"/></Route>
            <Route exact path="/mascotas"><InicioMascotas layoutPosition="main"/></Route>
            <RutaPrivada exact path="/registrar-refugio">
              <RegistroRefugio layoutPosition="main" />
            </RutaPrivada>
            <RutaPrivada exact path="/perfil/:id">
              <Perfil layoutPosition="main"/>
            </RutaPrivada>
            <Route exact path="/refugios/:id">
              <DetallesRefugio layoutPosition="main"/>
            </Route>
            <Route exact path="/mascotas/:id">
              <DetallesRefugio layoutPosition="main"/>
            </Route>
            <Route exact path="/dar-en-adopcion">
              <RegistroAdoptable layoutPosition="main" />            
            </Route>
            <Route exact path="/" component={Inicio}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
      </AuthProvider>      
    </div>
  );
}

export default App;
