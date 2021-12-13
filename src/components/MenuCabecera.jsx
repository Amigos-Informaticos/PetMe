import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import logoCabecera from '../assets/dog_bone.png';
import AuthContext from '../context/AuthContext';
import HamburgerButton from './HamburgerButton';
import './MenuCabecera.css';

const MenuCabecera = () => {
  const {auth, signout} = useContext(AuthContext);
  return(
  <>    
    <header className = "header">
    <HamburgerButton panel=".panel" hamburgerButton=".hamburger-button" panelOption=".panel-options"/>
      <img src={logoCabecera} alt="hueso de perro"/>
      <nav className="option-group">
        {auth ? 
        <NavLink exact className="option" to="/" onClick={signout}>Cerrar sesión</NavLink>:        
        <NavLink exact className="option" activeClassName="header-link-active" to="/login">Iniciar sesión</NavLink> 
        }
        <NavLink exact className="option" activeClassName="header-link-active" to="/">Inicio</NavLink>
      </nav>
    </header>
  </>);
  
  };

export default MenuCabecera;
