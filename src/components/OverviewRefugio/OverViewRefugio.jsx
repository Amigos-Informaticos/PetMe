import React from 'react';
import PropTypes from 'prop-types';
import './OverviewRefugio.css';

const OverViewRefugio = ({titulo, direccion, estado, localidad, telefono}) => {
    return (
        <article className="refugio-item carta">
            <section className="detalles-refugio">
                <span>{titulo}</span>
                <b>Dirección</b><address>{direccion}</address>
                <b>Ubicación</b><span>{`${estado}, ${localidad}`}</span>
                <b>Telefono</b><span>{telefono}</span>                                                        
            </section>
            <section className="imagen-refugio">
                <img src="../assets/dog_bone.png" alt="" width="190" height="200"/>
            </section>                
        </article>
    )
}

OverViewRefugio.propTypes = {
    titulo: PropTypes.string.isRequired,
    direccion: PropTypes.string, 
    estado: PropTypes.string,
    localidad: PropTypes.string,
    telefono: PropTypes.string
}

export default OverViewRefugio;
