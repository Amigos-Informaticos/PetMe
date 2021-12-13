import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'
import AuthContext from '../context/AuthContext';


const RutaPrivada = ({children, ...rest}) => {
    let {auth, isAuth} = useContext(AuthContext);
    useEffect(() => {
        isAuth();
    }, []);

    return (
    <Route {...rest}>{auth?children:<Redirect to="/login"/>}</Route>
    );
}

RutaPrivada.propTypes = {
    children: PropTypes.element.isRequired
}

export default RutaPrivada;
