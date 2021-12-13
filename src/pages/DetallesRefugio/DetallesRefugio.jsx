import React from 'react';

const DetallesRefugio = ({layoutPosition}) => {
    return (
        <article className={`detalles-refugio ${layoutPosition}`}>
            <header>
                <h2>Nombre refugio</h2><button>Editar</button>
            </header>
            <section className="informacion-refugio">
                <p>
                    <label htmlFor="direccion">Dirección</label>
                    <span>Av. Rio Verde #456</span>
                </p>
                <p>
                    <label htmlFor="estado">Estado</label>
                    <span>Veracruz</span>
                </p>
                <p>
                    <label htmlFor="localidad">Localidad</label>
                    <span>Veracruz</span>
                </p>
                <p>
                    <label htmlFor="email">Correo electronico</label>
                    <span>beethoven123@gmail.com</span>                    
                </p>
                <p>
                    <label htmlFor="pagina_web">Página web</label>
                    <span>https://www.figma.com/</span>
                </p>
                <img src="" alt="" srcset="" />
            </section>
            
        </article>
    )
}

export default DetallesRefugio;
