import React from "react";
import { useEffect } from "react";
import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router";
import { Loader } from "../Loader";
import { Message } from "../Message";
import OverViewRefugio from "../OverViewRefugio/OverViewRefugio";
import "./ContenidoRefugios.css";



const ContenidoRefugios = ({
    layoutPosition,
    refugios,
    handleRefugios,
    loading,
}) => {
    const history = useHistory();
    
    const handleClickOverview = (event, id_refugio) => {
        history.push(`/refugios/${id_refugio}`);
    }

    return (
    <section className={`${layoutPosition} contenido-refugios`}>
      <div className={`grid-refugios`}>
        {loading ? (
          <Loader className="span-all" />
        ) : refugios.length !== 0 ? (
          refugios.map((refugio, indice) => (
            <OverViewRefugio
              id_refugio={refugio.id_refugio}
              key={`overview-refugio-${indice}`}
              titulo={refugio.nombre}
              direccion={refugio.direccion}
              imagen={refugio.imagen}
              estado={refugio.estado}
              localidad={refugio.localidad}
              telefono={refugio.telefono}
              handleClickOverview={handleClickOverview}
            />
          ))
        ) : (
          <Message
            className="span-all"
            span="1/-1"
            msg="No se encontraron refugios"
          />
        )}
      </div>
    </section>
  );
};

export default ContenidoRefugios;
