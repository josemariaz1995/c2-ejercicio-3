export const Login = () => {
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form className="row p-3 justify-content-center">
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="apodoLog">
              Apodo
            </label>
          </div>
          <input className="form-control" type="text" id="apodoLog" />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="passwordLog">
              Contraseña
            </label>
          </div>
          <input className="form-control" type="password" id="passwordLog" />
        </div>
        <div className="form-check col-sm-12 text-right">
          <input className="form-check-input" type="checkbox" id="recordar" />
          <label className="form-check-label recordar" htmlFor="recordar">
            Recordar Contraseña?
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mr-3 col-sm-4">
          Atras
        </button>
        <button type="submit" className="btn btn-primary mt-3 col-sm-4">
          Iniciar Sessión
        </button>
      </form>
    </section>
  );
};
