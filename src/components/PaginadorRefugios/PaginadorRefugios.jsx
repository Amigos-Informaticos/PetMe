import React from "react";
import PropTypes from "prop-types";

const PaginadorRefugios = ({ pagina, handleAnterior, handleSiguiente }) => {
  return (
    <nav className="paginador-refugios">
      {pagina > 0 && <button onClick={handleAnterior}>Prev</button>}
      <button onClick={handleSiguiente}>Siguiente</button>
    </nav>
  );
};

PaginadorRefugios.propTypes = {
  pagina: PropTypes.number,
  handleAnterior: PropTypes.func,
  handleSiguiente: PropTypes.func,
};

export default PaginadorRefugios;
