import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import './FormularioMascotaRegistro.css';

const initialFormMascotas = {
    nombre: '',
    sexo: '',
    especie: '',
    edad: '',
    tamanio: '',
    raza_aparente: '',
};

const validarFormulario = () => {
    const errores = {};
    return errores;
}

const FormularioMascotaRegistro = () => {    
    const {token} = useContext(AuthContext);
    const {form, error, loading, statusCode, response, handleChange, handleBlur, handleSubmit} = useForm(initialFormMascotas, validarFormulario, `mascotas`, token);
  return (
    <form class="form-registro-adoptable" onSubmit={handleSubmit}>
      <h4>Detalles de la mascota</h4>     
      <p className="row nombre-mascota">
        <label htmlFor="nombre">Nombre de la mascota</label>
        <input
          type="text"
          name="nombre"
          className="input"
          placeholder="Escribe el nombre de la mascota"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nombre}
          min="3"
          max="45"
          required
        />
        {error.nombre && (
          <em>
            <small>{error.nombre}</small>
          </em>
        )}
      </p>
      <p className="row descripcion">
        <label htmlFor="descripcion">Descripción de la mascota</label>
        <input
          type="text"
          name="descripcion"
          className="input"
          placeholder="Describa la mascota que desea dar en adopción"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.descripcion}          
          max="250"          
        />
        {error.descripcion && (
          <em>
            <small>{error.descripcion}</small>
          </em>
        )}
      </p>
      <p className="row raza-aparente">
        <label htmlFor="raza_aparente">Raza aparente</label>
        <input
          type="text"
          name="raza_aparente"
          className="input"
          placeholder="Escriba la raza aparente"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.raza_aparente}
          minLength="3"
          maxLength="50"        
        />
        {error.raza_aparente && (
          <em>
            <small>{error.raza_aparente}</small>
          </em>
        )}
      </p>
      <p className="row color-mascota">
        <label htmlFor="color">Color</label>
        <input
          type="text"
          name="color"
          className="input"
          placeholder="Describa el color(es) de la mascota"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.color}          
          minLength="3"
          maxLength="30"          
        />
        {error.color && (
          <em>
            <small>{error.color}</small>
          </em>
        )}
      </p>
      <p className="row edad-mascota">
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          name="edad"
          className="input"
          placeholder="Indique la edad de la mascota"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.edad}
        />
        {error.edad && (
          <em>
            <small>{error.edad}</small>
          </em>
        )}
      </p>   
      <p className="row sexo">
        <label htmlFor="sexo">Sexo</label>
        <p className="radio-container">
          <label htmlFor="sexo" className="content-input">
            Macho:{" "}
            <input
              type="radio"
              className="radio"
              name="sexo"
              checked={form.sexo === "1"}
              value="1"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="sexo" className="content-input">
            Hembra:
            <input
              type="radio"
              className="radio"
              name="sexo"
              checked={form.sexo === "0"}
              value="0"
              onChange={handleChange}
            />
          </label>
        </p>
      </p>
      <p className="row especie">
        <label htmlFor="especie">Especie</label>
        <p className="radio-container">
          <label htmlFor="especie" className="content-input">
            Gato:{" "}
            <input
              type="radio"
              className="radio"
              name="especie"
              checked={form.especie === "1"}
              value="1"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="especie" className="content-input">
            Perro:
            <input
              type="radio"
              className="radio"
              name="especie"
              checked={form.especie === "0"}
              value="0"
              onChange={handleChange}
            />
          </label>
        </p>
      </p>
      <h4>Información veterinaria</h4>
      <p className="row esterilizada">
        <label htmlFor="esterilizada">¿Está esterilizada?</label>
        <p className="radio-container">
          <label htmlFor="esterilizada" className="content-input">
            Sí:{" "}
            <input
              type="radio"
              className="radio"
              name="esterilizada"
              checked={form.esterilizada === "1"}
              value="true"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="esterilizada" className="content-input">
            No:
            <input
              type="radio"
              className="radio"
              name="esterilizada"
              checked={form.esterilizada === "0"}
              value="0"
              onChange={handleChange}
            />
          </label>
        </p>
      </p>
      <p className="row desparacitada">
        <label htmlFor="desparacitada">¿Está desparacitada?</label>
        <p className="radio-container">
          <label htmlFor="desparacitada" className="content-input">
            Sí:{" "}
            <input
              type="radio"
              className="radio"
              name="desparacitada"
              checked={form.desparacitada === "1"}
              value="true"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="desparacitada" className="content-input">
            No:
            <input
              type="radio"
              className="radio"
              name="desparacitada"
              checked={form.desparacitada === "0"}
              value="0"
              onChange={handleChange}
            />
          </label>
        </p>
      </p>
      <p className="row discapacitada">
        <label htmlFor="discapacitada">¿Está desparacitada?</label>
        <p className="radio-container">
          <label htmlFor="discapacitada" className="content-input">
            Sí:{" "}
            <input
              type="radio"
              className="radio"
              name="discapacitada"
              checked={form.discapacitada === "1"}
              value="true"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="discapacitada" className="content-input">
            No:
            <input
              type="radio"
              className="radio"
              name="discapacitada"
              checked={form.discapacitada === "0"}
              value="0"
              onChange={handleChange}
            />
          </label>
        </p>
      </p>
      <div className="button-container">
        <button type="submit" value="registrar" className="button-signup">
          Registrar
        </button>
      </div>
    </form>
  );
};

export default FormularioMascotaRegistro;
