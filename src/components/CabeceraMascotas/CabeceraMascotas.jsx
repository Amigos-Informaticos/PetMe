import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import plusLogo from "../../assets/plus.png";
import searchLogo from "../../assets/search.png";
import "./CabeceraMascotas.css";

const CabeceraMascotas = ({ layoutPosition, titulo, mascotas, handleMascotas, handleUrl }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const { auth } = useContext(AuthContext);

  const handleChangeBusqueda = (event) => {
    setNombreMascota(event.target.value);
  };

  const handlePressEnter = (event) => {
    console.log(event);
    if (event.code === "Enter") {
      console.log("Buscando");
    }
  };

  const buscarMascotas = ({ target }) => {};
  return (
    <header className={`${layoutPosition} cabecera-mascotas`}>
      <h2>{titulo || "Mascotas"}</h2>
      {auth && (
        <Link to="/dar-en-adopcion" className="input button-dar-en-adopcion">
          Dar en adopción{" "}
          <img src={plusLogo} alt="plus" width="25px" height="25px" />
        </Link>
      )}
      <nav className="input buscador-mascotas">
        <input
          className="input-buscador-mascotas"
          type="search"
          name="search-mascotas"
          id="search-mascotas"
          placeholder="Buscar mascotas"
          value={nombreMascota}
          onChange={handleChangeBusqueda}
          onKeyPress={handlePressEnter}
        />
        <img
          src={searchLogo}
          alt="plus"
          width="25px"
          height="25px"
          onClick={buscarMascotas}
        />
      </nav>
      <nav className={`filtros-mascotas span-all`}>
          <button className="button button-filtro">Perros</button>
          <button className="button button-filtro">Gatos</button>
      </nav>
    </header>
  );
};

export default CabeceraMascotas;
