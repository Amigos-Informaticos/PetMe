const codeMessage = {
    login: {
        '200': 'Bienvenido/a',        
        '404': 'Usuario no registrado',
    },
    signup: {
        '201': 'Registro exitoso',
        '409': 'Usuario ya registrado',

    },
    refugio: {
        '201':'Refugio registrado con exito',
        '400': 'Datos incorrectos',
        '409': 'Refugio ya registrado',
        '419': 'Sesión caducada'
    }
}

export {codeMessage};