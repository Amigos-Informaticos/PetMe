import React from 'react';
import PropTypes from 'prop-types';
import FormularioRefugioRegistro from '../components/FormularioRefugioRegistro/FormularioRefugioRegistro';
import './RegistroRefugio.css';

const RegistroRefugio = ({layoutPosition}) => {
    return (
        <article className={`${layoutPosition} refugio`}>
            <div className="form-container">
                <header>
                    <h2>Refugios</h2>
                </header>
                <FormularioRefugioRegistro />
            </div>
        </article>
    )
}

RegistroRefugio.propTypes = {
    layoutPosition: PropTypes.string
};

export default RegistroRefugio;
