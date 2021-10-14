import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';

const MenuLateral = () => {
    return (
        <aside className="panel aside-1">
            <nav className="nav-menu">
                <Link to="/">Perfil</Link>
                <Link to="/">Opcion 2</Link>
                <Link to="/">Opcion 3</Link>
                <Link to="/">Opcion 4</Link>
                <Link to="/">Opcion 5</Link>
            </nav>                        
        </aside>
    )
}

export default MenuLateral
