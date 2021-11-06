import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './CabeceraRefugios.css';
import PropTypes from 'prop-types';
import SelectAnidados from '../SelectAnidados';
import AuthContext from '../../context/AuthContext';
import plusLogo from '../../assets/plus.png';
import searchLogo from '../../assets/search.png';

//TODO Agregar refugios y handleRefugios a las PropTypes
const CabeceraRefugios = ({layoutPosition, titulo, refugios, handleRefugios, handleUrl}) => {
    const [busqueda, setBusqueda] = useState('');
    const {auth} = useContext(AuthContext);        
    const handleChangeBusqueda = (event) => {
        setBusqueda(event.target.value);            
    }

    const buscarRefugios = ({target}) => {
        if(target.value) {
            handleUrl(`https://amigosinformaticos.ddns.net:42070/refugios?nombre=${busqueda}`);
            handleRefugios(refugios);
        } else {
            handleRefugios([]);
        }
    }
    
    return (
        <header className={`${layoutPosition} cabecera-refugios`}>                
                <h2>{titulo || 'Refugios'}</h2>                
                {auth && <Link to="/registrar-refugio" className="input button-registrar-refugios">Registrar refugio <img src={plusLogo} alt="plus" width="25px" height="25px" /></Link>}                                            
                <nav className="input buscador-refugios">
                    <input className="input-buscador-refugios" type="search" name="search-refugios" id="search-refugios" placeholder="Buscar refugio" value={busqueda} onChange={handleChangeBusqueda}/>
                    <img src={searchLogo} alt="plus" width="25px" height="25px" onClick={buscarRefugios}/>
                </nav>            
                <nav className={`filtros-refugios`}>
                    <SelectAnidados />             
                </nav>
        </header>
    );
}

CabeceraRefugios.propTypes = {
    layoutPosition: PropTypes.string,
    titulo: PropTypes.string,
    refugios: PropTypes.array,
    handleRefugios: PropTypes.func
}

export default CabeceraRefugios;
