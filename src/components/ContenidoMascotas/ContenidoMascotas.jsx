import React from "react";
import { useHistory } from "react-router";
import { Loader } from "../Loader";
import { Message } from "../Message";
import OverViewMascota from "../OverviewMascota/OverViewMascota";

const ContenidoMascotas = ({
  layoutPosition,
  mascotas,
  handleMascotas,
  loading,
}) => {
    const history = useHistory();
    const handleClickOverview = (event, id_mascota) => {
        history.push(`/mascotas/${id_mascota}`);
    }
  return (
    <section className={`${layoutPosition} contenido-mascotas`}>
      <div className={`grid-mascotas`}>
        {loading ? (
          <Loader className="span-all" />
        ) : mascotas.length !== 0 ? (
          mascotas.map((mascota, indice) => (
            <OverViewMascota
              id_mascota={mascota.id_mascota}
              key={`overview-mascota-${indice}`}           
              nombre={mascota.nombre}
              edad={mascota.edad}
              peso={mascota.peso}
              raza_aparente={mascota.raza_aparente}
              sexo={mascota.sexo}
              tamanio={mascota.tamanio}
              imagen={mascota.imagenes[0]}
              handleClickOverview={handleClickOverview}
            />
          ))
        ) : (
          <Message
            className="span-all"
            span="1/-1"
            msg="No se encontraron mascotas"
          />
        )}    
      </div>
    </section>
  );
};

export default ContenidoMascotas;
