import React from 'react';

const PaginadorRefugios = ({handleAnterior, handleSiguiente}) => {
    return (
        <nav className="paginador-refugios">
            <button onClick={handleAnterior}>Prev</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </nav>
    )
}

export default PaginadorRefugios;
