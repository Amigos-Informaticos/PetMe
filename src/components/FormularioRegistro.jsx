import React, { useEffect } from 'react';
import {useForm} from '../hooks/useForm';
import { Loader } from './Loader';
import { Message } from './Message';
import { codeMessage } from '../helpers/CodeMessage';
import './FormularioRegistro.css';
import Validator from '../helpers/Validators';
import Swal from 'sweetalert2';

const initialForm = {
    email: '',
    password: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    sexo: '',
    fecha_nacimiento: ''
}

const validarFormulario = (formulario) => {
    const errores = {};
    const validador = new Validator();    
    if(validador.validarCorreo(formulario.email)) {
        errores.email = validador.validarCorreo(formulario.email);
    }
    if(validador.validarNombre(formulario.nombre)) {
        errores.nombre = validador.validarNombre(formulario.nombre);
    }
    if(validador.validarContrasenia(formulario.password)){
        errores.password = validador.validarContrasenia(formulario.password);
    }

    if(validador.validarApellidoPaterno(formulario.apellido_paterno)) {
        errores.apellido_paterno = validador.validarApellidoPaterno(formulario.apellido_paterno);
    }
    if(validador.validarApellidoMaterno(formulario.apellido_materno)) {
        errores.apellido_materno = validador.validarApellidoMaterno(formulario.apellido_materno);
    }
    return errores;
}

const FormularioRegistro = () => {
    const {form, error, loading, statusCode,response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validarFormulario, 'adoptantes');
    let fechaActual = new Date();    
    useEffect(() => {
        if(response) {
            if(statusCode >= 200 && statusCode < 400) {
                Swal.fire({
                    icon:'success',
                    title:codeMessage.signup[statusCode]
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title:codeMessage.signup[statusCode]
                });
            }            
        }
    }, [response]);


    return (
        <div className="form-container">
            <header className="header-signup">
                <h2>Registrarse</h2>
            </header>
            <form onSubmit={handleSubmit} className="form-signup">
                <div className="row email">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" name="email" className = "input" placeholder="Escribe tu correo electronico" onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
                    {error.email && <em><small>{error.email}</small></em>}
                </div>
                <div className="row password">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" className = "input" placeholder="Escribe tu contraseña" onBlur={handleBlur} onChange={handleChange} value={form.password} minLength="8" maxLength="40" required/>
                    {error.password && <em><small>{error.password}</small></em>}
                </div>
                <div className="row nombre">
                    <label htmlFor="nombre">Nombres</label>
                    <input type="text" name="nombre" className="input" placeholder="Escribe tu nombre(s)" onBlur={handleBlur} onChange={handleChange} value={form.nombre} pattern ="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" minLength="1" maxLength="40" required/>
                    {error.nombre && <em><small>{error.nombre}</small></em>}
                </div>
                <div className="row apellido-paterno">
                    <label htmlFor="apellido_paterno">Apellido paterno</label>
                    <input type="text" name="apellido_paterno" className="input" placeholder="Escribe tu apellido paterno" onBlur={handleBlur} onChange={handleChange} value={form.apellido_paterno}/>
                    {error.apellido_paterno && <em><small>{error.apellido_paterno}</small></em>}
                </div>
                <div className="row apellido-materno">
                    <label htmlFor="apellido_materno">Apellido materno</label>
                    <input type="text" name="apellido_materno" className="input" placeholder="Escribe tu apellido materno" onBlur={handleBlur} onChange={handleChange} value={form.apellido_materno}/>
                    {error.apellido_materno && <em><small>{error.apellido_materno}</small></em>}
                </div>
                <div className="row fecha-nacimiento">
                    <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                    {/* TODO: Método para convertir la fecha a un formato que acepte el atributo max  */}
                    <input max={`${fechaActual.getFullYear()-18}-${fechaActual.getMonth()+1}-${fechaActual.getDate()}`} type="date" name="fecha_nacimiento" className="input" value={form.fecha_nacimiento} onChange={handleChange}/>
                    {error.fecha_nacimiento && <em><small>{error.fecha_nacimiento}</small></em>}
                </div>
                <div className="row sexo">
                    <label htmlFor="sexo">Sexo</label>
                    <div className="radio-container">
                        <label htmlFor="sexo" className="content-input">Hombre: <input type="radio" className="radio" name="sexo" checked = {form.sexo === '1'} value="1" onChange={handleChange}/></label>
                        <label htmlFor="sexo" className="content-input">Mujer:<input type="radio" className="radio" name="sexo" checked = {form.sexo === '0'} value="0" onChange={handleChange}/></label>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" value="Registrarse" className="button-signup">Registrarse</button>
                </div>
            </form>            
            {loading && <Loader />}            
            
        </div>
    )
}

export default FormularioRegistro;
