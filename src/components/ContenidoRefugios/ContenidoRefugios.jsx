import React from 'react';
import { Loader } from '../Loader';
import { Message } from '../Message';
import OverViewRefugio from '../OverviewRefugio/OverViewRefugio';
import './ContenidoRefugios.css';

const ContenidoRefugios = ({layoutPosition, refugios, handleRefugios, loading}) => {    
    return (
        <section className={`${layoutPosition} contenido-refugios`}>             
            <div className={`grid-refugios`}>
                {loading ? 
                <Loader className="span-all"/> :
                refugios.length !== 0 ? refugios.map((refugio, indice) => <OverViewRefugio key={`overview-refugio-${indice}`} titulo={refugio.nombre} direccion={refugio.direccion} imagen={refugio.imagen} estado={refugio.estado} localidad={refugio.localidad} telefono={refugio.telefono}/>)
                : <Message className="span-all" span="1/-1" msg="No se encontraron refugios"/>
                }
            </div>            
        </section>
    );
}

export default ContenidoRefugios;
