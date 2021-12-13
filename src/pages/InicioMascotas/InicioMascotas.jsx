import React, { useEffect, useState } from 'react';
import CabeceraMascotas from '../../components/CabeceraMascotas/CabeceraMascotas';
import ContenidoMascotas from '../../components/ContenidoMascotas/ContenidoMascotas';
import useFetch from '../../hooks/useFetch';
import './InicioMascotas.css';

const initialMascotas = [];

const InicioMascotas = ({layoutPosition}) => {    
    const [mascotas, setMascotas] = useState(initialMascotas);
    const {data, error, loading, handleUrl} = useFetch('https://amigosinformaticos.ddns.net:42070/mascotas');
    useEffect(() => {
        if(data){
            setMascotas(data.mascotas);
        } else {
            setMascotas([]);
        }
    }, [data]);
    return (
        <article className={`inicio-mascotas ${layoutPosition}`}>            
            <CabeceraMascotas layoutPosition="cabecera" titulo="Mascotas" mascotas={mascotas} handleMascotas={setMascotas} handleUrl={handleUrl}/>
            <ContenidoMascotas layoutPosition="contenido" mascotas={mascotas} handleMascotas={setMascotas} loading={loading}/>
        </article>
    );
}

export default InicioMascotas;
