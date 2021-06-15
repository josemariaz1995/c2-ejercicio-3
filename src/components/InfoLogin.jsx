import { checkPropTypes } from "prop-types";
import { useState } from "react";

export const InfoLogin = (props) => {
  const { etapa, setEtapa, setInformacion } = props;
  const [contrasenya, setContrasenya] = useState("");
  const [repetirContrasenya, setRepetirContrasenya] = useState("");
  const [apodoLogin, setApodo] = useState("");
  const comprobarDatos = (password, nick) => {
    setInformacion((info) => {
      return {
        ...info,
        apodo: nick,
        contrasenya: password,
      };
    });
    setEtapa(etapa + 1);
  };

  if (etapa === 1) {
    return (
      <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
        <form
          className="row p-3 justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            if (contrasenya === repetirContrasenya) {
              return comprobarDatos(contrasenya, apodoLogin);
            }
          }}
        >
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="apodo">
                Apodo
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              id="apodo"
              value={apodoLogin}
              onChange={(e) => setApodo(e.target.value)}
            />
          </div>

          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="passwordRegistro">
                Contraseña
              </label>
            </div>
            <input
              className="form-control"
              type="password"
              id="passwordRegistro"
              value={contrasenya}
              onChange={(e) => setContrasenya(e.target.value)}
            />
          </div>
          <div className="input-group col-sm-12 mb-4">
            <div className="input-group-prepend ">
              <label className="input-group-text" htmlFor="confirm">
                Confirmar
              </label>
            </div>
            <input
              className="form-control"
              type="password"
              id="confirm"
              value={repetirContrasenya}
              onChange={(e) => setRepetirContrasenya(e.target.value)}
            />
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
            Registrar
          </button>
        </form>
      </section>
    );
  }
  return "";
};
