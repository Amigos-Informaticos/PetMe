import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';
import SelectAnidados from '../SelectAnidados';
import './FormularioRefugioRegistro.css';
import Validator from '../../helpers/Validators';
import { Loader } from '../Loader';
import Swal from 'sweetalert2';
import { codeMessage } from '../../helpers/CodeMessage';

const initialForm = {
    nombre: '',    
    estado: '',
    localidad: '',
    direccion: '',
    pagina_web: '',
    telefono: '',
    email: '',
    fundacion: ''
};

const validateForm = (formulario) => {
    const errores = {};
    const validador = new Validator();    
    if(validador.validarCorreo(formulario.email)) {
        errores.email = validador.validarCorreo(formulario.email);
    }
    if(validador.validarNombre(formulario.nombre)) {
        errores.nombre = validador.validarNombre(formulario.nombre);
    }
    if(validador.validarDireccion(formulario.direccion)){
        errores.direccion = validador.validarDireccion(formulario.direccion);
    }
    if(validador.validarApellidoPaterno(formulario.apellido_paterno)) {
        errores.apellido_paterno = validador.validarApellidoPaterno(formulario.apellido_paterno);
    }
    if(validador.validarApellidoMaterno(formulario.apellido_materno)) {
        errores.apellido_materno = validador.validarApellidoMaterno(formulario.apellido_materno);
    }
    if(validador.validarTelefono(formulario.telefono)) {
        errores.telefono = validador.validarTelefono(formulario.telefono);
    }
    if(validador.validarCorreo(formulario.email)) {
        errores.email = validador.validarCorreo(formulario.email);
    }
    return errores;

};

let token = sessionStorage.getItem('token');
const ENDPOINT = 'refugios';

const FormularioRefugioRegistro = () => {
    const {form, error, loading, statusCode, response, handleChange, handleBlur, handleSubmit, bodyResponse} = useForm(initialForm, validateForm, ENDPOINT, sessionStorage.getItem('token'));

    useEffect(() => {
        if(response) {            
            if(statusCode >= 200 && statusCode < 400) {                        
                Swal.fire({
                    icon:'success',
                    title:codeMessage.refugio[statusCode]
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title:codeMessage.refugio[statusCode]
                });
            }            
        }
    }, [response]);

    return (
        <>
            <form className="form-refugio-registro" onSubmit={handleSubmit}>
                <div className="row nombre">
                    <label htmlFor="nombre">Nombre del refugio</label>
                    <input type="text" name="nombre" className = "input" placeholder="Escribe el nombre del refugio" onBlur={handleBlur} onChange={handleChange} value={form.nombre} required/>
                    {error.nombre && <em><small>{error.nombre}</small></em>}
                </div>
                <div className="row direccion">
                    <label htmlFor="direccion">Dirección del refugio</label>
                    <input type="text" name="direccion" className = "input" placeholder="Escribe la direccion del refugio" onBlur={handleBlur} onChange={handleChange} value={form.direccion} required/>
                    {error.direccion && <em><small>{error.direccion}</small></em>}
                </div>
                <div className="row telefono">
                    <label htmlFor="telefono">Telefono del refugio</label>
                    <input type="tel" name="telefono" className = "input" placeholder="Escribe el telefono del refugio" onBlur={handleBlur} onChange={handleChange} value={form.telefono}/>
                    {error.telefono && <em><small>{error.telefono}</small></em>}
                </div>
                <div className="row pagina-web">
                    <label htmlFor="pagina_web">Página web del refugio</label>
                    <input type="url" name="pagina_web" className = "input" placeholder="Escribe la pagina web del refugio" onBlur={handleBlur} onChange={handleChange} value={form.pagina_web}/>
                </div>
                <div className="row email">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" name="email" className = "input" placeholder="Escribe el correo electronico del refugio" onBlur={handleBlur} onChange={handleChange} value={form.email}/>
                    {error.email && <em><small>{error.email}</small></em>}
                </div>
                <div className="row fundacion">
                    <label htmlFor="fundacion">Fundación</label>
                    <input type="text" name="fundacion" className = "input" placeholder="Escribe el nombre de la fundacion" onBlur={handleBlur} onChange={handleChange} value={form.fundacion}/>                
                </div>                
                <SelectAnidados handleChange={handleChange} required/>
                <div className="row boton-registrar center">
                    <button type="submit" className="button-signup">Registrar</button>
                </div>
            </form>
            {loading && <Loader />}
        </>
    )
}

export default FormularioRefugioRegistro;
