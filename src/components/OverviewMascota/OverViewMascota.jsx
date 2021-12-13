import React from 'react';
import PropTypes from 'prop-types';
import './OverViewMascota.css';

const OverViewMascota = ({id_mascota, nombre, sexo, tamanio, edad, raza_aparente, peso, imagen, handleClickOverview}) => {
    return (
        <article data-id={id_mascota} className="mascota-item carta">
            <section className="detalles-mascota" onClick={(event)=>{handleClickOverview(event, id_mascota)}}>
                <h3>{nombre}</h3>
                <b>Raza aparente:</b><span>{raza_aparente}</span>
                <b>Edad:</b><span>{edad}</span>
                <b>Sexo:</b><span>{sexo}</span>
                <b>Tamaño:</b><span>{tamanio}</span>
                <b>Peso:</b><span>{peso}</span>                                                        
            </section>
            <section className="imagen-mascota">
                <img src={imagen} alt="" width="190" height="200"/>
            </section>
        </article>
    )
}

OverViewMascota.propTypes = {
    nombre: PropTypes.string.isRequired,
    sexo: PropTypes.string, 
    tamanio: PropTypes.string,
    edad: PropTypes.string,
    raza_aparente: PropTypes.string,
    peso: PropTypes.string,
    handleClickOverview: PropTypes.func
}

export default OverViewMascota;
