import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';

const MenuLateral = () => {
    return (
        <aside className="panel aside-1 is-active">
            <nav className="nav-menu">
                <Link>Opcion 1</Link>
                <Link>Opcion 2</Link>
                <Link>Opcion 3</Link>
                <Link>Opcion 4</Link>
                <Link>Opcion 5</Link>
            </nav>                        
        </aside>
    )
}

export default MenuLateral
