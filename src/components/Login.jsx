import { useState } from "react";
import PropTypes from "prop-types";

export const Login = (props) => {
  const {
    informacion: { apodo, contrasenya },
    etapa,
    setEtapa,
  } = props;
  const [apodoLogin, setApodo] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);
  console.log(recordar, apodoLogin, passwordLogin);

  const verificar = () => {
    if (/* apodoLogin === apodo  */ /* && */ passwordLogin === contrasenya) {
      setEtapa(etapa + 1);
    } else {
      console.log("datos incorrectos");
    }
    console.log(passwordLogin, contrasenya);
  };

  if (etapa === 2) {
    return (
      <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
        <form
          className="row p-3 justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            verificar();
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
              onChange={(e) => setApodo(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check col-sm-12 text-right">
            <input
              className="form-check-input"
              type="checkbox"
              id="recordar"
              onChange={(e) => setRecordar(e.target.checked)}
            />
            <label className="form-check-label recordar" htmlFor="recordar">
              Recordar Contraseña?
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3 mr-3 col-sm-4"
            onClick={(e) => {
              e.preventDefault();
              setEtapa(etapa - 1);
            }}
          >
            Atras
          </button>
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
