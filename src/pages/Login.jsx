/* eslint-disable react/prop-types */
import React from 'react';
import FormularioLogin from '../components/FormularioLogin';
import './Login.css';

const Login = ({layoutPosition}) => (
  <>
    <article className={`${layoutPosition} login`}>
      <FormularioLogin />

    </article>
  </>
);

export default Login;
