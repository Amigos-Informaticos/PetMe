import React from 'react';
import PropTypes from 'prop-types';

import './Registro.css';
import FormularioRegistro from '../components/FormularioRegistro';

const Registro = ({layoutPosition}) => (
  <>
    <article className={`${layoutPosition} registro`}>
      <FormularioRegistro />
    </article>
  </>
);

Registro.propTypes = {
  layoutPosition: PropTypes.string
};

export default Registro;