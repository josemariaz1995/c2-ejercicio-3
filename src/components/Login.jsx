import { useState } from "react";
import PropTypes from "prop-types";

export const Login = (props) => {
  const {
    informacion,
    informacion: { apodo, contrasenya, email, anyo, nombre, apellidos },
    etapa,
    setEtapa,
    setRecordar,
    recordar,
  } = props;
  const [apodoLogin, setApodo] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const verificar = () => {
    if (apodoLogin === apodo && passwordLogin === contrasenya) {
      setEtapa(etapa + 1);
    } else {
      console.log("datos incorrectos");
    }
  };
  if (etapa === 2) {
    return (
      <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
        <form
          className="row p-3 justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            verificar();
            if (!recordar) {
              setPassword("");
            }
          }}
        >
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="apodoLog">
                Apodo
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              id="apodoLog"
              value={localStorage.getItem("user") !== null ? apodo : apodoLogin}
              onChange={(e) => setApodo(e.target.value)}
              required
            />
          </div>
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="passwordLog">
                Contraseña
              </label>
            </div>
            <input
              className="form-control"
              type="password"
              id="passwordLog"
              value={passwordLogin}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-check col-sm-12 text-right">
            <input
              className="form-check-input"
              type="checkbox"
              id="recordar"
              onChange={(e) => {
                setRecordar(e.target.checked);
                if (e.target.checked) {
                  localStorage.setItem("user", apodo);
                  localStorage.setItem("password", contrasenya);
                  localStorage.setItem("email", email);
                  localStorage.setItem("anyo", anyo);
                  localStorage.setItem("apellidos", apellidos);
                  localStorage.setItem("nombre", nombre);
                } else {
                  localStorage.clear();
                }
              }}
              checked={recordar}
            />
            <label className="form-check-label recordar" htmlFor="recordar">
              Recordar Contraseña?
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-3 col-sm-4">
            Iniciar Sessión
          </button>
        </form>
      </section>
    );
  }
  return "";
};
Login.protoTypes = {
  contrasenya: PropTypes.string.isRequired,
  apodo: PropTypes.string.isRequired,
};
Login.propTypes = {
  informacion: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    apodo: PropTypes.string.isRequired,
    contrasenya: PropTypes.string.isRequired,
    anyo: PropTypes.string.isRequired,
  }),
  etapa: PropTypes.number.isRequired,
  setEtapa: PropTypes.func.isRequired,
  setRecordar: PropTypes.func.isRequired,
};
