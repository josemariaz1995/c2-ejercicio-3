export const InfoRegistro = () => {
  return (
    <section className="container formulario-seccion shadow-sm  mb-5 bg-white rounded ">
      <form className="row p-3 justify-content-center">
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="nombre">
              Nombre
            </label>
          </div>
          <input className="form-control" type="text" id="nombre" />
        </div>

        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="apellido">
              Apellidos
            </label>
          </div>
          <input className="form-control" type="text" id="apellido" />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="fecha">
              Nacimiento
            </label>
          </div>
          <input className="form-control" type="date" id="fecha" />
        </div>
        <div className="input-group col-sm-12 mb-4">
          <div className="input-group-prepend ">
            <label className="input-group-text" htmlFor="email">
              Email
            </label>
          </div>
          <input className="form-control" type="email" id="email" />
        </div>
        <button type="submit" className="btn btn-primary mt-3 col-sm-8">
          Siguiente
        </button>
      </form>
    </section>
  );
};
