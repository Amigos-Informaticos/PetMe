import React from 'react'
import FormularioMascotaRegistro from '../../components/FormularioMascotaRegistro/FormularioMascotaRegistro'
import './RegistroAdoptable.css';

const RegistroAdoptable = ({layoutPosition}) => {
    return (
        <article className={`registro-adoptable ${layoutPosition}`}>
            <header className="cabecera-mascota-area">
                <h2>Registro de adoptable</h2>
            </header>
            <aside className="foto-mascota foto-mascota-area">
                <figure>
                    <img className="image" src="" alt=""/>
                    <button onClick="">Subir imagen</button>
                </figure>
            </aside>
            <FormularioMascotaRegistro layoutPosition="formulario-mascota-registro-area"/>
            
        </article>
    )
}

export default RegistroAdoptable;
