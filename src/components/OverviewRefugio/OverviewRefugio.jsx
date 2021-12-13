import React from 'react';
import PropTypes from 'prop-types';
import './OverviewRefugio.css';

const OverviewRefugio = ({id_refugio, titulo, direccion, estado, localidad, telefono, handleClickOverview}) => {
    return (
        <article data-id={id_refugio} className="refugio-item carta">
            <section className="detalles-refugio" onClick={(event)=>{handleClickOverview(event, id_refugio)}}>
                <h3>{titulo}</h3>
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

OverviewRefugio.propTypes = {
    titulo: PropTypes.string.isRequired,
    direccion: PropTypes.string,
    estado: PropTypes.string,
    localidad: PropTypes.string,
    telefono: PropTypes.string
}

export default OverviewRefugio;
