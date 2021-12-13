/* eslint-disable react/prop-types */
import React from 'react';
import FormularioRegistro from '../components/FormularioRegistro';
import './Registro.css';

const Registro = ({layoutPosition}) => (
  <>
    <article className={`${layoutPosition} registro`}>
      <FormularioRegistro />

    </article>
  </>
);

export default Registro;