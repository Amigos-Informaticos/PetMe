import React from 'react';
import {useForm} from '../hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';
import './FormularioRegistro.css';

const initialForm = {
    email: '',
    password: '',
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    sexo: '',
    fecha_nacimiento: ''
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

const validarNombre = (nombre = '') => {
    const regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let mensajeError = null;
    if(!nombre.trim()) {
        mensajeError = "El campo nombre es requerido"
    } else if (!regexNombre.test(nombre)) {
        mensajeError = "El campo nombre solo acepta letras y espacios en blanco";
    }
    return mensajeError;
}

const validarFormulario = (formulario) => {
    const errores = {};
    if(validarCorreo(formulario.email)) {
        errores.email = validarCorreo(formulario.email);
    }
    if(validarNombre(formulario.nombre)) {
        errores.nombre = validarCorreo(formulario.nombre);
    }
    return errores;
}

const FormularioRegistro = () => {
    const {form, error, cargando, respuesta, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validarFormulario, 'adoptantes');
    
    return (
        <div className="form-container">
            <header className="header-signup">
                <h2>Registrarse</h2>
            </header>
            <form onSubmit={handleSubmit} className="form-signup">
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" className = "input" placeholder="Escribe tu correo electronico" onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" className = "input" placeholder="Escribe tu contraseña" onBlur={handleBlur} onChange={handleChange} value={form.password} required/>
                <label htmlFor="nombres">Nombres</label>
                <input type="text" name="nombres" className="input" placeholder="Escribe tu nombre(s)" onBlur={handleBlur} onChange={handleChange} value={form.nombres} required/>
                <label htmlFor="apellido_paterno">Apellido paterno</label>
                <label htmlFor="apellido_materno">Apellido materno</label>
                <input type="text" name="apellido_paterno" className="input col-1" placeholder="Escribe tu apellido paterno" onBlur={handleBlur} onChange={handleChange} value={form.apellido_paterno}/>
                <input type="text" name="apellido_materno" className="input col-1" placeholder="Escribe tu apellido materno" onBlur={handleBlur} onChange={handleChange} value={form.apellido_materno}/>
                <label htmlFor="sexo">Sexo</label>
                <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                <div className="radio-container" onChange={handleChange}>
                    <label htmlFor="sexo" className="content-input">Hombre: <input type="radio" className="radio" name="sexo" value={form.sexo} onChange={handleChange}/><li></li></label>
                    <label htmlFor="sexo" className="content-input">Mujer:<input type="radio" className="radio" name="sexo" value={form.sexo} onChange={handleChange}/><li></li></label>
                </div>
                <input type="date" name="fecha_nacimiento" className="input" value={form.fecha_nacimiento} onChange={handleChange}/>
                <div className="button-container">
                    <button type="submit" value="Registrarse" className="button-signup">Registrarse</button>
                </div>
            </form>            
            {cargando && <Loader />}
            {respuesta && <Message msg={error} backgroundColor = "#198754" />}
            
        </div>
    )
}

export default FormularioRegistro
