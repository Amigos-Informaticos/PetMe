import React from 'react';
import {NavLink} from 'react-router-dom';
import logoCabecera from '../assets/dog_bone.png';
import HamburgerButton from './HamburgerButton';
import './MenuCabecera.css';

const MenuCabecera = () => (
  <>    
    <header className = "header">
    <HamburgerButton panel=".panel" hamburgerButton=".hamburger-button" panelOption=".panel-options"/>
      <img src={logoCabecera} alt="hueso de perro"/>
      <nav className="option-group">
        <NavLink exact className="option" activeClassName="header-link-active" to="/login">Iniciar sesión</NavLink>
        <NavLink exact className="option" activeClassName="header-link-active" to="/">Inicio</NavLink>
      </nav>
    </header>
  </>
);

export default MenuCabecera;
