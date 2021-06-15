import { PropTypes } from "prop-types";
import { useState } from "react";
export const InfoRegistro = (props) => {
  const { setInformacion, etapa, setEtapa } = props;
  const registrarDatos = (nombre, apellido, email, anyo) => {
    setInformacion((informacion) => {
      return {
        ...informacion,
        nombre: nombre,
        apellidos: apellido,
        email: email,
        anyo: anyo.split("-").reverse().join("/"),
      };
    });
    setEtapa(etapa + 1);
  };
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [anyo, setAnyo] = useState("");
  if (etapa === 0) {
    return (
      <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
        <form
          className="row p-3 justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            registrarDatos(nombre, apellido, email, anyo);
          }}
        >
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="nombre">
                Nombre
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="apellido">
                Apellidos
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="fecha">
                Nacimiento
              </label>
            </div>
            <input
              className="form-control"
              type="date"
              id="fecha"
              value={anyo}
              onChange={(e) => setAnyo(e.target.value)}
              required
            />
          </div>
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="email">
                Email
              </label>
            </div>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 col-sm-8">
            Siguiente
          </button>
        </form>
      </section>
    );
  }
  return "";
};

InfoRegistro.propTypes = {
  setInformacion: PropTypes.func,
  etapa: PropTypes.number.isRequired,
  setEtapa: PropTypes.func.isRequired,
};
