export const InfoLogin = () => {
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form className="row p-3 justify-content-center">
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="apodo">
              Apodo
            </label>
          </div>
          <input className="form-control" type="text" id="apodo" />
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
          />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="confirm">
              Confirmar
            </label>
          </div>
          <input className="form-control" type="password" id="confirm" />
        </div>
        <button type="submit" className="btn btn-primary mt-3 mr-3 col-sm-4">
          Atras
        </button>
        <button type="submit" className="btn btn-primary mt-3 col-sm-4">
          Registrar
        </button>
      </form>
    </section>
  );
};
