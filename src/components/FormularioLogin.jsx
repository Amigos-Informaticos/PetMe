import React, { useContext, useEffect } from 'react';
import {useForm} from '../hooks/useForm';
import { Loader } from './Loader';
import {Redirect} from 'react-router-dom';
import './FormularioLogin.css';
import { Link } from 'react-router-dom';
import { codeMessage } from '../helpers/CodeMessage';
import Validator from '../helpers/Validators';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';
import useSwal from '../hooks/useSwal';

const initialForm = {    
    email:'',
    password:'',
}

const validador = new Validator();

const validarFormulario = (formulario) => {
    const errores = {};
    if(validador.validarCorreo(formulario.email)) {
        errores.email = validador.validarCorreo(formulario.email);
    }
    if(validador.validarContrasenia(formulario.password)) {
        errores.password = validador.validarContrasenia(formulario.password);
    }
    return errores;
}

const FormularioLogin = () => {
    const {form, error, loading, response, statusCode, handleChange, handleBlur, handleSubmit, bodyResponse} = useForm(initialForm, validarFormulario, 'login');            
    const {setStatusCode} =  useSwal('login');
    const {auth, isAuth, signin} = useContext(AuthContext);    
    useEffect(() => {
        if(response) {            
            if(statusCode >= 200 && statusCode < 400) {
                if(statusCode === 200) {                                                            
                    signin(bodyResponse.id, bodyResponse.token);                    
                    isAuth();
                    setStatusCode(statusCode);
                    return(<Redirect to="/"/>);
                }
                setStatusCode(statusCode);
            } else {
                Swal.fire({
                    icon: 'info',
                    title:codeMessage.login[statusCode]
                });
            }            
        }
    }, [response, setStatusCode, statusCode, isAuth, signin]);
    return (
        <>
        {auth?
        <Redirect to="/"/>:
        <div className="form-container">
            <header className="header-login">
                <h2>Iniciar sesión</h2>
            </header>
            
            <form onSubmit={handleSubmit} className="form-login">
                <p className="row">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" name="email" className = "input" placeholder="Escribe tu correo electronico" pattern={validador.regexCorreo.toString().replaceAll('/', '')} onBlur={handleBlur} onChange={handleChange} value={form.email} required/>          
                    {error.email && <em><small>{error.email}</small></em>}
                </p>
                <p className="row">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" className="input" placeholder="Escribe tu contraseña" pattern={validador.regexContrasenia.toString().replaceAll('/', '')} onBlur={handleBlur} onChange={handleChange} value={form.password} required/>
                    {error.password && <em><small>{error.password}</small></em>}
                </p>
                <p className="row center">
                    <button type="submit" value="IniciarSesion" className="button-signup">Iniciar sesión</button>                    
                </p>
                <p className="row center">¿No tienes una cuenta? <Link to="/signup" className="link-signup">Registrate</Link></p>
            </form>
            {loading && <Loader />}                        
        </div>}        
        </>
    );
}

export default FormularioLogin;
