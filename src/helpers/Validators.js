class Validator {
    regexCorreo = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    regexContrasenia = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    regexApellidoPaterno = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    regexApellidoMaterno = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    regexTelefono = /^\d{10}$/;


    validarCorreo(email = '') {
        let mensajeError = null;
        if(!email.trim()) {
            mensajeError = 'El campo email es requerido';
        } else if (!this.regexCorreo.test(email)) {
            mensajeError = 'Formato de email incorrecto';
        }
        return mensajeError;
    }

    validarNombre(nombre = '') {
        let mensajeError = null;
        if(!nombre.trim()) {
            mensajeError = "El campo nombre es requerido"
        } else if (!this.regexNombre.test(nombre)) {
            mensajeError = "El campo nombre solo acepta letras y espacios en blanco";
        }
        return mensajeError;
    }

    validarContrasenia(contrasenia = '') {
        let mensajeError = null;
        if(!contrasenia.trim()) {
            mensajeError = 'El campo contraseña es requerido';
        } else if (!this.regexContrasenia.test(contrasenia)) {
            mensajeError = 'Formato de contraseña incorrecto';
        }
        return mensajeError;
    }

    validarApellidoPaterno(apellidoPaterno = '') {
        let mensajeError = null;
        if(apellidoPaterno){
            if (!this.regexApellidoPaterno.test(apellidoPaterno)) {
                mensajeError = 'El campo apellido paterno solo acepta letras y espacios en blanco';
            }
        }
        return mensajeError;
    }

    validarApellidoMaterno(apellidoMaterno = '') {
        let mensajeError = null;
        if(apellidoMaterno){
            if (!this.regexApellidoMaterno.test(apellidoMaterno)) {
                mensajeError = 'El campo apellido materno solo acepta letras y espacios en blanco';
            }
        }
        return mensajeError;
    }

    validarDireccion(direccion) {
        let mensajeError = null;
        if(typeof direccicon === 'string') {
            if(!direccion.trim()) {
                mensajeError = 'El campo direccion no puede estar vacio';
            }        
        }
        return mensajeError;
    }

    validarTelefono(telefono = '') {
        let mensajeError = null;
        if(telefono){
            if (!this.regexTelefono.test(telefono)) {
                mensajeError = 'Formato de telefono incorrecto';
            }
        }
        return mensajeError;
    }
}
export default Validator;