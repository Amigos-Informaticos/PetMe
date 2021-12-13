import React from 'react';
import PropTypes from 'prop-types';
import FormularioLogin from '../components/FormularioLogin';
import './Login.css';

const Login = ({layoutPosition}) => (
  <>
    <article className={`${layoutPosition} login`}>
      <FormularioLogin />

    </article>
  </>
);

Login.propTypes = {
  layoutPosition: PropTypes.string,
};

export default Login;
