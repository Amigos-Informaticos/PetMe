import React from 'react';
import {useForm} from '../hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';
import './FormularioLogin.css';
import { Link } from 'react-router-dom';

const initialForm = {    
    email:'',
    password:'',
}

const validarCorreo = (email = '') => {
    const regexCorreo = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let mensajeError = null;
    if(!email.trim()) {
        mensajeError = 'El campo email es requerido';
    } else if (!regexCorreo.test(email)) {
        mensajeError = 'Formato de email incorrecto';
    }
    return mensajeError;
}

const validarFormulario = (formulario) => {
    const errores = {};
    if(validarCorreo(formulario.email)) {
        errores.email = validarCorreo(formulario.email);
    }
    return errores;
}

const FormularioLogin = () => {
    const {form, error, cargando, respuesta, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validarFormulario, 'login');
    return (
        <div className="form-container">
            <header className="header-login">
                <h2>Iniciar sesión</h2>
            </header>
            <form onSubmit={handleSubmit} className="form-login">
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" className = "input" placeholder="Escribe tu correo electronico" onBlur={handleBlur} onChange={handleChange} value={form.email} required/>          
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" className="input" placeholder="Escribe tu contraseña" onBlur={handleBlur} onChange={handleChange} value={form.password} required/>                            
                <div className="button-container">
                    <button type="submit" value="IniciarSesion" className="button-signup">Iniciar sesión</button>
                    <p>¿No tienes una cuenta? <Link to="/signup" className="link-signup">Registrate</Link></p>
                </div>
            </form>
            {cargando && <Loader />}
            {respuesta && <Message msg="Enviado" backgroundColor = "#198754"/>}
            {!error}
        </div>
    )
}

export default FormularioLogin;
