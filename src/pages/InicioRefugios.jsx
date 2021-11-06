import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InicioRefugio.css';
import ContenidoRefugios from '../components/ContenidoRefugios/ContenidoRefugios';
import CabeceraRefugios from '../components/CabeceraRefugios/CabeceraRefugios';
import useFetch from '../hooks/useFetch';
import PaginadorRefugios from '../components/PaginadorRefugios/PaginadorRefugios';
import { useHistory, useLocation } from 'react-router';

const initialRefugios = [];

const getNumeroPagina = (pagina) => {
    let valor = 0;
    if(pagina) {
        valor = parseInt(pagina);
    }
    return valor;
}

const URL = 'https://amigosinformaticos.ddns.net:42070/refugios';

const InicioRefugios = ({layoutPosition}) => {
    const history = useHistory();
    let {search} = useLocation();
    let query = new URLSearchParams(search);
    let pagina = getNumeroPagina(query.get('pagina'));
    const [refugios, setRefugios] = useState(initialRefugios);
    const {data, error, loading, handleUrl} = useFetch('https://amigosinformaticos.ddns.net:42070/refugios?pagina=0');
    
    const handleAnterior = (event) => {
        if(pagina > 0){
            history.push({search: `?pagina=${pagina - 1}`});
        }
    }
    
    const handleSiguiente = (event) => {
        history.push({search: `?pagina=${pagina + 1}`});
    
    }

    useEffect(()=>{
        console.log(URL+search);              
        
        handleUrl(URL+search);
    }, [pagina]);
    
    useEffect(() => {
        if(data){
            setRefugios(data.refugios);
        } else {
            setRefugios([]);
        }
    }, [data]);
    return (
        <article className={`inicio-refugios ${layoutPosition}`}>            
            <CabeceraRefugios layoutPosition="cabecera" titulo="Refugios" refugios={refugios} handleRefugios={setRefugios} handleUrl={handleUrl}/>
            <ContenidoRefugios layoutPosition="contenido" refugios={refugios} handleRefugios={setRefugios} loading={loading}/>
            <PaginadorRefugios handleAnterior={handleAnterior} handleSiguiente={handleSiguiente}/>
        </article>
    );
}

InicioRefugios.propTypes = {
    layoutPosition: PropTypes.string,
}

export default InicioRefugios;
