import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useSessionStorage from '../hooks/useSessionStorage';
import './MenuLateral.css';

const MenuLateral = () => {
    const {auth} = useContext(AuthContext);
    const {value:id, setValue:setId} = useSessionStorage('id');
     
    return (
        <aside className="panel aside-1">
            <nav className="nav-menu">
                {auth && <Link to={`/perfil/${id}`}>Mi perfil</Link>}                                
                <Link to="/refugios">Refugios</Link>
                <Link to="/mascotas">Mascotas</Link>
            </nav>                        
        </aside>
    )
}

export default MenuLateral;
